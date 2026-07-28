---
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
  - wafv2
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
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
<tr><td><b>Description</b></td><td>A WAFv2 Logging Configuration Resource Provider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wafv2.logging_configurations" /></td></tr>
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
    "name": "resource_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs."
  },
  {
    "name": "log_destination_configs",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL."
  },
  {
    "name": "redacted_fields",
    "type": "array",
    "description": "The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.",
    "children": [
      {
        "name": "method",
        "type": "object",
        "description": "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform."
      },
      {
        "name": "query_string",
        "type": "object",
        "description": "Inspect the query string. This is the part of a URL that appears after a ? character, if any."
      },
      {
        "name": "single_header",
        "type": "object",
        "description": "Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the query header to inspect."
          }
        ]
      },
      {
        "name": "uri_path",
        "type": "object",
        "description": "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg."
      }
    ]
  },
  {
    "name": "managed_by_firewall_manager",
    "type": "boolean",
    "description": "Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration."
  },
  {
    "name": "logging_filter",
    "type": "object",
    "description": "Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.",
    "children": [
      {
        "name": "default_behavior",
        "type": "string",
        "description": "Default handling for logs that don't match any of the specified filtering conditions."
      },
      {
        "name": "filters",
        "type": "array",
        "description": "The filters that you want to apply to the logs.",
        "children": [
          {
            "name": "behavior",
            "type": "string",
            "description": "How to handle logs that satisfy the filter's conditions and requirement."
          },
          {
            "name": "conditions",
            "type": "array",
            "description": "Match conditions for the filter.",
            "children": [
              {
                "name": "action_condition",
                "type": "object",
                "description": "A single action condition."
              },
              {
                "name": "label_name_condition",
                "type": "object",
                "description": "A single label name condition."
              }
            ]
          },
          {
            "name": "requirement",
            "type": "string",
            "description": "Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition."
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
    "name": "resource_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html"><code>AWS::WAFv2::LoggingConfiguration</code></a>.

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
    <td><CopyableCode code="ResourceArn, LogDestinationConfigs, region" /></td>
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
  resource_arn,
  log_destination_configs,
  redacted_fields,
  managed_by_firewall_manager,
  logging_filter
FROM awscc.wafv2.logging_configurations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resource_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>logging_configurations</code> in a region.
```sql
SELECT
  region,
  resource_arn
FROM awscc.wafv2.logging_configurations_list_only
WHERE
  region = '{{ region }}';
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
INSERT INTO awscc.wafv2.logging_configurations (
  ResourceArn,
  LogDestinationConfigs,
  region
)
SELECT
  '{{ resource_arn }}',
  '{{ log_destination_configs }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wafv2.logging_configurations (
  ResourceArn,
  LogDestinationConfigs,
  RedactedFields,
  LoggingFilter,
  region
)
SELECT
  '{{ resource_arn }}',
  '{{ log_destination_configs }}',
  '{{ redacted_fields }}',
  '{{ logging_filter }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
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
      - name: resource_arn
        value: '{{ resource_arn }}'
      - name: log_destination_configs
        value:
          - '{{ log_destination_configs[0] }}'
      - name: redacted_fields
        value:
          - method: {}
            query_string: {}
            single_header:
              name: '{{ name }}'
            uri_path: {}
      - name: logging_filter
        value:
          default_behavior: '{{ default_behavior }}'
          filters:
            - behavior: '{{ behavior }}'
              conditions:
                - action_condition:
                    action: '{{ action }}'
                  label_name_condition:
                    label_name: '{{ label_name }}'
              requirement: '{{ requirement }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>logging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.wafv2.logging_configurations
SET PatchDocument = string('{{ {
    "LogDestinationConfigs": log_destination_configs,
    "RedactedFields": redacted_fields,
    "LoggingFilter": logging_filter
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resource_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wafv2.logging_configurations
WHERE
  Identifier = '{{ resource_arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

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
wafv2:PutLoggingConfiguration,
wafv2:GetLoggingConfiguration,
firehose:ListDeliveryStreams,
iam:CreateServiceLinkedRole,
iam:DescribeOrganization,
logs:CreateLogDelivery,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups
```

</TabItem>
<TabItem value="read">

```json
wafv2:GetLoggingConfiguration
```

</TabItem>
<TabItem value="update">

```json
wafv2:PutLoggingConfiguration,
wafv2:GetLoggingConfiguration,
firehose:ListDeliveryStreams,
iam:CreateServiceLinkedRole,
iam:DescribeOrganization,
logs:CreateLogDelivery,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups
```

</TabItem>
<TabItem value="delete">

```json
wafv2:DeleteLoggingConfiguration,
wafv2:GetLoggingConfiguration,
logs:DeleteLogDelivery
```

</TabItem>
<TabItem value="list">

```json
wafv2:ListLoggingConfigurations
```

</TabItem>
</Tabs>