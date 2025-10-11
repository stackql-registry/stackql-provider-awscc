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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="container_properties" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="ecs_properties" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="node_properties" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="job_definition_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="job_definition_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="scheduling_priority" /></td><td><code>integer</code></td><td></td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="platform_capabilities" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="propagate_tags" /></td><td><code>boolean</code></td><td></td></tr>
<tr><td><CopyableCode code="retry_strategy" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="timeout" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td>A key-value pair to associate with a resource.</td></tr>
<tr><td><CopyableCode code="eks_properties" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="consumable_resource_properties" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html"><code>AWS::Batch::JobDefinition</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Gets all <code>job_definitions</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<JobDefinitionName>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.job_definitions
WHERE data__Identifier = '<JobDefinitionName>'
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
