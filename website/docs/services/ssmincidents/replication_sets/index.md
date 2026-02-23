---
title: replication_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_sets
  - ssmincidents
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

Creates, updates, deletes or gets a <code>replication_set</code> resource or lists <code>replication_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>replication_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::SSMIncidents::ReplicationSet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmincidents.replication_sets" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the ReplicationSet."
  },
  {
    "name": "regions",
    "type": "array",
    "description": "The ReplicationSet configuration.",
    "children": [
      {
        "name": "region_name",
        "type": "string",
        "description": "The AWS region name."
      },
      {
        "name": "region_configuration",
        "type": "object",
        "description": "The ReplicationSet regional configuration.",
        "children": [
          {
            "name": "sse_kms_key_id",
            "type": "string",
            "description": "The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set."
          }
        ]
      }
    ]
  },
  {
    "name": "deletion_protected",
    "type": "boolean",
    "description": "Configures the ReplicationSet deletion protection."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to apply to the replication set.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the ReplicationSet."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html"><code>AWS::SSMIncidents::ReplicationSet</code></a>.

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
    <td><code>replication_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Regions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>replication_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>replication_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>replication_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>replication_sets</code></td>
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

Gets all properties from an individual <code>replication_set</code>.
```sql
SELECT
region,
arn,
regions,
deletion_protected,
tags
FROM awscc.ssmincidents.replication_sets
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>replication_sets</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ssmincidents.replication_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>replication_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmincidents.replication_sets (
 Regions,
 region
)
SELECT
'{{ regions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmincidents.replication_sets (
 Regions,
 DeletionProtected,
 Tags,
 region
)
SELECT
 '{{ regions }}',
 '{{ deletion_protected }}',
 '{{ tags }}',
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
  - name: replication_set
    props:
      - name: regions
        value:
          - region_name: '{{ region_name }}'
            region_configuration:
              sse_kms_key_id: '{{ sse_kms_key_id }}'
      - name: deletion_protected
        value: '{{ deletion_protected }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>replication_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssmincidents.replication_sets
SET PatchDocument = string('{{ {
    "Regions": regions,
    "DeletionProtected": deletion_protected,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmincidents.replication_sets
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>replication_sets</code> resource, the following permissions are required:

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
ssm-incidents:CreateReplicationSet,
ssm-incidents:ListReplicationSets,
ssm-incidents:UpdateDeletionProtection,
ssm-incidents:GetReplicationSet,
ssm-incidents:TagResource,
ssm-incidents:ListTagsForResource,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
ssm-incidents:ListReplicationSets,
ssm-incidents:GetReplicationSet,
ssm-incidents:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ssm-incidents:UpdateReplicationSet,
ssm-incidents:UpdateDeletionProtection,
ssm-incidents:GetReplicationSet,
ssm-incidents:TagResource,
ssm-incidents:UntagResource,
ssm-incidents:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
ssm-incidents:DeleteReplicationSet,
ssm-incidents:GetReplicationSet
```

</TabItem>
<TabItem value="list">

```json
ssm-incidents:ListReplicationSets
```

</TabItem>
</Tabs>