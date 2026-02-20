---
title: custom_plugins
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_plugins
  - kafkaconnect
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

Creates, updates, deletes or gets a <code>custom_plugin</code> resource or lists <code>custom_plugins</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_plugins</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kafkaconnect.custom_plugins" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the custom plugin."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A summary description of the custom plugin."
  },
  {
    "name": "custom_plugin_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the custom plugin to use."
  },
  {
    "name": "content_type",
    "type": "string",
    "description": "The type of the plugin file."
  },
  {
    "name": "file_description",
    "type": "object",
    "description": "Details about the custom plugin file.",
    "children": [
      {
        "name": "file_md5",
        "type": "string",
        "description": "The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file."
      },
      {
        "name": "file_size",
        "type": "integer",
        "description": "The size in bytes of the custom plugin file. You can use it to validate the file."
      }
    ]
  },
  {
    "name": "location",
    "type": "object",
    "description": "Information about the location of a custom plugin.",
    "children": [
      {
        "name": "s3_location",
        "type": "object",
        "description": "The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.",
        "children": [
          {
            "name": "bucket_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of an S3 bucket."
          },
          {
            "name": "file_key",
            "type": "string",
            "description": "The file key for an object in an S3 bucket."
          },
          {
            "name": "object_version",
            "type": "string",
            "description": "The version of an object in an S3 bucket."
          }
        ]
      }
    ]
  },
  {
    "name": "revision",
    "type": "integer",
    "description": "The revision of the custom plugin."
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
    "name": "custom_plugin_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the custom plugin to use."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html"><code>AWS::KafkaConnect::CustomPlugin</code></a>.

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
    <td><code>custom_plugins</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ContentType, Location, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>custom_plugins</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>custom_plugins</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>custom_plugins_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>custom_plugins</code></td>
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

Gets all properties from an individual <code>custom_plugin</code>.
```sql
SELECT
region,
name,
description,
custom_plugin_arn,
content_type,
file_description,
location,
revision,
tags
FROM awscc.kafkaconnect.custom_plugins
WHERE region = 'us-east-1' AND Identifier = '<CustomPluginArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>custom_plugins</code> in a region.
```sql
SELECT
region,
custom_plugin_arn
FROM awscc.kafkaconnect.custom_plugins_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_plugin</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kafkaconnect.custom_plugins (
 Name,
 ContentType,
 Location,
 region
)
SELECT 
'{{ Name }}',
 '{{ ContentType }}',
 '{{ Location }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kafkaconnect.custom_plugins (
 Name,
 Description,
 ContentType,
 Location,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ ContentType }}',
 '{{ Location }}',
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
  - name: custom_plugin
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: ContentType
        value: '{{ ContentType }}'
      - name: Location
        value:
          S3Location:
            BucketArn: '{{ BucketArn }}'
            FileKey: '{{ FileKey }}'
            ObjectVersion: '{{ ObjectVersion }}'
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
UPDATE awscc.kafkaconnect.custom_plugins
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CustomPluginArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kafkaconnect.custom_plugins
WHERE Identifier = '<CustomPluginArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_plugins</code> resource, the following permissions are required:

### Create
```json
kafkaconnect:DescribeCustomPlugin,
kafkaconnect:ListTagsForResource,
kafkaconnect:CreateCustomPlugin,
kafkaconnect:TagResource,
s3:GetObject,
s3:GetObjectVersion,
s3:GetObjectAttributes,
s3:GetObjectVersionAttributes
```

### Read
```json
kafkaconnect:DescribeCustomPlugin,
kafkaconnect:ListTagsForResource
```

### Update
```json
kafkaconnect:DescribeCustomPlugin,
kafkaconnect:ListTagsForResource,
kafkaconnect:TagResource,
kafkaconnect:UntagResource
```

### Delete
```json
kafkaconnect:DeleteCustomPlugin,
kafkaconnect:DescribeCustomPlugin
```

### List
```json
kafkaconnect:ListCustomPlugins
```
