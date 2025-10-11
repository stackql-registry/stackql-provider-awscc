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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="account_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="encryption_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="kms_access_role_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="kms_key_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="configuration_details" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="last_modified_date" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-encryptionconfiguration.html"><code>AWS::IoT::EncryptionConfiguration</code></a>.

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
    <td><CopyableCode code="EncryptionType, region" /></td>
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
Gets all <code>encryption_configurations</code> in a region.
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
WHERE region = 'us-east-1';
```
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
