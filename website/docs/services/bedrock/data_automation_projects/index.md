---
title: data_automation_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automation_projects
  - bedrock
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

Creates, updates, deletes or gets a <code>data_automation_project</code> resource or lists <code>data_automation_projects</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_automation_projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::DataAutomationProject Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.data_automation_projects" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="creation_time" /></td><td><code>string</code></td><td>Time Stamp</td></tr>
<tr><td><CopyableCode code="custom_output_configuration" /></td><td><code>object</code></td><td>Custom output configuration</td></tr>
<tr><td><CopyableCode code="last_modified_time" /></td><td><code>string</code></td><td>Time Stamp</td></tr>
<tr><td><CopyableCode code="override_configuration" /></td><td><code>object</code></td><td>Override configuration</td></tr>
<tr><td><CopyableCode code="project_arn" /></td><td><code>string</code></td><td>ARN of a DataAutomationProject</td></tr>
<tr><td><CopyableCode code="project_description" /></td><td><code>string</code></td><td>Description of the DataAutomationProject</td></tr>
<tr><td><CopyableCode code="project_name" /></td><td><code>string</code></td><td>Name of the DataAutomationProject</td></tr>
<tr><td><CopyableCode code="project_stage" /></td><td><code>string</code></td><td>Stage of the Project</td></tr>
<tr><td><CopyableCode code="standard_output_configuration" /></td><td><code>object</code></td><td>Standard output configuration</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="kms_key_id" /></td><td><code>string</code></td><td>KMS key identifier</td></tr>
<tr><td><CopyableCode code="kms_encryption_context" /></td><td><code>object</code></td><td>KMS encryption context</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>List of Tags</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html"><code>AWS::Bedrock::DataAutomationProject</code></a>.

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
    <td><CopyableCode code="ProjectName, region" /></td>
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
Gets all <code>data_automation_projects</code> in a region.
```sql
SELECT
region,
creation_time,
custom_output_configuration,
last_modified_time,
override_configuration,
project_arn,
project_description,
project_name,
project_stage,
standard_output_configuration,
status,
kms_key_id,
kms_encryption_context,
tags
FROM awscc.bedrock.data_automation_projects
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>data_automation_project</code>.
```sql
SELECT
region,
creation_time,
custom_output_configuration,
last_modified_time,
override_configuration,
project_arn,
project_description,
project_name,
project_stage,
standard_output_configuration,
status,
kms_key_id,
kms_encryption_context,
tags
FROM awscc.bedrock.data_automation_projects
WHERE region = 'us-east-1' AND data__Identifier = '<ProjectArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_automation_project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.data_automation_projects (
 ProjectName,
 region
)
SELECT 
'{{ ProjectName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.data_automation_projects (
 CustomOutputConfiguration,
 OverrideConfiguration,
 ProjectDescription,
 ProjectName,
 StandardOutputConfiguration,
 KmsKeyId,
 KmsEncryptionContext,
 Tags,
 region
)
SELECT 
 '{{ CustomOutputConfiguration }}',
 '{{ OverrideConfiguration }}',
 '{{ ProjectDescription }}',
 '{{ ProjectName }}',
 '{{ StandardOutputConfiguration }}',
 '{{ KmsKeyId }}',
 '{{ KmsEncryptionContext }}',
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
  - name: data_automation_project
    props:
      - name: CustomOutputConfiguration
        value:
          Blueprints:
            - BlueprintArn: '{{ BlueprintArn }}'
              BlueprintVersion: '{{ BlueprintVersion }}'
              BlueprintStage: '{{ BlueprintStage }}'
      - name: OverrideConfiguration
        value:
          Document:
            Splitter:
              State: '{{ State }}'
            ModalityProcessing:
              State: null
          Audio:
            ModalityProcessing: null
          Video:
            ModalityProcessing: null
          Image:
            ModalityProcessing: null
          ModalityRouting:
            jpeg: '{{ jpeg }}'
            png: null
            mp4: null
            mov: null
      - name: ProjectDescription
        value: '{{ ProjectDescription }}'
      - name: ProjectName
        value: '{{ ProjectName }}'
      - name: StandardOutputConfiguration
        value:
          Document:
            Extraction:
              Granularity:
                Types:
                  - '{{ Types[0] }}'
              BoundingBox:
                State: null
            GenerativeField:
              State: null
            OutputFormat:
              TextFormat:
                Types:
                  - '{{ Types[0] }}'
              AdditionalFileFormat:
                State: null
          Image:
            Extraction:
              Category:
                State: null
                Types:
                  - '{{ Types[0] }}'
              BoundingBox:
                State: null
            GenerativeField:
              State: null
              Types:
                - '{{ Types[0] }}'
          Video:
            Extraction:
              Category:
                State: null
                Types:
                  - '{{ Types[0] }}'
              BoundingBox:
                State: null
            GenerativeField:
              State: null
              Types:
                - '{{ Types[0] }}'
          Audio:
            Extraction:
              Category:
                State: null
                Types:
                  - '{{ Types[0] }}'
            GenerativeField:
              State: null
              Types:
                - '{{ Types[0] }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: KmsEncryptionContext
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.data_automation_projects
WHERE data__Identifier = '<ProjectArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_automation_projects</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateDataAutomationProject,
bedrock:GetDataAutomationProject,
bedrock:TagResource,
bedrock:ListTagsForResource,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

### Read
```json
bedrock:GetDataAutomationProject,
bedrock:ListTagsForResource,
kms:DescribeKey,
kms:Decrypt
```

### Update
```json
bedrock:UpdateDataAutomationProject,
bedrock:GetDataAutomationProject,
bedrock:TagResource,
bedrock:UntagResource,
bedrock:ListTagsForResource,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

### Delete
```json
bedrock:DeleteDataAutomationProject,
bedrock:GetDataAutomationProject,
kms:DescribeKey,
kms:Decrypt
```

### List
```json
bedrock:ListDataAutomationProjects
```
