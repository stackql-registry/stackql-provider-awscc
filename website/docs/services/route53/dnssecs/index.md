---
title: dnssecs
hide_title: false
hide_table_of_contents: false
keywords:
  - dnssecs
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

Creates, updates, deletes or gets a <code>dnssec</code> resource or lists <code>dnssecs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dnssecs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource used to control (enable/disable) DNSSEC in a specific hosted zone.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.dnssecs" /></td></tr>
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html"><code>AWS::Route53::DNSSEC</code></a>.

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
    <td><code>dnssecs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="HostedZoneId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dnssecs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dnssecs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dnssecs</code></td>
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

Gets all properties from an individual <code>dnssec</code>.
```sql
SELECT
region,
hosted_zone_id
FROM awscc.route53.dnssecs
WHERE region = 'us-east-1' AND Identifier = '{{ hosted_zone_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>dnssecs</code> in a region.
```sql
SELECT
region,
hosted_zone_id
FROM awscc.route53.dnssecs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dnssec</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53.dnssecs (
 HostedZoneId,
 region
)
SELECT
'{{ hosted_zone_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53.dnssecs (
 HostedZoneId,
 region
)
SELECT
 '{{ hosted_zone_id }}',
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
  - name: dnssec
    props:
      - name: hosted_zone_id
        value: '{{ hosted_zone_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53.dnssecs
WHERE Identifier = '{{ hosted_zone_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dnssecs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
route53:GetDNSSEC,
route53:EnableHostedZoneDNSSEC,
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
<TabItem value="delete">

```json
route53:GetDNSSEC,
route53:DisableHostedZoneDNSSEC,
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