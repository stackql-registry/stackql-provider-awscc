---
title: container_group_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - container_group_definitions
  - gamelift
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

Creates, updates, deletes or gets a <code>container_group_definition</code> resource or lists <code>container_group_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>container_group_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::ContainerGroupDefinition resource creates an Amazon GameLift container group definition.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.container_group_definitions" /></td></tr>
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
    "name": "container_group_definition_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container group resource and uniquely identifies it across all AWS Regions."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\")."
  },
  {
    "name": "operating_system",
    "type": "string",
    "description": "The operating system of the container group"
  },
  {
    "name": "name",
    "type": "string",
    "description": "A descriptive label for the container group definition."
  },
  {
    "name": "container_group_type",
    "type": "string",
    "description": "The scope of the container group"
  },
  {
    "name": "total_memory_limit_mebibytes",
    "type": "integer",
    "description": "The total memory limit of container groups following this definition in MiB"
  },
  {
    "name": "total_vcpu_limit",
    "type": "number",
    "description": "The total amount of virtual CPUs on the container group definition"
  },
  {
    "name": "game_server_container_definition",
    "type": "object",
    "description": "Specifies the information required to run game servers with this container group",
    "children": [
      {
        "name": "container_name",
        "type": "string",
        "description": "A descriptive label for the container definition. Container definition names must be unique with a container group definition."
      },
      {
        "name": "depends_on",
        "type": "array",
        "description": "A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.",
        "children": [
          {
            "name": "container_name",
            "type": "string",
            "description": "A descriptive label for the container definition. The container being defined depends on this container's condition."
          },
          {
            "name": "condition",
            "type": "string",
            "description": "The type of dependency."
          }
        ]
      },
      {
        "name": "server_sdk_version",
        "type": "string",
        "description": "The version of the server SDK used in this container group"
      },
      {
        "name": "image_uri",
        "type": "string",
        "description": "Specifies the image URI of this container."
      },
      {
        "name": "resolved_image_digest",
        "type": "string",
        "description": "The digest of the container image."
      },
      {
        "name": "environment_override",
        "type": "array",
        "description": "The environment variables to pass to a container.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The environment variable name."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The environment variable value."
          }
        ]
      },
      {
        "name": "port_configuration",
        "type": "object",
        "description": "Defines the ports on the container.",
        "children": [
          {
            "name": "container_port_ranges",
            "type": "array",
            "description": "Specifies one or more ranges of ports on a container.",
            "children": [
              {
                "name": "from_port",
                "type": "integer",
                "description": "A starting value for the range of allowed port numbers."
              },
              {
                "name": "protocol",
                "type": "string",
                "description": "Defines the protocol of these ports."
              },
              {
                "name": "to_port",
                "type": "integer",
                "description": "An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than FromPort."
              }
            ]
          }
        ]
      },
      {
        "name": "mount_points",
        "type": "array",
        "description": "A list of mount point configurations to be used in a container.",
        "children": [
          {
            "name": "instance_path",
            "type": "string",
            "description": "The path on the host that will be mounted in the container."
          },
          {
            "name": "container_path",
            "type": "string",
            "description": "The path inside the container where the mount is accessible."
          },
          {
            "name": "access_level",
            "type": "string",
            "description": "The access permissions for the mounted path."
          }
        ]
      }
    ]
  },
  {
    "name": "support_container_definitions",
    "type": "array",
    "description": "A collection of support container definitions that define the containers in this group.",
    "children": [
      {
        "name": "container_name",
        "type": "string",
        "description": "A descriptive label for the container definition."
      },
      {
        "name": "vcpu",
        "type": "number",
        "description": "The number of virtual CPUs to give to the support group"
      },
      {
        "name": "depends_on",
        "type": "array",
        "description": "A list of container dependencies that determines when this container starts up and shuts down. For container groups with multiple containers, dependencies let you define a startup/shutdown sequence across the containers.",
        "children": [
          {
            "name": "container_name",
            "type": "string",
            "description": "A descriptive label for the container definition. The container being defined depends on this container's condition."
          },
          {
            "name": "condition",
            "type": "string",
            "description": "The type of dependency."
          }
        ]
      },
      {
        "name": "essential",
        "type": "boolean",
        "description": "Specifies if the container is essential. If an essential container fails a health check, then all containers in the container group will be restarted. You must specify exactly 1 essential container in a container group."
      },
      {
        "name": "image_uri",
        "type": "string",
        "description": "Specifies the image URI of this container."
      },
      {
        "name": "resolved_image_digest",
        "type": "string",
        "description": "The digest of the container image."
      },
      {
        "name": "memory_hard_limit_mebibytes",
        "type": "integer",
        "description": "The total memory limit of container groups following this definition in MiB"
      },
      {
        "name": "environment_override",
        "type": "array",
        "description": "The environment variables to pass to a container.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The environment variable name."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The environment variable value."
          }
        ]
      },
      {
        "name": "port_configuration",
        "type": "object",
        "description": "Defines the ports on the container.",
        "children": [
          {
            "name": "container_port_ranges",
            "type": "array",
            "description": "Specifies one or more ranges of ports on a container.",
            "children": [
              {
                "name": "from_port",
                "type": "integer",
                "description": "A starting value for the range of allowed port numbers."
              },
              {
                "name": "protocol",
                "type": "string",
                "description": "Defines the protocol of these ports."
              },
              {
                "name": "to_port",
                "type": "integer",
                "description": "An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than FromPort."
              }
            ]
          }
        ]
      },
      {
        "name": "health_check",
        "type": "object",
        "description": "Specifies how the health of the containers will be checked.",
        "children": [
          {
            "name": "command",
            "type": "array",
            "description": "A string array representing the command that the container runs to determine if it is healthy."
          },
          {
            "name": "interval",
            "type": "integer",
            "description": "How often (in seconds) the health is checked."
          },
          {
            "name": "timeout",
            "type": "integer",
            "description": "How many seconds the process manager allows the command to run before canceling it."
          },
          {
            "name": "retries",
            "type": "integer",
            "description": "How many times the process manager will retry the command after a timeout. (The first run of the command does not count as a retry.)"
          },
          {
            "name": "start_period",
            "type": "integer",
            "description": "The optional grace period (in seconds) to give a container time to boostrap before teh health check is declared failed."
          }
        ]
      },
      {
        "name": "mount_points",
        "type": "array",
        "description": "A list of mount point configurations to be used in a container.",
        "children": [
          {
            "name": "instance_path",
            "type": "string",
            "description": "The path on the host that will be mounted in the container."
          },
          {
            "name": "container_path",
            "type": "string",
            "description": "The path inside the container where the mount is accessible."
          },
          {
            "name": "access_level",
            "type": "string",
            "description": "The access permissions for the mounted path."
          }
        ]
      }
    ]
  },
  {
    "name": "version_number",
    "type": "integer",
    "description": "The version of this ContainerGroupDefinition"
  },
  {
    "name": "source_version_number",
    "type": "integer",
    "description": "A specific ContainerGroupDefinition version to be updated"
  },
  {
    "name": "version_description",
    "type": "string",
    "description": "The description of this version"
  },
  {
    "name": "status",
    "type": "string",
    "description": "A string indicating ContainerGroupDefinition status."
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": "A string indicating the reason for ContainerGroupDefinition status."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length."
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
    "name": "name",
    "type": "string",
    "description": "A descriptive label for the container group definition."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html"><code>AWS::GameLift::ContainerGroupDefinition</code></a>.

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
    <td><code>container_group_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, OperatingSystem, TotalMemoryLimitMebibytes, TotalVcpuLimit, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>container_group_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>container_group_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>container_group_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>container_group_definitions</code></td>
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

Gets all properties from an individual <code>container_group_definition</code>.
```sql
SELECT
region,
container_group_definition_arn,
creation_time,
operating_system,
name,
container_group_type,
total_memory_limit_mebibytes,
total_vcpu_limit,
game_server_container_definition,
support_container_definitions,
version_number,
source_version_number,
version_description,
status,
status_reason,
tags
FROM awscc.gamelift.container_group_definitions
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>container_group_definitions</code> in a region.
```sql
SELECT
region,
name
FROM awscc.gamelift.container_group_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>container_group_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.container_group_definitions (
 OperatingSystem,
 Name,
 TotalMemoryLimitMebibytes,
 TotalVcpuLimit,
 region
)
SELECT 
'{{ OperatingSystem }}',
 '{{ Name }}',
 '{{ TotalMemoryLimitMebibytes }}',
 '{{ TotalVcpuLimit }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.container_group_definitions (
 OperatingSystem,
 Name,
 ContainerGroupType,
 TotalMemoryLimitMebibytes,
 TotalVcpuLimit,
 GameServerContainerDefinition,
 SupportContainerDefinitions,
 SourceVersionNumber,
 VersionDescription,
 Tags,
 region
)
SELECT 
 '{{ OperatingSystem }}',
 '{{ Name }}',
 '{{ ContainerGroupType }}',
 '{{ TotalMemoryLimitMebibytes }}',
 '{{ TotalVcpuLimit }}',
 '{{ GameServerContainerDefinition }}',
 '{{ SupportContainerDefinitions }}',
 '{{ SourceVersionNumber }}',
 '{{ VersionDescription }}',
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
  - name: container_group_definition
    props:
      - name: OperatingSystem
        value: '{{ OperatingSystem }}'
      - name: Name
        value: '{{ Name }}'
      - name: ContainerGroupType
        value: '{{ ContainerGroupType }}'
      - name: TotalMemoryLimitMebibytes
        value: '{{ TotalMemoryLimitMebibytes }}'
      - name: TotalVcpuLimit
        value: null
      - name: GameServerContainerDefinition
        value:
          ContainerName: '{{ ContainerName }}'
          DependsOn:
            - ContainerName: '{{ ContainerName }}'
              Condition: '{{ Condition }}'
          ServerSdkVersion: '{{ ServerSdkVersion }}'
          ImageUri: '{{ ImageUri }}'
          ResolvedImageDigest: '{{ ResolvedImageDigest }}'
          EnvironmentOverride:
            - Name: '{{ Name }}'
              Value: '{{ Value }}'
          PortConfiguration:
            ContainerPortRanges:
              - FromPort: '{{ FromPort }}'
                Protocol: '{{ Protocol }}'
                ToPort: '{{ ToPort }}'
          MountPoints:
            - InstancePath: '{{ InstancePath }}'
              ContainerPath: '{{ ContainerPath }}'
              AccessLevel: '{{ AccessLevel }}'
      - name: SupportContainerDefinitions
        value:
          - ContainerName: '{{ ContainerName }}'
            Vcpu: null
            DependsOn:
              - null
            Essential: '{{ Essential }}'
            ImageUri: '{{ ImageUri }}'
            ResolvedImageDigest: '{{ ResolvedImageDigest }}'
            MemoryHardLimitMebibytes: '{{ MemoryHardLimitMebibytes }}'
            EnvironmentOverride:
              - null
            PortConfiguration: null
            HealthCheck:
              Command:
                - '{{ Command[0] }}'
              Interval: '{{ Interval }}'
              Timeout: '{{ Timeout }}'
              Retries: '{{ Retries }}'
              StartPeriod: '{{ StartPeriod }}'
            MountPoints:
              - null
      - name: SourceVersionNumber
        value: '{{ SourceVersionNumber }}'
      - name: VersionDescription
        value: '{{ VersionDescription }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>container_group_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.gamelift.container_group_definitions
SET PatchDocument = string('{{ {
    "OperatingSystem": operating_system,
    "TotalMemoryLimitMebibytes": total_memory_limit_mebibytes,
    "TotalVcpuLimit": total_vcpu_limit,
    "GameServerContainerDefinition": game_server_container_definition,
    "SupportContainerDefinitions": support_container_definitions,
    "SourceVersionNumber": source_version_number,
    "VersionDescription": version_description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.container_group_definitions
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>container_group_definitions</code> resource, the following permissions are required:

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
gamelift:CreateContainerGroupDefinition,
gamelift:DescribeContainerGroupDefinition,
gamelift:ListTagsForResource,
gamelift:TagResource,
ecr:BatchCheckLayerAvailability,
ecr:BatchGetImage,
ecr:GetDownloadUrlForLayer,
ecr:DescribeImages,
ecr:GetAuthorizationToken
```

</TabItem>
<TabItem value="read">

```json
gamelift:DescribeContainerGroupDefinition,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
gamelift:DescribeContainerGroupDefinition,
gamelift:UpdateContainerGroupDefinition,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
gamelift:DeleteContainerGroupDefinition
```

</TabItem>
<TabItem value="list">

```json
gamelift:ListContainerGroupDefinitions
```

</TabItem>
</Tabs>