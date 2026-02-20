---
title: subscription_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_targets
  - datazone
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

Creates, updates, deletes or gets a <code>subscription_target</code> resource or lists <code>subscription_targets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subscription_targets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Subscription targets enables one to access the data to which you have subscribed in your projects.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.subscription_targets" /></td></tr>
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
    "name": "applicable_asset_types",
    "type": "array",
    "description": "The asset types that can be included in the subscription target."
  },
  {
    "name": "authorized_principals",
    "type": "array",
    "description": "The authorized principals of the subscription target."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the subscription target was created."
  },
  {
    "name": "created_by",
    "type": "string",
    "description": "The Amazon DataZone user who created the subscription target."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain in which subscription target is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain in which subscription target would be created."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The ID of the environment in which subscription target is created."
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": "The ID of the environment in which subscription target would be created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the subscription target."
  },
  {
    "name": "manage_access_role",
    "type": "string",
    "description": "The manage access role that is used to create the subscription target."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the subscription target."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "The identifier of the project specified in the subscription target."
  },
  {
    "name": "provider",
    "type": "string",
    "description": "The provider of the subscription target."
  },
  {
    "name": "subscription_target_config",
    "type": "array",
    "description": "The configuration of the subscription target.",
    "children": [
      {
        "name": "form_name",
        "type": "string",
        "description": "The form name included in the subscription target configuration."
      },
      {
        "name": "content",
        "type": "string",
        "description": "The content of the subscription target configuration."
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the subscription target."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The timestamp of when the subscription target was updated."
  },
  {
    "name": "updated_by",
    "type": "string",
    "description": "The Amazon DataZone user who updated the subscription target."
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
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain in which subscription target is created."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The ID of the environment in which subscription target is created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the subscription target."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html"><code>AWS::DataZone::SubscriptionTarget</code></a>.

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
    <td><code>subscription_targets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicableAssetTypes, AuthorizedPrincipals, DomainIdentifier, EnvironmentIdentifier, Name, SubscriptionTargetConfig, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subscription_targets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>subscription_targets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subscription_targets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subscription_targets</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>subscription_target</code>.
```sql
SELECT
region,
applicable_asset_types,
authorized_principals,
created_at,
created_by,
domain_id,
domain_identifier,
environment_id,
environment_identifier,
id,
manage_access_role,
name,
project_id,
provider,
subscription_target_config,
type,
updated_at,
updated_by
FROM awscc.datazone.subscription_targets
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<EnvironmentId>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>subscription_targets</code> in a region.
```sql
SELECT
region,
domain_id,
environment_id,
id
FROM awscc.datazone.subscription_targets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subscription_target</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.subscription_targets (
 ApplicableAssetTypes,
 AuthorizedPrincipals,
 DomainIdentifier,
 EnvironmentIdentifier,
 Name,
 SubscriptionTargetConfig,
 Type,
 region
)
SELECT 
'{{ ApplicableAssetTypes }}',
 '{{ AuthorizedPrincipals }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentIdentifier }}',
 '{{ Name }}',
 '{{ SubscriptionTargetConfig }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.subscription_targets (
 ApplicableAssetTypes,
 AuthorizedPrincipals,
 DomainIdentifier,
 EnvironmentIdentifier,
 ManageAccessRole,
 Name,
 Provider,
 SubscriptionTargetConfig,
 Type,
 region
)
SELECT 
 '{{ ApplicableAssetTypes }}',
 '{{ AuthorizedPrincipals }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentIdentifier }}',
 '{{ ManageAccessRole }}',
 '{{ Name }}',
 '{{ Provider }}',
 '{{ SubscriptionTargetConfig }}',
 '{{ Type }}',
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
  - name: subscription_target
    props:
      - name: ApplicableAssetTypes
        value:
          - '{{ ApplicableAssetTypes[0] }}'
      - name: AuthorizedPrincipals
        value:
          - '{{ AuthorizedPrincipals[0] }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: EnvironmentIdentifier
        value: '{{ EnvironmentIdentifier }}'
      - name: ManageAccessRole
        value: '{{ ManageAccessRole }}'
      - name: Name
        value: '{{ Name }}'
      - name: Provider
        value: '{{ Provider }}'
      - name: SubscriptionTargetConfig
        value:
          - FormName: '{{ FormName }}'
            Content: '{{ Content }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.datazone.subscription_targets
SET data__PatchDocument = string('{{ {
    "ApplicableAssetTypes": applicable_asset_types,
    "AuthorizedPrincipals": authorized_principals,
    "ManageAccessRole": manage_access_role,
    "Name": name,
    "Provider": provider,
    "SubscriptionTargetConfig": subscription_target_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DomainId>|<EnvironmentId>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.subscription_targets
WHERE data__Identifier = '<DomainId|EnvironmentId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>subscription_targets</code> resource, the following permissions are required:

### Create
```json
datazone:CreateSubscriptionTarget,
datazone:GetSubscriptionTarget,
iam:PassRole
```

### Read
```json
datazone:GetSubscriptionTarget
```

### Update
```json
datazone:UpdateSubscriptionTarget,
datazone:GetSubscriptionTarget,
iam:PassRole
```

### Delete
```json
datazone:DeleteSubscriptionTarget
```

### List
```json
datazone:ListSubscriptionTargets
```
