/*
 * Tencent is pleased to support the open source community by making BK-JOB蓝鲸智云作业平台 available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * BK-JOB蓝鲸智云作业平台 is licensed under the MIT License.
 *
 * License for BK-JOB蓝鲸智云作业平台:
 * --------------------------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

package com.tencent.bk.job.execute.engine.listener;

import com.tencent.bk.job.execute.common.constants.RunStatusEnum;
import com.tencent.bk.job.execute.config.StorageSystemConfig;
import com.tencent.bk.job.execute.engine.consts.AgentTaskStatusEnum;
import com.tencent.bk.job.execute.engine.consts.FileDirTypeConf;
import com.tencent.bk.job.execute.engine.evict.TaskEvictPolicyExecutor;
import com.tencent.bk.job.execute.engine.exception.ExceptionStatusManager;
import com.tencent.bk.job.execute.engine.listener.event.ResultHandleTaskResumeEvent;
import com.tencent.bk.job.execute.engine.listener.event.TaskExecuteMQEventDispatcher;
import com.tencent.bk.job.execute.engine.message.TaskResultHandleResumeProcessor;
import com.tencent.bk.job.execute.engine.model.FileDest;
import com.tencent.bk.job.execute.engine.model.JobFile;
import com.tencent.bk.job.execute.engine.model.TaskVariableDTO;
import com.tencent.bk.job.execute.engine.model.TaskVariablesAnalyzeResult;
import com.tencent.bk.job.execute.engine.result.FileResultHandleTask;
import com.tencent.bk.job.execute.engine.result.ResultHandleManager;
import com.tencent.bk.job.execute.engine.result.ScriptResultHandleTask;
import com.tencent.bk.job.execute.engine.result.ha.ResultHandleTaskKeepaliveManager;
import com.tencent.bk.job.execute.engine.util.FilePathUtils;
import com.tencent.bk.job.execute.engine.util.JobSrcFileUtils;
import com.tencent.bk.job.execute.engine.util.NFSUtils;
import com.tencent.bk.job.execute.model.AgentTaskDTO;
import com.tencent.bk.job.execute.model.GseTaskDTO;
import com.tencent.bk.job.execute.model.StepInstanceDTO;
import com.tencent.bk.job.execute.model.TaskInstanceDTO;
import com.tencent.bk.job.execute.service.AgentService;
import com.tencent.bk.job.execute.service.FileAgentTaskService;
import com.tencent.bk.job.execute.service.GseTaskService;
import com.tencent.bk.job.execute.service.LogService;
import com.tencent.bk.job.execute.service.ScriptAgentTaskService;
import com.tencent.bk.job.execute.service.StepInstanceService;
import com.tencent.bk.job.execute.service.StepInstanceVariableValueService;
import com.tencent.bk.job.execute.service.TaskInstanceService;
import com.tencent.bk.job.execute.service.TaskInstanceVariableService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * 执行引擎事件处理-任务恢复
 */
@Component
@EnableBinding({TaskResultHandleResumeProcessor.class})
@Slf4j
public class ResultHandleResumeListener {
    private final TaskInstanceService taskInstanceService;

    private final ResultHandleManager resultHandleManager;

    private final TaskInstanceVariableService taskInstanceVariableService;

    private final GseTaskService gseTaskService;

    private final StorageSystemConfig storageSystemConfig;

    private final AgentService agentService;

    private final LogService logService;

    private final StepInstanceVariableValueService stepInstanceVariableValueService;

    private final TaskExecuteMQEventDispatcher taskExecuteMQEventDispatcher;

    private final ResultHandleTaskKeepaliveManager resultHandleTaskKeepaliveManager;

    private final ExceptionStatusManager exceptionStatusManager;

    private final TaskEvictPolicyExecutor taskEvictPolicyExecutor;

    private final ScriptAgentTaskService scriptAgentTaskService;

    private final FileAgentTaskService fileAgentTaskService;

    private final StepInstanceService stepInstanceService;

