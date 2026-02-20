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
WHERE region = 'us-east-1' AND Identifier = '<JobDefinitionName>';
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
'{{ Type }}',
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
 '{{ ContainerProperties }}',
 '{{ EcsProperties }}',
 '{{ NodeProperties }}',
 '{{ JobDefinitionName }}',
 '{{ SchedulingPriority }}',
 '{{ Parameters }}',
 '{{ PlatformCapabilities }}',
 '{{ PropagateTags }}',
 '{{ RetryStrategy }}',
 '{{ Timeout }}',
 '{{ Type }}',
 '{{ Tags }}',
 '{{ EksProperties }}',
 '{{ ConsumableResourceProperties }}',
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
      - name: ContainerProperties
        value:
          Command:
            - '{{ Command[0] }}'
          Environment:
            - Name: '{{ Name }}'
              Value: '{{ Value }}'
          Image: '{{ Image }}'
          JobRoleArn: '{{ JobRoleArn }}'
          Memory: '{{ Memory }}'
          MountPoints:
            - ContainerPath: '{{ ContainerPath }}'
              ReadOnly: '{{ ReadOnly }}'
              SourceVolume: '{{ SourceVolume }}'
          Privileged: '{{ Privileged }}'
          ReadonlyRootFilesystem: '{{ ReadonlyRootFilesystem }}'
          Ulimits:
            - HardLimit: '{{ HardLimit }}'
              Name: '{{ Name }}'
              SoftLimit: '{{ SoftLimit }}'
          User: '{{ User }}'
          Vcpus: '{{ Vcpus }}'
          Volumes:
            - Host:
                SourcePath: '{{ SourcePath }}'
              EfsVolumeConfiguration:
                FileSystemId: '{{ FileSystemId }}'
                RootDirectory: '{{ RootDirectory }}'
                TransitEncryption: '{{ TransitEncryption }}'
                TransitEncryptionPort: '{{ TransitEncryptionPort }}'
                AuthorizationConfig:
                  AccessPointId: '{{ AccessPointId }}'
                  Iam: '{{ Iam }}'
              Name: '{{ Name }}'
          ResourceRequirements:
            - Type: '{{ Type }}'
              Value: '{{ Value }}'
          LinuxParameters:
            Devices:
              - HostPath: '{{ HostPath }}'
                ContainerPath: '{{ ContainerPath }}'
                Permissions:
                  - '{{ Permissions[0] }}'
            InitProcessEnabled: '{{ InitProcessEnabled }}'
            MaxSwap: '{{ MaxSwap }}'
            Swappiness: '{{ Swappiness }}'
            SharedMemorySize: '{{ SharedMemorySize }}'
            Tmpfs:
              - ContainerPath: '{{ ContainerPath }}'
                Size: '{{ Size }}'
                MountOptions:
                  - '{{ MountOptions[0] }}'
          LogConfiguration:
            LogDriver: '{{ LogDriver }}'
            Options: {}
            SecretOptions:
              - Name: '{{ Name }}'
                ValueFrom: '{{ ValueFrom }}'
          ExecutionRoleArn: '{{ ExecutionRoleArn }}'
          Secrets:
            - null
          NetworkConfiguration:
            AssignPublicIp: '{{ AssignPublicIp }}'
          FargatePlatformConfiguration:
            PlatformVersion: '{{ PlatformVersion }}'
          EphemeralStorage:
            SizeInGiB: '{{ SizeInGiB }}'
          RuntimePlatform:
            OperatingSystemFamily: '{{ OperatingSystemFamily }}'
            CpuArchitecture: '{{ CpuArchitecture }}'
          RepositoryCredentials:
            CredentialsParameter: '{{ CredentialsParameter }}'
          EnableExecuteCommand: '{{ EnableExecuteCommand }}'
      - name: EcsProperties
        value:
          TaskProperties:
            - Containers:
                - Command:
                    - '{{ Command[0] }}'
                  Environment:
                    - null
                  DependsOn:
                    - ContainerName: '{{ ContainerName }}'
                      Condition: '{{ Condition }}'
                  Name: '{{ Name }}'
                  Image: '{{ Image }}'
                  LinuxParameters: null
                  LogConfiguration: null
                  MountPoints:
                    - null
                  Essential: '{{ Essential }}'
                  Privileged: '{{ Privileged }}'
                  ReadonlyRootFilesystem: '{{ ReadonlyRootFilesystem }}'
                  Ulimits:
                    - null
                  User: '{{ User }}'
                  Secrets:
                    - null
                  RepositoryCredentials: null
                  ResourceRequirements:
                    - null
                  FirelensConfiguration:
                    Type: '{{ Type }}'
                    Options: {}
              EphemeralStorage: null
              ExecutionRoleArn: '{{ ExecutionRoleArn }}'
              RuntimePlatform: null
              NetworkConfiguration: null
              Volumes:
                - null
              PidMode: '{{ PidMode }}'
              IpcMode: '{{ IpcMode }}'
              PlatformVersion: '{{ PlatformVersion }}'
              TaskRoleArn: '{{ TaskRoleArn }}'
              EnableExecuteCommand: '{{ EnableExecuteCommand }}'
      - name: NodeProperties
        value:
          NumNodes: '{{ NumNodes }}'
          MainNode: '{{ MainNode }}'
          NodeRangeProperties:
            - TargetNodes: '{{ TargetNodes }}'
              Container:
                Command:
                  - '{{ Command[0] }}'
                Environment:
                  - null
                Image: '{{ Image }}'
                JobRoleArn: '{{ JobRoleArn }}'
                Memory: '{{ Memory }}'
                MountPoints:
                  - null
                Privileged: '{{ Privileged }}'
                ReadonlyRootFilesystem: '{{ ReadonlyRootFilesystem }}'
                Ulimits:
                  - null
                User: '{{ User }}'
                Vcpus: '{{ Vcpus }}'
                Volumes:
                  - null
                InstanceType: '{{ InstanceType }}'
                ResourceRequirements:
                  - null
                LinuxParameters: null
                LogConfiguration: null
                ExecutionRoleArn: '{{ ExecutionRoleArn }}'
                Secrets:
                  - null
                EphemeralStorage: null
                RuntimePlatform: null
                RepositoryCredentials: null
                EnableExecuteCommand: '{{ EnableExecuteCommand }}'
              EcsProperties:
                TaskProperties:
                  - Containers:
                      - null
                    ExecutionRoleArn: '{{ ExecutionRoleArn }}'
                    Volumes:
                      - null
                    PidMode: '{{ PidMode }}'
                    IpcMode: '{{ IpcMode }}'
                    TaskRoleArn: '{{ TaskRoleArn }}'
                    EnableExecuteCommand: '{{ EnableExecuteCommand }}'
              EksProperties:
                PodProperties:
                  ServiceAccountName: '{{ ServiceAccountName }}'
                  HostNetwork: '{{ HostNetwork }}'
                  DnsPolicy: '{{ DnsPolicy }}'
                  InitContainers:
                    - Name: '{{ Name }}'
                      Image: '{{ Image }}'
                      ImagePullPolicy: '{{ ImagePullPolicy }}'
                      Command:
                        - '{{ Command[0] }}'
                      Args:
                        - '{{ Args[0] }}'
                      Env:
                        - Name: '{{ Name }}'
                          Value: '{{ Value }}'
                      Resources:
                        Limits: {}
                        Requests: {}
                      VolumeMounts:
                        - Name: '{{ Name }}'
                          MountPath: '{{ MountPath }}'
                          SubPath: '{{ SubPath }}'
                          ReadOnly: '{{ ReadOnly }}'
                      SecurityContext:
                        RunAsUser: '{{ RunAsUser }}'
                        RunAsGroup: '{{ RunAsGroup }}'
                        Privileged: '{{ Privileged }}'
                        AllowPrivilegeEscalation: '{{ AllowPrivilegeEscalation }}'
                        ReadOnlyRootFilesystem: '{{ ReadOnlyRootFilesystem }}'
                        RunAsNonRoot: '{{ RunAsNonRoot }}'
                  Containers:
                    - null
                  Volumes:
                    - Name: '{{ Name }}'
                      HostPath:
                        Path: '{{ Path }}'
                      EmptyDir:
                        Medium: '{{ Medium }}'
                        SizeLimit: '{{ SizeLimit }}'
                      Secret:
                        SecretName: '{{ SecretName }}'
                        Optional: '{{ Optional }}'
                      PersistentVolumeClaim:
                        ClaimName: '{{ ClaimName }}'
                        ReadOnly: '{{ ReadOnly }}'
                  ImagePullSecrets:
                    - Name: '{{ Name }}'
                  Metadata:
                    Labels: {}
                    Annotations: {}
                    Namespace: '{{ Namespace }}'
                  ShareProcessNamespace: '{{ ShareProcessNamespace }}'
              ConsumableResourceProperties:
                ConsumableResourceList:
                  - ConsumableResource: '{{ ConsumableResource }}'
                    Quantity: '{{ Quantity }}'
              InstanceTypes:
                - '{{ InstanceTypes[0] }}'
      - name: JobDefinitionName
        value: '{{ JobDefinitionName }}'
      - name: SchedulingPriority
        value: '{{ SchedulingPriority }}'
      - name: Parameters
        value: {}
      - name: PlatformCapabilities
        value:
          - '{{ PlatformCapabilities[0] }}'
      - name: PropagateTags
        value: '{{ PropagateTags }}'
      - name: RetryStrategy
        value:
          Attempts: '{{ Attempts }}'
          EvaluateOnExit:
            - OnExitCode: '{{ OnExitCode }}'
              OnStatusReason: '{{ OnStatusReason }}'
              OnReason: '{{ OnReason }}'
              Action: '{{ Action }}'
      - name: Timeout
        value:
          AttemptDurationSeconds: '{{ AttemptDurationSeconds }}'
      - name: Type
        value: '{{ Type }}'
      - name: Tags
        value: {}
      - name: EksProperties
        value: null
      - name: ConsumableResourceProperties
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

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
AND Identifier = '<JobDefinitionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.job_definitions
WHERE Identifier = '<JobDefinitionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>job_definitions</code> resource, the following permissions are required:

### Create
```json
Batch:RegisterJobDefinition,
Batch:TagResource,
Batch:DescribeJobDefinitions,
Iam:PassRole
```

### Read
```json
Batch:DescribeJobDefinitions
```

### Update
```json
Batch:DescribeJobDefinitions,
Batch:RegisterJobDefinition,
Batch:DeregisterJobDefinition,
Batch:TagResource,
Batch:UntagResource,
Iam:PassRole
```

### Delete
```json
Batch:DescribeJobDefinitions,
Batch:DeregisterJobDefinition,
Iam:PassRole
```

### List
```json
Batch:DescribeJobDefinitions
```
