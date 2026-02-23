---
title: log_delivery_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - log_delivery_configurations
  - cognito
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

Creates, updates, deletes or gets a <code>log_delivery_configuration</code> resource or lists <code>log_delivery_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>log_delivery_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Cognito::LogDeliveryConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.log_delivery_configurations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "log_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "log_level",
        "type": "string",
        "description": ""
      },
      {
        "name": "event_source",
        "type": "string",
        "description": ""
      },
      {
        "name": "cloud_watch_logs_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_group_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "firehose_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "stream_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html"><code>AWS::Cognito::LogDeliveryConfiguration</code></a>.

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
    <td><CopyableCode code="UserPoolId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>log_delivery_configuration</code>.
```sql
SELECT
region,
id,
user_pool_id,
log_configurations
FROM awscc.cognito.log_delivery_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>log_delivery_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.log_delivery_configurations (
 UserPoolId,
 region
)
SELECT
'{{ user_pool_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.log_delivery_configurations (
 UserPoolId,
 LogConfigurations,
 region
)
SELECT
 '{{ user_pool_id }}',
 '{{ log_configurations }}',
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
  - name: log_delivery_configuration
    props:
      - name: user_pool_id
        value: '{{ user_pool_id }}'
      - name: log_configurations
        value:
          - log_level: '{{ log_level }}'
            event_source: '{{ event_source }}'
            cloud_watch_logs_configuration:
              log_group_arn: '{{ log_group_arn }}'
            s3_configuration:
              bucket_arn: '{{ bucket_arn }}'
            firehose_configuration:
              stream_arn: '{{ stream_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>log_delivery_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cognito.log_delivery_configurations
SET PatchDocument = string('{{ {
    "LogConfigurations": log_configurations
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.log_delivery_configurations
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>log_delivery_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
cognito-idp:GetLogDeliveryConfiguration,
cognito-idp:SetLogDeliveryConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
s3:PutObject,
s3:GetBucketAcl,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
cognito-idp:GetLogDeliveryConfiguration
```

</TabItem>
<TabItem value="update">

```json
cognito-idp:GetLogDeliveryConfiguration,
cognito-idp:SetLogDeliveryConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
s3:PutObject,
s3:GetBucketAcl,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="delete">

```json
cognito-idp:GetLogDeliveryConfiguration,
cognito-idp:SetLogDeliveryConfiguration,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:GetBucketPolicy,
s3:PutBucketPolicy,
s3:ListBucket,
s3:PutObject,
s3:GetBucketAcl,
firehose:TagDeliveryStream,
iam:CreateServiceLinkedRole
```

</TabItem>
</Tabs>