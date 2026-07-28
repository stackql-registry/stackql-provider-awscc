---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - ecs
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ECS::Cluster</code> resource creates an Amazon Elastic Container Service (Amazon ECS) cluster.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.clusters" /></td></tr>
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
    "name": "cluster_settings",
    "type": "array",
    "description": "<details><summary>The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.</summary>Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.<br />For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html\">Monitor Amazon ECS containers using Container Insights with enhanced observability</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "<details><summary>The value to set for the cluster setting. The supported values are <code>enhanced</code>, <code>enabled</code>, and <code>disabled</code>.</summary>To use Container Insights with enhanced observability, set the <code>containerInsights</code> account setting to <code>enhanced</code>.<br />To use Container Insights, set the <code>containerInsights</code> account setting to <code>enabled</code>.<br />If a cluster value is specified, it will override the <code>containerInsights</code> value set with <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html\">PutAccountSetting</a> or <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html\">PutAccountSettingDefault</a>.</details>"
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the cluster setting. The value is <code>containerInsights</code> ."
      }
    ]
  },
  {
    "name": "default_capacity_provider_strategy",
    "type": "array",
    "description": "The default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.",
    "children": [
      {
        "name": "capacity_provider",
        "type": "string",
        "description": "The short name of the capacity provider."
      },
      {
        "name": "weight",
        "type": "integer",
        "description": "<details><summary>The <i>weight</i> value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The <code>weight</code> value is taken into consideration after the <code>base</code> value, if defined, is satisfied.</summary>If no <code>weight</code> value is specified, the default value of <code>0</code> is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of <code>0</code> can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of <code>0</code>, any <code>RunTask</code> or <code>CreateService</code> actions using the capacity provider strategy will fail.<br />Weight value characteristics:<br />+  Weight is considered after the base value is satisfied<br />+  Default value is <code>0</code> if not specified<br />+  Valid range: 0 to 1,000<br />+  At least one capacity provider must have a weight greater than zero<br />+  Capacity providers with weight of <code>0</code> cannot place tasks<br />Task distribution logic:<ul><li>Base satisfaction: The minimum number of tasks specified by the base value are placed on that capacity provider</li><li>Weight distribution: After base requirements are met, additional tasks are distributed according to weight ratios</li></ul>Examples:<br />Equal Distribution: Two capacity providers both with weight <code>1</code> will split tasks evenly after base requirements are met.<br />Weighted Distribution: If capacityProviderA has weight <code>1</code> and capacityProviderB has weight <code>4</code>, then for every 1 task on A, 4 tasks will run on B.</details>"
      },
      {
        "name": "base",
        "type": "integer",
        "description": "<details><summary>The <i>base</i> value designates how many tasks, at a minimum, to run on the specified capacity provider for each service. Only one capacity provider in a capacity provider strategy can have a <i>base</i> defined. If no value is specified, the default value of <code>0</code> is used.</summary>Base value characteristics:<br />+  Only one capacity provider in a strategy can have a base defined<br />+  Default value is <code>0</code> if not specified<br />+  Valid range: 0 to 100,000<br />+  Base requirements are satisfied first before weight distribution</details>"
      }
    ]
  },
  {
    "name": "configuration",
    "type": "object",
    "description": "The execute command and managed storage configuration for the cluster.",
    "children": [
      {
        "name": "managed_storage_configuration",
        "type": "object",
        "description": "The details of the managed storage configuration.",
        "children": [
          {
            "name": "fargate_ephemeral_storage_kms_key_id",
            "type": "string",
            "description": "<details><summary>Specify the KMSlong key ID for Fargate ephemeral storage.</summary>When you specify a <code>fargateEphemeralStorageKmsKeyId</code>, AWS Fargate uses the key to encrypt data at rest in ephemeral storage. For more information about Fargate ephemeral storage encryption, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-storage-encryption.html\">Customer managed keys for Fargate ephemeral storage for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />The key must be a single Region key.</details>"
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "<details><summary>Specify a KMSlong key ID to encrypt Amazon ECS managed storage.</summary>When you specify a <code>kmsKeyId</code>, Amazon ECS uses the key to encrypt data volumes managed by Amazon ECS that are attached to tasks in the cluster. The following data volumes are managed by Amazon ECS: Amazon EBS. For more information about encryption of Amazon EBS volumes attached to Amazon ECS tasks, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html\">Encrypt data stored in Amazon EBS volumes for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.<br />The key must be a single Region key.</details>"
          }
        ]
      },
      {
        "name": "execute_command_configuration",
        "type": "object",
        "description": "The details of the execute command configuration.",
        "children": [
          {
            "name": "logging",
            "type": "string",
            "description": "<details><summary>The log setting to use for redirecting logs for your execute command results. The following log settings are available.</summary>+  <code>NONE</code>: The execute command session is not logged.<br />+  <code>DEFAULT</code>: The <code>awslogs</code> configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no <code>awslogs</code> log driver is configured in the task definition, the output won't be logged.<br />+  <code>OVERRIDE</code>: Specify the logging details as a part of <code>logConfiguration</code>. If the <code>OVERRIDE</code> logging option is specified, the <code>logConfiguration</code> is required.</details>"
          },
          {
            "name": "kms_key_id",
            "type": "string",
            "description": "Specify an KMSlong key ID to encrypt the data between the local client and the container."
          },
          {
            "name": "log_configuration",
            "type": "object",
            "description": "The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When <code>logging=OVERRIDE</code> is specified, a <code>logConfiguration</code> must be provided.",
            "children": [
              {
                "name": "s3_encryption_enabled",
                "type": "boolean",
                "description": "Determines whether to use encryption on the S3 logs. If not specified, encryption is not used."
              },
              {
                "name": "cloud_watch_encryption_enabled",
                "type": "boolean",
                "description": "Determines whether to use encryption on the CloudWatch logs. If not specified, encryption will be off."
              },
              {
                "name": "cloud_watch_log_group_name",
                "type": "string",
                "description": "<details><summary>The name of the CloudWatch log group to send logs to.</summary>The CloudWatch log group must already be created.</details>"
              },
              {
                "name": "s3_key_prefix",
                "type": "string",
                "description": "An optional folder in the S3 bucket to place logs in."
              },
              {
                "name": "s3_bucket_name",
                "type": "string",
                "description": "<details><summary>The name of the S3 bucket to send logs to.</summary>The S3 bucket must already be created.</details>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "service_connect_defaults",
    "type": "object",
    "description": "<details><summary>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</summary>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html\">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</details>",
    "children": [
      {
        "name": "namespace",
        "type": "string",
        "description": "<details><summary>The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace that's used when you create a service and don't specify a Service Connect configuration. The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include greater than (>), less than (<), double quotation marks (\"), or slash (/).</summary>If you enter an existing namespace name or ARN, then that namespace will be used. Any namespace type is supported. The namespace must be in this account and this AWS Region.<br />If you enter a new name, a CMAPlong namespace will be created. Amazon ECS creates a CMAP namespace with the \"API calls\" method of instance discovery only. This instance discovery method is the \"HTTP\" namespace type in the CLIlong. Other types of instance discovery aren't used by Service Connect.<br />If you update the cluster with an empty string <code>\"\"</code> for the namespace name, the cluster configuration for Service Connect is removed. Note that the namespace will remain in CMAP and must be deleted separately.<br />For more information about CMAPlong, see <a href=\"https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html\">Working with Services</a> in the <i>Developer Guide</i>.</details>"
      }
    ]
  },
  {
    "name": "capacity_providers",
    "type": "array",
    "description": "<details><summary>The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html\">CreateService</a> or <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html\">RunTask</a> actions.</summary>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html\">CreateCapacityProvider</a> API operation.<br />To use a FARGATElong capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The FARGATElong capacity providers are available to all accounts and only need to be associated with a cluster to be used.<br />The <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutCapacityProvider.html\">PutCapacityProvider</a> API operation is used to update the list of available capacity providers for a cluster after the cluster is created.</details>"
  },
  {
    "name": "cluster_name",
    "type": "string",
    "description": "A user-generated string that you use to identify your cluster. If you don't specify a name, CFNlong generates a unique physical ID for the name."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.</summary>The following basic restrictions apply to tags:<br />+  Maximum number of tags per resource - 50<br />+  For each resource, each tag key must be unique, and each tag key can have only one value.<br />+  Maximum key length - 128 Unicode characters in UTF-8<br />+  Maximum value length - 256 Unicode characters in UTF-8<br />+  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.<br />+  Tag keys and values are case-sensitive.<br />+  Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a descriptor within a tag category (key)."
      },
      {
        "name": "key",
        "type": "string",
        "description": "One part of a key-value pair that make up a tag. A <code>key</code> is a general label that acts like a category for more specific tag values."
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
    "name": "cluster_name",
    "type": "string",
    "description": "A user-generated string that you use to identify your cluster. If you don't specify a name, CFNlong generates a unique physical ID for the name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html"><code>AWS::ECS::Cluster</code></a>.

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
    <td><code>clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>clusters</code></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
  region,
  cluster_settings,
  default_capacity_provider_strategy,
  configuration,
  service_connect_defaults,
  capacity_providers,
  cluster_name,
  arn,
  tags
FROM awscc.ecs.clusters
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ cluster_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>clusters</code> in a region.
```sql
SELECT
  region,
  cluster_name
FROM awscc.ecs.clusters_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecs.clusters (
  ClusterSettings,
  DefaultCapacityProviderStrategy,
  Configuration,
  ServiceConnectDefaults,
  CapacityProviders,
  ClusterName,
  Tags,
  region
)
SELECT
  '{{ cluster_settings }}',
  '{{ default_capacity_provider_strategy }}',
  '{{ configuration }}',
  '{{ service_connect_defaults }}',
  '{{ capacity_providers }}',
  '{{ cluster_name }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecs.clusters (
  ClusterSettings,
  DefaultCapacityProviderStrategy,
  Configuration,
  ServiceConnectDefaults,
  CapacityProviders,
  ClusterName,
  Tags,
  region
)
SELECT
  '{{ cluster_settings }}',
  '{{ default_capacity_provider_strategy }}',
  '{{ configuration }}',
  '{{ service_connect_defaults }}',
  '{{ capacity_providers }}',
  '{{ cluster_name }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: cluster
    props:
      - name: cluster_settings
        value:
          - value: '{{ value }}'
            name: '{{ name }}'
      - name: default_capacity_provider_strategy
        value:
          - capacity_provider: '{{ capacity_provider }}'
            weight: '{{ weight }}'
            base: '{{ base }}'
      - name: configuration
        value:
          managed_storage_configuration:
            fargate_ephemeral_storage_kms_key_id: '{{ fargate_ephemeral_storage_kms_key_id }}'
            kms_key_id: '{{ kms_key_id }}'
          execute_command_configuration:
            logging: '{{ logging }}'
            kms_key_id: '{{ kms_key_id }}'
            log_configuration:
              s3_encryption_enabled: '{{ s3_encryption_enabled }}'
              cloud_watch_encryption_enabled: '{{ cloud_watch_encryption_enabled }}'
              cloud_watch_log_group_name: '{{ cloud_watch_log_group_name }}'
              s3_key_prefix: '{{ s3_key_prefix }}'
              s3_bucket_name: '{{ s3_bucket_name }}'
      - name: service_connect_defaults
        value:
          namespace: '{{ namespace }}'
      - name: capacity_providers
        value:
          - '{{ capacity_providers[0] }}'
      - name: cluster_name
        value: '{{ cluster_name }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecs.clusters
SET PatchDocument = string('{{ {
    "ClusterSettings": cluster_settings,
    "DefaultCapacityProviderStrategy": default_capacity_provider_strategy,
    "Configuration": configuration,
    "ServiceConnectDefaults": service_connect_defaults,
    "CapacityProviders": capacity_providers,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ cluster_name }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecs.clusters
WHERE
  Identifier = '{{ cluster_name }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ecs:DescribeClusters,
kms:DescribeKey
```

</TabItem>
<TabItem value="create">

```json
ecs:CreateCluster,
ecs:DescribeClusters,
iam:CreateServiceLinkedRole,
ecs:TagResource,
kms:DescribeKey
```

</TabItem>
<TabItem value="update">

```json
ecs:PutAccountSettingDefault,
ecs:DescribeClusters,
ecs:TagResource,
ecs:UntagResource,
ecs:PutAccountSetting,
ecs:ListTagsForResource,
ecs:UpdateCluster,
ecs:UpdateClusterSettings,
ecs:PutClusterCapacityProviders,
kms:DescribeKey
```

</TabItem>
<TabItem value="list">

```json
ecs:DescribeClusters,
ecs:ListClusters
```

</TabItem>
<TabItem value="delete">

```json
ecs:DeleteCluster,
ecs:DescribeClusters,
kms:DescribeKey
```

</TabItem>
</Tabs>