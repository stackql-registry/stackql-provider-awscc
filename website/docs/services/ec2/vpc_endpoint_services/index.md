---
title: vpc_endpoint_services
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_services
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

Creates, updates, deletes or gets a <code>vpc_endpoint_service</code> resource or lists <code>vpc_endpoint_services</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_endpoint_services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::EC2::VPCEndpointService</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.vpc_endpoint_services" /></td></tr>
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
    "name": "network_load_balancer_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "contributor_insights_enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "payer_responsibility",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "acceptance_required",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "gateway_load_balancer_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to add to the VPC endpoint service.",
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
    "name": "supported_ip_address_types",
    "type": "array",
    "description": "Specify which Ip Address types are supported for VPC endpoint service."
  },
  {
    "name": "supported_regions",
    "type": "array",
    "description": "The Regions from which service consumers can access the service."
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
    "name": "service_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html"><code>AWS::EC2::VPCEndpointService</code></a>.

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
    <td><code>vpc_endpoint_services</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_endpoint_services</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_endpoint_services</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_endpoint_services_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_endpoint_services</code></td>
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

Gets all properties from an individual <code>vpc_endpoint_service</code>.
```sql
SELECT
region,
network_load_balancer_arns,
contributor_insights_enabled,
payer_responsibility,
service_id,
acceptance_required,
gateway_load_balancer_arns,
tags,
supported_ip_address_types,
supported_regions
FROM awscc.ec2.vpc_endpoint_services
WHERE region = 'us-east-1' AND Identifier = '<ServiceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_endpoint_services</code> in a region.
```sql
SELECT
region,
service_id
FROM awscc.ec2.vpc_endpoint_services_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_endpoint_service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.vpc_endpoint_services (
 NetworkLoadBalancerArns,
 ContributorInsightsEnabled,
 PayerResponsibility,
 AcceptanceRequired,
 GatewayLoadBalancerArns,
 Tags,
 SupportedIpAddressTypes,
 SupportedRegions,
 region
)
SELECT 
'{{ NetworkLoadBalancerArns }}',
 '{{ ContributorInsightsEnabled }}',
 '{{ PayerResponsibility }}',
 '{{ AcceptanceRequired }}',
 '{{ GatewayLoadBalancerArns }}',
 '{{ Tags }}',
 '{{ SupportedIpAddressTypes }}',
 '{{ SupportedRegions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.vpc_endpoint_services (
 NetworkLoadBalancerArns,
 ContributorInsightsEnabled,
 PayerResponsibility,
 AcceptanceRequired,
 GatewayLoadBalancerArns,
 Tags,
 SupportedIpAddressTypes,
 SupportedRegions,
 region
)
SELECT 
 '{{ NetworkLoadBalancerArns }}',
 '{{ ContributorInsightsEnabled }}',
 '{{ PayerResponsibility }}',
 '{{ AcceptanceRequired }}',
 '{{ GatewayLoadBalancerArns }}',
 '{{ Tags }}',
 '{{ SupportedIpAddressTypes }}',
 '{{ SupportedRegions }}',
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
  - name: vpc_endpoint_service
    props:
      - name: NetworkLoadBalancerArns
        value:
          - '{{ NetworkLoadBalancerArns[0] }}'
      - name: ContributorInsightsEnabled
        value: '{{ ContributorInsightsEnabled }}'
      - name: PayerResponsibility
        value: '{{ PayerResponsibility }}'
      - name: AcceptanceRequired
        value: '{{ AcceptanceRequired }}'
      - name: GatewayLoadBalancerArns
        value:
          - '{{ GatewayLoadBalancerArns[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SupportedIpAddressTypes
        value:
          - '{{ SupportedIpAddressTypes[0] }}'
      - name: SupportedRegions
        value:
          - '{{ SupportedRegions[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>vpc_endpoint_service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.vpc_endpoint_services
SET PatchDocument = string('{{ {
    "NetworkLoadBalancerArns": network_load_balancer_arns,
    "ContributorInsightsEnabled": contributor_insights_enabled,
    "PayerResponsibility": payer_responsibility,
    "AcceptanceRequired": acceptance_required,
    "GatewayLoadBalancerArns": gateway_load_balancer_arns,
    "Tags": tags,
    "SupportedIpAddressTypes": supported_ip_address_types,
    "SupportedRegions": supported_regions
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ServiceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.vpc_endpoint_services
WHERE Identifier = '<ServiceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_endpoint_services</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ec2:CreateVpcEndpointServiceConfiguration,
ec2:ModifyVpcEndpointServicePayerResponsibility,
cloudwatch:ListManagedInsightRules,
cloudwatch:DeleteInsightRules,
cloudwatch:PutManagedInsightRules,
ec2:DescribeVpcEndpointServiceConfigurations,
vpce:AllowMultiRegion,
ec2:CreateTags
```

</TabItem>
<TabItem value="update">

```json
ec2:ModifyVpcEndpointServiceConfiguration,
ec2:DescribeVpcEndpointServiceConfigurations,
ec2:ModifyVpcEndpointServicePayerResponsibility,
cloudwatch:ListManagedInsightRules,
cloudwatch:DeleteInsightRules,
cloudwatch:PutManagedInsightRules,
ec2:CreateTags,
ec2:DeleteTags,
vpce:AllowMultiRegion
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeVpcEndpointServiceConfigurations,
cloudwatch:ListManagedInsightRules
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteVpcEndpointServiceConfigurations,
ec2:DescribeVpcEndpointServiceConfigurations,
cloudwatch:ListManagedInsightRules,
cloudwatch:DeleteInsightRules,
ec2:DeleteTags,
vpce:AllowMultiRegion
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeVpcEndpointServiceConfigurations,
cloudwatch:ListManagedInsightRules
```

</TabItem>
</Tabs>