---
title: transit_gateway_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_connects
  - ec2
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

Creates, updates, deletes or gets a <code>transit_gateway_connect</code> resource or lists <code>transit_gateway_connects</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_connects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayConnect type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_connects" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the Connect attachment."
  },
  {
    "name": "transport_transit_gateway_attachment_id",
    "type": "string",
    "description": "The ID of the attachment from which the Connect attachment was created."
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "The ID of the transit gateway."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the attachment."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The creation time."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the attachment.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "options",
    "type": "object",
    "description": "The Connect attachment options.",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "The tunnel protocol."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html"><code>AWS::EC2::TransitGatewayConnect</code></a>.

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
    <td><CopyableCode code="TransportTransitGatewayAttachmentId, Options, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>transit_gateway_connect</code>.
```sql
SELECT
region,
transit_gateway_attachment_id,
transport_transit_gateway_attachment_id,
transit_gateway_id,
state,
creation_time,
tags,
options
FROM awscc.ec2.transit_gateway_connects
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayAttachmentId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_connect</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_connects (
 TransportTransitGatewayAttachmentId,
 Options,
 region
)
SELECT 
'{{ TransportTransitGatewayAttachmentId }}',
 '{{ Options }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_connects (
 TransportTransitGatewayAttachmentId,
 Tags,
 Options,
 region
)
SELECT 
 '{{ TransportTransitGatewayAttachmentId }}',
 '{{ Tags }}',
 '{{ Options }}',
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
  - name: transit_gateway_connect
    props:
      - name: TransportTransitGatewayAttachmentId
        value: '{{ TransportTransitGatewayAttachmentId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Options
        value:
          Protocol: '{{ Protocol }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_connects
WHERE data__Identifier = '<TransitGatewayAttachmentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_connects</code> resource, the following permissions are required:

### Create
```json
ec2:CreateTransitGatewayConnect,
ec2:DescribeTransitGatewayConnects,
ec2:CreateTags,
ec2:DescribeTags
```

### Read
```json
ec2:DescribeTransitGatewayConnects,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeTransitGatewayConnects,
ec2:DeleteTags,
ec2:CreateTags,
ec2:DescribeTags
```

### Delete
```json
ec2:DeleteTransitGatewayConnect,
ec2:DescribeTransitGatewayConnects,
ec2:DeleteTags,
ec2:DescribeTags
```

### List
```json
ec2:DescribeTransitGatewayConnects,
ec2:DescribeTags
```
