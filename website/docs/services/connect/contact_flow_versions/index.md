---
title: contact_flow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flow_versions
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

Creates, updates, deletes or gets a <code>contact_flow_version</code> resource or lists <code>contact_flow_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contact_flow_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for ContactFlowVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.contact_flow_versions" /></td></tr>
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
    "name": "contact_flow_version_arn",
    "type": "string",
    "description": "The identifier of the contact flow version (ARN)."
  },
  {
    "name": "contact_flow_id",
    "type": "string",
    "description": "The ARN of the contact flow this version is tied to."
  },
  {
    "name": "version",
    "type": "integer",
    "description": "The version number of this revision"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the version."
  },
  {
    "name": "flow_content_sha256",
    "type": "string",
    "description": "Indicates the checksum value of the latest published flow content"
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
    "name": "contact_flow_version_arn",
    "type": "string",
    "description": "The identifier of the contact flow version (ARN)."
  },
  {
    "name": "version",
    "type": "integer",
    "description": "The version number of this revision"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html"><code>AWS::Connect::ContactFlowVersion</code></a>.

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
    <td><code>contact_flow_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ContactFlowId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>contact_flow_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>contact_flow_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>contact_flow_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>contact_flow_versions</code></td>
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

Gets all properties from an individual <code>contact_flow_version</code>.
```sql
SELECT
region,
contact_flow_version_arn,
contact_flow_id,
version,
description,
flow_content_sha256
FROM awscc.connect.contact_flow_versions
WHERE region = 'us-east-1' AND data__Identifier = '<ContactFlowVersionARN>';
```
</TabItem>
<TabItem value="list">

Lists all <code>contact_flow_versions</code> in a region.
```sql
SELECT
region,
contact_flow_version_arn
FROM awscc.connect.contact_flow_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact_flow_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.contact_flow_versions (
 ContactFlowId,
 region
)
SELECT 
'{{ ContactFlowId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.contact_flow_versions (
 ContactFlowId,
 Description,
 region
)
SELECT 
 '{{ ContactFlowId }}',
 '{{ Description }}',
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
  - name: contact_flow_version
    props:
      - name: ContactFlowId
        value: '{{ ContactFlowId }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.contact_flow_versions
WHERE data__Identifier = '<ContactFlowVersionARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contact_flow_versions</code> resource, the following permissions are required:

### Create
```json
connect:CreateContactFlowVersion,
connect:DescribeContactFlow
```

### Read
```json
connect:DescribeContactFlow
```

### Delete
```json
connect:DeleteContactFlowVersion
```

### List
```json
connect:ListContactFlowVersions
```

### Update
```json
connect:DescribeContactFlow
```
