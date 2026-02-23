---
title: hook_default_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - hook_default_versions
  - cloudformation
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

Creates, updates, deletes or gets a <code>hook_default_version</code> resource or lists <code>hook_default_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hook_default_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Set a version as default version for a hook in CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.hook_default_versions" /></td></tr>
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
    "name": "type_version_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the type version."
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "The name of the type being registered.<br />We recommend that type names adhere to the following pattern: company&#95;or&#95;organization::service::type."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion"
  },
  {
    "name": "version_id",
    "type": "string",
    "description": "The ID of an existing version of the hook to set as the default."
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
    "description": "The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html"><code>AWS::CloudFormation::HookDefaultVersion</code></a>.

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
    <td><code>hook_default_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hook_default_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hook_default_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hook_default_versions</code></td>
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

Gets all properties from an individual <code>hook_default_version</code>.
```sql
SELECT
region,
type_version_arn,
type_name,
arn,
version_id
FROM awscc.cloudformation.hook_default_versions
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>hook_default_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.cloudformation.hook_default_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hook_default_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.hook_default_versions (
 TypeVersionArn,
 TypeName,
 VersionId,
 region
)
SELECT
'{{ type_version_arn }}',
 '{{ type_name }}',
 '{{ version_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.hook_default_versions (
 TypeVersionArn,
 TypeName,
 VersionId,
 region
)
SELECT
 '{{ type_version_arn }}',
 '{{ type_name }}',
 '{{ version_id }}',
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
  - name: hook_default_version
    props:
      - name: type_version_arn
        value: '{{ type_version_arn }}'
      - name: type_name
        value: '{{ type_name }}'
      - name: version_id
        value: '{{ version_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>hook_default_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudformation.hook_default_versions
SET PatchDocument = string('{{ {
    "TypeVersionArn": type_version_arn,
    "TypeName": type_name,
    "VersionId": version_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## Permissions

To operate on the <code>hook_default_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:SetTypeDefaultVersion
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribeType
```

</TabItem>
<TabItem value="update">

```json
cloudformation:SetTypeDefaultVersion
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListTypes
```

</TabItem>
</Tabs>