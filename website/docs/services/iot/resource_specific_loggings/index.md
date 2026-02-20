---
title: resource_specific_loggings
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_specific_loggings
  - iot
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

Creates, updates, deletes or gets a <code>resource_specific_logging</code> resource or lists <code>resource_specific_loggings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_specific_loggings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource-specific logging allows you to specify a logging level for a specific thing group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.resource_specific_loggings" /></td></tr>
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
    "name": "target_type",
    "type": "string",
    "description": "The target type. Value must be THING&#95;GROUP, CLIENT&#95;ID, SOURCE&#95;IP, PRINCIPAL&#95;ID, or EVENT&#95;TYPE."
  },
  {
    "name": "target_name",
    "type": "string",
    "description": "The target name."
  },
  {
    "name": "log_level",
    "type": "string",
    "description": "The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED."
  },
  {
    "name": "target_id",
    "type": "string",
    "description": "Unique Id for a Target (TargetType:TargetName), this will be internally built to serve as primary identifier for a log target."
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
    "name": "target_id",
    "type": "string",
    "description": "Unique Id for a Target (TargetType:TargetName), this will be internally built to serve as primary identifier for a log target."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html"><code>AWS::IoT::ResourceSpecificLogging</code></a>.

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
    <td><code>resource_specific_loggings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TargetName, TargetType, LogLevel, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resource_specific_loggings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>resource_specific_loggings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resource_specific_loggings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resource_specific_loggings</code></td>
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

Gets all properties from an individual <code>resource_specific_logging</code>.
```sql
SELECT
region,
target_type,
target_name,
log_level,
target_id
FROM awscc.iot.resource_specific_loggings
WHERE region = 'us-east-1' AND data__Identifier = '<TargetId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resource_specific_loggings</code> in a region.
```sql
SELECT
region,
target_id
FROM awscc.iot.resource_specific_loggings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_specific_logging</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.resource_specific_loggings (
 TargetType,
 TargetName,
 LogLevel,
 region
)
SELECT 
'{{ TargetType }}',
 '{{ TargetName }}',
 '{{ LogLevel }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.resource_specific_loggings (
 TargetType,
 TargetName,
 LogLevel,
 region
)
SELECT 
 '{{ TargetType }}',
 '{{ TargetName }}',
 '{{ LogLevel }}',
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
  - name: resource_specific_logging
    props:
      - name: TargetType
        value: '{{ TargetType }}'
      - name: TargetName
        value: '{{ TargetName }}'
      - name: LogLevel
        value: '{{ LogLevel }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iot.resource_specific_loggings
SET data__PatchDocument = string('{{ {
    "LogLevel": log_level
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TargetId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.resource_specific_loggings
WHERE data__Identifier = '<TargetId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_specific_loggings</code> resource, the following permissions are required:

### Create
```json
iot:ListV2LoggingLevels,
iot:SetV2LoggingLevel
```

### Read
```json
iot:ListV2LoggingLevels
```

### Update
```json
iot:ListV2LoggingLevels,
iot:SetV2LoggingLevel
```

### Delete
```json
iot:ListV2LoggingLevels,
iot:DeleteV2LoggingLevel
```

### List
```json
iot:ListV2LoggingLevels
```
