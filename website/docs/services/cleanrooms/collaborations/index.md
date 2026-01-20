---
title: collaborations
hide_title: false
hide_table_of_contents: false
keywords:
  - collaborations
  - cleanrooms
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

Creates, updates, deletes or gets a <code>collaboration</code> resource or lists <code>collaborations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>collaborations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a collaboration between AWS accounts that allows for secure data collaboration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.collaborations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.",
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
    "name": "collaboration_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "creator_display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "creator_member_abilities",
    "type": "array",
    "description": ""
  },
  {
    "name": "creator_ml_member_abilities",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "custom_ml_member_abilities",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "data_encryption_metadata",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allow_cleartext",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "allow_duplicates",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "allow_joins_on_columns_with_different_names",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "preserve_nulls",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "members",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "account_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "payment_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "job_compute",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "is_responsible",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "query_compute",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "is_responsible",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "machine_learning",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "model_training",
                "type": "object",
                "description": ""
              },
              {
                "name": "model_inference",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "job_log_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_log_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "analytics_engine",
    "type": "string",
    "description": ""
  },
  {
    "name": "creator_payment_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "job_compute",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "is_responsible",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "query_compute",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "is_responsible",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "machine_learning",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "model_training",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "is_responsible",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "model_inference",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "is_responsible",
                "type": "boolean",
                "description": ""
              }
            ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html"><code>AWS::CleanRooms::Collaboration</code></a>.

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
    <td><CopyableCode code="CreatorDisplayName, Name, Description, QueryLogStatus, region" /></td>
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

Gets all properties from an individual <code>collaboration</code>.
```sql
SELECT
region,
arn,
tags,
collaboration_identifier,
creator_display_name,
creator_member_abilities,
creator_ml_member_abilities,
data_encryption_metadata,
description,
members,
name,
job_log_status,
query_log_status,
analytics_engine,
creator_payment_configuration
FROM awscc.cleanrooms.collaborations
WHERE region = 'us-east-1' AND data__Identifier = '<CollaborationIdentifier>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>collaboration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.collaborations (
 CreatorDisplayName,
 Description,
 Name,
 QueryLogStatus,
 region
)
SELECT 
'{{ CreatorDisplayName }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ QueryLogStatus }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanrooms.collaborations (
 Tags,
 CreatorDisplayName,
 CreatorMemberAbilities,
 CreatorMLMemberAbilities,
 DataEncryptionMetadata,
 Description,
 Members,
 Name,
 JobLogStatus,
 QueryLogStatus,
 AnalyticsEngine,
 CreatorPaymentConfiguration,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ CreatorDisplayName }}',
 '{{ CreatorMemberAbilities }}',
 '{{ CreatorMLMemberAbilities }}',
 '{{ DataEncryptionMetadata }}',
 '{{ Description }}',
 '{{ Members }}',
 '{{ Name }}',
 '{{ JobLogStatus }}',
 '{{ QueryLogStatus }}',
 '{{ AnalyticsEngine }}',
 '{{ CreatorPaymentConfiguration }}',
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
  - name: collaboration
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CreatorDisplayName
        value: '{{ CreatorDisplayName }}'
      - name: CreatorMemberAbilities
        value:
          - '{{ CreatorMemberAbilities[0] }}'
      - name: CreatorMLMemberAbilities
        value:
          CustomMLMemberAbilities:
            - '{{ CustomMLMemberAbilities[0] }}'
      - name: DataEncryptionMetadata
        value:
          AllowCleartext: '{{ AllowCleartext }}'
          AllowDuplicates: '{{ AllowDuplicates }}'
          AllowJoinsOnColumnsWithDifferentNames: '{{ AllowJoinsOnColumnsWithDifferentNames }}'
          PreserveNulls: '{{ PreserveNulls }}'
      - name: Description
        value: '{{ Description }}'
      - name: Members
        value:
          - AccountId: '{{ AccountId }}'
            MemberAbilities: null
            MLMemberAbilities: null
            DisplayName: null
            PaymentConfiguration:
              JobCompute:
                IsResponsible: '{{ IsResponsible }}'
              QueryCompute:
                IsResponsible: '{{ IsResponsible }}'
              MachineLearning:
                ModelTraining:
                  IsResponsible: '{{ IsResponsible }}'
                ModelInference:
                  IsResponsible: '{{ IsResponsible }}'
      - name: Name
        value: '{{ Name }}'
      - name: JobLogStatus
        value: '{{ JobLogStatus }}'
      - name: QueryLogStatus
        value: '{{ QueryLogStatus }}'
      - name: AnalyticsEngine
        value: '{{ AnalyticsEngine }}'
      - name: CreatorPaymentConfiguration
        value: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.collaborations
WHERE data__Identifier = '<CollaborationIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>collaborations</code> resource, the following permissions are required:

### Create
```json
cleanrooms:CreateCollaboration,
cleanrooms:GetCollaboration,
cleanrooms:ListMembers,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:GetCollaboration,
cleanrooms:ListCollaborations
```

### Read
```json
cleanrooms:GetCollaboration,
cleanrooms:ListMembers,
cleanrooms:ListTagsForResource
```

### Update
```json
cleanrooms:UpdateCollaboration,
cleanrooms:GetCollaboration,
cleanrooms:ListMembers,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource
```

### Delete
```json
cleanrooms:DeleteCollaboration,
cleanrooms:GetCollaboration,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource,
cleanrooms:ListMembers,
cleanrooms:ListCollaborations
```

### List
```json
cleanrooms:ListCollaborations
```
