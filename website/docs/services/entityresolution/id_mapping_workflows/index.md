---
title: id_mapping_workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - id_mapping_workflows
  - entityresolution
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

Creates, updates, deletes or gets an <code>id_mapping_workflow</code> resource or lists <code>id_mapping_workflows</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>id_mapping_workflows</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>IdMappingWorkflow defined in AWS Entity Resolution service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.entityresolution.id_mapping_workflows" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The description of the IdMappingWorkflow"
  },
  {
    "name": "input_source_config",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "input_source_arn",
        "type": "string",
        "description": "An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN"
      },
      {
        "name": "schema_arn",
        "type": "string",
        "description": "The SchemaMapping arn associated with the Schema"
      }
    ]
  },
  {
    "name": "id_mapping_techniques",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "rule_based_properties",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "attribute_matching_model",
            "type": "string",
            "description": ""
          },
          {
            "name": "rule_definition_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "rules",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "rule_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "matching_keys",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "record_matching_model",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "provider_properties",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "provider_service_arn",
            "type": "string",
            "description": "Arn of the Provider service being used."
          },
          {
            "name": "provider_configuration",
            "type": "object",
            "description": "Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format"
          },
          {
            "name": "intermediate_source_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "intermediate_s3_path",
                "type": "string",
                "description": "The s3 path that would be used to stage the intermediate data being generated during workflow execution."
              }
            ]
          }
        ]
      },
      {
        "name": "id_mapping_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "workflow_name",
    "type": "string",
    "description": "The name of the IdMappingWorkflow"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time of this SchemaMapping got created"
  },
  {
    "name": "output_source_config",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "kms_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "output_s3_path",
        "type": "string",
        "description": "The S3 path to which Entity Resolution will write the output table"
      }
    ]
  },
  {
    "name": "id_mapping_incremental_run_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "incremental_run_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "workflow_arn",
    "type": "string",
    "description": "The default IdMappingWorkflow arn"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The time of this SchemaMapping got last updated at"
  },
  {
    "name": "role_arn",
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
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "workflow_name",
    "type": "string",
    "description": "The name of the IdMappingWorkflow"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html"><code>AWS::EntityResolution::IdMappingWorkflow</code></a>.

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
    <td><code>id_mapping_workflows</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="WorkflowName, InputSourceConfig, IdMappingTechniques, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>id_mapping_workflows</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>id_mapping_workflows</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>id_mapping_workflows_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>id_mapping_workflows</code></td>
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

Gets all properties from an individual <code>id_mapping_workflow</code>.
```sql
SELECT
region,
description,
input_source_config,
id_mapping_techniques,
workflow_name,
created_at,
output_source_config,
id_mapping_incremental_run_config,
workflow_arn,
updated_at,
role_arn,
tags
FROM awscc.entityresolution.id_mapping_workflows
WHERE region = 'us-east-1' AND Identifier = '<WorkflowName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>id_mapping_workflows</code> in a region.
```sql
SELECT
region,
workflow_name
FROM awscc.entityresolution.id_mapping_workflows_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>id_mapping_workflow</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.entityresolution.id_mapping_workflows (
 InputSourceConfig,
 IdMappingTechniques,
 WorkflowName,
 RoleArn,
 region
)
SELECT 
'{{ InputSourceConfig }}',
 '{{ IdMappingTechniques }}',
 '{{ WorkflowName }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.entityresolution.id_mapping_workflows (
 Description,
 InputSourceConfig,
 IdMappingTechniques,
 WorkflowName,
 OutputSourceConfig,
 IdMappingIncrementalRunConfig,
 RoleArn,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ InputSourceConfig }}',
 '{{ IdMappingTechniques }}',
 '{{ WorkflowName }}',
 '{{ OutputSourceConfig }}',
 '{{ IdMappingIncrementalRunConfig }}',
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
  - name: id_mapping_workflow
    props:
      - name: Description
        value: '{{ Description }}'
      - name: InputSourceConfig
        value:
          - Type: '{{ Type }}'
            InputSourceARN: '{{ InputSourceARN }}'
            SchemaArn: '{{ SchemaArn }}'
      - name: IdMappingTechniques
        value:
          RuleBasedProperties:
            AttributeMatchingModel: '{{ AttributeMatchingModel }}'
            RuleDefinitionType: '{{ RuleDefinitionType }}'
            Rules:
              - RuleName: '{{ RuleName }}'
                MatchingKeys:
                  - '{{ MatchingKeys[0] }}'
            RecordMatchingModel: '{{ RecordMatchingModel }}'
          ProviderProperties:
            ProviderServiceArn: '{{ ProviderServiceArn }}'
            ProviderConfiguration: {}
            IntermediateSourceConfiguration:
              IntermediateS3Path: '{{ IntermediateS3Path }}'
          IdMappingType: '{{ IdMappingType }}'
      - name: WorkflowName
        value: '{{ WorkflowName }}'
      - name: OutputSourceConfig
        value:
          - KMSArn: '{{ KMSArn }}'
            OutputS3Path: '{{ OutputS3Path }}'
      - name: IdMappingIncrementalRunConfig
        value:
          IncrementalRunType: '{{ IncrementalRunType }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
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
UPDATE awscc.entityresolution.id_mapping_workflows
SET PatchDocument = string('{{ {
    "Description": description,
    "InputSourceConfig": input_source_config,
    "IdMappingTechniques": id_mapping_techniques,
    "OutputSourceConfig": output_source_config,
    "IdMappingIncrementalRunConfig": id_mapping_incremental_run_config,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<WorkflowName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.entityresolution.id_mapping_workflows
WHERE Identifier = '<WorkflowName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>id_mapping_workflows</code> resource, the following permissions are required:

### Read
```json
entityresolution:GetIdMappingWorkflow,
entityresolution:ListTagsForResource
```

### Create
```json
entityresolution:CreateIdMappingWorkflow,
entityresolution:GetIdMappingWorkflow,
entityresolution:TagResource,
kms:CreateGrant,
kms:DescribeKey,
iam:PassRole
```

### Update
```json
entityresolution:GetIdMappingWorkflow,
entityresolution:UpdateIdMappingWorkflow,
entityresolution:ListTagsForResource,
entityresolution:TagResource,
entityresolution:UntagResource,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey
```

### List
```json
entityresolution:ListIdMappingWorkflows
```

### Delete
```json
entityresolution:DeleteIdMappingWorkflow,
entityresolution:GetIdMappingWorkflow,
entityresolution:UntagResource
```
