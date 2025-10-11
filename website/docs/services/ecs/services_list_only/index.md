---
title: services_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - services_list_only
  - ecs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lists <code>services</code> in a region or regions, for all properties use <a href="/services/ecs/services/"><code>services</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>services_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ECS::Service</code> resource creates an Amazon Elastic Container Service (Amazon ECS) service that runs and maintains the requested number of tasks and associated load balancers.<br />The stack update fails if you change any properties that require replacement and at least one ECS Service Connect <code>ServiceConnectConfiguration</code> property is configured. This is because AWS CloudFormation creates the replacement service first, but each <code>ServiceConnectService</code> must have a name that is unique in the namespace.<br />Starting April 15, 2023, AWS; will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, ECS, or EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. <br />On June 12, 2025, Amazon ECS launched support for updating capacity provider configuration for ECS services. With this launch, ECS also aligned the CFN update behavior for <code>CapacityProviderStrategy</code> parameter with the standard practice. For more information, see &#91;adds support for updating capacity provider configuration for ECS services&#93;(https://docs.aws.amazon.com/about-aws/whats-new/2025/05/amazon-ecs-capacity-provider-configuration-ecs/). Previously ECS ignored the <code>CapacityProviderStrategy</code> property if it was set to an empty list for example, <code>&#91;&#93;</code> in CFN, because updating capacity provider configuration was not supported. Now, with support for capacity provider updates, customers can remove capacity providers from a service by passing an empty list. When you specify an empty list (<code>&#91;&#93;</code>) for the <code>CapacityProviderStrategy</code> property in your CFN template, ECS will remove any capacity providers associated with the service, as follows:<br />+ For services created with a capacity provider strategy after the launch:<br />+ If there's a cluster default strategy set, the service will revert to using that default strategy.<br />+ If no cluster default strategy exists, you will receive the following error:<br />No launch type to fall back to for empty capacity provider strategy. Your service was not created with a launch type.<br /><br />+ For services created with a capacity provider strategy prior to the launch:<br />+ If <code>CapacityProviderStrategy</code> had <code>FARGATE_SPOT</code> or <code>FARGATE</code> capacity providers, the launch type will be updated to <code>FARGATE</code> and the capacity provider will be removed.<br />+ If the strategy included Auto Scaling group capacity providers, the service will revert to EC2 launch type, and the Auto Scaling group capacity providers will not be used.<br /><br /><br />Recommended Actions<br />If you are currently using <code>CapacityProviderStrategy: &#91;&#93;</code> in your CFN templates, you should take one of the following actions:<br />+ If you do not intend to update the Capacity Provider Strategy:<br />+ Remove the <code>CapacityProviderStrategy</code> property entirely from your CFN template<br />+ Alternatively, use <code>!Ref ::NoValue</code> for the <code>CapacityProviderStrategy</code> property in your template<br /><br />+ If you intend to maintain or update the Capacity Provider Strategy, specify the actual Capacity Provider Strategy for the service in your CFN template.<br /><br />If your CFN template had an empty list (&#91;&#93;) for <code>CapacityProviderStrategy</code> prior to the aforementioned launch on June 12, and you are using the same template with <code>CapacityProviderStrategy: &#91;&#93;</code>, you might encounter the following error:<br />Invalid request provided: When switching from launch type to capacity provider strategy on an existing service, or making a change to a capacity provider strategy on a service that is already using one, you must force a new deployment. (Service: Ecs, Status Code: 400, Request ID: xxx) (SDK Attempt Count: 1)" (RequestToken: xxx HandlerErrorCode: InvalidRequest) <br />Note that CFN automatically initiates a new deployment when it detects a parameter change, but customers cannot choose to force a deployment through CFN. This is an invalid input scenario that requires one of the remediation actions listed above.<br />If you are experiencing active production issues related to this change, contact AWS Support or your Technical Account Manager.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.services_list_only" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="service_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="cluster" /></td><td><code>string</code></td><td>The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>services</code> in a region.
```sql
SELECT
region,
service_arn,
cluster
FROM awscc.ecs.services_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>services_list_only</code> resource, see <a href="/services/ecs/services/#permissions"><code>services</code></a>

