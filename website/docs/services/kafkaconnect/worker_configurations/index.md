---
title: worker_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - worker_configurations
  - kafkaconnect
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

Creates, updates, deletes or gets a <code>worker_configuration</code> resource or lists <code>worker_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>worker_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The configuration of the workers, which are the processes that run the connector logic.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kafkaconnect.worker_configurations" /></td></tr>
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
    "description": "The name of the worker configuration."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A summary description of the worker configuration."
  },
  {
    "name": "worker_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the custom configuration."
  },
  {
    "name": "properties_file_content",
    "type": "string",
    "description": "Base64 encoded contents of connect-distributed.properties file."
  },
  {
    "name": "revision",
    "type": "integer",
    "description": "The description of a revision of the worker configuration."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "worker_configuration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the custom configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html"><code>AWS::KafkaConnect::WorkerConfiguration</code></a>.

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
    <td><code>worker_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, PropertiesFileContent, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>worker_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>worker_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>worker_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>worker_configurations</code></td>
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

Gets all properties from an individual <code>worker_configuration</code>.
```sql
SELECT
region,
name,
description,
worker_configuration_arn,
properties_file_content,
revision,
tags
FROM awscc.kafkaconnect.worker_configurations
WHERE region = 'us-east-1' AND Identifier = '<WorkerConfigurationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>worker_configurations</code> in a region.
```sql
SELECT
region,
worker_configuration_arn
FROM awscc.kafkaconnect.worker_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>worker_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kafkaconnect.worker_configurations (
 Name,
 PropertiesFileContent,
 region
)
SELECT 
'{{ Name }}',
 '{{ PropertiesFileContent }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kafkaconnect.worker_configurations (
 Name,
 Description,
 PropertiesFileContent,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ PropertiesFileContent }}',
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
  - name: worker_configuration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: PropertiesFileContent
        value: '{{ PropertiesFileContent }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.kafkaconnect.worker_configurations
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<WorkerConfigurationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kafkaconnect.worker_configurations
WHERE Identifier = '<WorkerConfigurationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>worker_configurations</code> resource, the following permissions are required:

### Create
```json
kafkaconnect:DescribeWorkerConfiguration,
kafkaconnect:CreateWorkerConfiguration,
kafkaconnect:TagResource,
kafkaconnect:ListTagsForResource
```

### Read
```json
kafkaconnect:DescribeWorkerConfiguration,
kafkaconnect:ListTagsForResource
```

### Update
```json
kafkaconnect:DescribeWorkerConfiguration,
kafkaconnect:ListTagsForResource,
kafkaconnect:TagResource,
kafkaconnect:UntagResource
```

### Delete
```json
kafkaconnect:DescribeWorkerConfiguration,
kafkaconnect:DeleteWorkerConfiguration
```

### List
```json
kafkaconnect:ListWorkerConfigurations
```
