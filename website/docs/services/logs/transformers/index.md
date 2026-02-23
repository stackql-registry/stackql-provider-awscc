---
title: transformers
hide_title: false
hide_table_of_contents: false
keywords:
  - transformers
  - logs
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

Creates, updates, deletes or gets a <code>transformer</code> resource or lists <code>transformers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transformers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a transformer on the log group to transform logs into consistent structured and information rich format.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.logs.transformers" /></td></tr>
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
    "name": "log_group_identifier",
    "type": "string",
    "description": "Existing log group that you want to associate with this transformer."
  },
  {
    "name": "transformer_config",
    "type": "array",
    "description": "List of processors in a transformer",
    "children": [
      {
        "name": "parse_cloudfront",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_vpc",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_wa_f",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_js_on",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "destination",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_route53",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_postgres",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_to_oc_sf",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "event_source",
            "type": "string",
            "description": ""
          },
          {
            "name": "ocsf_version",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "parse_key_value",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "field_delimiter",
            "type": "string",
            "description": ""
          },
          {
            "name": "key_value_delimiter",
            "type": "string",
            "description": ""
          },
          {
            "name": "overwrite_if_exists",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "copy_value",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "source",
                "type": "string",
                "description": ""
              },
              {
                "name": "target",
                "type": "string",
                "description": ""
              },
              {
                "name": "overwrite_if_exists",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "csv",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "quote_character",
            "type": "string",
            "description": ""
          },
          {
            "name": "delimiter",
            "type": "string",
            "description": ""
          },
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "columns",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "date_time_converter",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "target",
            "type": "string",
            "description": ""
          },
          {
            "name": "target_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "match_patterns",
            "type": "array",
            "description": ""
          },
          {
            "name": "source_timezone",
            "type": "string",
            "description": ""
          },
          {
            "name": "target_timezone",
            "type": "string",
            "description": ""
          },
          {
            "name": "locale",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "delete_keys",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "with_keys",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "grok",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "match",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "list_to_map",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": ""
          },
          {
            "name": "target",
            "type": "string",
            "description": ""
          },
          {
            "name": "flatten",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "flattened_element",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "add_keys",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
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
              },
              {
                "name": "overwrite_if_exists",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "move_keys",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "source",
                "type": "string",
                "description": ""
              },
              {
                "name": "overwrite_if_exists",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "rename_keys",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "overwrite_if_exists",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "lower_case_string",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "with_keys",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "split_string",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "source",
                "type": "string",
                "description": ""
              },
              {
                "name": "delimiter",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "substitute_string",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "source",
                "type": "string",
                "description": ""
              },
              {
                "name": "from",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "trim_string",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "with_keys",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "upper_case_string",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "with_keys",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "type_converter",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "entries",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "key",
                "type": "string",
                "description": ""
              },
              {
                "name": "type",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
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
    "name": "log_group_identifier",
    "type": "string",
    "description": "Existing log group that you want to associate with this transformer."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html"><code>AWS::Logs::Transformer</code></a>.

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
    <td><code>transformers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LogGroupIdentifier, TransformerConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transformers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transformers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transformers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transformers</code></td>
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

Gets all properties from an individual <code>transformer</code>.
```sql
SELECT
region,
log_group_identifier,
transformer_config
FROM awscc.logs.transformers
WHERE region = 'us-east-1' AND Identifier = '{{ log_group_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transformers</code> in a region.
```sql
SELECT
region,
log_group_identifier
FROM awscc.logs.transformers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transformer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.logs.transformers (
 LogGroupIdentifier,
 TransformerConfig,
 region
)
SELECT
'{{ log_group_identifier }}',
 '{{ transformer_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.logs.transformers (
 LogGroupIdentifier,
 TransformerConfig,
 region
)
SELECT
 '{{ log_group_identifier }}',
 '{{ transformer_config }}',
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
  - name: transformer
    props:
      - name: log_group_identifier
        value: '{{ log_group_identifier }}'
      - name: transformer_config
        value:
          - parse_cloudfront:
              source: '{{ source }}'
            parse_vpc:
              source: null
            parse_wa_f:
              source: null
            parse_js_on:
              source: '{{ source }}'
              destination: '{{ destination }}'
            parse_route53:
              source: null
            parse_postgres:
              source: null
            parse_to_oc_sf:
              source: null
              event_source: '{{ event_source }}'
              ocsf_version: '{{ ocsf_version }}'
            parse_key_value:
              source: null
              destination: null
              field_delimiter: '{{ field_delimiter }}'
              key_value_delimiter: '{{ key_value_delimiter }}'
              key_prefix: null
              non_match_value: null
              overwrite_if_exists: '{{ overwrite_if_exists }}'
            copy_value:
              entries:
                - source: null
                  target: null
                  overwrite_if_exists: '{{ overwrite_if_exists }}'
            csv:
              quote_character: '{{ quote_character }}'
              delimiter: '{{ delimiter }}'
              source: '{{ source }}'
              columns:
                - null
            date_time_converter:
              source: null
              target: null
              target_format: '{{ target_format }}'
              match_patterns:
                - null
              source_timezone: '{{ source_timezone }}'
              target_timezone: '{{ target_timezone }}'
              locale: '{{ locale }}'
            delete_keys:
              with_keys:
                - '{{ with_keys[0] }}'
            grok:
              source: null
              match: '{{ match }}'
            list_to_map:
              source: null
              key: null
              value_key: null
              target: null
              flatten: '{{ flatten }}'
              flattened_element: '{{ flattened_element }}'
            add_keys:
              entries:
                - key: null
                  value: '{{ value }}'
                  overwrite_if_exists: '{{ overwrite_if_exists }}'
            move_keys:
              entries:
                - source: null
                  target: null
                  overwrite_if_exists: '{{ overwrite_if_exists }}'
            rename_keys:
              entries:
                - key: null
                  rename_to: null
                  overwrite_if_exists: '{{ overwrite_if_exists }}'
            lower_case_string:
              with_keys:
                - null
            split_string:
              entries:
                - source: null
                  delimiter: '{{ delimiter }}'
            substitute_string:
              entries:
                - source: null
                  from: null
                  to: null
            trim_string:
              with_keys:
                - null
            upper_case_string:
              with_keys:
                - null
            type_converter:
              entries:
                - key: null
                  type: '{{ type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>transformer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.logs.transformers
SET PatchDocument = string('{{ {
    "TransformerConfig": transformer_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ log_group_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.transformers
WHERE Identifier = '{{ log_group_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transformers</code> resource, the following permissions are required:

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
logs:PutTransformer,
logs:GetTransformer
```

</TabItem>
<TabItem value="read">

```json
logs:GetTransformer
```

</TabItem>
<TabItem value="update">

```json
logs:GetTransformer,
logs:PutTransformer
```

</TabItem>
<TabItem value="delete">

```json
logs:DeleteTransformer
```

</TabItem>
<TabItem value="list">

```json
logs:DescribeLogGroups,
logs:GetTransformer
```

</TabItem>
</Tabs>