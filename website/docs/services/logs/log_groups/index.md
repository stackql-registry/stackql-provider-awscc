---
title: log_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - log_groups
  - logs
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

Creates, updates, deletes or gets a <code>log_group</code> resource or lists <code>log_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>log_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::Logs::LogGroup</code> resource specifies a log group. A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.</summary>You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:<br />+  Log group names must be unique within a Region for an AWS account.<br />+  Log group names can be between 1 and 512 characters long.<br />+  Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.log_groups" /></td></tr>
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
    "name": "log_group_name",
    "type": "string",
    "description": "The name of the log group. If you don't specify a name, CFNlong generates a unique ID for the log group."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "<details><summary>The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.</summary>To associate an KMS key with the log group, specify the ARN of that KMS key here. If you do so, ingested data is encrypted using this key. This association is stored as long as the data encrypted with the KMS key is still within CWL. This enables CWL to decrypt this data whenever it is requested.<br />If you attempt to associate a KMS key with the log group but the KMS key doesn't exist or is deactivated, you will receive an <code>InvalidParameterException</code> error.<br />Log group data is always encrypted in CWL. If you omit this key, the encryption does not use KMS. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html\">Encrypt log data in using</a></details>"
  },
  {
    "name": "data_protection_policy",
    "type": "object",
    "description": "<details><summary>Creates a data protection policy and assigns it to the log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. When a user who does not have permission to view masked data views a log event that includes masked data, the sensitive data is replaced by asterisks.</summary>For more information, including a list of types of data that can be audited and masked, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html\">Protect sensitive log data with masking</a>.</details>"
  },
  {
    "name": "field_index_policies",
    "type": "array",
    "description": "<details><summary>Creates or updates a <i>field index policy</i> for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html\">Log classes</a>.</summary>You can use field index policies to create <i>field indexes</i> on fields found in log events in the log group. Creating field indexes lowers the costs for CWL Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields that have high cardinality of values Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html\">Create field indexes to improve query performance and reduce costs</a>.<br />Currently, this array supports only one field index policy object.</details>"
  },
  {
    "name": "log_group_class",
    "type": "string",
    "description": "<details><summary>Specifies the log group class for this log group. There are two classes:</summary>+  The <code>Standard</code> log class supports all CWL features.<br />+  The <code>Infrequent Access</code> log class supports a subset of CWL features and incurs lower costs.<br />For details about the features supported by each class, see <a href=\"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html\">Log classes</a></details>"
  },
  {
    "name": "retention_in_days",
    "type": "integer",
    "description": "<details><summary>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</summary>To set a log group so that its log events do not expire, use <a href=\"https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html\">DeleteRetentionPolicy</a>.</details>"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>An array of key-value pairs to apply to the log group.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html\">Tag</a>.</details>",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value of this key-value pair."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "resource_policy_document",
    "type": "object",
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
    "name": "log_group_name",
    "type": "string",
    "description": "The name of the log group. If you don't specify a name, CFNlong generates a unique ID for the log group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html"><code>AWS::Logs::LogGroup</code></a>.

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
    <td><code>log_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>log_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>log_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>log_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>log_groups</code></td>
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

Gets all properties from an individual <code>log_group</code>.
```sql
SELECT
  region,
  log_group_name,
  kms_key_id,
  data_protection_policy,
  field_index_policies,
  log_group_class,
  retention_in_days,
  tags,
  arn,
  resource_policy_document
FROM awscc.logs.log_groups
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ log_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>log_groups</code> in a region.
```sql
SELECT
  region,
  log_group_name
FROM awscc.logs.log_groups_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>log_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.log_groups (
  LogGroupName,
  KmsKeyId,
  DataProtectionPolicy,
  FieldIndexPolicies,
  LogGroupClass,
  RetentionInDays,
  Tags,
  ResourcePolicyDocument,
  region
)
SELECT
  '{{ log_group_name }}',
  '{{ kms_key_id }}',
  '{{ data_protection_policy }}',
  '{{ field_index_policies }}',
  '{{ log_group_class }}',
  '{{ retention_in_days }}',
  '{{ tags }}',
  '{{ resource_policy_document }}',
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
INSERT INTO awscc.logs.log_groups (
  LogGroupName,
  KmsKeyId,
  DataProtectionPolicy,
  FieldIndexPolicies,
  LogGroupClass,
  RetentionInDays,
  Tags,
  ResourcePolicyDocument,
  region
)
SELECT
  '{{ log_group_name }}',
  '{{ kms_key_id }}',
  '{{ data_protection_policy }}',
  '{{ field_index_policies }}',
  '{{ log_group_class }}',
  '{{ retention_in_days }}',
  '{{ tags }}',
  '{{ resource_policy_document }}',
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
  - name: log_group
    props:
      - name: log_group_name
        value: '{{ log_group_name }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: data_protection_policy
        value: {}
      - name: field_index_policies
        value:
          - {}
      - name: log_group_class
        value: '{{ log_group_class }}'
      - name: retention_in_days
        value: '{{ retention_in_days }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: resource_policy_document
        value: {}`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>log_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.logs.log_groups
SET PatchDocument = string('{{ {
    "KmsKeyId": kms_key_id,
    "DataProtectionPolicy": data_protection_policy,
    "FieldIndexPolicies": field_index_policies,
    "LogGroupClass": log_group_class,
    "RetentionInDays": retention_in_days,
    "Tags": tags,
    "ResourcePolicyDocument": resource_policy_document
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ log_group_name }}'
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
DELETE FROM awscc.logs.log_groups
WHERE
  Identifier = '{{ log_group_name }}' AND
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

To operate on the <code>log_groups</code> resource, the following permissions are required:

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
logs:DescribeLogGroups,
logs:CreateLogGroup,
logs:PutRetentionPolicy,
logs:TagResource,
logs:GetDataProtectionPolicy,
logs:PutDataProtectionPolicy,
logs:CreateLogDelivery,
s3:REST.PUT.OBJECT,
firehose:TagDeliveryStream,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:PutIndexPolicy,
logs:DescribeIndexPolicies
```

</TabItem>
<TabItem value="read">

```json
logs:DescribeLogGroups,
logs:ListTagsForResource,
logs:GetDataProtectionPolicy,
logs:DescribeIndexPolicies,
logs:DescribeResourcePolicies
```

</TabItem>
<TabItem value="update">

```json
logs:DescribeLogGroups,
logs:AssociateKmsKey,
logs:DisassociateKmsKey,
logs:PutRetentionPolicy,
logs:DeleteRetentionPolicy,
logs:TagResource,
logs:UntagResource,
logs:ListTagsForResource,
logs:GetDataProtectionPolicy,
logs:PutDataProtectionPolicy,
logs:CreateLogDelivery,
s3:REST.PUT.OBJECT,
firehose:TagDeliveryStream,
logs:PutIndexPolicy,
logs:DeleteIndexPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DeleteResourcePolicy
```

</TabItem>
<TabItem value="delete">

```json
logs:DescribeLogGroups,
logs:DeleteLogGroup,
logs:DeleteDataProtectionPolicy
```

</TabItem>
<TabItem value="list">

```json
logs:DescribeLogGroups,
logs:ListTagsForResource
```

</TabItem>
</Tabs>