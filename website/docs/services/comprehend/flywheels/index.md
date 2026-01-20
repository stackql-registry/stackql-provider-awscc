---
title: flywheels
hide_title: false
hide_table_of_contents: false
keywords:
  - flywheels
  - comprehend
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

Creates, updates, deletes or gets a <code>flywheel</code> resource or lists <code>flywheels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>flywheels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Comprehend::Flywheel resource creates an Amazon Comprehend Flywheel that enables customer to train their model.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.comprehend.flywheels" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "active_model_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_access_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_lake_s3_uri",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_security_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "model_kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpc_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "security_group_ids",
            "type": "array",
            "description": ""
          },
          {
            "name": "subnets",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "flywheel_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "model_type",
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
    "name": "task_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "language_code",
        "type": "string",
        "description": ""
      },
      {
        "name": "document_classification_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "labels",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "entity_recognition_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entity_types",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html"><code>AWS::Comprehend::Flywheel</code></a>.

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
    <td><CopyableCode code="FlywheelName, DataAccessRoleArn, DataLakeS3Uri, region" /></td>
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

Gets all properties from an individual <code>flywheel</code>.
```sql
SELECT
region,
active_model_arn,
data_access_role_arn,
data_lake_s3_uri,
data_security_config,
flywheel_name,
model_type,
tags,
task_config,
arn
FROM awscc.comprehend.flywheels
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>flywheel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.comprehend.flywheels (
 DataAccessRoleArn,
 DataLakeS3Uri,
 FlywheelName,
 region
)
SELECT 
'{{ DataAccessRoleArn }}',
 '{{ DataLakeS3Uri }}',
 '{{ FlywheelName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.comprehend.flywheels (
 ActiveModelArn,
 DataAccessRoleArn,
 DataLakeS3Uri,
 DataSecurityConfig,
 FlywheelName,
 ModelType,
 Tags,
 TaskConfig,
 region
)
SELECT 
 '{{ ActiveModelArn }}',
 '{{ DataAccessRoleArn }}',
 '{{ DataLakeS3Uri }}',
 '{{ DataSecurityConfig }}',
 '{{ FlywheelName }}',
 '{{ ModelType }}',
 '{{ Tags }}',
 '{{ TaskConfig }}',
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
  - name: flywheel
    props:
      - name: ActiveModelArn
        value: '{{ ActiveModelArn }}'
      - name: DataAccessRoleArn
        value: '{{ DataAccessRoleArn }}'
      - name: DataLakeS3Uri
        value: '{{ DataLakeS3Uri }}'
      - name: DataSecurityConfig
        value:
          ModelKmsKeyId: '{{ ModelKmsKeyId }}'
          VolumeKmsKeyId: null
          DataLakeKmsKeyId: null
          VpcConfig:
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            Subnets:
              - '{{ Subnets[0] }}'
      - name: FlywheelName
        value: '{{ FlywheelName }}'
      - name: ModelType
        value: '{{ ModelType }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: TaskConfig
        value:
          LanguageCode: '{{ LanguageCode }}'
          DocumentClassificationConfig:
            Mode: '{{ Mode }}'
            Labels:
              - '{{ Labels[0] }}'
          EntityRecognitionConfig:
            EntityTypes:
              - Type: '{{ Type }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.comprehend.flywheels
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>flywheels</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
comprehend:CreateFlywheel,
comprehend:DescribeFlywheel,
comprehend:ListTagsForResource
```

### Read
```json
comprehend:DescribeFlywheel,
comprehend:ListTagsForResource
```

### Update
```json
iam:PassRole,
comprehend:DescribeFlywheel,
comprehend:UpdateFlywheel,
comprehend:ListTagsForResource,
comprehend:TagResource,
comprehend:UntagResource
```

### Delete
```json
comprehend:DeleteFlywheel,
comprehend:DescribeFlywheel
```

### List
```json
comprehend:ListFlywheels
```
