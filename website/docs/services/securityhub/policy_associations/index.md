---
title: policy_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_associations
  - securityhub
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

Creates, updates, deletes or gets a <code>policy_association</code> resource or lists <code>policy_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::PolicyAssociation resource represents the AWS Security Hub Central Configuration Policy associations in your Target. Only the AWS Security Hub delegated administrator can create the resouce from the home region.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.policy_associations" /></td></tr>
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
    "name": "configuration_policy_id",
    "type": "string",
    "description": "The universally unique identifier (UUID) of the configuration policy or a value of SELF&#95;MANAGED&#95;SECURITY&#95;HUB for a self-managed configuration"
  },
  {
    "name": "association_status",
    "type": "string",
    "description": "The current status of the association between the specified target and the configuration"
  },
  {
    "name": "association_type",
    "type": "string",
    "description": "Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub delegated administrator or inherited from a parent"
  },
  {
    "name": "association_status_message",
    "type": "string",
    "description": "An explanation for a FAILED value for AssociationStatus"
  },
  {
    "name": "target_id",
    "type": "string",
    "description": "The identifier of the target account, organizational unit, or the root"
  },
  {
    "name": "target_type",
    "type": "string",
    "description": "Indicates whether the target is an AWS account, organizational unit, or the organization root"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated"
  },
  {
    "name": "association_identifier",
    "type": "string",
    "description": "A unique identifier to indicates if the target has an association"
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
    "name": "association_identifier",
    "type": "string",
    "description": "A unique identifier to indicates if the target has an association"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html"><code>AWS::SecurityHub::PolicyAssociation</code></a>.

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
    <td><code>policy_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetId, TargetType, ConfigurationPolicyId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>policy_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_associations</code></td>
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

Gets all properties from an individual <code>policy_association</code>.
```sql
SELECT
region,
configuration_policy_id,
association_status,
association_type,
association_status_message,
target_id,
target_type,
updated_at,
association_identifier
FROM awscc.securityhub.policy_associations
WHERE region = 'us-east-1' AND Identifier = '{{ association_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_associations</code> in a region.
```sql
SELECT
region,
association_identifier
FROM awscc.securityhub.policy_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.policy_associations (
 ConfigurationPolicyId,
 TargetId,
 TargetType,
 region
)
SELECT
'{{ configuration_policy_id }}',
 '{{ target_id }}',
 '{{ target_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.policy_associations (
 ConfigurationPolicyId,
 TargetId,
 TargetType,
 region
)
SELECT
 '{{ configuration_policy_id }}',
 '{{ target_id }}',
 '{{ target_type }}',
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
  - name: policy_association
    props:
      - name: configuration_policy_id
        value: '{{ configuration_policy_id }}'
      - name: target_id
        value: '{{ target_id }}'
      - name: target_type
        value: '{{ target_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>policy_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.policy_associations
SET PatchDocument = string('{{ {
    "ConfigurationPolicyId": configuration_policy_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ association_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.policy_associations
WHERE Identifier = '{{ association_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policy_associations</code> resource, the following permissions are required:

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
securityhub:StartConfigurationPolicyAssociation,
securityhub:GetConfigurationPolicyAssociation
```

</TabItem>
<TabItem value="read">

```json
securityhub:GetConfigurationPolicyAssociation,
securityhub:GetConfigurationPolicyAssociation
```

</TabItem>
<TabItem value="update">

```json
securityhub:StartConfigurationPolicyAssociation,
securityhub:GetConfigurationPolicyAssociation
```

</TabItem>
<TabItem value="delete">

```json
securityhub:StartConfigurationPolicyDisassociation,
securityhub:GetConfigurationPolicyAssociation
```

</TabItem>
<TabItem value="list">

```json
securityhub:ListConfigurationPolicyAssociations
```

</TabItem>
</Tabs>