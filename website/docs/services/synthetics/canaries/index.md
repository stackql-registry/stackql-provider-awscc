---
title: canaries
hide_title: false
hide_table_of_contents: false
keywords:
  - canaries
  - synthetics
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

Creates, updates, deletes or gets a <code>canary</code> resource or lists <code>canaries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>canaries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Synthetics::Canary</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.synthetics.canaries" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the canary."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the canary"
  },
  {
    "name": "state",
    "type": "string",
    "description": "State of the canary"
  },
  {
    "name": "code",
    "type": "object",
    "description": "Provide the canary script source",
    "children": [
      {
        "name": "s3_bucket",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_object_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "script",
        "type": "string",
        "description": ""
      },
      {
        "name": "handler",
        "type": "string",
        "description": ""
      },
      {
        "name": "source_location_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "dependencies",
        "type": "array",
        "description": "List of Lambda layers to attach to the canary",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "Type of dependency"
          },
          {
            "name": "reference",
            "type": "string",
            "description": "ARN of the Lambda layer"
          }
        ]
      }
    ]
  },
  {
    "name": "artifact_s3_location",
    "type": "string",
    "description": "Provide the s3 bucket output location for test results"
  },
  {
    "name": "artifact_config",
    "type": "object",
    "description": "Provide artifact configuration",
    "children": [
      {
        "name": "s3_encryption",
        "type": "object",
        "description": "Encryption configuration for uploading artifacts to S3",
        "children": [
          {
            "name": "encryption_mode",
            "type": "string",
            "description": "Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE&#95;S3 and SSE&#95;KMS."
          },
          {
            "name": "kms_key_arn",
            "type": "string",
            "description": "KMS key Arn for encrypting artifacts when uploading to S3. You must specify KMS key Arn for SSE&#95;KMS encryption mode only."
          }
        ]
      }
    ]
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "Frequency to run your canaries",
    "children": [
      {
        "name": "expression",
        "type": "string",
        "description": ""
      },
      {
        "name": "duration_in_seconds",
        "type": "string",
        "description": ""
      },
      {
        "name": "retry_config",
        "type": "object",
        "description": "Provide canary auto retry configuration",
        "children": [
          {
            "name": "max_retries",
            "type": "integer",
            "description": "maximum times the canary will be retried upon the scheduled run failure"
          }
        ]
      }
    ]
  },
  {
    "name": "execution_role_arn",
    "type": "string",
    "description": "Lambda Execution role used to run your canaries"
  },
  {
    "name": "runtime_version",
    "type": "string",
    "description": "Runtime version of Synthetics Library"
  },
  {
    "name": "success_retention_period",
    "type": "integer",
    "description": "Retention period of successful canary runs represented in number of days"
  },
  {
    "name": "failure_retention_period",
    "type": "integer",
    "description": "Retention period of failed canary runs represented in number of days"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "vpc_config",
    "type": "object",
    "description": "Provide VPC Configuration if enabled.",
    "children": [
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
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "ipv6_allowed_for_dual_stack",
        "type": "boolean",
        "description": "Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true"
      }
    ]
  },
  {
    "name": "run_config",
    "type": "object",
    "description": "Provide canary run configuration",
    "children": [
      {
        "name": "timeout_in_seconds",
        "type": "integer",
        "description": "Provide maximum canary timeout per run in seconds"
      },
      {
        "name": "memory_in_mb",
        "type": "integer",
        "description": "Provide maximum memory available for canary in MB"
      },
      {
        "name": "ephemeral_storage",
        "type": "integer",
        "description": "Provide ephemeralStorage available for canary in MB"
      },
      {
        "name": "active_tracing",
        "type": "boolean",
        "description": "Enable active tracing if set to true"
      },
      {
        "name": "environment_variables",
        "type": "object",
        "description": "Environment variable key-value pairs."
      }
    ]
  },
  {
    "name": "start_canary_after_creation",
    "type": "boolean",
    "description": "Runs canary if set to True. Default is False"
  },
  {
    "name": "visual_reference",
    "type": "object",
    "description": "Visual reference configuration for visual testing",
    "children": [
      {
        "name": "base_canary_run_id",
        "type": "string",
        "description": "Canary run id to be used as base reference for visual testing"
      },
      {
        "name": "base_screenshots",
        "type": "array",
        "description": "List of screenshots used as base reference for visual testing",
        "children": [
          {
            "name": "screenshot_name",
            "type": "string",
            "description": "Name of the screenshot to be used as base reference for visual testing"
          },
          {
            "name": "ignore_coordinates",
            "type": "array",
            "description": "List of coordinates of rectangles to be ignored during visual testing"
          }
        ]
      },
      {
        "name": "browser_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "delete_lambda_resources_on_canary_deletion",
    "type": "boolean",
    "description": "Deletes associated lambda resources created by Synthetics if set to True. Default is False"
  },
  {
    "name": "resources_to_replicate_tags",
    "type": "array",
    "description": "List of resources which canary tags should be replicated to."
  },
  {
    "name": "provisioned_resource_cleanup",
    "type": "string",
    "description": "Setting to control if provisioned resources created by Synthetics are deleted alongside the canary. Default is AUTOMATIC."
  },
  {
    "name": "dry_run_and_update",
    "type": "boolean",
    "description": "Setting to control if UpdateCanary will perform a DryRun and validate it is PASSING before performing the Update. Default is FALSE."
  },
  {
    "name": "browser_configs",
    "type": "array",
    "description": "List of browser configurations for the canary",
    "children": [
      {
        "name": "browser_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "visual_references",
    "type": "array",
    "description": "List of visual references for the canary"
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
    "description": "Name of the canary."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html"><code>AWS::Synthetics::Canary</code></a>.

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
    <td><code>canaries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Code, ArtifactS3Location, ExecutionRoleArn, Schedule, RuntimeVersion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>canaries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>canaries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>canaries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>canaries</code></td>
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

Gets all properties from an individual <code>canary</code>.
```sql
SELECT
region,
name,
id,
state,
code,
artifact_s3_location,
artifact_config,
schedule,
execution_role_arn,
runtime_version,
success_retention_period,
failure_retention_period,
tags,
vpc_config,
run_config,
start_canary_after_creation,
visual_reference,
delete_lambda_resources_on_canary_deletion,
resources_to_replicate_tags,
provisioned_resource_cleanup,
dry_run_and_update,
browser_configs,
visual_references
FROM awscc.synthetics.canaries
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>canaries</code> in a region.
```sql
SELECT
region,
name
FROM awscc.synthetics.canaries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>canary</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.synthetics.canaries (
 Name,
 Code,
 ArtifactS3Location,
 Schedule,
 ExecutionRoleArn,
 RuntimeVersion,
 region
)
SELECT
'{{ name }}',
 '{{ code }}',
 '{{ artifact_s3_location }}',
 '{{ schedule }}',
 '{{ execution_role_arn }}',
 '{{ runtime_version }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.synthetics.canaries (
 Name,
 Code,
 ArtifactS3Location,
 ArtifactConfig,
 Schedule,
 ExecutionRoleArn,
 RuntimeVersion,
 SuccessRetentionPeriod,
 FailureRetentionPeriod,
 Tags,
 VPCConfig,
 RunConfig,
 StartCanaryAfterCreation,
 VisualReference,
 DeleteLambdaResourcesOnCanaryDeletion,
 ResourcesToReplicateTags,
 ProvisionedResourceCleanup,
 DryRunAndUpdate,
 BrowserConfigs,
 VisualReferences,
 region
)
SELECT
 '{{ name }}',
 '{{ code }}',
 '{{ artifact_s3_location }}',
 '{{ artifact_config }}',
 '{{ schedule }}',
 '{{ execution_role_arn }}',
 '{{ runtime_version }}',
 '{{ success_retention_period }}',
 '{{ failure_retention_period }}',
 '{{ tags }}',
 '{{ vpc_config }}',
 '{{ run_config }}',
 '{{ start_canary_after_creation }}',
 '{{ visual_reference }}',
 '{{ delete_lambda_resources_on_canary_deletion }}',
 '{{ resources_to_replicate_tags }}',
 '{{ provisioned_resource_cleanup }}',
 '{{ dry_run_and_update }}',
 '{{ browser_configs }}',
 '{{ visual_references }}',
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
  - name: canary
    props:
      - name: name
        value: '{{ name }}'
      - name: code
        value:
          s3_bucket: '{{ s3_bucket }}'
          s3_key: '{{ s3_key }}'
          s3_object_version: '{{ s3_object_version }}'
          script: '{{ script }}'
          handler: '{{ handler }}'
          source_location_arn: '{{ source_location_arn }}'
          dependencies:
            - type: '{{ type }}'
              reference: '{{ reference }}'
      - name: artifact_s3_location
        value: '{{ artifact_s3_location }}'
      - name: artifact_config
        value:
          s3_encryption:
            encryption_mode: '{{ encryption_mode }}'
            kms_key_arn: '{{ kms_key_arn }}'
      - name: schedule
        value:
          expression: '{{ expression }}'
          duration_in_seconds: '{{ duration_in_seconds }}'
          retry_config:
            max_retries: '{{ max_retries }}'
      - name: execution_role_arn
        value: '{{ execution_role_arn }}'
      - name: runtime_version
        value: '{{ runtime_version }}'
      - name: success_retention_period
        value: '{{ success_retention_period }}'
      - name: failure_retention_period
        value: '{{ failure_retention_period }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: vpc_config
        value:
          vpc_id: '{{ vpc_id }}'
          subnet_ids:
            - '{{ subnet_ids[0] }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          ipv6_allowed_for_dual_stack: '{{ ipv6_allowed_for_dual_stack }}'
      - name: run_config
        value:
          timeout_in_seconds: '{{ timeout_in_seconds }}'
          memory_in_mb: '{{ memory_in_mb }}'
          ephemeral_storage: '{{ ephemeral_storage }}'
          active_tracing: '{{ active_tracing }}'
          environment_variables: {}
      - name: start_canary_after_creation
        value: '{{ start_canary_after_creation }}'
      - name: visual_reference
        value:
          base_canary_run_id: '{{ base_canary_run_id }}'
          base_screenshots:
            - screenshot_name: '{{ screenshot_name }}'
              ignore_coordinates:
                - '{{ ignore_coordinates[0] }}'
          browser_type: '{{ browser_type }}'
      - name: delete_lambda_resources_on_canary_deletion
        value: '{{ delete_lambda_resources_on_canary_deletion }}'
      - name: resources_to_replicate_tags
        value:
          - '{{ resources_to_replicate_tags[0] }}'
      - name: provisioned_resource_cleanup
        value: '{{ provisioned_resource_cleanup }}'
      - name: dry_run_and_update
        value: '{{ dry_run_and_update }}'
      - name: browser_configs
        value:
          - browser_type: null
      - name: visual_references
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>canary</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.synthetics.canaries
SET PatchDocument = string('{{ {
    "ArtifactS3Location": artifact_s3_location,
    "ArtifactConfig": artifact_config,
    "Schedule": schedule,
    "ExecutionRoleArn": execution_role_arn,
    "RuntimeVersion": runtime_version,
    "SuccessRetentionPeriod": success_retention_period,
    "FailureRetentionPeriod": failure_retention_period,
    "Tags": tags,
    "VPCConfig": vpc_config,
    "RunConfig": run_config,
    "StartCanaryAfterCreation": start_canary_after_creation,
    "VisualReference": visual_reference,
    "DeleteLambdaResourcesOnCanaryDeletion": delete_lambda_resources_on_canary_deletion,
    "ResourcesToReplicateTags": resources_to_replicate_tags,
    "ProvisionedResourceCleanup": provisioned_resource_cleanup,
    "DryRunAndUpdate": dry_run_and_update,
    "BrowserConfigs": browser_configs,
    "VisualReferences": visual_references
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.synthetics.canaries
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>canaries</code> resource, the following permissions are required:

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
synthetics:CreateCanary,
synthetics:StartCanary,
synthetics:GetCanary,
synthetics:TagResource,
s3:CreateBucket,
s3:GetObject,
s3:GetObjectVersion,
s3:PutBucketEncryption,
s3:PutEncryptionConfiguration,
s3:GetBucketLocation,
lambda:CreateFunction,
lambda:AddPermission,
lambda:PublishVersion,
lambda:UpdateFunctionCode,
lambda:UpdateFunctionConfiguration,
lambda:GetFunctionConfiguration,
lambda:GetLayerVersionByArn,
lambda:GetLayerVersion,
lambda:PublishLayerVersion,
lambda:TagResource,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
synthetics:UpdateCanary,
synthetics:StartCanary,
synthetics:StartCanaryDryRun,
synthetics:StopCanary,
synthetics:GetCanary,
synthetics:GetCanaryRuns,
synthetics:TagResource,
synthetics:UntagResource,
s3:GetObject,
s3:GetObjectVersion,
s3:PutBucketEncryption,
s3:PutEncryptionConfiguration,
s3:GetBucketLocation,
lambda:AddPermission,
lambda:PublishVersion,
lambda:UpdateFunctionCode,
lambda:UpdateFunctionConfiguration,
lambda:GetFunctionConfiguration,
lambda:GetLayerVersionByArn,
lambda:GetLayerVersion,
lambda:PublishLayerVersion,
lambda:ListTags,
lambda:TagResource,
lambda:UntagResource,
iam:PassRole,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups
```

</TabItem>
<TabItem value="read">

```json
synthetics:GetCanary,
synthetics:DescribeCanaries,
synthetics:ListTagsForResource,
iam:ListRoles,
s3:ListAllMyBuckets,
s3:GetBucketLocation
```

</TabItem>
<TabItem value="delete">

```json
synthetics:DeleteCanary,
synthetics:GetCanary,
lambda:DeleteFunction,
lambda:DeleteLayerVersion
```

</TabItem>
<TabItem value="list">

```json
synthetics:DescribeCanaries
```

</TabItem>
</Tabs>