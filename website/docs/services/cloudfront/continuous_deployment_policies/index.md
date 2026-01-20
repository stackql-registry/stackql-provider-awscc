---
title: continuous_deployment_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - continuous_deployment_policies
  - cloudfront
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>continuous_deployment_policy</code> resource or lists <code>continuous_deployment_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>continuous_deployment_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a continuous deployment policy that routes a subset of production traffic from a primary distribution to a staging distribution.<br />After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This enables you to test changes to a distribution's configuration before moving all of your production traffic to the new configuration.<br />For more information, see &#91;Using CloudFront continuous deployment to safely test CDN configuration changes&#93;(https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/continuous-deployment.html) in the &#42;Amazon CloudFront Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.continuous_deployment_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "continuous_deployment_policy_config",
    "type": "object",
    "description": "Contains the configuration for a continuous deployment policy.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is &#96;&#96;true&#96;&#96;, this policy is enabled and in effect. When this value is &#96;&#96;false&#96;&#96;, this policy is not enabled and has no effect."
      },
      {
        "name": "single_header_policy_config",
        "type": "object",
        "description": "This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.",
        "children": [
          {
            "name": "header",
            "type": "string",
            "description": ""
          },
          {
            "name": "value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "single_weight_policy_config",
        "type": "object",
        "description": "This configuration determines the percentage of HTTP requests that are sent to the staging distribution.",
        "children": [
          {
            "name": "session_stickiness_config",
            "type": "object",
            "description": "Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.",
            "children": [
              {
                "name": "idle_ttl",
                "type": "integer",
                "description": "The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes)."
              },
              {
                "name": "maximum_ttl",
                "type": "integer",
                "description": "The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes)."
              }
            ]
          },
          {
            "name": "weight",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "staging_distribution_dns_names",
        "type": "array",
        "description": "The CloudFront domain name of the staging distribution. For example: &#96;&#96;d111111abcdef8.cloudfront.net&#96;&#96;."
      },
      {
        "name": "traffic_config",
        "type": "object",
        "description": "Contains the parameters for routing production traffic from your primary to staging distributions.",
        "children": [
          {
            "name": "single_header_config",
            "type": "object",
            "description": "Determines which HTTP requests are sent to the staging distribution.",
            "children": [
              {
                "name": "header",
                "type": "string",
                "description": "The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix &#96;&#96;aws-cf-cd-&#96;&#96;."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The request header value."
              }
            ]
          },
          {
            "name": "single_weight_config",
            "type": "object",
            "description": "Contains the percentage of traffic to send to the staging distribution.",
            "children": [
              {
                "name": "session_stickiness_config",
                "type": "object",
                "description": "Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values."
              },
              {
                "name": "weight",
                "type": "number",
                "description": "The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution."
              }
            ]
          },
          {
            "name": "type",
            "type": "string",
            "description": "The type of traffic configuration."
          }
        ]
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of traffic configuration."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html"><code>AWS::CloudFront::ContinuousDeploymentPolicy</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ContinuousDeploymentPolicyConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>continuous_deployment_policy</code>.
```sql
SELECT
region,
continuous_deployment_policy_config,
id,
last_modified_time
FROM awscc.cloudfront.continuous_deployment_policies
WHERE data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>continuous_deployment_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

<Tabs
    defaultValue="required"
    values={[
      { label: 'Required Properties', value: 'required', },
      { label: 'All Properties', value: 'all', },
      { label: 'Manifest', value: 'manifest', },
    ]
}>
<TabItem value="required">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.continuous_deployment_policies (
 ContinuousDeploymentPolicyConfig,
 region
)
SELECT 
'{{ ContinuousDeploymentPolicyConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.continuous_deployment_policies (
 ContinuousDeploymentPolicyConfig,
 region
)
SELECT 
 '{{ ContinuousDeploymentPolicyConfig }}',
 '{{ region }}';
```
</TabItem>
<TabItem value="manifest">

```yaml
version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: continuous_deployment_policy
    props:
      - name: ContinuousDeploymentPolicyConfig
        value:
          Enabled: '{{ Enabled }}'
          SingleHeaderPolicyConfig:
            Header: '{{ Header }}'
            Value: '{{ Value }}'
          SingleWeightPolicyConfig:
            SessionStickinessConfig:
              IdleTTL: '{{ IdleTTL }}'
              MaximumTTL: '{{ MaximumTTL }}'
            Weight: null
          StagingDistributionDnsNames:
            - '{{ StagingDistributionDnsNames[0] }}'
          TrafficConfig:
            SingleHeaderConfig:
              Header: '{{ Header }}'
              Value: '{{ Value }}'
            SingleWeightConfig:
              SessionStickinessConfig: null
              Weight: null
            Type: '{{ Type }}'
          Type: '{{ Type }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.continuous_deployment_policies
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>continuous_deployment_policies</code> resource, the following permissions are required:

### Create
```json
cloudfront:CreateContinuousDeploymentPolicy
```

### Delete
```json
cloudfront:DeleteContinuousDeploymentPolicy,
cloudfront:GetContinuousDeploymentPolicy
```

### List
```json
cloudfront:ListContinuousDeploymentPolicies
```

### Read
```json
cloudfront:GetContinuousDeploymentPolicy
```

### Update
```json
cloudfront:UpdateContinuousDeploymentPolicy,
cloudfront:GetContinuousDeploymentPolicy
```
