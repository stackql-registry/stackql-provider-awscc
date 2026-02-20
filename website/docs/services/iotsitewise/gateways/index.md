---
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
  - iotsitewise
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

Creates, updates, deletes or gets a <code>gateway</code> resource or lists <code>gateways</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>gateways</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Gateway</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.gateways" /></td></tr>
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
    "name": "gateway_name",
    "type": "string",
    "description": "A unique, friendly name for the gateway."
  },
  {
    "name": "gateway_platform",
    "type": "object",
    "description": "The gateway's platform. You can only specify one platform in a gateway.",
    "children": [
      {
        "name": "greengrass_v2",
        "type": "object",
        "description": "A gateway that runs on AWS IoT Greengrass V2.",
        "children": [
          {
            "name": "core_device_thing_name",
            "type": "string",
            "description": "The name of the CoreDevice in GreenGrass V2."
          },
          {
            "name": "core_device_operating_system",
            "type": "string",
            "description": "The operating system of the core device in AWS IoT Greengrass V2."
          }
        ]
      },
      {
        "name": "siemens_ie",
        "type": "object",
        "description": "A gateway that runs on Siemens Industrial Edge.",
        "children": [
          {
            "name": "iot_core_thing_name",
            "type": "string",
            "description": "The name of the IoT Core Thing."
          }
        ]
      }
    ]
  },
  {
    "name": "gateway_version",
    "type": "string",
    "description": "The version of the gateway you want to create."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the gateway.",
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
    "name": "gateway_id",
    "type": "string",
    "description": "The ID of the gateway device."
  },
  {
    "name": "gateway_capability_summaries",
    "type": "array",
    "description": "A list of gateway capability summaries that each contain a namespace and status.",
    "children": [
      {
        "name": "capability_namespace",
        "type": "string",
        "description": "The namespace of the capability configuration."
      },
      {
        "name": "capability_configuration",
        "type": "string",
        "description": "The JSON document that defines the gateway capability's configuration."
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
    "name": "gateway_id",
    "type": "string",
    "description": "The ID of the gateway device."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html"><code>AWS::IoTSiteWise::Gateway</code></a>.

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
    <td><code>gateways</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GatewayName, GatewayPlatform, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>gateways</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>gateways</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>gateways_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>gateways</code></td>
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

Gets all properties from an individual <code>gateway</code>.
```sql
SELECT
region,
gateway_name,
gateway_platform,
gateway_version,
tags,
gateway_id,
gateway_capability_summaries
FROM awscc.iotsitewise.gateways
WHERE region = 'us-east-1' AND Identifier = '<GatewayId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>gateways</code> in a region.
```sql
SELECT
region,
gateway_id
FROM awscc.iotsitewise.gateways_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>gateway</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.gateways (
 GatewayName,
 GatewayPlatform,
 region
)
SELECT 
'{{ GatewayName }}',
 '{{ GatewayPlatform }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.gateways (
 GatewayName,
 GatewayPlatform,
 GatewayVersion,
 Tags,
 GatewayCapabilitySummaries,
 region
)
SELECT 
 '{{ GatewayName }}',
 '{{ GatewayPlatform }}',
 '{{ GatewayVersion }}',
 '{{ Tags }}',
 '{{ GatewayCapabilitySummaries }}',
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
  - name: gateway
    props:
      - name: GatewayName
        value: '{{ GatewayName }}'
      - name: GatewayPlatform
        value:
          GreengrassV2:
            CoreDeviceThingName: '{{ CoreDeviceThingName }}'
            CoreDeviceOperatingSystem: '{{ CoreDeviceOperatingSystem }}'
          SiemensIE:
            IotCoreThingName: '{{ IotCoreThingName }}'
      - name: GatewayVersion
        value: '{{ GatewayVersion }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: GatewayCapabilitySummaries
        value:
          - CapabilityNamespace: '{{ CapabilityNamespace }}'
            CapabilityConfiguration: '{{ CapabilityConfiguration }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotsitewise.gateways
SET PatchDocument = string('{{ {
    "GatewayName": gateway_name,
    "Tags": tags,
    "GatewayCapabilitySummaries": gateway_capability_summaries
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<GatewayId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.gateways
WHERE Identifier = '<GatewayId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>gateways</code> resource, the following permissions are required:

### Create
```json
iotsitewise:CreateGateway,
iotsitewise:DescribeGateway,
iotsitewise:DescribeGatewayCapabilityConfiguration,
iotsitewise:UpdateGatewayCapabilityConfiguration,
iam:PassRole,
iam:GetRole,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource
```

### Read
```json
iotsitewise:DescribeGateway,
iotsitewise:DescribeGatewayCapabilityConfiguration,
iotsitewise:ListTagsForResource
```

### Update
```json
iotsitewise:UpdateGateway,
iotsitewise:UpdateGatewayCapabilityConfiguration,
iotsitewise:TagResource,
iotsitewise:UntagResource,
iotsitewise:DescribeGateway,
iotsitewise:DescribeGatewayCapabilityConfiguration,
iotsitewise:ListTagsForResource
```

### Delete
```json
iotsitewise:DescribeGateway,
iotsitewise:DescribeGatewayCapabilityConfiguration,
iotsitewise:DeleteGateway
```

### List
```json
iotsitewise:ListGateways,
iotsitewise:ListTagsForResource
```
