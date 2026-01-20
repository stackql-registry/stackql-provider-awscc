---
title: hypervisors
hide_title: false
hide_table_of_contents: false
keywords:
  - hypervisors
  - backupgateway
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

Creates, updates, deletes or gets a <code>hypervisor</code> resource or lists <code>hypervisors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hypervisors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::BackupGateway::Hypervisor Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backupgateway.hypervisors" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "host",
    "type": "string",
    "description": ""
  },
  {
    "name": "hypervisor_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_group_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "password",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "username",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html"><code>AWS::BackupGateway::Hypervisor</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>hypervisor</code>.
```sql
SELECT
region,
host,
hypervisor_arn,
kms_key_arn,
log_group_arn,
name,
password,
tags,
username
FROM awscc.backupgateway.hypervisors
WHERE region = 'us-east-1' AND data__Identifier = '<HypervisorArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hypervisor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backupgateway.hypervisors (
 Host,
 KmsKeyArn,
 LogGroupArn,
 Name,
 Password,
 Tags,
 Username,
 region
)
SELECT 
'{{ Host }}',
 '{{ KmsKeyArn }}',
 '{{ LogGroupArn }}',
 '{{ Name }}',
 '{{ Password }}',
 '{{ Tags }}',
 '{{ Username }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backupgateway.hypervisors (
 Host,
 KmsKeyArn,
 LogGroupArn,
 Name,
 Password,
 Tags,
 Username,
 region
)
SELECT 
 '{{ Host }}',
 '{{ KmsKeyArn }}',
 '{{ LogGroupArn }}',
 '{{ Name }}',
 '{{ Password }}',
 '{{ Tags }}',
 '{{ Username }}',
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
  - name: hypervisor
    props:
      - name: Host
        value: '{{ Host }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: LogGroupArn
        value: '{{ LogGroupArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: Password
        value: '{{ Password }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Username
        value: '{{ Username }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backupgateway.hypervisors
WHERE data__Identifier = '<HypervisorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hypervisors</code> resource, the following permissions are required:

### Create
```json
backup-gateway:ListTagsForResource,
backup-gateway:ImportHypervisorConfiguration,
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors,
backup-gateway:TagResource,
kms:CreateGrant,
kms:Encrypt,
kms:Decrypt
```

### Read
```json
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors,
backup-gateway:ListTagsForResource
```

### Update
```json
backup-gateway:UpdateHypervisor,
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors,
backup-gateway:ImportHypervisorConfiguration,
backup-gateway:DeleteHypervisor,
backup-gateway:ListTagsForResource
```

### Delete
```json
backup-gateway:DeleteHypervisor,
backup-gateway:GetHypervisor,
backup-gateway:ListHypervisors
```

### List
```json
backup-gateway:ListHypervisors
```
