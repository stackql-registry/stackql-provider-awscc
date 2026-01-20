---
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - deadline
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
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::Fleet Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.fleets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "capabilities",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "amounts",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "min",
            "type": "number",
            "description": ""
          },
          {
            "name": "max",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "attributes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "values",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "farm_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "fleet_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "host_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "script_body",
        "type": "string",
        "description": ""
      },
      {
        "name": "script_timeout_seconds",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "max_worker_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "min_worker_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "worker_count",
    "type": "integer",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html"><code>AWS::Deadline::Fleet</code></a>.

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
    <td><CopyableCode code="Configuration, DisplayName, FarmId, MaxWorkerCount, RoleArn, region" /></td>
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

Gets all properties from an individual <code>fleet</code>.
```sql
SELECT
region,
capabilities,
configuration,
description,
display_name,
farm_id,
fleet_id,
host_configuration,
max_worker_count,
min_worker_count,
role_arn,
status,
status_message,
worker_count,
arn,
tags
FROM awscc.deadline.fleets
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

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
INSERT INTO awscc.deadline.fleets (
 Configuration,
 DisplayName,
 FarmId,
 MaxWorkerCount,
 RoleArn,
 region
)
SELECT 
'{{ Configuration }}',
 '{{ DisplayName }}',
 '{{ FarmId }}',
 '{{ MaxWorkerCount }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.fleets (
 Configuration,
 Description,
 DisplayName,
 FarmId,
 HostConfiguration,
 MaxWorkerCount,
 MinWorkerCount,
 RoleArn,
 Tags,
 region
)
SELECT 
 '{{ Configuration }}',
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ FarmId }}',
 '{{ HostConfiguration }}',
 '{{ MaxWorkerCount }}',
 '{{ MinWorkerCount }}',
 '{{ RoleArn }}',
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
  - name: fleet
    props:
      - name: Configuration
        value: null
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: FarmId
        value: '{{ FarmId }}'
      - name: HostConfiguration
        value:
          ScriptBody: '{{ ScriptBody }}'
          ScriptTimeoutSeconds: '{{ ScriptTimeoutSeconds }}'
      - name: MaxWorkerCount
        value: '{{ MaxWorkerCount }}'
      - name: MinWorkerCount
        value: '{{ MinWorkerCount }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.fleets
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>fleets</code> resource, the following permissions are required:

### Create
```json
deadline:CreateFleet,
deadline:GetFleet,
iam:PassRole,
identitystore:ListGroupMembershipsForMember,
logs:CreateLogGroup,
deadline:TagResource,
deadline:ListTagsForResource,
vpc-lattice:GetResourceGateway,
vpc-lattice:GetResourceConfiguration,
ec2:CreateVpcEndpoint,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs
```

### Read
```json
deadline:GetFleet,
identitystore:ListGroupMembershipsForMember,
deadline:ListTagsForResource
```

### Update
```json
deadline:UpdateFleet,
deadline:GetFleet,
iam:PassRole,
identitystore:ListGroupMembershipsForMember,
deadline:TagResource,
deadline:UntagResource,
deadline:ListTagsForResource,
vpc-lattice:GetResourceGateway,
vpc-lattice:GetResourceConfiguration,
ec2:CreateVpcEndpoint,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeVpcs
```

### Delete
```json
deadline:DeleteFleet,
deadline:GetFleet,
identitystore:ListGroupMembershipsForMember
```

### List
```json
deadline:ListFleets,
identitystore:DescribeGroup,
identitystore:DescribeUser,
identitystore:ListGroupMembershipsForMember
```
