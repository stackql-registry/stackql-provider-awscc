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
        "description": "Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable &#124; disable"
      },
      {
        "name": "appliance_mode_support",
        "type": "boolean",
        "description": "Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true &#124; false"
      },
      {
        "name": "dns_support",
        "type": "boolean",
        "description": "Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true &#124; false"
      },
      {
        "name": "security_group_referencing_support",
        "type": "boolean",
        "description": "Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true &#124; false"
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
WHERE region = 'us-east-1' AND Identifier = '<AttachmentId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_attachments</code> in a region.
```sql
SELECT
region,
attachment_id
FROM awscc.networkmanager.vpc_attachments_list_only
WHERE region = 'us-east-1';
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
'{{ CoreNetworkId }}',
 '{{ VpcArn }}',
 '{{ SubnetArns }}',
'{{ region }}';
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
 '{{ CoreNetworkId }}',
 '{{ VpcArn }}',
 '{{ ProposedSegmentChange }}',
 '{{ ProposedNetworkFunctionGroupChange }}',
 '{{ Tags }}',
 '{{ SubnetArns }}',
 '{{ Options }}',
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
  - name: vpc_attachment
    props:
      - name: CoreNetworkId
        value: '{{ CoreNetworkId }}'
      - name: VpcArn
        value: '{{ VpcArn }}'
      - name: ProposedSegmentChange
        value:
          Tags:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
          AttachmentPolicyRuleNumber: '{{ AttachmentPolicyRuleNumber }}'
          SegmentName: '{{ SegmentName }}'
      - name: ProposedNetworkFunctionGroupChange
        value:
          Tags:
            - null
          AttachmentPolicyRuleNumber: '{{ AttachmentPolicyRuleNumber }}'
          NetworkFunctionGroupName: '{{ NetworkFunctionGroupName }}'
      - name: Tags
        value:
          - null
      - name: SubnetArns
        value:
          - '{{ SubnetArns[0] }}'
      - name: Options
        value:
          Ipv6Support: '{{ Ipv6Support }}'
          ApplianceModeSupport: '{{ ApplianceModeSupport }}'
          DnsSupport: '{{ DnsSupport }}'
          SecurityGroupReferencingSupport: '{{ SecurityGroupReferencingSupport }}'

```
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
WHERE region = '{{ region }}'
AND Identifier = '<AttachmentId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.vpc_attachments
WHERE Identifier = '<AttachmentId>'
AND region = 'us-east-1';
```

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