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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::S3::Bucket&#96;&#96; resource creates an Amazon S3 bucket in the same AWS Region where you create the AWS CloudFormation stack.<br />To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to &#42;retain&#42; the bucket or to &#42;delete&#42; the bucket. For more information, see &#91;DeletionPolicy Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).<br />You can only delete empty buckets. Deletion fails for buckets that have contents.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.buckets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "accelerate_configuration",
    "type": "object",
    "description": "Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see &#91;Amazon S3 Transfer Acceleration&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the &#42;Amazon S3 User Guide&#42;.",
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
    "description": "This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see &#91;Controlling object ownership&#93;(https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the &#42;Amazon S3 User Guide&#42;.<br />A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see &#91;Canned ACL&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the &#42;Amazon S3 User Guide&#42;.<br />S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the &#91;AWS::S3::OwnershipControls&#93;(https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.<br />The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see &#91;AWS::S3::BucketPolicy&#93;(https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html). For examples of common policy configurations, including S3 Server Access Logs buckets and more, see &#91;Bucket policy examples&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the &#42;Amazon S3 User Guide&#42;."
  },
  {
    "name": "analytics_configurations",
    "type": "array",
    "description": "Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.",
    "children": [
      {
        "name": "tag_filters",
        "type": "array",
        "description": "The tags to use when evaluating an analytics filter.<br />The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.",
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
    "description": "Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see &#91;Amazon S3 Default Encryption for S3 Buckets&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the &#42;Amazon S3 User Guide&#42;.",
    "children": [
      {
        "name": "server_side_encryption_configuration",
        "type": "array",
        "description": "Specifies the default server-side-encryption configuration.",
        "children": [
          {
            "name": "bucket_key_enabled",
            "type": "boolean",
            "description": "Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the &#96;&#96;BucketKeyEnabled&#96;&#96; element to &#96;&#96;true&#96;&#96; causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.<br />For more information, see &#91;Amazon S3 Bucket Keys&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the &#42;Amazon S3 User Guide&#42;."
          },
          {
            "name": "server_side_encryption_by_default",
            "type": "object",
            "description": "Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.",
            "children": [
              {
                "name": "kms_master_key_id",
                "type": "string",
                "description": "AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. <br />+ &#42;General purpose buckets&#42; - This parameter is allowed if and only if &#96;&#96;SSEAlgorithm&#96;&#96; is set to &#96;&#96;aws:kms&#96;&#96; or &#96;&#96;aws:kms:dsse&#96;&#96;.<br />+ &#42;Directory buckets&#42; - This parameter is allowed if and only if &#96;&#96;SSEAlgorithm&#96;&#96; is set to &#96;&#96;aws:kms&#96;&#96;.<br /><br />You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.<br />+ Key ID: &#96;&#96;1234abcd-12ab-34cd-56ef-1234567890ab&#96;&#96;<br />+ Key ARN: &#96;&#96;arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab&#96;&#96;<br />+ Key Alias: &#96;&#96;alias/alias-name&#96;&#96;<br /><br />If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see &#91;Using encryption for cross-account operations&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy).<br />+ &#42;General purpose buckets&#42; - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log. <br />+ &#42;Directory buckets&#42; - When you specify an &#91;customer managed key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.<br /><br />Amazon S3 only supports symmetric encryption KMS keys. For more information, see &#91;Asymmetric keys in KMS&#93;(https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the &#42;Key Management Service Developer Guide&#42;."
              },
              {
                "name": "sse_algorithm",
                "type": "string",
                "description": "Server-side encryption algorithm to use for the default encryption.<br />For directory buckets, there are only two supported values for server-side encryption: &#96;&#96;AES256&#96;&#96; and &#96;&#96;aws:kms&#96;&#96;."
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
    "description": "A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow &#91;Amazon S3 bucket restrictions and limitations&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). For more information, see &#91;Rules for naming Amazon S3 buckets&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the &#42;Amazon S3 User Guide&#42;. <br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name."
  },
  {
    "name": "cors_configuration",
    "type": "object",
    "description": "Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see &#91;Enabling Cross-Origin Resource Sharing&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the &#42;Amazon S3 User Guide&#42;.",
    "children": [
      {
        "name": "cors_rules",
        "type": "array",
        "description": "A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.",
        "children": [
          {
            "name": "allowed_headers",
            "type": "array",
            "description": "Headers that are specified in the &#96;&#96;Access-Control-Request-Headers&#96;&#96; header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed."
          },
          {
            "name": "allowed_methods",
            "type": "array",
            "description": "An HTTP method that you allow the origin to run.<br />&#42;Allowed values&#42;: &#96;&#96;GET&#96;&#96; &#124; &#96;&#96;PUT&#96;&#96; &#124; &#96;&#96;HEAD&#96;&#96; &#124; &#96;&#96;POST&#96;&#96; &#124; &#96;&#96;DELETE&#96;&#96;"
          },
          {
            "name": "allowed_origins",
            "type": "array",
            "description": "One or more origins you want customers to be able to access the bucket from."
          },
          {
            "name": "exposed_headers",
            "type": "array",
            "description": "One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript &#96;&#96;XMLHttpRequest&#96;&#96; object)."
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
        "description": "Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: &#96;&#96;ARCHIVE&#95;ACCESS&#96;&#96; and &#96;&#96;DEEP&#95;ARCHIVE&#95;ACCESS&#96;&#96;.<br />You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.",
        "children": [
          {
            "name": "access_tier",
            "type": "string",
            "description": "S3 Intelligent-Tiering access tier. See &#91;Storage class for automatically optimizing frequently and infrequently accessed objects&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class."
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
    "description": "Specifies the inventory configuration for an Amazon S3 bucket. For more information, see &#91;GET Bucket inventory&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the &#42;Amazon S3 API Reference&#42;.",
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
            "description": "The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.<br />Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes."
          },
          {
            "name": "format",
            "type": "string",
            "description": "Specifies the file format used when exporting data to Amazon S3.<br />&#42;Allowed values&#42;: &#96;&#96;CSV&#96;&#96; &#124; &#96;&#96;ORC&#96;&#96; &#124; &#96;&#96;Parquet&#96;&#96;"
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
        "description": "Specifies whether the inventory is enabled or disabled. If set to &#96;&#96;True&#96;&#96;, an inventory list is generated. If set to &#96;&#96;False&#96;&#96;, no inventory list is generated."
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID used to identify the inventory configuration."
      },
      {
        "name": "included_object_versions",
        "type": "string",
        "description": "Object versions to include in the inventory list. If set to &#96;&#96;All&#96;&#96;, the list includes all the object versions, which adds the version-related fields &#96;&#96;VersionId&#96;&#96;, &#96;&#96;IsLatest&#96;&#96;, and &#96;&#96;DeleteMarker&#96;&#96; to the list. If set to &#96;&#96;Current&#96;&#96;, the list does not contain these version-related fields."
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
    "description": "Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see &#91;Object Lifecycle Management&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the &#42;Amazon S3 User Guide&#42;.",
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
            "description": "Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions. If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with &#96;&#96;ExpirationInDays&#96;&#96;, &#96;&#96;ExpirationDate&#96;&#96;, or &#96;&#96;TagFilters&#96;&#96;."
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
                "description": "Specifies the number of days an object is noncurrent before S3 can perform the associated action. For information about the noncurrent days calculations, see &#91;How Amazon S3 Calculates When an Object Became Noncurrent&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the &#42;Amazon S3 User Guide&#42;."
              },
              {
                "name": "newer_noncurrent_versions",
                "type": "integer",
                "description": "Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see &#91;Lifecycle configuration elements&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the &#42;Amazon S3 User Guide&#42;."
              }
            ]
          },
          {
            "name": "noncurrent_version_transition",
            "type": "object",
            "description": "(Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the &#96;&#96;NoncurrentVersionTransitions&#96;&#96; property.",
            "children": [
              {
                "name": "storage_class",
                "type": "string",
                "description": "The class of storage used to store the object."
              },
              {
                "name": "transition_in_days",
                "type": "integer",
                "description": "Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see &#91;How Amazon S3 Calculates How Long an Object Has Been Noncurrent&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the &#42;Amazon S3 User Guide&#42;."
              },
              {
                "name": "newer_noncurrent_versions",
                "type": "integer",
                "description": "Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see &#91;Lifecycle configuration elements&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the &#42;Amazon S3 User Guide&#42;."
              }
            ]
          },
          {
            "name": "noncurrent_version_transitions",
            "type": "array",
            "description": "For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the &#96;&#96;NoncurrentVersionTransition&#96;&#96; property."
          },
          {
            "name": "prefix",
            "type": "string",
            "description": "Object key prefix that identifies one or more objects to which this rule applies.<br />Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see &#91;XML related object key constraints&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints)."
          },
          {
            "name": "status",
            "type": "string",
            "description": "If &#96;&#96;Enabled&#96;&#96;, the rule is currently being applied. If &#96;&#96;Disabled&#96;&#96;, the rule is not currently being applied."
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
            "description": "Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see &#91;Lifecycle configuration using size-based rules&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the &#42;Amazon S3 User Guide&#42;."
          },
          {
            "name": "object_size_less_than",
            "type": "string",
            "description": "Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see &#91;Lifecycle configuration using size-based rules&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the &#42;Amazon S3 User Guide&#42;."
          },
          {
            "name": "transition",
            "type": "object",
            "description": "(Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the &#96;&#96;Transitions&#96;&#96; property.",
            "children": [
              {
                "name": "storage_class",
                "type": "string",
                "description": "The storage class to which you want the object to transition."
              },
              {
                "name": "transition_in_days",
                "type": "integer",
                "description": "Indicates the number of days after creation when objects are transitioned to the specified storage class. If the specified storage class is &#96;&#96;INTELLIGENT&#95;TIERING&#96;&#96;, &#96;&#96;GLACIER&#95;IR&#96;&#96;, &#96;&#96;GLACIER&#96;&#96;, or &#96;&#96;DEEP&#95;ARCHIVE&#96;&#96;, valid values are &#96;&#96;0&#96;&#96; or positive integers. If the specified storage class is &#96;&#96;STANDARD&#95;IA&#96;&#96; or &#96;&#96;ONEZONE&#95;IA&#96;&#96;, valid values are positive integers greater than &#96;&#96;30&#96;&#96;. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see &#91;Constraints and considerations for transitions&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the &#42;Amazon S3 User Guide&#42;."
              }
            ]
          },
          {
            "name": "transitions",
            "type": "array",
            "description": "One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the &#96;&#96;Transition&#96;&#96; property."
          }
        ]
      },
      {
        "name": "transition_default_minimum_object_size",
        "type": "string",
        "description": "Indicates which default minimum object size behavior is applied to the lifecycle configuration.<br />This parameter applies to general purpose buckets only. It isn't supported for directory bucket lifecycle configurations.<br />+ &#96;&#96;all&#95;storage&#95;classes&#95;128K&#96;&#96; - Objects smaller than 128 KB will not transition to any storage class by default.<br />+ &#96;&#96;varies&#95;by&#95;storage&#95;class&#96;&#96; - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB. <br /><br />To customize the minimum object size for any transition you can add a filter that specifies a custom &#96;&#96;ObjectSizeGreaterThan&#96;&#96; or &#96;&#96;ObjectSizeLessThan&#96;&#96; in the body of your transition rule. Custom filters always take precedence over the default transition behavior."
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
        "description": "The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the &#96;&#96;LoggingConfiguration&#96;&#96; property is defined."
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
    "description": "Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see &#91;PutBucketMetricsConfiguration&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html).",
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
        "description": "The destination information for the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket. The specified metadata table name must be unique within the &#96;&#96;aws&#95;s3&#95;metadata&#96;&#96; namespace in the destination table bucket.",
        "children": [
          {
            "name": "table_bucket_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket."
          },
          {
            "name": "table_name",
            "type": "string",
            "description": "The name for the metadata table in your metadata table configuration. The specified metadata table name must be unique within the &#96;&#96;aws&#95;s3&#95;metadata&#96;&#96; namespace in the destination table bucket."
          },
          {
            "name": "table_namespace",
            "type": "string",
            "description": "The table bucket namespace for the metadata table in your metadata table configuration. This value is always &#96;&#96;aws&#95;s3&#95;metadata&#96;&#96;."
          },
          {
            "name": "table_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) for the metadata table in the metadata table configuration. The specified metadata table name must be unique within the &#96;&#96;aws&#95;s3&#95;metadata&#96;&#96; namespace in the destination table bucket."
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
            "description": "The Amazon S3 bucket event for which to invoke the LAMlong function. For more information, see &#91;Supported Event Types&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the &#42;Amazon S3 User Guide&#42;."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The filtering rules that determine which objects invoke the AWS Lambda function. For example, you can create a filter so that only image files with a &#96;&#96;.jpg&#96;&#96; extension invoke the function when they are added to the Amazon S3 bucket.",
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
            "description": "The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. For more information, see &#91;Supported Event Types&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the &#42;Amazon S3 User Guide&#42;."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The filtering rules that determine which objects trigger notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a &#96;&#96;.jpg&#96;&#96; extension are added to the bucket. For more information, see &#91;Configuring event notifications using object key name filtering&#93;(https://docs.aws.amazon.com/AmazonS3/latest/user-guide/notification-how-to-filtering.html) in the &#42;Amazon S3 User Guide&#42;.",
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
            "description": "The Amazon S3 bucket event about which to send notifications. For more information, see &#91;Supported Event Types&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the &#42;Amazon S3 User Guide&#42;."
          },
          {
            "name": "filter",
            "type": "object",
            "description": "The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a &#96;&#96;.jpg&#96;&#96; extension are added to the bucket.",
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
    "description": "This operation is not supported for directory buckets.<br />Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see &#91;Locking Objects&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). <br />+ The &#96;&#96;DefaultRetention&#96;&#96; settings require both a mode and a period.<br />+ The &#96;&#96;DefaultRetention&#96;&#96; period can be either &#96;&#96;Days&#96;&#96; or &#96;&#96;Years&#96;&#96; but you must select one. You cannot specify &#96;&#96;Days&#96;&#96; and &#96;&#96;Years&#96;&#96; at the same time.<br />+ You can enable Object Lock for new or existing buckets. For more information, see &#91;Configuring Object Lock&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html).",
    "children": [
      {
        "name": "object_lock_enabled",
        "type": "string",
        "description": "Indicates whether this bucket has an Object Lock configuration enabled. Enable &#96;&#96;ObjectLockEnabled&#96;&#96; when you apply &#96;&#96;ObjectLockConfiguration&#96;&#96; to a bucket."
      },
      {
        "name": "rule",
        "type": "object",
        "description": "Specifies the Object Lock rule for the specified object. Enable this rule when you apply &#96;&#96;ObjectLockConfiguration&#96;&#96; to a bucket. If Object Lock is turned on, bucket settings require both &#96;&#96;Mode&#96;&#96; and a period of either &#96;&#96;Days&#96;&#96; or &#96;&#96;Years&#96;&#96;. You cannot specify &#96;&#96;Days&#96;&#96; and &#96;&#96;Years&#96;&#96; at the same time. For more information, see &#91;ObjectLockRule&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html) and &#91;DefaultRetention&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).",
        "children": [
          {
            "name": "default_retention",
            "type": "object",
            "description": "The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both &#96;&#96;Mode&#96;&#96; and a period of either &#96;&#96;Days&#96;&#96; or &#96;&#96;Years&#96;&#96;. You cannot specify &#96;&#96;Days&#96;&#96; and &#96;&#96;Years&#96;&#96; at the same time. For more information about allowable values for mode and period, see &#91;DefaultRetention&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).",
            "children": [
              {
                "name": "years",
                "type": "integer",
                "description": "The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify &#96;&#96;Mode&#96;&#96; and specify either &#96;&#96;Days&#96;&#96; or &#96;&#96;Years&#96;&#96;."
              },
              {
                "name": "days",
                "type": "integer",
                "description": "The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify &#96;&#96;Mode&#96;&#96; and specify either &#96;&#96;Days&#96;&#96; or &#96;&#96;Years&#96;&#96;."
              },
              {
                "name": "mode",
                "type": "string",
                "description": "The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify &#96;&#96;Mode&#96;&#96; and specify either &#96;&#96;Days&#96;&#96; or &#96;&#96;Years&#96;&#96;."
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
    "description": "Indicates whether this bucket has an Object Lock configuration enabled. Enable &#96;&#96;ObjectLockEnabled&#96;&#96; when you apply &#96;&#96;ObjectLockConfiguration&#96;&#96; to a bucket."
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
        "description": "Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.<br />Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked."
      },
      {
        "name": "block_public_policy",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies."
      },
      {
        "name": "block_public_acls",
        "type": "boolean",
        "description": "Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:<br />- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.<br />- PUT Object calls fail if the request includes a public ACL.<br />. - PUT Bucket calls fail if the request includes a public ACL.<br />Enabling this setting doesn't affect existing policies or ACLs."
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
    "description": "Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the &#96;&#96;VersioningConfiguration&#96;&#96; property.<br />Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.",
    "children": [
      {
        "name": "role",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAMlong (IAM) role that Amazon S3 assumes when replicating objects. For more information, see &#91;How to Set Up Replication&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the &#42;Amazon S3 User Guide&#42;."
      },
      {
        "name": "rules",
        "type": "array",
        "description": "A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.",
        "children": [
          {
            "name": "delete_marker_replication",
            "type": "object",
            "description": "Specifies whether Amazon S3 replicates delete markers. If you specify a &#96;&#96;Filter&#96;&#96; in your replication configuration, you must also include a &#96;&#96;DeleteMarkerReplication&#96;&#96; element. If your &#96;&#96;Filter&#96;&#96; includes a &#96;&#96;Tag&#96;&#96; element, the &#96;&#96;DeleteMarkerReplication&#96;&#96;&#96;&#96;Status&#96;&#96; must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see &#91;Basic Rule Configuration&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config). <br />For more information about delete marker replication, see &#91;Basic Rule Configuration&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html). <br />If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see &#91;Backward Compatibility&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).",
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
                "description": "Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS-account that owns the destination bucket by specifying the &#96;&#96;AccessControlTranslation&#96;&#96; property, this is the account ID of the destination bucket owner. For more information, see &#91;Cross-Region Replication Additional Configuration: Change Replica Owner&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html) in the &#42;Amazon S3 User Guide&#42;.<br />If you specify the &#96;&#96;AccessControlTranslation&#96;&#96; property, the &#96;&#96;Account&#96;&#96; property is required."
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
                "description": "A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a &#96;&#96;Metrics&#96;&#96; block."
              },
              {
                "name": "storage_class",
                "type": "string",
                "description": "The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica. <br />For valid values, see the &#96;&#96;StorageClass&#96;&#96; element of the &#91;PUT Bucket replication&#93;(https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the &#42;Amazon S3 API Reference&#42;."
              }
            ]
          },
          {
            "name": "filter",
            "type": "object",
            "description": "A filter that identifies the subset of objects to which the replication rule applies. A &#96;&#96;Filter&#96;&#96; must specify exactly one &#96;&#96;Prefix&#96;&#96;, &#96;&#96;TagFilter&#96;&#96;, or an &#96;&#96;And&#96;&#96; child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.<br />V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the &#96;&#96;Prefix&#96;&#96; directly as a child element of the &#96;&#96;Rule&#96;&#96; element.",
            "children": [
              {
                "name": "and",
                "type": "object",
                "description": "A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: <br />+ If you specify both a &#96;&#96;Prefix&#96;&#96; and a &#96;&#96;TagFilter&#96;&#96;, wrap these filters in an &#96;&#96;And&#96;&#96; tag.<br />+ If you specify a filter based on multiple tags, wrap the &#96;&#96;TagFilter&#96;&#96; elements in an &#96;&#96;And&#96;&#96; tag."
              },
              {
                "name": "prefix",
                "type": "string",
                "description": "An object key name prefix that identifies the subset of objects to which the rule applies.<br />Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see &#91;XML related object key constraints&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints)."
              },
              {
                "name": "tag_filter",
                "type": "object",
                "description": "A container for specifying a tag key and value. <br />The rule applies only to objects that have the tag in their tag set."
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
            "description": "An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the &#96;&#96;Prefix&#96;&#96; directly as a child element of the &#96;&#96;Rule&#96;&#96; element.<br />Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see &#91;XML related object key constraints&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints)."
          },
          {
            "name": "priority",
            "type": "integer",
            "description": "The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority. <br />For more information, see &#91;Replication&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the &#42;Amazon S3 User Guide&#42;."
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
    "description": "Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.<br />When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (&#96;&#96;PUT&#96;&#96; or &#96;&#96;DELETE&#96;&#96;) on objects in the bucket.",
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
    "description": "Information used to configure the bucket as a static website. For more information, see &#91;Hosting Websites on Amazon S3&#93;(https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).",
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
                "description": "The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix &#96;&#96;docs/&#96;&#96; (objects in the &#96;&#96;docs/&#96;&#96; folder) to &#96;&#96;documents/&#96;&#96;, you can set a condition block with &#96;&#96;KeyPrefixEquals&#96;&#96; set to &#96;&#96;docs/&#96;&#96; and in the Redirect set &#96;&#96;ReplaceKeyPrefixWith&#96;&#96; to &#96;&#96;/documents&#96;&#96;. Not required if one of the siblings is present. Can be present only if &#96;&#96;ReplaceKeyWith&#96;&#96; is not provided.<br />Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see &#91;XML related object key constraints&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints)."
              },
              {
                "name": "replace_key_with",
                "type": "string",
                "description": "The specific object key to use in the redirect request. For example, redirect request to &#96;&#96;error.html&#96;&#96;. Not required if one of the siblings is present. Can be present only if &#96;&#96;ReplaceKeyPrefixWith&#96;&#96; is not provided.<br />Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see &#91;XML related object key constraints&#93;(https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints)."
              }
            ]
          },
          {
            "name": "routing_rule_condition",
            "type": "object",
            "description": "A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the &#96;&#96;/docs&#96;&#96; folder, redirect to the &#96;&#96;/documents&#96;&#96; folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.",
            "children": [
              {
                "name": "key_prefix_equals",
                "type": "string",
                "description": "The object key name prefix when the redirect is applied. For example, to redirect requests for &#96;&#96;ExamplePage.html&#96;&#96;, the key prefix will be &#96;&#96;ExamplePage.html&#96;&#96;. To redirect request for all pages with the prefix &#96;&#96;docs/&#96;&#96;, the key prefix will be &#96;&#96;docs/&#96;&#96;, which identifies all objects in the docs/ folder.<br />Required when the parent element &#96;&#96;Condition&#96;&#96; is specified and sibling &#96;&#96;HttpErrorCodeReturnedEquals&#96;&#96; is not specified. If both conditions are specified, both must be true for the redirect to be applied."
              },
              {
                "name": "http_error_code_returned_equals",
                "type": "string",
                "description": "The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied.<br />Required when parent element &#96;&#96;Condition&#96;&#96; is specified and sibling &#96;&#96;KeyPrefixEquals&#96;&#96; is not specified. If both are specified, then both must be true for the redirect to be applied."
              }
            ]
          }
        ]
      },
      {
        "name": "redirect_all_requests_to",
        "type": "object",
        "description": "The redirect behavior for every request to this bucket's website endpoint.<br />If you specify this property, you can't specify any other property.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html"><code>AWS::S3::Bucket</code></a>.

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
    <td><CopyableCode code="BucketName, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<BucketName>';
```

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
'{{ BucketName }}',
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
 '{{ AccelerateConfiguration }}',
 '{{ AccessControl }}',
 '{{ AnalyticsConfigurations }}',
 '{{ BucketEncryption }}',
 '{{ BucketName }}',
 '{{ CorsConfiguration }}',
 '{{ IntelligentTieringConfigurations }}',
 '{{ InventoryConfigurations }}',
 '{{ LifecycleConfiguration }}',
 '{{ LoggingConfiguration }}',
 '{{ MetricsConfigurations }}',
 '{{ MetadataTableConfiguration }}',
 '{{ MetadataConfiguration }}',
 '{{ NotificationConfiguration }}',
 '{{ ObjectLockConfiguration }}',
 '{{ ObjectLockEnabled }}',
 '{{ OwnershipControls }}',
 '{{ PublicAccessBlockConfiguration }}',
 '{{ ReplicationConfiguration }}',
 '{{ Tags }}',
 '{{ VersioningConfiguration }}',
 '{{ WebsiteConfiguration }}',
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
      - name: AccelerateConfiguration
        value:
          AccelerationStatus: '{{ AccelerationStatus }}'
      - name: AccessControl
        value: '{{ AccessControl }}'
      - name: AnalyticsConfigurations
        value:
          - TagFilters:
              - Value: '{{ Value }}'
                Key: '{{ Key }}'
            StorageClassAnalysis:
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
            Id: '{{ Id }}'
            Prefix: '{{ Prefix }}'
      - name: BucketEncryption
        value:
          ServerSideEncryptionConfiguration:
            - BucketKeyEnabled: '{{ BucketKeyEnabled }}'
              ServerSideEncryptionByDefault:
                KMSMasterKeyID: '{{ KMSMasterKeyID }}'
                SSEAlgorithm: '{{ SSEAlgorithm }}'
      - name: BucketName
        value: '{{ BucketName }}'
      - name: CorsConfiguration
        value:
          CorsRules:
            - AllowedHeaders:
                - '{{ AllowedHeaders[0] }}'
              AllowedMethods:
                - '{{ AllowedMethods[0] }}'
              AllowedOrigins:
                - '{{ AllowedOrigins[0] }}'
              ExposedHeaders:
                - '{{ ExposedHeaders[0] }}'
              Id: '{{ Id }}'
              MaxAge: '{{ MaxAge }}'
      - name: IntelligentTieringConfigurations
        value:
          - Id: '{{ Id }}'
            Prefix: '{{ Prefix }}'
            Status: '{{ Status }}'
            TagFilters:
              - null
            Tierings:
              - AccessTier: '{{ AccessTier }}'
                Days: '{{ Days }}'
      - name: InventoryConfigurations
        value:
          - Destination:
              BucketArn: '{{ BucketArn }}'
              BucketAccountId: '{{ BucketAccountId }}'
              Format: '{{ Format }}'
              Prefix: '{{ Prefix }}'
            Enabled: '{{ Enabled }}'
            Id: '{{ Id }}'
            IncludedObjectVersions: '{{ IncludedObjectVersions }}'
            OptionalFields:
              - '{{ OptionalFields[0] }}'
            Prefix: '{{ Prefix }}'
            ScheduleFrequency: '{{ ScheduleFrequency }}'
      - name: LifecycleConfiguration
        value:
          Rules:
            - AbortIncompleteMultipartUpload:
                DaysAfterInitiation: '{{ DaysAfterInitiation }}'
              ExpirationDate: '{{ ExpirationDate }}'
              ExpirationInDays: '{{ ExpirationInDays }}'
              ExpiredObjectDeleteMarker: '{{ ExpiredObjectDeleteMarker }}'
              Id: '{{ Id }}'
              NoncurrentVersionExpirationInDays: '{{ NoncurrentVersionExpirationInDays }}'
              NoncurrentVersionExpiration:
                NoncurrentDays: '{{ NoncurrentDays }}'
                NewerNoncurrentVersions: '{{ NewerNoncurrentVersions }}'
              NoncurrentVersionTransition:
                StorageClass: '{{ StorageClass }}'
                TransitionInDays: '{{ TransitionInDays }}'
                NewerNoncurrentVersions: '{{ NewerNoncurrentVersions }}'
              NoncurrentVersionTransitions:
                - null
              Prefix: '{{ Prefix }}'
              Status: '{{ Status }}'
              TagFilters:
                - null
              ObjectSizeGreaterThan: '{{ ObjectSizeGreaterThan }}'
              ObjectSizeLessThan: '{{ ObjectSizeLessThan }}'
              Transition:
                StorageClass: '{{ StorageClass }}'
                TransitionDate: null
                TransitionInDays: '{{ TransitionInDays }}'
              Transitions:
                - null
          TransitionDefaultMinimumObjectSize: '{{ TransitionDefaultMinimumObjectSize }}'
      - name: LoggingConfiguration
        value:
          DestinationBucketName: '{{ DestinationBucketName }}'
          LogFilePrefix: '{{ LogFilePrefix }}'
          TargetObjectKeyFormat: {}
      - name: MetricsConfigurations
        value:
          - AccessPointArn: '{{ AccessPointArn }}'
            Id: '{{ Id }}'
            Prefix: '{{ Prefix }}'
            TagFilters:
              - null
      - name: MetadataTableConfiguration
        value:
          S3TablesDestination:
            TableBucketArn: '{{ TableBucketArn }}'
            TableName: '{{ TableName }}'
            TableNamespace: '{{ TableNamespace }}'
            TableArn: '{{ TableArn }}'
      - name: MetadataConfiguration
        value:
          Destination:
            TableBucketType: '{{ TableBucketType }}'
            TableBucketArn: '{{ TableBucketArn }}'
            TableNamespace: '{{ TableNamespace }}'
          JournalTableConfiguration:
            TableName: '{{ TableName }}'
            TableArn: '{{ TableArn }}'
            RecordExpiration:
              Expiration: '{{ Expiration }}'
              Days: '{{ Days }}'
            EncryptionConfiguration:
              SseAlgorithm: '{{ SseAlgorithm }}'
              KmsKeyArn: '{{ KmsKeyArn }}'
          InventoryTableConfiguration:
            TableName: '{{ TableName }}'
            TableArn: '{{ TableArn }}'
            ConfigurationState: '{{ ConfigurationState }}'
            EncryptionConfiguration: null
      - name: NotificationConfiguration
        value:
          EventBridgeConfiguration:
            EventBridgeEnabled: '{{ EventBridgeEnabled }}'
          LambdaConfigurations:
            - Event: '{{ Event }}'
              Filter:
                S3Key:
                  Rules:
                    - Name: '{{ Name }}'
                      Value: '{{ Value }}'
              Function: '{{ Function }}'
          QueueConfigurations:
            - Event: '{{ Event }}'
              Filter: null
              Queue: '{{ Queue }}'
          TopicConfigurations:
            - Event: '{{ Event }}'
              Filter: null
              Topic: '{{ Topic }}'
      - name: ObjectLockConfiguration
        value:
          ObjectLockEnabled: '{{ ObjectLockEnabled }}'
          Rule:
            DefaultRetention:
              Years: '{{ Years }}'
              Days: '{{ Days }}'
              Mode: '{{ Mode }}'
      - name: ObjectLockEnabled
        value: '{{ ObjectLockEnabled }}'
      - name: OwnershipControls
        value:
          Rules:
            - ObjectOwnership: '{{ ObjectOwnership }}'
      - name: PublicAccessBlockConfiguration
        value:
          RestrictPublicBuckets: '{{ RestrictPublicBuckets }}'
          BlockPublicPolicy: '{{ BlockPublicPolicy }}'
          BlockPublicAcls: '{{ BlockPublicAcls }}'
          IgnorePublicAcls: '{{ IgnorePublicAcls }}'
      - name: ReplicationConfiguration
        value:
          Role: '{{ Role }}'
          Rules:
            - DeleteMarkerReplication:
                Status: '{{ Status }}'
              Destination:
                AccessControlTranslation:
                  Owner: '{{ Owner }}'
                Account: '{{ Account }}'
                Bucket: '{{ Bucket }}'
                EncryptionConfiguration:
                  ReplicaKmsKeyID: '{{ ReplicaKmsKeyID }}'
                Metrics:
                  EventThreshold:
                    Minutes: '{{ Minutes }}'
                  Status: '{{ Status }}'
                ReplicationTime:
                  Status: '{{ Status }}'
                  Time: null
                StorageClass: '{{ StorageClass }}'
              Filter:
                And:
                  Prefix: '{{ Prefix }}'
                  TagFilters:
                    - null
                Prefix: '{{ Prefix }}'
                TagFilter: null
              Id: '{{ Id }}'
              Prefix: '{{ Prefix }}'
              Priority: '{{ Priority }}'
              SourceSelectionCriteria:
                ReplicaModifications:
                  Status: '{{ Status }}'
                SseKmsEncryptedObjects:
                  Status: '{{ Status }}'
              Status: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: VersioningConfiguration
        value:
          Status: '{{ Status }}'
      - name: WebsiteConfiguration
        value:
          ErrorDocument: '{{ ErrorDocument }}'
          IndexDocument: '{{ IndexDocument }}'
          RoutingRules:
            - RedirectRule:
                HostName: '{{ HostName }}'
                HttpRedirectCode: '{{ HttpRedirectCode }}'
                Protocol: '{{ Protocol }}'
                ReplaceKeyPrefixWith: '{{ ReplaceKeyPrefixWith }}'
                ReplaceKeyWith: '{{ ReplaceKeyWith }}'
              RoutingRuleCondition:
                KeyPrefixEquals: '{{ KeyPrefixEquals }}'
                HttpErrorCodeReturnedEquals: '{{ HttpErrorCodeReturnedEquals }}'
          RedirectAllRequestsTo:
            HostName: '{{ HostName }}'
            Protocol: '{{ Protocol }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.buckets
WHERE data__Identifier = '<BucketName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>buckets</code> resource, the following permissions are required:

### Create
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

### Read
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

### Update
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

### Delete
```json
s3:DeleteBucket,
s3:ListBucket
```

### List
```json
s3:ListAllMyBuckets
```
