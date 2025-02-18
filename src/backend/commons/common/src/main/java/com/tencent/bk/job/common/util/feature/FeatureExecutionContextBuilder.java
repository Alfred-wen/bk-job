package com.tencent.bk.job.common.util.feature;

import com.tencent.bk.job.common.model.dto.ResourceScope;

import java.util.HashMap;
import java.util.Map;

public class FeatureExecutionContextBuilder {
    private ResourceScope resourceScope;

    private FeatureExecutionContextBuilder() {
    }

    public static FeatureExecutionContextBuilder builder() {
        return new FeatureExecutionContextBuilder();
    }

    public FeatureExecutionContextBuilder resourceScope(ResourceScope resourceScope) {
        this.resourceScope = resourceScope;
        return this;
    }

    public FeatureExecutionContext build() {
        Map<String, Object> params = new HashMap<>();
        if (resourceScope != null) {
            params.put(ResourceScopeToggleStrategy.CTX_PARAM_RESOURCE_SCOPE, resourceScope);
        }
        return new FeatureExecutionContext(params);
    }
}
