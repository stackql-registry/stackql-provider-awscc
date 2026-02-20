---
title: bridge_outputs
hide_title: false
hide_table_of_contents: false
keywords:
  - bridge_outputs
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

Creates, updates, deletes or gets a <code>bridge_output</code> resource or lists <code>bridge_outputs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>bridge_outputs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::BridgeOutput</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.bridge_outputs" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "bridge_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the bridge."
  },
  {
    "name": "network_output",
    "type": "object",
    "description": "The output of the bridge.",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "The network output protocol."
      },
      {
        "name": "ip_address",
        "type": "string",
        "description": "The network output IP Address."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The network output port."
      },
      {
        "name": "network_name",
        "type": "string",
        "description": "The network output's gateway network name."
      },
      {
        "name": "ttl",
        "type": "integer",
        "description": "The network output TTL."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The network output name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgeoutput.html"><code>AWS::MediaConnect::BridgeOutput</code></a>.

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
    <td><CopyableCode code="BridgeArn, Name, NetworkOutput, region" /></td>
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

Gets all properties from an individual <code>bridge_output</code>.
```sql
SELECT
region,
bridge_arn,
network_output,
name
FROM awscc.mediaconnect.bridge_outputs
WHERE region = 'us-east-1' AND Identifier = '<BridgeArn>|<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bridge_output</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.bridge_outputs (
 BridgeArn,
 NetworkOutput,
 Name,
 region
)
SELECT 
'{{ BridgeArn }}',
 '{{ NetworkOutput }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.bridge_outputs (
 BridgeArn,
 NetworkOutput,
 Name,
 region
)
SELECT 
 '{{ BridgeArn }}',
 '{{ NetworkOutput }}',
 '{{ Name }}',
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
  - name: bridge_output
    props:
      - name: BridgeArn
        value: '{{ BridgeArn }}'
      - name: NetworkOutput
        value:
          Protocol: '{{ Protocol }}'
          IpAddress: '{{ IpAddress }}'
          Port: '{{ Port }}'
          NetworkName: '{{ NetworkName }}'
          Ttl: '{{ Ttl }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediaconnect.bridge_outputs
SET PatchDocument = string('{{ {
    "NetworkOutput": network_output
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BridgeArn>|<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.bridge_outputs
WHERE Identifier = '<BridgeArn|Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>bridge_outputs</code> resource, the following permissions are required:

### Create
```json
mediaconnect:AddBridgeOutputs,
mediaconnect:DescribeBridge
```

### Read
```json
mediaconnect:DescribeBridge
```

### Update
```json
mediaconnect:DescribeBridge,
mediaconnect:UpdateBridgeOutput
```

### Delete
```json
mediaconnect:RemoveBridgeOutput
```
