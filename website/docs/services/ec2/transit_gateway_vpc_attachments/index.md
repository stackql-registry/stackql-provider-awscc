---
title: transit_gateway_vpc_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_vpc_attachments
  - ec2
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

Creates, updates, deletes or gets a <code>transit_gateway_vpc_attachment</code> resource or lists <code>transit_gateway_vpc_attachments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_vpc_attachments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::TransitGatewayVpcAttachment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_vpc_attachments" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "add_subnet_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "remove_subnet_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "options",
    "type": "object",
    "description": "The options for the transit gateway vpc attachment.",
    "children": [
      {
        "name": "dns_support",
        "type": "string",
        "description": "Indicates whether to enable DNS Support for Vpc Attachment. Valid Values: enable &#124; disable"
      },
      {
        "name": "ipv6_support",
        "type": "string",
        "description": "Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable &#124; disable"
      },
      {
        "name": "appliance_mode_support",
        "type": "string",
        "description": "Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable &#124; disable"
      },
      {
        "name": "security_group_referencing_support",
        "type": "string",
        "description": "Indicates whether to enable Security Group referencing support for Vpc Attachment. Valid values: enable &#124; disable"
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayvpcattachment.html"><code>AWS::EC2::TransitGatewayVpcAttachment</code></a>.

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
    <td><code>transit_gateway_vpc_attachments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubnetIds, VpcId, TransitGatewayId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_vpc_attachments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateway_vpc_attachments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_vpc_attachments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_vpc_attachments</code></td>
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

Gets all properties from an individual <code>transit_gateway_vpc_attachment</code>.
```sql
SELECT
region,
id,
transit_gateway_id,
vpc_id,
subnet_ids,
add_subnet_ids,
remove_subnet_ids,
tags,
options
FROM awscc.ec2.transit_gateway_vpc_attachments
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_vpc_attachments</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ec2.transit_gateway_vpc_attachments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_vpc_attachment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_vpc_attachments (
 TransitGatewayId,
 VpcId,
 SubnetIds,
 region
)
SELECT 
'{{ TransitGatewayId }}',
 '{{ VpcId }}',
 '{{ SubnetIds }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_vpc_attachments (
 TransitGatewayId,
 VpcId,
 SubnetIds,
 AddSubnetIds,
 RemoveSubnetIds,
 Tags,
 Options,
 region
)
SELECT 
 '{{ TransitGatewayId }}',
 '{{ VpcId }}',
 '{{ SubnetIds }}',
 '{{ AddSubnetIds }}',
 '{{ RemoveSubnetIds }}',
 '{{ Tags }}',
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
  - name: transit_gateway_vpc_attachment
    props:
      - name: TransitGatewayId
        value: '{{ TransitGatewayId }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: AddSubnetIds
        value:
          - '{{ AddSubnetIds[0] }}'
      - name: RemoveSubnetIds
        value:
          - '{{ RemoveSubnetIds[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Options
        value:
          DnsSupport: '{{ DnsSupport }}'
          Ipv6Support: '{{ Ipv6Support }}'
          ApplianceModeSupport: '{{ ApplianceModeSupport }}'
          SecurityGroupReferencingSupport: '{{ SecurityGroupReferencingSupport }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.transit_gateway_vpc_attachments
SET PatchDocument = string('{{ {
    "AddSubnetIds": add_subnet_ids,
    "RemoveSubnetIds": remove_subnet_ids,
    "Tags": tags,
    "Options": options
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_vpc_attachments
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_vpc_attachments</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeTransitGatewayVpcAttachments,
ec2:CreateTransitGatewayVpcAttachment,
ec2:CreateTags,
ec2:DescribeTags
```

### Read
```json
ec2:DescribeTransitGatewayVpcAttachments,
ec2:DescribeTags
```

### Delete
```json
ec2:DescribeTransitGatewayVpcAttachments,
ec2:DeleteTransitGatewayVpcAttachment,
ec2:DeleteTags,
ec2:DescribeTags
```

### List
```json
ec2:DescribeTransitGatewayVpcAttachments,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeTransitGatewayVpcAttachments,
ec2:DescribeTags,
ec2:CreateTransitGatewayVpcAttachment,
ec2:CreateTags,
ec2:DeleteTransitGatewayVpcAttachment,
ec2:DeleteTags,
ec2:ModifyTransitGatewayVpcAttachment
```
