---
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
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

Creates, updates, deletes or gets a <code>campaign</code> resource or lists <code>campaigns</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>campaigns</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::IoTFleetWise::Campaign Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotfleetwise.campaigns" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "action",
    "type": "string",
    "description": ""
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "compression",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "priority",
    "type": "integer",
    "description": ""
  },
  {
    "name": "signals_to_collect",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "max_sample_count",
        "type": "number",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "minimum_sampling_interval_ms",
        "type": "number",
        "description": ""
      },
      {
        "name": "data_partition_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "signals_to_fetch",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "fully_qualified_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "signal_fetch_config",
        "type": "object",
        "description": ""
      },
      {
        "name": "condition_language_version",
        "type": "number",
        "description": ""
      },
      {
        "name": "actions",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "data_destination_configs",
    "type": "array",
    "description": ""
  },
  {
    "name": "start_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "expiry_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_modification_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "spooling_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "signal_catalog_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "post_trigger_collection_duration",
    "type": "number",
    "description": ""
  },
  {
    "name": "data_extra_dimensions",
    "type": "array",
    "description": ""
  },
  {
    "name": "diagnostics_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "collection_scheme",
    "type": "object",
    "description": ""
  },
  {
    "name": "data_partitions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "storage_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "maximum_size",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "unit",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "minimum_time_to_live",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "unit",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "storage_location",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "upload_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "expression",
            "type": "string",
            "description": ""
          },
          {
            "name": "condition_language_version",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html"><code>AWS::IoTFleetWise::Campaign</code></a>.

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
    <td><code>campaigns</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, CollectionScheme, SignalCatalogArn, TargetArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>campaigns</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>campaigns</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>campaigns_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>campaigns</code></td>
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

Gets all properties from an individual <code>campaign</code>.
```sql
SELECT
region,
status,
action,
creation_time,
compression,
description,
priority,
signals_to_collect,
signals_to_fetch,
data_destination_configs,
start_time,
name,
expiry_time,
last_modification_time,
spooling_mode,
signal_catalog_arn,
post_trigger_collection_duration,
data_extra_dimensions,
diagnostics_mode,
target_arn,
arn,
collection_scheme,
data_partitions,
tags
FROM awscc.iotfleetwise.campaigns
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>campaigns</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iotfleetwise.campaigns_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>campaign</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotfleetwise.campaigns (
 Name,
 SignalCatalogArn,
 TargetArn,
 CollectionScheme,
 region
)
SELECT
'{{ name }}',
 '{{ signal_catalog_arn }}',
 '{{ target_arn }}',
 '{{ collection_scheme }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotfleetwise.campaigns (
 Action,
 Compression,
 Description,
 Priority,
 SignalsToCollect,
 SignalsToFetch,
 DataDestinationConfigs,
 StartTime,
 Name,
 ExpiryTime,
 SpoolingMode,
 SignalCatalogArn,
 PostTriggerCollectionDuration,
 DataExtraDimensions,
 DiagnosticsMode,
 TargetArn,
 CollectionScheme,
 DataPartitions,
 Tags,
 region
)
SELECT
 '{{ action }}',
 '{{ compression }}',
 '{{ description }}',
 '{{ priority }}',
 '{{ signals_to_collect }}',
 '{{ signals_to_fetch }}',
 '{{ data_destination_configs }}',
 '{{ start_time }}',
 '{{ name }}',
 '{{ expiry_time }}',
 '{{ spooling_mode }}',
 '{{ signal_catalog_arn }}',
 '{{ post_trigger_collection_duration }}',
 '{{ data_extra_dimensions }}',
 '{{ diagnostics_mode }}',
 '{{ target_arn }}',
 '{{ collection_scheme }}',
 '{{ data_partitions }}',
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
  - name: campaign
    props:
      - name: action
        value: '{{ action }}'
      - name: compression
        value: '{{ compression }}'
      - name: description
        value: '{{ description }}'
      - name: priority
        value: '{{ priority }}'
      - name: signals_to_collect
        value:
          - max_sample_count: null
            name: '{{ name }}'
            minimum_sampling_interval_ms: null
            data_partition_id: '{{ data_partition_id }}'
      - name: signals_to_fetch
        value:
          - fully_qualified_name: '{{ fully_qualified_name }}'
            signal_fetch_config: null
            condition_language_version: null
            actions:
              - '{{ actions[0] }}'
      - name: data_destination_configs
        value:
          - null
      - name: start_time
        value: '{{ start_time }}'
      - name: name
        value: '{{ name }}'
      - name: expiry_time
        value: '{{ expiry_time }}'
      - name: spooling_mode
        value: '{{ spooling_mode }}'
      - name: signal_catalog_arn
        value: '{{ signal_catalog_arn }}'
      - name: post_trigger_collection_duration
        value: null
      - name: data_extra_dimensions
        value:
          - '{{ data_extra_dimensions[0] }}'
      - name: diagnostics_mode
        value: '{{ diagnostics_mode }}'
      - name: target_arn
        value: '{{ target_arn }}'
      - name: collection_scheme
        value: null
      - name: data_partitions
        value:
          - id: null
            storage_options:
              maximum_size:
                unit: '{{ unit }}'
                value: '{{ value }}'
              minimum_time_to_live:
                unit: '{{ unit }}'
                value: '{{ value }}'
              storage_location: '{{ storage_location }}'
            upload_options:
              expression: '{{ expression }}'
              condition_language_version: '{{ condition_language_version }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>campaign</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotfleetwise.campaigns
SET PatchDocument = string('{{ {
    "Action": action,
    "Description": description,
    "DataExtraDimensions": data_extra_dimensions,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotfleetwise.campaigns
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>campaigns</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
iotfleetwise:GetCampaign,
iotfleetwise:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
iotfleetwise:CreateCampaign,
iotfleetwise:GetCampaign,
iotfleetwise:ListTagsForResource,
iotfleetwise:TagResource,
iam:PassRole,
timestream:DescribeEndpoints,
timestream:DescribeTable
```

</TabItem>
<TabItem value="update">

```json
iotfleetwise:GetCampaign,
iotfleetwise:ListTagsForResource,
iotfleetwise:UpdateCampaign,
iotfleetwise:TagResource,
iotfleetwise:UntagResource
```

</TabItem>
<TabItem value="list">

```json
iotfleetwise:ListCampaigns,
iotfleetwise:GetCampaign
```

</TabItem>
<TabItem value="delete">

```json
iotfleetwise:DeleteCampaign,
iotfleetwise:GetCampaign
```

</TabItem>
</Tabs>