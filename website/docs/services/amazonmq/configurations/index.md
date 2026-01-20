---
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - amazonmq
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

Creates, updates, deletes or gets a <code>configuration</code> resource or lists <code>configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AmazonMQ::Configuration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amazonmq.configurations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Amazon MQ configuration."
  },
  {
    "name": "authentication_strategy",
    "type": "string",
    "description": "The authentication strategy associated with the configuration. The default is SIMPLE."
  },
  {
    "name": "engine_type",
    "type": "string",
    "description": "The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations."
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": "The version of the broker engine."
  },
  {
    "name": "data",
    "type": "string",
    "description": "The base64-encoded XML configuration."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the configuration."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon MQ configuration."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the configuration."
  },
  {
    "name": "revision",
    "type": "string",
    "description": "The revision number of the configuration."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Create tags when creating the configuration.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html"><code>AWS::AmazonMQ::Configuration</code></a>.

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
    <td><CopyableCode code="EngineType, Name, region" /></td>
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

Gets all properties from an individual <code>configuration</code>.
```sql
SELECT
region,
arn,
authentication_strategy,
engine_type,
engine_version,
data,
description,
id,
name,
revision,
tags
FROM awscc.amazonmq.configurations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.amazonmq.configurations (
 EngineType,
 Name,
 region
)
SELECT 
'{{ EngineType }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.amazonmq.configurations (
 AuthenticationStrategy,
 EngineType,
 EngineVersion,
 Data,
 Description,
 Name,
 Tags,
 region
)
SELECT 
 '{{ AuthenticationStrategy }}',
 '{{ EngineType }}',
 '{{ EngineVersion }}',
 '{{ Data }}',
 '{{ Description }}',
 '{{ Name }}',
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
  - name: configuration
    props:
      - name: AuthenticationStrategy
        value: '{{ AuthenticationStrategy }}'
      - name: EngineType
        value: '{{ EngineType }}'
      - name: EngineVersion
        value: '{{ EngineVersion }}'
      - name: Data
        value: '{{ Data }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.amazonmq.configurations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configurations</code> resource, the following permissions are required:

### Create
```json
mq:CreateConfiguration,
mq:CreateTags,
mq:UpdateConfiguration
```

### Read
```json
mq:DescribeConfiguration,
mq:ListTags
```

### Update
```json
mq:UpdateConfiguration,
mq:CreateTags,
mq:DeleteTags
```

### Delete
```json
mq:DeleteConfiguration
```

### List
```json
mq:ListConfigurations
```
