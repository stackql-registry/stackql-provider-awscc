---
title: contact_flow_modules
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flow_modules
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

Creates, updates, deletes or gets a <code>contact_flow_module</code> resource or lists <code>contact_flow_modules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contact_flow_modules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::ContactFlowModule.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.contact_flow_modules" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The identifier of the Amazon Connect instance (ARN)."
  },
  {
    "name": "contact_flow_module_arn",
    "type": "string",
    "description": "The identifier of the contact flow module (ARN)."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the contact flow module."
  },
  {
    "name": "content",
    "type": "string",
    "description": "The content of the contact flow module in JSON format."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the contact flow module."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the contact flow module."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the contact flow module."
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "contact_flow_module_arn",
    "type": "string",
    "description": "The identifier of the contact flow module (ARN)."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html"><code>AWS::Connect::ContactFlowModule</code></a>.

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
    <td><code>contact_flow_modules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, Name, Content, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>contact_flow_modules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>contact_flow_modules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>contact_flow_modules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>contact_flow_modules</code></td>
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

Gets all properties from an individual <code>contact_flow_module</code>.
```sql
SELECT
region,
instance_arn,
contact_flow_module_arn,
name,
content,
description,
state,
status,
tags
FROM awscc.connect.contact_flow_modules
WHERE region = 'us-east-1' AND Identifier = '<ContactFlowModuleArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>contact_flow_modules</code> in a region.
```sql
SELECT
region,
contact_flow_module_arn
FROM awscc.connect.contact_flow_modules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact_flow_module</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.contact_flow_modules (
 InstanceArn,
 Name,
 Content,
 region
)
SELECT 
'{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Content }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.contact_flow_modules (
 InstanceArn,
 Name,
 Content,
 Description,
 State,
 Tags,
 region
)
SELECT 
 '{{ InstanceArn }}',
 '{{ Name }}',
 '{{ Content }}',
 '{{ Description }}',
 '{{ State }}',
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
  - name: contact_flow_module
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
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>contact_flow_module</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connect.contact_flow_modules
SET PatchDocument = string('{{ {
    "InstanceArn": instance_arn,
    "Name": name,
    "Content": content,
    "Description": description,
    "State": state,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ContactFlowModuleArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.contact_flow_modules
WHERE Identifier = '<ContactFlowModuleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contact_flow_modules</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
connect:CreateContactFlowModule,
connect:TagResource
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeContactFlowModule
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteContactFlowModule,
connect:UntagResource
```

</TabItem>
<TabItem value="update">

```json
connect:UpdateContactFlowModuleMetadata,
connect:UpdateContactFlowModuleContent,
connect:TagResource,
connect:UntagResource
```

</TabItem>
<TabItem value="list">

```json
connect:ListContactFlowModules
```

</TabItem>
</Tabs>