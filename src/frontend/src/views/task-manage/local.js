/*
 * Tencent is pleased to support the open source community by making BK-JOB蓝鲸智云作业平台 available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * BK-JOB蓝鲸智云作业平台 is licensed under the MIT License.
 *
 * License for BK-JOB蓝鲸智云作业平台:
 *
 * ---------------------------------------------------
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

/* eslint-disable max-len */
export default {
    namespace: 'template',
    message: {
        变量类型: 'Type',
        变量名称: 'Name',
        变量描述: 'Description',
        赋值可变: 'Value is changeable',
        必填: 'Is Required',
        执行时必填: 'Is Required',
        初始值: 'Default Value',
        选择主机: 'Select Hosts',
        清空: 'Clear',
        字符串: 'String',
        命名空间: 'Namespace',
        主机列表: 'Host',
        密文: 'Ciphertext',
        '变量名仅支持大小写英文字母或下划线 [必填]': 'Start with lowercase or _ , followed by lowercase / numbers / _ or -',
        '这里可以备注变量的用途、使用说明等信息 [可选]': 'Type the usage description of the variable here...',
        '（必填变量必须设置初始值）': '(If required, default value must be set up.)',
        变量名称必填: 'Variable name is required',
        '变量名称已存在，请重新输入': 'Name already exist, please try another one...',
        初始值必填: 'Default Value is required',
        '普通的字符串变量，可跨主机、跨步骤使用': 'Ordinary string variable, can be used across hosts and steps',
        '同一主机对象的共享变量，无法跨主机使用': 'Shared variable of same host, but cannot be used across hosts',
        '通过拓扑、动态分组或属性筛选的主机对象': 'Host variable, filtered by topology, dynamic group or host attr.',
        '经过加密处理的变量，不会以明文形式外显': 'Encrypted variable, more safety, will not be displayed in Plaintext',
        '在步骤参数或脚本内使用 ${变量名} 即可获取到变量值': 'Variable usage method ${xxxx}',
        '请输入变量的初始值 [可选]': 'Set default value of this variable [optional]',
        变量的值在执行中可变: 'Means this variable\'s value is changeable during task running',
        查看全局变量: 'Variable Details',
        编辑全局变量: 'Edit Variable',
        新建全局变量: 'New Variable',
        提交: 'Commit',
        保存: 'Save',
        '确定删除该全局变量？': 'Are you sure to delete it?',
        '若该变量被步骤引用，请及时检查并更新步骤设置': 'If this variable is referenced by the step, please check and update the setting in time',
        '推荐按步骤实际处理的场景行为来取名...': 'Name it as actual use scenario [Recommended]...',
        确认人: 'Confirmer',
        输入确认人: 'Type the confirmer name...',
        通知方式: 'Notify by',
        全部: 'All',
        确认描述: 'Description',
        确认人必填: 'Confirmer is required',
        步骤人工确认: 'ConfirmationStep',
        上传限速: 'Upload Speed Limit',
        下载限速: 'Download Speed Limit',
        文件来源: 'Source',
        传输目标: 'Destination',
        步骤分发文件: 'FileTransferStep',
        您有未保存的源文件: 'Some source file not save yet',
        继续提交: 'Commit',
        去保存: 'Save',
        步骤执行脚本: 'ScriptStep',
        步骤类型: 'Type',
        执行脚本: 'Script Execution',
        分发文件: 'File Transfer',
        人工确认: 'Confirmation',
        关闭: 'Close',
        全局变量: {
            label: 'Global Variables',
            tab: 'Global Var.',
        },
        已选择: 'Seleted',
        个本地文件: 'Local file',
        个服务器文件: 'Remote file',
        个文件源文件: 'Source file',
        文件路径: 'FILEPATH',
        服务器列表: 'HOSTS',
        'Agent 状态': 'AGENT STATUS',
        服务器账号: 'ACCOUNT',
        '确认人：': 'Confirmer: ',
        '通知方式：': 'Notify by: ',
        '确认描述：': 'Description: ',
        '超时时长：': 'Timeout: ',
        '错误处理：': 'Error Ignore: ',
        '上传限速：': 'Upload Speed Limit: ',
        '下载限速：': 'Download Speed Limit: ',
        '文件来源：': 'Source: ',
        '目标路径：': 'DST Path: ',
        '重名处理：': 'Duplication: ',
        '执行帐号：': 'Account: ',
        '执行目标：': 'Host: ',
        '脚本来源：': 'From: ',
        '脚本引用：': 'Quote From: ',
        去更新: 'Update Now',
        '脚本内容：': 'Contents: ',
        '脚本参数：': 'Params: ',
        '执行账号：': 'Account: ',
        执行目标: 'Host',
        '步骤类型：': 'Type: ',
        '步骤名称：': 'Name: ',
        查看作业步骤: 'Step Details',
        新建作业步骤: 'New Step',
        编辑作业步骤: 'Edit Step',
        '确定删除该作业步骤？': 'Are you sure to delete this step?',
        '调试方案的特殊性：不可删除、始终与作业模板同步、不能被API调用、只能在作业平台使用': 'Debug Mode: Cannot be deleted, always synchronized with the template, cannot be called by API, and can only be used on JOB WebUI.',
        执行步骤: 'Steps',
        取消: 'Cancel',
        执行步骤必填: 'Select at least one step',
        操作成功: 'Save Successful',
        执行成功: 'Launch Successful',
        '确认离开当前页？': 'Are you sure to leave now?',
        离开将会导致未保存信息丢失: 'Your changes will be lost if you close without saving.',
        '执行步骤：': 'Steps: ',
        去执行: 'Launch',
        编辑: 'Edit',
        '确认执行？': 'Are you sure to launch now?',
        '未设置全局变量，点击确认将直接执行。': 'Global Variable is not set, If confirmed will launch directly.',
        全部作业: 'All',
        标签名不可为空: 'Tag name is required',
        '标签名已存在，请重新输入': 'Tag name already exist, please try another one...',
        文件加密密码: 'Encrypte Code',
        文件有效期: 'Valid of Days',
        请输入: 'Please type ...',
        天: 'Day',
        月: 'Month',
        年: 'Year',
        '由 6-8 位字符构成': 'Composed of at least 6 to 8 letters',
        '由英文字母、数字和特殊符号～!@#$%^()_-+=构成': 'Composed of letters, numbers and symbol(～!@#$%^()_-+=)',
        永久: 'PERM.',
        自定义: 'Custom',
        '1 天': '1 Day',
        '3 天': '3 Days',
        '7 天': '7 Days',
        '支持扩展名: job.rar.zip': 'Extensions: .rar / .zip',
        作业模板名称: 'TEMPLATE NAME',
        '作业模板 ID': 'TEMPLATE ID',
        状态: 'STATUS',
        新建: 'New',
        导入: 'Import',
        批量: 'Multi.',
        导出: 'Export',
        管理标签: 'Tag Manage',
        '输入 作业模板名、标签名 或 更新人 进行搜索...': 'Search by Template Name / Tag / Last Modified By...',
        我的作业: 'Mine',
        更新时间: 'LAST MODIFIED ON',
        操作: 'ACTIONS',
        调试: 'Debug',
        '确定删除该作业？': 'Are you sure to delete it?',
        '注意！模板下关联的所有执行方案也将被清除': 'Caution: Those plans associated with the template will also be deleted.',
        删除: 'Delete',
        导入作业模板: 'Job Template Import',
        导出设置: 'Settings',
        作业模板名: 'Template Name',
        标签名: 'Tags',
        删除模板成功: 'Template has been deleted.',
        收藏成功: 'Favorite Added',
        取消收藏成功: 'Favorite canceled',
        新建执行方案: 'New Plan',
        方案名称: 'Name',
        '推荐按照该执行方案提供的使用场景来取名...': 'Name it as actual use scenario [Recommended]...',
        重置: 'Reset',
        方案名称必填: 'Plan name is required',
        '方案名称已存在，请重新输入': 'Plan name already exist, please try another one...',
        变量值: 'Value',
        去同步: 'Sync',
        '确定删除该执行方案？': 'Are you sure to delete it?',
        '若已设置了定时任务，需要先删除才能操作': 'If the plan is related to cron, you need to delete it before you can operate.',
        编辑执行方案: 'Edit Plan',
        关联了定时任务: 'Related to cron',
        未同步: 'Not synchronized',
        执行: 'Launch',
        无差异: 'No Difference',
        显示差异: 'Show Difference',
        个节点: 'node(s)',
        台主机: 'host(s)',
        个主机: 'host(s)',
        个分组: 'group(s)',
        查看脚本: 'View Details',
        同步前: 'Before Synchronization',
        同步后: 'After Synchronization',
        '变量类型：': 'Type: ',
        '变量名称：': 'Name: ',
        '变量值：': 'Value: ',
        '初始值：': 'Default: ',
        '变量描述：': 'Description: ',
        '赋值可变：': 'Value is changeable: ',
        '必填：': 'Is Required: ',
        '同步执行方案需要重新确认定时任务的全局变量，不使用的定时任务可以直接停用。': 'The synchronous operation needs to reconfirm the global variables of the related Crons.',
        的全局变量: 'Variables confirm',
        已停用: 'OFF',
        已确认: 'DONE',
        待确认: 'AWAIT',
        无关联的全局变量: 'There\'s no related Global Variables.',
        已直接确认: 'DONE',
        确认: 'Confirm',
        定时任务确认成功: 'Cron has been confirmed.',
        暂无关联的定时任务: 'There\'s no related Cron task.',
        下一步: 'Next',
        上一步: 'Previous',
        '是否确认同步？': 'Are you sure to sync?',
        关联定时任务的调整将立即生效: 'The adjustment of the associated Crons will update immediately.',
        立即同步: 'Sync Now',
        有定时任务还未确认: 'Some cron not confirm yet.',
        执行方案同步失败: 'Sync Failed',
        同步成功: 'Synchronized successfully',
        定时任务更新失败: 'Crons update failed',
        '模板名称：': 'Name: ',
        '场景标签：': 'Tags: ',
        '模板描述：': 'Desc: ',
        '全局变量：': 'Global Variable: ',
        '作业步骤：': 'Job Step: ',
        选择方案: 'Plans',
        模板名称必填: 'Template name is required',
        '模板名称已存在，请重新输入': 'Template name is already exist, please try another one...',
        '确定删除该作业模板？': 'Are you sure to delete it?',
        '模板下关联的所有执行方案也将被删除，请谨慎操作！': 'Caution! Related job plans will also be deleted.',
        收起更多设置: 'Hide Details',
        展开更多设置: 'More Details',
        '对作业模板的编辑不会直接作用于执行方案，需从执行方案处同步。': 'The change of the Job Template will not directly affect the Plans, it needs to be synchronized by yourself.',
        输入作业模板名称: 'Type the name of your Job Template...',
        标签对资源的分类管理有很大帮助: 'Select or type any tag you want...',
        模板描述: 'Description',
        '填写该模板的功能介绍等详细描述...': 'Type the usage scenario description of this job template here...',
        作业步骤必填: 'Job steps is required',
        目标服务器: 'Hosts',
        服务器文件: 'Remote File',
        步骤: 'Step',
        中: '',
        变量: 'Variable',
        '变量被删除，请重新设置': 'Variable has been deleted, try to reset another one.',
        去设置: 'Go To',
        '还差一步「 设置执行方案」，即可执行作业': 'One step away from "Set Job Plan" to complete Job configuration.',
        设置方案: 'Set Job Plan',
        返回作业列表: 'Back To List',
        作业创建成功: 'Successful',
        编辑保存成功: 'Successful',
        '可以通过 “立即同步” 入口前往更新所有执行方案': 'Click "Sync Now" to update all Plans of this Job Template',
        继续编辑: 'Keep Editing',
        查看方案: 'View Plans',
        '模板名已存在，请重新输入': 'Template name is already exist, please try another one...',
        未分类: 'Non-Tag',
        待更新: 'Pending Update',
        '传输模式：': 'Mode: ',
        差异总览: 'Overview of differences',
        差异明细: 'Difference Details',
        确认定时任务: 'Crons Confirmation',
        全局变量的初始值不会同步到执行方案: 'Global variable\'s default value will not sync to Job Plan',
        模板名称: 'Name',
        数组: 'Array',
        数组类型: 'Array Type',
        关联数组: 'Associative',
        索引数组: 'Indexed',
        'Array 格式的字符串，支持关联或索引数组': 'An array is a data structure that contains a group of elements',
        标签名更新成功: 'Tag name has been modified',
        '请输入标签名...': 'Please input tag name...',
        基本信息: 'Information',
        克隆: 'Clone',
        克隆步骤: 'Clone Step',
        '确定删除该步骤？': 'Are  you sure to delete it?',
        '删除之后不可恢复，请谨慎操作！': 'Caution! It cannot be restored after deletion.',
        执行方案: {
            label: 'Plans',
            colHead: 'PLAN NAME',
        },
        作业步骤: {
            label: 'Steps',
            add: 'New Steps',
        },
        场景标签: {
            label: 'Tags',
            colHead: 'TAGS',
        },
        更新人: {
            label: 'Last Modify By',
            colHead: 'LAST MODIFIED BY',
        },
        版本对比: 'Diff',
        '模板中包含密文变量，请重新设置值': 'Template contains ciphertext variable, please reset the value',
        '“密文”类型的变量经过特殊加密处理，为避免信息泄露，克隆后初始值不会还原，需用户重新设置。': 'Variable of the "Ciphertext" type are specially encrypted. To protect information security, the default value will not be restored after cloning and need to be reset by yourself.',
        我知道了: 'Got it',
        '仅作用于创建执行方案时的初始变量值，后续更改不会同步到执行方案': '',
        创建人: 'CREATED BY',
        创建时间: 'CREATED ON',
        共有: '',
        共: '',
        '个步骤，': 'steps total, ',
        定时: 'Crons',
        上一次任务还未完成: 'Job export not finished yet',
        '您上一次的任务还在后台运行中，请先等待完成后再发起新的任务。': 'Your last export is still running, please wait for it to complete before launching a new task.',
        查看: 'Details',
        返回: 'Back',
        脚本详情: 'Script Details',
        当前已选中: '',
        个: {
            select: 'selected.',
            total: 'totals',
        },
        执行方案名称: 'JOB PLAN NAME',
        作业模板: 'JOB TEMPLATE',
        关联定时任务: 'RELATED CRON(s)',
        批量同步: 'Sync',
        我的方案: 'Mine',
        全部确认: 'All Confirm',
        查看差异: 'Diff',
        所属作业模板: 'JOB TEMPLATE',
        请选择作业模板: 'Please choose job template',
        选择要调试的步骤: 'Choose your debug steps',
        取消全选: 'Unselect All',
        全选: 'Select All',
        另存为: 'Save As',
        选择执行步骤: 'Steps of the plan',
        ID只支持数字: 'ID is only allow numbers',
        '输入 ID、执行方案名、作业模板名、更新人 或 创建人 进行搜索...': 'Search by ID / Plan Name / Template Name / Created by / ...',
        同步执行方案: 'Job Plan Sync from Template',
        个已就绪: 'Ready',
        个未就绪: 'Not Ready',
        个无需处理: 'Already',
        同步失败: 'Failed',
        重试: 'Retry',
        '同步请求失败，请重试': 'Sync failed, please try later',
        没有关联定时任务: 'No CRON related',
        另存为执行方案: 'Save as new job plan',
        请输入执行方案名称: 'Please type the new plan name',
        确定: 'Commit',
        定时执行: 'Scheduled',
        变量值为空: 'Empty',
        另存执行方案成功: 'New Job Plan has been created',
        返回继续调试: 'Keep Debug',
        立即前往查看: 'More Detail',
        已同步至最新版: 'All Job Plan(s) is latest now',
        '项执行方案的确认出现问题，请逐个确认': 'Job plan(s) confirm failed, please make sure its ready before synchronize',
        定时任务中必填变量未赋值: 'The required fields in the CRON is not assigned',
        所有方案均已同步至最新版: 'The Job Plan(s) above is latest already',
        新增: 'New',
        无需同步: 'Latest',
        '没有定时任务管理权限，请手动确认': 'No permission, please apply it first',
        '自动确认定时任务失败，请手动确认': 'CRON auto confirm failed, please try again',
        待补全: 'Incomplete',
        '请将「待补全」的步骤信息完善后提交重试': 'Please complete the "Incomplete" step and try again',
        请选择要同步的执行方案: 'No job plan selected yet',
        已选结果中有执行方案中不需要同步: 'Some of the selected job plans is already latest',
        已选结果中有执行方案中没有权限同步: 'Some of the selected job plans you do not have permission',
        '是否结束当前任务？': 'Are you sure to leave now ?',
        你可以选择保留或结束当前任务: 'Do you want to KEEP or END this task',
        '（选择保留，后续可以从列表页重新进入）': '(You can re-entry from Job page if you chosen to KEEP the task.)',
        保留: 'KEEP',
        结束: 'END',
        '全局变量的 “初始值” 不会被同步到执行方案': 'Default value will not be sync to job plan',
        '1. 作业内文件分发步骤中带有“本地文件”的会一并导出，没有大小限制！但导入时会受到目标环境的文件上传大小限制，请知悉；': '1. The "Local Files" in the Job will be also exported, and there is no size limit! However, when importing, it will be limited by the file upload size of the target environment, please be aware;',
        '2. 作业内引用的脚本会保留其原始ID，但如果在导入时目标环境找不到对应ID的脚本，将自动转换为「手工录入」的方式导入；': '2. The scripts referenced in the job will retain script ID, but if the target environment cannot find the same script ID when importing, it will be automatically converted to "Custom" mode to import;',
        '3. 由于导出和导入环境的服务器 IP 地址、人工确认的用户名、通知渠道可能存在差异，请在后续导入后修改对应的信息，以免造成作业不可用的问题；': '3. Since there may be differences IP address, username, and notification channel between export and import environment, please modify the information of specified steps after job imported;',
        '4. 为了保证步骤信息一致性，作业中使用的「执行账号」会以账号名称导出，并在导入时在目标环境中挑选其中一个相同名称的账号进行保存；如果没有相同的账号名存在，请记得导入后及时更改步骤信息，以免造成作业不可用的问题；': '4. "Execution Account" will be exported with the name(not alias name), please make sure the target environment has the same account during import, so as not to cause the problem of unavailability of the job;',
        '5. 如作业的脚本步骤中使用了「公共函数」，请确保导入的环境中也同样存在对应的函数，以免造成脚本执行逻辑错误；': '5. If the "Public Function" is used in the script step, please ensure that the corresponding function also exists in the imported environment;',
        '6. 导出的作业模板会保存其原始ID，如需在导入的环境中完全保留作业ID，请在导入作业的流程中按指引进行设置；': '6. The exported job template will completely retain the ID, If you need to retain it in the imported environment, please follow the instructions of the import settings;',
        '7. 因蓝鲸权限中心的规则中对实例的唯一标识是ID，如在导入时选择保留作业ID，请根据需要选择是否回收原有的权限策略；': '7. Because the unique identification of the instance in the rules of the IAM is the ID, if you choose to keep the job ID when importing, please mind the existing data of the imported environment;',
        '8. 在导入时选择保留作业原始ID的前提下，请确保导入的环境中不存在已配置了相同作业ID的定时任务，以免造成影响；': '8. If you choose to keep the job ID when importing, please make sure that there is no Cron task with the same job ID configured in the import environment;',
        '9. 若导入的作业模板或执行方案名称与目标环境的作业存在冲突的情况，会根据导入时设置的"重名后缀"自动在作业名称后面追加命名。': '9. When the imported job template or plan name is duplicate, the "Name Suffix" will be automatically add to the imported job name.',
        用户须知: {
            header: 'Notice',
            title: '',
        },
        选择要导出的作业执行方案: 'Select Plans to Export',
        新窗口打开该执行方案: 'Open in New Tab',
        暂无执行方案: 'No Job plan available',
        压缩包名: 'Package Name',
        '压缩包名仅支持大小写英文、数字、- 或 _': 'Using uppercase / lowercase letter, numbers, - or _',
        密文变量值处理: 'Ciphertext Variable',
        保存为空值: 'Replace with empty value',
        保存真实值: 'Using original value',
        文件加密: 'Encrypt',
        是: 'Yes',
        否: 'No',
        密码设置: 'Password',
        '请设置6-20个字符密码': 'Please type 6 to 20 characters password',
        二次确认: 'Password Confirm',
        '请输入同样的密码，以确认密码准确': 'Type the same password for confirm',
        '请输入整数，不可超过365': '',
        '长度6-20个字符': 'Length limit in 6 to 20 characters',
        '必须包含英文字母、数字和特殊符号': 'Must include three of the following mix of character types: letters, numbers and non-alphanumeric symbols',
        '密码长度为6-20个字符，必须包含英文字母、数字和特殊符号': 'Must include three of the following mix of character types: letters, numbers and non-alphanumeric symbols, for example: admin@2020',
        两次输入的密码不一致: 'The passwords are not equal.',
        密码必填: 'Password field is required',
        确认密码必填: 'Password Confirm field is required',
        文件有效期必填: 'Valid of Days',
        文件有效期须大于1或不超过365: 'Valid of Days field is required',
        压缩包名必填: 'Package Name field is required',
        密文变量值处理必填: 'Ciphertext Variable field is required',
        文件加密必填: 'Encrypt field is required',
        '作业导出成功！请及时保存并妥善保管。': 'Export Successfully! Please save it immediately.',
        '如果页面未出现提示保存窗口，请点击': 'If the page does not prompt to save automatically, please click',
        重新下载文件: 'Download',
        '正在导出作业，请稍候': 'Job Exporting, please wait a sec',
        完成: 'Close',
        下载文件成功: 'Download Successful',
        文件包上传: 'Upload',
        导入内容确认: 'Confirmation',
        导入设置: 'Settings',
        开始导入: 'Process',
        仅支持上传来自作业平台专属导出的压缩包: 'File upload allow only .jobexport',
        上传成功: 'File Upload Successful',
        上传失败: 'File Upload Failed',
        文件包解密确认: 'Password of the Package',
        文件包密码: 'Password',
        '请输入上传的文件包密码，完成后点提交验证': 'Please type the correct password to decrypt the package',
        请输入文件包密码: 'Password field is required',
        输入密码: 'Enter Password',
        重新输入密码: 'Try again',
        请点: 'Click',
        文件类型不支持: 'File type is not allowed',
        上传任务已取消: 'Upload process has been canceled',
        '导入任务已取消！需要重试请点击': 'Upload process has been canceled, click here to retry',
        不导入: 'Cancel',
        选择要导入的作业执行方案: 'Select Plans to Import',
        导入内容不能为空: 'Import Job is empty',
        重名后缀: 'Dupl. Suffix',
        作业ID处理: 'Job ID.',
        '不保留，全部按自增处理': 'Auto Increment',
        '保留，ID 冲突时自增处理': 'Keep it, Auto increment if exists',
        '保留，ID 冲突时不导入': 'Keep it, skip if exists',
        请输入重名后缀: 'Dupl. Suffix field is required',
        '作业导入完成！请及时检查。': 'Import Successfully! Please check it immediately.',
        '作业导入出现异常，请稍后再试...': 'Import Failed! Please try again later...',
        '正在导入作业，请稍候': 'Job Importing, please wait a sec',
        查看详情: 'Open in New Tab',
        复制日志: 'Copy Logs',
        有一项导入任务正在进行中: '1 import task is processing',
        有一项导出任务正在进行中: '1 export task is processing',
        将覆盖其它条件: 'override other conditions',
        引用脚本的作业模板: 'List of Related Job Template',
        引用脚本的执行方案: 'List of Related Job Plan',
        导出内容确认: 'Confirmation',
        开始导出: 'Process',
        你还未选择导出作业: 'Job not selected yet',
        同步方案: 'Sync Plans',
        返回查看: 'View Job',
        该模板下面没有执行方案: 'No Job Plan found',
        该模板下面的所有执行方案已是最新版: 'All Job Plans are already Latest',
        待同步: 'Plans need to be sync.',
        '服务器文件-服务器列表': 'Remote file - HOSTS',
        立即查看: 'View Job',
        本地源文件上传未完成: 'Local file is still uploading...',
        本地源文件上传失败: 'Local file upload failed',
        去处理: 'To Solve',
        源文件可能出现同名: 'Source Files may have same filename',
        '多文件源传输场景下容易出现同名文件覆盖的问题，你可以在目标路径中使用 [源服务器IP] 的变量来尽可能规避风险。': 'Files may have the risk of overwriting with the same name in multi-file source, using built-in variable like [FILESRCIP] in the Dst. path to avoid risks as much as possible.',
        '好的，我调整一下': 'Oops... Adjust Now',
        '已知悉，确定执行': 'I\'m Sure, Keep Going',
        添加服务器: 'Add Hosts',
        '确定立即批量更新？': 'Are you sure want to update now ?',
        '请注意！变量值填框留空，即代表设置目标变量为空值。': 'Caution! If the input is blank, means the variable value is also empty.',
        批量编辑变量值: 'Multi-Edit',
        批量编辑变量: 'Multi-Edit',
        请选择要编辑的执行方案: 'Please specifi job plan first',
        已选结果中有执行方案中没有权限编辑: 'Some you do not have permission in the selected results',
        原始值: 'OLD VALUE',
        更新值: 'NEW VALUE',
        编辑成功: 'Edit successful',
        暂无全局变量: 'No Global Variable found',
        '所选执行方案，无变量值可编辑': 'No Global Variable found',
        更新范围: 'Selected',
        已选: '',
        '个执行方案，': 'Job Plan(s)',
        来自: 'From',
        个作业模板: 'Job Template',
        选择变量: 'Global Var.(s)',
        编辑变量: 'Edit',
        更新预览: 'Preview',
        移除无效主机: 'Remove Invd.',
        批量编辑: 'Multi-Edit',
        源和目标服务器相同: '',
        '检测到文件传输源和目标服务器是同一批，若是单台建议使用本地 cp 方式效率会更高，请问你是否确定参数无误？': '',
        '是的，确定无误': 'I\'m Sure, Keep Going',
        变量使用指引: 'How to use Global Var',
        魔法变量: 'Magic Var.',
        使用指引: 'User Guide',
        标签: 'Tags',
        搜索结果为空: 'Search Empty',
        清空搜索: 'Clear Search',
        编辑标签: 'Multi-Edit',
        范围: 'Total',
        个作业: 'templates selected',
        '勾选范围里，全部作业使用': 'Applied in all selected templates',
        '勾选范围里，有': '',
        个作业使用: ' of the selected templates applied it.',
        新建标签: 'New Tag',
        编辑标签成功: 'New tag has been created',
        未引用: 'Unquoted',
        执行方案名称编辑成功: 'Plan name has been modified',
        暂无引用的变量: 'There are no variables quoted by this job plan',
        有: '',
        个定时任务: ' Cron(s) related',
        点击前往查看: 'Click to show more',
        请至少勾选一个执行步骤: 'At least one step need to be selecte',
        新建模板: 'New Template',
    },
};
