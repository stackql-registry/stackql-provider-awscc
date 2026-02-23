---
title: proactive_engagements
hide_title: false
hide_table_of_contents: false
keywords:
  - proactive_engagements
  - shield
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

Creates, updates, deletes or gets a <code>proactive_engagement</code> resource or lists <code>proactive_engagements</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>proactive_engagements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.shield.proactive_engagements" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "proactive_engagement_status",
    "type": "string",
    "description": "If &#96;ENABLED&#96;, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.<br />If &#96;DISABLED&#96;, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support."
  },
  {
    "name": "emergency_contact_list",
    "type": "array",
    "description": "A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.<br />To enable proactive engagement, the contact list must include at least one phone number.",
    "children": [
      {
        "name": "contact_notes",
        "type": "string",
        "description": "Additional notes regarding the contact."
      },
      {
        "name": "email_address",
        "type": "string",
        "description": "The email address for the contact."
      },
      {
        "name": "phone_number",
        "type": "string",
        "description": "The phone number for the contact"
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
    "name": "account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html"><code>AWS::Shield::ProactiveEngagement</code></a>.

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
    <td><code>proactive_engagements</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProactiveEngagementStatus, EmergencyContactList, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>proactive_engagements</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>proactive_engagements</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>proactive_engagements_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>proactive_engagements</code></td>
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

Gets all properties from an individual <code>proactive_engagement</code>.
```sql
SELECT
region,
account_id,
proactive_engagement_status,
emergency_contact_list
FROM awscc.shield.proactive_engagements
WHERE region = 'us-east-1' AND Identifier = '{{ account_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>proactive_engagements</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.shield.proactive_engagements_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>proactive_engagement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.shield.proactive_engagements (
 ProactiveEngagementStatus,
 EmergencyContactList,
 region
)
SELECT
'{{ proactive_engagement_status }}',
 '{{ emergency_contact_list }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.shield.proactive_engagements (
 ProactiveEngagementStatus,
 EmergencyContactList,
 region
)
SELECT
 '{{ proactive_engagement_status }}',
 '{{ emergency_contact_list }}',
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
  - name: proactive_engagement
    props:
      - name: proactive_engagement_status
        value: '{{ proactive_engagement_status }}'
      - name: emergency_contact_list
        value:
          - contact_notes: '{{ contact_notes }}'
            email_address: '{{ email_address }}'
            phone_number: '{{ phone_number }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>proactive_engagement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.shield.proactive_engagements
SET PatchDocument = string('{{ {
    "ProactiveEngagementStatus": proactive_engagement_status,
    "EmergencyContactList": emergency_contact_list
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ account_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.shield.proactive_engagements
WHERE Identifier = '{{ account_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>proactive_engagements</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings,
shield:AssociateProactiveEngagementDetails,
shield:UpdateEmergencyContactSettings,
shield:EnableProactiveEngagement
```

</TabItem>
<TabItem value="delete">

```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings,
shield:UpdateEmergencyContactSettings,
shield:DisableProactiveEngagement
```

</TabItem>
<TabItem value="read">

```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings
```

</TabItem>
<TabItem value="update">

```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings,
shield:UpdateEmergencyContactSettings,
shield:EnableProactiveEngagement,
shield:DisableProactiveEngagement
```

</TabItem>
<TabItem value="list">

```json
shield:DescribeSubscription,
shield:DescribeEmergencyContactSettings
```

</TabItem>
</Tabs>