    @Autowired
    public ResultHandleResumeListener(TaskInstanceService taskInstanceService,
                                      ResultHandleManager resultHandleManager,
                                      TaskInstanceVariableService taskInstanceVariableService,
                                      GseTaskService gseTaskService,
                                      StorageSystemConfig storageSystemConfig,
                                      AgentService agentService,
                                      LogService logService,
                                      StepInstanceVariableValueService stepInstanceVariableValueService,
                                      TaskExecuteMQEventDispatcher taskExecuteMQEventDispatcher,
                                      ResultHandleTaskKeepaliveManager resultHandleTaskKeepaliveManager,
                                      ExceptionStatusManager exceptionStatusManager,
                                      TaskEvictPolicyExecutor taskEvictPolicyExecutor,
                                      ScriptAgentTaskService scriptAgentTaskService,
                                      FileAgentTaskService fileAgentTaskService,
                                      StepInstanceService stepInstanceService) {
        this.taskInstanceService = taskInstanceService;
        this.resultHandleManager = resultHandleManager;
        this.taskInstanceVariableService = taskInstanceVariableService;
        this.gseTaskService = gseTaskService;
        this.storageSystemConfig = storageSystemConfig;
        this.agentService = agentService;
        this.logService = logService;
        this.stepInstanceVariableValueService = stepInstanceVariableValueService;
        this.taskExecuteMQEventDispatcher = taskExecuteMQEventDispatcher;
        this.resultHandleTaskKeepaliveManager = resultHandleTaskKeepaliveManager;
        this.exceptionStatusManager = exceptionStatusManager;
        this.taskEvictPolicyExecutor = taskEvictPolicyExecutor;
        this.scriptAgentTaskService = scriptAgentTaskService;
        this.fileAgentTaskService = fileAgentTaskService;
        this.stepInstanceService = stepInstanceService;
    }


    /**
     * 恢复被中断的作业结果处理任务
     */
    @StreamListener(TaskResultHandleResumeProcessor.INPUT)
    public void handleEvent(ResultHandleTaskResumeEvent event) {
        log.info("Receive gse task result handle task resume event: {}", event);
        GseTaskDTO gseTask;
        if (event.getGseTaskId() != null) {
            gseTask = gseTaskService.getGseTask(event.getGseTaskId());
        } else {
            // 兼容使用stepInstance+executeCount+batch来唯一指定GseTask的场景
            gseTask = gseTaskService.getGseTask(event.getStepInstanceId(), event.getExecuteCount(), event.getBatch());
        }

        long stepInstanceId = gseTask.getStepInstanceId();

        String requestId = StringUtils.isNotEmpty(event.getRequestId()) ? event.getRequestId()
            : UUID.randomUUID().toString();
        try {
            StepInstanceDTO stepInstance = taskInstanceService.getStepInstanceDetail(stepInstanceId);
            TaskInstanceDTO taskInstance = taskInstanceService.getTaskInstance(stepInstance.getTaskInstanceId());

            if (!checkIsTaskResumeable(stepInstance, gseTask)) {
                log.warn("Task can not resume, stepStatus: {}, gseTaskStatus: {}",
                    stepInstance.getStatus(), gseTask.getStatus());
                return;
            }

            List<TaskVariableDTO> taskVariables =
                taskInstanceVariableService.getByTaskInstanceId(stepInstance.getTaskInstanceId());
            TaskVariablesAnalyzeResult taskVariablesAnalyzeResult = new TaskVariablesAnalyzeResult(taskVariables);

            if (stepInstance.isScriptStep()) {
                resumeScriptTask(taskInstance, stepInstance, taskVariablesAnalyzeResult, gseTask, requestId);
            } else if (stepInstance.isFileStep()) {
                resumeFileTask(taskInstance, stepInstance, taskVariablesAnalyzeResult, gseTask, requestId);
            } else {
                log.error("Not support resume step type! stepType: {}", stepInstance.getExecuteType());
            }
        } catch (Exception e) {
            String errorMsg = "Handling task control message error,stepInstanceId=" + stepInstanceId;
            log.error(errorMsg, e);
        }
    }

    private void resumeScriptTask(TaskInstanceDTO taskInstance,
                                  StepInstanceDTO stepInstance,
                                  TaskVariablesAnalyzeResult taskVariablesAnalyzeResult,
                                  GseTaskDTO gseTask,
                                  String requestId) {
        Map<String, AgentTaskDTO> agentTaskMap = new HashMap<>();
        List<AgentTaskDTO> agentTasks;
        if (gseTask.getId() != null) {
            agentTasks = scriptAgentTaskService.listAgentTasksByGseTaskId(gseTask.getId());
        } else {
            // TMP: 兼容旧的调度任务，发布完成后删除
            agentTasks = scriptAgentTaskService.listAgentTasks(stepInstance.getId(),
                stepInstance.getExecuteCount(), null);
            // 仅包含本次执行的主机
            agentTasks = agentTasks.stream()
                .filter(agentTask -> AgentTaskStatusEnum.LAST_SUCCESS != agentTask.getStatus())
                .collect(Collectors.toList());
        }
        agentTasks.forEach(agentTask -> agentTaskMap.put(agentTask.getAgentId(), agentTask));

        ScriptResultHandleTask scriptResultHandleTask = new ScriptResultHandleTask(
            taskInstanceService,
            gseTaskService,
            logService,
            taskInstanceVariableService,
            stepInstanceVariableValueService,
            taskExecuteMQEventDispatcher,
            resultHandleTaskKeepaliveManager,
            exceptionStatusManager,
            taskEvictPolicyExecutor,
            scriptAgentTaskService,
            stepInstanceService,
            taskInstance,
            stepInstance,
            taskVariablesAnalyzeResult,
            agentTaskMap,
            gseTask,
            requestId);
        resultHandleManager.handleDeliveredTask(scriptResultHandleTask);
    }

