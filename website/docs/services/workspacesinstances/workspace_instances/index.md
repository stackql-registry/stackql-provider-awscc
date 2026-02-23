---
title: workspace_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_instances
  - workspacesinstances
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

Creates, updates, deletes or gets a <code>workspace_instance</code> resource or lists <code>workspace_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>workspace_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::WorkspacesInstances::WorkspaceInstance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesinstances.workspace_instances" /></td></tr>
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
    "name": "managed_instance",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "block_device_mappings",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "device_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "ebs",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "volume_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "encrypted",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "kms_key_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "iops",
                "type": "integer",
                "description": ""
              },
              {
                "name": "throughput",
                "type": "integer",
                "description": ""
              },
              {
                "name": "volume_size",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "no_device",
            "type": "string",
            "description": ""
          },
          {
            "name": "virtual_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "capacity_reservation_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "capacity_reservation_preference",
            "type": "string",
            "description": ""
          },
          {
            "name": "capacity_reservation_target",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "capacity_reservation_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "capacity_reservation_resource_group_arn",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "cpu_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "core_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "threads_per_core",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "credit_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "cpu_credits",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "disable_api_stop",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ebs_optimized",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enable_primary_ipv6",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enclave_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "hibernation_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "configured",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "iam_instance_profile",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "image_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_market_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "market_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "spot_options",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_interruption_behavior",
                "type": "string",
                "description": ""
              },
              {
                "name": "max_price",
                "type": "string",
                "description": ""
              },
              {
                "name": "spot_instance_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "valid_until_utc",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "ipv6_address_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "key_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "license_specifications",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "license_configuration_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "maintenance_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "auto_recovery",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "metadata_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "http_endpoint",
            "type": "string",
            "description": ""
          },
          {
            "name": "http_protocol_ipv6",
            "type": "string",
            "description": ""
          },
          {
            "name": "http_put_response_hop_limit",
            "type": "integer",
            "description": ""
          },
          {
            "name": "http_tokens",
            "type": "string",
            "description": ""
          },
          {
            "name": "instance_metadata_tags",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "monitoring",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "network_interfaces",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "description",
            "type": "string",
            "description": ""
          },
          {
            "name": "device_index",
            "type": "integer",
            "description": ""
          },
          {
            "name": "groups",
            "type": "array",
            "description": ""
          },
          {
            "name": "subnet_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "network_performance_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bandwidth_weighting",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "placement",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "availability_zone",
            "type": "string",
            "description": ""
          },
          {
            "name": "group_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "group_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "partition_number",
            "type": "integer",
            "description": ""
          },
          {
            "name": "tenancy",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "private_dns_name_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "hostname_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "enable_resource_name_dns_arecord",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "enable_resource_name_dns_aa_aa_record",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "subnet_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "tag_specifications",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "resource_type",
            "type": "string",
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
                "description": ""
              },
              {
                "name": "value",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "user_data",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "workspace_instance_id",
    "type": "string",
    "description": "Unique identifier for the workspace instance"
  },
  {
    "name": "provision_state",
    "type": "string",
    "description": "The current state of the workspace instance"
  },
  {
    "name": "e_c2_managed_instance",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "instance_id",
        "type": "string",
        "description": ""
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
    "name": "workspace_instance_id",
    "type": "string",
    "description": "Unique identifier for the workspace instance"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-workspaceinstance.html"><code>AWS::WorkspacesInstances::WorkspaceInstance</code></a>.

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
    <td><code>workspace_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>workspace_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>workspace_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>workspace_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>workspace_instances</code></td>
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

Gets all properties from an individual <code>workspace_instance</code>.
```sql
SELECT
region,
managed_instance,
tags,
workspace_instance_id,
provision_state,
e_c2_managed_instance
FROM awscc.workspacesinstances.workspace_instances
WHERE region = 'us-east-1' AND Identifier = '{{ workspace_instance_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>workspace_instances</code> in a region.
```sql
SELECT
region,
workspace_instance_id
FROM awscc.workspacesinstances.workspace_instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>workspace_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesinstances.workspace_instances (
 ,
 region
)
SELECT
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesinstances.workspace_instances (
 ManagedInstance,
 Tags,
 region
)
SELECT
 '{{ managed_instance }}',
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
  - name: workspace_instance
    props:
      - name: managed_instance
        value:
          block_device_mappings:
            - device_name: '{{ device_name }}'
              ebs:
                volume_type: '{{ volume_type }}'
                encrypted: '{{ encrypted }}'
                kms_key_id: '{{ kms_key_id }}'
                iops: '{{ iops }}'
                throughput: '{{ throughput }}'
                volume_size: '{{ volume_size }}'
              no_device: '{{ no_device }}'
              virtual_name: '{{ virtual_name }}'
          capacity_reservation_specification:
            capacity_reservation_preference: '{{ capacity_reservation_preference }}'
            capacity_reservation_target:
              capacity_reservation_id: '{{ capacity_reservation_id }}'
              capacity_reservation_resource_group_arn: '{{ capacity_reservation_resource_group_arn }}'
          cpu_options:
            core_count: '{{ core_count }}'
            threads_per_core: '{{ threads_per_core }}'
          credit_specification:
            cpu_credits: '{{ cpu_credits }}'
          disable_api_stop: '{{ disable_api_stop }}'
          ebs_optimized: '{{ ebs_optimized }}'
          enable_primary_ipv6: '{{ enable_primary_ipv6 }}'
          enclave_options:
            enabled: '{{ enabled }}'
          hibernation_options:
            configured: '{{ configured }}'
          iam_instance_profile:
            arn: '{{ arn }}'
            name: '{{ name }}'
          image_id: '{{ image_id }}'
          instance_market_options:
            market_type: '{{ market_type }}'
            spot_options:
              instance_interruption_behavior: '{{ instance_interruption_behavior }}'
              max_price: '{{ max_price }}'
              spot_instance_type: '{{ spot_instance_type }}'
              valid_until_utc: '{{ valid_until_utc }}'
          instance_type: '{{ instance_type }}'
          ipv6_address_count: '{{ ipv6_address_count }}'
          key_name: '{{ key_name }}'
          license_specifications:
            - license_configuration_arn: '{{ license_configuration_arn }}'
          maintenance_options:
            auto_recovery: '{{ auto_recovery }}'
          metadata_options:
            http_endpoint: '{{ http_endpoint }}'
            http_protocol_ipv6: '{{ http_protocol_ipv6 }}'
            http_put_response_hop_limit: '{{ http_put_response_hop_limit }}'
            http_tokens: '{{ http_tokens }}'
            instance_metadata_tags: '{{ instance_metadata_tags }}'
          monitoring:
            enabled: '{{ enabled }}'
          network_interfaces:
            - description: '{{ description }}'
              device_index: '{{ device_index }}'
              groups:
                - '{{ groups[0] }}'
              subnet_id: '{{ subnet_id }}'
          network_performance_options:
            bandwidth_weighting: '{{ bandwidth_weighting }}'
          placement:
            availability_zone: '{{ availability_zone }}'
            group_id: '{{ group_id }}'
            group_name: '{{ group_name }}'
            partition_number: '{{ partition_number }}'
            tenancy: '{{ tenancy }}'
          private_dns_name_options:
            hostname_type: '{{ hostname_type }}'
            enable_resource_name_dns_arecord: '{{ enable_resource_name_dns_arecord }}'
            enable_resource_name_dns_aa_aa_record: '{{ enable_resource_name_dns_aa_aa_record }}'
          subnet_id: '{{ subnet_id }}'
          tag_specifications:
            - resource_type: '{{ resource_type }}'
              tags:
                - key: '{{ key }}'
                  value: '{{ value }}'
          user_data: '{{ user_data }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>workspace_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.workspacesinstances.workspace_instances
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ workspace_instance_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesinstances.workspace_instances
WHERE Identifier = '{{ workspace_instance_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>workspace_instances</code> resource, the following permissions are required:

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
workspaces-instances:CreateWorkspaceInstance,
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:TagResource,
ec2:RunInstances,
ec2:DescribeInstances,
ec2:DescribeInstanceStatus,
ec2:CreateTags,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
workspaces-instances:GetWorkspaceInstance,
workspaces-instances:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
workspaces-instances:TagResource,
workspaces-instances:UntagResource,
workspaces-instances:ListTagsForResource,
workspaces-instances:GetWorkspaceInstance
```

</TabItem>
<TabItem value="delete">

```json
workspaces-instances:DeleteWorkspaceInstance,
workspaces-instances:GetWorkspaceInstance,
ec2:TerminateInstances,
ec2:DescribeInstances,
ec2:DescribeInstanceStatus
```

</TabItem>
<TabItem value="list">

```json
workspaces-instances:ListWorkspaceInstances
```

</TabItem>
</Tabs>