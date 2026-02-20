---
title: application_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - application_instances
  - panorama
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

Creates, updates, deletes or gets an <code>application_instance</code> resource or lists <code>application_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>application_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates an application instance and deploys it to a device.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.panorama.application_instances" /></td></tr>
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
    "name": "default_runtime_context_device_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_runtime_context_device",
    "type": "string",
    "description": "The device's ID."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the application instance."
  },
  {
    "name": "application_instance_id_to_replace",
    "type": "string",
    "description": "The ID of an application instance to replace with the new instance."
  },
  {
    "name": "created_time",
    "type": "integer",
    "description": ""
  },
  {
    "name": "health_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "manifest_overrides_payload",
    "type": "object",
    "description": "Setting overrides for the application manifest.",
    "children": [
      {
        "name": "payload_data",
        "type": "string",
        "description": "The overrides document."
      }
    ]
  },
  {
    "name": "runtime_role_arn",
    "type": "string",
    "description": "The ARN of a runtime role for the application instance."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the application instance."
  },
  {
    "name": "status_description",
    "type": "string",
    "description": ""
  },
  {
    "name": "manifest_payload",
    "type": "object",
    "description": "The application's manifest document.",
    "children": [
      {
        "name": "payload_data",
        "type": "string",
        "description": "The application manifest."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for the application instance.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html"><code>AWS::Panorama::ApplicationInstance</code></a>.

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
    <td><code>application_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ManifestPayload, DefaultRuntimeContextDevice, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>application_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>application_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>application_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>application_instances</code></td>
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

Gets all properties from an individual <code>application_instance</code>.
```sql
SELECT
region,
default_runtime_context_device_name,
status,
default_runtime_context_device,
description,
application_instance_id_to_replace,
created_time,
health_status,
manifest_overrides_payload,
last_updated_time,
runtime_role_arn,
name,
application_instance_id,
status_description,
manifest_payload,
arn,
tags
FROM awscc.panorama.application_instances
WHERE region = 'us-east-1' AND data__Identifier = '<ApplicationInstanceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>application_instances</code> in a region.
```sql
SELECT
region,
application_instance_id
FROM awscc.panorama.application_instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.panorama.application_instances (
 DefaultRuntimeContextDevice,
 ManifestPayload,
 region
)
SELECT 
'{{ DefaultRuntimeContextDevice }}',
 '{{ ManifestPayload }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.panorama.application_instances (
 DefaultRuntimeContextDevice,
 Description,
 ApplicationInstanceIdToReplace,
 ManifestOverridesPayload,
 RuntimeRoleArn,
 Name,
 ManifestPayload,
 Tags,
 region
)
SELECT 
 '{{ DefaultRuntimeContextDevice }}',
 '{{ Description }}',
 '{{ ApplicationInstanceIdToReplace }}',
 '{{ ManifestOverridesPayload }}',
 '{{ RuntimeRoleArn }}',
 '{{ Name }}',
 '{{ ManifestPayload }}',
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
  - name: application_instance
    props:
      - name: DefaultRuntimeContextDevice
        value: '{{ DefaultRuntimeContextDevice }}'
      - name: Description
        value: '{{ Description }}'
      - name: ApplicationInstanceIdToReplace
        value: '{{ ApplicationInstanceIdToReplace }}'
      - name: ManifestOverridesPayload
        value:
          PayloadData: '{{ PayloadData }}'
      - name: RuntimeRoleArn
        value: '{{ RuntimeRoleArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: ManifestPayload
        value:
          PayloadData: '{{ PayloadData }}'
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
UPDATE awscc.panorama.application_instances
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ApplicationInstanceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.panorama.application_instances
WHERE data__Identifier = '<ApplicationInstanceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>application_instances</code> resource, the following permissions are required:

### Read
```json
panorama:DescribeApplicationInstance,
panorama:DescribeApplicationInstanceDetails,
panorama:ListTagsForResource,
s3:ListObjects,
s3:GetObject,
s3:GetObjectVersion
```

### Create
```json
panorama:CreateApplicationInstance,
panorama:ListTagsForResource,
panorama:TagResource,
panorama:DescribeApplicationInstance,
panorama:DescribeApplicationInstanceDetails,
iam:PassRole,
s3:ListBucket,
s3:PutObject,
s3:GetObject,
s3:GetObjectVersion
```

### Update
```json
panorama:ListTagsForResource,
panorama:TagResource,
panorama:UntagResource,
panorama:DescribeApplicationInstance,
panorama:DescribeApplicationInstanceDetails,
s3:ListObjects,
s3:GetObject,
s3:GetObjectVersion
```

### List
```json
panorama:ListApplicationInstances,
s3:ListBucket,
s3:GetObject,
s3:GetObjectVersion
```

### Delete
```json
panorama:RemoveApplicationInstance,
panorama:DescribeApplicationInstance,
panorama:DescribeApplicationInstanceDetails,
s3:DeleteObject,
s3:DeleteObjectVersion,
s3:DeleteObjectVersionTagging,
s3:ListObjects,
s3:GetObject,
s3:GetObjectVersion
```
