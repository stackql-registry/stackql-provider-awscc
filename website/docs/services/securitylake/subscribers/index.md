---
title: subscribers
hide_title: false
hide_table_of_contents: false
keywords:
  - subscribers
  - securitylake
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

Creates, updates, deletes or gets a <code>subscriber</code> resource or lists <code>subscribers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>subscribers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SecurityLake::Subscriber</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securitylake.subscribers" /></td></tr>
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
    "name": "access_types",
    "type": "array",
    "description": "The Amazon S3 or AWS Lake Formation access type."
  },
  {
    "name": "data_lake_arn",
    "type": "string",
    "description": "The ARN for the data lake."
  },
  {
    "name": "subscriber_identity",
    "type": "object",
    "description": "The AWS identity used to access your data.",
    "children": [
      {
        "name": "external_id",
        "type": "string",
        "description": "The external ID used to establish trust relationship with the AWS identity."
      },
      {
        "name": "principal",
        "type": "string",
        "description": "The AWS identity principal."
      }
    ]
  },
  {
    "name": "subscriber_name",
    "type": "string",
    "description": "The name of your Security Lake subscriber account."
  },
  {
    "name": "subscriber_description",
    "type": "string",
    "description": "The description for your subscriber account in Security Lake."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The name of the tag. This is a general label that acts as a category for a more specific tag value (value)."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value that is associated with the specified tag key (key). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string."
      }
    ]
  },
  {
    "name": "sources",
    "type": "array",
    "description": "The supported AWS services from which logs and events are collected.",
    "children": [
      {
        "name": "aws_log_source",
        "type": "object",
        "description": "Amazon Security Lake supports log and event collection for natively supported AWS services.",
        "children": [
          {
            "name": "source_name",
            "type": "string",
            "description": "The name for a AWS source. This must be a Regionally unique value."
          },
          {
            "name": "source_version",
            "type": "string",
            "description": "The version for a AWS source. This must be a Regionally unique value."
          }
        ]
      },
      {
        "name": "custom_log_source",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source_name",
            "type": "string",
            "description": "The name for a third-party custom source. This must be a Regionally unique value."
          },
          {
            "name": "source_version",
            "type": "string",
            "description": "The version for a third-party custom source. This must be a Regionally unique value."
          }
        ]
      }
    ]
  },
  {
    "name": "resource_share_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_share_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "subscriber_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "s3_bucket_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "subscriber_arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "subscriber_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html"><code>AWS::SecurityLake::Subscriber</code></a>.

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
    <td><code>subscribers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccessTypes, DataLakeArn, Sources, SubscriberIdentity, SubscriberName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>subscribers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>subscribers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>subscribers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>subscribers</code></td>
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

Gets all properties from an individual <code>subscriber</code>.
```sql
SELECT
region,
access_types,
data_lake_arn,
subscriber_identity,
subscriber_name,
subscriber_description,
tags,
sources,
resource_share_arn,
resource_share_name,
subscriber_role_arn,
s3_bucket_arn,
subscriber_arn
FROM awscc.securitylake.subscribers
WHERE region = 'us-east-1' AND data__Identifier = '<SubscriberArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>subscribers</code> in a region.
```sql
SELECT
region,
subscriber_arn
FROM awscc.securitylake.subscribers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>subscriber</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securitylake.subscribers (
 AccessTypes,
 DataLakeArn,
 SubscriberIdentity,
 SubscriberName,
 Sources,
 region
)
SELECT 
'{{ AccessTypes }}',
 '{{ DataLakeArn }}',
 '{{ SubscriberIdentity }}',
 '{{ SubscriberName }}',
 '{{ Sources }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securitylake.subscribers (
 AccessTypes,
 DataLakeArn,
 SubscriberIdentity,
 SubscriberName,
 SubscriberDescription,
 Tags,
 Sources,
 region
)
SELECT 
 '{{ AccessTypes }}',
 '{{ DataLakeArn }}',
 '{{ SubscriberIdentity }}',
 '{{ SubscriberName }}',
 '{{ SubscriberDescription }}',
 '{{ Tags }}',
 '{{ Sources }}',
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
  - name: subscriber
    props:
      - name: AccessTypes
        value:
          - '{{ AccessTypes[0] }}'
      - name: DataLakeArn
        value: '{{ DataLakeArn }}'
      - name: SubscriberIdentity
        value:
          ExternalId: '{{ ExternalId }}'
          Principal: '{{ Principal }}'
      - name: SubscriberName
        value: '{{ SubscriberName }}'
      - name: SubscriberDescription
        value: '{{ SubscriberDescription }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Sources
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.securitylake.subscribers
SET data__PatchDocument = string('{{ {
    "AccessTypes": access_types,
    "SubscriberIdentity": subscriber_identity,
    "SubscriberName": subscriber_name,
    "SubscriberDescription": subscriber_description,
    "Tags": tags,
    "Sources": sources
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<SubscriberArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securitylake.subscribers
WHERE data__Identifier = '<SubscriberArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>subscribers</code> resource, the following permissions are required:

### Create
```json
securitylake:CreateSubscriber,
securitylake:CreateCustomLogSource,
securitylake:CreateDataLake,
securitylake:TagResource,
securitylake:GetSubscriber,
securitylake:ListSubscribers,
securitylake:ListTagsForResource,
iam:GetRole,
iam:GetRolePolicy,
iam:PutRolePolicy,
iam:CreateRole,
iam:CreateServiceLinkedRole,
glue:GetDatabase,
glue:GetTable,
lakeformation:RegisterResource,
lakeformation:GrantPermissions,
lakeformation:RevokePermissions,
lakeformation:ListPermissions,
ram:GetResourceShareAssociations,
ram:CreateResourceShare,
ram:UpdateResourceShare,
ram:GetResourceShares
```

### Read
```json
securitylake:GetSubscriber,
securitylake:ListTagsForResource
```

### Update
```json
securitylake:UpdateSubscriber,
securitylake:GetSubscriber,
securitylake:TagResource,
securitylake:UntagResource,
securitylake:ListTagsForResource,
glue:GetDatabase,
glue:GetTable,
lakeformation:ListPermissions,
lakeformation:GrantPermissions,
lakeformation:RevokePermissions,
ram:CreateResourceShare,
ram:GetResourceShares,
ram:GetResourceShareAssociations,
ram:UpdateResourceShare,
ram:DeleteResourceShare,
iam:CreateRole,
iam:GetRole,
iam:DeleteRole,
iam:PutRolePolicy,
iam:DeleteRolePolicy,
iam:ListRolePolicies,
events:CreateApiDestination,
events:CreateConnection,
events:ListApiDestinations,
events:ListConnections,
events:PutRule,
events:UpdateApiDestination,
events:UpdateConnection,
events:DeleteApiDestination,
events:DeleteConnection,
events:DeleteRule,
events:RemoveTargets,
events:ListTargetsByRule,
events:DescribeRule,
events:PutTargets
```

### Delete
```json
securitylake:DeleteSubscriber,
iam:GetRole,
iam:ListRolePolicies,
iam:DeleteRole,
iam:DeleteRolePolicy,
glue:GetTable,
lakeformation:RevokePermissions,
lakeformation:ListPermissions,
ram:GetResourceShares,
ram:DeleteResourceShare,
events:DeleteApiDestination,
events:DeleteConnection,
events:DeleteRule,
events:ListApiDestinations,
events:ListTargetsByRule,
events:DescribeRule,
events:RemoveTargets,
sqs:DeleteQueue,
sqs:GetQueueUrl
```

### List
```json
securitylake:ListSubscribers
```
