---
title: flow_entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_entitlements
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

Creates, updates, deletes or gets a <code>flow_entitlement</code> resource or lists <code>flow_entitlements</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flow_entitlements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaConnect::FlowEntitlement</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediaconnect.flow_entitlements" /></td></tr>
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
    "name": "flow_arn",
    "type": "string",
    "description": "The ARN of the flow."
  },
  {
    "name": "entitlement_arn",
    "type": "string",
    "description": "The ARN of the entitlement."
  },
  {
    "name": "data_transfer_subscriber_fee_percent",
    "type": "integer",
    "description": "Percentage from 0-100 of the data transfer cost to be billed to the subscriber."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the entitlement."
  },
  {
    "name": "encryption",
    "type": "object",
    "description": "The type of encryption that will be used on the output that is associated with this entitlement.",
    "children": [
      {
        "name": "algorithm",
        "type": "string",
        "description": "The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256)."
      },
      {
        "name": "constant_initialization_vector",
        "type": "string",
        "description": "A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption."
      },
      {
        "name": "device_id",
        "type": "string",
        "description": "The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption."
      },
      {
        "name": "key_type",
        "type": "string",
        "description": "The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key)."
      },
      {
        "name": "region",
        "type": "string",
        "description": "The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption."
      },
      {
        "name": "resource_id",
        "type": "string",
        "description": "An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity)."
      },
      {
        "name": "secret_arn",
        "type": "string",
        "description": "The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption."
      },
      {
        "name": "url",
        "type": "string",
        "description": "The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption."
      }
    ]
  },
  {
    "name": "entitlement_status",
    "type": "string",
    "description": "An indication of whether the entitlement is enabled."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the entitlement."
  },
  {
    "name": "subscribers",
    "type": "array",
    "description": "The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source."
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
    "name": "entitlement_arn",
    "type": "string",
    "description": "The ARN of the entitlement."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html"><code>AWS::MediaConnect::FlowEntitlement</code></a>.

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
    <td><code>flow_entitlements</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FlowArn, Name, Subscribers, Description, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>flow_entitlements</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>flow_entitlements</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>flow_entitlements_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>flow_entitlements</code></td>
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

Gets all properties from an individual <code>flow_entitlement</code>.
```sql
SELECT
region,
flow_arn,
entitlement_arn,
data_transfer_subscriber_fee_percent,
description,
encryption,
entitlement_status,
name,
subscribers
FROM awscc.mediaconnect.flow_entitlements
WHERE region = 'us-east-1' AND Identifier = '<EntitlementArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>flow_entitlements</code> in a region.
```sql
SELECT
region,
entitlement_arn
FROM awscc.mediaconnect.flow_entitlements_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flow_entitlement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediaconnect.flow_entitlements (
 FlowArn,
 Description,
 Name,
 Subscribers,
 region
)
SELECT 
'{{ FlowArn }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ Subscribers }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediaconnect.flow_entitlements (
 FlowArn,
 DataTransferSubscriberFeePercent,
 Description,
 Encryption,
 EntitlementStatus,
 Name,
 Subscribers,
 region
)
SELECT 
 '{{ FlowArn }}',
 '{{ DataTransferSubscriberFeePercent }}',
 '{{ Description }}',
 '{{ Encryption }}',
 '{{ EntitlementStatus }}',
 '{{ Name }}',
 '{{ Subscribers }}',
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
  - name: flow_entitlement
    props:
      - name: FlowArn
        value: '{{ FlowArn }}'
      - name: DataTransferSubscriberFeePercent
        value: '{{ DataTransferSubscriberFeePercent }}'
      - name: Description
        value: '{{ Description }}'
      - name: Encryption
        value:
          Algorithm: '{{ Algorithm }}'
          ConstantInitializationVector: '{{ ConstantInitializationVector }}'
          DeviceId: '{{ DeviceId }}'
          KeyType: '{{ KeyType }}'
          Region: '{{ Region }}'
          ResourceId: '{{ ResourceId }}'
          RoleArn: '{{ RoleArn }}'
          SecretArn: '{{ SecretArn }}'
          Url: '{{ Url }}'
      - name: EntitlementStatus
        value: '{{ EntitlementStatus }}'
      - name: Name
        value: '{{ Name }}'
      - name: Subscribers
        value:
          - '{{ Subscribers[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>flow_entitlement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediaconnect.flow_entitlements
SET PatchDocument = string('{{ {
    "FlowArn": flow_arn,
    "Description": description,
    "Encryption": encryption,
    "EntitlementStatus": entitlement_status,
    "Subscribers": subscribers
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<EntitlementArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediaconnect.flow_entitlements
WHERE Identifier = '<EntitlementArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flow_entitlements</code> resource, the following permissions are required:

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
iam:PassRole,
mediaconnect:GrantFlowEntitlements
```

</TabItem>
<TabItem value="read">

```json
mediaconnect:DescribeFlow
```

</TabItem>
<TabItem value="update">

```json
mediaconnect:DescribeFlow,
mediaconnect:UpdateFlowEntitlement
```

</TabItem>
<TabItem value="delete">

```json
mediaconnect:DescribeFlow,
mediaconnect:RevokeFlowEntitlement
```

</TabItem>
<TabItem value="list">

```json
mediaconnect:DescribeFlow,
mediaconnect:ListFlows
```

</TabItem>
</Tabs>