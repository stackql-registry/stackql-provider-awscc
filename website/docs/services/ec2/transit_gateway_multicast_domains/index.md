---
title: transit_gateway_multicast_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_domains
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

Creates, updates, deletes or gets a <code>transit_gateway_multicast_domain</code> resource or lists <code>transit_gateway_multicast_domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transit_gateway_multicast_domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::TransitGatewayMulticastDomain type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.transit_gateway_multicast_domains" /></td></tr>
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
    "name": "transit_gateway_multicast_domain_id",
    "type": "string",
    "description": "The ID of the transit gateway multicast domain."
  },
  {
    "name": "transit_gateway_multicast_domain_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the transit gateway multicast domain."
  },
  {
    "name": "transit_gateway_id",
    "type": "string",
    "description": "The ID of the transit gateway."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the transit gateway multicast domain."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The time the transit gateway multicast domain was created."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the transit gateway multicast domain.",
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
    "description": "The options for the transit gateway multicast domain.",
    "children": [
      {
        "name": "auto_accept_shared_associations",
        "type": "string",
        "description": "Indicates whether to automatically cross-account subnet associations that are associated with the transit gateway multicast domain. Valid Values: enable &#124; disable"
      },
      {
        "name": "igmpv2_support",
        "type": "string",
        "description": "Indicates whether Internet Group Management Protocol (IGMP) version 2 is turned on for the transit gateway multicast domain. Valid Values: enable &#124; disable"
      },
      {
        "name": "static_sources_support",
        "type": "string",
        "description": "Indicates whether support for statically configuring transit gateway multicast group sources is turned on. Valid Values: enable &#124; disable"
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
    "name": "transit_gateway_multicast_domain_id",
    "type": "string",
    "description": "The ID of the transit gateway multicast domain."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html"><code>AWS::EC2::TransitGatewayMulticastDomain</code></a>.

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
    <td><code>transit_gateway_multicast_domains</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TransitGatewayId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transit_gateway_multicast_domains</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transit_gateway_multicast_domains</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transit_gateway_multicast_domains_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transit_gateway_multicast_domains</code></td>
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

Gets all properties from an individual <code>transit_gateway_multicast_domain</code>.
```sql
SELECT
region,
transit_gateway_multicast_domain_id,
transit_gateway_multicast_domain_arn,
transit_gateway_id,
state,
creation_time,
tags,
options
FROM awscc.ec2.transit_gateway_multicast_domains
WHERE region = 'us-east-1' AND data__Identifier = '<TransitGatewayMulticastDomainId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>transit_gateway_multicast_domains</code> in a region.
```sql
SELECT
region,
transit_gateway_multicast_domain_id
FROM awscc.ec2.transit_gateway_multicast_domains_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transit_gateway_multicast_domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.transit_gateway_multicast_domains (
 TransitGatewayId,
 region
)
SELECT 
'{{ TransitGatewayId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.transit_gateway_multicast_domains (
 TransitGatewayId,
 Tags,
 Options,
 region
)
SELECT 
 '{{ TransitGatewayId }}',
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
  - name: transit_gateway_multicast_domain
    props:
      - name: TransitGatewayId
        value: '{{ TransitGatewayId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Options
        value:
          AutoAcceptSharedAssociations: '{{ AutoAcceptSharedAssociations }}'
          Igmpv2Support: '{{ Igmpv2Support }}'
          StaticSourcesSupport: '{{ StaticSourcesSupport }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.transit_gateway_multicast_domains
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "Options": options
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TransitGatewayMulticastDomainId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.transit_gateway_multicast_domains
WHERE data__Identifier = '<TransitGatewayMulticastDomainId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transit_gateway_multicast_domains</code> resource, the following permissions are required:

### Create
```json
ec2:DescribeTransitGatewayMulticastDomains,
ec2:CreateTransitGatewayMulticastDomain,
ec2:CreateTags,
ec2:DescribeTags
```

### Read
```json
ec2:DescribeTransitGatewayMulticastDomains,
ec2:DescribeTags
```

### Update
```json
ec2:DescribeTransitGatewayMulticastDomains,
ec2:DeleteTags,
ec2:CreateTags,
ec2:DescribeTags
```

### Delete
```json
ec2:DescribeTransitGatewayMulticastDomains,
ec2:DeleteTransitGatewayMulticastDomain,
ec2:DeleteTags,
ec2:DescribeTags
```

### List
```json
ec2:DescribeTransitGatewayMulticastDomains,
ec2:DescribeTags
```
