---
title: live_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - live_sources
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

Creates, updates, deletes or gets a <code>live_source</code> resource or lists <code>live_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>live_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaTailor::LiveSource Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediatailor.live_sources" /></td></tr>
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
    "description": "<p>The ARN of the live source.</p>"
  },
  {
    "name": "http_package_configurations",
    "type": "array",
    "description": "<p>A list of HTTP package configuration parameters for this live source.</p>",
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
    "name": "live_source_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_location_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the live source.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "live_source_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_location_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html"><code>AWS::MediaTailor::LiveSource</code></a>.

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
    <td><code>live_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="HttpPackageConfigurations, LiveSourceName, SourceLocationName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>live_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>live_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>live_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>live_sources</code></td>
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

Gets all properties from an individual <code>live_source</code>.
```sql
SELECT
region,
arn,
http_package_configurations,
live_source_name,
source_location_name,
tags
FROM awscc.mediatailor.live_sources
WHERE region = 'us-east-1' AND data__Identifier = '<LiveSourceName>|<SourceLocationName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>live_sources</code> in a region.
```sql
SELECT
region,
live_source_name,
source_location_name
FROM awscc.mediatailor.live_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>live_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediatailor.live_sources (
 HttpPackageConfigurations,
 LiveSourceName,
 SourceLocationName,
 region
)
SELECT 
'{{ HttpPackageConfigurations }}',
 '{{ LiveSourceName }}',
 '{{ SourceLocationName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediatailor.live_sources (
 HttpPackageConfigurations,
 LiveSourceName,
 SourceLocationName,
 Tags,
 region
)
SELECT 
 '{{ HttpPackageConfigurations }}',
 '{{ LiveSourceName }}',
 '{{ SourceLocationName }}',
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
  - name: live_source
    props:
      - name: HttpPackageConfigurations
        value:
          - Path: '{{ Path }}'
            SourceGroup: '{{ SourceGroup }}'
            Type: '{{ Type }}'
      - name: LiveSourceName
        value: '{{ LiveSourceName }}'
      - name: SourceLocationName
        value: '{{ SourceLocationName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediatailor.live_sources
SET data__PatchDocument = string('{{ {
    "HttpPackageConfigurations": http_package_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<LiveSourceName>|<SourceLocationName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediatailor.live_sources
WHERE data__Identifier = '<LiveSourceName|SourceLocationName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>live_sources</code> resource, the following permissions are required:

### Create
```json
mediatailor:CreateLiveSource,
mediatailor:DescribeLiveSource,
mediatailor:TagResource
```

### Read
```json
mediatailor:DescribeLiveSource
```

### Update
```json
mediatailor:UpdateLiveSource,
mediatailor:DescribeLiveSource,
mediatailor:TagResource,
mediatailor:UntagResource
```

### Delete
```json
mediatailor:DeleteLiveSource,
mediatailor:DescribeLiveSource
```

### List
```json
mediatailor:ListLiveSources
```
