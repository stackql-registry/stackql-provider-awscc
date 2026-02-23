---
title: matchmaking_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - matchmaking_rule_sets
  - gamelift
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

Creates, updates, deletes or gets a <code>matchmaking_rule_set</code> resource or lists <code>matchmaking_rule_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>matchmaking_rule_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::MatchmakingRuleSet resource creates an Amazon GameLift (GameLift) matchmaking rule set.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.matchmaking_rule_sets" /></td></tr>
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
    "description": "A unique identifier for the matchmaking rule set."
  },
  {
    "name": "rule_set_body",
    "type": "string",
    "description": "A collection of matchmaking rules, formatted as a JSON string."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length."
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
    "description": "A unique identifier for the matchmaking rule set."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html"><code>AWS::GameLift::MatchmakingRuleSet</code></a>.

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
    <td><code>matchmaking_rule_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, RuleSetBody, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>matchmaking_rule_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>matchmaking_rule_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>matchmaking_rule_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>matchmaking_rule_sets</code></td>
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

Gets all properties from an individual <code>matchmaking_rule_set</code>.
```sql
SELECT
region,
name,
rule_set_body,
creation_time,
arn,
tags
FROM awscc.gamelift.matchmaking_rule_sets
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>matchmaking_rule_sets</code> in a region.
```sql
SELECT
region,
name
FROM awscc.gamelift.matchmaking_rule_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>matchmaking_rule_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.matchmaking_rule_sets (
 Name,
 RuleSetBody,
 region
)
SELECT
'{{ name }}',
 '{{ rule_set_body }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.matchmaking_rule_sets (
 Name,
 RuleSetBody,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ rule_set_body }}',
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
  - name: matchmaking_rule_set
    props:
      - name: name
        value: '{{ name }}'
      - name: rule_set_body
        value: '{{ rule_set_body }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>matchmaking_rule_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.gamelift.matchmaking_rule_sets
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.matchmaking_rule_sets
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>matchmaking_rule_sets</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
gamelift:CreateMatchmakingRuleSet,
gamelift:DescribeMatchmakingRuleSets,
gamelift:ValidateMatchmakingRuleSet,
gamelift:ListTagsForResource,
gamelift:TagResource
```

</TabItem>
<TabItem value="read">

```json
gamelift:DescribeMatchmakingRuleSets,
gamelift:ValidateMatchmakingRuleSet,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
gamelift:DeleteMatchmakingRuleSet
```

</TabItem>
<TabItem value="update">

```json
gamelift:DescribeMatchmakingRuleSets,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource
```

</TabItem>
<TabItem value="list">

```json
gamelift:DescribeMatchmakingRuleSets
```

</TabItem>
</Tabs>