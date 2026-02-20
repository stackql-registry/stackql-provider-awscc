---
title: transit_gateway_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_registrations
  - networkmanager
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

Creates, updates, deletes or gets a <code>transit_gateway_registration</code> resource or lists <code>transit_gateway_registrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_registrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::TransitGatewayRegistration type registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.transit_gateway_registrations" /></td></tr>
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
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "transit_gateway_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the transit gateway."
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
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "transit_gateway_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the transit gateway."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html"><code>AWS::NetworkManager::TransitGatewayRegistration</code></a>.

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
    <td><code>transit_gateway_registrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GlobalNetworkId, TransitGatewayArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_registrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_registrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_registrations</code></td>
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

Gets all properties from an individual <code>transit_gateway_registration</code>.
```sql
SELECT
region,
global_network_id,
transit_gateway_arn
FROM awscc.networkmanager.transit_gateway_registrations
WHERE region = 'us-east-1' AND Identifier = '<GlobalNetworkId>|<TransitGatewayArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_registrations</code> in a region.
```sql
SELECT
region,
global_network_id,
transit_gateway_arn
FROM awscc.networkmanager.transit_gateway_registrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_registration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.transit_gateway_registrations (
 GlobalNetworkId,
 TransitGatewayArn,
 region
)
SELECT 
'{{ GlobalNetworkId }}',
 '{{ TransitGatewayArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.transit_gateway_registrations (
 GlobalNetworkId,
 TransitGatewayArn,
 region
)
SELECT 
 '{{ GlobalNetworkId }}',
 '{{ TransitGatewayArn }}',
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
  - name: transit_gateway_registration
    props:
      - name: GlobalNetworkId
        value: '{{ GlobalNetworkId }}'
      - name: TransitGatewayArn
        value: '{{ TransitGatewayArn }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.transit_gateway_registrations
WHERE Identifier = '<GlobalNetworkId|TransitGatewayArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_registrations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
networkmanager:RegisterTransitGateway,
networkmanager:GetTransitGatewayRegistrations
```

</TabItem>
<TabItem value="read">

```json
networkmanager:GetTransitGatewayRegistrations
```

</TabItem>
<TabItem value="list">

```json
networkmanager:GetTransitGatewayRegistrations
```

</TabItem>
<TabItem value="delete">

```json
networkmanager:DeregisterTransitGateway,
networkmanager:GetTransitGatewayRegistrations
```

</TabItem>
</Tabs>