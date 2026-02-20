---
title: topic_inline_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_inline_policies
  - sns
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

Creates, updates, deletes or gets a <code>topic_inline_policy</code> resource or lists <code>topic_inline_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>topic_inline_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for AWS::SNS::TopicInlinePolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sns.topic_inline_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "policy_document",
    "type": "object",
    "description": "A policy document that contains permissions to add to the specified SNS topics."
  },
  {
    "name": "topic_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the topic to which you want to add the policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html"><code>AWS::SNS::TopicInlinePolicy</code></a>.

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
    <td><CopyableCode code="PolicyDocument, TopicArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>topic_inline_policy</code>.
```sql
SELECT
region,
policy_document,
topic_arn
FROM awscc.sns.topic_inline_policies
WHERE region = 'us-east-1' AND Identifier = '<TopicArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>topic_inline_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sns.topic_inline_policies (
 PolicyDocument,
 TopicArn,
 region
)
SELECT 
'{{ PolicyDocument }}',
 '{{ TopicArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sns.topic_inline_policies (
 PolicyDocument,
 TopicArn,
 region
)
SELECT 
 '{{ PolicyDocument }}',
 '{{ TopicArn }}',
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
  - name: topic_inline_policy
    props:
      - name: PolicyDocument
        value: {}
      - name: TopicArn
        value: '{{ TopicArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.sns.topic_inline_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TopicArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sns.topic_inline_policies
WHERE Identifier = '<TopicArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>topic_inline_policies</code> resource, the following permissions are required:

### Create
```json
sns:SetTopicAttributes,
sns:GetTopicAttributes
```

### Read
```json
sns:GetTopicAttributes
```

### Delete
```json
sns:SetTopicAttributes,
sns:GetTopicAttributes
```

### Update
```json
sns:SetTopicAttributes,
sns:GetTopicAttributes
```
