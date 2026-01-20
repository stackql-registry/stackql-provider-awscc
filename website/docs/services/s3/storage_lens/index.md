---
title: storage_lens
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_lens
  - s3
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

Creates, updates, deletes or gets a <code>storage_len</code> resource or lists <code>storage_lens</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>storage_lens</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.storage_lens" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "storage_lens_configuration",
    "type": "object",
    "description": "Specifies the details of Amazon S3 Storage Lens configuration.",
    "children": [
      {
        "name": "account_level",
        "type": "object",
        "description": "Account-level metrics configurations.",
        "children": [
          {
            "name": "advanced_data_protection_metrics",
            "type": "object",
            "description": "Enables advanced data protection metrics.",
            "children": [
              {
                "name": "is_enabled",
                "type": "boolean",
                "description": "Specifies whether advanced data protection metrics are enabled or disabled."
              }
            ]
          },
          {
            "name": "storage_lens_group_level",
            "type": "object",
            "description": "Specifies the details of Amazon S3 Storage Lens Group configuration.",
            "children": [
              {
                "name": "storage_lens_group_selection_criteria",
                "type": "object",
                "description": "Selection criteria for Storage Lens Group level metrics"
              }
            ]
          },
          {
            "name": "activity_metrics",
            "type": "object",
            "description": "Enables activity metrics.",
            "children": [
              {
                "name": "is_enabled",
                "type": "boolean",
                "description": "Specifies whether activity metrics are enabled or disabled."
              }
            ]
          },
          {
            "name": "bucket_level",
            "type": "object",
            "description": "Bucket-level metrics configurations.",
            "children": [
              {
                "name": "prefix_level",
                "type": "object",
                "description": "Prefix-level metrics configurations."
              },
              {
                "name": "advanced_cost_optimization_metrics",
                "type": "object",
                "description": "Enables advanced cost optimization metrics."
              },
              {
                "name": "detailed_status_codes_metrics",
                "type": "object",
                "description": "Enables detailed status codes metrics."
              }
            ]
          },
          {
            "name": "advanced_cost_optimization_metrics",
            "type": "object",
            "description": "Enables advanced cost optimization metrics.",
            "children": [
              {
                "name": "is_enabled",
                "type": "boolean",
                "description": "Specifies whether advanced cost optimization metrics are enabled or disabled."
              }
            ]
          },
          {
            "name": "detailed_status_codes_metrics",
            "type": "object",
            "description": "Enables detailed status codes metrics.",
            "children": [
              {
                "name": "is_enabled",
                "type": "boolean",
                "description": "Specifies whether detailed status codes metrics are enabled or disabled."
              }
            ]
          }
        ]
      },
      {
        "name": "exclude",
        "type": "object",
        "description": "S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.",
        "children": [
          {
            "name": "regions",
            "type": "array",
            "description": ""
          },
          {
            "name": "buckets",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "is_enabled",
        "type": "boolean",
        "description": "Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled."
      },
      {
        "name": "aws_org",
        "type": "object",
        "description": "The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the specified resource."
          }
        ]
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID that identifies the Amazon S3 Storage Lens configuration."
      },
      {
        "name": "storage_lens_arn",
        "type": "string",
        "description": "The ARN for the Amazon S3 Storage Lens configuration."
      },
      {
        "name": "data_export",
        "type": "object",
        "description": "Specifies how Amazon S3 Storage Lens metrics should be exported.",
        "children": [
          {
            "name": "s3_bucket_destination",
            "type": "object",
            "description": "S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.",
            "children": [
              {
                "name": "output_schema_version",
                "type": "string",
                "description": "The version of the output schema to use when exporting Amazon S3 Storage Lens metrics."
              },
              {
                "name": "format",
                "type": "string",
                "description": "Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export."
              },
              {
                "name": "account_id",
                "type": "string",
                "description": "The AWS account ID that owns the destination S3 bucket."
              },
              {
                "name": "prefix",
                "type": "string",
                "description": "The prefix to use for Amazon S3 Storage Lens export."
              },
              {
                "name": "encryption",
                "type": "object",
                "description": "Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS)."
              },
              {
                "name": "arn",
                "type": "string",
                "description": "The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed."
              }
            ]
          },
          {
            "name": "cloud_watch_metrics",
            "type": "object",
            "description": "CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.",
            "children": [
              {
                "name": "is_enabled",
                "type": "boolean",
                "description": "Specifies whether CloudWatch metrics are enabled or disabled."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelen.html"><code>AWS::S3::StorageLens</code></a>.

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
    <td><CopyableCode code="StorageLensConfiguration, region" /></td>
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

Gets all properties from an individual <code>storage_len</code>.
```sql
SELECT
region,
storage_lens_configuration,
tags
FROM awscc.s3.storage_lens
WHERE region = 'us-east-1' AND data__Identifier = '<StorageLensConfiguration/Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>storage_len</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.storage_lens (
 StorageLensConfiguration,
 region
)
SELECT 
'{{ StorageLensConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.storage_lens (
 StorageLensConfiguration,
 Tags,
 region
)
SELECT 
 '{{ StorageLensConfiguration }}',
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
  - name: storage_len
    props:
      - name: StorageLensConfiguration
        value:
          AccountLevel:
            AdvancedDataProtectionMetrics:
              IsEnabled: '{{ IsEnabled }}'
            StorageLensGroupLevel:
              StorageLensGroupSelectionCriteria:
                Exclude:
                  - '{{ Exclude[0] }}'
                Include:
                  - null
            ActivityMetrics:
              IsEnabled: '{{ IsEnabled }}'
            BucketLevel:
              AdvancedDataProtectionMetrics: null
              PrefixLevel:
                StorageMetrics:
                  IsEnabled: '{{ IsEnabled }}'
                  SelectionCriteria:
                    Delimiter: '{{ Delimiter }}'
                    MaxDepth: '{{ MaxDepth }}'
                    MinStorageBytesPercentage: null
              ActivityMetrics: null
              AdvancedCostOptimizationMetrics:
                IsEnabled: '{{ IsEnabled }}'
              DetailedStatusCodesMetrics:
                IsEnabled: '{{ IsEnabled }}'
            AdvancedCostOptimizationMetrics: null
            DetailedStatusCodesMetrics: null
          Exclude:
            Regions:
              - '{{ Regions[0] }}'
            Buckets:
              - '{{ Buckets[0] }}'
          IsEnabled: '{{ IsEnabled }}'
          Include: null
          AwsOrg:
            Arn: null
          Id: '{{ Id }}'
          StorageLensArn: '{{ StorageLensArn }}'
          DataExport:
            S3BucketDestination:
              OutputSchemaVersion: '{{ OutputSchemaVersion }}'
              Format: '{{ Format }}'
              AccountId: '{{ AccountId }}'
              Prefix: '{{ Prefix }}'
              Encryption: {}
              Arn: '{{ Arn }}'
            CloudWatchMetrics:
              IsEnabled: '{{ IsEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.storage_lens
WHERE data__Identifier = '<StorageLensConfiguration/Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>storage_lens</code> resource, the following permissions are required:

### Read
```json
s3:GetStorageLensConfiguration,
s3:GetStorageLensConfigurationTagging
```

### Create
```json
s3:PutStorageLensConfiguration,
s3:PutStorageLensConfigurationTagging,
s3:GetStorageLensConfiguration,
s3:GetStorageLensConfigurationTagging,
organizations:DescribeOrganization,
organizations:ListAccounts,
organizations:ListAWSServiceAccessForOrganization,
organizations:ListDelegatedAdministrators,
iam:CreateServiceLinkedRole
```

### Update
```json
s3:PutStorageLensConfiguration,
s3:PutStorageLensConfigurationTagging,
s3:GetStorageLensConfiguration,
s3:GetStorageLensConfigurationTagging,
organizations:DescribeOrganization,
organizations:ListAccounts,
organizations:ListAWSServiceAccessForOrganization,
organizations:ListDelegatedAdministrators,
iam:CreateServiceLinkedRole
```

### List
```json
s3:ListStorageLensConfigurations
```

### Delete
```json
s3:DeleteStorageLensConfiguration,
s3:DeleteStorageLensConfigurationTagging
```
