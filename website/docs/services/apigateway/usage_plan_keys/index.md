---
title: usage_plan_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_plan_keys
  - apigateway
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

Creates, updates, deletes or gets an <code>usage_plan_key</code> resource or lists <code>usage_plan_keys</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>usage_plan_keys</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::UsagePlanKey&#96;&#96; resource associates an API key with a usage plan. This association determines which users the usage plan is applied to.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.usage_plan_keys" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "key_id",
    "type": "string",
    "description": "The Id of the UsagePlanKey resource."
  },
  {
    "name": "key_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "usage_plan_id",
    "type": "string",
    "description": "The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer."
  },
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html"><code>AWS::ApiGateway::UsagePlanKey</code></a>.

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
    <td><CopyableCode code="KeyType, UsagePlanId, KeyId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>usage_plan_key</code>.
```sql
SELECT
region,
key_id,
key_type,
usage_plan_id,
id
FROM awscc.apigateway.usage_plan_keys
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>usage_plan_key</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.usage_plan_keys (
 KeyId,
 KeyType,
 UsagePlanId,
 region
)
SELECT 
'{{ KeyId }}',
 '{{ KeyType }}',
 '{{ UsagePlanId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.usage_plan_keys (
 KeyId,
 KeyType,
 UsagePlanId,
 region
)
SELECT 
 '{{ KeyId }}',
 '{{ KeyType }}',
 '{{ UsagePlanId }}',
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
  - name: usage_plan_key
    props:
      - name: KeyId
        value: '{{ KeyId }}'
      - name: KeyType
        value: '{{ KeyType }}'
      - name: UsagePlanId
        value: '{{ UsagePlanId }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.usage_plan_keys
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>usage_plan_keys</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET
```

### Read
```json
apigateway:GET
```

### Delete
```json
apigateway:DELETE,
apigateway:GET
```

### List
```json
apigateway:GET
```
