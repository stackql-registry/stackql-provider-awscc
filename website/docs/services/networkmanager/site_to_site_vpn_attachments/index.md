---
title: site_to_site_vpn_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - site_to_site_vpn_attachments
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

Creates, updates, deletes or gets a <code>site_to_site_vpn_attachment</code> resource or lists <code>site_to_site_vpn_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>site_to_site_vpn_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::NetworkManager::SiteToSiteVpnAttachment Resource Type definition.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.site_to_site_vpn_attachments" /></td></tr>
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
    "description": "The ID of a core network where you're creating a site-to-site VPN attachment."
  },
  {
    "name": "core_network_arn",
    "type": "string",
    "description": "The ARN of a core network for the VPC attachment."
  },
  {
    "name": "attachment_id",
    "type": "string",
    "description": "The ID of the attachment."
  },
  {
    "name": "owner_account_id",
    "type": "string",
    "description": "Owner account of the attachment."
  },
  {
    "name": "attachment_type",
    "type": "string",
    "description": "The type of attachment."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the attachment."
  },
  {
    "name": "edge_location",
    "type": "string",
    "description": "The Region where the edge is located."
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
    "description": "The name of the segment that attachment is in."
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
    "name": "vpn_connection_arn",
    "type": "string",
    "description": "The ARN of the site-to-site VPN attachment."
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
    "description": "The ID of the attachment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html"><code>AWS::NetworkManager::SiteToSiteVpnAttachment</code></a>.

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
    <td><code>site_to_site_vpn_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CoreNetworkId, VpnConnectionArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>site_to_site_vpn_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>site_to_site_vpn_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>site_to_site_vpn_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>site_to_site_vpn_attachments</code></td>
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

Gets all properties from an individual <code>site_to_site_vpn_attachment</code>.
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
resource_arn,
attachment_policy_rule_number,
segment_name,
proposed_segment_change,
network_function_group_name,
proposed_network_function_group_change,
tags,
created_at,
updated_at,
vpn_connection_arn
FROM awscc.networkmanager.site_to_site_vpn_attachments
WHERE region = 'us-east-1' AND Identifier = '<AttachmentId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>site_to_site_vpn_attachments</code> in a region.
```sql
SELECT
region,
attachment_id
FROM awscc.networkmanager.site_to_site_vpn_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>site_to_site_vpn_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.site_to_site_vpn_attachments (
 CoreNetworkId,
 VpnConnectionArn,
 region
)
SELECT 
'{{ CoreNetworkId }}',
 '{{ VpnConnectionArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.site_to_site_vpn_attachments (
 CoreNetworkId,
 ProposedSegmentChange,
 NetworkFunctionGroupName,
 ProposedNetworkFunctionGroupChange,
 Tags,
 VpnConnectionArn,
 region
)
SELECT 
 '{{ CoreNetworkId }}',
 '{{ ProposedSegmentChange }}',
 '{{ NetworkFunctionGroupName }}',
 '{{ ProposedNetworkFunctionGroupChange }}',
 '{{ Tags }}',
 '{{ VpnConnectionArn }}',
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
  - name: site_to_site_vpn_attachment
    props:
      - name: CoreNetworkId
        value: '{{ CoreNetworkId }}'
      - name: ProposedSegmentChange
        value:
          Tags:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
          AttachmentPolicyRuleNumber: '{{ AttachmentPolicyRuleNumber }}'
          SegmentName: '{{ SegmentName }}'
      - name: NetworkFunctionGroupName
        value: '{{ NetworkFunctionGroupName }}'
      - name: ProposedNetworkFunctionGroupChange
        value:
          Tags:
            - null
          AttachmentPolicyRuleNumber: '{{ AttachmentPolicyRuleNumber }}'
          NetworkFunctionGroupName: '{{ NetworkFunctionGroupName }}'
      - name: Tags
        value:
          - null
      - name: VpnConnectionArn
        value: '{{ VpnConnectionArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>site_to_site_vpn_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkmanager.site_to_site_vpn_attachments
SET PatchDocument = string('{{ {
    "ProposedSegmentChange": proposed_segment_change,
    "NetworkFunctionGroupName": network_function_group_name,
    "ProposedNetworkFunctionGroupChange": proposed_network_function_group_change,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AttachmentId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.site_to_site_vpn_attachments
WHERE Identifier = '<AttachmentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>site_to_site_vpn_attachments</code> resource, the following permissions are required:

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
networkmanager:GetSiteToSiteVpnAttachment,
networkmanager:CreateSiteToSiteVpnAttachment,
ec2:DescribeRegions,
networkmanager:TagResource
```

</TabItem>
<TabItem value="read">

```json
networkmanager:GetSiteToSiteVpnAttachment
```

</TabItem>
<TabItem value="update">

```json
networkmanager:GetSiteToSiteVpnAttachment,
networkmanager:ListTagsForResource,
networkmanager:TagResource,
networkmanager:UntagResource,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="delete">

```json
networkmanager:GetSiteToSiteVpnAttachment,
networkmanager:DeleteAttachment,
ec2:DescribeRegions
```

</TabItem>
<TabItem value="list">

```json
networkmanager:ListAttachments
```

</TabItem>
</Tabs>