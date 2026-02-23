---
title: auth_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - auth_policies
  - vpclattice
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

Creates, updates, deletes or gets an <code>auth_policy</code> resource or lists <code>auth_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>auth_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates or updates the auth policy.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.auth_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resource_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html"><code>AWS::VpcLattice::AuthPolicy</code></a>.

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
    <td><CopyableCode code="ResourceIdentifier, Policy, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>auth_policy</code>.
```sql
SELECT
region,
resource_identifier,
policy,
state
FROM awscc.vpclattice.auth_policies
WHERE region = 'us-east-1' AND Identifier = '{{ resource_identifier }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>auth_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.auth_policies (
 ResourceIdentifier,
 Policy,
 region
)
SELECT
'{{ resource_identifier }}',
 '{{ policy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.auth_policies (
 ResourceIdentifier,
 Policy,
 region
)
SELECT
 '{{ resource_identifier }}',
 '{{ policy }}',
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
  - name: auth_policy
    props:
      - name: resource_identifier
        value: '{{ resource_identifier }}'
      - name: policy
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>auth_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.vpclattice.auth_policies
SET PatchDocument = string('{{ {
    "Policy": policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ resource_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.auth_policies
WHERE Identifier = '{{ resource_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>auth_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
vpc-lattice:GetAuthPolicy,
vpc-lattice:PutAuthPolicy
```

</TabItem>
<TabItem value="read">

```json
vpc-lattice:GetAuthPolicy
```

</TabItem>
<TabItem value="update">

```json
vpc-lattice:GetAuthPolicy,
vpc-lattice:PutAuthPolicy
```

</TabItem>
<TabItem value="delete">

```json
vpc-lattice:GetAuthPolicy,
vpc-lattice:DeleteAuthPolicy
```

</TabItem>
</Tabs>