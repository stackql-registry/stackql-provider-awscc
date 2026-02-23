---
title: regex_pattern_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - regex_pattern_sets
  - wafv2
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

Creates, updates, deletes or gets a <code>regex_pattern_set</code> resource or lists <code>regex_pattern_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>regex_pattern_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains a list of Regular expressions based on the provided inputs. RegexPatternSet can be used with other WAF entities with RegexPatternSetReferenceStatement to perform other actions .</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wafv2.regex_pattern_sets" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "ARN of the WAF entity."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the entity."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the RegexPatternSet."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the RegexPatternSet"
  },
  {
    "name": "regular_expression_list",
    "type": "array",
    "description": ""
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "name",
    "type": "string",
    "description": "Name of the RegexPatternSet."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the RegexPatternSet"
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html"><code>AWS::WAFv2::RegexPatternSet</code></a>.

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
    <td><code>regex_pattern_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Scope, RegularExpressionList, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>regex_pattern_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>regex_pattern_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>regex_pattern_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>regex_pattern_sets</code></td>
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

Gets all properties from an individual <code>regex_pattern_set</code>.
```sql
SELECT
region,
arn,
description,
name,
id,
regular_expression_list,
scope,
tags
FROM awscc.wafv2.regex_pattern_sets
WHERE region = 'us-east-1' AND Identifier = '{{ name }}|{{ id }}|{{ scope }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>regex_pattern_sets</code> in a region.
```sql
SELECT
region,
name,
id,
scope
FROM awscc.wafv2.regex_pattern_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>regex_pattern_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wafv2.regex_pattern_sets (
 RegularExpressionList,
 Scope,
 region
)
SELECT
'{{ regular_expression_list }}',
 '{{ scope }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wafv2.regex_pattern_sets (
 Description,
 Name,
 RegularExpressionList,
 Scope,
 Tags,
 region
)
SELECT
 '{{ description }}',
 '{{ name }}',
 '{{ regular_expression_list }}',
 '{{ scope }}',
 '{{ tags }}',
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
  - name: regex_pattern_set
    props:
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: regular_expression_list
        value:
          - '{{ regular_expression_list[0] }}'
      - name: scope
        value: '{{ scope }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>regex_pattern_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.wafv2.regex_pattern_sets
SET PatchDocument = string('{{ {
    "Description": description,
    "RegularExpressionList": regular_expression_list,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}|{{ id }}|{{ scope }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wafv2.regex_pattern_sets
WHERE Identifier = '{{ name }}|{{ id }}|{{ scope }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>regex_pattern_sets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
wafv2:CreateRegexPatternSet,
wafv2:GetRegexPatternSet,
wafv2:TagResource,
wafv2:UntagResource,
wafv2:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
wafv2:DeleteRegexPatternSet,
wafv2:GetRegexPatternSet
```

</TabItem>
<TabItem value="read">

```json
wafv2:GetRegexPatternSet,
wafv2:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
wafv2:UpdateRegexPatternSet,
wafv2:GetRegexPatternSet,
wafv2:ListTagsForResource,
wafv2:TagResource,
wafv2:UntagResource
```

</TabItem>
<TabItem value="list">

```json
wafv2:listRegexPatternSets
```

</TabItem>
</Tabs>