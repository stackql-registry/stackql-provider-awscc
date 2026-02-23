---
title: telemetry_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_rules
  - observabilityadmin
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

Creates, updates, deletes or gets a <code>telemetry_rule</code> resource or lists <code>telemetry_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>telemetry_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.observabilityadmin.telemetry_rules" /></td></tr>
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
    "name": "rule_name",
    "type": "string",
    "description": "The name of the telemetry rule"
  },
  {
    "name": "rule",
    "type": "object",
    "description": "The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.",
    "children": [
      {
        "name": "rule_name",
        "type": "string",
        "description": "The name of the telemetry rule"
      },
      {
        "name": "rule_arn",
        "type": "string",
        "description": "The arn of the telemetry rule"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
          }
        ]
      }
    ]
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": "The arn of the telemetry rule"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "rule",
    "type": "object",
    "description": "The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.",
    "children": [
      {
        "name": "rule_name",
        "type": "string",
        "description": "The name of the telemetry rule"
      },
      {
        "name": "rule_arn",
        "type": "string",
        "description": "The arn of the telemetry rule"
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
          }
        ]
      }
    ]
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": "The arn of the telemetry rule"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-telemetryrule.html"><code>AWS::ObservabilityAdmin::TelemetryRule</code></a>.

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
    <td><code>telemetry_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuleName, Rule, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>telemetry_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>telemetry_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>telemetry_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>telemetry_rules</code></td>
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

Gets all properties from an individual <code>telemetry_rule</code>.
```sql
SELECT
region,
rule_name,
rule,
rule_arn,
tags
FROM awscc.observabilityadmin.telemetry_rules
WHERE region = 'us-east-1' AND Identifier = '{{ rule_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>telemetry_rules</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.observabilityadmin.telemetry_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>telemetry_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.observabilityadmin.telemetry_rules (
 RuleName,
 Rule,
 region
)
SELECT
'{{ rule_name }}',
 '{{ rule }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.observabilityadmin.telemetry_rules (
 RuleName,
 Rule,
 Tags,
 region
)
SELECT
 '{{ rule_name }}',
 '{{ rule }}',
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
  - name: telemetry_rule
    props:
      - name: rule_name
        value: '{{ rule_name }}'
      - name: rule
        value:
          rule_name: '{{ rule_name }}'
          rule: null
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>telemetry_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.observabilityadmin.telemetry_rules
SET PatchDocument = string('{{ {
    "Rule": rule,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rule_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.observabilityadmin.telemetry_rules
WHERE Identifier = '{{ rule_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>telemetry_rules</code> resource, the following permissions are required:

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
observabilityadmin:CreateTelemetryRule,
observabilityadmin:GetTelemetryRule,
observabilityadmin:TagResource,
observabilityadmin:ListTagsForResource,
observabilityadmin:GetTelemetryEvaluationStatus,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
observabilityadmin:GetTelemetryRule,
observabilityadmin:ListTagsForResource,
observabilityadmin:GetTelemetryEvaluationStatus
```

</TabItem>
<TabItem value="update">

```json
observabilityadmin:UpdateTelemetryRule,
observabilityadmin:GetTelemetryRule,
observabilityadmin:TagResource,
observabilityadmin:UntagResource,
observabilityadmin:ListTagsForResource,
observabilityadmin:GetTelemetryEvaluationStatus
```

</TabItem>
<TabItem value="delete">

```json
observabilityadmin:DeleteTelemetryRule,
observabilityadmin:GetTelemetryEvaluationStatus
```

</TabItem>
<TabItem value="list">

```json
observabilityadmin:ListTelemetryRules,
observabilityadmin:GetTelemetryEvaluationStatus
```

</TabItem>
</Tabs>