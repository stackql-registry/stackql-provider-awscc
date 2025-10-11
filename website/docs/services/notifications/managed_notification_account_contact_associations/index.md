---
title: managed_notification_account_contact_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_notification_account_contact_associations
  - notifications
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

Creates, updates, deletes or gets a <code>managed_notification_account_contact_association</code> resource or lists <code>managed_notification_account_contact_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>managed_notification_account_contact_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for ManagedNotificationAccountContactAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.managed_notification_account_contact_associations" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="managed_notification_configuration_arn" /></td><td><code>string</code></td><td>The managed notification configuration ARN, against which the account contact association will be created</td></tr>
<tr><td><CopyableCode code="contact_identifier" /></td><td><code>string</code></td><td>This unique identifier for Contact</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationaccountcontactassociation.html"><code>AWS::Notifications::ManagedNotificationAccountContactAssociation</code></a>.

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
    <td><CopyableCode code="ContactIdentifier, ManagedNotificationConfigurationArn, region" /></td>
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
Gets all <code>managed_notification_account_contact_associations</code> in a region.
```sql
SELECT
region,
managed_notification_configuration_arn,
contact_identifier
FROM awscc.notifications.managed_notification_account_contact_associations
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>managed_notification_account_contact_association</code>.
```sql
SELECT
region,
managed_notification_configuration_arn,
contact_identifier
FROM awscc.notifications.managed_notification_account_contact_associations
WHERE region = 'us-east-1' AND data__Identifier = '<ManagedNotificationConfigurationArn>|<ContactIdentifier>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>managed_notification_account_contact_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.managed_notification_account_contact_associations (
 ManagedNotificationConfigurationArn,
 ContactIdentifier,
 region
)
SELECT 
'{{ ManagedNotificationConfigurationArn }}',
 '{{ ContactIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notifications.managed_notification_account_contact_associations (
 ManagedNotificationConfigurationArn,
 ContactIdentifier,
 region
)
SELECT 
 '{{ ManagedNotificationConfigurationArn }}',
 '{{ ContactIdentifier }}',
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
  - name: managed_notification_account_contact_association
    props:
      - name: ManagedNotificationConfigurationArn
        value: '{{ ManagedNotificationConfigurationArn }}'
      - name: ContactIdentifier
        value: '{{ ContactIdentifier }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.managed_notification_account_contact_associations
WHERE data__Identifier = '<ManagedNotificationConfigurationArn|ContactIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>managed_notification_account_contact_associations</code> resource, the following permissions are required:

### Create
```json
notifications:AssociateManagedNotificationAccountContact,
notifications:ListManagedNotificationChannelAssociations
```

### Read
```json
notifications:ListManagedNotificationChannelAssociations
```

### Update
```json
notifications:ListManagedNotificationChannelAssociations
```

### Delete
```json
notifications:DisassociateManagedNotificationAccountContact,
notifications:ListManagedNotificationChannelAssociations
```

### List
```json
notifications:ListManagedNotificationChannelAssociations
```
