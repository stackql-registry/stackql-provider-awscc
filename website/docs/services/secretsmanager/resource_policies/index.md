---
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - secretsmanager
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

Creates, updates, deletes or gets a <code>resource_policy</code> resource or lists <code>resource_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecretsManager::ResourcePolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.secretsmanager.resource_policies" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The Arn of the secret."
  },
  {
    "name": "secret_id",
    "type": "string",
    "description": "The ARN or name of the secret to attach the resource-based policy."
  },
  {
    "name": "resource_policy",
    "type": "object",
    "description": "A JSON-formatted string for an AWS resource-based policy."
  },
  {
    "name": "block_public_policy",
    "type": "boolean",
    "description": "Specifies whether to block resource-based policies that allow broad access to the secret."
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
    "name": "id",
    "type": "string",
    "description": "The Arn of the secret."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html"><code>AWS::SecretsManager::ResourcePolicy</code></a>.

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
    <td><code>resource_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourcePolicy, SecretId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resource_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_policies</code></td>
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

Gets all properties from an individual <code>resource_policy</code>.
```sql
SELECT
region,
id,
secret_id,
resource_policy,
block_public_policy
FROM awscc.secretsmanager.resource_policies
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_policies</code> in a region.
```sql
SELECT
region,
id
FROM awscc.secretsmanager.resource_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.secretsmanager.resource_policies (
 SecretId,
 ResourcePolicy,
 region
)
SELECT 
'{{ SecretId }}',
 '{{ ResourcePolicy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.secretsmanager.resource_policies (
 SecretId,
 ResourcePolicy,
 BlockPublicPolicy,
 region
)
SELECT 
 '{{ SecretId }}',
 '{{ ResourcePolicy }}',
 '{{ BlockPublicPolicy }}',
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
  - name: resource_policy
    props:
      - name: SecretId
        value: '{{ SecretId }}'
      - name: ResourcePolicy
        value: {}
      - name: BlockPublicPolicy
        value: '{{ BlockPublicPolicy }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>resource_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.secretsmanager.resource_policies
SET PatchDocument = string('{{ {
    "ResourcePolicy": resource_policy,
    "BlockPublicPolicy": block_public_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.secretsmanager.resource_policies
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_policies</code> resource, the following permissions are required:

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
secretsmanager:PutResourcePolicy,
secretsmanager:GetResourcePolicy
```

</TabItem>
<TabItem value="read">

```json
secretsmanager:GetResourcePolicy
```

</TabItem>
<TabItem value="update">

```json
secretsmanager:PutResourcePolicy,
secretsmanager:GetResourcePolicy
```

</TabItem>
<TabItem value="delete">

```json
secretsmanager:DeleteResourcePolicy,
secretsmanager:GetResourcePolicy
```

</TabItem>
<TabItem value="list">

```json
secretsmanager:GetResourcePolicy,
secretsmanager:ListSecrets
```

</TabItem>
</Tabs>