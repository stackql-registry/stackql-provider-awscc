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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="entity_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="policy_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_by" /></td><td><code>string</code></td><td>Specifies the user who created the policy grant member.</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Specifies the timestamp at which policy grant member was created.</td></tr>
<tr><td><CopyableCode code="grant_id" /></td><td><code>string</code></td><td>The unique identifier of the policy grant returned by the AddPolicyGrant API</td></tr>
<tr><td><CopyableCode code="entity_identifier" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="detail" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="principal" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_identifier" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-policygrant.html"><code>AWS::DataZone::PolicyGrant</code></a>.

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
    <td><CopyableCode code="DomainIdentifier, EntityIdentifier, EntityType, PolicyType, region" /></td>
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
Gets all <code>policy_grants</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<DomainIdentifier>|<GrantId>|<EntityIdentifier>|<EntityType>|<PolicyType>';
```

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
'{{ EntityType }}',
 '{{ PolicyType }}',
 '{{ EntityIdentifier }}',
 '{{ DomainIdentifier }}',
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
 '{{ EntityType }}',
 '{{ PolicyType }}',
 '{{ EntityIdentifier }}',
 '{{ Detail }}',
 '{{ Principal }}',
 '{{ DomainIdentifier }}',
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
      - name: EntityType
        value: '{{ EntityType }}'
      - name: PolicyType
        value: '{{ PolicyType }}'
      - name: EntityIdentifier
        value: '{{ EntityIdentifier }}'
      - name: Detail
        value: null
      - name: Principal
        value: null
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.policy_grants
WHERE data__Identifier = '<DomainIdentifier|GrantId|EntityIdentifier|EntityType|PolicyType>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>policy_grants</code> resource, the following permissions are required:

### Read
```json
datazone:ListPolicyGrants
```

### Create
```json
datazone:AddPolicyGrant,
datazone:ListPolicyGrants
```

### List
```json
datazone:ListPolicyGrants
```

### Delete
```json
datazone:RemovePolicyGrant,
datazone:ListPolicyGrants
```
