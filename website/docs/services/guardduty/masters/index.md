---
title: masters
hide_title: false
hide_table_of_contents: false
keywords:
  - masters
  - guardduty
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

Creates, updates, deletes or gets a <code>master</code> resource or lists <code>masters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>masters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>GuardDuty Master resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.masters" /></td></tr>
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
    "name": "master_id",
    "type": "string",
    "description": "ID of the account used as the master account."
  },
  {
    "name": "invitation_id",
    "type": "string",
    "description": "Value used to validate the master account to the member account."
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": "Unique ID of the detector of the GuardDuty member account."
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
    "name": "master_id",
    "type": "string",
    "description": "ID of the account used as the master account."
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": "Unique ID of the detector of the GuardDuty member account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html"><code>AWS::GuardDuty::Master</code></a>.

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
    <td><code>masters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MasterId, DetectorId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>masters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>masters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>masters</code></td>
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

Gets all properties from an individual <code>master</code>.
```sql
SELECT
region,
master_id,
invitation_id,
detector_id
FROM awscc.guardduty.masters
WHERE region = 'us-east-1' AND Identifier = '{{ detector_id }}|{{ master_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>masters</code> in a region.
```sql
SELECT
region,
detector_id,
master_id
FROM awscc.guardduty.masters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>master</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.guardduty.masters (
 MasterId,
 DetectorId,
 region
)
SELECT
'{{ master_id }}',
 '{{ detector_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.masters (
 MasterId,
 InvitationId,
 DetectorId,
 region
)
SELECT
 '{{ master_id }}',
 '{{ invitation_id }}',
 '{{ detector_id }}',
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
  - name: master
    props:
      - name: master_id
        value: '{{ master_id }}'
      - name: invitation_id
        value: '{{ invitation_id }}'
      - name: detector_id
        value: '{{ detector_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.masters
WHERE Identifier = '{{ detector_id }}|{{ master_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>masters</code> resource, the following permissions are required:

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
guardduty:ListInvitations,
guardduty:AcceptInvitation,
guardduty:GetMasterAccount
```

</TabItem>
<TabItem value="read">

```json
guardduty:GetMasterAccount
```

</TabItem>
<TabItem value="delete">

```json
guardduty:DisassociateFromMasterAccount
```

</TabItem>
<TabItem value="list">

```json
guardduty:GetMasterAccount
```

</TabItem>
</Tabs>