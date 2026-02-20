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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

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
    "name": "creation_time",
    "type": "string",
    "description": "Time Stamp"
  },
  {
    "name": "custom_output_configuration",
    "type": "object",
    "description": "Custom output configuration",
    "children": [
      {
        "name": "blueprints",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "blueprint_arn",
            "type": "string",
            "description": "ARN of a Blueprint"
          },
          {
            "name": "blueprint_version",
            "type": "string",
            "description": "Blueprint Version"
          },
          {
            "name": "blueprint_stage",
            "type": "string",
            "description": "Stage of the Blueprint"
          }
        ]
      }
    ]
  },
  {
    "name": "last_modified_time",
    "type": "string",
    "description": "Time Stamp"
  },
  {
    "name": "override_configuration",
    "type": "object",
    "description": "Override configuration",
    "children": [
      {
        "name": "document",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "splitter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "modality_processing",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "audio",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "modality_processing",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "video",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "modality_processing",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "image",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "modality_processing",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "modality_routing",
        "type": "object",
        "description": "Modality routing configuration",
        "children": [
          {
            "name": "jpeg",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "project_arn",
    "type": "string",
    "description": "ARN of a DataAutomationProject"
  },
  {
    "name": "project_description",
    "type": "string",
    "description": "Description of the DataAutomationProject"
  },
  {
    "name": "project_name",
    "type": "string",
    "description": "Name of the DataAutomationProject"
  },
  {
    "name": "project_stage",
    "type": "string",
    "description": "Stage of the Project"
  },
  {
    "name": "standard_output_configuration",
    "type": "object",
    "description": "Standard output configuration",
    "children": [
      {
        "name": "document",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "extraction",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "granularity",
                "type": "object",
                "description": ""
              },
              {
                "name": "bounding_box",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "generative_field",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "output_format",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "text_format",
                "type": "object",
                "description": ""
              },
              {
                "name": "additional_file_format",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "image",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "extraction",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "category",
                "type": "object",
                "description": ""
              },
              {
                "name": "bounding_box",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "generative_field",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              },
              {
                "name": "types",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "video",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "extraction",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "category",
                "type": "object",
                "description": ""
              },
              {
                "name": "bounding_box",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "generative_field",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              },
              {
                "name": "types",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "audio",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "extraction",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "category",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "generative_field",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "state",
                "type": "string",
                "description": ""
              },
              {
                "name": "types",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "KMS key identifier"
  },
  {
    "name": "kms_encryption_context",
    "type": "object",
    "description": "KMS encryption context"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "List of Tags",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Tag Key"
      },
      {
        "name": "value",
        "type": "string",
        "description": "Tag Value"
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
    "name": "project_arn",
    "type": "string",
    "description": "ARN of a DataAutomationProject"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html"><code>AWS::Bedrock::DataAutomationProject</code></a>.

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
    <td><code>data_automation_projects</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProjectName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_automation_projects</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_automation_projects</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_automation_projects_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_automation_projects</code></td>
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
</TabItem>
<TabItem value="list">

Lists all <code>data_automation_projects</code> in a region.
```sql
SELECT
region,
project_arn
FROM awscc.bedrock.data_automation_projects_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.bedrock.data_automation_projects
SET data__PatchDocument = string('{{ {
    "CustomOutputConfiguration": custom_output_configuration,
    "OverrideConfiguration": override_configuration,
    "ProjectDescription": project_description,
    "StandardOutputConfiguration": standard_output_configuration,
    "KmsKeyId": kms_key_id,
    "KmsEncryptionContext": kms_encryption_context,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ProjectArn>';
```


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
