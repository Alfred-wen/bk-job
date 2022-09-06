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

package com.tencent.bk.job.gateway.config;

import org.apache.commons.lang3.StringUtils;
import org.springframework.cloud.client.DefaultServiceInstance;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerProperties;
import org.springframework.cloud.client.loadbalancer.LoadBalancerUriTools;
import org.springframework.cloud.gateway.config.GatewayLoadBalancerProperties;
import org.springframework.cloud.gateway.filter.ReactiveLoadBalancerClientFilter;
import org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.URI;

/**
 * 用于修复spring-cloud-gateway在IPv6环境下的负载均衡路由报错问题
 */
@Configuration
public class Ipv6ReactiveLoadBalancerClientConfiguration {

    @Bean
    public ReactiveLoadBalancerClientFilter ipv6GatewayLoadBalancerClientFilter(
        LoadBalancerClientFactory clientFactory,
        GatewayLoadBalancerProperties properties,
        LoadBalancerProperties loadBalancerProperties
    ) {
        return new Ipv6ReactiveLoadBalancerClientFilter(clientFactory, properties, loadBalancerProperties);
    }

    static class Ipv6ReactiveLoadBalancerClientFilter extends ReactiveLoadBalancerClientFilter {

        public Ipv6ReactiveLoadBalancerClientFilter(
            LoadBalancerClientFactory clientFactory,
            GatewayLoadBalancerProperties properties,
            LoadBalancerProperties loadBalancerProperties) {
            super(clientFactory, properties, loadBalancerProperties);
        }

        @Override
        protected URI reconstructURI(ServiceInstance serviceInstance, URI original) {
            return LoadBalancerUriTools.reconstructURI(buildHostAdjustedInstance(serviceInstance), original);
        }

        private ServiceInstance buildHostAdjustedInstance(ServiceInstance originServiceInstance) {
            DefaultServiceInstance serviceInstance = new DefaultServiceInstance(
                originServiceInstance.getInstanceId(),
                originServiceInstance.getServiceId(),
                originServiceInstance.getHost(),
                originServiceInstance.getPort(),
                originServiceInstance.isSecure(),
                originServiceInstance.getMetadata()
            );
            processIpv6Host(serviceInstance);
            return serviceInstance;
        }

        private void processIpv6Host(DefaultServiceInstance serviceInstance) {
            String host = serviceInstance.getHost();
            if (StringUtils.isNotBlank(host) && host.contains(":") && !host.startsWith("[")) {
                serviceInstance.setHost("[" + host + "]");
            }
        }

    }
}
