---
title: network_insights_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_analyses
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

Creates, updates, deletes or gets a <code>network_insights_analysis</code> resource or lists <code>network_insights_analyses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_insights_analyses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EC2::NetworkInsightsAnalysis</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_insights_analyses" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "return_path_components",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "additional_details",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "service_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "additional_detail_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "load_balancers",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "id",
                "type": "string",
                "description": ""
              },
              {
                "name": "arn",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "inbound_header",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "destination_port_ranges",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "from_port",
                "type": "integer",
                "description": "The first port in the range."
              },
              {
                "name": "to_port",
                "type": "integer",
                "description": "The last port in the range."
              }
            ]
          },
          {
            "name": "source_port_ranges",
            "type": "array",
            "description": ""
          },
          {
            "name": "destination_addresses",
            "type": "array",
            "description": ""
          },
          {
            "name": "protocol",
            "type": "string",
            "description": ""
          },
          {
            "name": "source_addresses",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "vpc",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": ""
          },
          {
            "name": "arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "security_group_rule",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "port_range",
            "type": "object",
            "description": "The IP port range.",
            "children": [
              {
                "name": "from_port",
                "type": "integer",
                "description": "The first port in the range."
              },
              {
                "name": "to_port",
                "type": "integer",
                "description": "The last port in the range."
              }
            ]
          },
          {
            "name": "cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix_list_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "security_group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "protocol",
            "type": "string",
            "description": ""
          },
          {
            "name": "direction",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "explanations",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "packet_field",
            "type": "string",
            "description": ""
          },
          {
            "name": "protocols",
            "type": "array",
            "description": ""
          },
          {
            "name": "classic_load_balancer_listener",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_port",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "address",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "addresses",
            "type": "array",
            "description": ""
          },
          {
            "name": "explanation_code",
            "type": "string",
            "description": ""
          },
          {
            "name": "transit_gateway_route_table_route",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "prefix_list_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "resource_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "state",
                "type": "string",
                "description": ""
              },
              {
                "name": "resource_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "route_origin",
                "type": "string",
                "description": ""
              },
              {
                "name": "destination_cidr",
                "type": "string",
                "description": ""
              },
              {
                "name": "attachment_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "component_region",
            "type": "string",
            "description": ""
          },
          {
            "name": "state",
            "type": "string",
            "description": ""
          },
          {
            "name": "cidrs",
            "type": "array",
            "description": ""
          },
          {
            "name": "security_groups",
            "type": "array",
            "description": ""
          },
          {
            "name": "component_account",
            "type": "string",
            "description": ""
          },
          {
            "name": "direction",
            "type": "string",
            "description": ""
          },
          {
            "name": "load_balancer_target",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "availability_zone",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "load_balancer_target_groups",
            "type": "array",
            "description": ""
          },
          {
            "name": "missing_component",
            "type": "string",
            "description": ""
          },
          {
            "name": "route_table_route",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "origin",
                "type": "string",
                "description": ""
              },
              {
                "name": "destination_prefix_list_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "destination_cidr",
                "type": "string",
                "description": ""
              },
              {
                "name": "network_interface_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "transit_gateway_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "vpc_peering_connection_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "instance_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "state",
                "type": "string",
                "description": ""
              },
              {
                "name": "egress_only_internet_gateway_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "nat_gateway_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "gateway_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "availability_zones",
            "type": "array",
            "description": ""
          },
          {
            "name": "port_ranges",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "from_port",
                "type": "integer",
                "description": "The first port in the range."
              },
              {
                "name": "to_port",
                "type": "integer",
                "description": "The last port in the range."
              }
            ]
          },
          {
            "name": "load_balancer_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "acl_rule",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "cidr",
                "type": "string",
                "description": ""
              },
              {
                "name": "rule_action",
                "type": "string",
                "description": ""
              },
              {
                "name": "egress",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "rule_number",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "service_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "sequence_number",
        "type": "integer",
        "description": ""
      },
      {
        "name": "acl_rule",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "port_range",
            "type": "object",
            "description": "The IP port range.",
            "children": [
              {
                "name": "from_port",
                "type": "integer",
                "description": "The first port in the range."
              },
              {
                "name": "to_port",
                "type": "integer",
                "description": "The last port in the range."
              }
            ]
          },
          {
            "name": "cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "rule_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "egress",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "rule_number",
            "type": "integer",
            "description": ""
          },
          {
            "name": "protocol",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "transit_gateway_route_table_route",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "prefix_list_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "resource_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "state",
            "type": "string",
            "description": ""
          },
          {
            "name": "resource_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "route_origin",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "attachment_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "route_table_route",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "origin",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_prefix_list_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "network_interface_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "transit_gateway_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "vpc_peering_connection_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "state",
            "type": "string",
            "description": ""
          },
          {
            "name": "egress_only_internet_gateway_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "nat_gateway_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "gateway_id",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "network_insights_analysis_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "filter_out_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "network_insights_path_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_path_found",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "suggested_accounts",
    "type": "array",
    "description": ""
  },
  {
    "name": "filter_in_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "network_insights_analysis_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "start_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "alternate_path_hints",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "component_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "component_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "explanations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "vpn_gateway",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": ""
          },
          {
            "name": "arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "packet_field",
        "type": "string",
        "description": ""
      },
      {
        "name": "protocols",
        "type": "array",
        "description": ""
      },
      {
        "name": "classic_load_balancer_listener",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "instance_port",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "address",
        "type": "string",
        "description": ""
      },
      {
        "name": "port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "addresses",
        "type": "array",
        "description": ""
      },
      {
        "name": "explanation_code",
        "type": "string",
        "description": ""
      },
      {
        "name": "transit_gateway_route_table_route",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "prefix_list_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "resource_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "state",
            "type": "string",
            "description": ""
          },
          {
            "name": "resource_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "route_origin",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "attachment_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "component_region",
        "type": "string",
        "description": ""
      },
      {
        "name": "state",
        "type": "string",
        "description": ""
      },
      {
        "name": "cidrs",
        "type": "array",
        "description": ""
      },
      {
        "name": "security_groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "component_account",
        "type": "string",
        "description": ""
      },
      {
        "name": "direction",
        "type": "string",
        "description": ""
      },
      {
        "name": "load_balancer_target",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "availability_zone",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "load_balancer_target_groups",
        "type": "array",
        "description": ""
      },
      {
        "name": "missing_component",
        "type": "string",
        "description": ""
      },
      {
        "name": "route_table_route",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "origin",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_prefix_list_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination_cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "network_interface_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "transit_gateway_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "vpc_peering_connection_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "state",
            "type": "string",
            "description": ""
          },
          {
            "name": "egress_only_internet_gateway_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "nat_gateway_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "gateway_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "availability_zones",
        "type": "array",
        "description": ""
      },
      {
        "name": "port_ranges",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "from_port",
            "type": "integer",
            "description": "The first port in the range."
          },
          {
            "name": "to_port",
            "type": "integer",
            "description": "The last port in the range."
          }
        ]
      },
      {
        "name": "security_group_rule",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "prefix_list_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "security_group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "direction",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "acl_rule",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cidr",
            "type": "string",
            "description": ""
          },
          {
            "name": "rule_action",
            "type": "string",
            "description": ""
          },
          {
            "name": "egress",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "rule_number",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "forward_path_components",
    "type": "array",
    "description": ""
  },
  {
    "name": "additional_accounts",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "network_insights_analysis_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html"><code>AWS::EC2::NetworkInsightsAnalysis</code></a>.

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
    <td><code>network_insights_analyses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="NetworkInsightsPathId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_insights_analyses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_insights_analyses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_insights_analyses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_insights_analyses</code></td>
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

Gets all properties from an individual <code>network_insights_analysis</code>.
```sql
SELECT
region,
status,
return_path_components,
network_insights_analysis_id,
filter_out_arns,
network_insights_path_id,
network_path_found,
suggested_accounts,
filter_in_arns,
network_insights_analysis_arn,
status_message,
start_date,
alternate_path_hints,
explanations,
forward_path_components,
additional_accounts,
tags
FROM awscc.ec2.network_insights_analyses
WHERE region = 'us-east-1' AND Identifier = '<NetworkInsightsAnalysisId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_insights_analyses</code> in a region.
```sql
SELECT
region,
network_insights_analysis_id
FROM awscc.ec2.network_insights_analyses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_insights_analysis</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_insights_analyses (
 NetworkInsightsPathId,
 region
)
SELECT 
'{{ NetworkInsightsPathId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.network_insights_analyses (
 FilterOutArns,
 NetworkInsightsPathId,
 FilterInArns,
 AdditionalAccounts,
 Tags,
 region
)
SELECT 
 '{{ FilterOutArns }}',
 '{{ NetworkInsightsPathId }}',
 '{{ FilterInArns }}',
 '{{ AdditionalAccounts }}',
 '{{ Tags }}',
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
  - name: network_insights_analysis
    props:
      - name: FilterOutArns
        value:
          - '{{ FilterOutArns[0] }}'
      - name: NetworkInsightsPathId
        value: '{{ NetworkInsightsPathId }}'
      - name: FilterInArns
        value:
          - null
      - name: AdditionalAccounts
        value:
          - '{{ AdditionalAccounts[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.network_insights_analyses
SET PatchDocument = string('{{ {
    "AdditionalAccounts": additional_accounts,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<NetworkInsightsAnalysisId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_insights_analyses
WHERE Identifier = '<NetworkInsightsAnalysisId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_insights_analyses</code> resource, the following permissions are required:

### Read
```json
ec2:Describe*
```

### Create
```json
ec2:CreateTags,
ec2:StartNetworkInsightsAnalysis,
ec2:GetTransitGatewayRouteTablePropagations,
ec2:SearchTransitGatewayRoutes,
ec2:Describe*,
ec2:GetManagedPrefixListEntries,
elasticloadbalancing:Describe*,
directconnect:Describe*,
tiros:CreateQuery,
tiros:GetQueryAnswer,
tiros:GetQueryExplanation
```

### Update
```json
ec2:CreateTags,
ec2:Describe*,
ec2:DeleteTags
```

### List
```json
ec2:Describe*
```

### Delete
```json
ec2:DeleteNetworkInsightsAnalysis,
ec2:DeleteTags
```
