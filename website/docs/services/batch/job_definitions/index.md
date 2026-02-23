---
title: job_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - job_definitions
  - batch
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

Creates, updates, deletes or gets a <code>job_definition</code> resource or lists <code>job_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>job_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Batch::JobDefinition</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.batch.job_definitions" /></td></tr>
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
    "name": "container_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "command",
        "type": "array",
        "description": ""
      },
      {
        "name": "environment",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
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
        "name": "image",
        "type": "string",
        "description": ""
      },
      {
        "name": "job_role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "memory",
        "type": "integer",
        "description": ""
      },
      {
        "name": "mount_points",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "container_path",
            "type": "string",
            "description": ""
          },
          {
            "name": "read_only",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "source_volume",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "privileged",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "readonly_root_filesystem",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ulimits",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "hard_limit",
            "type": "integer",
            "description": ""
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "soft_limit",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "user",
        "type": "string",
        "description": ""
      },
      {
        "name": "vcpus",
        "type": "integer",
        "description": ""
      },
      {
        "name": "volumes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "host",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "source_path",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "efs_volume_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "file_system_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "root_directory",
                "type": "string",
                "description": ""
              },
              {
                "name": "transit_encryption",
                "type": "string",
                "description": ""
              },
              {
                "name": "transit_encryption_port",
                "type": "integer",
                "description": ""
              },
              {
                "name": "authorization_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "resource_requirements",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "type",
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
        "name": "linux_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "devices",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "host_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "container_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "permissions",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "init_process_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "max_swap",
            "type": "integer",
            "description": ""
          },
          {
            "name": "swappiness",
            "type": "integer",
            "description": ""
          },
          {
            "name": "shared_memory_size",
            "type": "integer",
            "description": ""
          },
          {
            "name": "tmpfs",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "container_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "size",
                "type": "integer",
                "description": ""
              },
              {
                "name": "mount_options",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "log_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "log_driver",
            "type": "string",
            "description": ""
          },
          {
            "name": "options",
            "type": "object",
            "description": ""
          },
          {
            "name": "secret_options",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "value_from",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "execution_role_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "secrets",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "value_from",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "network_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "assign_public_ip",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "fargate_platform_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "platform_version",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ephemeral_storage",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "size_in_gi_b",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "runtime_platform",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "operating_system_family",
            "type": "string",
            "description": ""
          },
          {
            "name": "cpu_architecture",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "repository_credentials",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "credentials_parameter",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "enable_execute_command",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "ecs_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "task_properties",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "containers",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "command",
                "type": "array",
                "description": ""
              },
              {
                "name": "environment",
                "type": "array",
                "description": ""
              },
              {
                "name": "depends_on",
                "type": "array",
                "description": ""
              },
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "image",
                "type": "string",
                "description": ""
              },
              {
                "name": "linux_parameters",
                "type": "object",
                "description": ""
              },
              {
                "name": "log_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "mount_points",
                "type": "array",
                "description": ""
              },
              {
                "name": "essential",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "privileged",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "readonly_root_filesystem",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "ulimits",
                "type": "array",
                "description": ""
              },
              {
                "name": "user",
                "type": "string",
                "description": ""
              },
              {
                "name": "secrets",
                "type": "array",
                "description": ""
              },
              {
                "name": "repository_credentials",
                "type": "object",
                "description": ""
              },
              {
                "name": "resource_requirements",
                "type": "array",
                "description": ""
              },
              {
                "name": "firelens_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "ephemeral_storage",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "size_in_gi_b",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "execution_role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "runtime_platform",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "operating_system_family",
                "type": "string",
                "description": ""
              },
              {
                "name": "cpu_architecture",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "network_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "assign_public_ip",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "volumes",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "host",
                "type": "object",
                "description": ""
              },
              {
                "name": "efs_volume_configuration",
                "type": "object",
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
            "name": "pid_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "ipc_mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "platform_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "task_role_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "enable_execute_command",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "node_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "num_nodes",
        "type": "integer",
        "description": ""
      },
      {
        "name": "main_node",
        "type": "integer",
        "description": ""
      },
      {
        "name": "node_range_properties",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "target_nodes",
            "type": "string",
            "description": ""
          },
          {
            "name": "container",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "command",
                "type": "array",
                "description": ""
              },
              {
                "name": "environment",
                "type": "array",
                "description": ""
              },
              {
                "name": "image",
                "type": "string",
                "description": ""
              },
              {
                "name": "job_role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "memory",
                "type": "integer",
                "description": ""
              },
              {
                "name": "mount_points",
                "type": "array",
                "description": ""
              },
              {
                "name": "privileged",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "readonly_root_filesystem",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "ulimits",
                "type": "array",
                "description": ""
              },
              {
                "name": "user",
                "type": "string",
                "description": ""
              },
              {
                "name": "vcpus",
                "type": "integer",
                "description": ""
              },
              {
                "name": "volumes",
                "type": "array",
                "description": ""
              },
              {
                "name": "instance_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "resource_requirements",
                "type": "array",
                "description": ""
              },
              {
                "name": "linux_parameters",
                "type": "object",
                "description": ""
              },
              {
                "name": "log_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "execution_role_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "secrets",
                "type": "array",
                "description": ""
              },
              {
                "name": "ephemeral_storage",
                "type": "object",
                "description": ""
              },
              {
                "name": "runtime_platform",
                "type": "object",
                "description": ""
              },
              {
                "name": "repository_credentials",
                "type": "object",
                "description": ""
              },
              {
                "name": "enable_execute_command",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "ecs_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "task_properties",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "eks_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "pod_properties",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "consumable_resource_properties",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "consumable_resource_list",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "instance_types",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "job_definition_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "job_definition_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "scheduling_priority",
    "type": "integer",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "object",
    "description": ""
  },
  {
    "name": "platform_capabilities",
    "type": "array",
    "description": ""
  },
  {
    "name": "propagate_tags",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "retry_strategy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attempts",
        "type": "integer",
        "description": ""
      },
      {
        "name": "evaluate_on_exit",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "on_exit_code",
            "type": "string",
            "description": ""
          },
          {
            "name": "on_status_reason",
            "type": "string",
            "description": ""
          },
          {
            "name": "on_reason",
            "type": "string",
            "description": ""
          },
          {
            "name": "action",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "timeout",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attempt_duration_seconds",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "eks_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "pod_properties",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "service_account_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "host_network",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "dns_policy",
            "type": "string",
            "description": ""
          },
          {
            "name": "init_containers",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "image",
                "type": "string",
                "description": ""
              },
              {
                "name": "image_pull_policy",
                "type": "string",
                "description": ""
              },
              {
                "name": "command",
                "type": "array",
                "description": ""
              },
              {
                "name": "args",
                "type": "array",
                "description": ""
              },
              {
                "name": "env",
                "type": "array",
                "description": ""
              },
              {
                "name": "resources",
                "type": "object",
                "description": ""
              },
              {
                "name": "volume_mounts",
                "type": "array",
                "description": ""
              },
              {
                "name": "security_context",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "containers",
            "type": "array",
            "description": ""
          },
          {
            "name": "volumes",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "host_path",
                "type": "object",
                "description": ""
              },
              {
                "name": "empty_dir",
                "type": "object",
                "description": ""
              },
              {
                "name": "secret",
                "type": "object",
                "description": ""
              },
              {
                "name": "persistent_volume_claim",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "image_pull_secrets",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "metadata",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "labels",
                "type": "object",
                "description": ""
              },
              {
                "name": "annotations",
                "type": "object",
                "description": ""
              },
              {
                "name": "namespace",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "share_process_namespace",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "consumable_resource_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "consumable_resource_list",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "consumable_resource",
            "type": "string",
            "description": "The ARN of the consumable resource the job definition should consume."
          },
          {
            "name": "quantity",
            "type": "integer",
            "description": ""
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
    "name": "job_definition_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html"><code>AWS::Batch::JobDefinition</code></a>.

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
    <td><code>job_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>job_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>job_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>job_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>job_definitions</code></td>
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

Gets all properties from an individual <code>job_definition</code>.
```sql
SELECT
region,
container_properties,
ecs_properties,
node_properties,
job_definition_name,
job_definition_arn,
scheduling_priority,
parameters,
platform_capabilities,
propagate_tags,
retry_strategy,
timeout,
type,
tags,
eks_properties,
consumable_resource_properties
FROM awscc.batch.job_definitions
WHERE region = 'us-east-1' AND Identifier = '{{ job_definition_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>job_definitions</code> in a region.
```sql
SELECT
region,
job_definition_name
FROM awscc.batch.job_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>job_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.batch.job_definitions (
 Type,
 region
)
SELECT
'{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.batch.job_definitions (
 ContainerProperties,
 EcsProperties,
 NodeProperties,
 JobDefinitionName,
 SchedulingPriority,
 Parameters,
 PlatformCapabilities,
 PropagateTags,
 RetryStrategy,
 Timeout,
 Type,
 Tags,
 EksProperties,
 ConsumableResourceProperties,
 region
)
SELECT
 '{{ container_properties }}',
 '{{ ecs_properties }}',
 '{{ node_properties }}',
 '{{ job_definition_name }}',
 '{{ scheduling_priority }}',
 '{{ parameters }}',
 '{{ platform_capabilities }}',
 '{{ propagate_tags }}',
 '{{ retry_strategy }}',
 '{{ timeout }}',
 '{{ type }}',
 '{{ tags }}',
 '{{ eks_properties }}',
 '{{ consumable_resource_properties }}',
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
  - name: job_definition
    props:
      - name: container_properties
        value:
          command:
            - '{{ command[0] }}'
          environment:
            - name: '{{ name }}'
              value: '{{ value }}'
          image: '{{ image }}'
          job_role_arn: '{{ job_role_arn }}'
          memory: '{{ memory }}'
          mount_points:
            - container_path: '{{ container_path }}'
              read_only: '{{ read_only }}'
              source_volume: '{{ source_volume }}'
          privileged: '{{ privileged }}'
          readonly_root_filesystem: '{{ readonly_root_filesystem }}'
          ulimits:
            - hard_limit: '{{ hard_limit }}'
              name: '{{ name }}'
              soft_limit: '{{ soft_limit }}'
          user: '{{ user }}'
          vcpus: '{{ vcpus }}'
          volumes:
            - host:
                source_path: '{{ source_path }}'
              efs_volume_configuration:
                file_system_id: '{{ file_system_id }}'
                root_directory: '{{ root_directory }}'
                transit_encryption: '{{ transit_encryption }}'
                transit_encryption_port: '{{ transit_encryption_port }}'
                authorization_config:
                  access_point_id: '{{ access_point_id }}'
                  iam: '{{ iam }}'
              name: '{{ name }}'
          resource_requirements:
            - type: '{{ type }}'
              value: '{{ value }}'
          linux_parameters:
            devices:
              - host_path: '{{ host_path }}'
                container_path: '{{ container_path }}'
                permissions:
                  - '{{ permissions[0] }}'
            init_process_enabled: '{{ init_process_enabled }}'
            max_swap: '{{ max_swap }}'
            swappiness: '{{ swappiness }}'
            shared_memory_size: '{{ shared_memory_size }}'
            tmpfs:
              - container_path: '{{ container_path }}'
                size: '{{ size }}'
                mount_options:
                  - '{{ mount_options[0] }}'
          log_configuration:
            log_driver: '{{ log_driver }}'
            options: {}
            secret_options:
              - name: '{{ name }}'
                value_from: '{{ value_from }}'
          execution_role_arn: '{{ execution_role_arn }}'
          secrets:
            - null
          network_configuration:
            assign_public_ip: '{{ assign_public_ip }}'
          fargate_platform_configuration:
            platform_version: '{{ platform_version }}'
          ephemeral_storage:
            size_in_gi_b: '{{ size_in_gi_b }}'
          runtime_platform:
            operating_system_family: '{{ operating_system_family }}'
            cpu_architecture: '{{ cpu_architecture }}'
          repository_credentials:
            credentials_parameter: '{{ credentials_parameter }}'
          enable_execute_command: '{{ enable_execute_command }}'
      - name: ecs_properties
        value:
          task_properties:
            - containers:
                - command:
                    - '{{ command[0] }}'
                  environment:
                    - null
                  depends_on:
                    - container_name: '{{ container_name }}'
                      condition: '{{ condition }}'
                  name: '{{ name }}'
                  image: '{{ image }}'
                  linux_parameters: null
                  log_configuration: null
                  mount_points:
                    - null
                  essential: '{{ essential }}'
                  privileged: '{{ privileged }}'
                  readonly_root_filesystem: '{{ readonly_root_filesystem }}'
                  ulimits:
                    - null
                  user: '{{ user }}'
                  secrets:
                    - null
                  repository_credentials: null
                  resource_requirements:
                    - null
                  firelens_configuration:
                    type: '{{ type }}'
                    options: {}
              ephemeral_storage: null
              execution_role_arn: '{{ execution_role_arn }}'
              runtime_platform: null
              network_configuration: null
              volumes:
                - null
              pid_mode: '{{ pid_mode }}'
              ipc_mode: '{{ ipc_mode }}'
              platform_version: '{{ platform_version }}'
              task_role_arn: '{{ task_role_arn }}'
              enable_execute_command: '{{ enable_execute_command }}'
      - name: node_properties
        value:
          num_nodes: '{{ num_nodes }}'
          main_node: '{{ main_node }}'
          node_range_properties:
            - target_nodes: '{{ target_nodes }}'
              container:
                command:
                  - '{{ command[0] }}'
                environment:
                  - null
                image: '{{ image }}'
                job_role_arn: '{{ job_role_arn }}'
                memory: '{{ memory }}'
                mount_points:
                  - null
                privileged: '{{ privileged }}'
                readonly_root_filesystem: '{{ readonly_root_filesystem }}'
                ulimits:
                  - null
                user: '{{ user }}'
                vcpus: '{{ vcpus }}'
                volumes:
                  - null
                instance_type: '{{ instance_type }}'
                resource_requirements:
                  - null
                linux_parameters: null
                log_configuration: null
                execution_role_arn: '{{ execution_role_arn }}'
                secrets:
                  - null
                ephemeral_storage: null
                runtime_platform: null
                repository_credentials: null
                enable_execute_command: '{{ enable_execute_command }}'
              ecs_properties:
                task_properties:
                  - containers:
                      - null
                    execution_role_arn: '{{ execution_role_arn }}'
                    volumes:
                      - null
                    pid_mode: '{{ pid_mode }}'
                    ipc_mode: '{{ ipc_mode }}'
                    task_role_arn: '{{ task_role_arn }}'
                    enable_execute_command: '{{ enable_execute_command }}'
              eks_properties:
                pod_properties:
                  service_account_name: '{{ service_account_name }}'
                  host_network: '{{ host_network }}'
                  dns_policy: '{{ dns_policy }}'
                  init_containers:
                    - name: '{{ name }}'
                      image: '{{ image }}'
                      image_pull_policy: '{{ image_pull_policy }}'
                      command:
                        - '{{ command[0] }}'
                      args:
                        - '{{ args[0] }}'
                      env:
                        - name: '{{ name }}'
                          value: '{{ value }}'
                      resources:
                        limits: {}
                        requests: {}
                      volume_mounts:
                        - name: '{{ name }}'
                          mount_path: '{{ mount_path }}'
                          sub_path: '{{ sub_path }}'
                          read_only: '{{ read_only }}'
                      security_context:
                        run_as_user: '{{ run_as_user }}'
                        run_as_group: '{{ run_as_group }}'
                        privileged: '{{ privileged }}'
                        allow_privilege_escalation: '{{ allow_privilege_escalation }}'
                        read_only_root_filesystem: '{{ read_only_root_filesystem }}'
                        run_as_non_root: '{{ run_as_non_root }}'
                  containers:
                    - null
                  volumes:
                    - name: '{{ name }}'
                      host_path:
                        path: '{{ path }}'
                      empty_dir:
                        medium: '{{ medium }}'
                        size_limit: '{{ size_limit }}'
                      secret:
                        secret_name: '{{ secret_name }}'
                        optional: '{{ optional }}'
                      persistent_volume_claim:
                        claim_name: '{{ claim_name }}'
                        read_only: '{{ read_only }}'
                  image_pull_secrets:
                    - name: '{{ name }}'
                  metadata:
                    labels: {}
                    annotations: {}
                    namespace: '{{ namespace }}'
                  share_process_namespace: '{{ share_process_namespace }}'
              consumable_resource_properties:
                consumable_resource_list:
                  - consumable_resource: '{{ consumable_resource }}'
                    quantity: '{{ quantity }}'
              instance_types:
                - '{{ instance_types[0] }}'
      - name: job_definition_name
        value: '{{ job_definition_name }}'
      - name: scheduling_priority
        value: '{{ scheduling_priority }}'
      - name: parameters
        value: {}
      - name: platform_capabilities
        value:
          - '{{ platform_capabilities[0] }}'
      - name: propagate_tags
        value: '{{ propagate_tags }}'
      - name: retry_strategy
        value:
          attempts: '{{ attempts }}'
          evaluate_on_exit:
            - on_exit_code: '{{ on_exit_code }}'
              on_status_reason: '{{ on_status_reason }}'
              on_reason: '{{ on_reason }}'
              action: '{{ action }}'
      - name: timeout
        value:
          attempt_duration_seconds: '{{ attempt_duration_seconds }}'
      - name: type
        value: '{{ type }}'
      - name: tags
        value: {}
      - name: eks_properties
        value: null
      - name: consumable_resource_properties
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>job_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.batch.job_definitions
SET PatchDocument = string('{{ {
    "ContainerProperties": container_properties,
    "EcsProperties": ecs_properties,
    "NodeProperties": node_properties,
    "SchedulingPriority": scheduling_priority,
    "Parameters": parameters,
    "PlatformCapabilities": platform_capabilities,
    "PropagateTags": propagate_tags,
    "RetryStrategy": retry_strategy,
    "Timeout": timeout,
    "Type": type,
    "Tags": tags,
    "EksProperties": eks_properties,
    "ConsumableResourceProperties": consumable_resource_properties
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ job_definition_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.job_definitions
WHERE Identifier = '{{ job_definition_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>job_definitions</code> resource, the following permissions are required:

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
Batch:RegisterJobDefinition,
Batch:TagResource,
Batch:DescribeJobDefinitions,
Iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
Batch:DescribeJobDefinitions
```

</TabItem>
<TabItem value="update">

```json
Batch:DescribeJobDefinitions,
Batch:RegisterJobDefinition,
Batch:DeregisterJobDefinition,
Batch:TagResource,
Batch:UntagResource,
Iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
Batch:DescribeJobDefinitions,
Batch:DeregisterJobDefinition,
Iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
Batch:DescribeJobDefinitions
```

</TabItem>
</Tabs>