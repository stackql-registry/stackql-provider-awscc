---
title: storage_lens_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_lens_list_only
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

Lists <code>storage_lens</code> in a region or regions, for all properties use <a href="/services/s3/storage_lens/"><code>storage_lens</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>storage_lens_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::S3::StorageLens resource is an Amazon S3 resource type that you can use to create Storage Lens configurations.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.storage_lens_list_only" /></td></tr>
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>storage_lens</code> in a region.
```sql
SELECT
region,
storage_lens_configuration/id
FROM awscc.s3.storage_lens_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>storage_lens_list_only</code> resource, see <a href="/services/s3/storage_lens/#permissions"><code>storage_lens</code></a>

