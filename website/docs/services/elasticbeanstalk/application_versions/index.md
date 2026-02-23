---
title: application_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_versions
  - elasticbeanstalk
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

Creates, updates, deletes or gets an <code>application_version</code> resource or lists <code>application_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>application_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticbeanstalk.application_versions" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_name",
    "type": "string",
    "description": "The name of the Elastic Beanstalk application that is associated with this application version."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of this application version."
  },
  {
    "name": "source_bundle",
    "type": "object",
    "description": "The Amazon S3 bucket and key that identify the location of the source bundle for this version.",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": "The Amazon S3 bucket where the data is located."
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": "The Amazon S3 key where the data is located."
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_name",
    "type": "string",
    "description": "The name of the Elastic Beanstalk application that is associated with this application version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html"><code>AWS::ElasticBeanstalk::ApplicationVersion</code></a>.

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
    <td><code>application_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationName, SourceBundle, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>application_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>application_versions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>application_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>application_versions</code></td>
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

Gets all properties from an individual <code>application_version</code>.
```sql
SELECT
region,
id,
application_name,
description,
source_bundle
FROM awscc.elasticbeanstalk.application_versions
WHERE region = 'us-east-1' AND Identifier = '{{ application_name }}|{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>application_versions</code> in a region.
```sql
SELECT
region,
application_name,
id
FROM awscc.elasticbeanstalk.application_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticbeanstalk.application_versions (
 ApplicationName,
 SourceBundle,
 region
)
SELECT
'{{ application_name }}',
 '{{ source_bundle }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticbeanstalk.application_versions (
 ApplicationName,
 Description,
 SourceBundle,
 region
)
SELECT
 '{{ application_name }}',
 '{{ description }}',
 '{{ source_bundle }}',
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
  - name: application_version
    props:
      - name: application_name
        value: '{{ application_name }}'
      - name: description
        value: '{{ description }}'
      - name: source_bundle
        value:
          s3_bucket: '{{ s3_bucket }}'
          s3_key: '{{ s3_key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticbeanstalk.application_versions
SET PatchDocument = string('{{ {
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_name }}|{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticbeanstalk.application_versions
WHERE Identifier = '{{ application_name }}|{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>application_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
elasticbeanstalk:CreateApplicationVersion,
elasticbeanstalk:DescribeApplicationVersions,
s3:GetObject,
s3:PutObject
```

</TabItem>
<TabItem value="read">

```json
elasticbeanstalk:DescribeApplicationVersions
```

</TabItem>
<TabItem value="update">

```json
elasticbeanstalk:UpdateApplicationVersion,
elasticbeanstalk:DescribeApplicationVersions
```

</TabItem>
<TabItem value="delete">

```json
elasticbeanstalk:DeleteApplicationVersion,
elasticbeanstalk:DescribeApplicationVersions
```

</TabItem>
<TabItem value="list">

```json
elasticbeanstalk:DescribeApplicationVersions
```

</TabItem>
</Tabs>