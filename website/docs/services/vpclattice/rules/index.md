---
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - vpclattice
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

Creates, updates, deletes or gets a <code>rule</code> resource or lists <code>rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.rules" /></td></tr>
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
    "name": "action",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "forward",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "target_groups",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "target_group_identifier",
                "type": "string",
                "description": ""
              },
              {
                "name": "weight",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "fixed_response",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "status_code",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "listener_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "match",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "http_match",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "method",
            "type": "string",
            "description": ""
          },
          {
            "name": "path_match",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "match",
                "type": "object",
                "description": ""
              },
              {
                "name": "case_sensitive",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "header_matches",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "match",
                "type": "object",
                "description": ""
              },
              {
                "name": "case_sensitive",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "priority",
    "type": "integer",
    "description": ""
  },
  {
    "name": "service_identifier",
    "type": "string",
    "description": ""
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html"><code>AWS::VpcLattice::Rule</code></a>.

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
    <td><code>rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Action, Match, Priority, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rules</code></td>
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

Gets all properties from an individual <code>rule</code>.
```sql
SELECT
region,
action,
arn,
id,
listener_identifier,
match,
name,
priority,
service_identifier,
tags
FROM awscc.vpclattice.rules
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>rules</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.vpclattice.rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.rules (
 Action,
 Match,
 Priority,
 region
)
SELECT 
'{{ Action }}',
 '{{ Match }}',
 '{{ Priority }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.rules (
 Action,
 ListenerIdentifier,
 Match,
 Name,
 Priority,
 ServiceIdentifier,
 Tags,
 region
)
SELECT 
 '{{ Action }}',
 '{{ ListenerIdentifier }}',
 '{{ Match }}',
 '{{ Name }}',
 '{{ Priority }}',
 '{{ ServiceIdentifier }}',
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
  - name: rule
    props:
      - name: Action
        value:
          Forward:
            TargetGroups:
              - TargetGroupIdentifier: '{{ TargetGroupIdentifier }}'
                Weight: '{{ Weight }}'
          FixedResponse:
            StatusCode: '{{ StatusCode }}'
      - name: ListenerIdentifier
        value: '{{ ListenerIdentifier }}'
      - name: Match
        value:
          HttpMatch:
            Method: '{{ Method }}'
            PathMatch:
              Match:
                Exact: '{{ Exact }}'
                Prefix: '{{ Prefix }}'
              CaseSensitive: '{{ CaseSensitive }}'
            HeaderMatches:
              - Name: '{{ Name }}'
                Match:
                  Exact: '{{ Exact }}'
                  Prefix: '{{ Prefix }}'
                  Contains: '{{ Contains }}'
                CaseSensitive: '{{ CaseSensitive }}'
      - name: Name
        value: '{{ Name }}'
      - name: Priority
        value: '{{ Priority }}'
      - name: ServiceIdentifier
        value: '{{ ServiceIdentifier }}'
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
UPDATE awscc.vpclattice.rules
SET PatchDocument = string('{{ {
    "Action": action,
    "Match": match,
    "Priority": priority,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.rules
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rules</code> resource, the following permissions are required:

### Create
```json
vpc-lattice:CreateRule,
vpc-lattice:GetRule,
vpc-lattice:ListTagsForResource,
vpc-lattice:TagResource
```

### Read
```json
vpc-lattice:GetRule,
vpc-lattice:ListTagsForResource
```

### Update
```json
vpc-lattice:UpdateRule,
vpc-lattice:GetRule,
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
vpc-lattice:ListTagsForResource
```

### Delete
```json
vpc-lattice:DeleteRule,
vpc-lattice:UntagResource
```

### List
```json
vpc-lattice:ListRules
```
