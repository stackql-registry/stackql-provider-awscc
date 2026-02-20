---
title: log_anomaly_detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - log_anomaly_detectors
  - logs
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

Creates, updates, deletes or gets a <code>log_anomaly_detector</code> resource or lists <code>log_anomaly_detectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>log_anomaly_detectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Logs::LogAnomalyDetector resource specifies a CloudWatch Logs LogAnomalyDetector.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.log_anomaly_detectors" /></td></tr>
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
    "description": "Account ID for owner of detector"
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the CMK to use when encrypting log data."
  },
  {
    "name": "detector_name",
    "type": "string",
    "description": "Name of detector"
  },
  {
    "name": "log_group_arn_list",
    "type": "array",
    "description": "List of Arns for the given log group"
  },
  {
    "name": "evaluation_frequency",
    "type": "string",
    "description": "How often log group is evaluated"
  },
  {
    "name": "filter_pattern",
    "type": "string",
    "description": ""
  },
  {
    "name": "anomaly_detector_status",
    "type": "string",
    "description": "Current status of detector."
  },
  {
    "name": "anomaly_visibility_time",
    "type": "number",
    "description": ""
  },
  {
    "name": "creation_time_stamp",
    "type": "number",
    "description": "When detector was created."
  },
  {
    "name": "last_modified_time_stamp",
    "type": "number",
    "description": "When detector was lsat modified."
  },
  {
    "name": "anomaly_detector_arn",
    "type": "string",
    "description": "ARN of LogAnomalyDetector"
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
    "name": "anomaly_detector_arn",
    "type": "string",
    "description": "ARN of LogAnomalyDetector"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html"><code>AWS::Logs::LogAnomalyDetector</code></a>.

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
    <td><code>log_anomaly_detectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>log_anomaly_detectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>log_anomaly_detectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>log_anomaly_detectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>log_anomaly_detectors</code></td>
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

Gets all properties from an individual <code>log_anomaly_detector</code>.
```sql
SELECT
region,
account_id,
kms_key_id,
detector_name,
log_group_arn_list,
evaluation_frequency,
filter_pattern,
anomaly_detector_status,
anomaly_visibility_time,
creation_time_stamp,
last_modified_time_stamp,
anomaly_detector_arn
FROM awscc.logs.log_anomaly_detectors
WHERE region = 'us-east-1' AND Identifier = '<AnomalyDetectorArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>log_anomaly_detectors</code> in a region.
```sql
SELECT
region,
anomaly_detector_arn
FROM awscc.logs.log_anomaly_detectors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>log_anomaly_detector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.log_anomaly_detectors (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.log_anomaly_detectors (
 AccountId,
 KmsKeyId,
 DetectorName,
 LogGroupArnList,
 EvaluationFrequency,
 FilterPattern,
 AnomalyVisibilityTime,
 region
)
SELECT 
 '{{ AccountId }}',
 '{{ KmsKeyId }}',
 '{{ DetectorName }}',
 '{{ LogGroupArnList }}',
 '{{ EvaluationFrequency }}',
 '{{ FilterPattern }}',
 '{{ AnomalyVisibilityTime }}',
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
  - name: log_anomaly_detector
    props:
      - name: AccountId
        value: '{{ AccountId }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: DetectorName
        value: '{{ DetectorName }}'
      - name: LogGroupArnList
        value:
          - '{{ LogGroupArnList[0] }}'
      - name: EvaluationFrequency
        value: '{{ EvaluationFrequency }}'
      - name: FilterPattern
        value: '{{ FilterPattern }}'
      - name: AnomalyVisibilityTime
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.logs.log_anomaly_detectors
SET PatchDocument = string('{{ {
    "AccountId": account_id,
    "KmsKeyId": kms_key_id,
    "DetectorName": detector_name,
    "LogGroupArnList": log_group_arn_list,
    "EvaluationFrequency": evaluation_frequency,
    "FilterPattern": filter_pattern,
    "AnomalyVisibilityTime": anomaly_visibility_time
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AnomalyDetectorArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.log_anomaly_detectors
WHERE Identifier = '<AnomalyDetectorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>log_anomaly_detectors</code> resource, the following permissions are required:

### Create
```json
logs:CreateLogAnomalyDetector
```

### Read
```json
logs:GetLogAnomalyDetector
```

### Update
```json
logs:UpdateLogAnomalyDetector
```

### Delete
```json
logs:DeleteLogAnomalyDetector
```

### List
```json
logs:ListLogAnomalyDetectors
```
