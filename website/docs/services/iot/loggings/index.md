---
title: loggings
hide_title: false
hide_table_of_contents: false
keywords:
  - loggings
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

Creates, updates, deletes or gets a <code>logging</code> resource or lists <code>loggings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>loggings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Logging Options enable you to configure your IoT V2 logging role and default logging level so that you can monitor progress events logs as it passes from your devices through Iot core service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.loggings" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": "Your 12-digit account ID (used as the primary identifier for the CloudFormation resource)."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of the role that allows IoT to write to Cloudwatch logs."
  },
  {
    "name": "default_log_level",
    "type": "string",
    "description": "The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED."
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
    "name": "account_id",
    "type": "string",
    "description": "Your 12-digit account ID (used as the primary identifier for the CloudFormation resource)."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html"><code>AWS::IoT::Logging</code></a>.

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
    <td><code>loggings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccountId, RoleArn, DefaultLogLevel, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>loggings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>loggings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>loggings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>loggings</code></td>
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

Gets all properties from an individual <code>logging</code>.
```sql
SELECT
region,
account_id,
role_arn,
default_log_level
FROM awscc.iot.loggings
WHERE region = 'us-east-1' AND Identifier = '{{ account_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>loggings</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.iot.loggings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>logging</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.loggings (
 AccountId,
 RoleArn,
 DefaultLogLevel,
 region
)
SELECT
'{{ account_id }}',
 '{{ role_arn }}',
 '{{ default_log_level }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.loggings (
 AccountId,
 RoleArn,
 DefaultLogLevel,
 region
)
SELECT
 '{{ account_id }}',
 '{{ role_arn }}',
 '{{ default_log_level }}',
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
  - name: logging
    props:
      - name: account_id
        value: '{{ account_id }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: default_log_level
        value: '{{ default_log_level }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>logging</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.loggings
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "DefaultLogLevel": default_log_level
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ account_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.loggings
WHERE Identifier = '{{ account_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>loggings</code> resource, the following permissions are required:

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
iot:SetV2LoggingOptions,
iot:GetV2LoggingOptions,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
iot:GetV2LoggingOptions
```

</TabItem>
<TabItem value="update">

```json
iot:SetV2LoggingOptions,
iot:GetV2LoggingOptions,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
iot:SetV2LoggingOptions,
iot:GetV2LoggingOptions
```

</TabItem>
<TabItem value="list">

```json
iot:GetV2LoggingOptions
```

</TabItem>
</Tabs>