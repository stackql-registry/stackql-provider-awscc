---
title: vpc_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_attachments
  - networkmanager
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

Creates, updates, deletes or gets a <code>vpc_attachment</code> resource or lists <code>vpc_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::VpcAttachment Resoruce Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.vpc_attachments" /></td></tr>
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
    "name": "core_network_id",
    "type": "string",
    "description": "The ID of a core network for the VPC attachment."
  },
  {
    "name": "core_network_arn",
    "type": "string",
    "description": "The ARN of a core network for the VPC attachment."
  },
  {
    "name": "attachment_id",
    "type": "string",
    "description": "Id of the attachment."
  },
  {
    "name": "owner_account_id",
    "type": "string",
    "description": "Owner account of the attachment."
  },
  {
    "name": "attachment_type",
    "type": "string",
    "description": "Attachment type."
  },
  {
    "name": "state",
    "type": "string",
    "description": "State of the attachment."
  },
  {
    "name": "edge_location",
    "type": "string",
    "description": "The Region where the edge is located."
  },
  {
    "name": "vpc_arn",
    "type": "string",
    "description": "The ARN of the VPC."
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": "The ARN of the Resource."
  },
  {
    "name": "attachment_policy_rule_number",
    "type": "integer",
    "description": "The policy rule number associated with the attachment."
  },
  {
    "name": "segment_name",
    "type": "string",
    "description": "The name of the segment attachment.."
  },
  {
    "name": "proposed_segment_change",
    "type": "object",
    "description": "The attachment to move from one segment to another.",
    "children": [
      {
        "name": "tags",
        "type": "array",
        "description": "The key-value tags that changed for the segment.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
          }
        ]
      },
      {
        "name": "attachment_policy_rule_number",
        "type": "integer",
        "description": "The rule number in the policy document that applies to this change."
      },
      {
        "name": "segment_name",
        "type": "string",
        "description": "The name of the segment to change."
      }
    ]
  },
  {
    "name": "network_function_group_name",
    "type": "string",
    "description": "The name of the network function group attachment."
  },
  {
    "name": "proposed_network_function_group_change",
    "type": "object",
    "description": "The attachment to move from one network function group to another.",
    "children": [
      {
        "name": "tags",
        "type": "array",
        "description": "The key-value tags that changed for the network function group.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
          }
        ]
      },
      {
        "name": "attachment_policy_rule_number",
        "type": "integer",
        "description": "The rule number in the policy document that applies to this change."
      },
      {
        "name": "network_function_group_name",
        "type": "string",
        "description": "The name of the network function group to change."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for the attachment.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Creation time of the attachment."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Last update time of the attachment."
  },
  {
    "name": "subnet_arns",
    "type": "array",
    "description": "Subnet Arn list"
  },
  {
    "name": "options",
    "type": "object",
    "description": "Vpc options of the attachment.",
    "children": [
      {
        "name": "ipv6_support",
        "type": "boolean",
        "description": "Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable"
      },
      {
        "name": "appliance_mode_support",
        "type": "boolean",
        "description": "Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false"
      },
      {
        "name": "dns_support",
        "type": "boolean",
        "description": "Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true | false"
      },
      {
        "name": "security_group_referencing_support",
        "type": "boolean",
        "description": "Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true | false"
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
    "name": "attachment_id",
    "type": "string",
    "description": "Id of the attachment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html"><code>AWS::NetworkManager::VpcAttachment</code></a>.

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
    <td><code>vpc_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CoreNetworkId, VpcArn, SubnetArns, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_attachments</code></td>
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

Gets all properties from an individual <code>vpc_attachment</code>.
```sql
SELECT
  region,
  core_network_id,
  core_network_arn,
  attachment_id,
  owner_account_id,
  attachment_type,
  state,
  edge_location,
  vpc_arn,
  resource_arn,
  attachment_policy_rule_number,
  segment_name,
  proposed_segment_change,
  network_function_group_name,
  proposed_network_function_group_change,
  tags,
  created_at,
  updated_at,
  subnet_arns,
  options
FROM awscc.networkmanager.vpc_attachments
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ attachment_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_attachments</code> in a region.
```sql
SELECT
  region,
  attachment_id
FROM awscc.networkmanager.vpc_attachments_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.vpc_attachments (
  CoreNetworkId,
  VpcArn,
  SubnetArns,
  region
)
SELECT
  '{{ core_network_id }}',
  '{{ vpc_arn }}',
  '{{ subnet_arns }}',
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
INSERT INTO awscc.networkmanager.vpc_attachments (
  CoreNetworkId,
  VpcArn,
  ProposedSegmentChange,
  ProposedNetworkFunctionGroupChange,
  Tags,
  SubnetArns,
  Options,
  region
)
SELECT
  '{{ core_network_id }}',
  '{{ vpc_arn }}',
  '{{ proposed_segment_change }}',
  '{{ proposed_network_function_group_change }}',
  '{{ tags }}',
  '{{ subnet_arns }}',
  '{{ options }}',
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
  - name: vpc_attachment
    props:
      - name: core_network_id
        value: '{{ core_network_id }}'
      - name: vpc_arn
        value: '{{ vpc_arn }}'
      - name: proposed_segment_change
        value:
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
          attachment_policy_rule_number: '{{ attachment_policy_rule_number }}'
          segment_name: '{{ segment_name }}'
      - name: proposed_network_function_group_change
        value:
          tags:
            - null
          attachment_policy_rule_number: '{{ attachment_policy_rule_number }}'
          network_function_group_name: '{{ network_function_group_name }}'
      - name: tags
        value:
          - null
      - name: subnet_arns
        value:
          - '{{ subnet_arns[0] }}'
      - name: options
        value:
          ipv6_support: '{{ ipv6_support }}'
          appliance_mode_support: '{{ appliance_mode_support }}'
          dns_support: '{{ dns_support }}'
          security_group_referencing_support: '{{ security_group_referencing_support }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkmanager.vpc_attachments
SET PatchDocument = string('{{ {
    "ProposedSegmentChange": proposed_segment_change,
    "ProposedNetworkFunctionGroupChange": proposed_network_function_group_change,
    "Tags": tags,
    "SubnetArns": subnet_arns,
    "Options": options
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ attachment_id }}'
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
DELETE FROM awscc.networkmanager.vpc_attachments
WHERE
  Identifier = '{{ attachment_id }}' AND
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

To operate on the <code>vpc_attachments</code> resource, the following permissions are required:

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
networkmanager:CreateVpcAttachment,
networkmanager:GetVpcAttachment,
networkmanager:TagResource,
ec2:DescribeRegions,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
networkmanager:GetVpcAttachment
```

</TabItem>
<TabItem value="update">

```json
networkmanager:UpdateVpcAttachment,
networkmanager:GetVpcAttachment,
networkmanager:ListTagsForResource,
networkmanager:TagResource,
networkmanager:UntagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="delete">

```json
networkmanager:DeleteAttachment,
networkmanager:GetVpcAttachment,
networkmanager:UntagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="list">

```json
networkmanager:ListAttachments
```

</TabItem>
</Tabs>