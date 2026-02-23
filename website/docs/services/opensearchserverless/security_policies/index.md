---
title: security_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - security_policies
  - opensearchserverless
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

Creates, updates, deletes or gets a <code>security_policy</code> resource or lists <code>security_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Amazon OpenSearchServerless security policy resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.opensearchserverless.security_policies" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The description of the policy"
  },
  {
    "name": "policy",
    "type": "string",
    "description": "The JSON policy document that is the content for the policy"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the policy"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The possible types for the network policy"
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
    "name": "name",
    "type": "string",
    "description": "The name of the policy"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The possible types for the network policy"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html"><code>AWS::OpenSearchServerless::SecurityPolicy</code></a>.

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
    <td><code>security_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, Name, Policy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_policies</code></td>
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

Gets all properties from an individual <code>security_policy</code>.
```sql
SELECT
region,
description,
policy,
name,
type
FROM awscc.opensearchserverless.security_policies
WHERE region = 'us-east-1' AND Identifier = '{{ type }}|{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_policies</code> in a region.
```sql
SELECT
region,
type,
name
FROM awscc.opensearchserverless.security_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.opensearchserverless.security_policies (
 Policy,
 Name,
 Type,
 region
)
SELECT
'{{ policy }}',
 '{{ name }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.opensearchserverless.security_policies (
 Description,
 Policy,
 Name,
 Type,
 region
)
SELECT
 '{{ description }}',
 '{{ policy }}',
 '{{ name }}',
 '{{ type }}',
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
  - name: security_policy
    props:
      - name: description
        value: '{{ description }}'
      - name: policy
        value: '{{ policy }}'
      - name: name
        value: '{{ name }}'
      - name: type
        value: '{{ type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.opensearchserverless.security_policies
SET PatchDocument = string('{{ {
    "Description": description,
    "Policy": policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ type }}|{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchserverless.security_policies
WHERE Identifier = '{{ type }}|{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
aoss:GetSecurityPolicy,
aoss:CreateSecurityPolicy,
kms:DescribeKey,
kms:CreateGrant
```

</TabItem>
<TabItem value="update">

```json
aoss:GetSecurityPolicy,
aoss:UpdateSecurityPolicy,
kms:DescribeKey,
kms:CreateGrant
```

</TabItem>
<TabItem value="delete">

```json
aoss:GetSecurityPolicy,
aoss:DeleteSecurityPolicy
```

</TabItem>
<TabItem value="list">

```json
aoss:ListSecurityPolicies
```

</TabItem>
<TabItem value="read">

```json
aoss:GetSecurityPolicy,
kms:DescribeKey
```

</TabItem>
</Tabs>