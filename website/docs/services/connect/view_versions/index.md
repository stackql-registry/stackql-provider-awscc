---
title: view_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - view_versions
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

Creates, updates, deletes or gets a <code>view_version</code> resource or lists <code>view_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>view_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::ViewVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.view_versions" /></td></tr>
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
    "name": "view_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the view for which a version is being created."
  },
  {
    "name": "view_version_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the created view version."
  },
  {
    "name": "version_description",
    "type": "string",
    "description": "The description for the view version."
  },
  {
    "name": "view_content_sha256",
    "type": "string",
    "description": "The view content hash to be checked."
  },
  {
    "name": "version",
    "type": "integer",
    "description": "The version of the view."
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
    "name": "view_version_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the created view version."
  },
  {
    "name": "version",
    "type": "integer",
    "description": "The version of the view."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html"><code>AWS::Connect::ViewVersion</code></a>.

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
    <td><code>view_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ViewArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>view_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>view_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>view_versions</code></td>
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

Gets all properties from an individual <code>view_version</code>.
```sql
SELECT
region,
view_arn,
view_version_arn,
version_description,
view_content_sha256,
version
FROM awscc.connect.view_versions
WHERE region = 'us-east-1' AND Identifier = '{{ view_version_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>view_versions</code> in a region.
```sql
SELECT
region,
view_version_arn
FROM awscc.connect.view_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>view_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.view_versions (
 ViewArn,
 region
)
SELECT
'{{ view_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.view_versions (
 ViewArn,
 VersionDescription,
 ViewContentSha256,
 region
)
SELECT
 '{{ view_arn }}',
 '{{ version_description }}',
 '{{ view_content_sha256 }}',
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
  - name: view_version
    props:
      - name: view_arn
        value: '{{ view_arn }}'
      - name: version_description
        value: '{{ version_description }}'
      - name: view_content_sha256
        value: '{{ view_content_sha256 }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.view_versions
WHERE Identifier = '{{ view_version_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>view_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
connect:CreateViewVersion
```

</TabItem>
<TabItem value="read">

```json
connect:DescribeView
```

</TabItem>
<TabItem value="list">

```json
connect:ListViewVersions
```

</TabItem>
<TabItem value="delete">

```json
connect:DeleteViewVersion
```

</TabItem>
</Tabs>