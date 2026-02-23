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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "The workGroup name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html"><code>AWS::Athena::WorkGroup</code></a>.

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
    <td><code>work_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>work_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>work_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>work_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>work_groups</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>work_groups</code> in a region.
```sql
SELECT
region,
name
FROM awscc.athena.work_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ name }}',
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
 '{{ name }}',
 '{{ description }}',
 '{{ tags }}',
 '{{ work_group_configuration }}',
 '{{ work_group_configuration_updates }}',
 '{{ state }}',
 '{{ recursive_delete_option }}',
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
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: work_group_configuration
        value:
          bytes_scanned_cutoff_per_query: '{{ bytes_scanned_cutoff_per_query }}'
          enforce_work_group_configuration: '{{ enforce_work_group_configuration }}'
          publish_cloud_watch_metrics_enabled: '{{ publish_cloud_watch_metrics_enabled }}'
          requester_pays_enabled: '{{ requester_pays_enabled }}'
          result_configuration:
            encryption_configuration:
              encryption_option: '{{ encryption_option }}'
              kms_key: '{{ kms_key }}'
            output_location: '{{ output_location }}'
            expected_bucket_owner: '{{ expected_bucket_owner }}'
            acl_configuration:
              s3_acl_option: '{{ s3_acl_option }}'
          engine_version:
            selected_engine_version: '{{ selected_engine_version }}'
            effective_engine_version: '{{ effective_engine_version }}'
          additional_configuration: '{{ additional_configuration }}'
          execution_role: '{{ execution_role }}'
          customer_content_encryption_configuration:
            kms_key: null
          managed_query_results_configuration:
            encryption_configuration:
              kms_key: null
            enabled: '{{ enabled }}'
      - name: work_group_configuration_updates
        value:
          bytes_scanned_cutoff_per_query: null
          enforce_work_group_configuration: null
          publish_cloud_watch_metrics_enabled: null
          requester_pays_enabled: null
          result_configuration_updates:
            encryption_configuration: null
            output_location: null
            expected_bucket_owner: null
            acl_configuration: null
            remove_encryption_configuration: '{{ remove_encryption_configuration }}'
            remove_output_location: '{{ remove_output_location }}'
            remove_expected_bucket_owner: '{{ remove_expected_bucket_owner }}'
            remove_acl_configuration: '{{ remove_acl_configuration }}'
          remove_bytes_scanned_cutoff_per_query: '{{ remove_bytes_scanned_cutoff_per_query }}'
          engine_version: null
          additional_configuration: null
          execution_role: null
          customer_content_encryption_configuration: null
          remove_customer_content_encryption_configuration: '{{ remove_customer_content_encryption_configuration }}'
          managed_query_results_configuration: null
      - name: state
        value: '{{ state }}'
      - name: recursive_delete_option
        value: '{{ recursive_delete_option }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>work_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.athena.work_groups
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags,
    "State": state,
    "RecursiveDeleteOption": recursive_delete_option
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.athena.work_groups
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>work_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

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

</TabItem>
<TabItem value="read">

```json
athena:GetWorkGroup,
athena:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
athena:ListWorkGroups
```

</TabItem>
<TabItem value="delete">

```json
athena:DeleteWorkGroup,
athena:GetWorkGroup,
athena:UntagResource
```

</TabItem>
<TabItem value="update">

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

</TabItem>
</Tabs>