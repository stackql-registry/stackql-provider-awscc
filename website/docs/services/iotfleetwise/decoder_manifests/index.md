---
title: decoder_manifests
hide_title: false
hide_table_of_contents: false
keywords:
  - decoder_manifests
  - iotfleetwise
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

Creates, updates, deletes or gets a <code>decoder_manifest</code> resource or lists <code>decoder_manifests</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>decoder_manifests</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::IoTFleetWise::DecoderManifest Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotfleetwise.decoder_manifests" /></td></tr>
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
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modification_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "model_manifest_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_interfaces",
    "type": "array",
    "description": ""
  },
  {
    "name": "signal_decoders",
    "type": "array",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_for_unmapped_signals",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html"><code>AWS::IoTFleetWise::DecoderManifest</code></a>.

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
    <td><code>decoder_manifests</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ModelManifestArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>decoder_manifests</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>decoder_manifests</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>decoder_manifests_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>decoder_manifests</code></td>
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

Gets all properties from an individual <code>decoder_manifest</code>.
```sql
SELECT
region,
arn,
creation_time,
description,
last_modification_time,
model_manifest_arn,
name,
network_interfaces,
signal_decoders,
status,
default_for_unmapped_signals,
tags
FROM awscc.iotfleetwise.decoder_manifests
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>decoder_manifests</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iotfleetwise.decoder_manifests_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>decoder_manifest</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotfleetwise.decoder_manifests (
 ModelManifestArn,
 Name,
 region
)
SELECT
'{{ model_manifest_arn }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotfleetwise.decoder_manifests (
 Description,
 ModelManifestArn,
 Name,
 NetworkInterfaces,
 SignalDecoders,
 Status,
 DefaultForUnmappedSignals,
 Tags,
 region
)
SELECT
 '{{ description }}',
 '{{ model_manifest_arn }}',
 '{{ name }}',
 '{{ network_interfaces }}',
 '{{ signal_decoders }}',
 '{{ status }}',
 '{{ default_for_unmapped_signals }}',
 '{{ tags }}',
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
  - name: decoder_manifest
    props:
      - name: description
        value: '{{ description }}'
      - name: model_manifest_arn
        value: '{{ model_manifest_arn }}'
      - name: name
        value: '{{ name }}'
      - name: network_interfaces
        value:
          - null
      - name: signal_decoders
        value:
          - null
      - name: status
        value: '{{ status }}'
      - name: default_for_unmapped_signals
        value: '{{ default_for_unmapped_signals }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>decoder_manifest</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotfleetwise.decoder_manifests
SET PatchDocument = string('{{ {
    "Description": description,
    "NetworkInterfaces": network_interfaces,
    "SignalDecoders": signal_decoders,
    "Status": status,
    "DefaultForUnmappedSignals": default_for_unmapped_signals,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotfleetwise.decoder_manifests
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>decoder_manifests</code> resource, the following permissions are required:

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
iotfleetwise:CreateDecoderManifest,
iotfleetwise:GetDecoderManifest,
iotfleetwise:UpdateDecoderManifest,
iotfleetwise:ListDecoderManifestSignals,
iotfleetwise:ListDecoderManifestNetworkInterfaces,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource
```

</TabItem>
<TabItem value="read">

```json
iotfleetwise:GetDecoderManifest,
iotfleetwise:ListDecoderManifestSignals,
iotfleetwise:ListDecoderManifestNetworkInterfaces,
iotfleetwise:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotfleetwise:UpdateDecoderManifest,
iotfleetwise:GetDecoderManifest,
iotfleetwise:ListDecoderManifestSignals,
iotfleetwise:ListDecoderManifestNetworkInterfaces,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource,
iotfleetwise:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotfleetwise:DeleteDecoderManifest,
iotfleetwise:GetDecoderManifest
```

</TabItem>
<TabItem value="list">

```json
iotfleetwise:ListDecoderManifests
```

</TabItem>
</Tabs>