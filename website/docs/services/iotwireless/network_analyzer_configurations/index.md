---
title: network_analyzer_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - network_analyzer_configurations
  - iotwireless
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

Creates, updates, deletes or gets a <code>network_analyzer_configuration</code> resource or lists <code>network_analyzer_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_analyzer_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Create and manage NetworkAnalyzerConfiguration resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.network_analyzer_configurations" /></td></tr>
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
    "description": "Name of the network analyzer configuration"
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the new resource"
  },
  {
    "name": "trace_content",
    "type": "object",
    "description": "Trace content for your wireless gateway and wireless device resources",
    "children": [
      {
        "name": "wireless_device_frame_info",
        "type": "string",
        "description": ""
      },
      {
        "name": "log_level",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "wireless_devices",
    "type": "array",
    "description": "List of wireless gateway resources that have been added to the network analyzer configuration"
  },
  {
    "name": "wireless_gateways",
    "type": "array",
    "description": "List of wireless gateway resources that have been added to the network analyzer configuration"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Arn for network analyzer configuration, Returned upon successful create."
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
    "name": "name",
    "type": "string",
    "description": "Name of the network analyzer configuration"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html"><code>AWS::IoTWireless::NetworkAnalyzerConfiguration</code></a>.

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
    <td><code>network_analyzer_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_analyzer_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_analyzer_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_analyzer_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_analyzer_configurations</code></td>
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

Gets all properties from an individual <code>network_analyzer_configuration</code>.
```sql
SELECT
region,
name,
description,
trace_content,
wireless_devices,
wireless_gateways,
arn,
tags
FROM awscc.iotwireless.network_analyzer_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_analyzer_configurations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.iotwireless.network_analyzer_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_analyzer_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.network_analyzer_configurations (
 Name,
 region
)
SELECT
'{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotwireless.network_analyzer_configurations (
 Name,
 Description,
 TraceContent,
 WirelessDevices,
 WirelessGateways,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ trace_content }}',
 '{{ wireless_devices }}',
 '{{ wireless_gateways }}',
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
  - name: network_analyzer_configuration
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: trace_content
        value:
          wireless_device_frame_info: '{{ wireless_device_frame_info }}'
          log_level: '{{ log_level }}'
      - name: wireless_devices
        value:
          - '{{ wireless_devices[0] }}'
      - name: wireless_gateways
        value:
          - '{{ wireless_gateways[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>network_analyzer_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotwireless.network_analyzer_configurations
SET PatchDocument = string('{{ {
    "Description": description,
    "TraceContent": trace_content,
    "WirelessDevices": wireless_devices,
    "WirelessGateways": wireless_gateways,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotwireless.network_analyzer_configurations
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_analyzer_configurations</code> resource, the following permissions are required:

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
iotwireless:CreateNetworkAnalyzerConfiguration,
iotwireless:TagResource
```

</TabItem>
<TabItem value="read">

```json
iotwireless:GetNetworkAnalyzerConfiguration,
iotwireless:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iotwireless:UpdateNetworkAnalyzerConfiguration,
iotwireless:GetNetworkAnalyzerConfiguration,
iotwireless:TagResource,
iotwireless:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
iotwireless:DeleteNetworkAnalyzerConfiguration
```

</TabItem>
<TabItem value="list">

```json
iotwireless:ListNetworkAnalyzerConfigurations,
iotwireless:ListTagsForResource
```

</TabItem>
</Tabs>