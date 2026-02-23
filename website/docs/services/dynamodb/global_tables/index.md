---
title: global_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - global_tables
  - dynamodb
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

Creates, updates, deletes or gets a <code>global_table</code> resource or lists <code>global_tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>global_tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dynamodb.global_tables" /></td></tr>
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
    "name": "multi_region_consistency",
    "type": "string",
    "description": ""
  },
  {
    "name": "table_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "sse_specification",
    "type": "object",
    "description": "Represents the settings used to enable server-side encryption.",
    "children": [
      {
        "name": "sse_enabled",
        "type": "boolean",
        "description": "Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to &#96;&#96;KMS&#96;&#96; and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key."
      },
      {
        "name": "sse_type",
        "type": "string",
        "description": "Server-side encryption type. The only supported value is:<br />+ &#96;&#96;KMS&#96;&#96; - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply)."
      },
      {
        "name": "kms_master_key_id",
        "type": "string",
        "description": "The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key &#96;&#96;alias/aws/dynamodb&#96;&#96;."
      }
    ]
  },
  {
    "name": "stream_specification",
    "type": "object",
    "description": "Represents the DynamoDB Streams configuration for a table in DynamoDB.",
    "children": [
      {
        "name": "stream_view_type",
        "type": "string",
        "description": "When an item in the table is modified, &#96;&#96;StreamViewType&#96;&#96; determines what information is written to the stream for this table. Valid values for &#96;&#96;StreamViewType&#96;&#96; are:<br />+ &#96;&#96;KEYS&#95;ONLY&#96;&#96; - Only the key attributes of the modified item are written to the stream.<br />+ &#96;&#96;NEW&#95;IMAGE&#96;&#96; - The entire item, as it appears after it was modified, is written to the stream.<br />+ &#96;&#96;OLD&#95;IMAGE&#96;&#96; - The entire item, as it appeared before it was modified, is written to the stream.<br />+ &#96;&#96;NEW&#95;AND&#95;OLD&#95;IMAGES&#96;&#96; - Both the new and the old item images of the item are written to the stream."
      },
      {
        "name": "resource_policy",
        "type": "object",
        "description": "Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.<br />In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).",
        "children": [
          {
            "name": "policy_document",
            "type": "object",
            "description": "A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html)."
          }
        ]
      }
    ]
  },
  {
    "name": "warm_throughput",
    "type": "object",
    "description": "Provides visibility into the number of read and write operations your table or secondary index can instantaneously support. The settings can be modified using the &#96;&#96;UpdateTable&#96;&#96; operation to meet the throughput requirements of an upcoming peak event.",
    "children": [
      {
        "name": "read_units_per_second",
        "type": "integer",
        "description": "Represents the number of read operations your base table can instantaneously support."
      },
      {
        "name": "write_units_per_second",
        "type": "integer",
        "description": "Represents the number of write operations your base table can instantaneously support."
      }
    ]
  },
  {
    "name": "replicas",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "sse_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "kms_master_key_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "kinesis_stream_specification",
        "type": "object",
        "description": "The Kinesis Data Streams configuration for the specified table.",
        "children": [
          {
            "name": "approximate_creation_date_time_precision",
            "type": "string",
            "description": "The precision for the time and date that the stream was created."
          },
          {
            "name": "stream_arn",
            "type": "string",
            "description": "The ARN for a specific Kinesis data stream.<br />Length Constraints: Minimum length of 37. Maximum length of 1024."
          }
        ]
      },
      {
        "name": "contributor_insights_specification",
        "type": "object",
        "description": "The settings used to enable or disable CloudWatch Contributor Insights.",
        "children": [
          {
            "name": "mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false)."
          }
        ]
      },
      {
        "name": "point_in_time_recovery_specification",
        "type": "object",
        "description": "The settings used to enable point in time recovery.",
        "children": [
          {
            "name": "point_in_time_recovery_enabled",
            "type": "boolean",
            "description": "Indicates whether point in time recovery is enabled (true) or disabled (false) on the table."
          },
          {
            "name": "recovery_period_in_days",
            "type": "integer",
            "description": "The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35."
          }
        ]
      },
      {
        "name": "replica_stream_specification",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "resource_policy",
            "type": "object",
            "description": "Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table, its indexes, and stream. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.<br />In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).<br />While defining resource-based policies in your CFNshort templates, the following considerations apply:<br />+ The maximum size supported for a resource-based policy document in JSON format is 20 KB. DDB counts whitespaces when calculating the size of a policy against this limit. <br />+ Resource-based policies don't support &#91;drift detection&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html#). If you update a policy outside of the CFNshort stack template, you'll need to update the CFNshort stack with the changes.<br />+ Resource-based policies don't support out-of-band changes. If you add, update, or delete a policy outside of the CFNshort template, the change won't be overwritten if there are no changes to the policy within the template.<br />For example, say that your template contains a resource-based policy, which you later update outside of the template. If you don't make any changes to the policy in the template, the updated policy in DDB won’t be synced with the policy in the template.<br />Conversely, say that your template doesn’t contain a resource-based policy, but you add a policy outside of the template. This policy won’t be removed from DDB as long as you don’t add it to the template. When you add a policy to the template and update the stack, the existing policy in DDB will be updated to match the one defined in the template.<br /><br />For a full list of all considerations, see &#91;Resource-based policy considerations&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).",
            "children": [
              {
                "name": "policy_document",
                "type": "object",
                "description": "A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html)."
              }
            ]
          }
        ]
      },
      {
        "name": "global_secondary_indexes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "index_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "read_provisioned_throughput_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "read_capacity_units",
                "type": "integer",
                "description": ""
              },
              {
                "name": "read_capacity_auto_scaling_settings",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "read_on_demand_throughput_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "max_read_request_units",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "region",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_policy",
        "type": "object",
        "description": "Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table, its indexes, and stream. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.<br />In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).<br />While defining resource-based policies in your CFNshort templates, the following considerations apply:<br />+ The maximum size supported for a resource-based policy document in JSON format is 20 KB. DDB counts whitespaces when calculating the size of a policy against this limit. <br />+ Resource-based policies don't support &#91;drift detection&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html#). If you update a policy outside of the CFNshort stack template, you'll need to update the CFNshort stack with the changes.<br />+ Resource-based policies don't support out-of-band changes. If you add, update, or delete a policy outside of the CFNshort template, the change won't be overwritten if there are no changes to the policy within the template.<br />For example, say that your template contains a resource-based policy, which you later update outside of the template. If you don't make any changes to the policy in the template, the updated policy in DDB won’t be synced with the policy in the template.<br />Conversely, say that your template doesn’t contain a resource-based policy, but you add a policy outside of the template. This policy won’t be removed from DDB as long as you don’t add it to the template. When you add a policy to the template and update the stack, the existing policy in DDB will be updated to match the one defined in the template.<br /><br />For a full list of all considerations, see &#91;Resource-based policy considerations&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).",
        "children": [
          {
            "name": "policy_document",
            "type": "object",
            "description": "A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html)."
          }
        ]
      },
      {
        "name": "read_provisioned_throughput_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "read_capacity_units",
            "type": "integer",
            "description": ""
          },
          {
            "name": "read_capacity_auto_scaling_settings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "min_capacity",
                "type": "integer",
                "description": ""
              },
              {
                "name": "seed_capacity",
                "type": "integer",
                "description": ""
              },
              {
                "name": "target_tracking_scaling_policy_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "max_capacity",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "table_class",
        "type": "string",
        "description": ""
      },
      {
        "name": "deletion_protection_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "tags",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The value of the tag. Tag values are case-sensitive and can be null."
          },
          {
            "name": "key",
            "type": "string",
            "description": "The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value."
          }
        ]
      },
      {
        "name": "read_on_demand_throughput_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_read_request_units",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "write_provisioned_throughput_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "write_capacity_auto_scaling_settings",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "min_capacity",
            "type": "integer",
            "description": ""
          },
          {
            "name": "seed_capacity",
            "type": "integer",
            "description": ""
          },
          {
            "name": "target_tracking_scaling_policy_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "scale_out_cooldown",
                "type": "integer",
                "description": ""
              },
              {
                "name": "target_value",
                "type": "number",
                "description": ""
              },
              {
                "name": "disable_scale_in",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "scale_in_cooldown",
                "type": "integer",
                "description": ""
              }
            ]
          },
          {
            "name": "max_capacity",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "write_on_demand_throughput_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "max_write_request_units",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "global_table_witnesses",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "region",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "table_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "attribute_definitions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "attribute_type",
        "type": "string",
        "description": "The data type for the attribute, where:<br />+ &#96;&#96;S&#96;&#96; - the attribute is of type String<br />+ &#96;&#96;N&#96;&#96; - the attribute is of type Number<br />+ &#96;&#96;B&#96;&#96; - the attribute is of type Binary"
      },
      {
        "name": "attribute_name",
        "type": "string",
        "description": "A name for the attribute."
      }
    ]
  },
  {
    "name": "billing_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "global_secondary_indexes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "index_name",
        "type": "string",
        "description": "The name of the global secondary index. The name must be unique among all other indexes on this table."
      },
      {
        "name": "on_demand_throughput",
        "type": "object",
        "description": "The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify &#96;&#96;MaxReadRequestUnits&#96;&#96;, &#96;&#96;MaxWriteRequestUnits&#96;&#96;, or both. You must use either &#96;&#96;OnDemandThroughput&#96;&#96; or &#96;&#96;ProvisionedThroughput&#96;&#96; based on your table's capacity mode.",
        "children": [
          {
            "name": "max_read_request_units",
            "type": "integer",
            "description": "Maximum number of read request units for the specified table.<br />To specify a maximum &#96;&#96;OnDemandThroughput&#96;&#96; on your table, set the value of &#96;&#96;MaxReadRequestUnits&#96;&#96; as greater than or equal to 1. To remove the maximum &#96;&#96;OnDemandThroughput&#96;&#96; that is currently set on your table, set the value of &#96;&#96;MaxReadRequestUnits&#96;&#96; to -1."
          },
          {
            "name": "max_write_request_units",
            "type": "integer",
            "description": "Maximum number of write request units for the specified table.<br />To specify a maximum &#96;&#96;OnDemandThroughput&#96;&#96; on your table, set the value of &#96;&#96;MaxWriteRequestUnits&#96;&#96; as greater than or equal to 1. To remove the maximum &#96;&#96;OnDemandThroughput&#96;&#96; that is currently set on your table, set the value of &#96;&#96;MaxWriteRequestUnits&#96;&#96; to -1."
          }
        ]
      },
      {
        "name": "contributor_insights_specification",
        "type": "object",
        "description": "The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.",
        "children": [
          {
            "name": "mode",
            "type": "string",
            "description": ""
          },
          {
            "name": "enabled",
            "type": "boolean",
            "description": "Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false)."
          }
        ]
      },
      {
        "name": "projection",
        "type": "object",
        "description": "Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.",
        "children": [
          {
            "name": "non_key_attributes",
            "type": "array",
            "description": "Represents the non-key attribute names which will be projected into the index.<br />For global and local secondary indexes, the total count of &#96;&#96;NonKeyAttributes&#96;&#96; summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of &#96;&#96;INCLUDE&#96;&#96;. You still can specify the ProjectionType of &#96;&#96;ALL&#96;&#96; to project all attributes from the source table, even if the table has more than 100 attributes."
          },
          {
            "name": "projection_type",
            "type": "string",
            "description": "The set of attributes that are projected into the index:<br />+ &#96;&#96;KEYS&#95;ONLY&#96;&#96; - Only the index and primary keys are projected into the index.<br />+ &#96;&#96;INCLUDE&#96;&#96; - In addition to the attributes described in &#96;&#96;KEYS&#95;ONLY&#96;&#96;, the secondary index will include other non-key attributes that you specify.<br />+ &#96;&#96;ALL&#96;&#96; - All of the table attributes are projected into the index.<br /><br />When using the DynamoDB console, &#96;&#96;ALL&#96;&#96; is selected by default."
          }
        ]
      },
      {
        "name": "provisioned_throughput",
        "type": "object",
        "description": "Represents the provisioned throughput settings for the specified global secondary index. You must use either &#96;&#96;OnDemandThroughput&#96;&#96; or &#96;&#96;ProvisionedThroughput&#96;&#96; based on your table's capacity mode.<br />For current minimum and maximum provisioned throughput values, see &#91;Service, Account, and Table Quotas&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the &#42;Amazon DynamoDB Developer Guide&#42;.",
        "children": [
          {
            "name": "write_capacity_units",
            "type": "integer",
            "description": "The maximum number of writes consumed per second before DynamoDB returns a &#96;&#96;ThrottlingException&#96;&#96;. For more information, see &#91;Specifying Read and Write Requirements&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the &#42;Amazon DynamoDB Developer Guide&#42;.<br />If read/write capacity mode is &#96;&#96;PAY&#95;PER&#95;REQUEST&#96;&#96; the value is set to 0."
          },
          {
            "name": "read_capacity_units",
            "type": "integer",
            "description": "The maximum number of strongly consistent reads consumed per second before DynamoDB returns a &#96;&#96;ThrottlingException&#96;&#96;. For more information, see &#91;Specifying Read and Write Requirements&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the &#42;Amazon DynamoDB Developer Guide&#42;.<br />If read/write capacity mode is &#96;&#96;PAY&#95;PER&#95;REQUEST&#96;&#96; the value is set to 0."
          }
        ]
      },
      {
        "name": "key_schema",
        "type": "array",
        "description": "The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:<br />+ &#96;&#96;HASH&#96;&#96; - partition key<br />+ &#96;&#96;RANGE&#96;&#96; - sort key<br /><br />The partition key of an item is also known as its &#42;hash attribute&#42;. The term \"hash attribute\" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.<br />The sort key of an item is also known as its &#42;range attribute&#42;. The term \"range attribute\" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.",
        "children": [
          {
            "name": "key_type",
            "type": "string",
            "description": "The role that this key attribute will assume:<br />+ &#96;&#96;HASH&#96;&#96; - partition key<br />+ &#96;&#96;RANGE&#96;&#96; - sort key<br /><br />The partition key of an item is also known as its &#42;hash attribute&#42;. The term \"hash attribute\" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.<br />The sort key of an item is also known as its &#42;range attribute&#42;. The term \"range attribute\" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value."
          },
          {
            "name": "attribute_name",
            "type": "string",
            "description": "The name of a key attribute."
          }
        ]
      }
    ]
  },
  {
    "name": "key_schema",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key_type",
        "type": "string",
        "description": "The role that this key attribute will assume:<br />+ &#96;&#96;HASH&#96;&#96; - partition key<br />+ &#96;&#96;RANGE&#96;&#96; - sort key<br /><br />The partition key of an item is also known as its &#42;hash attribute&#42;. The term \"hash attribute\" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.<br />The sort key of an item is also known as its &#42;range attribute&#42;. The term \"range attribute\" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value."
      },
      {
        "name": "attribute_name",
        "type": "string",
        "description": "The name of a key attribute."
      }
    ]
  },
  {
    "name": "local_secondary_indexes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "index_name",
        "type": "string",
        "description": "The name of the local secondary index. The name must be unique among all other indexes on this table."
      },
      {
        "name": "projection",
        "type": "object",
        "description": "Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.",
        "children": [
          {
            "name": "non_key_attributes",
            "type": "array",
            "description": "Represents the non-key attribute names which will be projected into the index.<br />For global and local secondary indexes, the total count of &#96;&#96;NonKeyAttributes&#96;&#96; summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of &#96;&#96;INCLUDE&#96;&#96;. You still can specify the ProjectionType of &#96;&#96;ALL&#96;&#96; to project all attributes from the source table, even if the table has more than 100 attributes."
          },
          {
            "name": "projection_type",
            "type": "string",
            "description": "The set of attributes that are projected into the index:<br />+ &#96;&#96;KEYS&#95;ONLY&#96;&#96; - Only the index and primary keys are projected into the index.<br />+ &#96;&#96;INCLUDE&#96;&#96; - In addition to the attributes described in &#96;&#96;KEYS&#95;ONLY&#96;&#96;, the secondary index will include other non-key attributes that you specify.<br />+ &#96;&#96;ALL&#96;&#96; - All of the table attributes are projected into the index.<br /><br />When using the DynamoDB console, &#96;&#96;ALL&#96;&#96; is selected by default."
          }
        ]
      },
      {
        "name": "key_schema",
        "type": "array",
        "description": "The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:<br />+ &#96;&#96;HASH&#96;&#96; - partition key<br />+ &#96;&#96;RANGE&#96;&#96; - sort key<br /><br />The partition key of an item is also known as its &#42;hash attribute&#42;. The term \"hash attribute\" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.<br />The sort key of an item is also known as its &#42;range attribute&#42;. The term \"range attribute\" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "stream_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "time_to_live_specification",
    "type": "object",
    "description": "Represents the settings used to enable or disable Time to Live (TTL) for the specified table.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Indicates whether TTL is to be enabled (true) or disabled (false) on the table."
      },
      {
        "name": "attribute_name",
        "type": "string",
        "description": "The name of the TTL attribute used to store the expiration time for items in the table.<br />+ The &#96;&#96;AttributeName&#96;&#96; property is required when enabling the TTL, or when TTL is already enabled.<br />+ To update this property, you must first disable TTL and then enable TTL with the new attribute name."
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
    "name": "table_name",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html"><code>AWS::DynamoDB::GlobalTable</code></a>.

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
    <td><code>global_tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeySchema, AttributeDefinitions, Replicas, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>global_tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>global_tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>global_tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>global_tables</code></td>
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

Gets all properties from an individual <code>global_table</code>.
```sql
SELECT
region,
multi_region_consistency,
table_id,
sse_specification,
stream_specification,
warm_throughput,
replicas,
write_provisioned_throughput_settings,
write_on_demand_throughput_settings,
global_table_witnesses,
table_name,
attribute_definitions,
billing_mode,
global_secondary_indexes,
key_schema,
local_secondary_indexes,
arn,
stream_arn,
time_to_live_specification
FROM awscc.dynamodb.global_tables
WHERE region = 'us-east-1' AND Identifier = '{{ table_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>global_tables</code> in a region.
```sql
SELECT
region,
table_name
FROM awscc.dynamodb.global_tables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>global_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dynamodb.global_tables (
 Replicas,
 AttributeDefinitions,
 KeySchema,
 region
)
SELECT
'{{ replicas }}',
 '{{ attribute_definitions }}',
 '{{ key_schema }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dynamodb.global_tables (
 MultiRegionConsistency,
 SSESpecification,
 StreamSpecification,
 WarmThroughput,
 Replicas,
 WriteProvisionedThroughputSettings,
 WriteOnDemandThroughputSettings,
 GlobalTableWitnesses,
 TableName,
 AttributeDefinitions,
 BillingMode,
 GlobalSecondaryIndexes,
 KeySchema,
 LocalSecondaryIndexes,
 TimeToLiveSpecification,
 region
)
SELECT
 '{{ multi_region_consistency }}',
 '{{ sse_specification }}',
 '{{ stream_specification }}',
 '{{ warm_throughput }}',
 '{{ replicas }}',
 '{{ write_provisioned_throughput_settings }}',
 '{{ write_on_demand_throughput_settings }}',
 '{{ global_table_witnesses }}',
 '{{ table_name }}',
 '{{ attribute_definitions }}',
 '{{ billing_mode }}',
 '{{ global_secondary_indexes }}',
 '{{ key_schema }}',
 '{{ local_secondary_indexes }}',
 '{{ time_to_live_specification }}',
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
  - name: global_table
    props:
      - name: multi_region_consistency
        value: '{{ multi_region_consistency }}'
      - name: sse_specification
        value:
          sse_enabled: '{{ sse_enabled }}'
          sse_type: '{{ sse_type }}'
          kms_master_key_id: '{{ kms_master_key_id }}'
      - name: stream_specification
        value:
          stream_view_type: '{{ stream_view_type }}'
          resource_policy:
            policy_document: {}
      - name: warm_throughput
        value:
          read_units_per_second: '{{ read_units_per_second }}'
          write_units_per_second: '{{ write_units_per_second }}'
      - name: replicas
        value:
          - sse_specification:
              kms_master_key_id: '{{ kms_master_key_id }}'
            kinesis_stream_specification:
              approximate_creation_date_time_precision: '{{ approximate_creation_date_time_precision }}'
              stream_arn: '{{ stream_arn }}'
            contributor_insights_specification:
              mode: '{{ mode }}'
              enabled: '{{ enabled }}'
            point_in_time_recovery_specification:
              point_in_time_recovery_enabled: '{{ point_in_time_recovery_enabled }}'
              recovery_period_in_days: '{{ recovery_period_in_days }}'
            replica_stream_specification:
              resource_policy: null
            global_secondary_indexes:
              - index_name: '{{ index_name }}'
                contributor_insights_specification: null
                read_provisioned_throughput_settings:
                  read_capacity_units: '{{ read_capacity_units }}'
                  read_capacity_auto_scaling_settings:
                    min_capacity: '{{ min_capacity }}'
                    seed_capacity: '{{ seed_capacity }}'
                    target_tracking_scaling_policy_configuration:
                      scale_out_cooldown: '{{ scale_out_cooldown }}'
                      target_value: null
                      disable_scale_in: '{{ disable_scale_in }}'
                      scale_in_cooldown: '{{ scale_in_cooldown }}'
                    max_capacity: '{{ max_capacity }}'
                read_on_demand_throughput_settings:
                  max_read_request_units: '{{ max_read_request_units }}'
            region: '{{ region }}'
            resource_policy: null
            read_provisioned_throughput_settings: null
            table_class: '{{ table_class }}'
            deletion_protection_enabled: '{{ deletion_protection_enabled }}'
            tags:
              - value: '{{ value }}'
                key: '{{ key }}'
            read_on_demand_throughput_settings: null
      - name: write_provisioned_throughput_settings
        value:
          write_capacity_auto_scaling_settings: null
      - name: write_on_demand_throughput_settings
        value:
          max_write_request_units: '{{ max_write_request_units }}'
      - name: global_table_witnesses
        value:
          - region: '{{ region }}'
      - name: table_name
        value: '{{ table_name }}'
      - name: attribute_definitions
        value:
          - attribute_type: '{{ attribute_type }}'
            attribute_name: '{{ attribute_name }}'
      - name: billing_mode
        value: '{{ billing_mode }}'
      - name: global_secondary_indexes
        value:
          - index_name: '{{ index_name }}'
            on_demand_throughput:
              max_read_request_units: '{{ max_read_request_units }}'
              max_write_request_units: '{{ max_write_request_units }}'
            contributor_insights_specification: null
            projection:
              non_key_attributes:
                - '{{ non_key_attributes[0] }}'
              projection_type: '{{ projection_type }}'
            provisioned_throughput:
              write_capacity_units: '{{ write_capacity_units }}'
              read_capacity_units: '{{ read_capacity_units }}'
            key_schema:
              - key_type: '{{ key_type }}'
                attribute_name: '{{ attribute_name }}'
            warm_throughput: null
      - name: key_schema
        value:
          - null
      - name: local_secondary_indexes
        value:
          - index_name: '{{ index_name }}'
            projection: null
            key_schema:
              - null
      - name: time_to_live_specification
        value:
          enabled: '{{ enabled }}'
          attribute_name: '{{ attribute_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>global_table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.dynamodb.global_tables
