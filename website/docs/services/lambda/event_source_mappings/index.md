---
title: event_source_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - event_source_mappings
  - lambda
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

Creates, updates, deletes or gets an <code>event_source_mapping</code> resource or lists <code>event_source_mappings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_source_mappings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Lambda::EventSourceMapping&#96;&#96; resource creates a mapping between an event source and an LAMlong function. LAM reads items from the event source and triggers the function.<br />For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source. <br />+ &#91;Configuring a Dynamo DB stream as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping) <br />+ &#91;Configuring a Kinesis stream as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping) <br />+ &#91;Configuring an SQS queue as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource) <br />+ &#91;Configuring an MQ broker as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping) <br />+ &#91;Configuring MSK as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html) <br />+ &#91;Configuring Self-Managed Apache Kafka as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html) <br />+ &#91;Configuring Amazon DocumentDB as an event source&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.event_source_mappings" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "batch_size",
    "type": "integer",
    "description": "The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).<br />+ &#42;Amazon Kinesis&#42; – Default 100. Max 10,000.<br />+ &#42;Amazon DynamoDB Streams&#42; – Default 100. Max 10,000.<br />+ &#42;Amazon Simple Queue Service&#42; – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.<br />+ &#42;Amazon Managed Streaming for Apache Kafka&#42; – Default 100. Max 10,000.<br />+ &#42;Self-managed Apache Kafka&#42; – Default 100. Max 10,000.<br />+ &#42;Amazon MQ (ActiveMQ and RabbitMQ)&#42; – Default 100. Max 10,000.<br />+ &#42;DocumentDB&#42; – Default 100. Max 10,000."
  },
  {
    "name": "bisect_batch_on_function_error",
    "type": "boolean",
    "description": "(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.<br />When using &#96;&#96;BisectBatchOnFunctionError&#96;&#96;, check the &#96;&#96;BatchSize&#96;&#96; parameter in the &#96;&#96;OnFailure&#96;&#96; destination message's metadata. The &#96;&#96;BatchSize&#96;&#96; could be greater than 1 since LAM consolidates failed messages metadata when writing to the &#96;&#96;OnFailure&#96;&#96; destination."
  },
  {
    "name": "destination_config",
    "type": "object",
    "description": "(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.",
    "children": [
      {
        "name": "on_failure",
        "type": "object",
        "description": "The destination configuration for failed invocations.",
        "children": [
          {
            "name": "destination",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the destination resource.<br />To retain records of unsuccessful &#91;asynchronous invocations&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.<br />To retain records of failed invocations from &#91;Kinesis&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), &#91;DynamoDB&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), &#91;self-managed Kafka&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or &#91;Amazon MSK&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination."
          }
        ]
      }
    ]
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": "When true, the event source mapping is active. When false, Lambda pauses polling and invocation.<br />Default: True"
  },
  {
    "name": "event_source_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the event source.<br />+ &#42;Amazon Kinesis&#42; – The ARN of the data stream or a stream consumer.<br />+ &#42;Amazon DynamoDB Streams&#42; – The ARN of the stream.<br />+ &#42;Amazon Simple Queue Service&#42; – The ARN of the queue.<br />+ &#42;Amazon Managed Streaming for Apache Kafka&#42; – The ARN of the cluster or the ARN of the VPC connection (for &#91;cross-account event source mappings&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).<br />+ &#42;Amazon MQ&#42; – The ARN of the broker.<br />+ &#42;Amazon DocumentDB&#42; – The ARN of the DocumentDB change stream."
  },
  {
    "name": "event_source_mapping_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "filter_criteria",
    "type": "object",
    "description": "An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see &#91;Lambda event filtering&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).",
    "children": [
      {
        "name": "filters",
        "type": "array",
        "description": "A list of filters.",
        "children": [
          {
            "name": "pattern",
            "type": "string",
            "description": "A filter pattern. For more information on the syntax of a filter pattern, see &#91;Filter rule syntax&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax)."
          }
        ]
      }
    ]
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's &#91;filter criteria&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics)."
  },
  {
    "name": "function_name",
    "type": "string",
    "description": "The name or ARN of the Lambda function.<br />&#42;&#42;Name formats&#42;&#42;<br />+ &#42;Function name&#42; – &#96;&#96;MyFunction&#96;&#96;.<br />+ &#42;Function ARN&#42; – &#96;&#96;arn:aws:lambda:us-west-2:123456789012:function:MyFunction&#96;&#96;.<br />+ &#42;Version or Alias ARN&#42; – &#96;&#96;arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD&#96;&#96;.<br />+ &#42;Partial ARN&#42; – &#96;&#96;123456789012:function:MyFunction&#96;&#96;.<br /><br />The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length."
  },
  {
    "name": "maximum_batching_window_in_seconds",
    "type": "integer",
    "description": "The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.<br />&#42;Default (, , event sources)&#42;: 0<br />&#42;Default (, Kafka, , event sources)&#42;: 500 ms<br />&#42;Related setting:&#42; For SQS event sources, when you set &#96;&#96;BatchSize&#96;&#96; to a value greater than 10, you must set &#96;&#96;MaximumBatchingWindowInSeconds&#96;&#96; to at least 1."
  },
  {
    "name": "maximum_record_age_in_seconds",
    "type": "integer",
    "description": "(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.<br />The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed"
  },
  {
    "name": "maximum_retry_attempts",
    "type": "integer",
    "description": "(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source."
  },
  {
    "name": "parallelization_factor",
    "type": "integer",
    "description": "(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1."
  },
  {
    "name": "starting_position",
    "type": "string",
    "description": "The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.<br />+ &#42;LATEST&#42; - Read only new records.<br />+ &#42;TRIM&#95;HORIZON&#42; - Process all available records.<br />+ &#42;AT&#95;TIMESTAMP&#42; - Specify a time from which to start reading records."
  },
  {
    "name": "starting_position_timestamp",
    "type": "number",
    "description": "With &#96;&#96;StartingPosition&#96;&#96; set to &#96;&#96;AT&#95;TIMESTAMP&#96;&#96;, the time from which to start reading, in Unix time seconds. &#96;&#96;StartingPositionTimestamp&#96;&#96; cannot be in the future."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to add to the event source mapping.<br />You must have the &#96;&#96;lambda:TagResource&#96;&#96;, &#96;&#96;lambda:UntagResource&#96;&#96;, and &#96;&#96;lambda:ListTags&#96;&#96; permissions for your &#91;principal&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;roles&#95;terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for this tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key for this tag."
      }
    ]
  },
  {
    "name": "topics",
    "type": "array",
    "description": "The name of the Kafka topic."
  },
  {
    "name": "queues",
    "type": "array",
    "description": "(Amazon MQ) The name of the Amazon MQ broker destination queue to consume."
  },
  {
    "name": "source_access_configurations",
    "type": "array",
    "description": "An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of authentication protocol, VPC components, or virtual host for your event source. For example: &#96;&#96;\"Type\":\"SASL&#95;SCRAM&#95;512&#95;AUTH\"&#96;&#96;.<br />+ &#96;&#96;BASIC&#95;AUTH&#96;&#96; – (Amazon MQ) The ASMlong secret that stores your broker credentials.<br />+ &#96;&#96;BASIC&#95;AUTH&#96;&#96; – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.<br />+ &#96;&#96;VPC&#95;SUBNET&#96;&#96; – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.<br />+ &#96;&#96;VPC&#95;SECURITY&#95;GROUP&#96;&#96; – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.<br />+ &#96;&#96;SASL&#95;SCRAM&#95;256&#95;AUTH&#96;&#96; – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.<br />+ &#96;&#96;SASL&#95;SCRAM&#95;512&#95;AUTH&#96;&#96; – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.<br />+ &#96;&#96;VIRTUAL&#95;HOST&#96;&#96; –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.<br />+ &#96;&#96;CLIENT&#95;CERTIFICATE&#95;TLS&#95;AUTH&#96;&#96; – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.<br />+ &#96;&#96;SERVER&#95;ROOT&#95;CA&#95;CERTIFICATE&#96;&#96; – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers."
      },
      {
        "name": "uri",
        "type": "string",
        "description": "The value for your chosen configuration in &#96;&#96;Type&#96;&#96;. For example: &#96;&#96;\"URI\": \"arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName\"&#96;&#96;."
      }
    ]
  },
  {
    "name": "tumbling_window_in_seconds",
    "type": "integer",
    "description": "(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window."
  },
  {
    "name": "function_response_types",
    "type": "array",
    "description": "(Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.<br />Valid Values: &#96;&#96;ReportBatchItemFailures&#96;&#96;"
  },
  {
    "name": "self_managed_event_source",
    "type": "object",
    "description": "The self-managed Apache Kafka cluster for your event source.",
    "children": [
      {
        "name": "endpoints",
        "type": "object",
        "description": "The list of bootstrap servers for your Kafka brokers in the following format: &#96;&#96;\"KafkaBootstrapServers\": &#91;\"abc.xyz.com:xxxx\",\"abc2.xyz.com:xxxx\"&#93;&#96;&#96;.",
        "children": [
          {
            "name": "kafka_bootstrap_servers",
            "type": "array",
            "description": "The list of bootstrap servers for your Kafka brokers in the following format: &#96;&#96;\"KafkaBootstrapServers\": &#91;\"abc.xyz.com:xxxx\",\"abc2.xyz.com:xxxx\"&#93;&#96;&#96;."
          }
        ]
      }
    ]
  },
  {
    "name": "amazon_managed_kafka_event_source_config",
    "type": "object",
    "description": "Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.",
    "children": [
      {
        "name": "consumer_group_id",
        "type": "string",
        "description": "The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see &#91;Customizable consumer group ID&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id)."
      },
      {
        "name": "schema_registry_config",
        "type": "object",
        "description": "Specific configuration settings for a Kafka schema registry.",
        "children": [
          {
            "name": "schema_registry_uri",
            "type": "string",
            "description": "The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.<br />+ For GLU schema registries, use the ARN of the registry.<br />+ For Confluent schema registries, use the URL of the registry."
          },
          {
            "name": "event_record_format",
            "type": "string",
            "description": "The record format that Lambda delivers to your function after schema validation.<br />+ Choose &#96;&#96;JSON&#96;&#96; to have Lambda deliver the record to your function as a standard JSON object.<br />+ Choose &#96;&#96;SOURCE&#96;&#96; to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function."
          },
          {
            "name": "access_configs",
            "type": "array",
            "description": "An array of access configuration objects that tell Lambda how to authenticate with your schema registry.",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of authentication Lambda uses to access your schema registry."
              },
              {
                "name": "uri",
                "type": "string",
                "description": "The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry."
              }
            ]
          },
          {
            "name": "schema_validation_configs",
            "type": "array",
            "description": "An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.",
            "children": [
              {
                "name": "attribute",
                "type": "string",
                "description": "The attributes you want your schema registry to validate and filter for. If you selected &#96;&#96;JSON&#96;&#96; as the &#96;&#96;EventRecordFormat&#96;&#96;, Lambda also deserializes the selected message attributes."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "self_managed_kafka_event_source_config",
    "type": "object",
    "description": "Specific configuration settings for a self-managed Apache Kafka event source.",
    "children": [
      {
        "name": "consumer_group_id",
        "type": "string",
        "description": "The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see &#91;Customizable consumer group ID&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add)."
      },
      {
        "name": "schema_registry_config",
        "type": "object",
        "description": "Specific configuration settings for a Kafka schema registry.",
        "children": [
          {
            "name": "schema_registry_uri",
            "type": "string",
            "description": "The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.<br />+ For GLU schema registries, use the ARN of the registry.<br />+ For Confluent schema registries, use the URL of the registry."
          },
          {
            "name": "event_record_format",
            "type": "string",
            "description": "The record format that Lambda delivers to your function after schema validation.<br />+ Choose &#96;&#96;JSON&#96;&#96; to have Lambda deliver the record to your function as a standard JSON object.<br />+ Choose &#96;&#96;SOURCE&#96;&#96; to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function."
          },
          {
            "name": "access_configs",
            "type": "array",
            "description": "An array of access configuration objects that tell Lambda how to authenticate with your schema registry.",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "The type of authentication Lambda uses to access your schema registry."
              },
              {
                "name": "uri",
                "type": "string",
                "description": "The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry."
              }
            ]
          },
          {
            "name": "schema_validation_configs",
            "type": "array",
            "description": "An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.",
            "children": [
              {
                "name": "attribute",
                "type": "string",
                "description": "The attributes you want your schema registry to validate and filter for. If you selected &#96;&#96;JSON&#96;&#96; as the &#96;&#96;EventRecordFormat&#96;&#96;, Lambda also deserializes the selected message attributes."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "scaling_config",
    "type": "object",
    "description": "(Amazon SQS only) The scaling configuration for the event source. For more information, see &#91;Configuring maximum concurrency for Amazon SQS event sources&#93;(https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).",
    "children": [
      {
        "name": "maximum_concurrency",
        "type": "integer",
        "description": "Limits the number of concurrent instances that the SQS event source can invoke."
      }
    ]
  },
  {
    "name": "document_db_event_source_config",
    "type": "object",
    "description": "Specific configuration settings for a DocumentDB event source.",
    "children": [
      {
        "name": "database_name",
        "type": "string",
        "description": "The name of the database to consume within the DocumentDB cluster."
      },
      {
        "name": "collection_name",
        "type": "string",
        "description": "The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections."
      },
      {
        "name": "full_document",
        "type": "string",
        "description": "Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes."
      }
    ]
  },
  {
    "name": "provisioned_poller_config",
    "type": "object",
    "description": "(Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see &#91;provisioned mode&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).",
    "children": [
      {
        "name": "minimum_pollers",
        "type": "integer",
        "description": "The minimum number of event pollers this event source can scale down to."
      },
      {
        "name": "maximum_pollers",
        "type": "integer",
        "description": "The maximum number of event pollers this event source can scale up to."
      }
    ]
  },
  {
    "name": "metrics_config",
    "type": "object",
    "description": "The metrics configuration for your event source. For more information, see &#91;Event source mapping metrics&#93;(https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).",
    "children": [
      {
        "name": "metrics",
        "type": "array",
        "description": "The metrics you want your event source mapping to produce. Include &#96;&#96;EventCount&#96;&#96; to receive event source mapping metrics related to the number of events processed by your event source mapping. For more information about these metrics, see &#91;Event source mapping metrics&#93;(https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics)."
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html"><code>AWS::Lambda::EventSourceMapping</code></a>.

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
    <td><code>event_source_mappings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FunctionName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_source_mappings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_source_mappings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_source_mappings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_source_mappings</code></td>
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

Gets all properties from an individual <code>event_source_mapping</code>.
```sql
SELECT
region,
id,
batch_size,
bisect_batch_on_function_error,
destination_config,
enabled,
event_source_arn,
event_source_mapping_arn,
filter_criteria,
kms_key_arn,
function_name,
maximum_batching_window_in_seconds,
maximum_record_age_in_seconds,
maximum_retry_attempts,
parallelization_factor,
starting_position,
starting_position_timestamp,
tags,
topics,
queues,
source_access_configurations,
tumbling_window_in_seconds,
function_response_types,
self_managed_event_source,
amazon_managed_kafka_event_source_config,
self_managed_kafka_event_source_config,
scaling_config,
document_db_event_source_config,
provisioned_poller_config,
metrics_config
FROM awscc.lambda.event_source_mappings
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_source_mappings</code> in a region.
```sql
SELECT
region,
id
FROM awscc.lambda.event_source_mappings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_source_mapping</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.event_source_mappings (
 FunctionName,
 region
)
SELECT 
'{{ FunctionName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lambda.event_source_mappings (
 BatchSize,
 BisectBatchOnFunctionError,
 DestinationConfig,
 Enabled,
 EventSourceArn,
 FilterCriteria,
 KmsKeyArn,
 FunctionName,
 MaximumBatchingWindowInSeconds,
 MaximumRecordAgeInSeconds,
 MaximumRetryAttempts,
 ParallelizationFactor,
 StartingPosition,
 StartingPositionTimestamp,
 Tags,
 Topics,
 Queues,
 SourceAccessConfigurations,
 TumblingWindowInSeconds,
 FunctionResponseTypes,
 SelfManagedEventSource,
 AmazonManagedKafkaEventSourceConfig,
 SelfManagedKafkaEventSourceConfig,
 ScalingConfig,
 DocumentDBEventSourceConfig,
 ProvisionedPollerConfig,
 MetricsConfig,
 region
)
SELECT 
 '{{ BatchSize }}',
 '{{ BisectBatchOnFunctionError }}',
 '{{ DestinationConfig }}',
 '{{ Enabled }}',
 '{{ EventSourceArn }}',
 '{{ FilterCriteria }}',
 '{{ KmsKeyArn }}',
 '{{ FunctionName }}',
 '{{ MaximumBatchingWindowInSeconds }}',
 '{{ MaximumRecordAgeInSeconds }}',
 '{{ MaximumRetryAttempts }}',
 '{{ ParallelizationFactor }}',
 '{{ StartingPosition }}',
 '{{ StartingPositionTimestamp }}',
 '{{ Tags }}',
 '{{ Topics }}',
 '{{ Queues }}',
 '{{ SourceAccessConfigurations }}',
 '{{ TumblingWindowInSeconds }}',
 '{{ FunctionResponseTypes }}',
 '{{ SelfManagedEventSource }}',
 '{{ AmazonManagedKafkaEventSourceConfig }}',
 '{{ SelfManagedKafkaEventSourceConfig }}',
 '{{ ScalingConfig }}',
 '{{ DocumentDBEventSourceConfig }}',
 '{{ ProvisionedPollerConfig }}',
 '{{ MetricsConfig }}',
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
  - name: event_source_mapping
    props:
      - name: BatchSize
        value: '{{ BatchSize }}'
      - name: BisectBatchOnFunctionError
        value: '{{ BisectBatchOnFunctionError }}'
      - name: DestinationConfig
        value:
          OnFailure:
            Destination: '{{ Destination }}'
      - name: Enabled
        value: '{{ Enabled }}'
      - name: EventSourceArn
        value: '{{ EventSourceArn }}'
      - name: FilterCriteria
        value:
          Filters:
            - Pattern: '{{ Pattern }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: FunctionName
        value: '{{ FunctionName }}'
      - name: MaximumBatchingWindowInSeconds
        value: '{{ MaximumBatchingWindowInSeconds }}'
      - name: MaximumRecordAgeInSeconds
        value: '{{ MaximumRecordAgeInSeconds }}'
      - name: MaximumRetryAttempts
        value: '{{ MaximumRetryAttempts }}'
      - name: ParallelizationFactor
        value: '{{ ParallelizationFactor }}'
      - name: StartingPosition
        value: '{{ StartingPosition }}'
      - name: StartingPositionTimestamp
        value: null
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: Topics
        value:
          - '{{ Topics[0] }}'
      - name: Queues
        value:
          - '{{ Queues[0] }}'
      - name: SourceAccessConfigurations
        value:
          - Type: '{{ Type }}'
            URI: '{{ URI }}'
      - name: TumblingWindowInSeconds
        value: '{{ TumblingWindowInSeconds }}'
      - name: FunctionResponseTypes
        value:
          - '{{ FunctionResponseTypes[0] }}'
      - name: SelfManagedEventSource
        value:
          Endpoints:
            KafkaBootstrapServers:
              - '{{ KafkaBootstrapServers[0] }}'
      - name: AmazonManagedKafkaEventSourceConfig
        value:
          ConsumerGroupId: '{{ ConsumerGroupId }}'
          SchemaRegistryConfig:
            SchemaRegistryURI: '{{ SchemaRegistryURI }}'
            EventRecordFormat: '{{ EventRecordFormat }}'
            AccessConfigs:
              - Type: '{{ Type }}'
                URI: '{{ URI }}'
            SchemaValidationConfigs:
              - Attribute: '{{ Attribute }}'
      - name: SelfManagedKafkaEventSourceConfig
        value:
          ConsumerGroupId: null
          SchemaRegistryConfig: null
      - name: ScalingConfig
        value:
          MaximumConcurrency: '{{ MaximumConcurrency }}'
      - name: DocumentDBEventSourceConfig
        value:
          DatabaseName: '{{ DatabaseName }}'
          CollectionName: '{{ CollectionName }}'
          FullDocument: '{{ FullDocument }}'
      - name: ProvisionedPollerConfig
        value:
          MinimumPollers: '{{ MinimumPollers }}'
          MaximumPollers: '{{ MaximumPollers }}'
      - name: MetricsConfig
        value:
          Metrics:
            - '{{ Metrics[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lambda.event_source_mappings
SET PatchDocument = string('{{ {
    "BatchSize": batch_size,
    "BisectBatchOnFunctionError": bisect_batch_on_function_error,
    "DestinationConfig": destination_config,
    "Enabled": enabled,
    "FilterCriteria": filter_criteria,
    "KmsKeyArn": kms_key_arn,
    "FunctionName": function_name,
    "MaximumBatchingWindowInSeconds": maximum_batching_window_in_seconds,
    "MaximumRecordAgeInSeconds": maximum_record_age_in_seconds,
    "MaximumRetryAttempts": maximum_retry_attempts,
    "ParallelizationFactor": parallelization_factor,
    "Tags": tags,
    "Topics": topics,
    "Queues": queues,
    "SourceAccessConfigurations": source_access_configurations,
    "TumblingWindowInSeconds": tumbling_window_in_seconds,
    "FunctionResponseTypes": function_response_types,
    "AmazonManagedKafkaEventSourceConfig": amazon_managed_kafka_event_source_config,
    "SelfManagedKafkaEventSourceConfig": self_managed_kafka_event_source_config,
    "ScalingConfig": scaling_config,
    "DocumentDBEventSourceConfig": document_db_event_source_config,
    "ProvisionedPollerConfig": provisioned_poller_config,
    "MetricsConfig": metrics_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.event_source_mappings
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_source_mappings</code> resource, the following permissions are required:

### Create
```json
lambda:CreateEventSourceMapping,
lambda:GetEventSourceMapping,
lambda:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
lambda:DeleteEventSourceMapping,
lambda:GetEventSourceMapping,
kms:Decrypt
```

### List
```json
lambda:ListEventSourceMappings
```

### Read
```json
lambda:GetEventSourceMapping,
lambda:ListTags,
kms:Decrypt
```

### Update
```json
lambda:UpdateEventSourceMapping,
lambda:GetEventSourceMapping,
lambda:TagResource,
lambda:UntagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```
