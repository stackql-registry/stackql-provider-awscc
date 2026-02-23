---
title: module_default_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - module_default_versions
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

Creates, updates, deletes or gets a <code>module_default_version</code> resource or lists <code>module_default_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>module_default_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A module that has been registered in the CloudFormation registry as the default version</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.module_default_versions" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the module version to set as the default version."
  },
  {
    "name": "module_name",
    "type": "string",
    "description": "The name of a module existing in the registry."
  },
  {
    "name": "version_id",
    "type": "string",
    "description": "The ID of an existing version of the named module to set as the default."
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
    "description": "The Amazon Resource Name (ARN) of the module version to set as the default version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html"><code>AWS::CloudFormation::ModuleDefaultVersion</code></a>.

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
    <td><code>module_default_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>module_default_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>module_default_versions</code></td>
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

Gets all properties from an individual <code>module_default_version</code>.
```sql
SELECT
region,
arn,
module_name,
version_id
FROM awscc.cloudformation.module_default_versions
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>module_default_versions</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.cloudformation.module_default_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>module_default_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.module_default_versions (
 Arn,
 ModuleName,
 VersionId,
 region
)
SELECT
'{{ arn }}',
 '{{ module_name }}',
 '{{ version_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.module_default_versions (
 Arn,
 ModuleName,
 VersionId,
 region
)
SELECT
 '{{ arn }}',
 '{{ module_name }}',
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
  - name: module_default_version
    props:
      - name: arn
        value: '{{ arn }}'
      - name: module_name
        value: '{{ module_name }}'
      - name: version_id
        value: '{{ version_id }}'
```
</TabItem>
</Tabs>


## Permissions

To operate on the <code>module_default_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:DescribeType,
cloudformation:SetTypeDefaultVersion
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribeType
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListTypes
```

</TabItem>
</Tabs>