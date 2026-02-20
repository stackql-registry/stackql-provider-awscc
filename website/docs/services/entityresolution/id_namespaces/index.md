---
title: id_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - id_namespaces
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

Creates, updates, deletes or gets an <code>id_namespace</code> resource or lists <code>id_namespaces</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>id_namespaces</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>IdNamespace defined in AWS Entity Resolution service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.entityresolution.id_namespaces" /></td></tr>
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
    "name": "id_namespace_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "input_source_config",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "input_source_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "id_mapping_workflow_properties",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "id_mapping_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "rule_based_properties",
        "type": "object",
        "description": "",
        "children": [
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
            "name": "rule_definition_types",
            "type": "array",
            "description": ""
          },
          {
            "name": "attribute_matching_model",
            "type": "string",
            "description": ""
          },
          {
            "name": "record_matching_models",
            "type": "array",
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
            "description": ""
          },
          {
            "name": "provider_configuration",
            "type": "object",
            "description": "Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format."
          }
        ]
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "id_namespace_arn",
    "type": "string",
    "description": "The arn associated with the IdNamespace"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time when the IdNamespace was created"
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The date and time when the IdNamespace was updated"
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
    "name": "id_namespace_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html"><code>AWS::EntityResolution::IdNamespace</code></a>.

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
    <td><code>id_namespaces</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdNamespaceName, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>id_namespaces</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>id_namespaces</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>id_namespaces_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>id_namespaces</code></td>
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

Gets all properties from an individual <code>id_namespace</code>.
```sql
SELECT
region,
id_namespace_name,
description,
input_source_config,
id_mapping_workflow_properties,
type,
role_arn,
id_namespace_arn,
created_at,
updated_at,
tags
FROM awscc.entityresolution.id_namespaces
WHERE region = 'us-east-1' AND data__Identifier = '<IdNamespaceName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>id_namespaces</code> in a region.
```sql
SELECT
region,
id_namespace_name
FROM awscc.entityresolution.id_namespaces_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>id_namespace</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.entityresolution.id_namespaces (
 IdNamespaceName,
 Type,
 region
)
SELECT 
'{{ IdNamespaceName }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.entityresolution.id_namespaces (
 IdNamespaceName,
 Description,
 InputSourceConfig,
 IdMappingWorkflowProperties,
 Type,
 RoleArn,
 Tags,
 region
)
SELECT 
 '{{ IdNamespaceName }}',
 '{{ Description }}',
 '{{ InputSourceConfig }}',
 '{{ IdMappingWorkflowProperties }}',
 '{{ Type }}',
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
  - name: id_namespace
    props:
      - name: IdNamespaceName
        value: '{{ IdNamespaceName }}'
      - name: Description
        value: '{{ Description }}'
      - name: InputSourceConfig
        value:
          - InputSourceARN: '{{ InputSourceARN }}'
            SchemaName: null
      - name: IdMappingWorkflowProperties
        value:
          - IdMappingType: '{{ IdMappingType }}'
            RuleBasedProperties:
              Rules:
                - RuleName: '{{ RuleName }}'
                  MatchingKeys:
                    - '{{ MatchingKeys[0] }}'
              RuleDefinitionTypes:
                - '{{ RuleDefinitionTypes[0] }}'
              AttributeMatchingModel: '{{ AttributeMatchingModel }}'
              RecordMatchingModels:
                - '{{ RecordMatchingModels[0] }}'
            ProviderProperties:
              ProviderServiceArn: '{{ ProviderServiceArn }}'
              ProviderConfiguration: {}
      - name: Type
        value: '{{ Type }}'
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
UPDATE awscc.entityresolution.id_namespaces
SET data__PatchDocument = string('{{ {
    "Description": description,
    "InputSourceConfig": input_source_config,
    "IdMappingWorkflowProperties": id_mapping_workflow_properties,
    "Type": type,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<IdNamespaceName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.entityresolution.id_namespaces
WHERE data__Identifier = '<IdNamespaceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>id_namespaces</code> resource, the following permissions are required:

### Create
```json
entityresolution:CreateIdNamespace,
entityresolution:TagResource,
iam:PassRole
```

### Read
```json
entityresolution:GetIdNamespace,
entityresolution:ListTagsForResource
```

### Update
```json
entityresolution:UpdateIdNamespace,
entityresolution:ListTagsForResource,
entityresolution:TagResource,
entityresolution:UntagResource,
iam:PassRole
```

### Delete
```json
entityresolution:DeleteIdNamespace,
entityresolution:GetIdNamespace,
entityresolution:UntagResource
```

### List
```json
entityresolution:ListIdNamespaces
```
