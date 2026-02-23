---
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - codebuild
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

Creates, updates, deletes or gets a <code>fleet</code> resource or lists <code>fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::CodeBuild::Fleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codebuild.fleets" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "base_capacity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "environment_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "compute_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "overflow_behavior",
    "type": "string",
    "description": ""
  },
  {
    "name": "fleet_service_role",
    "type": "string",
    "description": ""
  },
  {
    "name": "fleet_vpc_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "vpc_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "subnets",
        "type": "array",
        "description": ""
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "fleet_proxy_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "default_behavior",
        "type": "string",
        "description": ""
      },
      {
        "name": "ordered_proxy_rules",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": ""
          },
          {
            "name": "effect",
            "type": "string",
            "description": ""
          },
          {
            "name": "entities",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "image_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "scaling_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "scaling_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "target_tracking_scaling_configs",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "metric_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "target_value",
            "type": "number",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "compute_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "v_cpu",
        "type": "integer",
        "description": ""
      },
      {
        "name": "memory",
        "type": "integer",
        "description": ""
      },
      {
        "name": "disk",
        "type": "integer",
        "description": ""
      },
      {
        "name": "machine_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_type",
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html"><code>AWS::CodeBuild::Fleet</code></a>.

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
    <td><code>fleets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>fleets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>fleets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>fleets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>fleets</code></td>
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

Gets all properties from an individual <code>fleet</code>.
```sql
SELECT
region,
name,
base_capacity,
environment_type,
compute_type,
overflow_behavior,
fleet_service_role,
fleet_vpc_config,
fleet_proxy_configuration,
tags,
arn,
image_id,
scaling_configuration,
compute_configuration
FROM awscc.codebuild.fleets
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>fleets</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.codebuild.fleets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codebuild.fleets (
 Name,
 BaseCapacity,
 EnvironmentType,
 ComputeType,
 OverflowBehavior,
 FleetServiceRole,
 FleetVpcConfig,
 FleetProxyConfiguration,
 Tags,
 ImageId,
 ScalingConfiguration,
 ComputeConfiguration,
 region
)
SELECT
'{{ name }}',
 '{{ base_capacity }}',
 '{{ environment_type }}',
 '{{ compute_type }}',
 '{{ overflow_behavior }}',
 '{{ fleet_service_role }}',
 '{{ fleet_vpc_config }}',
 '{{ fleet_proxy_configuration }}',
 '{{ tags }}',
 '{{ image_id }}',
 '{{ scaling_configuration }}',
 '{{ compute_configuration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codebuild.fleets (
 Name,
 BaseCapacity,
 EnvironmentType,
 ComputeType,
 OverflowBehavior,
 FleetServiceRole,
 FleetVpcConfig,
 FleetProxyConfiguration,
 Tags,
 ImageId,
 ScalingConfiguration,
 ComputeConfiguration,
 region
)
SELECT
 '{{ name }}',
 '{{ base_capacity }}',
 '{{ environment_type }}',
 '{{ compute_type }}',
 '{{ overflow_behavior }}',
 '{{ fleet_service_role }}',
 '{{ fleet_vpc_config }}',
 '{{ fleet_proxy_configuration }}',
 '{{ tags }}',
 '{{ image_id }}',
 '{{ scaling_configuration }}',
 '{{ compute_configuration }}',
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
  - name: fleet
    props:
      - name: name
        value: '{{ name }}'
      - name: base_capacity
        value: '{{ base_capacity }}'
      - name: environment_type
        value: '{{ environment_type }}'
      - name: compute_type
        value: '{{ compute_type }}'
      - name: overflow_behavior
        value: '{{ overflow_behavior }}'
      - name: fleet_service_role
        value: '{{ fleet_service_role }}'
      - name: fleet_vpc_config
        value:
          vpc_id: '{{ vpc_id }}'
          subnets:
            - '{{ subnets[0] }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
      - name: fleet_proxy_configuration
        value:
          default_behavior: '{{ default_behavior }}'
          ordered_proxy_rules:
            - type: '{{ type }}'
              effect: '{{ effect }}'
              entities:
                - '{{ entities[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: image_id
        value: '{{ image_id }}'
      - name: scaling_configuration
        value:
          max_capacity: '{{ max_capacity }}'
          scaling_type: '{{ scaling_type }}'
          target_tracking_scaling_configs:
            - metric_type: '{{ metric_type }}'
              target_value: null
      - name: compute_configuration
        value:
          v_cpu: '{{ v_cpu }}'
          memory: '{{ memory }}'
          disk: '{{ disk }}'
          machine_type: '{{ machine_type }}'
          instance_type: '{{ instance_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.codebuild.fleets
SET PatchDocument = string('{{ {
    "Name": name,
    "BaseCapacity": base_capacity,
    "EnvironmentType": environment_type,
    "ComputeType": compute_type,
    "OverflowBehavior": overflow_behavior,
    "FleetServiceRole": fleet_service_role,
    "FleetVpcConfig": fleet_vpc_config,
    "FleetProxyConfiguration": fleet_proxy_configuration,
    "Tags": tags,
    "ImageId": image_id,
    "ScalingConfiguration": scaling_configuration,
    "ComputeConfiguration": compute_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codebuild.fleets
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fleets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
codebuild:BatchGetFleets,
codebuild:CreateFleet,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
codebuild:BatchGetFleets,
codebuild:DeleteFleet
```

</TabItem>
<TabItem value="read">

```json
codebuild:BatchGetFleets
```

</TabItem>
<TabItem value="list">

```json
codebuild:ListFleets
```

</TabItem>
<TabItem value="update">

```json
codebuild:BatchGetFleets,
codebuild:UpdateFleet,
iam:PassRole
```

</TabItem>
</Tabs>