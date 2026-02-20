---
title: usage_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_plans
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

Creates, updates, deletes or gets an <code>usage_plan</code> resource or lists <code>usage_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>usage_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGateway::UsagePlan&#96;&#96; resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see &#91;Creating and Using API Usage Plans in Amazon API Gateway&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the &#42;API Gateway Developer Guide&#42;.<br />In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using &#91;&#93;(https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and &#91;&#93;(https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.usage_plans" /></td></tr>
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
    "name": "api_stages",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "api_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "stage",
        "type": "string",
        "description": ""
      },
      {
        "name": "throttle",
        "type": "object",
        "description": ""
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "quota",
    "type": "object",
    "description": "&#96;&#96;QuotaSettings&#96;&#96; is a property of the &#91;AWS::ApiGateway::UsagePlan&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.<br />In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using &#91;&#93;(https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and &#91;&#93;(https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.",
    "children": [
      {
        "name": "limit",
        "type": "integer",
        "description": ""
      },
      {
        "name": "offset",
        "type": "integer",
        "description": ""
      },
      {
        "name": "period",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "throttle",
    "type": "object",
    "description": "&#96;&#96;ThrottleSettings&#96;&#96; is a property of the &#91;AWS::ApiGateway::UsagePlan&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.",
    "children": [
      {
        "name": "burst_limit",
        "type": "integer",
        "description": ""
      },
      {
        "name": "rate_limit",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "usage_plan_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html"><code>AWS::ApiGateway::UsagePlan</code></a>.

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
    <td><code>usage_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>usage_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>usage_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>usage_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>usage_plans</code></td>
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

Gets all properties from an individual <code>usage_plan</code>.
```sql
SELECT
region,
id,
api_stages,
description,
quota,
tags,
throttle,
usage_plan_name
FROM awscc.apigateway.usage_plans
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>usage_plans</code> in a region.
```sql
SELECT
region,
id
FROM awscc.apigateway.usage_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>usage_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.usage_plans (
 ApiStages,
 Description,
 Quota,
 Tags,
 Throttle,
 UsagePlanName,
 region
)
SELECT 
'{{ ApiStages }}',
 '{{ Description }}',
 '{{ Quota }}',
 '{{ Tags }}',
 '{{ Throttle }}',
 '{{ UsagePlanName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.usage_plans (
 ApiStages,
 Description,
 Quota,
 Tags,
 Throttle,
 UsagePlanName,
 region
)
SELECT 
 '{{ ApiStages }}',
 '{{ Description }}',
 '{{ Quota }}',
 '{{ Tags }}',
 '{{ Throttle }}',
 '{{ UsagePlanName }}',
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
  - name: usage_plan
    props:
      - name: ApiStages
        value:
          - ApiId: '{{ ApiId }}'
            Stage: '{{ Stage }}'
            Throttle: {}
      - name: Description
        value: '{{ Description }}'
      - name: Quota
        value:
          Limit: '{{ Limit }}'
          Offset: '{{ Offset }}'
          Period: '{{ Period }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: Throttle
        value:
          BurstLimit: '{{ BurstLimit }}'
          RateLimit: null
      - name: UsagePlanName
        value: '{{ UsagePlanName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigateway.usage_plans
SET data__PatchDocument = string('{{ {
    "ApiStages": api_stages,
    "Description": description,
    "Quota": quota,
    "Tags": tags,
    "Throttle": throttle,
    "UsagePlanName": usage_plan_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.usage_plans
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>usage_plans</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET,
apigateway:PUT
```

### Read
```json
apigateway:GET
```

### Update
```json
apigateway:GET,
apigateway:DELETE,
apigateway:PATCH,
apigateway:PUT
```

### Delete
```json
apigateway:DELETE,
apigateway:GET,
apigateway:PATCH
```

### List
```json
apigateway:GET
```
