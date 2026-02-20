---
title: key_signing_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - key_signing_keys
  - route53
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

Creates, updates, deletes or gets a <code>key_signing_key</code> resource or lists <code>key_signing_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>key_signing_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a key signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.key_signing_keys" /></td></tr>
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
    "name": "hosted_zone_id",
    "type": "string",
    "description": "The unique string (ID) used to identify a hosted zone."
  },
  {
    "name": "status",
    "type": "string",
    "description": "A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE."
  },
  {
    "name": "name",
    "type": "string",
    "description": "An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone."
  },
  {
    "name": "key_management_service_arn",
    "type": "string",
    "description": "The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone."
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
    "name": "hosted_zone_id",
    "type": "string",
    "description": "The unique string (ID) used to identify a hosted zone."
  },
  {
    "name": "name",
    "type": "string",
    "description": "An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html"><code>AWS::Route53::KeySigningKey</code></a>.

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
    <td><code>key_signing_keys</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Status, HostedZoneId, Name, KeyManagementServiceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>key_signing_keys</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>key_signing_keys</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>key_signing_keys_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>key_signing_keys</code></td>
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

Gets all properties from an individual <code>key_signing_key</code>.
```sql
SELECT
region,
hosted_zone_id,
status,
name,
key_management_service_arn
FROM awscc.route53.key_signing_keys
WHERE Identifier = '<HostedZoneId>|<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>key_signing_keys</code> in a region.
```sql
SELECT
region,
hosted_zone_id,
name
FROM awscc.route53.key_signing_keys_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>key_signing_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53.key_signing_keys (
 HostedZoneId,
 Status,
 Name,
 KeyManagementServiceArn,
 region
)
SELECT 
'{{ HostedZoneId }}',
 '{{ Status }}',
 '{{ Name }}',
 '{{ KeyManagementServiceArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53.key_signing_keys (
 HostedZoneId,
 Status,
 Name,
 KeyManagementServiceArn,
 region
)
SELECT 
 '{{ HostedZoneId }}',
 '{{ Status }}',
 '{{ Name }}',
 '{{ KeyManagementServiceArn }}',
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
  - name: key_signing_key
    props:
      - name: HostedZoneId
        value: '{{ HostedZoneId }}'
      - name: Status
        value: '{{ Status }}'
      - name: Name
        value: '{{ Name }}'
      - name: KeyManagementServiceArn
        value: '{{ KeyManagementServiceArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>key_signing_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53.key_signing_keys
SET PatchDocument = string('{{ {
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<HostedZoneId>|<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53.key_signing_keys
WHERE Identifier = '<HostedZoneId|Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>key_signing_keys</code> resource, the following permissions are required:

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
route53:CreateKeySigningKey,
kms:DescribeKey,
kms:GetPublicKey,
kms:Sign,
kms:CreateGrant
```

</TabItem>
<TabItem value="read">

```json
route53:GetDNSSEC
```

</TabItem>
<TabItem value="update">

```json
route53:GetDNSSEC,
route53:ActivateKeySigningKey,
route53:DeactivateKeySigningKey,
kms:DescribeKey,
kms:GetPublicKey,
kms:Sign,
kms:CreateGrant
```

</TabItem>
<TabItem value="delete">

```json
route53:DeactivateKeySigningKey,
route53:DeleteKeySigningKey,
kms:DescribeKey,
kms:GetPublicKey,
kms:Sign,
kms:CreateGrant
```

</TabItem>
<TabItem value="list">

```json
route53:GetDNSSEC,
route53:ListHostedZones
```

</TabItem>
</Tabs>