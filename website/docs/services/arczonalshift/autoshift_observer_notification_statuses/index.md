---
title: autoshift_observer_notification_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - autoshift_observer_notification_statuses
  - arczonalshift
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

Creates, updates, deletes or gets an <code>autoshift_observer_notification_status</code> resource or lists <code>autoshift_observer_notification_statuses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>autoshift_observer_notification_statuses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.arczonalshift.autoshift_observer_notification_statuses" /></td></tr>
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
    "name": "status",
    "type": "object",
    "description": "Definition of AWS::ARCZonalShift::AutoshiftObserverNotificationStatus Resource Type",
    "children": [
      {
        "name": "account_id",
        "type": "string",
        "description": "User account id, used as part of the primary identifier for the resource"
      },
      {
        "name": "region",
        "type": "string",
        "description": "Region, used as part of the primary identifier for the resource"
      }
    ]
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as part of the primary identifier for the resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "Region, used as part of the primary identifier for the resource"
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
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as part of the primary identifier for the resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "Region, used as part of the primary identifier for the resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-autoshiftobservernotificationstatus.html"><code>AWS::ARCZonalShift::AutoshiftObserverNotificationStatus</code></a>.

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
    <td><code>autoshift_observer_notification_statuses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Status, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>autoshift_observer_notification_statuses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>autoshift_observer_notification_statuses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>autoshift_observer_notification_statuses</code></td>
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

Gets all properties from an individual <code>autoshift_observer_notification_status</code>.
```sql
SELECT
region,
status,
account_id,
region
FROM awscc.arczonalshift.autoshift_observer_notification_statuses
WHERE region = 'us-east-1' AND Identifier = '<AccountId>|<Region>';
```
</TabItem>
<TabItem value="list">

Lists all <code>autoshift_observer_notification_statuses</code> in a region.
```sql
SELECT
region,
account_id,
region
FROM awscc.arczonalshift.autoshift_observer_notification_statuses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>autoshift_observer_notification_status</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.arczonalshift.autoshift_observer_notification_statuses (
 Status,
 region
)
SELECT 
'{{ Status }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.arczonalshift.autoshift_observer_notification_statuses (
 Status,
 region
)
SELECT 
 '{{ Status }}',
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
  - name: autoshift_observer_notification_status
    props:
      - name: Status
        value:
          Status: null

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.arczonalshift.autoshift_observer_notification_statuses
WHERE Identifier = '<AccountId|Region>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>autoshift_observer_notification_statuses</code> resource, the following permissions are required:

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
arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus
```

</TabItem>
<TabItem value="read">

```json
arc-zonal-shift:GetAutoshiftObserverNotificationStatus
```

</TabItem>
<TabItem value="delete">

```json
arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus,
arc-zonal-shift:GetAutoshiftObserverNotificationStatus
```

</TabItem>
<TabItem value="list">

```json
arc-zonal-shift:GetAutoshiftObserverNotificationStatus
```

</TabItem>
</Tabs>