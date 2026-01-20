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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html"><code>AWS::Synthetics::Canary</code></a>.

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
    <td><CopyableCode code="Name, Code, ArtifactS3Location, ExecutionRoleArn, Schedule, RuntimeVersion, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

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
'{{ Name }}',
 '{{ Code }}',
 '{{ ArtifactS3Location }}',
 '{{ Schedule }}',
 '{{ ExecutionRoleArn }}',
 '{{ RuntimeVersion }}',
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
 '{{ Name }}',
 '{{ Code }}',
 '{{ ArtifactS3Location }}',
 '{{ ArtifactConfig }}',
 '{{ Schedule }}',
 '{{ ExecutionRoleArn }}',
 '{{ RuntimeVersion }}',
 '{{ SuccessRetentionPeriod }}',
 '{{ FailureRetentionPeriod }}',
 '{{ Tags }}',
 '{{ VPCConfig }}',
 '{{ RunConfig }}',
 '{{ StartCanaryAfterCreation }}',
 '{{ VisualReference }}',
 '{{ DeleteLambdaResourcesOnCanaryDeletion }}',
 '{{ ResourcesToReplicateTags }}',
 '{{ ProvisionedResourceCleanup }}',
 '{{ DryRunAndUpdate }}',
 '{{ BrowserConfigs }}',
 '{{ VisualReferences }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: Code
        value:
          S3Bucket: '{{ S3Bucket }}'
          S3Key: '{{ S3Key }}'
          S3ObjectVersion: '{{ S3ObjectVersion }}'
          Script: '{{ Script }}'
          Handler: '{{ Handler }}'
          SourceLocationArn: '{{ SourceLocationArn }}'
          Dependencies:
            - Type: '{{ Type }}'
              Reference: '{{ Reference }}'
      - name: ArtifactS3Location
        value: '{{ ArtifactS3Location }}'
      - name: ArtifactConfig
        value:
          S3Encryption:
            EncryptionMode: '{{ EncryptionMode }}'
            KmsKeyArn: '{{ KmsKeyArn }}'
      - name: Schedule
        value:
          Expression: '{{ Expression }}'
          DurationInSeconds: '{{ DurationInSeconds }}'
          RetryConfig:
            MaxRetries: '{{ MaxRetries }}'
      - name: ExecutionRoleArn
        value: '{{ ExecutionRoleArn }}'
      - name: RuntimeVersion
        value: '{{ RuntimeVersion }}'
      - name: SuccessRetentionPeriod
        value: '{{ SuccessRetentionPeriod }}'
      - name: FailureRetentionPeriod
        value: '{{ FailureRetentionPeriod }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VPCConfig
        value:
          VpcId: '{{ VpcId }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          Ipv6AllowedForDualStack: '{{ Ipv6AllowedForDualStack }}'
      - name: RunConfig
        value:
          TimeoutInSeconds: '{{ TimeoutInSeconds }}'
          MemoryInMB: '{{ MemoryInMB }}'
          EphemeralStorage: '{{ EphemeralStorage }}'
          ActiveTracing: '{{ ActiveTracing }}'
          EnvironmentVariables: {}
      - name: StartCanaryAfterCreation
        value: '{{ StartCanaryAfterCreation }}'
      - name: VisualReference
        value:
          BaseCanaryRunId: '{{ BaseCanaryRunId }}'
          BaseScreenshots:
            - ScreenshotName: '{{ ScreenshotName }}'
              IgnoreCoordinates:
                - '{{ IgnoreCoordinates[0] }}'
          BrowserType: '{{ BrowserType }}'
      - name: DeleteLambdaResourcesOnCanaryDeletion
        value: '{{ DeleteLambdaResourcesOnCanaryDeletion }}'
      - name: ResourcesToReplicateTags
        value:
          - '{{ ResourcesToReplicateTags[0] }}'
      - name: ProvisionedResourceCleanup
        value: '{{ ProvisionedResourceCleanup }}'
      - name: DryRunAndUpdate
        value: '{{ DryRunAndUpdate }}'
      - name: BrowserConfigs
        value:
          - BrowserType: null
      - name: VisualReferences
        value:
          - null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.synthetics.canaries
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>canaries</code> resource, the following permissions are required:

### Create
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

### Update
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

### Read
```json
synthetics:GetCanary,
synthetics:DescribeCanaries,
synthetics:ListTagsForResource,
iam:ListRoles,
s3:ListAllMyBuckets,
s3:GetBucketLocation
```

### Delete
```json
synthetics:DeleteCanary,
synthetics:GetCanary,
lambda:DeleteFunction,
lambda:DeleteLayerVersion
```

### List
```json
synthetics:DescribeCanaries
```
