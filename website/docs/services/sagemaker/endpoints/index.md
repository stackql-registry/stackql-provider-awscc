---
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - sagemaker
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

Creates, updates, deletes or gets an <code>endpoint</code> resource or lists <code>endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::Endpoint</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.endpoints" /></td></tr>
</tbody>
</table>

## Fields
<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

<SchemaTable fields={[
  {
    "name": "deployment_config",
    "type": "object",
    "description": "Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies.",
    "children": [
      {
        "name": "auto_rollback_configuration",
        "type": "object",
        "description": "Configuration for automatic rollback if an error occurs during deployment.",
        "children": [
          {
            "name": "alarms",
            "type": "array",
            "description": "List of CloudWatch alarms to monitor during the deployment. If any alarm goes off, the deployment is rolled back.",
            "children": [
              {
                "name": "alarm_name",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "blue_green_update_policy",
        "type": "object",
        "description": "Configuration for blue-green update deployment policies.",
        "children": [
          {
            "name": "maximum_execution_timeout_in_seconds",
            "type": "integer",
            "description": "The maximum time allowed for the blue/green update, in seconds."
          },
          {
            "name": "termination_wait_in_seconds",
            "type": "integer",
            "description": "The wait time before terminating the old endpoint during a blue/green deployment."
          },
          {
            "name": "traffic_routing_configuration",
            "type": "object",
            "description": "The traffic routing configuration for the blue/green deployment.",
            "children": [
              {
                "name": "canary_size",
                "type": "object",
                "description": "Specifies the size of the canary traffic in a canary deployment."
              },
              {
                "name": "type",
                "type": "string",
                "description": "Specifies the type of traffic routing (e.g., 'AllAtOnce', 'Canary', 'Linear')."
              },
              {
                "name": "wait_interval_in_seconds",
                "type": "integer",
                "description": "Specifies the wait interval between traffic shifts, in seconds."
              }
            ]
          }
        ]
      },
      {
        "name": "rolling_update_policy",
        "type": "object",
        "description": "Configuration for rolling update deployment policies.",
        "children": [
          {
            "name": "maximum_batch_size",
            "type": "object",
            "description": "Specifies the maximum batch size for each rolling update.",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "Specifies whether the &#96;Value&#96; is an instance count or a capacity unit."
              },
              {
                "name": "value",
                "type": "integer",
                "description": "The value representing either the number of instances or the number of capacity units."
              }
            ]
          },
          {
            "name": "maximum_execution_timeout_in_seconds",
            "type": "integer",
            "description": "The maximum time allowed for the rolling update, in seconds."
          },
          {
            "name": "wait_interval_in_seconds",
            "type": "integer",
            "description": "The time to wait between steps during the rolling update, in seconds."
          }
        ]
      }
    ]
  },
  {
    "name": "endpoint_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the endpoint."
  },
  {
    "name": "endpoint_config_name",
    "type": "string",
    "description": "The name of the endpoint configuration for the SageMaker endpoint. This is a required property."
  },
  {
    "name": "endpoint_name",
    "type": "string",
    "description": "The name of the SageMaker endpoint. This name must be unique within an AWS Region."
  },
  {
    "name": "exclude_retained_variant_properties",
    "type": "array",
    "description": "Specifies a list of variant properties that you want to exclude when updating an endpoint.",
    "children": [
      {
        "name": "variant_property_type",
        "type": "string",
        "description": "The type of variant property (e.g., 'DesiredInstanceCount', 'DesiredWeight', 'DataCaptureConfig')."
      }
    ]
  },
  {
    "name": "retain_all_variant_properties",
    "type": "boolean",
    "description": "When set to true, retains all variant properties for an endpoint when it is updated."
  },
  {
    "name": "retain_deployment_config",
    "type": "boolean",
    "description": "When set to true, retains the deployment configuration during endpoint updates."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "endpoint_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the endpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html"><code>AWS::SageMaker::Endpoint</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Resource</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EndpointConfigName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>endpoints</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get (all properties)', value: 'get' },
        { label: 'list (identifiers only)', value: 'list' }
    ]}
>
<TabItem value="get">

Gets all properties from an individual <code>endpoint</code>.
```sql
SELECT
region,
deployment_config,
endpoint_arn,
endpoint_config_name,
endpoint_name,
exclude_retained_variant_properties,
retain_all_variant_properties,
retain_deployment_config,
tags
FROM awscc.sagemaker.endpoints
WHERE region = 'us-east-1' AND data__Identifier = '<EndpointArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>endpoints</code> in a region.
```sql
SELECT
region,
endpoint_arn
FROM awscc.sagemaker.endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.endpoints (
 EndpointConfigName,
 region
)
SELECT 
'{{ EndpointConfigName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.endpoints (
 DeploymentConfig,
 EndpointConfigName,
 ExcludeRetainedVariantProperties,
 RetainAllVariantProperties,
 RetainDeploymentConfig,
 Tags,
 region
)
SELECT 
 '{{ DeploymentConfig }}',
 '{{ EndpointConfigName }}',
 '{{ ExcludeRetainedVariantProperties }}',
 '{{ RetainAllVariantProperties }}',
 '{{ RetainDeploymentConfig }}',
 '{{ Tags }}',
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
  - name: endpoint
    props:
      - name: DeploymentConfig
        value:
          AutoRollbackConfiguration:
            Alarms:
              - AlarmName: '{{ AlarmName }}'
          BlueGreenUpdatePolicy:
            MaximumExecutionTimeoutInSeconds: '{{ MaximumExecutionTimeoutInSeconds }}'
            TerminationWaitInSeconds: '{{ TerminationWaitInSeconds }}'
            TrafficRoutingConfiguration:
              CanarySize:
                Type: '{{ Type }}'
                Value: '{{ Value }}'
              LinearStepSize: null
              Type: '{{ Type }}'
              WaitIntervalInSeconds: '{{ WaitIntervalInSeconds }}'
          RollingUpdatePolicy:
            MaximumBatchSize: null
            MaximumExecutionTimeoutInSeconds: '{{ MaximumExecutionTimeoutInSeconds }}'
            RollbackMaximumBatchSize: null
            WaitIntervalInSeconds: '{{ WaitIntervalInSeconds }}'
      - name: EndpointConfigName
        value: '{{ EndpointConfigName }}'
      - name: ExcludeRetainedVariantProperties
        value:
          - VariantPropertyType: '{{ VariantPropertyType }}'
      - name: RetainAllVariantProperties
        value: '{{ RetainAllVariantProperties }}'
      - name: RetainDeploymentConfig
        value: '{{ RetainDeploymentConfig }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sagemaker.endpoints
SET data__PatchDocument = string('{{ {
    "DeploymentConfig": deployment_config,
    "EndpointConfigName": endpoint_config_name,
    "ExcludeRetainedVariantProperties": exclude_retained_variant_properties,
    "RetainAllVariantProperties": retain_all_variant_properties,
    "RetainDeploymentConfig": retain_deployment_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<EndpointArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.endpoints
WHERE data__Identifier = '<EndpointArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>endpoints</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateEndpoint,
sagemaker:DescribeEndpoint,
sagemaker:AddTags
```

### Read
```json
sagemaker:DescribeEndpoint,
sagemaker:ListTags
```

### Update
```json
sagemaker:UpdateEndpoint,
sagemaker:DescribeEndpoint,
sagemaker:AddTags,
sagemaker:DeleteTags
```

### Delete
```json
sagemaker:DeleteEndpoint,
sagemaker:DescribeEndpoint
```

### List
```json
sagemaker:ListEndpoints
```
