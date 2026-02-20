---
title: device_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - device_fleets
  - sagemaker
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

Creates, updates, deletes or gets a <code>device_fleet</code> resource or lists <code>device_fleets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>device_fleets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::SageMaker::DeviceFleet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.device_fleets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "description",
    "type": "string",
    "description": "Description for the edge device fleet"
  },
  {
    "name": "device_fleet_name",
    "type": "string",
    "description": "The name of the edge device fleet"
  },
  {
    "name": "output_config",
    "type": "object",
    "description": "S3 bucket and an ecryption key id (if available) to store outputs for the fleet",
    "children": [
      {
        "name": "s3_output_location",
        "type": "string",
        "description": "The Amazon Simple Storage (S3) bucket URI"
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": "The KMS key id used for encryption on the S3 bucket"
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role associated with the device fleet"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Associate tags with the resource",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html"><code>AWS::SageMaker::DeviceFleet</code></a>.

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
    <td><CopyableCode code="DeviceFleetName, OutputConfig, RoleArn, region" /></td>
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
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>device_fleet</code>.
```sql
SELECT
region,
description,
device_fleet_name,
output_config,
role_arn,
tags
FROM awscc.sagemaker.device_fleets
WHERE region = 'us-east-1' AND data__Identifier = '<DeviceFleetName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>device_fleet</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.device_fleets (
 DeviceFleetName,
 OutputConfig,
 RoleArn,
 region
)
SELECT 
'{{ DeviceFleetName }}',
 '{{ OutputConfig }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.device_fleets (
 Description,
 DeviceFleetName,
 OutputConfig,
 RoleArn,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DeviceFleetName }}',
 '{{ OutputConfig }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
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
  - name: device_fleet
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DeviceFleetName
        value: '{{ DeviceFleetName }}'
      - name: OutputConfig
        value:
          S3OutputLocation: '{{ S3OutputLocation }}'
          KmsKeyId: '{{ KmsKeyId }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sagemaker.device_fleets
SET data__PatchDocument = string('{{ {
    "Description": description,
    "OutputConfig": output_config,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DeviceFleetName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.device_fleets
WHERE data__Identifier = '<DeviceFleetName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>device_fleets</code> resource, the following permissions are required:

### Create
```json
sagemaker:CreateDeviceFleet,
iam:PassRole
```

### Read
```json
sagemaker:DescribeDeviceFleet
```

### Update
```json
sagemaker:UpdateDeviceFleet,
iam:PassRole
```

### Delete
```json
sagemaker:DeleteDeviceFleet
```
