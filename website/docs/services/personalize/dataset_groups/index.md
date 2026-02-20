---
title: dataset_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_groups
  - personalize
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

Creates, updates, deletes or gets a <code>dataset_group</code> resource or lists <code>dataset_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dataset_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::Personalize::DatasetGroup.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.personalize.dataset_groups" /></td></tr>
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
    "name": "dataset_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the dataset group."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name for the new dataset group."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key."
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The domain of a Domain dataset group."
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
    "name": "dataset_group_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the dataset group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html"><code>AWS::Personalize::DatasetGroup</code></a>.

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
    <td><code>dataset_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dataset_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dataset_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dataset_groups</code></td>
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

Gets all properties from an individual <code>dataset_group</code>.
```sql
SELECT
region,
dataset_group_arn,
name,
kms_key_arn,
role_arn,
domain
FROM awscc.personalize.dataset_groups
WHERE region = 'us-east-1' AND Identifier = '<DatasetGroupArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>dataset_groups</code> in a region.
```sql
SELECT
region,
dataset_group_arn
FROM awscc.personalize.dataset_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dataset_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.personalize.dataset_groups (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.personalize.dataset_groups (
 Name,
 KmsKeyArn,
 RoleArn,
 Domain,
 region
)
SELECT 
 '{{ Name }}',
 '{{ KmsKeyArn }}',
 '{{ RoleArn }}',
 '{{ Domain }}',
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
  - name: dataset_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Domain
        value: '{{ Domain }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.personalize.dataset_groups
WHERE Identifier = '<DatasetGroupArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dataset_groups</code> resource, the following permissions are required:

### Create
```json
personalize:CreateDatasetGroup,
personalize:DescribeDatasetGroup,
iam:PassRole
```

### Read
```json
personalize:DescribeDatasetGroup
```

### Delete
```json
personalize:DescribeDatasetGroup,
personalize:DeleteDatasetGroup
```

### List
```json
personalize:ListDatasetGroups
```