SET PatchDocument = string('{{ {
    "MultiRegionConsistency": multi_region_consistency,
    "SSESpecification": sse_specification,
    "StreamSpecification": stream_specification,
    "WarmThroughput": warm_throughput,
    "Replicas": replicas,
    "WriteProvisionedThroughputSettings": write_provisioned_throughput_settings,
    "WriteOnDemandThroughputSettings": write_on_demand_throughput_settings,
    "GlobalTableWitnesses": global_table_witnesses,
    "AttributeDefinitions": attribute_definitions,
    "BillingMode": billing_mode,
    "GlobalSecondaryIndexes": global_secondary_indexes,
    "TimeToLiveSpecification": time_to_live_specification
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ table_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dynamodb.global_tables
WHERE Identifier = '{{ table_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>global_tables</code> resource, the following permissions are required:

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
dynamodb:Describe*,
dynamodb:GetResourcePolicy,
application-autoscaling:Describe*,
cloudwatch:PutMetricData,
dynamodb:ListTagsOfResource,
kms:DescribeKey
```

</TabItem>
<TabItem value="create">

```json
dynamodb:CreateTable,
dynamodb:CreateTableReplica,
dynamodb:Describe*,
dynamodb:UpdateTimeToLive,
dynamodb:UpdateContributorInsights,
dynamodb:UpdateContinuousBackups,
dynamodb:ListTagsOfResource,
dynamodb:Query,
dynamodb:Scan,
dynamodb:UpdateItem,
dynamodb:PutItem,
dynamodb:GetItem,
dynamodb:DeleteItem,
dynamodb:BatchWriteItem,
dynamodb:TagResource,
dynamodb:EnableKinesisStreamingDestination,
dynamodb:DisableKinesisStreamingDestination,
dynamodb:UpdateTableReplicaAutoScaling,
dynamodb:TagResource,
dynamodb:GetResourcePolicy,
dynamodb:PutResourcePolicy,
application-autoscaling:DeleteScalingPolicy,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:Describe*,
application-autoscaling:PutScalingPolicy,
application-autoscaling:PutScheduledAction,
application-autoscaling:RegisterScalableTarget,
kinesis:ListStreams,
kinesis:DescribeStream,
kinesis:PutRecords,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:Decrypt,
kms:RevokeGrant,
cloudwatch:PutMetricData,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="update">

```json
dynamodb:Describe*,
dynamodb:CreateTableReplica,
dynamodb:UpdateTable,
dynamodb:UpdateTimeToLive,
dynamodb:UpdateContinuousBackups,
dynamodb:UpdateContributorInsights,
dynamodb:ListTagsOfResource,
dynamodb:Query,
dynamodb:Scan,
dynamodb:UpdateItem,
dynamodb:PutItem,
dynamodb:GetItem,
dynamodb:DeleteItem,
dynamodb:BatchWriteItem,
dynamodb:DeleteTable,
dynamodb:DeleteTableReplica,
dynamodb:UpdateItem,
dynamodb:TagResource,
dynamodb:UntagResource,
dynamodb:EnableKinesisStreamingDestination,
dynamodb:DisableKinesisStreamingDestination,
dynamodb:UpdateTableReplicaAutoScaling,
dynamodb:UpdateKinesisStreamingDestination,
dynamodb:GetResourcePolicy,
dynamodb:PutResourcePolicy,
dynamodb:DeleteResourcePolicy,
application-autoscaling:DeleteScalingPolicy,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:Describe*,
application-autoscaling:PutScalingPolicy,
application-autoscaling:PutScheduledAction,
application-autoscaling:RegisterScalableTarget,
kinesis:ListStreams,
kinesis:DescribeStream,
kinesis:PutRecords,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:RevokeGrant,
cloudwatch:PutMetricData
```

</TabItem>
<TabItem value="list">

```json
dynamodb:ListTables,
cloudwatch:PutMetricData
```

</TabItem>
<TabItem value="delete">

```json
dynamodb:Describe*,
dynamodb:DeleteTable,
application-autoscaling:DeleteScalingPolicy,
application-autoscaling:DeleteScheduledAction,
application-autoscaling:DeregisterScalableTarget,
application-autoscaling:Describe*,
application-autoscaling:PutScalingPolicy,
application-autoscaling:PutScheduledAction,
application-autoscaling:RegisterScalableTarget
```

</TabItem>
</Tabs>