---
title: sampling_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - sampling_rules
  - xray
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

Creates, updates, deletes or gets a <code>sampling_rule</code> resource or lists <code>sampling_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sampling_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.xray.sampling_rules" /></td></tr>
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
    "name": "sampling_rule",
    "type": "object",
    "description": "This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.",
    "children": [
      {
        "name": "sampling_rule_record",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "created_at",
            "type": "string",
            "description": "When the rule was created, in Unix time seconds."
          },
          {
            "name": "modified_at",
            "type": "string",
            "description": "When the rule was modified, in Unix time seconds."
          }
        ]
      },
      {
        "name": "sampling_rule_update",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "attributes",
            "type": "object",
            "description": "Matches attributes derived from the request."
          },
          {
            "name": "fixed_rate",
            "type": "number",
            "description": "The percentage of matching requests to instrument, after the reservoir is exhausted."
          },
          {
            "name": "host",
            "type": "string",
            "description": "Matches the hostname from a request URL."
          },
          {
            "name": "h_tt_pmethod",
            "type": "string",
            "description": "Matches the HTTP method from a request URL."
          },
          {
            "name": "priority",
            "type": "integer",
            "description": "The priority of the sampling rule."
          },
          {
            "name": "reservoir_size",
            "type": "integer",
            "description": "A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively."
          },
          {
            "name": "resource_arn",
            "type": "string",
            "description": "Matches the ARN of the AWS resource on which the service runs."
          },
          {
            "name": "rule_arn",
            "type": "string",
            "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
          },
          {
            "name": "rule_name",
            "type": "string",
            "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
          },
          {
            "name": "service_name",
            "type": "string",
            "description": "Matches the name that the service uses to identify itself in segments."
          },
          {
            "name": "service_type",
            "type": "string",
            "description": "Matches the origin that the service uses to identify its type in segments."
          },
          {
            "name": "url_path",
            "type": "string",
            "description": "Matches the path from a request URL."
          }
        ]
      },
      {
        "name": "rule_arn",
        "type": "string",
        "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
      },
      {
        "name": "rule_name",
        "type": "string",
        "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
      },
      {
        "name": "tags",
        "type": "array",
        "description": "An array of key-value pairs to apply to this resource.",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": "The key name of the tag."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the tag."
          }
        ]
      }
    ]
  },
  {
    "name": "sampling_rule_record",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "created_at",
        "type": "string",
        "description": "When the rule was created, in Unix time seconds."
      },
      {
        "name": "modified_at",
        "type": "string",
        "description": "When the rule was modified, in Unix time seconds."
      }
    ]
  },
  {
    "name": "sampling_rule_update",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attributes",
        "type": "object",
        "description": "Matches attributes derived from the request."
      },
      {
        "name": "fixed_rate",
        "type": "number",
        "description": "The percentage of matching requests to instrument, after the reservoir is exhausted."
      },
      {
        "name": "host",
        "type": "string",
        "description": "Matches the hostname from a request URL."
      },
      {
        "name": "h_tt_pmethod",
        "type": "string",
        "description": "Matches the HTTP method from a request URL."
      },
      {
        "name": "priority",
        "type": "integer",
        "description": "The priority of the sampling rule."
      },
      {
        "name": "reservoir_size",
        "type": "integer",
        "description": "A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively."
      },
      {
        "name": "resource_arn",
        "type": "string",
        "description": "Matches the ARN of the AWS resource on which the service runs."
      },
      {
        "name": "rule_arn",
        "type": "string",
        "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
      },
      {
        "name": "rule_name",
        "type": "string",
        "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
      },
      {
        "name": "service_name",
        "type": "string",
        "description": "Matches the name that the service uses to identify itself in segments."
      },
      {
        "name": "service_type",
        "type": "string",
        "description": "Matches the origin that the service uses to identify its type in segments."
      },
      {
        "name": "url_path",
        "type": "string",
        "description": "Matches the path from a request URL."
      }
    ]
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
  },
  {
    "name": "rule_name",
    "type": "string",
    "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
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
    "name": "rule_arn",
    "type": "string",
    "description": "The ARN of the sampling rule. Specify a rule by either name or ARN, but not both."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html"><code>AWS::XRay::SamplingRule</code></a>.

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
    <td><code>sampling_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>sampling_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>sampling_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>sampling_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>sampling_rules</code></td>
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

Gets all properties from an individual <code>sampling_rule</code>.
```sql
SELECT
region,
sampling_rule,
sampling_rule_record,
sampling_rule_update,
rule_arn,
rule_name,
tags
FROM awscc.xray.sampling_rules
WHERE region = 'us-east-1' AND Identifier = '{{ rule_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>sampling_rules</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.xray.sampling_rules_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>sampling_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.xray.sampling_rules (
 SamplingRule,
 SamplingRuleRecord,
 SamplingRuleUpdate,
 RuleName,
 Tags,
 region
)
SELECT
'{{ sampling_rule }}',
 '{{ sampling_rule_record }}',
 '{{ sampling_rule_update }}',
 '{{ rule_name }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.xray.sampling_rules (
 SamplingRule,
 SamplingRuleRecord,
 SamplingRuleUpdate,
 RuleName,
 Tags,
 region
)
SELECT
 '{{ sampling_rule }}',
 '{{ sampling_rule_record }}',
 '{{ sampling_rule_update }}',
 '{{ rule_name }}',
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
  - name: sampling_rule
    props:
      - name: sampling_rule
        value:
          sampling_rule: null
          sampling_rule_record:
            created_at: '{{ created_at }}'
            modified_at: '{{ modified_at }}'
            sampling_rule: null
          sampling_rule_update:
            attributes: {}
            fixed_rate: null
            host: '{{ host }}'
            h_tt_pmethod: '{{ h_tt_pmethod }}'
            priority: '{{ priority }}'
            reservoir_size: '{{ reservoir_size }}'
            resource_arn: '{{ resource_arn }}'
            rule_arn: '{{ rule_arn }}'
            rule_name: '{{ rule_name }}'
            service_name: '{{ service_name }}'
            service_type: '{{ service_type }}'
            url_path: '{{ url_path }}'
          rule_name: null
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
      - name: sampling_rule_record
        value: null
      - name: sampling_rule_update
        value: null
      - name: rule_name
        value: null
      - name: tags
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>sampling_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.xray.sampling_rules
SET PatchDocument = string('{{ {
    "SamplingRuleRecord": sampling_rule_record,
    "SamplingRuleUpdate": sampling_rule_update,
    "RuleName": rule_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ rule_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.xray.sampling_rules
WHERE Identifier = '{{ rule_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sampling_rules</code> resource, the following permissions are required:

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
xray:CreateSamplingRule,
xray:TagResource,
xray:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
xray:GetSamplingRules,
xray:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
xray:UpdateSamplingRule,
xray:TagResource,
xray:UntagResource,
xray:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
xray:DeleteSamplingRule
```

</TabItem>
<TabItem value="list">

```json
xray:GetSamplingRules,
xray:ListTagsForResource
```

</TabItem>
</Tabs>