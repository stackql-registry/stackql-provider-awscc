---
title: target_account_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - target_account_configurations
  - fis
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

Creates, updates, deletes or gets a <code>target_account_configuration</code> resource or lists <code>target_account_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>target_account_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::FIS::TargetAccountConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.fis.target_account_configurations" /></td></tr>
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
    "name": "experiment_template_id",
    "type": "string",
    "description": "The ID of the experiment template."
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "The AWS account ID of the target account."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role for the target account."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the target account."
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
    "name": "experiment_template_id",
    "type": "string",
    "description": "The ID of the experiment template."
  },
  {
    "name": "account_id",
    "type": "string",
    "description": "The AWS account ID of the target account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html"><code>AWS::FIS::TargetAccountConfiguration</code></a>.

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
    <td><code>target_account_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ExperimentTemplateId, AccountId, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>target_account_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>target_account_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>target_account_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>target_account_configurations</code></td>
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

Gets all properties from an individual <code>target_account_configuration</code>.
```sql
SELECT
region,
experiment_template_id,
account_id,
role_arn,
description
FROM awscc.fis.target_account_configurations
WHERE region = 'us-east-1' AND Identifier = '<ExperimentTemplateId>|<AccountId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>target_account_configurations</code> in a region.
```sql
SELECT
region,
experiment_template_id,
account_id
FROM awscc.fis.target_account_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>target_account_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.fis.target_account_configurations (
 ExperimentTemplateId,
 AccountId,
 RoleArn,
 region
)
SELECT 
'{{ ExperimentTemplateId }}',
 '{{ AccountId }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.fis.target_account_configurations (
 ExperimentTemplateId,
 AccountId,
 RoleArn,
 Description,
 region
)
SELECT 
 '{{ ExperimentTemplateId }}',
 '{{ AccountId }}',
 '{{ RoleArn }}',
 '{{ Description }}',
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
  - name: target_account_configuration
    props:
      - name: ExperimentTemplateId
        value: '{{ ExperimentTemplateId }}'
      - name: AccountId
        value: '{{ AccountId }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>target_account_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.fis.target_account_configurations
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ExperimentTemplateId>|<AccountId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.fis.target_account_configurations
WHERE Identifier = '<ExperimentTemplateId|AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>target_account_configurations</code> resource, the following permissions are required:

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
fis:CreateTargetAccountConfiguration
```

</TabItem>
<TabItem value="read">

```json
fis:GetTargetAccountConfiguration
```

</TabItem>
<TabItem value="update">

```json
fis:UpdateTargetAccountConfiguration
```

</TabItem>
<TabItem value="delete">

```json
fis:DeleteTargetAccountConfiguration
```

</TabItem>
<TabItem value="list">

```json
fis:ListTargetAccountConfigurations
```

</TabItem>
</Tabs>