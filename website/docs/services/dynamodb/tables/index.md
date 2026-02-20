---
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
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

Creates, updates, deletes or gets a <code>table</code> resource or lists <code>tables</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tables</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::DynamoDB::Table&#96;&#96; resource creates a DDB table. For more information, see &#91;CreateTable&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API&#95;CreateTable.html) in the &#42;API Reference&#42;.<br />You should be aware of the following behaviors when working with DDB tables:<br />+ CFNlong typically creates DDB tables in parallel. However, if your template includes multiple DDB tables with indexes, you must declare dependencies so that the tables are created sequentially. DDBlong limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DDB returns an error and the stack operation fails. For an example, see &#91;DynamoDB Table with a DependsOn Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table--examples--DynamoDB&#95;Table&#95;with&#95;a&#95;DependsOn&#95;Attribute).<br /><br />Our guidance is to use the latest schema documented for your CFNlong templates. This schema supports the provisioning of all table settings below. When using this schema in your CFNlong templates, please ensure that your Identity and Access Management (IAM) policies are updated with appropriate permissions to allow for the authorization of these setting changes.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dynamodb.tables" /></td></tr>
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
    "name": "on_demand_throughput",
    "type": "object",
    "description": "Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify &#96;&#96;MaxReadRequestUnits&#96;&#96;, &#96;&#96;MaxWriteRequestUnits&#96;&#96;, or both.",
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
    "name": "sse_specification",
    "type": "object",
    "description": "Specifies the settings to enable server-side encryption.",
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
    "name": "stream_specification",
    "type": "object",
    "description": "The settings for the DDB table stream, which capture changes to items stored in the table.",
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
    "name": "contributor_insights_specification",
    "type": "object",
    "description": "The settings used to enable or disable CloudWatch Contributor Insights for the specified table.",
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
    "name": "import_source_specification",
    "type": "object",
    "description": "Specifies the properties of data being imported from the S3 bucket source to the\" table.<br />If you specify the &#96;&#96;ImportSourceSpecification&#96;&#96; property, and also specify either the &#96;&#96;StreamSpecification&#96;&#96;, the &#96;&#96;TableClass&#96;&#96; property, the &#96;&#96;DeletionProtectionEnabled&#96;&#96; property, or the &#96;&#96;WarmThroughput&#96;&#96; property, the IAM entity creating/updating stack must have &#96;&#96;UpdateTable&#96;&#96; permission.",
    "children": [
      {
        "name": "s3_bucket_source",
        "type": "object",
        "description": "The S3 bucket that provides the source for the import.",
        "children": [
          {
            "name": "s3_bucket",
            "type": "string",
            "description": "The S3 bucket that is being imported from."
          },
          {
            "name": "s3_key_prefix",
            "type": "string",
            "description": "The key prefix shared by all S3 Objects that are being imported."
          },
          {
            "name": "s3_bucket_owner",
            "type": "string",
            "description": "The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional."
          }
        ]
      },
      {
        "name": "input_format",
        "type": "string",
        "description": "The format of the source data. Valid values for &#96;&#96;ImportFormat&#96;&#96; are &#96;&#96;CSV&#96;&#96;, &#96;&#96;DYNAMODB&#95;JSON&#96;&#96; or &#96;&#96;ION&#96;&#96;."
      },
      {
        "name": "input_format_options",
        "type": "object",
        "description": "Additional properties that specify how the input is formatted,",
        "children": [
          {
            "name": "csv",
            "type": "object",
            "description": "The options for imported source files in CSV format. The values are Delimiter and HeaderList.",
            "children": [
              {
                "name": "delimiter",
                "type": "string",
                "description": "The delimiter used for separating items in the CSV file being imported."
              },
              {
                "name": "header_list",
                "type": "array",
                "description": "List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header."
              }
            ]
          }
        ]
      },
      {
        "name": "input_compression_type",
        "type": "string",
        "description": "Type of compression to be used on the input coming from the imported table."
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
    "name": "provisioned_throughput",
    "type": "object",
    "description": "Throughput for the specified table, which consists of values for &#96;&#96;ReadCapacityUnits&#96;&#96; and &#96;&#96;WriteCapacityUnits&#96;&#96;. For more information about the contents of a provisioned throughput structure, see &#91;Amazon DynamoDB Table ProvisionedThroughput&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API&#95;ProvisionedThroughput.html). <br />If you set &#96;&#96;BillingMode&#96;&#96; as &#96;&#96;PROVISIONED&#96;&#96;, you must specify this property. If you set &#96;&#96;BillingMode&#96;&#96; as &#96;&#96;PAY&#95;PER&#95;REQUEST&#96;&#96;, you cannot specify this property.",
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
    "name": "warm_throughput",
    "type": "object",
    "description": "Represents the warm throughput (in read units per second and write units per second) for creating a table.",
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
    "name": "table_name",
    "type": "string",
    "description": "A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "attribute_definitions",
    "type": "array",
    "description": "A list of attributes that describe the key schema for the table and indexes.<br />This property is required to create a DDB table.<br />Update requires: &#91;Some interruptions&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.",
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
    "description": "Specify how you are charged for read and write throughput and how you manage capacity.<br />Valid values include:<br />+ &#96;&#96;PAY&#95;PER&#95;REQUEST&#96;&#96; - We recommend using &#96;&#96;PAY&#95;PER&#95;REQUEST&#96;&#96; for most DynamoDB workloads. &#96;&#96;PAY&#95;PER&#95;REQUEST&#96;&#96; sets the billing mode to &#91;On-demand capacity mode&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html). <br />+ &#96;&#96;PROVISIONED&#96;&#96; - We recommend using &#96;&#96;PROVISIONED&#96;&#96; for steady workloads with predictable growth where capacity requirements can be reliably forecasted. &#96;&#96;PROVISIONED&#96;&#96; sets the billing mode to &#91;Provisioned capacity mode&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html).<br /><br />If not specified, the default is &#96;&#96;PROVISIONED&#96;&#96;."
  },
  {
    "name": "global_secondary_indexes",
    "type": "array",
    "description": "Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.<br />If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is &#96;&#96;ACTIVE&#96;&#96;. You can track its status by using the DynamoDB &#91;DescribeTable&#93;(https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.<br />If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index. <br />Updates are not supported. The following are exceptions:<br />+ If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.<br />+ You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.",
    "children": [
      {
        "name": "index_name",
        "type": "string",
        "description": "The name of the global secondary index. The name must be unique among all other indexes on this table."
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
    "name": "resource_policy",
    "type": "object",
    "description": "An AWS resource-based policy document in JSON format that will be attached to the table.<br />When you attach a resource-based policy while creating a table, the policy application is &#42;strongly consistent&#42;.<br />The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see &#91;Resource-based policy considerations&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).<br />You need to specify the &#96;&#96;CreateTable&#96;&#96; and &#96;&#96;PutResourcePolicy&#96;&#96; IAM actions for authorizing a user to create a table with a resource-based policy.",
    "children": [
      {
        "name": "policy_document",
        "type": "object",
        "description": "A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see &#91;Using resource-based policies for&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and &#91;Resource-based policy examples&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html)."
      }
    ]
  },
  {
    "name": "key_schema",
    "type": "object",
    "description": "Specifies the attributes that make up the primary key for the table. The attributes in the &#96;&#96;KeySchema&#96;&#96; property must also be defined in the &#96;&#96;AttributeDefinitions&#96;&#96; property."
  },
  {
    "name": "local_secondary_indexes",
    "type": "array",
    "description": "Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.",
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
        "description": "The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:<br />+ &#96;&#96;HASH&#96;&#96; - partition key<br />+ &#96;&#96;RANGE&#96;&#96; - sort key<br /><br />The partition key of an item is also known as its &#42;hash attribute&#42;. The term \"hash attribute\" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.<br />The sort key of an item is also known as its &#42;range attribute&#42;. The term \"range attribute\" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.",
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
    "name": "deletion_protection_enabled",
    "type": "boolean",
    "description": "Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see &#91;Using deletion protection&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the &#42;Developer Guide&#42;."
  },
  {
    "name": "table_class",
    "type": "string",
    "description": "The table class of the new table. Valid values are &#96;&#96;STANDARD&#96;&#96; and &#96;&#96;STANDARD&#95;INFREQUENT&#95;ACCESS&#96;&#96;."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.<br />For more information, see &#91;Tag&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
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
    "name": "time_to_live_specification",
    "type": "object",
    "description": "Specifies the Time to Live (TTL) settings for the table.<br />For detailed information about the limits in DynamoDB, see &#91;Limits in Amazon DynamoDB&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.",
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
    "description": "A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html"><code>AWS::DynamoDB::Table</code></a>.

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
    <td><code>tables</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KeySchema, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>tables</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>tables</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>tables_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>tables</code></td>
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

Gets all properties from an individual <code>table</code>.
```sql
SELECT
region,
on_demand_throughput,
sse_specification,
kinesis_stream_specification,
stream_specification,
contributor_insights_specification,
import_source_specification,
point_in_time_recovery_specification,
provisioned_throughput,
warm_throughput,
table_name,
attribute_definitions,
billing_mode,
global_secondary_indexes,
resource_policy,
key_schema,
local_secondary_indexes,
arn,
stream_arn,
deletion_protection_enabled,
table_class,
tags,
time_to_live_specification
FROM awscc.dynamodb.tables
WHERE region = 'us-east-1' AND Identifier = '<TableName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>tables</code> in a region.
```sql
SELECT
region,
table_name
FROM awscc.dynamodb.tables_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dynamodb.tables (
 KeySchema,
 region
)
SELECT 
'{{ KeySchema }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dynamodb.tables (
 OnDemandThroughput,
 SSESpecification,
 KinesisStreamSpecification,
 StreamSpecification,
 ContributorInsightsSpecification,
 ImportSourceSpecification,
 PointInTimeRecoverySpecification,
 ProvisionedThroughput,
 WarmThroughput,
 TableName,
 AttributeDefinitions,
 BillingMode,
 GlobalSecondaryIndexes,
 ResourcePolicy,
 KeySchema,
 LocalSecondaryIndexes,
 DeletionProtectionEnabled,
 TableClass,
 Tags,
 TimeToLiveSpecification,
 region
)
SELECT 
 '{{ OnDemandThroughput }}',
 '{{ SSESpecification }}',
 '{{ KinesisStreamSpecification }}',
 '{{ StreamSpecification }}',
 '{{ ContributorInsightsSpecification }}',
 '{{ ImportSourceSpecification }}',
 '{{ PointInTimeRecoverySpecification }}',
 '{{ ProvisionedThroughput }}',
 '{{ WarmThroughput }}',
 '{{ TableName }}',
 '{{ AttributeDefinitions }}',
 '{{ BillingMode }}',
 '{{ GlobalSecondaryIndexes }}',
 '{{ ResourcePolicy }}',
 '{{ KeySchema }}',
 '{{ LocalSecondaryIndexes }}',
 '{{ DeletionProtectionEnabled }}',
 '{{ TableClass }}',
 '{{ Tags }}',
 '{{ TimeToLiveSpecification }}',
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
  - name: table
    props:
      - name: OnDemandThroughput
        value:
          MaxReadRequestUnits: '{{ MaxReadRequestUnits }}'
          MaxWriteRequestUnits: '{{ MaxWriteRequestUnits }}'
      - name: SSESpecification
        value:
          SSEEnabled: '{{ SSEEnabled }}'
          SSEType: '{{ SSEType }}'
          KMSMasterKeyId: '{{ KMSMasterKeyId }}'
      - name: KinesisStreamSpecification
        value:
          ApproximateCreationDateTimePrecision: '{{ ApproximateCreationDateTimePrecision }}'
          StreamArn: '{{ StreamArn }}'
      - name: StreamSpecification
        value:
          StreamViewType: '{{ StreamViewType }}'
          ResourcePolicy:
            PolicyDocument: {}
      - name: ContributorInsightsSpecification
        value:
          Mode: '{{ Mode }}'
          Enabled: '{{ Enabled }}'
      - name: ImportSourceSpecification
        value:
          S3BucketSource:
            S3Bucket: '{{ S3Bucket }}'
            S3KeyPrefix: '{{ S3KeyPrefix }}'
            S3BucketOwner: '{{ S3BucketOwner }}'
          InputFormat: '{{ InputFormat }}'
          InputFormatOptions:
            Csv:
              Delimiter: '{{ Delimiter }}'
              HeaderList:
                - '{{ HeaderList[0] }}'
          InputCompressionType: '{{ InputCompressionType }}'
      - name: PointInTimeRecoverySpecification
        value:
          PointInTimeRecoveryEnabled: '{{ PointInTimeRecoveryEnabled }}'
          RecoveryPeriodInDays: '{{ RecoveryPeriodInDays }}'
      - name: ProvisionedThroughput
        value:
          WriteCapacityUnits: '{{ WriteCapacityUnits }}'
          ReadCapacityUnits: '{{ ReadCapacityUnits }}'
      - name: WarmThroughput
        value:
          ReadUnitsPerSecond: '{{ ReadUnitsPerSecond }}'
          WriteUnitsPerSecond: '{{ WriteUnitsPerSecond }}'
      - name: TableName
        value: '{{ TableName }}'
      - name: AttributeDefinitions
        value:
          - AttributeType: '{{ AttributeType }}'
            AttributeName: '{{ AttributeName }}'
      - name: BillingMode
        value: '{{ BillingMode }}'
      - name: GlobalSecondaryIndexes
        value:
          - IndexName: '{{ IndexName }}'
            OnDemandThroughput: null
            ContributorInsightsSpecification: null
            Projection:
              NonKeyAttributes:
                - '{{ NonKeyAttributes[0] }}'
              ProjectionType: '{{ ProjectionType }}'
            ProvisionedThroughput: null
            KeySchema:
              - KeyType: '{{ KeyType }}'
                AttributeName: '{{ AttributeName }}'
            WarmThroughput: null
      - name: ResourcePolicy
        value: null
      - name: KeySchema
        value: null
      - name: LocalSecondaryIndexes
        value:
          - IndexName: '{{ IndexName }}'
            Projection: null
            KeySchema:
              - null
      - name: DeletionProtectionEnabled
        value: '{{ DeletionProtectionEnabled }}'
      - name: TableClass
        value: '{{ TableClass }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: TimeToLiveSpecification
        value:
          Enabled: '{{ Enabled }}'
          AttributeName: '{{ AttributeName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>table</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.dynamodb.tables
SET PatchDocument = string('{{ {
    "OnDemandThroughput": on_demand_throughput,
    "SSESpecification": sse_specification,
    "KinesisStreamSpecification": kinesis_stream_specification,
    "StreamSpecification": stream_specification,
    "ContributorInsightsSpecification": contributor_insights_specification,
    "PointInTimeRecoverySpecification": point_in_time_recovery_specification,
    "ProvisionedThroughput": provisioned_throughput,
    "WarmThroughput": warm_throughput,
    "AttributeDefinitions": attribute_definitions,
    "BillingMode": billing_mode,
    "GlobalSecondaryIndexes": global_secondary_indexes,
    "ResourcePolicy": resource_policy,
    "KeySchema": key_schema,
    "LocalSecondaryIndexes": local_secondary_indexes,
    "DeletionProtectionEnabled": deletion_protection_enabled,
    "TableClass": table_class,
    "Tags": tags,
    "TimeToLiveSpecification": time_to_live_specification
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TableName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dynamodb.tables
WHERE Identifier = '<TableName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tables</code> resource, the following permissions are required:

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
dynamodb:DescribeTable,
dynamodb:DescribeContinuousBackups,
dynamodb:DescribeContributorInsights,
dynamodb:DescribeKinesisStreamingDestination,
dynamodb:ListTagsOfResource,
dynamodb:GetResourcePolicy
```

</TabItem>
<TabItem value="create">

```json
dynamodb:CreateTable,
dynamodb:DescribeImport,
dynamodb:DescribeTable,
dynamodb:DescribeTimeToLive,
dynamodb:UpdateTimeToLive,
dynamodb:UpdateContributorInsights,
dynamodb:UpdateContinuousBackups,
dynamodb:DescribeContinuousBackups,
dynamodb:DescribeContributorInsights,
dynamodb:EnableKinesisStreamingDestination,
dynamodb:DisableKinesisStreamingDestination,
dynamodb:DescribeKinesisStreamingDestination,
dynamodb:ImportTable,
dynamodb:ListTagsOfResource,
dynamodb:TagResource,
dynamodb:UpdateTable,
dynamodb:GetResourcePolicy,
dynamodb:PutResourcePolicy,
kinesis:DescribeStream,
kinesis:PutRecords,
iam:CreateServiceLinkedRole,
kms:CreateGrant,
kms:Decrypt,
kms:DescribeKey,
kms:ListAliases,
kms:Encrypt,
kms:RevokeGrant,
logs:CreateLogGroup,
logs:CreateLogStream,
logs:DescribeLogGroups,
logs:DescribeLogStreams,
logs:PutLogEvents,
logs:PutRetentionPolicy,
s3:GetObject,
s3:GetObjectMetadata,
s3:ListBucket
```

</TabItem>
<TabItem value="update">

```json
dynamodb:UpdateTable,
dynamodb:DescribeTable,
dynamodb:DescribeTimeToLive,
dynamodb:UpdateTimeToLive,
dynamodb:UpdateContinuousBackups,
dynamodb:UpdateContributorInsights,
dynamodb:UpdateKinesisStreamingDestination,
dynamodb:DescribeContinuousBackups,
dynamodb:DescribeKinesisStreamingDestination,
dynamodb:ListTagsOfResource,
dynamodb:TagResource,
dynamodb:UntagResource,
dynamodb:DescribeContributorInsights,
dynamodb:EnableKinesisStreamingDestination,
dynamodb:DisableKinesisStreamingDestination,
dynamodb:GetResourcePolicy,
dynamodb:PutResourcePolicy,
dynamodb:DeleteResourcePolicy,
kinesis:DescribeStream,
kinesis:PutRecords,
iam:CreateServiceLinkedRole,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:RevokeGrant
```

</TabItem>
<TabItem value="list">

```json
dynamodb:ListTables
```

</TabItem>
<TabItem value="delete">

```json
dynamodb:DeleteTable,
dynamodb:DescribeTable
```

</TabItem>
</Tabs>