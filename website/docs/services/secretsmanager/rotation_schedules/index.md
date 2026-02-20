---
title: rotation_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - rotation_schedules
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

Creates, updates, deletes or gets a <code>rotation_schedule</code> resource or lists <code>rotation_schedules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rotation_schedules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecretsManager::RotationSchedule</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.secretsmanager.rotation_schedules" /></td></tr>
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
    "name": "hosted_rotation_lambda",
    "type": "object",
    "description": "Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. To use a rotation function that already exists, specify RotationLambdaARN instead.",
    "children": [
      {
        "name": "runtime",
        "type": "string",
        "description": "The python runtime associated with the Lambda function"
      },
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "The ARN of the KMS key that Secrets Manager uses to encrypt the secret. If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value."
      },
      {
        "name": "master_secret_arn",
        "type": "string",
        "description": "The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property."
      },
      {
        "name": "rotation_lambda_name",
        "type": "string",
        "description": "The name of the Lambda rotation function."
      },
      {
        "name": "rotation_type",
        "type": "string",
        "description": "The type of rotation template to use"
      },
      {
        "name": "exclude_characters",
        "type": "string",
        "description": "A string of the characters that you don't want in the password."
      },
      {
        "name": "vpc_security_group_ids",
        "type": "string",
        "description": "A comma-separated list of security group IDs applied to the target database."
      },
      {
        "name": "master_secret_kms_key_arn",
        "type": "string",
        "description": "The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property."
      },
      {
        "name": "superuser_secret_arn",
        "type": "string",
        "description": "The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property."
      },
      {
        "name": "superuser_secret_kms_key_arn",
        "type": "string",
        "description": "The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property."
      },
      {
        "name": "vpc_subnet_ids",
        "type": "string",
        "description": "A comma separated list of VPC subnet IDs of the target database network. The Lambda rotation function is in the same subnet group."
      }
    ]
  },
  {
    "name": "secret_id",
    "type": "string",
    "description": "The ARN or name of the secret to rotate."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ARN of the secret."
  },
  {
    "name": "rotate_immediately_on_update",
    "type": "boolean",
    "description": "Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window."
  },
  {
    "name": "rotation_lambda_arn",
    "type": "string",
    "description": "The ARN of an existing Lambda rotation function. To specify a rotation function that is also defined in this template, use the Ref function."
  },
  {
    "name": "rotation_rules",
    "type": "object",
    "description": "A structure that defines the rotation configuration for this secret.",
    "children": [
      {
        "name": "schedule_expression",
        "type": "string",
        "description": "A cron() or rate() expression that defines the schedule for rotating your secret. Secrets Manager rotation schedules use UTC time zone."
      },
      {
        "name": "duration",
        "type": "string",
        "description": "The length of the rotation window in hours, for example 3h for a three hour window. Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day."
      },
      {
        "name": "automatically_after_days",
        "type": "integer",
        "description": "The number of days between automatic scheduled rotations of the secret. You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated."
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
    "name": "id",
    "type": "string",
    "description": "The ARN of the secret."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html"><code>AWS::SecretsManager::RotationSchedule</code></a>.

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
    <td><code>rotation_schedules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SecretId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rotation_schedules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rotation_schedules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rotation_schedules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rotation_schedules</code></td>
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

Gets all properties from an individual <code>rotation_schedule</code>.
```sql
SELECT
region,
hosted_rotation_lambda,
secret_id,
id,
rotate_immediately_on_update,
rotation_lambda_arn,
rotation_rules
FROM awscc.secretsmanager.rotation_schedules
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>rotation_schedules</code> in a region.
```sql
SELECT
region,
id
FROM awscc.secretsmanager.rotation_schedules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rotation_schedule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.secretsmanager.rotation_schedules (
 SecretId,
 region
)
SELECT 
'{{ SecretId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.secretsmanager.rotation_schedules (
 HostedRotationLambda,
 SecretId,
 RotateImmediatelyOnUpdate,
 RotationLambdaARN,
 RotationRules,
 region
)
SELECT 
 '{{ HostedRotationLambda }}',
 '{{ SecretId }}',
 '{{ RotateImmediatelyOnUpdate }}',
 '{{ RotationLambdaARN }}',
 '{{ RotationRules }}',
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
  - name: rotation_schedule
    props:
      - name: HostedRotationLambda
        value:
          Runtime: '{{ Runtime }}'
          KmsKeyArn: '{{ KmsKeyArn }}'
          MasterSecretArn: '{{ MasterSecretArn }}'
          RotationLambdaName: '{{ RotationLambdaName }}'
          RotationType: '{{ RotationType }}'
          ExcludeCharacters: '{{ ExcludeCharacters }}'
          VpcSecurityGroupIds: '{{ VpcSecurityGroupIds }}'
          MasterSecretKmsKeyArn: '{{ MasterSecretKmsKeyArn }}'
          SuperuserSecretArn: '{{ SuperuserSecretArn }}'
          SuperuserSecretKmsKeyArn: '{{ SuperuserSecretKmsKeyArn }}'
          VpcSubnetIds: '{{ VpcSubnetIds }}'
      - name: SecretId
        value: '{{ SecretId }}'
      - name: RotateImmediatelyOnUpdate
        value: '{{ RotateImmediatelyOnUpdate }}'
      - name: RotationLambdaARN
        value: '{{ RotationLambdaARN }}'
      - name: RotationRules
        value:
          ScheduleExpression: '{{ ScheduleExpression }}'
          Duration: '{{ Duration }}'
          AutomaticallyAfterDays: '{{ AutomaticallyAfterDays }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.secretsmanager.rotation_schedules
SET PatchDocument = string('{{ {
    "HostedRotationLambda": hosted_rotation_lambda,
    "RotateImmediatelyOnUpdate": rotate_immediately_on_update,
    "RotationLambdaARN": rotation_lambda_arn,
    "RotationRules": rotation_rules
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.secretsmanager.rotation_schedules
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rotation_schedules</code> resource, the following permissions are required:

### Read
```json
secretsmanager:DescribeSecret
```

### Create
```json
secretsmanager:RotateSecret,
secretsmanager:DescribeSecret,
lambda:InvokeFunction
```

### Update
```json
secretsmanager:RotateSecret,
secretsmanager:DescribeSecret,
lambda:InvokeFunction
```

### List
```json
secretsmanager:DescribeSecret,
secretsmanager:ListSecrets
```

### Delete
```json
secretsmanager:CancelRotateSecret,
secretsmanager:DescribeSecret
```
