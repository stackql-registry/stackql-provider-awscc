---
title: service_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - service_environments
  - batch
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

Creates, updates, deletes or gets a <code>service_environment</code> resource or lists <code>service_environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Batch::ServiceEnvironment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.batch.service_environments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "service_environment_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_environment_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "capacity_limits",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "max_capacity",
        "type": "integer",
        "description": ""
      },
      {
        "name": "capacity_unit",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-serviceenvironment.html"><code>AWS::Batch::ServiceEnvironment</code></a>.

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
    <td><CopyableCode code="ServiceEnvironmentType, CapacityLimits, region" /></td>
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

Gets all properties from an individual <code>service_environment</code>.
```sql
SELECT
region,
service_environment_arn,
service_environment_name,
state,
service_environment_type,
capacity_limits,
tags
FROM awscc.batch.service_environments
WHERE region = 'us-east-1' AND data__Identifier = '<ServiceEnvironmentArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.batch.service_environments (
 ServiceEnvironmentType,
 CapacityLimits,
 region
)
SELECT 
'{{ ServiceEnvironmentType }}',
 '{{ CapacityLimits }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.batch.service_environments (
 ServiceEnvironmentName,
 State,
 ServiceEnvironmentType,
 CapacityLimits,
 Tags,
 region
)
SELECT 
 '{{ ServiceEnvironmentName }}',
 '{{ State }}',
 '{{ ServiceEnvironmentType }}',
 '{{ CapacityLimits }}',
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
  - name: service_environment
    props:
      - name: ServiceEnvironmentName
        value: '{{ ServiceEnvironmentName }}'
      - name: State
        value: '{{ State }}'
      - name: ServiceEnvironmentType
        value: '{{ ServiceEnvironmentType }}'
      - name: CapacityLimits
        value:
          - MaxCapacity: '{{ MaxCapacity }}'
            CapacityUnit: '{{ CapacityUnit }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.service_environments
WHERE data__Identifier = '<ServiceEnvironmentArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_environments</code> resource, the following permissions are required:

### Create
```json
Batch:CreateServiceEnvironment,
Batch:TagResource,
Batch:DescribeServiceEnvironments,
Iam:CreateServiceLinkedRole
```

### Read
```json
Batch:DescribeServiceEnvironments
```

### Update
```json
Batch:UpdateServiceEnvironment,
Batch:DescribeServiceEnvironments,
Batch:TagResource,
Batch:UntagResource
```

### Delete
```json
Batch:DeleteServiceEnvironment,
Batch:DescribeServiceEnvironments,
Batch:UpdateServiceEnvironment
```

### List
```json
Batch:DescribeServiceEnvironments
```
