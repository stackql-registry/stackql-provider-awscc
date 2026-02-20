---
title: secret_target_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - secret_target_attachments
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

Creates, updates, deletes or gets a <code>secret_target_attachment</code> resource or lists <code>secret_target_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>secret_target_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecretsManager::SecretTargetAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.secretsmanager.secret_target_attachments" /></td></tr>
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
    "description": ""
  },
  {
    "name": "secret_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_id",
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html"><code>AWS::SecretsManager::SecretTargetAttachment</code></a>.

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
    <td><code>secret_target_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetType, TargetId, SecretId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>secret_target_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>secret_target_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>secret_target_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>secret_target_attachments</code></td>
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

Gets all properties from an individual <code>secret_target_attachment</code>.
```sql
SELECT
region,
id,
secret_id,
target_type,
target_id
FROM awscc.secretsmanager.secret_target_attachments
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>secret_target_attachments</code> in a region.
```sql
SELECT
region,
id
FROM awscc.secretsmanager.secret_target_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>secret_target_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.secretsmanager.secret_target_attachments (
 SecretId,
 TargetType,
 TargetId,
 region
)
SELECT 
'{{ SecretId }}',
 '{{ TargetType }}',
 '{{ TargetId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.secretsmanager.secret_target_attachments (
 SecretId,
 TargetType,
 TargetId,
 region
)
SELECT 
 '{{ SecretId }}',
 '{{ TargetType }}',
 '{{ TargetId }}',
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
  - name: secret_target_attachment
    props:
      - name: SecretId
        value: '{{ SecretId }}'
      - name: TargetType
        value: '{{ TargetType }}'
      - name: TargetId
        value: '{{ TargetId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>secret_target_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.secretsmanager.secret_target_attachments
SET PatchDocument = string('{{ {
    "TargetType": target_type,
    "TargetId": target_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.secretsmanager.secret_target_attachments
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>secret_target_attachments</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="read">

```json
secretsmanager:GetSecretValue
```

</TabItem>
<TabItem value="list">

```json
secretsmanager:GetSecretValue,
secretsmanager:ListSecrets
```

</TabItem>
<TabItem value="create">

```json
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue,
rds:DescribeDBInstances,
redshift:DescribeClusters,
rds:DescribeDBClusters,
docdb-elastic:GetCluster,
redshift-serverless:ListWorkgroups,
redshift-serverless:GetNamespace
```

</TabItem>
<TabItem value="delete">

```json
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue
```

</TabItem>
<TabItem value="update">

```json
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue,
rds:DescribeDBInstances,
redshift:DescribeClusters,
rds:DescribeDBClusters,
docdb-elastic:GetCluster,
redshift-serverless:ListWorkgroups,
redshift-serverless:GetNamespace
```

</TabItem>
</Tabs>