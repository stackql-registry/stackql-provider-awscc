---
title: deployment_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_configs
  - codedeploy
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

Creates, updates, deletes or gets a <code>deployment_config</code> resource or lists <code>deployment_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployment_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::CodeDeploy::DeploymentConfig</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codedeploy.deployment_configs" /></td></tr>
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
    "name": "compute_platform",
    "type": "string",
    "description": "The destination platform type for the deployment (Lambda, Server, or ECS)."
  },
  {
    "name": "deployment_config_name",
    "type": "string",
    "description": "A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type."
  },
  {
    "name": "minimum_healthy_hosts",
    "type": "object",
    "description": "The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.",
    "children": [
      {
        "name": "value",
        "type": "integer",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "zonal_config",
    "type": "object",
    "description": "The zonal deployment config that specifies how the zonal deployment behaves",
    "children": [
      {
        "name": "first_zone_monitor_duration_in_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "monitor_duration_in_seconds",
        "type": "integer",
        "description": ""
      },
      {
        "name": "minimum_healthy_hosts_per_zone",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "value",
            "type": "integer",
            "description": ""
          },
          {
            "name": "type",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "traffic_routing_config",
    "type": "object",
    "description": "The configuration that specifies how the deployment traffic is routed.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "time_based_linear",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "linear_interval",
            "type": "integer",
            "description": ""
          },
          {
            "name": "linear_percentage",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "time_based_canary",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "canary_percentage",
            "type": "integer",
            "description": ""
          },
          {
            "name": "canary_interval",
            "type": "integer",
            "description": ""
          }
        ]
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
    "name": "deployment_config_name",
    "type": "string",
    "description": "A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html"><code>AWS::CodeDeploy::DeploymentConfig</code></a>.

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
    <td><code>deployment_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>deployment_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>deployment_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>deployment_configs</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
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

Gets all properties from an individual <code>deployment_config</code>.
```sql
SELECT
region,
compute_platform,
deployment_config_name,
minimum_healthy_hosts,
zonal_config,
traffic_routing_config
FROM awscc.codedeploy.deployment_configs
WHERE region = 'us-east-1' AND Identifier = '<DeploymentConfigName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>deployment_configs</code> in a region.
```sql
SELECT
region,
deployment_config_name
FROM awscc.codedeploy.deployment_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>deployment_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codedeploy.deployment_configs (
 ComputePlatform,
 DeploymentConfigName,
 MinimumHealthyHosts,
 ZonalConfig,
 TrafficRoutingConfig,
 region
)
SELECT 
'{{ ComputePlatform }}',
 '{{ DeploymentConfigName }}',
 '{{ MinimumHealthyHosts }}',
 '{{ ZonalConfig }}',
 '{{ TrafficRoutingConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codedeploy.deployment_configs (
 ComputePlatform,
 DeploymentConfigName,
 MinimumHealthyHosts,
 ZonalConfig,
 TrafficRoutingConfig,
 region
)
SELECT 
 '{{ ComputePlatform }}',
 '{{ DeploymentConfigName }}',
 '{{ MinimumHealthyHosts }}',
 '{{ ZonalConfig }}',
 '{{ TrafficRoutingConfig }}',
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
  - name: deployment_config
    props:
      - name: ComputePlatform
        value: '{{ ComputePlatform }}'
      - name: DeploymentConfigName
        value: '{{ DeploymentConfigName }}'
      - name: MinimumHealthyHosts
        value:
          Value: '{{ Value }}'
          Type: '{{ Type }}'
      - name: ZonalConfig
        value:
          FirstZoneMonitorDurationInSeconds: '{{ FirstZoneMonitorDurationInSeconds }}'
          MonitorDurationInSeconds: '{{ MonitorDurationInSeconds }}'
          MinimumHealthyHostsPerZone:
            Value: '{{ Value }}'
            Type: '{{ Type }}'
      - name: TrafficRoutingConfig
        value:
          Type: '{{ Type }}'
          TimeBasedLinear:
            LinearInterval: '{{ LinearInterval }}'
            LinearPercentage: '{{ LinearPercentage }}'
          TimeBasedCanary:
            CanaryPercentage: '{{ CanaryPercentage }}'
            CanaryInterval: '{{ CanaryInterval }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codedeploy.deployment_configs
WHERE Identifier = '<DeploymentConfigName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>deployment_configs</code> resource, the following permissions are required:

### Create
```json
codedeploy:CreateDeploymentConfig
```

### Read
```json
codedeploy:GetDeploymentConfig
```

### Delete
```json
codedeploy:GetDeploymentConfig,
codedeploy:DeleteDeploymentConfig
```

### List
```json
codedeploy:ListDeploymentConfigs
```
