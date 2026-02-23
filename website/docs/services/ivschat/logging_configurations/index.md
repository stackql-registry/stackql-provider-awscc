---
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
  - ivschat
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

Creates, updates, deletes or gets a <code>logging_configuration</code> resource or lists <code>logging_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>logging_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::IVSChat::LoggingConfiguration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivschat.logging_configurations" /></td></tr>
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
    "description": "LoggingConfiguration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The system-generated ID of the logging configuration."
  },
  {
    "name": "destination_configuration",
    "type": "object",
    "description": "Destination configuration for IVS Chat logging.",
    "children": [
      {
        "name": "cloud_watch_logs",
        "type": "object",
        "description": "CloudWatch destination configuration for IVS Chat logging.",
        "children": [
          {
            "name": "log_group_name",
            "type": "string",
            "description": "Name of the Amazon CloudWatch Logs log group where chat activity will be logged."
          }
        ]
      },
      {
        "name": "firehose",
        "type": "object",
        "description": "Kinesis Firehose destination configuration for IVS Chat logging.",
        "children": [
          {
            "name": "delivery_stream_name",
            "type": "string",
            "description": "Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged."
          }
        ]
      },
      {
        "name": "s3",
        "type": "object",
        "description": "S3 destination configuration for IVS Chat logging.",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": "Name of the Amazon S3 bucket where chat activity will be logged."
          }
        ]
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the logging configuration. The value does not need to be unique."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the logging configuration. When the state is ACTIVE, the configuration is ready to log chat content."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "arn",
    "type": "string",
    "description": "LoggingConfiguration ARN is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html"><code>AWS::IVSChat::LoggingConfiguration</code></a>.

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
    <td><code>logging_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DestinationConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>logging_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>logging_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>logging_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>logging_configurations</code></td>
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

Gets all properties from an individual <code>logging_configuration</code>.
```sql
SELECT
region,
arn,
id,
destination_configuration,
name,
state,
tags
FROM awscc.ivschat.logging_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>logging_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivschat.logging_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>logging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivschat.logging_configurations (
 DestinationConfiguration,
 region
)
SELECT
'{{ destination_configuration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivschat.logging_configurations (
 DestinationConfiguration,
 Name,
 Tags,
 region
)
SELECT
 '{{ destination_configuration }}',
 '{{ name }}',
 '{{ tags }}',
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
  - name: logging_configuration
    props:
      - name: destination_configuration
        value:
          cloud_watch_logs:
            log_group_name: '{{ log_group_name }}'
          firehose:
            delivery_stream_name: '{{ delivery_stream_name }}'
          s3:
            bucket_name: '{{ bucket_name }}'
      - name: name
        value: '{{ name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>logging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ivschat.logging_configurations
SET PatchDocument = string('{{ {
    "DestinationConfiguration": destination_configuration,
    "Name": name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivschat.logging_configurations
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>logging_configurations</code> resource, the following permissions are required:

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
ivschat:CreateLoggingConfiguration,
ivschat:GetLoggingConfiguration,
logs:CreateLogDelivery,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
iam:CreateServiceLinkedRole,
firehose:TagDeliveryStream,
ivschat:TagResource
```

</TabItem>
<TabItem value="read">

```json
ivschat:GetLoggingConfiguration,
ivschat:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
ivschat:UpdateLoggingConfiguration,
ivschat:GetLoggingConfiguration,
ivschat:TagResource,
ivschat:UntagResource,
ivschat:ListTagsForResource,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
iam:CreateServiceLinkedRole,
firehose:TagDeliveryStream
```

</TabItem>
<TabItem value="delete">

```json
ivschat:DeleteLoggingConfiguration,
ivschat:GetLoggingConfiguration,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
ivschat:UntagResource,
logs:GetLogDelivery
```

</TabItem>
<TabItem value="list">

```json
ivschat:ListLoggingConfigurations,
ivschat:ListTagsForResource
```

</TabItem>
</Tabs>