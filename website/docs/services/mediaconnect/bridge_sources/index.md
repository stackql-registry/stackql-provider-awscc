---
title: bridge_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - bridge_sources
  - mediaconnect
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

Creates, updates, deletes or gets a <code>bridge_source</code> resource or lists <code>bridge_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bridge_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::BridgeSource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.bridge_sources" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The name of the source."
  },
  {
    "name": "bridge_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the bridge."
  },
  {
    "name": "flow_source",
    "type": "object",
    "description": "The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.",
    "children": [
      {
        "name": "flow_arn",
        "type": "string",
        "description": "The ARN of the cloud flow used as a source of this bridge."
      },
      {
        "name": "flow_vpc_interface_attachment",
        "type": "object",
        "description": "The name of the VPC interface attachment to use for this source.",
        "children": [
          {
            "name": "vpc_interface_name",
            "type": "string",
            "description": "The name of the VPC interface to use for this resource."
          }
        ]
      }
    ]
  },
  {
    "name": "network_source",
    "type": "object",
    "description": "The source of the bridge. A network source originates at your premises.",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "The network source protocol."
      },
      {
        "name": "multicast_ip",
        "type": "string",
        "description": "The network source multicast IP."
      },
      {
        "name": "multicast_source_settings",
        "type": "object",
        "description": "The settings related to the multicast source.",
        "children": [
          {
            "name": "multicast_source_ip",
            "type": "string",
            "description": "The IP address of the source for source-specific multicast (SSM)."
          }
        ]
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The network source port."
      },
      {
        "name": "network_name",
        "type": "string",
        "description": "The network source's gateway network name."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html"><code>AWS::MediaConnect::BridgeSource</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, BridgeArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>bridge_source</code>.
```sql
SELECT
region,
name,
bridge_arn,
flow_source,
network_source
FROM awscc.mediaconnect.bridge_sources
WHERE region = 'us-east-1' AND Identifier = '<BridgeArn>|<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bridge_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.bridge_sources (
 Name,
 BridgeArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ BridgeArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.bridge_sources (
 Name,
 BridgeArn,
 FlowSource,
 NetworkSource,
 region
)
SELECT 
 '{{ Name }}',
 '{{ BridgeArn }}',
 '{{ FlowSource }}',
 '{{ NetworkSource }}',
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
  - name: bridge_source
    props:
      - name: Name
        value: '{{ Name }}'
      - name: BridgeArn
        value: '{{ BridgeArn }}'
      - name: FlowSource
        value:
          FlowArn: '{{ FlowArn }}'
          FlowVpcInterfaceAttachment:
            VpcInterfaceName: '{{ VpcInterfaceName }}'
      - name: NetworkSource
        value:
          Protocol: '{{ Protocol }}'
          MulticastIp: '{{ MulticastIp }}'
          MulticastSourceSettings:
            MulticastSourceIp: '{{ MulticastSourceIp }}'
          Port: '{{ Port }}'
          NetworkName: '{{ NetworkName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>bridge_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediaconnect.bridge_sources
SET PatchDocument = string('{{ {
    "FlowSource": flow_source,
    "NetworkSource": network_source
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BridgeArn>|<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.bridge_sources
WHERE Identifier = '<BridgeArn|Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bridge_sources</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
mediaconnect:AddBridgeSources,
mediaconnect:DescribeBridge
```

</TabItem>
<TabItem value="read">

```json
mediaconnect:DescribeBridge
```

</TabItem>
<TabItem value="update">

```json
mediaconnect:DescribeBridge,
mediaconnect:UpdateBridgeSource
```

</TabItem>
<TabItem value="delete">

```json
mediaconnect:RemoveBridgeSource
```

</TabItem>
</Tabs>