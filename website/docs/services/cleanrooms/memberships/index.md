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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "membership_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html"><code>AWS::CleanRooms::Membership</code></a>.

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
    <td><code>memberships</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CollaborationIdentifier, QueryLogStatus, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>memberships</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>memberships</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>memberships_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>memberships</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ membership_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>memberships</code> in a region.
```sql
SELECT
region,
membership_identifier
FROM awscc.cleanrooms.memberships_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ collaboration_identifier }}',
 '{{ query_log_status }}',
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
 '{{ tags }}',
 '{{ collaboration_identifier }}',
 '{{ query_log_status }}',
 '{{ job_log_status }}',
 '{{ default_result_configuration }}',
 '{{ default_job_result_configuration }}',
 '{{ payment_configuration }}',
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
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: collaboration_identifier
        value: '{{ collaboration_identifier }}'
      - name: query_log_status
        value: '{{ query_log_status }}'
      - name: job_log_status
        value: '{{ job_log_status }}'
      - name: default_result_configuration
        value:
          output_configuration:
            s3:
              result_format: '{{ result_format }}'
              bucket: '{{ bucket }}'
              key_prefix: '{{ key_prefix }}'
              single_file_output: '{{ single_file_output }}'
          role_arn: '{{ role_arn }}'
      - name: default_job_result_configuration
        value:
          output_configuration:
            s3:
              bucket: '{{ bucket }}'
              key_prefix: '{{ key_prefix }}'
          role_arn: '{{ role_arn }}'
      - name: payment_configuration
        value:
          query_compute:
            is_responsible: '{{ is_responsible }}'
          machine_learning:
            model_training:
              is_responsible: '{{ is_responsible }}'
            model_inference:
              is_responsible: '{{ is_responsible }}'
          job_compute:
            is_responsible: '{{ is_responsible }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>membership</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cleanrooms.memberships
SET PatchDocument = string('{{ {
    "Tags": tags,
    "QueryLogStatus": query_log_status,
    "JobLogStatus": job_log_status,
    "DefaultResultConfiguration": default_result_configuration,
    "DefaultJobResultConfiguration": default_job_result_configuration,
    "PaymentConfiguration": payment_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ membership_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.memberships
WHERE Identifier = '{{ membership_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>memberships</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

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

</TabItem>
<TabItem value="read">

```json
cleanrooms:GetMembership,
cleanrooms:ListTagsForResource,
logs:ListLogDeliveries,
logs:DescribeLogGroups,
logs:DescribeResourcePolicies,
logs:GetLogDelivery
```

</TabItem>
<TabItem value="update">

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

</TabItem>
<TabItem value="delete">

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

</TabItem>
<TabItem value="list">

```json
cleanrooms:ListMemberships
```

</TabItem>
</Tabs>