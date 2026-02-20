---
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - logs
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

Creates, updates, deletes or gets a <code>destination</code> resource or lists <code>destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Logs::Destination resource specifies a CloudWatch Logs destination. A destination encapsulates a physical resource (such as an Amazon Kinesis data stream) and enables you to subscribe that resource to a stream of log events.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.destinations" /></td></tr>
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
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of this key-value pair."
      }
    ]
  },
  {
    "name": "destination_name",
    "type": "string",
    "description": "The name of the destination resource"
  },
  {
    "name": "destination_policy",
    "type": "string",
    "description": "An IAM policy document that governs which AWS accounts can create subscription filters against this destination."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource"
  },
  {
    "name": "target_arn",
    "type": "string",
    "description": "The ARN of the physical target where the log events are delivered (for example, a Kinesis stream)"
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
    "name": "destination_name",
    "type": "string",
    "description": "The name of the destination resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-destination.html"><code>AWS::Logs::Destination</code></a>.

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
    <td><code>destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DestinationName, TargetArn, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>destinations</code></td>
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

Gets all properties from an individual <code>destination</code>.
```sql
SELECT
region,
arn,
tags,
destination_name,
destination_policy,
role_arn,
target_arn
FROM awscc.logs.destinations
WHERE region = 'us-east-1' AND data__Identifier = '<DestinationName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>destinations</code> in a region.
```sql
SELECT
region,
destination_name
FROM awscc.logs.destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.destinations (
 DestinationName,
 RoleArn,
 TargetArn,
 region
)
SELECT 
'{{ DestinationName }}',
 '{{ RoleArn }}',
 '{{ TargetArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.destinations (
 Tags,
 DestinationName,
 DestinationPolicy,
 RoleArn,
 TargetArn,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ DestinationName }}',
 '{{ DestinationPolicy }}',
 '{{ RoleArn }}',
 '{{ TargetArn }}',
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
  - name: destination
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: DestinationName
        value: '{{ DestinationName }}'
      - name: DestinationPolicy
        value: '{{ DestinationPolicy }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: TargetArn
        value: '{{ TargetArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.logs.destinations
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "DestinationPolicy": destination_policy,
    "RoleArn": role_arn,
    "TargetArn": target_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DestinationName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.destinations
WHERE data__Identifier = '<DestinationName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>destinations</code> resource, the following permissions are required:

### Create
```json
logs:PutDestination,
logs:PutDestinationPolicy,
logs:DescribeDestinations,
logs:TagResource,
iam:PassRole
```

### Read
```json
logs:DescribeDestinations,
logs:ListTagsForResource
```

### Update
```json
logs:PutDestination,
logs:PutDestinationPolicy,
logs:DescribeDestinations,
logs:TagResource,
logs:UntagResource,
logs:ListTagsForResource,
iam:PassRole
```

### Delete
```json
logs:DeleteDestination
```

### List
```json
logs:DescribeDestinations,
logs:ListTagsForResource
```
