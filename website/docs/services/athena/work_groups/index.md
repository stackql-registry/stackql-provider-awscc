---
title: work_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - work_groups
  - athena
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

Creates, updates, deletes or gets a <code>work_group</code> resource or lists <code>work_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>work_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Athena::WorkGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.athena.work_groups" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The workGroup name."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The workgroup description."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags, separated by commas, that you want to attach to the workgroup as you create it",
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
    "name": "work_group_configuration",
    "type": "object",
    "description": "The workgroup configuration",
    "children": [
      {
        "name": "bytes_scanned_cutoff_per_query",
        "type": "integer",
        "description": "The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan."
      },
      {
        "name": "enforce_work_group_configuration",
        "type": "boolean",
        "description": "If set to \"true\", the settings for the workgroup override client-side settings. If set to \"false\", client-side settings are used"
      },
      {
        "name": "publish_cloud_watch_metrics_enabled",
        "type": "boolean",
        "description": "Indicates that the Amazon CloudWatch metrics are enabled for the workgroup."
      },
      {
        "name": "requester_pays_enabled",
        "type": "boolean",
        "description": "If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error."
      },
      {
        "name": "result_configuration",
        "type": "object",
        "description": "The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as \"client-side settings\". If workgroup settings override client-side settings, then the query uses the workgroup settings.<br />",
        "children": [
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.",
            "children": [
              {
                "name": "encryption_option",
                "type": "string",
                "description": "Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used."
              },
              {
                "name": "kms_key",
                "type": "string",
                "description": "For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID."
              }
            ]
          },
          {
            "name": "output_location",
            "type": "string",
            "description": "The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration"
          },
          {
            "name": "expected_bucket_owner",
            "type": "string",
            "description": "The AWS account ID of the owner of S3 bucket where query results are stored"
          },
          {
            "name": "acl_configuration",
            "type": "object",
            "description": "Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results",
            "children": [
              {
                "name": "s3_acl_option",
                "type": "string",
                "description": "The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET&#95;OWNER&#95;FULL&#95;CONTROL"
              }
            ]
          }
        ]
      },
      {
        "name": "engine_version",
        "type": "object",
        "description": "The Athena engine version for running queries.",
        "children": [
          {
            "name": "selected_engine_version",
            "type": "string",
            "description": "The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto."
          },
          {
            "name": "effective_engine_version",
            "type": "string",
            "description": "Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored."
          }
        ]
      },
      {
        "name": "additional_configuration",
        "type": "string",
        "description": "Additional Configuration that are passed to Athena Spark Calculations running in this workgroup"
      },
      {
        "name": "execution_role",
        "type": "string",
        "description": "Execution Role ARN required to run Athena Spark Calculations"
      },
      {
        "name": "customer_content_encryption_configuration",
        "type": "object",
        "description": "Indicates the KMS key for encrypting notebook content.",
        "children": [
          {
            "name": "kms_key",
            "type": "string",
            "description": "For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID."
          }
        ]
      },
      {
        "name": "managed_query_results_configuration",
        "type": "object",
        "description": "The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time",
        "children": [
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key",
            "children": [
              {
                "name": "kms_key",
                "type": "string",
                "description": "For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID."
              }
            ]
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "work_group_configuration_updates",
    "type": "object",
    "description": "The workgroup configuration update object",
    "children": [
      {
        "name": "bytes_scanned_cutoff_per_query",
        "type": "integer",
        "description": "The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan."
      },
      {
        "name": "enforce_work_group_configuration",
        "type": "boolean",
        "description": "If set to \"true\", the settings for the workgroup override client-side settings. If set to \"false\", client-side settings are used"
      },
      {
        "name": "publish_cloud_watch_metrics_enabled",
        "type": "boolean",
        "description": "Indicates that the Amazon CloudWatch metrics are enabled for the workgroup."
      },
      {
        "name": "requester_pays_enabled",
        "type": "boolean",
        "description": "If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error."
      },
      {
        "name": "result_configuration_updates",
        "type": "object",
        "description": "The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.",
        "children": [
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.",
            "children": [
              {
                "name": "encryption_option",
                "type": "string",
                "description": "Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used."
              },
              {
                "name": "kms_key",
                "type": "string",
                "description": "For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID."
              }
            ]
          },
          {
            "name": "output_location",
            "type": "string",
            "description": "The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration"
          },
          {
            "name": "expected_bucket_owner",
            "type": "string",
            "description": "The AWS account ID of the owner of S3 bucket where query results are stored"
          },
          {
            "name": "acl_configuration",
            "type": "object",
            "description": "Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results",
            "children": [
              {
                "name": "s3_acl_option",
                "type": "string",
                "description": "The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET&#95;OWNER&#95;FULL&#95;CONTROL"
              }
            ]
          },
          {
            "name": "remove_encryption_configuration",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "remove_output_location",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "remove_expected_bucket_owner",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "remove_acl_configuration",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "remove_bytes_scanned_cutoff_per_query",
        "type": "boolean",
        "description": "Indicates that the data usage control limit per query is removed."
      },
      {
        "name": "engine_version",
        "type": "object",
        "description": "The Athena engine version for running queries.",
        "children": [
          {
            "name": "selected_engine_version",
            "type": "string",
            "description": "The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto."
          },
          {
            "name": "effective_engine_version",
            "type": "string",
            "description": "Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a CreateWorkGroup or UpdateWorkGroup operation, the EffectiveEngineVersion field is ignored."
          }
        ]
      },
      {
        "name": "additional_configuration",
        "type": "string",
        "description": "Additional Configuration that are passed to Athena Spark Calculations running in this workgroup"
      },
      {
        "name": "execution_role",
        "type": "string",
        "description": "Execution Role ARN required to run Athena Spark Calculations"
      },
      {
        "name": "customer_content_encryption_configuration",
        "type": "object",
        "description": "Indicates the KMS key for encrypting notebook content.",
        "children": [
          {
            "name": "kms_key",
            "type": "string",
            "description": "For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID."
          }
        ]
      },
      {
        "name": "remove_customer_content_encryption_configuration",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "managed_query_results_configuration",
        "type": "object",
        "description": "The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time",
        "children": [
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key",
            "children": [
              {
                "name": "kms_key",
                "type": "string",
                "description": "For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID."
              }
            ]
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The date and time the workgroup was created."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the workgroup: ENABLED or DISABLED."
  },
  {
    "name": "recursive_delete_option",
    "type": "boolean",
    "description": "The option to delete the workgroup and its contents even if the workgroup contains any named queries."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html"><code>AWS::Athena::WorkGroup</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>work_group</code>.
```sql
SELECT
region,
name,
description,
tags,
work_group_configuration,
work_group_configuration_updates,
creation_time,
state,
recursive_delete_option
FROM awscc.athena.work_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>work_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.athena.work_groups (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.athena.work_groups (
 Name,
 Description,
 Tags,
 WorkGroupConfiguration,
 WorkGroupConfigurationUpdates,
 State,
 RecursiveDeleteOption,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ WorkGroupConfiguration }}',
 '{{ WorkGroupConfigurationUpdates }}',
 '{{ State }}',
 '{{ RecursiveDeleteOption }}',
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
  - name: work_group
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: WorkGroupConfiguration
        value:
          BytesScannedCutoffPerQuery: '{{ BytesScannedCutoffPerQuery }}'
          EnforceWorkGroupConfiguration: '{{ EnforceWorkGroupConfiguration }}'
          PublishCloudWatchMetricsEnabled: '{{ PublishCloudWatchMetricsEnabled }}'
          RequesterPaysEnabled: '{{ RequesterPaysEnabled }}'
          ResultConfiguration:
            EncryptionConfiguration:
              EncryptionOption: '{{ EncryptionOption }}'
              KmsKey: '{{ KmsKey }}'
            OutputLocation: '{{ OutputLocation }}'
            ExpectedBucketOwner: '{{ ExpectedBucketOwner }}'
            AclConfiguration:
              S3AclOption: '{{ S3AclOption }}'
          EngineVersion:
            SelectedEngineVersion: '{{ SelectedEngineVersion }}'
            EffectiveEngineVersion: '{{ EffectiveEngineVersion }}'
          AdditionalConfiguration: '{{ AdditionalConfiguration }}'
          ExecutionRole: '{{ ExecutionRole }}'
          CustomerContentEncryptionConfiguration:
            KmsKey: null
          ManagedQueryResultsConfiguration:
            EncryptionConfiguration:
              KmsKey: null
            Enabled: '{{ Enabled }}'
      - name: WorkGroupConfigurationUpdates
        value:
          BytesScannedCutoffPerQuery: null
          EnforceWorkGroupConfiguration: null
          PublishCloudWatchMetricsEnabled: null
          RequesterPaysEnabled: null
          ResultConfigurationUpdates:
            EncryptionConfiguration: null
            OutputLocation: null
            ExpectedBucketOwner: null
            AclConfiguration: null
            RemoveEncryptionConfiguration: '{{ RemoveEncryptionConfiguration }}'
            RemoveOutputLocation: '{{ RemoveOutputLocation }}'
            RemoveExpectedBucketOwner: '{{ RemoveExpectedBucketOwner }}'
            RemoveAclConfiguration: '{{ RemoveAclConfiguration }}'
          RemoveBytesScannedCutoffPerQuery: '{{ RemoveBytesScannedCutoffPerQuery }}'
          EngineVersion: null
          AdditionalConfiguration: null
          ExecutionRole: null
          CustomerContentEncryptionConfiguration: null
          RemoveCustomerContentEncryptionConfiguration: '{{ RemoveCustomerContentEncryptionConfiguration }}'
          ManagedQueryResultsConfiguration: null
      - name: State
        value: '{{ State }}'
      - name: RecursiveDeleteOption
        value: '{{ RecursiveDeleteOption }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.athena.work_groups
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>work_groups</code> resource, the following permissions are required:

### Create
```json
athena:CreateWorkGroup,
athena:TagResource,
iam:PassRole,
s3:GetBucketLocation,
s3:GetObject,
s3:ListBucket,
s3:ListBucketMultipartUploads,
s3:AbortMultipartUpload,
s3:PutObject,
s3:ListMultipartUploadParts,
kms:Decrypt,
kms:GenerateDataKey
```

### Read
```json
athena:GetWorkGroup,
athena:ListTagsForResource
```

### List
```json
athena:ListWorkGroups
```

### Delete
```json
athena:DeleteWorkGroup,
athena:GetWorkGroup,
athena:UntagResource
```

### Update
```json
athena:UpdateWorkGroup,
athena:TagResource,
athena:UntagResource,
iam:PassRole,
s3:GetBucketLocation,
s3:GetObject,
s3:ListBucket,
s3:ListBucketMultipartUploads,
s3:AbortMultipartUpload,
s3:PutObject,
s3:ListMultipartUploadParts,
kms:Decrypt,
kms:GenerateDataKey
```
