---
title: organizational_unit_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizational_unit_associations
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>organizational_unit_association</code> resource or lists <code>organizational_unit_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organizational_unit_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Notifications::OrganizationalUnitAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.notifications.organizational_unit_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "notification_configuration_arn",
    "type": "string",
    "description": "ARN identifier of the NotificationConfiguration.<br />Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1"
  },
  {
    "name": "organizational_unit_id",
    "type": "string",
    "description": "The ID of the organizational unit."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-organizationalunitassociation.html"><code>AWS::Notifications::OrganizationalUnitAssociation</code></a>.

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
    <td><CopyableCode code="NotificationConfigurationArn, OrganizationalUnitId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>organizational_unit_association</code>.
```sql
SELECT
region,
notification_configuration_arn,
organizational_unit_id
FROM awscc.notifications.organizational_unit_associations
WHERE region = 'us-east-1' AND data__Identifier = '<NotificationConfigurationArn>|<OrganizationalUnitId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>organizational_unit_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.notifications.organizational_unit_associations (
 NotificationConfigurationArn,
 OrganizationalUnitId,
 region
)
SELECT 
'{{ NotificationConfigurationArn }}',
 '{{ OrganizationalUnitId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.notifications.organizational_unit_associations (
 NotificationConfigurationArn,
 OrganizationalUnitId,
 region
)
SELECT 
 '{{ NotificationConfigurationArn }}',
 '{{ OrganizationalUnitId }}',
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
  - name: organizational_unit_association
    props:
      - name: NotificationConfigurationArn
        value: '{{ NotificationConfigurationArn }}'
      - name: OrganizationalUnitId
        value: '{{ OrganizationalUnitId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.notifications.organizational_unit_associations
WHERE data__Identifier = '<NotificationConfigurationArn|OrganizationalUnitId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>organizational_unit_associations</code> resource, the following permissions are required:

### Create
```json
notifications:AssociateOrganizationalUnit,
notifications:GetNotificationConfiguration,
notifications:ListOrganizationalUnits
```

### Read
```json
notifications:ListOrganizationalUnits
```

### Delete
```json
notifications:DisassociateOrganizationalUnit,
notifications:ListOrganizationalUnits
```

### List
```json
notifications:ListOrganizationalUnits
```
