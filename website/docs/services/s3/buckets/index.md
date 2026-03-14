---
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes or gets a <code>bucket</code> resource or lists <code>buckets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>buckets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::S3::Bucket</code> resource creates an Amazon S3 bucket in the same AWS Region where you create the AWS CloudFormation stack.</summary>To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to <i>retain</i> the bucket or to <i>delete</i> the bucket. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">DeletionPolicy Attribute</a>.<br />You can only delete empty buckets. Deletion fails for buckets that have contents.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.buckets" /></td></tr>
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
    "name": "accelerate_configuration",
    "type": "object",
    "description": "Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html\">Amazon S3 Transfer Acceleration</a> in the <i>Amazon S3 User Guide</i>.",
    "children": [
      {
        "name": "acceleration_status",
        "type": "string",
        "description": "Specifies the transfer acceleration status of the bucket."
      }
    ]
  },
  {
    "name": "access_control",
    "type": "string",
    "description": "<details><summary>This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see <a href=\"https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html\">Controlling object ownership</a> in the <i>Amazon S3 User Guide</i>.</summary>A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl\">Canned ACL</a> in the <i>Amazon S3 User Guide</i>.<br />S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the <a href=\"https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html\">AWS::S3::OwnershipControls</a> property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.<br />The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see <a href=\"https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html\">AWS::S3::BucketPolicy</a>. For examples of common policy configurations, including S3 Server Access Logs buckets and more, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html\">Bucket policy examples</a> in the <i>Amazon S3 User Guide</i>.</details>"
  },
  {
    "name": "analytics_configurations",
    "type": "array",
    "description": "Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.",
    "children": [
      {
        "name": "tag_filters",
        "type": "array",
        "description": "<details><summary>The tags to use when evaluating an analytics filter.</summary>The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.</details>",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The tag value."
          },
          {
            "name": "key",
            "type": "string",
            "description": "The tag key."
          }
        ]
      },
      {
        "name": "storage_class_analysis",
        "type": "object",
        "description": "Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.",
        "children": [
          {
            "name": "data_export",
            "type": "object",
            "description": "Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.",
            "children": [
              {
                "name": "s3_bucket_destination",
                "type": "object",
                "description": "S3 bucket destination settings for the Amazon S3 Storage Lens metrics export."
              },
              {
                "name": "cloud_watch_metrics",
                "type": "object",
                "description": "CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export."
              }
            ]
          }
        ]
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID that identifies the analytics configuration."
      },
      {
        "name": "prefix",
        "type": "string",
        "description": "The prefix that an object must have to be included in the analytics results."
      }
    ]
  },
  {
    "name": "bucket_encryption",
    "type": "object",
    "description": "Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html\">Amazon S3 Default Encryption for S3 Buckets</a> in the <i>Amazon S3 User Guide</i>.",
    "children": [
      {
        "name": "server_side_encryption_configuration",
        "type": "array",
        "description": "Specifies the default server-side-encryption configuration.",
        "children": [
          {
            "name": "bucket_key_enabled",
            "type": "boolean",
            "description": "<details><summary>Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the <code>BucketKeyEnabled</code> element to <code>true</code> causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html\">Amazon S3 Bucket Keys</a> in the <i>Amazon S3 User Guide</i>.</details>"
          },
          {
            "name": "server_side_encryption_by_default",
            "type": "object",
            "description": "Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.",
            "children": [
              {
                "name": "kms_master_key_id",
                "type": "string",
                "description": "<details><summary>AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.</summary>+  <i>General purpose buckets</i> - This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to <code>aws:kms</code> or <code>aws:kms:dsse</code>.<br />+  <i>Directory buckets</i> - This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to <code>aws:kms</code>.<br />You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.<br />+  Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code><br />+  Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code><br />+  Key Alias: <code>alias/alias-name</code><br />If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy\">Using encryption for cross-account operations</a>.<br />+  <i>General purpose buckets</i> - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log.<br />+  <i>Directory buckets</i> - When you specify an <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk\">customer managed key</a> for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.<br />Amazon S3 only supports symmetric encryption KMS keys. For more information, see <a href=\"https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html\">Asymmetric keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</details>"
              },
              {
                "name": "sse_algorithm",
                "type": "string",
                "description": "<details><summary>Server-side encryption algorithm to use for the default encryption.</summary>For directory buckets, there are only two supported values for server-side encryption: <code>AES256</code> and <code>aws:kms</code>.</details>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "bucket_name",
    "type": "string",
    "description": "<details><summary>A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html\">Amazon S3 bucket restrictions and limitations</a>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html\">Rules for naming Amazon S3 buckets</a> in the <i>Amazon S3 User Guide</i>.</summary>If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.</details>"
  },
  {
    "name": "cors_configuration",
    "type": "object",
    "description": "Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html\">Enabling Cross-Origin Resource Sharing</a> in the <i>Amazon S3 User Guide</i>.",
    "children": [
      {
        "name": "cors_rules",
        "type": "array",
        "description": "A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.",
        "children": [
          {
            "name": "allowed_headers",
            "type": "array",
            "description": "Headers that are specified in the <code>Access-Control-Request-Headers</code> header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed."
          },
          {
            "name": "allowed_methods",
            "type": "array",
            "description": "<details><summary>An HTTP method that you allow the origin to run.</summary><i>Allowed values</i>: <code>GET</code> | <code>PUT</code> | <code>HEAD</code> | <code>POST</code> | <code>DELETE</code></details>"
          },
          {
            "name": "allowed_origins",
            "type": "array",
            "description": "One or more origins you want customers to be able to access the bucket from."
          },
          {
            "name": "exposed_headers",
            "type": "array",
            "description": "One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "A unique identifier for this rule. The value must be no more than 255 characters."
          },
          {
            "name": "max_age",
            "type": "integer",
            "description": "The time in seconds that your browser is to cache the preflight response for the specified resource."
          }
        ]
      }
    ]
  },
  {
    "name": "intelligent_tiering_configurations",
    "type": "array",
    "description": "Defines how Amazon S3 handles Intelligent-Tiering storage.",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "The ID used to identify the S3 Intelligent-Tiering configuration."
      },
      {
        "name": "prefix",
        "type": "string",
        "description": "An object key name prefix that identifies the subset of objects to which the rule applies."
      },
      {
        "name": "status",
        "type": "string",
        "description": "Specifies the status of the configuration."
      },
      {
        "name": "tag_filters",
        "type": "array",
        "description": "A container for a key-value pair.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The tag value."
          },
          {
            "name": "key",
            "type": "string",
            "description": "The tag key."
          }
        ]
      },
      {
        "name": "tierings",
        "type": "array",
        "description": "<details><summary>Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: <code>ARCHIVE_ACCESS</code> and <code>DEEP_ARCHIVE_ACCESS</code>.</summary>You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.</details>",
        "children": [
          {
            "name": "access_tier",
            "type": "string",
            "description": "S3 Intelligent-Tiering access tier. See <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access\">Storage class for automatically optimizing frequently and infrequently accessed objects</a> for a list of access tiers in the S3 Intelligent-Tiering storage class."
          },
          {
            "name": "days",
            "type": "integer",
            "description": "The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days)."
          }
        ]
      }
    ]
  },
  {
    "name": "inventory_configurations",
    "type": "array",
    "description": "Specifies the inventory configuration for an Amazon S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html\">GET Bucket inventory</a> in the <i>Amazon S3 API Reference</i>.",
    "children": [
      {
        "name": "destination",
        "type": "object",
        "description": "Contains information about where to publish the inventory results.",
        "children": [
          {
            "name": "bucket_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the bucket to which data is exported."
          },
          {
            "name": "bucket_account_id",
            "type": "string",
            "description": "<details><summary>The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.</summary>Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.</details>"
          },
          {
            "name": "format",
            "type": "string",
            "description": "<details><summary>Specifies the file format used when exporting data to Amazon S3.</summary><i>Allowed values</i>: <code>CSV</code> | <code>ORC</code> | <code>Parquet</code></details>"
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "The prefix to use when exporting data. The prefix is prepended to all results."
          }
        ]
      },
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an inventory list is generated. If set to <code>False</code>, no inventory list is generated."
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID used to identify the inventory configuration."
      },
      {
        "name": "included_object_versions",
        "type": "string",
        "description": "Object versions to include in the inventory list. If set to <code>All</code>, the list includes all the object versions, which adds the version-related fields <code>VersionId</code>, <code>IsLatest</code>, and <code>DeleteMarker</code> to the list. If set to <code>Current</code>, the list does not contain these version-related fields."
      },
      {
        "name": "optional_fields",
        "type": "array",
        "description": "Contains the optional fields that are included in the inventory results."
      },
      {
        "name": "prefix",
        "type": "string",
        "description": "Specifies the inventory filter prefix."
      },
      {
        "name": "schedule_frequency",
        "type": "string",
        "description": "Specifies the schedule for generating inventory results."
      }
    ]
  },
  {
    "name": "lifecycle_configuration",
    "type": "object",
    "description": "Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\">Object Lifecycle Management</a> in the <i>Amazon S3 User Guide</i>.",
    "children": [
      {
        "name": "rules",
        "type": "array",
        "description": "A lifecycle rule for individual objects in an Amazon S3 bucket.",
        "children": [
          {
            "name": "abort_incomplete_multipart_upload",
            "type": "object",
            "description": "Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3 bucket.",
            "children": [
              {
                "name": "days_after_initiation",
                "type": "integer",
                "description": "Specifies the number of days after which Amazon S3 stops an incomplete multipart upload."
              }
            ]
          },
          {
            "name": "expiration_date",
            "type": "string",
            "description": "Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time."
          },
          {
            "name": "expiration_in_days",
            "type": "integer",
            "description": "Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time."
          },
          {
            "name": "expired_object_delete_marker",
            "type": "boolean",
            "description": "Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions. If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with <code>ExpirationInDays</code>, <code>ExpirationDate</code>, or <code>TagFilters</code>."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Unique identifier for the rule. The value can't be longer than 255 characters."
          },
          {
            "name": "noncurrent_version_expiration_in_days",
            "type": "integer",
            "description": "(Deprecated.) For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time."
          },
          {
            "name": "noncurrent_version_expiration",
            "type": "object",
            "description": "Specifies when noncurrent object versions expire. Upon expiration, S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that S3 delete noncurrent object versions at a specific period in the object's lifetime.",
            "children": [
              {
                "name": "noncurrent_days",
                "type": "integer",
                "description": "Specifies the number of days an object is noncurrent before S3 can perform the associated action. For information about the noncurrent days calculations, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations\">How Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon S3 User Guide</i>."
              },
              {
                "name": "newer_noncurrent_versions",
                "type": "integer",
                "description": "Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html\">Lifecycle configuration elements</a> in the <i>Amazon S3 User Guide</i>."
              }
            ]
          },
          {
            "name": "noncurrent_version_transition",
            "type": "object",
            "description": "(Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the <code>NoncurrentVersionTransitions</code> property.",
            "children": [
              {
                "name": "storage_class",
                "type": "string",
                "description": "The class of storage used to store the object."
              },
              {
                "name": "transition_in_days",
                "type": "integer",
                "description": "Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations\">How Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the <i>Amazon S3 User Guide</i>."
              },
              {
                "name": "newer_noncurrent_versions",
                "type": "integer",
                "description": "Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html\">Lifecycle configuration elements</a> in the <i>Amazon S3 User Guide</i>."
              }
            ]
          },
          {
            "name": "noncurrent_version_transitions",
            "type": "array",
            "description": "For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the <code>NoncurrentVersionTransition</code> property."
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "<details><summary>Object key prefix that identifies one or more objects to which this rule applies.</summary>Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints\">XML related object key constraints</a>.</details>"
          },
          {
            "name": "status",
            "type": "string",
            "description": "If <code>Enabled</code>, the rule is currently being applied. If <code>Disabled</code>, the rule is not currently being applied."
          },
          {
            "name": "tag_filters",
            "type": "array",
            "description": "Tags to use to identify a subset of objects to which the lifecycle rule applies.",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": "The tag value."
              },
              {
                "name": "key",
                "type": "string",
                "description": "The tag key."
              }
            ]
          },
          {
            "name": "object_size_greater_than",
            "type": "string",
            "description": "Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules\">Lifecycle configuration using size-based rules</a> in the <i>Amazon S3 User Guide</i>."
          },
          {
            "name": "object_size_less_than",
            "type": "string",
            "description": "Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules\">Lifecycle configuration using size-based rules</a> in the <i>Amazon S3 User Guide</i>."
          },
          {
            "name": "transition",
            "type": "object",
            "description": "(Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the <code>Transitions</code> property.",
            "children": [
              {
                "name": "storage_class",
                "type": "string",
                "description": "The storage class to which you want the object to transition."
              },
              {
                "name": "transition_in_days",
                "type": "integer",
                "description": "Indicates the number of days after creation when objects are transitioned to the specified storage class. If the specified storage class is <code>INTELLIGENT_TIERING</code>, <code>GLACIER_IR</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code>, valid values are <code>0</code> or positive integers. If the specified storage class is <code>STANDARD_IA</code> or <code>ONEZONE_IA</code>, valid values are positive integers greater than <code>30</code>. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints\">Constraints and considerations for transitions</a> in the <i>Amazon S3 User Guide</i>."
              }
            ]
          },
          {
            "name": "transitions",
            "type": "array",
            "description": "One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the <code>Transition</code> property."
          }
        ]
      },
      {
        "name": "transition_default_minimum_object_size",
        "type": "string",
        "description": "<details><summary>Indicates which default minimum object size behavior is applied to the lifecycle configuration.</summary>This parameter applies to general purpose buckets only. It isn't supported for directory bucket lifecycle configurations.<br />+  <code>all_storage_classes_128K</code> - Objects smaller than 128 KB will not transition to any storage class by default.<br />+  <code>varies_by_storage_class</code> - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB.<br />To customize the minimum object size for any transition you can add a filter that specifies a custom <code>ObjectSizeGreaterThan</code> or <code>ObjectSizeLessThan</code> in the body of your transition rule. Custom filters always take precedence over the default transition behavior.</details>"
      }
    ]
  },
  {
    "name": "logging_configuration",
    "type": "object",
    "description": "Settings that define where logs are stored.",
    "children": [
      {
        "name": "destination_bucket_name",
        "type": "string",
        "description": "The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the <code>LoggingConfiguration</code> property is defined."
      },
      {
        "name": "log_file_prefix",
        "type": "string",
        "description": "A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket."
      },
      {
        "name": "target_object_key_format",
        "type": "object",
        "description": "Amazon S3 key format for log objects. Only one format, either PartitionedPrefix or SimplePrefix, is allowed."
      }
    ]
  },
  {
    "name": "metrics_configurations",
    "type": "array",
    "description": "Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html\">PutBucketMetricsConfiguration</a>.",
    "children": [
      {
        "name": "access_point_arn",
        "type": "string",
        "description": "The access point that was used while performing operations on the object. The metrics configuration only includes objects that meet the filter's criteria."
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID used to identify the metrics configuration. This can be any value you choose that helps you identify your metrics configuration."
      },
      {
        "name": "prefix",
        "type": "string",
        "description": "The prefix that an object must have to be included in the metrics results."
      },
      {
        "name": "tag_filters",
        "type": "array",
        "description": "Specifies a list of tag filters to use as a metrics configuration filter. The metrics configuration includes only objects that meet the filter's criteria.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The tag value."
          },
          {
            "name": "key",
            "type": "string",
            "description": "The tag key."
          }
        ]
      }
    ]
  },
  {
    "name": "metadata_table_configuration",
    "type": "object",
    "description": "The metadata table configuration of an S3 general purpose bucket.",
    "children": [
      {
        "name": "s3_tables_destination",
        "type": "object",
        "description": "The destination information for the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket. The specified metadata table name must be unique within the <code>aws_s3_metadata</code> namespace in the destination table bucket.",
        "children": [
          {
            "name": "table_bucket_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket."
          },
          {
            "name": "table_name",
            "type": "string",
            "description": "The name for the metadata table in your metadata table configuration. The specified metadata table name must be unique within the <code>aws_s3_metadata</code> namespace in the destination table bucket."
          },
          {
            "name": "table_namespace",
            "type": "string",
            "description": "The table bucket namespace for the metadata table in your metadata table configuration. This value is always <code>aws_s3_metadata</code>."
          },
          {
            "name": "table_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the metadata table in the metadata table configuration. The specified metadata table name must be unique within the <code>aws_s3_metadata</code> namespace in the destination table bucket."
          }
        ]
      }
    ]
  },
  {
    "name": "metadata_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "destination",
        "type": "object",
        "description": "The destination information for the metadata configuration.",
        "children": [
          {
            "name": "table_bucket_type",
            "type": "string",
            "description": "The type of the table bucket."
          },
          {
            "name": "table_bucket_arn",
            "type": "string",
            "description": "The ARN of the table bucket."
          },
          {
            "name": "table_namespace",
            "type": "string",
            "description": "The namespace of the table."
          }
        ]
      },
      {
        "name": "journal_table_configuration",
        "type": "object",
        "description": "The configuration for the journal table.",
        "children": [
          {
            "name": "table_name",
            "type": "string",
            "description": "The name of the journal table."
          },
          {
            "name": "table_arn",
            "type": "string",
            "description": "The ARN of the journal table."
          },
          {
            "name": "record_expiration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "expiration",
                "type": "string",
                "description": "Specifies whether record expiration is enabled or disabled."
              },
              {
                "name": "days",
                "type": "integer",
                "description": "The number of days after which records expire. Required if Expiration is ENABLED."
              }
            ]
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "The encryption configuration for the journal table.",
            "children": [
              {
                "name": "sse_algorithm",
                "type": "string",
                "description": "Specifies the server-side encryption algorithm to use for encrypting tables."
              },
              {
                "name": "kms_key_arn",
                "type": "string",
                "description": "The ARN of the KMS key. Required if SseAlgorithm is aws:kms."
              }
            ]
          }
        ]
      },
      {
        "name": "inventory_table_configuration",
        "type": "object",
        "description": "The configuration for the inventory table.",
        "children": [
          {
            "name": "table_name",
            "type": "string",
            "description": "The name of the inventory table."
          },
          {
            "name": "table_arn",
            "type": "string",
            "description": "The ARN of the inventory table."
          },
          {
            "name": "configuration_state",
            "type": "string",
            "description": "Specifies whether inventory table configuration is enabled or disabled."
          },
          {
            "name": "encryption_configuration",
            "type": "object",
            "description": "The encryption configuration for the inventory table.",
            "children": [
              {
                "name": "sse_algorithm",
                "type": "string",
                "description": "Specifies the server-side encryption algorithm to use for encrypting tables."
              },
              {
                "name": "kms_key_arn",
                "type": "string",
                "description": "The ARN of the KMS key. Required if SseAlgorithm is aws:kms."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "notification_configuration",
    "type": "object",
    "description": "Configuration that defines how Amazon S3 handles bucket notifications.",
    "children": [
      {
        "name": "event_bridge_configuration",
        "type": "object",
        "description": "Enables delivery of events to Amazon EventBridge.",
        "children": [
          {
            "name": "event_bridge_enabled",
            "type": "boolean",
            "description": "Enables delivery of events to Amazon EventBridge."
          }
        ]
      },
      {
        "name": "lambda_configurations",
        "type": "array",
        "description": "Describes the LAMlong functions to invoke and the events for which to invoke them.",
        "children": [
          {
            "name": "event",
            "type": "string",
            "description": "The Amazon S3 bucket event for which to invoke the LAMlong function. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\">Supported Event Types</a> in the <i>Amazon S3 User Guide</i>."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The filtering rules that determine which objects invoke the AWS Lambda function. For example, you can create a filter so that only image files with a <code>.jpg</code> extension invoke the function when they are added to the Amazon S3 bucket.",
            "children": [
              {
                "name": "s3_key",
                "type": "object",
                "description": "A container for object key name prefix and suffix filtering rules."
              }
            ]
          },
          {
            "name": "function",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the LAMlong function that Amazon S3 invokes when the specified event type occurs."
          }
        ]
      },
      {
        "name": "queue_configurations",
        "type": "array",
        "description": "The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.",
        "children": [
          {
            "name": "event",
            "type": "string",
            "description": "The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\">Supported Event Types</a> in the <i>Amazon S3 User Guide</i>."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The filtering rules that determine which objects trigger notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a <code>.jpg</code> extension are added to the bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/notification-how-to-filtering.html\">Configuring event notifications using object key name filtering</a> in the <i>Amazon S3 User Guide</i>.",
            "children": [
              {
                "name": "s3_key",
                "type": "object",
                "description": "A container for object key name prefix and suffix filtering rules."
              }
            ]
          },
          {
            "name": "queue",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type. FIFO queues are not allowed when enabling an SQS queue as the event notification destination."
          }
        ]
      },
      {
        "name": "topic_configurations",
        "type": "array",
        "description": "The topic to which notifications are sent and the events for which notifications are generated.",
        "children": [
          {
            "name": "event",
            "type": "string",
            "description": "The Amazon S3 bucket event about which to send notifications. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\">Supported Event Types</a> in the <i>Amazon S3 User Guide</i>."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a <code>.jpg</code> extension are added to the bucket.",
            "children": [
              {
                "name": "s3_key",
                "type": "object",
                "description": "A container for object key name prefix and suffix filtering rules."
              }
            ]
          },
          {
            "name": "topic",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type."
          }
        ]
      }
    ]
  },
  {
    "name": "object_lock_configuration",
    "type": "object",
    "description": "<details><summary>This operation is not supported for directory buckets.</summary>Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html\">Locking Objects</a>.<br />+  The <code>DefaultRetention</code> settings require both a mode and a period.<br />+  The <code>DefaultRetention</code> period can be either <code>Days</code> or <code>Years</code> but you must select one. You cannot specify <code>Days</code> and <code>Years</code> at the same time.<br />+  You can enable Object Lock for new or existing buckets. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html\">Configuring Object Lock</a>.</details>",
    "children": [
      {
        "name": "object_lock_enabled",
        "type": "string",
        "description": "Indicates whether this bucket has an Object Lock configuration enabled. Enable <code>ObjectLockEnabled</code> when you apply <code>ObjectLockConfiguration</code> to a bucket."
      },
      {
        "name": "rule",
        "type": "object",
        "description": "Specifies the Object Lock rule for the specified object. Enable this rule when you apply <code>ObjectLockConfiguration</code> to a bucket. If Object Lock is turned on, bucket settings require both <code>Mode</code> and a period of either <code>Days</code> or <code>Years</code>. You cannot specify <code>Days</code> and <code>Years</code> at the same time. For more information, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html\">ObjectLockRule</a> and <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html\">DefaultRetention</a>.",
        "children": [
          {
            "name": "default_retention",
            "type": "object",
            "description": "The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both <code>Mode</code> and a period of either <code>Days</code> or <code>Years</code>. You cannot specify <code>Days</code> and <code>Years</code> at the same time. For more information about allowable values for mode and period, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html\">DefaultRetention</a>.",
            "children": [
              {
                "name": "years",
                "type": "integer",
                "description": "The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify <code>Mode</code> and specify either <code>Days</code> or <code>Years</code>."
              },
              {
                "name": "days",
                "type": "integer",
                "description": "The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify <code>Mode</code> and specify either <code>Days</code> or <code>Years</code>."
              },
              {
                "name": "mode",
                "type": "string",
                "description": "The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify <code>Mode</code> and specify either <code>Days</code> or <code>Years</code>."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "object_lock_enabled",
    "type": "boolean",
    "description": "Indicates whether this bucket has an Object Lock configuration enabled. Enable <code>ObjectLockEnabled</code> when you apply <code>ObjectLockConfiguration</code> to a bucket."
  },
  {
    "name": "ownership_controls",
    "type": "object",
    "description": "Configuration that defines how Amazon S3 handles Object Ownership rules.",
    "children": [
      {
        "name": "rules",
        "type": "array",
        "description": "Specifies the container element for Object Ownership rules.",
        "children": [
          {
            "name": "object_ownership",
            "type": "string",
            "description": "Specifies an object ownership rule."
          }
        ]
      }
    ]
  },
  {
    "name": "public_access_block_configuration",
    "type": "object",
    "description": "Configuration that defines how Amazon S3 handles public access.",
    "children": [
      {
        "name": "restrict_public_buckets",
        "type": "boolean",
        "description": "<details><summary>Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.</summary>Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.</details>"
      },
      {
        "name": "block_public_policy",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies."
      },
      {
        "name": "block_public_acls",
        "type": "boolean",
        "description": "<details><summary>Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:</summary>- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.<br />- PUT Object calls fail if the request includes a public ACL.<br />. - PUT Bucket calls fail if the request includes a public ACL.<br />Enabling this setting doesn't affect existing policies or ACLs.</details>"
      },
      {
        "name": "ignore_public_acls",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set."
      }
    ]
  },
  {
    "name": "replication_configuration",
    "type": "object",
    "description": "<details><summary>Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the <code>VersioningConfiguration</code> property.</summary>Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.</details>",
    "children": [
      {
        "name": "role",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAMlong (IAM) role that Amazon S3 assumes when replicating objects. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html\">How to Set Up Replication</a> in the <i>Amazon S3 User Guide</i>."
      },
      {
        "name": "rules",
        "type": "array",
        "description": "A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.",
        "children": [
          {
            "name": "delete_marker_replication",
            "type": "object",
            "description": "<details><summary>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code> in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code><code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config\">Basic Rule Configuration</a>.</summary>For more information about delete marker replication, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html\">Basic Rule Configuration</a>.<br />If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations\">Backward Compatibility</a>.</details>",
            "children": [
              {
                "name": "status",
                "type": "string",
                "description": "Indicates whether to replicate delete markers. Disabled by default."
              }
            ]
          },
          {
            "name": "destination",
            "type": "object",
            "description": "A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).",
            "children": [
              {
                "name": "access_control_translation",
                "type": "object",
                "description": "Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS-account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS-account that owns the source object."
              },
              {
                "name": "account",
                "type": "string",
                "description": "<details><summary>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS-account that owns the destination bucket by specifying the <code>AccessControlTranslation</code> property, this is the account ID of the destination bucket owner. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html\">Cross-Region Replication Additional Configuration: Change Replica Owner</a> in the <i>Amazon S3 User Guide</i>.</summary>If you specify the <code>AccessControlTranslation</code> property, the <code>Account</code> property is required.</details>"
              },
              {
                "name": "bucket",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results."
              },
              {
                "name": "encryption_configuration",
                "type": "object",
                "description": "Specifies encryption-related information."
              },
              {
                "name": "metrics",
                "type": "object",
                "description": "A container specifying replication metrics-related settings enabling replication metrics and events."
              },
              {
                "name": "replication_time",
                "type": "object",
                "description": "A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a <code>Metrics</code> block."
              },
              {
                "name": "storage_class",
                "type": "string",
                "description": "<details><summary>The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.</summary>For valid values, see the <code>StorageClass</code> element of the <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html\">PUT Bucket replication</a> action in the <i>Amazon S3 API Reference</i>.</details>"
              }
            ]
          },
          {
            "name": "filter",
            "type": "object",
            "description": "<details><summary>A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>TagFilter</code>, or an <code>And</code> child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.</summary>V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the <code>Prefix</code> directly as a child element of the <code>Rule</code> element.</details>",
            "children": [
              {
                "name": "and",
                "type": "object",
                "description": "<details><summary>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:</summary>+  If you specify both a <code>Prefix</code> and a <code>TagFilter</code>, wrap these filters in an <code>And</code> tag.<br />+  If you specify a filter based on multiple tags, wrap the <code>TagFilter</code> elements in an <code>And</code> tag.</details>"
              },
              {
                "name": "prefix",
                "type": "string",
                "description": "<details><summary>An object key name prefix that identifies the subset of objects to which the rule applies.</summary>Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints\">XML related object key constraints</a>.</details>"
              },
              {
                "name": "tag_filter",
                "type": "object",
                "description": "<details><summary>A container for specifying a tag key and value.</summary>The rule applies only to objects that have the tag in their tag set.</details>"
              }
            ]
          },
          {
            "name": "id",
            "type": "string",
            "description": "A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID. When using a V2 replication configuration this property is capitalized as \"ID\"."
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "<details><summary>An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the <code>Prefix</code> directly as a child element of the <code>Rule</code> element.</summary>Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints\">XML related object key constraints</a>.</details>"
          },
          {
            "name": "priority",
            "type": "integer",
            "description": "<details><summary>The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.</summary>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html\">Replication</a> in the <i>Amazon S3 User Guide</i>.</details>"
          },
          {
            "name": "source_selection_criteria",
            "type": "object",
            "description": "A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.",
            "children": [
              {
                "name": "replica_modifications",
                "type": "object",
                "description": "A filter that you can specify for selection for modifications on replicas."
              },
              {
                "name": "sse_kms_encrypted_objects",
                "type": "object",
                "description": "A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS."
              }
            ]
          },
          {
            "name": "status",
            "type": "string",
            "description": "Specifies whether the rule is enabled."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this S3 bucket.",
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
    "name": "versioning_configuration",
    "type": "object",
    "description": "<details><summary>Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.</summary>When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (<code>PUT</code> or <code>DELETE</code>) on objects in the bucket.</details>",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "The versioning state of the bucket."
      }
    ]
  },
  {
    "name": "website_configuration",
    "type": "object",
    "description": "Information used to configure the bucket as a static website. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\">Hosting Websites on Amazon S3</a>.",
    "children": [
      {
        "name": "error_document",
        "type": "string",
        "description": "The name of the error document for the website."
      },
      {
        "name": "index_document",
        "type": "string",
        "description": "The name of the index document for the website."
      },
      {
        "name": "routing_rules",
        "type": "array",
        "description": "Rules that define when a redirect is applied and the redirect behavior.",
        "children": [
          {
            "name": "redirect_rule",
            "type": "object",
            "description": "Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.",
            "children": [
              {
                "name": "host_name",
                "type": "string",
                "description": "The host name to use in the redirect request."
              },
              {
                "name": "http_redirect_code",
                "type": "string",
                "description": "The HTTP redirect code to use on the response. Not required if one of the siblings is present."
              },
              {
                "name": "protocol",
                "type": "string",
                "description": "Protocol to use when redirecting requests. The default is the protocol that is used in the original request."
              },
              {
                "name": "replace_key_prefix_with",
                "type": "string",
                "description": "<details><summary>The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix <code>docs/</code> (objects in the <code>docs/</code> folder) to <code>documents/</code>, you can set a condition block with <code>KeyPrefixEquals</code> set to <code>docs/</code> and in the Redirect set <code>ReplaceKeyPrefixWith</code> to <code>/documents</code>. Not required if one of the siblings is present. Can be present only if <code>ReplaceKeyWith</code> is not provided.</summary>Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints\">XML related object key constraints</a>.</details>"
              },
              {
                "name": "replace_key_with",
                "type": "string",
                "description": "<details><summary>The specific object key to use in the redirect request. For example, redirect request to <code>error.html</code>. Not required if one of the siblings is present. Can be present only if <code>ReplaceKeyPrefixWith</code> is not provided.</summary>Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints\">XML related object key constraints</a>.</details>"
              }
            ]
          },
          {
            "name": "routing_rule_condition",
            "type": "object",
            "description": "A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.",
            "children": [
              {
                "name": "key_prefix_equals",
                "type": "string",
                "description": "<details><summary>The object key name prefix when the redirect is applied. For example, to redirect requests for <code>ExamplePage.html</code>, the key prefix will be <code>ExamplePage.html</code>. To redirect request for all pages with the prefix <code>docs/</code>, the key prefix will be <code>docs/</code>, which identifies all objects in the docs/ folder.</summary>Required when the parent element <code>Condition</code> is specified and sibling <code>HttpErrorCodeReturnedEquals</code> is not specified. If both conditions are specified, both must be true for the redirect to be applied.</details>"
              },
              {
                "name": "http_error_code_returned_equals",
                "type": "string",
                "description": "<details><summary>The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied.</summary>Required when parent element <code>Condition</code> is specified and sibling <code>KeyPrefixEquals</code> is not specified. If both are specified, then both must be true for the redirect to be applied.</details>"
              }
            ]
          }
        ]
      },
      {
        "name": "redirect_all_requests_to",
        "type": "object",
        "description": "<details><summary>The redirect behavior for every request to this bucket's website endpoint.</summary>If you specify this property, you can't specify any other property.</details>",
        "children": [
          {
            "name": "host_name",
            "type": "string",
            "description": "Name of the host where requests are redirected."
          },
          {
            "name": "protocol",
            "type": "string",
            "description": "Protocol to use when redirecting requests. The default is the protocol that is used in the original request."
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the specified resource."
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "dual_stack_domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "regional_domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "website_url",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "bucket_name",
    "type": "string",
    "description": "<details><summary>A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html\">Amazon S3 bucket restrictions and limitations</a>. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html\">Rules for naming Amazon S3 buckets</a> in the <i>Amazon S3 User Guide</i>.</summary>If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html"><code>AWS::S3::Bucket</code></a>.

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
    <td><code>buckets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="BucketName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>buckets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>buckets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>buckets</code></td>
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

Gets all properties from an individual <code>bucket</code>.
```sql
SELECT
  region,
  accelerate_configuration,
  access_control,
  analytics_configurations,
  bucket_encryption,
  bucket_name,
  cors_configuration,
  intelligent_tiering_configurations,
  inventory_configurations,
  lifecycle_configuration,
  logging_configuration,
  metrics_configurations,
  metadata_table_configuration,
  metadata_configuration,
  notification_configuration,
  object_lock_configuration,
  object_lock_enabled,
  ownership_controls,
  public_access_block_configuration,
  replication_configuration,
  tags,
  versioning_configuration,
  website_configuration,
  arn,
  domain_name,
  dual_stack_domain_name,
  regional_domain_name,
  website_url
FROM awscc.s3.buckets
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ bucket_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>buckets</code> in a region.
```sql
SELECT
  region,
  bucket_name
FROM awscc.s3.buckets_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.buckets (
  BucketName,
  region
)
SELECT
  '{{ bucket_name }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.buckets (
  AccelerateConfiguration,
  AccessControl,
  AnalyticsConfigurations,
  BucketEncryption,
  BucketName,
  CorsConfiguration,
  IntelligentTieringConfigurations,
  InventoryConfigurations,
  LifecycleConfiguration,
  LoggingConfiguration,
  MetricsConfigurations,
  MetadataTableConfiguration,
  MetadataConfiguration,
  NotificationConfiguration,
  ObjectLockConfiguration,
  ObjectLockEnabled,
  OwnershipControls,
  PublicAccessBlockConfiguration,
  ReplicationConfiguration,
  Tags,
  VersioningConfiguration,
  WebsiteConfiguration,
  region
)
SELECT
  '{{ accelerate_configuration }}',
  '{{ access_control }}',
  '{{ analytics_configurations }}',
  '{{ bucket_encryption }}',
  '{{ bucket_name }}',
  '{{ cors_configuration }}',
  '{{ intelligent_tiering_configurations }}',
  '{{ inventory_configurations }}',
  '{{ lifecycle_configuration }}',
  '{{ logging_configuration }}',
  '{{ metrics_configurations }}',
  '{{ metadata_table_configuration }}',
  '{{ metadata_configuration }}',
  '{{ notification_configuration }}',
  '{{ object_lock_configuration }}',
  '{{ object_lock_enabled }}',
  '{{ ownership_controls }}',
  '{{ public_access_block_configuration }}',
  '{{ replication_configuration }}',
  '{{ tags }}',
  '{{ versioning_configuration }}',
  '{{ website_configuration }}',
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
  - name: bucket
    props:
      - name: accelerate_configuration
        value:
          acceleration_status: '{{ acceleration_status }}'
      - name: access_control
        value: '{{ access_control }}'
      - name: analytics_configurations
        value:
          - tag_filters:
              - value: '{{ value }}'
                key: '{{ key }}'
            storage_class_analysis:
              data_export:
                s3_bucket_destination:
                  output_schema_version: '{{ output_schema_version }}'
                  format: '{{ format }}'
                  account_id: '{{ account_id }}'
                  prefix: '{{ prefix }}'
                  encryption: {}
                  arn: '{{ arn }}'
                cloud_watch_metrics:
                  is_enabled: '{{ is_enabled }}'
            id: '{{ id }}'
            prefix: '{{ prefix }}'
      - name: bucket_encryption
        value:
          server_side_encryption_configuration:
            - bucket_key_enabled: '{{ bucket_key_enabled }}'
              server_side_encryption_by_default:
                kms_master_key_id: '{{ kms_master_key_id }}'
                sse_algorithm: '{{ sse_algorithm }}'
      - name: bucket_name
        value: '{{ bucket_name }}'
      - name: cors_configuration
        value:
          cors_rules:
            - allowed_headers:
                - '{{ allowed_headers[0] }}'
              allowed_methods:
                - '{{ allowed_methods[0] }}'
              allowed_origins:
                - '{{ allowed_origins[0] }}'
              exposed_headers:
                - '{{ exposed_headers[0] }}'
              id: '{{ id }}'
              max_age: '{{ max_age }}'
      - name: intelligent_tiering_configurations
        value:
          - id: '{{ id }}'
            prefix: '{{ prefix }}'
            status: '{{ status }}'
            tag_filters:
              - null
            tierings:
              - access_tier: '{{ access_tier }}'
                days: '{{ days }}'
      - name: inventory_configurations
        value:
          - destination:
              bucket_arn: '{{ bucket_arn }}'
              bucket_account_id: '{{ bucket_account_id }}'
              format: '{{ format }}'
              prefix: '{{ prefix }}'
            enabled: '{{ enabled }}'
            id: '{{ id }}'
            included_object_versions: '{{ included_object_versions }}'
            optional_fields:
              - '{{ optional_fields[0] }}'
            prefix: '{{ prefix }}'
            schedule_frequency: '{{ schedule_frequency }}'
      - name: lifecycle_configuration
        value:
          rules:
            - abort_incomplete_multipart_upload:
                days_after_initiation: '{{ days_after_initiation }}'
              expiration_date: '{{ expiration_date }}'
              expiration_in_days: '{{ expiration_in_days }}'
              expired_object_delete_marker: '{{ expired_object_delete_marker }}'
              id: '{{ id }}'
              noncurrent_version_expiration_in_days: '{{ noncurrent_version_expiration_in_days }}'
              noncurrent_version_expiration:
                noncurrent_days: '{{ noncurrent_days }}'
                newer_noncurrent_versions: '{{ newer_noncurrent_versions }}'
              noncurrent_version_transition:
                storage_class: '{{ storage_class }}'
                transition_in_days: '{{ transition_in_days }}'
                newer_noncurrent_versions: '{{ newer_noncurrent_versions }}'
              noncurrent_version_transitions:
                - null
              prefix: '{{ prefix }}'
              status: '{{ status }}'
              tag_filters:
                - null
              object_size_greater_than: '{{ object_size_greater_than }}'
              object_size_less_than: '{{ object_size_less_than }}'
              transition:
                storage_class: '{{ storage_class }}'
                transition_date: null
                transition_in_days: '{{ transition_in_days }}'
              transitions:
                - null
          transition_default_minimum_object_size: '{{ transition_default_minimum_object_size }}'
      - name: logging_configuration
        value:
          destination_bucket_name: '{{ destination_bucket_name }}'
          log_file_prefix: '{{ log_file_prefix }}'
          target_object_key_format: {}
      - name: metrics_configurations
        value:
          - access_point_arn: '{{ access_point_arn }}'
            id: '{{ id }}'
            prefix: '{{ prefix }}'
            tag_filters:
              - null
      - name: metadata_table_configuration
        value:
          s3_tables_destination:
            table_bucket_arn: '{{ table_bucket_arn }}'
            table_name: '{{ table_name }}'
            table_namespace: '{{ table_namespace }}'
            table_arn: '{{ table_arn }}'
      - name: metadata_configuration
        value:
          destination:
            table_bucket_type: '{{ table_bucket_type }}'
            table_bucket_arn: '{{ table_bucket_arn }}'
            table_namespace: '{{ table_namespace }}'
          journal_table_configuration:
            table_name: '{{ table_name }}'
            table_arn: '{{ table_arn }}'
            record_expiration:
              expiration: '{{ expiration }}'
              days: '{{ days }}'
            encryption_configuration:
              sse_algorithm: '{{ sse_algorithm }}'
              kms_key_arn: '{{ kms_key_arn }}'
          inventory_table_configuration:
            table_name: '{{ table_name }}'
            table_arn: '{{ table_arn }}'
            configuration_state: '{{ configuration_state }}'
            encryption_configuration: null
      - name: notification_configuration
        value:
          event_bridge_configuration:
            event_bridge_enabled: '{{ event_bridge_enabled }}'
          lambda_configurations:
            - event: '{{ event }}'
              filter:
                s3_key:
                  rules:
                    - name: '{{ name }}'
                      value: '{{ value }}'
              function: '{{ function }}'
          queue_configurations:
            - event: '{{ event }}'
              filter: null
              queue: '{{ queue }}'
          topic_configurations:
            - event: '{{ event }}'
              filter: null
              topic: '{{ topic }}'
      - name: object_lock_configuration
        value:
          object_lock_enabled: '{{ object_lock_enabled }}'
          rule:
            default_retention:
              years: '{{ years }}'
              days: '{{ days }}'
              mode: '{{ mode }}'
      - name: object_lock_enabled
        value: '{{ object_lock_enabled }}'
      - name: ownership_controls
        value:
          rules:
            - object_ownership: '{{ object_ownership }}'
      - name: public_access_block_configuration
        value:
          restrict_public_buckets: '{{ restrict_public_buckets }}'
          block_public_policy: '{{ block_public_policy }}'
          block_public_acls: '{{ block_public_acls }}'
          ignore_public_acls: '{{ ignore_public_acls }}'
      - name: replication_configuration
        value:
          role: '{{ role }}'
          rules:
            - delete_marker_replication:
                status: '{{ status }}'
              destination:
                access_control_translation:
                  owner: '{{ owner }}'
                account: '{{ account }}'
                bucket: '{{ bucket }}'
                encryption_configuration:
                  replica_kms_key_id: '{{ replica_kms_key_id }}'
                metrics:
                  event_threshold:
                    minutes: '{{ minutes }}'
                  status: '{{ status }}'
                replication_time:
                  status: '{{ status }}'
                  time: null
                storage_class: '{{ storage_class }}'
              filter:
                and:
                  prefix: '{{ prefix }}'
                  tag_filters:
                    - null
                prefix: '{{ prefix }}'
                tag_filter: null
              id: '{{ id }}'
              prefix: '{{ prefix }}'
              priority: '{{ priority }}'
              source_selection_criteria:
                replica_modifications:
                  status: '{{ status }}'
                sse_kms_encrypted_objects:
                  status: '{{ status }}'
              status: '{{ status }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: versioning_configuration
        value:
          status: '{{ status }}'
      - name: website_configuration
        value:
          error_document: '{{ error_document }}'
          index_document: '{{ index_document }}'
          routing_rules:
            - redirect_rule:
                host_name: '{{ host_name }}'
                http_redirect_code: '{{ http_redirect_code }}'
                protocol: '{{ protocol }}'
                replace_key_prefix_with: '{{ replace_key_prefix_with }}'
                replace_key_with: '{{ replace_key_with }}'
              routing_rule_condition:
                key_prefix_equals: '{{ key_prefix_equals }}'
                http_error_code_returned_equals: '{{ http_error_code_returned_equals }}'
          redirect_all_requests_to:
            host_name: '{{ host_name }}'
            protocol: '{{ protocol }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>bucket</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3.buckets
SET PatchDocument = string('{{ {
    "AccelerateConfiguration": accelerate_configuration,
    "AccessControl": access_control,
    "AnalyticsConfigurations": analytics_configurations,
    "BucketEncryption": bucket_encryption,
    "CorsConfiguration": cors_configuration,
    "IntelligentTieringConfigurations": intelligent_tiering_configurations,
    "InventoryConfigurations": inventory_configurations,
    "LifecycleConfiguration": lifecycle_configuration,
    "LoggingConfiguration": logging_configuration,
    "MetricsConfigurations": metrics_configurations,
    "NotificationConfiguration": notification_configuration,
    "ObjectLockConfiguration": object_lock_configuration,
    "ObjectLockEnabled": object_lock_enabled,
    "OwnershipControls": ownership_controls,
    "PublicAccessBlockConfiguration": public_access_block_configuration,
    "ReplicationConfiguration": replication_configuration,
    "Tags": tags,
    "VersioningConfiguration": versioning_configuration,
    "WebsiteConfiguration": website_configuration
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ bucket_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.buckets
WHERE
  Identifier = '{{ bucket_name }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>buckets</code> resource, the following permissions are required:

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
s3:CreateBucket,
s3:PutBucketTagging,
s3:PutAnalyticsConfiguration,
s3:PutEncryptionConfiguration,
s3:PutBucketCORS,
s3:PutInventoryConfiguration,
s3:PutLifecycleConfiguration,
s3:PutMetricsConfiguration,
s3:PutBucketNotification,
s3:PutBucketReplication,
s3:PutBucketWebsite,
s3:PutAccelerateConfiguration,
s3:PutBucketPublicAccessBlock,
s3:PutReplicationConfiguration,
s3:PutObjectAcl,
s3:PutBucketObjectLockConfiguration,
s3:GetBucketAcl,
s3:ListBucket,
iam:PassRole,
s3:DeleteObject,
s3:PutBucketLogging,
s3:PutBucketVersioning,
s3:PutObjectLockConfiguration,
s3:PutBucketOwnershipControls,
s3:PutIntelligentTieringConfiguration,
s3:GetBucketMetadataTableConfiguration,
s3:CreateBucketMetadataTableConfiguration,
s3tables:CreateNamespace,
s3tables:CreateTable,
s3tables:CreateTableBucket,
s3tables:GetTable,
s3tables:PutTableEncryption,
s3tables:PutTablePolicy,
s3tables:GetTableMetadataLocation,
s3tables:UpdateTableMetadataLocation
```

</TabItem>
<TabItem value="read">

```json
s3:GetAccelerateConfiguration,
s3:GetLifecycleConfiguration,
s3:GetBucketPublicAccessBlock,
s3:GetAnalyticsConfiguration,
s3:GetBucketCORS,
s3:GetEncryptionConfiguration,
s3:GetInventoryConfiguration,
s3:GetBucketLogging,
s3:GetMetricsConfiguration,
s3:GetBucketNotification,
s3:GetBucketVersioning,
s3:GetReplicationConfiguration,
S3:GetBucketWebsite,
s3:GetBucketPublicAccessBlock,
s3:GetBucketObjectLockConfiguration,
s3:GetBucketTagging,
s3:GetBucketOwnershipControls,
s3:GetIntelligentTieringConfiguration,
s3:GetBucketMetadataTableConfiguration,
s3:ListBucket
```

</TabItem>
<TabItem value="update">

```json
s3:PutBucketAcl,
s3:PutBucketTagging,
s3:PutAnalyticsConfiguration,
s3:PutEncryptionConfiguration,
s3:PutBucketCORS,
s3:PutInventoryConfiguration,
s3:PutLifecycleConfiguration,
s3:PutMetricsConfiguration,
s3:PutBucketNotification,
s3:PutBucketReplication,
s3:PutBucketWebsite,
s3:PutAccelerateConfiguration,
s3:GetBucketMetadataTableConfiguration,
s3:DeleteBucketMetadataTableConfiguration,
s3:CreateBucketMetadataTableConfiguration,
s3:UpdateBucketMetadataJournalTableConfiguration,
s3:UpdateBucketMetadataInventoryTableConfiguration,
s3tables:CreateNamespace,
s3tables:CreateTable,
s3tables:CreateTableBucket,
s3tables:GetTable,
s3tables:PutTableEncryption,
s3tables:PutTablePolicy,
s3tables:GetTableMetadataLocation,
s3tables:UpdateTableMetadataLocation,
s3:PutBucketPublicAccessBlock,
s3:PutReplicationConfiguration,
s3:PutBucketOwnershipControls,
s3:PutIntelligentTieringConfiguration,
s3:DeleteBucketWebsite,
s3:PutBucketLogging,
s3:PutBucketVersioning,
s3:PutObjectLockConfiguration,
s3:PutBucketObjectLockConfiguration,
s3:DeleteBucketAnalyticsConfiguration,
s3:DeleteBucketCors,
s3:DeleteBucketMetricsConfiguration,
s3:DeleteBucketEncryption,
s3:DeleteBucketLifecycle,
s3:DeleteBucketReplication,
iam:PassRole,
s3:ListBucket
```

</TabItem>
<TabItem value="delete">

```json
s3:DeleteBucket,
s3:ListBucket
```

</TabItem>
<TabItem value="list">

```json
s3:ListAllMyBuckets
```

</TabItem>
</Tabs>