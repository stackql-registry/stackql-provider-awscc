---
title: configs
hide_title: false
hide_table_of_contents: false
keywords:
  - configs
  - groundstation
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

Creates, updates, deletes or gets a <code>config</code> resource or lists <code>configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Ground Station config resource type for CloudFormation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.groundstation.configs" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "config_data",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "antenna_downlink_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "spectrum_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "center_frequency",
                "type": "object",
                "description": ""
              },
              {
                "name": "bandwidth",
                "type": "object",
                "description": ""
              },
              {
                "name": "polarization",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "tracking_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "autotrack",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "dataflow_endpoint_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "dataflow_endpoint_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "dataflow_endpoint_region",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "antenna_downlink_demod_decode_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "spectrum_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "center_frequency",
                "type": "object",
                "description": ""
              },
              {
                "name": "bandwidth",
                "type": "object",
                "description": ""
              },
              {
                "name": "polarization",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "demodulation_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "unvalidated_js_on",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "decode_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "unvalidated_js_on",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "antenna_uplink_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "spectrum_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "center_frequency",
                "type": "object",
                "description": ""
              },
              {
                "name": "polarization",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "target_eirp",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "value",
                "type": "number",
                "description": ""
              },
              {
                "name": "units",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "transmit_disabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "uplink_echo_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "antenna_uplink_config_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_recording_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html"><code>AWS::GroundStation::Config</code></a>.

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
    <td><code>configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ConfigData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configs</code></td>
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

Gets all properties from an individual <code>config</code>.
```sql
SELECT
region,
name,
tags,
type,
config_data,
arn,
id
FROM awscc.groundstation.configs
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>configs</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.groundstation.configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.groundstation.configs (
 Name,
 ConfigData,
 region
)
SELECT
'{{ name }}',
 '{{ config_data }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.groundstation.configs (
 Name,
 Tags,
 ConfigData,
 region
)
SELECT
 '{{ name }}',
 '{{ tags }}',
 '{{ config_data }}',
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
  - name: config
    props:
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: config_data
        value:
          antenna_downlink_config:
            spectrum_config:
              center_frequency:
                value: null
                units: '{{ units }}'
              bandwidth:
                value: null
                units: '{{ units }}'
              polarization: '{{ polarization }}'
          tracking_config:
            autotrack: '{{ autotrack }}'
          dataflow_endpoint_config:
            dataflow_endpoint_name: '{{ dataflow_endpoint_name }}'
            dataflow_endpoint_region: '{{ dataflow_endpoint_region }}'
          antenna_downlink_demod_decode_config:
            spectrum_config: null
            demodulation_config:
              unvalidated_js_on: '{{ unvalidated_js_on }}'
            decode_config:
              unvalidated_js_on: null
          antenna_uplink_config:
            spectrum_config:
              center_frequency: null
              polarization: null
            target_eirp:
              value: null
              units: '{{ units }}'
            transmit_disabled: '{{ transmit_disabled }}'
          uplink_echo_config:
            enabled: '{{ enabled }}'
            antenna_uplink_config_arn: '{{ antenna_uplink_config_arn }}'
          s3_recording_config:
            bucket_arn: '{{ bucket_arn }}'
            role_arn: '{{ role_arn }}'
            prefix: '{{ prefix }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.groundstation.configs
SET PatchDocument = string('{{ {
    "Name": name,
    "Tags": tags,
    "ConfigData": config_data
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.groundstation.configs
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configs</code> resource, the following permissions are required:

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
groundstation:CreateConfig,
groundstation:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
groundstation:GetConfig,
groundstation:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
groundstation:UpdateConfig,
groundstation:ListTagsForResource,
groundstation:TagResource,
groundstation:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
groundstation:DeleteConfig
```

</TabItem>
<TabItem value="list">

```json
groundstation:ListConfigs
```

</TabItem>
</Tabs>