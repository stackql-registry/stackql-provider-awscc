---
title: encryption_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_configurations
  - iot
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

Creates, updates, deletes or gets an <code>encryption_configuration</code> resource or lists <code>encryption_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>encryption_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::EncryptionConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.encryption_configurations" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "encryption_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_access_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "configuration_details",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "configuration_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "error_code",
        "type": "string",
        "description": ""
      },
      {
        "name": "error_message",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "last_modified_date",
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
    "name": "account_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-encryptionconfiguration.html"><code>AWS::IoT::EncryptionConfiguration</code></a>.

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
    <td><code>encryption_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EncryptionType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>encryption_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>encryption_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>encryption_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>encryption_configurations</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>encryption_configuration</code>.
```sql
SELECT
region,
account_id,
encryption_type,
kms_access_role_arn,
kms_key_arn,
configuration_details,
last_modified_date
FROM awscc.iot.encryption_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<AccountId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>encryption_configurations</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.iot.encryption_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>encryption_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.encryption_configurations (
 EncryptionType,
 region
)
SELECT 
'{{ EncryptionType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.encryption_configurations (
 EncryptionType,
 KmsAccessRoleArn,
 KmsKeyArn,
 region
)
SELECT 
 '{{ EncryptionType }}',
 '{{ KmsAccessRoleArn }}',
 '{{ KmsKeyArn }}',
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
  - name: encryption_configuration
    props:
      - name: EncryptionType
        value: '{{ EncryptionType }}'
      - name: KmsAccessRoleArn
        value: '{{ KmsAccessRoleArn }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iot.encryption_configurations
SET data__PatchDocument = string('{{ {
    "EncryptionType": encryption_type,
    "KmsAccessRoleArn": kms_access_role_arn,
    "KmsKeyArn": kms_key_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AccountId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.encryption_configurations
WHERE data__Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>encryption_configurations</code> resource, the following permissions are required:

### Create
```json
iot:UpdateEncryptionConfiguration,
iot:DescribeEncryptionConfiguration,
kms:Encrypt,
kms:Decrypt,
kms:DescribeKey,
iam:PassRole
```

### Read
```json
iot:DescribeEncryptionConfiguration
```

### Update
```json
iot:UpdateEncryptionConfiguration,
iot:DescribeEncryptionConfiguration,
kms:Encrypt,
kms:Decrypt,
kms:DescribeKey,
iam:PassRole
```

### Delete
```json
iot:UpdateEncryptionConfiguration,
iot:DescribeEncryptionConfiguration,
kms:Decrypt
```

### List
```json
iot:DescribeEncryptionConfiguration
```
