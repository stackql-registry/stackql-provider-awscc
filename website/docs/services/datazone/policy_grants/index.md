---
title: policy_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_grants
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

Creates, updates, deletes or gets a <code>policy_grant</code> resource or lists <code>policy_grants</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>policy_grants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Policy Grant in AWS DataZone is an explicit authorization assignment that allows a specific principal (user, group, or project) to perform particular actions (such as creating glossary terms, managing projects, or accessing resources) on governed resources within a certain scope (like a Domain Unit or Project). Policy Grants are essentially the mechanism by which DataZone enforces fine-grained, role-based access control beyond what is possible through AWS IAM alone.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.policy_grants" /></td></tr>
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
    "name": "entity_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_by",
    "type": "string",
    "description": "Specifies the user who created the policy grant member."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Specifies the timestamp at which policy grant member was created."
  },
  {
    "name": "grant_id",
    "type": "string",
    "description": "The unique identifier of the policy grant returned by the AddPolicyGrant API"
  },
  {
    "name": "entity_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "detail",
    "type": "object",
    "description": ""
  },
  {
    "name": "principal",
    "type": "object",
    "description": ""
  },
  {
    "name": "domain_identifier",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "entity_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "grant_id",
    "type": "string",
    "description": "The unique identifier of the policy grant returned by the AddPolicyGrant API"
  },
  {
    "name": "entity_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-policygrant.html"><code>AWS::DataZone::PolicyGrant</code></a>.

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
    <td><code>policy_grants</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, EntityIdentifier, EntityType, PolicyType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>policy_grants</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>policy_grants_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>policy_grants</code></td>
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

Gets all properties from an individual <code>policy_grant</code>.
```sql
SELECT
region,
entity_type,
policy_type,
created_by,
created_at,
grant_id,
entity_identifier,
detail,
principal,
domain_identifier
FROM awscc.datazone.policy_grants
WHERE region = 'us-east-1' AND Identifier = '{{ domain_identifier }}|{{ grant_id }}|{{ entity_identifier }}|{{ entity_type }}|{{ policy_type }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>policy_grants</code> in a region.
```sql
SELECT
region,
domain_identifier,
grant_id,
entity_identifier,
entity_type,
policy_type
FROM awscc.datazone.policy_grants_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>policy_grant</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.policy_grants (
 EntityType,
 PolicyType,
 EntityIdentifier,
 DomainIdentifier,
 region
)
SELECT
'{{ entity_type }}',
 '{{ policy_type }}',
 '{{ entity_identifier }}',
 '{{ domain_identifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.policy_grants (
 EntityType,
 PolicyType,
 EntityIdentifier,
 Detail,
 Principal,
 DomainIdentifier,
 region
)
SELECT
 '{{ entity_type }}',
 '{{ policy_type }}',
 '{{ entity_identifier }}',
 '{{ detail }}',
 '{{ principal }}',
 '{{ domain_identifier }}',
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
  - name: policy_grant
    props:
      - name: entity_type
        value: '{{ entity_type }}'
      - name: policy_type
        value: '{{ policy_type }}'
      - name: entity_identifier
        value: '{{ entity_identifier }}'
      - name: detail
        value: null
      - name: principal
        value: null
      - name: domain_identifier
        value: '{{ domain_identifier }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.policy_grants
WHERE Identifier = '{{ domain_identifier }}|{{ grant_id }}|{{ entity_identifier }}|{{ entity_type }}|{{ policy_type }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policy_grants</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
datazone:ListPolicyGrants
```

</TabItem>
<TabItem value="create">

```json
datazone:AddPolicyGrant,
datazone:ListPolicyGrants
```

</TabItem>
<TabItem value="list">

```json
datazone:ListPolicyGrants
```

</TabItem>
<TabItem value="delete">

```json
datazone:RemovePolicyGrant,
datazone:ListPolicyGrants
```

</TabItem>
</Tabs>