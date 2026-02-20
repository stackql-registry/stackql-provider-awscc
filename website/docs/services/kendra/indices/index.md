---
title: indices
hide_title: false
hide_table_of_contents: false
keywords:
  - indices
  - kendra
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

Creates, updates, deletes or gets an <code>index</code> resource or lists <code>indices</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>indices</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A Kendra index</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kendra.indices" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of index"
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the index"
  },
  {
    "name": "server_side_encryption_configuration",
    "type": "object",
    "description": "Server side encryption configuration",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for labeling the index",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of index"
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role Arn"
  },
  {
    "name": "edition",
    "type": "string",
    "description": "Edition of index"
  },
  {
    "name": "document_metadata_configurations",
    "type": "array",
    "description": "Document metadata configurations",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "relevance",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "freshness",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "importance",
            "type": "integer",
            "description": ""
          },
          {
            "name": "duration",
            "type": "string",
            "description": ""
          },
          {
            "name": "rank_order",
            "type": "string",
            "description": ""
          },
          {
            "name": "value_importance_items",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "search",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "facetable",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "searchable",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "displayable",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "sortable",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "capacity_units",
    "type": "object",
    "description": "Capacity units",
    "children": [
      {
        "name": "storage_capacity_units",
        "type": "integer",
        "description": ""
      },
      {
        "name": "query_capacity_units",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "user_context_policy",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_token_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "jwt_token_type_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "key_location",
            "type": "string",
            "description": ""
          },
          {
            "name": "url",
            "type": "string",
            "description": ""
          },
          {
            "name": "user_name_attribute_field",
            "type": "string",
            "description": ""
          },
          {
            "name": "group_attribute_field",
            "type": "string",
            "description": ""
          },
          {
            "name": "issuer",
            "type": "string",
            "description": ""
          },
          {
            "name": "claim_regex",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "json_token_type_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "user_name_attribute_field",
            "type": "string",
            "description": ""
          },
          {
            "name": "group_attribute_field",
            "type": "string",
            "description": ""
          }
        ]
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
    "description": "Unique ID of index"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html"><code>AWS::Kendra::Index</code></a>.

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
    <td><code>indices</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RoleArn, Edition, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>indices</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>indices</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>indices_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>indices</code></td>
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

Gets all properties from an individual <code>index</code>.
```sql
SELECT
region,
id,
arn,
description,
server_side_encryption_configuration,
tags,
name,
role_arn,
edition,
document_metadata_configurations,
capacity_units,
user_context_policy,
user_token_configurations
FROM awscc.kendra.indices
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>indices</code> in a region.
```sql
SELECT
region,
id
FROM awscc.kendra.indices_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>index</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kendra.indices (
 Name,
 RoleArn,
 Edition,
 region
)
SELECT 
'{{ Name }}',
 '{{ RoleArn }}',
 '{{ Edition }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kendra.indices (
 Description,
 ServerSideEncryptionConfiguration,
 Tags,
 Name,
 RoleArn,
 Edition,
 DocumentMetadataConfigurations,
 CapacityUnits,
 UserContextPolicy,
 UserTokenConfigurations,
 region
)
SELECT 
 '{{ Description }}',
 '{{ ServerSideEncryptionConfiguration }}',
 '{{ Tags }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ Edition }}',
 '{{ DocumentMetadataConfigurations }}',
 '{{ CapacityUnits }}',
 '{{ UserContextPolicy }}',
 '{{ UserTokenConfigurations }}',
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
  - name: index
    props:
      - name: Description
        value: '{{ Description }}'
      - name: ServerSideEncryptionConfiguration
        value:
          KmsKeyId: '{{ KmsKeyId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Edition
        value: '{{ Edition }}'
      - name: DocumentMetadataConfigurations
        value:
          - Name: '{{ Name }}'
            Type: '{{ Type }}'
            Relevance:
              Freshness: '{{ Freshness }}'
              Importance: '{{ Importance }}'
              Duration: '{{ Duration }}'
              RankOrder: '{{ RankOrder }}'
              ValueImportanceItems:
                - Key: '{{ Key }}'
                  Value: null
            Search:
              Facetable: '{{ Facetable }}'
              Searchable: '{{ Searchable }}'
              Displayable: '{{ Displayable }}'
              Sortable: '{{ Sortable }}'
      - name: CapacityUnits
        value:
          StorageCapacityUnits: '{{ StorageCapacityUnits }}'
          QueryCapacityUnits: '{{ QueryCapacityUnits }}'
      - name: UserContextPolicy
        value: '{{ UserContextPolicy }}'
      - name: UserTokenConfigurations
        value:
          - JwtTokenTypeConfiguration:
              KeyLocation: '{{ KeyLocation }}'
              URL: '{{ URL }}'
              SecretManagerArn: null
              UserNameAttributeField: '{{ UserNameAttributeField }}'
              GroupAttributeField: '{{ GroupAttributeField }}'
              Issuer: '{{ Issuer }}'
              ClaimRegex: '{{ ClaimRegex }}'
            JsonTokenTypeConfiguration:
              UserNameAttributeField: null
              GroupAttributeField: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kendra.indices
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags,
    "Name": name,
    "RoleArn": role_arn,
    "DocumentMetadataConfigurations": document_metadata_configurations,
    "CapacityUnits": capacity_units,
    "UserContextPolicy": user_context_policy,
    "UserTokenConfigurations": user_token_configurations
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kendra.indices
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>indices</code> resource, the following permissions are required:

### Create
```json
kendra:CreateIndex,
kendra:DescribeIndex,
kendra:UpdateIndex,
kendra:ListTagsForResource,
iam:PassRole,
kendra:TagResource,
kms:DescribeKey,
kms:CreateGrant
```

### Read
```json
kendra:DescribeIndex,
kendra:ListTagsForResource
```

### Update
```json
kendra:DescribeIndex,
kendra:UpdateIndex,
kendra:ListTagsForResource,
kendra:TagResource,
kendra:UntagResource,
iam:PassRole
```

### Delete
```json
kendra:DescribeIndex,
kendra:DeleteIndex,
kms:RetireGrant
```

### List
```json
kendra:ListIndices
```
