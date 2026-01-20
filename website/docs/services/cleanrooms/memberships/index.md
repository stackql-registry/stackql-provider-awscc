---
title: memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - memberships
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

Creates, updates, deletes or gets a <code>membership</code> resource or lists <code>memberships</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>memberships</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents an AWS account that is a part of a collaboration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.memberships" /></td></tr>
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
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms membership.",
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
    "name": "collaboration_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "collaboration_creator_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "collaboration_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "membership_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "query_log_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "job_log_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_result_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "output_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "s3",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "result_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key_prefix",
                "type": "string",
                "description": ""
              },
              {
                "name": "single_file_output",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "default_job_result_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "output_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "s3",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key_prefix",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "payment_configuration",
    "type": "object",
    "description": "",
    "children": [
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
      },
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
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html"><code>AWS::CleanRooms::Membership</code></a>.

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
    <td><CopyableCode code="CollaborationIdentifier, QueryLogStatus, region" /></td>
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

Gets all properties from an individual <code>membership</code>.
```sql
SELECT
region,
arn,
tags,
collaboration_arn,
collaboration_creator_account_id,
collaboration_identifier,
membership_identifier,
query_log_status,
job_log_status,
default_result_configuration,
default_job_result_configuration,
payment_configuration
FROM awscc.cleanrooms.memberships
WHERE region = 'us-east-1' AND data__Identifier = '<MembershipIdentifier>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>membership</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.memberships (
 CollaborationIdentifier,
 QueryLogStatus,
 region
)
SELECT 
'{{ CollaborationIdentifier }}',
 '{{ QueryLogStatus }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanrooms.memberships (
 Tags,
 CollaborationIdentifier,
 QueryLogStatus,
 JobLogStatus,
 DefaultResultConfiguration,
 DefaultJobResultConfiguration,
 PaymentConfiguration,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ CollaborationIdentifier }}',
 '{{ QueryLogStatus }}',
 '{{ JobLogStatus }}',
 '{{ DefaultResultConfiguration }}',
 '{{ DefaultJobResultConfiguration }}',
 '{{ PaymentConfiguration }}',
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
  - name: membership
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CollaborationIdentifier
        value: '{{ CollaborationIdentifier }}'
      - name: QueryLogStatus
        value: '{{ QueryLogStatus }}'
      - name: JobLogStatus
        value: '{{ JobLogStatus }}'
      - name: DefaultResultConfiguration
        value:
          OutputConfiguration:
            S3:
              ResultFormat: '{{ ResultFormat }}'
              Bucket: '{{ Bucket }}'
              KeyPrefix: '{{ KeyPrefix }}'
              SingleFileOutput: '{{ SingleFileOutput }}'
          RoleArn: '{{ RoleArn }}'
      - name: DefaultJobResultConfiguration
        value:
          OutputConfiguration:
            S3:
              Bucket: '{{ Bucket }}'
              KeyPrefix: '{{ KeyPrefix }}'
          RoleArn: '{{ RoleArn }}'
      - name: PaymentConfiguration
        value:
          QueryCompute:
            IsResponsible: '{{ IsResponsible }}'
          MachineLearning:
            ModelTraining:
              IsResponsible: '{{ IsResponsible }}'
            ModelInference:
              IsResponsible: '{{ IsResponsible }}'
          JobCompute:
            IsResponsible: '{{ IsResponsible }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.memberships
WHERE data__Identifier = '<MembershipIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>memberships</code> resource, the following permissions are required:

### Create
```json
cleanrooms:CreateMembership,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:PutResourcePolicy,
logs:CreateLogGroup,
cleanrooms:GetMembership,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:ListMemberships,
iam:PassRole
```

### Read
```json
cleanrooms:GetMembership,
cleanrooms:ListTagsForResource,
logs:ListLogDeliveries,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:GetLogDelivery
```

### Update
```json
cleanrooms:UpdateMembership,
cleanrooms:GetMembership,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:PutResourcePolicy,
logs:CreateLogGroup,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource,
iam:PassRole
```

### Delete
```json
cleanrooms:DeleteMembership,
cleanrooms:GetMembership,
cleanrooms:ListMemberships,
cleanrooms:ListTagsForResource,
logs:ListLogDeliveries,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:GetLogDelivery
```

### List
```json
cleanrooms:ListMemberships
```
