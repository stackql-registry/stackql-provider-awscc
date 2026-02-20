---
title: event_invoke_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - event_invoke_configs
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

Creates, updates, deletes or gets an <code>event_invoke_config</code> resource or lists <code>event_invoke_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_invoke_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Lambda::EventInvokeConfig resource configures options for asynchronous invocation on a version or an alias.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.event_invoke_configs" /></td></tr>
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
    "name": "destination_config",
    "type": "object",
    "description": "A configuration object that specifies the destination of an event after Lambda processes it. For more information, see &#91;Adding a destination&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-async-destinations).",
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
    "name": "function_name",
    "type": "string",
    "description": "The name of the Lambda function."
  },
  {
    "name": "maximum_event_age_in_seconds",
    "type": "integer",
    "description": "The maximum age of a request that Lambda sends to a function for processing."
  },
  {
    "name": "maximum_retry_attempts",
    "type": "integer",
    "description": "The maximum number of times to retry when the function returns an error."
  },
  {
    "name": "qualifier",
    "type": "string",
    "description": "The identifier of a version or alias."
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
    "name": "function_name",
    "type": "string",
    "description": "The name of the Lambda function."
  },
  {
    "name": "qualifier",
    "type": "string",
    "description": "The identifier of a version or alias."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html"><code>AWS::Lambda::EventInvokeConfig</code></a>.

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
    <td><code>event_invoke_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="FunctionName, Qualifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_invoke_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_invoke_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_invoke_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_invoke_configs</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>event_invoke_config</code>.
```sql
SELECT
region,
destination_config,
function_name,
maximum_event_age_in_seconds,
maximum_retry_attempts,
qualifier
FROM awscc.lambda.event_invoke_configs
WHERE region = 'us-east-1' AND data__Identifier = '<FunctionName>|<Qualifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_invoke_configs</code> in a region.
```sql
SELECT
region,
function_name,
qualifier
FROM awscc.lambda.event_invoke_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_invoke_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.event_invoke_configs (
 FunctionName,
 Qualifier,
 region
)
SELECT 
'{{ FunctionName }}',
 '{{ Qualifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lambda.event_invoke_configs (
 DestinationConfig,
 FunctionName,
 MaximumEventAgeInSeconds,
 MaximumRetryAttempts,
 Qualifier,
 region
)
SELECT 
 '{{ DestinationConfig }}',
 '{{ FunctionName }}',
 '{{ MaximumEventAgeInSeconds }}',
 '{{ MaximumRetryAttempts }}',
 '{{ Qualifier }}',
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
  - name: event_invoke_config
    props:
      - name: DestinationConfig
        value:
          OnFailure:
            Destination: '{{ Destination }}'
      - name: FunctionName
        value: '{{ FunctionName }}'
      - name: MaximumEventAgeInSeconds
        value: '{{ MaximumEventAgeInSeconds }}'
      - name: MaximumRetryAttempts
        value: '{{ MaximumRetryAttempts }}'
      - name: Qualifier
        value: '{{ Qualifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lambda.event_invoke_configs
SET data__PatchDocument = string('{{ {
    "DestinationConfig": destination_config,
    "MaximumEventAgeInSeconds": maximum_event_age_in_seconds,
    "MaximumRetryAttempts": maximum_retry_attempts
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<FunctionName>|<Qualifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.event_invoke_configs
WHERE data__Identifier = '<FunctionName|Qualifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_invoke_configs</code> resource, the following permissions are required:

### Create
```json
lambda:PutFunctionEventInvokeConfig
```

### Read
```json
lambda:GetFunctionEventInvokeConfig
```

### Update
```json
lambda:UpdateFunctionEventInvokeConfig
```

### Delete
```json
lambda:DeleteFunctionEventInvokeConfig
```

### List
```json
lambda:ListFunctionEventInvokeConfigs
```
