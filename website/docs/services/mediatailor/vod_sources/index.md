---
title: vod_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - vod_sources
  - mediatailor
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

Creates, updates, deletes or gets a <code>vod_source</code> resource or lists <code>vod_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vod_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaTailor::VodSource Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediatailor.vod_sources" /></td></tr>
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
    "description": "<p>The ARN of the VOD source.</p>"
  },
  {
    "name": "http_package_configurations",
    "type": "array",
    "description": "<p>A list of HTTP package configuration parameters for this VOD source.</p>",
    "children": [
      {
        "name": "path",
        "type": "string",
        "description": "<p>The relative path to the URL for this VOD source. This is combined with &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; to form a valid URL.</p>"
      },
      {
        "name": "source_group",
        "type": "string",
        "description": "<p>The name of the source group. This has to match one of the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "source_location_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the VOD source.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "vod_source_name",
    "type": "string",
    "description": ""
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
    "name": "source_location_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "vod_source_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html"><code>AWS::MediaTailor::VodSource</code></a>.

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
    <td><code>vod_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="HttpPackageConfigurations, SourceLocationName, VodSourceName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vod_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vod_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vod_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vod_sources</code></td>
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

Gets all properties from an individual <code>vod_source</code>.
```sql
SELECT
region,
arn,
http_package_configurations,
source_location_name,
tags,
vod_source_name
FROM awscc.mediatailor.vod_sources
WHERE region = 'us-east-1' AND Identifier = '{{ source_location_name }}|{{ vod_source_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vod_sources</code> in a region.
```sql
SELECT
region,
source_location_name,
vod_source_name
FROM awscc.mediatailor.vod_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vod_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediatailor.vod_sources (
 HttpPackageConfigurations,
 SourceLocationName,
 VodSourceName,
 region
)
SELECT
'{{ http_package_configurations }}',
 '{{ source_location_name }}',
 '{{ vod_source_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediatailor.vod_sources (
 HttpPackageConfigurations,
 SourceLocationName,
 Tags,
 VodSourceName,
 region
)
SELECT
 '{{ http_package_configurations }}',
 '{{ source_location_name }}',
 '{{ tags }}',
 '{{ vod_source_name }}',
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
  - name: vod_source
    props:
      - name: http_package_configurations
        value:
          - path: '{{ path }}'
            source_group: '{{ source_group }}'
            type: '{{ type }}'
      - name: source_location_name
        value: '{{ source_location_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: vod_source_name
        value: '{{ vod_source_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vod_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediatailor.vod_sources
SET PatchDocument = string('{{ {
    "HttpPackageConfigurations": http_package_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ source_location_name }}|{{ vod_source_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediatailor.vod_sources
WHERE Identifier = '{{ source_location_name }}|{{ vod_source_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vod_sources</code> resource, the following permissions are required:

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
mediatailor:CreateVodSource,
mediatailor:DescribeVodSource,
mediatailor:TagResource
```

</TabItem>
<TabItem value="read">

```json
mediatailor:DescribeVodSource
```

</TabItem>
<TabItem value="update">

```json
mediatailor:DescribeVodSource,
mediatailor:TagResource,
mediatailor:UntagResource,
mediatailor:UpdateVodSource
```

</TabItem>
<TabItem value="delete">

```json
mediatailor:DeleteVodSource,
mediatailor:DescribeVodSource
```

</TabItem>
<TabItem value="list">

```json
mediatailor:ListVodSources
```

</TabItem>
</Tabs>