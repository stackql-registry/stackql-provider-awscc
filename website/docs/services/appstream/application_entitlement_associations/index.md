---
title: application_entitlement_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - application_entitlement_associations
  - appstream
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

Creates, updates, deletes or gets an <code>application_entitlement_association</code> resource or lists <code>application_entitlement_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>application_entitlement_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppStream::ApplicationEntitlementAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appstream.application_entitlement_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "stack_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "entitlement_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-applicationentitlementassociation.html"><code>AWS::AppStream::ApplicationEntitlementAssociation</code></a>.

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
    <td><CopyableCode code="StackName, EntitlementName, ApplicationIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>application_entitlement_association</code>.
```sql
SELECT
region,
stack_name,
entitlement_name,
application_identifier
FROM awscc.appstream.application_entitlement_associations
WHERE region = 'us-east-1' AND Identifier = '{{ stack_name }}|{{ entitlement_name }}|{{ application_identifier }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application_entitlement_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appstream.application_entitlement_associations (
 StackName,
 EntitlementName,
 ApplicationIdentifier,
 region
)
SELECT
'{{ stack_name }}',
 '{{ entitlement_name }}',
 '{{ application_identifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appstream.application_entitlement_associations (
 StackName,
 EntitlementName,
 ApplicationIdentifier,
 region
)
SELECT
 '{{ stack_name }}',
 '{{ entitlement_name }}',
 '{{ application_identifier }}',
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
  - name: application_entitlement_association
    props:
      - name: stack_name
        value: '{{ stack_name }}'
      - name: entitlement_name
        value: '{{ entitlement_name }}'
      - name: application_identifier
        value: '{{ application_identifier }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appstream.application_entitlement_associations
WHERE Identifier = '{{ stack_name }}|{{ entitlement_name }}|{{ application_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>application_entitlement_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
appstream:AssociateApplicationToEntitlement,
appstream:ListEntitledApplications
```

</TabItem>
<TabItem value="read">

```json
appstream:ListEntitledApplications
```

</TabItem>
<TabItem value="delete">

```json
appstream:DisassociateApplicationFromEntitlement,
appstream:ListEntitledApplications
```

</TabItem>
</Tabs>