    private void resumeFileTask(TaskInstanceDTO taskInstance,
                                StepInstanceDTO stepInstance,
                                TaskVariablesAnalyzeResult taskVariablesAnalyzeResult,
                                GseTaskDTO gseTask,
                                String requestId) {
        Set<JobFile> sendFiles = JobSrcFileUtils.parseSendFileList(stepInstance,
            agentService.getLocalAgentHost(),
            storageSystemConfig.getJobStorageRootPath());
        String targetDir = FilePathUtils.standardizedDirPath(stepInstance.getResolvedFileTargetPath());
        Map<String, FileDest> srcAndDestMap = JobSrcFileUtils.buildSourceDestPathMapping(
            sendFiles, targetDir, stepInstance.getFileTargetName());
        Map<String, String> sourceDestPathMap = buildSourceDestPathMap(srcAndDestMap);
        // 初始化显示名称映射Map
        Map<String, String> sourceFileDisplayMap = JobSrcFileUtils.buildSourceFileDisplayMapping(sendFiles,
            NFSUtils.getFileDir(storageSystemConfig.getJobStorageRootPath(), FileDirTypeConf.UPLOAD_FILE_DIR));

        Map<String, AgentTaskDTO> sourceAgentTaskMap = new HashMap<>();
        Map<String, AgentTaskDTO> targetAgentTaskMap = new HashMap<>();
        List<AgentTaskDTO> agentTasks;
        if (gseTask.getId() != null) {
            agentTasks = fileAgentTaskService.listAgentTasksByGseTaskId(gseTask.getId());
        } else {
            // TMP: 兼容旧的调度任务，发布完成后删除
            agentTasks = fileAgentTaskService.listAgentTasks(stepInstance.getId(),
                stepInstance.getExecuteCount(), null);
            // 仅包含本次执行的主机
            agentTasks = agentTasks.stream()
                .filter(agentTask -> AgentTaskStatusEnum.LAST_SUCCESS != agentTask.getStatus())
                .collect(Collectors.toList());
        }
        agentTasks.forEach(agentTask -> {
            if (agentTask.isTarget()) {
                targetAgentTaskMap.put(agentTask.getAgentId(), agentTask);
            } else {
                sourceAgentTaskMap.put(agentTask.getAgentId(), agentTask);
            }
        });

        FileResultHandleTask fileResultHandleTask = new FileResultHandleTask(
            taskInstanceService,
            gseTaskService,
            logService,
            taskInstanceVariableService,
            stepInstanceVariableValueService,
            taskExecuteMQEventDispatcher,
            resultHandleTaskKeepaliveManager,
            exceptionStatusManager,
            taskEvictPolicyExecutor,
            fileAgentTaskService,
            stepInstanceService,
            taskInstance,
            stepInstance,
            taskVariablesAnalyzeResult,
            targetAgentTaskMap,
            sourceAgentTaskMap,
            gseTask,
            sendFiles,
            storageSystemConfig.getJobStorageRootPath(),
            sourceDestPathMap,
            sourceFileDisplayMap,
            requestId);
        resultHandleManager.handleDeliveredTask(fileResultHandleTask);
    }

    private Map<String, String> buildSourceDestPathMap(Map<String, FileDest> srcAndDestMap) {
        Map<String, String> sourceDestPathMap = new HashMap<>();
        srcAndDestMap.forEach((fileKey, dest) -> sourceDestPathMap.put(fileKey, dest.getDestPath()));
        return sourceDestPathMap;
    }

    private boolean checkIsTaskResumeable(StepInstanceDTO stepInstance, GseTaskDTO gseTask) {
        RunStatusEnum stepStatus = RunStatusEnum.valueOf(stepInstance.getStatus());
        RunStatusEnum gseTaskStatus = RunStatusEnum.valueOf(gseTask.getStatus());
        return (stepStatus == RunStatusEnum.WAITING_USER || stepStatus == RunStatusEnum.RUNNING
            || stepStatus == RunStatusEnum.STOPPING) && (gseTaskStatus == RunStatusEnum.WAITING_USER
            || gseTaskStatus == RunStatusEnum.RUNNING || gseTaskStatus == RunStatusEnum.STOPPING);
    }
}
