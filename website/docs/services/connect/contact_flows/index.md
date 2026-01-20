---
title: contact_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flows
  - connect
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

Creates, updates, deletes or gets a <code>contact_flow</code> resource or lists <code>contact_flows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contact_flows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::ContactFlow</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.contact_flows" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance (ARN)."
  },
  {
    "name": "contact_flow_arn",
    "type": "string",
    "description": "The identifier of the contact flow (ARN)."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the contact flow."
  },
  {
    "name": "content",
    "type": "string",
    "description": "The content of the contact flow in JSON format."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the contact flow."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the contact flow."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the contact flow."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html"><code>AWS::Connect::ContactFlow</code></a>.

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
    <td><CopyableCode code="InstanceArn, Content, Name, Type, region" /></td>
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

Gets all properties from an individual <code>contact_flow</code>.
```sql
SELECT
region,
instance_arn,
contact_flow_arn,
name,
content,
description,
state,
type,
tags
FROM awscc.connect.contact_flows
WHERE region = 'us-east-1' AND data__Identifier = '<ContactFlowArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact_flow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.contact_flows (
 InstanceArn,
 Name,
 Content,
 Type,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Content }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.contact_flows (
 InstanceArn,
 Name,
 Content,
 Description,
 State,
 Type,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Content }}',
 '{{ Description }}',
 '{{ State }}',
 '{{ Type }}',
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
  - name: contact_flow
    props:
      - name: InstanceArn
        value: '{{ InstanceArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Content
        value: '{{ Content }}'
      - name: Description
        value: '{{ Description }}'
      - name: State
        value: '{{ State }}'
      - name: Type
        value: '{{ Type }}'
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
DELETE FROM awscc.connect.contact_flows
WHERE data__Identifier = '<ContactFlowArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contact_flows</code> resource, the following permissions are required:

### Create
```json
connect:CreateContactFlow,
connect:TagResource
```

### Read
```json
connect:DescribeContactFlow
```

### Delete
```json
connect:DeleteContactFlow,
connect:UntagResource
```

### Update
```json
connect:UpdateContactFlowMetadata,
connect:UpdateContactFlowContent,
connect:TagResource,
connect:UntagResource
```

### List
```json
connect:ListContactFlows
```
