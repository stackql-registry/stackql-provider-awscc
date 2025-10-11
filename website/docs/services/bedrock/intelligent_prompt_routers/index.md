---
title: intelligent_prompt_routers
hide_title: false
hide_table_of_contents: false
keywords:
  - intelligent_prompt_routers
  - bedrock
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

Creates, updates, deletes or gets an <code>intelligent_prompt_router</code> resource or lists <code>intelligent_prompt_routers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>intelligent_prompt_routers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::IntelligentPromptRouter Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.intelligent_prompt_routers" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Time Stamp</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>Description of the Prompt Router.</td></tr>
<tr><td><CopyableCode code="fallback_model" /></td><td><code>object</code></td><td>Model configuration</td></tr>
<tr><td><CopyableCode code="models" /></td><td><code>array</code></td><td>List of model configuration</td></tr>
<tr><td><CopyableCode code="prompt_router_arn" /></td><td><code>string</code></td><td>Arn of the Prompt Router.</td></tr>
<tr><td><CopyableCode code="prompt_router_name" /></td><td><code>string</code></td><td>Name of the Prompt Router.</td></tr>
<tr><td><CopyableCode code="routing_criteria" /></td><td><code>object</code></td><td>Represents the criteria used for routing requests.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>Status of a PromptRouter</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>List of Tags</td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td>Type of a Prompt Router</td></tr>
<tr><td><CopyableCode code="updated_at" /></td><td><code>string</code></td><td>Time Stamp</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html"><code>AWS::Bedrock::IntelligentPromptRouter</code></a>.

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
    <td><CopyableCode code="FallbackModel, Models, PromptRouterName, RoutingCriteria, region" /></td>
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
Gets all <code>intelligent_prompt_routers</code> in a region.
```sql
SELECT
region,
created_at,
description,
fallback_model,
models,
prompt_router_arn,
prompt_router_name,
routing_criteria,
status,
tags,
type,
updated_at
FROM awscc.bedrock.intelligent_prompt_routers
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>intelligent_prompt_router</code>.
```sql
SELECT
region,
created_at,
description,
fallback_model,
models,
prompt_router_arn,
prompt_router_name,
routing_criteria,
status,
tags,
type,
updated_at
FROM awscc.bedrock.intelligent_prompt_routers
WHERE region = 'us-east-1' AND data__Identifier = '<PromptRouterArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>intelligent_prompt_router</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.intelligent_prompt_routers (
 FallbackModel,
 Models,
 PromptRouterName,
 RoutingCriteria,
 region
)
SELECT 
'{{ FallbackModel }}',
 '{{ Models }}',
 '{{ PromptRouterName }}',
 '{{ RoutingCriteria }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.intelligent_prompt_routers (
 Description,
 FallbackModel,
 Models,
 PromptRouterName,
 RoutingCriteria,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ FallbackModel }}',
 '{{ Models }}',
 '{{ PromptRouterName }}',
 '{{ RoutingCriteria }}',
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
  - name: intelligent_prompt_router
    props:
      - name: Description
        value: '{{ Description }}'
      - name: FallbackModel
        value:
          ModelArn: '{{ ModelArn }}'
      - name: Models
        value:
          - null
      - name: PromptRouterName
        value: '{{ PromptRouterName }}'
      - name: RoutingCriteria
        value:
          ResponseQualityDifference: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.intelligent_prompt_routers
WHERE data__Identifier = '<PromptRouterArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>intelligent_prompt_routers</code> resource, the following permissions are required:

### Create
```json
bedrock:CreatePromptRouter,
bedrock:GetPromptRouter,
bedrock:TagResource,
bedrock:ListTagsForResource
```

### Read
```json
bedrock:GetPromptRouter,
bedrock:ListTagsForResource
```

### Update
```json
bedrock:GetPromptRouter,
bedrock:ListTagsForResource,
bedrock:TagResource,
bedrock:UntagResource
```

### Delete
```json
bedrock:DeletePromptRouter,
bedrock:GetPromptRouter
```

### List
```json
bedrock:ListPromptRouters
```
