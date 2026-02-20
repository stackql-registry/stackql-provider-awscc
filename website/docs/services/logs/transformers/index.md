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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transformers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>transformer</code>.
```sql
SELECT
region,
log_group_identifier,
transformer_config
FROM awscc.logs.transformers
WHERE region = 'us-east-1' AND data__Identifier = '<LogGroupIdentifier>';
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
'{{ LogGroupIdentifier }}',
 '{{ TransformerConfig }}',
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
 '{{ LogGroupIdentifier }}',
 '{{ TransformerConfig }}',
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
      - name: LogGroupIdentifier
        value: '{{ LogGroupIdentifier }}'
      - name: TransformerConfig
        value:
          - ParseCloudfront:
              Source: '{{ Source }}'
            ParseVPC:
              Source: null
            ParseWAF:
              Source: null
            ParseJSON:
              Source: '{{ Source }}'
              Destination: '{{ Destination }}'
            ParseRoute53:
              Source: null
            ParsePostgres:
              Source: null
            ParseToOCSF:
              Source: null
              EventSource: '{{ EventSource }}'
              OcsfVersion: '{{ OcsfVersion }}'
            ParseKeyValue:
              Source: null
              Destination: null
              FieldDelimiter: '{{ FieldDelimiter }}'
              KeyValueDelimiter: '{{ KeyValueDelimiter }}'
              KeyPrefix: null
              NonMatchValue: null
              OverwriteIfExists: '{{ OverwriteIfExists }}'
            CopyValue:
              Entries:
                - Source: null
                  Target: null
                  OverwriteIfExists: '{{ OverwriteIfExists }}'
            Csv:
              QuoteCharacter: '{{ QuoteCharacter }}'
              Delimiter: '{{ Delimiter }}'
              Source: '{{ Source }}'
              Columns:
                - null
            DateTimeConverter:
              Source: null
              Target: null
              TargetFormat: '{{ TargetFormat }}'
              MatchPatterns:
                - null
              SourceTimezone: '{{ SourceTimezone }}'
              TargetTimezone: '{{ TargetTimezone }}'
              Locale: '{{ Locale }}'
            DeleteKeys:
              WithKeys:
                - '{{ WithKeys[0] }}'
            Grok:
              Source: null
              Match: '{{ Match }}'
            ListToMap:
              Source: null
              Key: null
              ValueKey: null
              Target: null
              Flatten: '{{ Flatten }}'
              FlattenedElement: '{{ FlattenedElement }}'
            AddKeys:
              Entries:
                - Key: null
                  Value: '{{ Value }}'
                  OverwriteIfExists: '{{ OverwriteIfExists }}'
            MoveKeys:
              Entries:
                - Source: null
                  Target: null
                  OverwriteIfExists: '{{ OverwriteIfExists }}'
            RenameKeys:
              Entries:
                - Key: null
                  RenameTo: null
                  OverwriteIfExists: '{{ OverwriteIfExists }}'
            LowerCaseString:
              WithKeys:
                - null
            SplitString:
              Entries:
                - Source: null
                  Delimiter: '{{ Delimiter }}'
            SubstituteString:
              Entries:
                - Source: null
                  From: null
                  To: null
            TrimString:
              WithKeys:
                - null
            UpperCaseString:
              WithKeys:
                - null
            TypeConverter:
              Entries:
                - Key: null
                  Type: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.logs.transformers
SET data__PatchDocument = string('{{ {
    "TransformerConfig": transformer_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<LogGroupIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.logs.transformers
WHERE data__Identifier = '<LogGroupIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transformers</code> resource, the following permissions are required:

### Create
```json
logs:PutTransformer,
logs:GetTransformer
```

### Read
```json
logs:GetTransformer
```

### Update
```json
logs:GetTransformer,
logs:PutTransformer
```

### Delete
```json
logs:DeleteTransformer
```

### List
```json
logs:DescribeLogGroups,
logs:GetTransformer
```
