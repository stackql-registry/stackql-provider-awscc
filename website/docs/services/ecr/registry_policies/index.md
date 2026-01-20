---
title: registry_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_policies
  - ecr
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

Creates, updates, deletes or gets a <code>registry_policy</code> resource or lists <code>registry_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>registry_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::RegistryPolicy&#96;&#96; resource creates or updates the permissions policy for a private registry.<br />A private registry policy is used to specify permissions for another AWS-account and is used when configuring cross-account replication. For more information, see &#91;Registry permissions&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the &#42;Amazon Elastic Container Registry User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.registry_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "registry_id",
    "type": "string",
    "description": "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
  },
  {
    "name": "policy_text",
    "type": "object",
    "description": "The JSON policy text for your registry."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html"><code>AWS::ECR::RegistryPolicy</code></a>.

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
    <td><CopyableCode code="PolicyText, region" /></td>
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

Gets all properties from an individual <code>registry_policy</code>.
```sql
SELECT
region,
registry_id,
policy_text
FROM awscc.ecr.registry_policies
WHERE region = 'us-east-1' AND data__Identifier = '<RegistryId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>registry_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.registry_policies (
 PolicyText,
 region
)
SELECT 
'{{ PolicyText }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.registry_policies (
 PolicyText,
 region
)
SELECT 
 '{{ PolicyText }}',
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
  - name: registry_policy
    props:
      - name: PolicyText
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.registry_policies
WHERE data__Identifier = '<RegistryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>registry_policies</code> resource, the following permissions are required:

### Create
```json
ecr:GetRegistryPolicy,
ecr:PutRegistryPolicy
```

### Read
```json
ecr:GetRegistryPolicy
```

### List
```json
ecr:GetRegistryPolicy
```

### Update
```json
ecr:GetRegistryPolicy,
ecr:PutRegistryPolicy
```

### Delete
```json
ecr:DeleteRegistryPolicy
```
