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
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::ApiGateway::UsagePlan</code> resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Creating and Using API Usage Plans in Amazon API Gateway</a> in the <i>API Gateway Developer Guide</i>.</summary>In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.</details></td></tr>
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
    "description": "<details><summary><code>QuotaSettings</code> is a property of the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html\">AWS::ApiGateway::UsagePlan</a> resource that specifies a target for the maximum number of requests users can make to your REST APIs.</summary>In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.</details>",
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
    "description": "<code>ThrottleSettings</code> is a property of the <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html\">AWS::ApiGateway::UsagePlan</a> resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.",
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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>usage_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>usage_plans</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.apigateway.usage_plans_list_only
WHERE
  region = '{{ region }}';
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
  '{{ api_stages }}',
  '{{ description }}',
  '{{ quota }}',
  '{{ tags }}',
  '{{ throttle }}',
  '{{ usage_plan_name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  '{{ api_stages }}',
  '{{ description }}',
  '{{ quota }}',
  '{{ tags }}',
  '{{ throttle }}',
  '{{ usage_plan_name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
      - name: api_stages
        value:
          - api_id: '{{ api_id }}'
            stage: '{{ stage }}'
            throttle: {}
      - name: description
        value: '{{ description }}'
      - name: quota
        value:
          limit: '{{ limit }}'
          offset: '{{ offset }}'
          period: '{{ period }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: throttle
        value:
          burst_limit: '{{ burst_limit }}'
          rate_limit: null
      - name: usage_plan_name
        value: '{{ usage_plan_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>usage_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apigateway.usage_plans
SET PatchDocument = string('{{ {
    "ApiStages": api_stages,
    "Description": description,
    "Quota": quota,
    "Tags": tags,
    "Throttle": throttle,
    "UsagePlanName": usage_plan_name
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.usage_plans
WHERE
  Identifier = '{{ id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>usage_plans</code> resource, the following permissions are required:

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
apigateway:POST,
apigateway:GET,
apigateway:PUT
```

</TabItem>
<TabItem value="read">

```json
apigateway:GET
```

</TabItem>
<TabItem value="update">

```json
apigateway:GET,
apigateway:DELETE,
apigateway:PATCH,
apigateway:PUT
```

</TabItem>
<TabItem value="delete">

```json
apigateway:DELETE,
apigateway:GET,
apigateway:PATCH
```

</TabItem>
<TabItem value="list">

```json
apigateway:GET
```

</TabItem>
</Tabs>