---
title: calculated_attribute_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - calculated_attribute_definitions
  - customerprofiles
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

Creates, updates, deletes or gets a <code>calculated_attribute_definition</code> resource or lists <code>calculated_attribute_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>calculated_attribute_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A calculated attribute definition for Customer Profiles</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.calculated_attribute_definitions" /></td></tr>
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "calculated_attribute_name",
    "type": "string",
    "description": "The unique name of the calculated attribute."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The display name of the calculated attribute."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the event trigger."
  },
  {
    "name": "attribute_details",
    "type": "object",
    "description": "Mathematical expression and a list of attribute items specified in that expression.",
    "children": [
      {
        "name": "attributes",
        "type": "array",
        "description": "A list of attribute items specified in the mathematical expression.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of an attribute defined in a profile object type."
          }
        ]
      },
      {
        "name": "expression",
        "type": "string",
        "description": "Mathematical expression that is performed on attribute items provided in the attribute list. Each element in the expression should follow the structure of \"&#123;ObjectTypeName.AttributeName&#125;\"."
      }
    ]
  },
  {
    "name": "conditions",
    "type": "object",
    "description": "The conditions including range, object count, and threshold for the calculated attribute.",
    "children": [
      {
        "name": "range",
        "type": "object",
        "description": "The relative time period over which data is included in the aggregation.",
        "children": [
          {
            "name": "value",
            "type": "integer",
            "description": "The amount of time of the specified unit."
          },
          {
            "name": "unit",
            "type": "string",
            "description": "The unit of time."
          },
          {
            "name": "value_range",
            "type": "object",
            "description": "A structure specifying the endpoints of the relative time period over which data is included in the aggregation.",
            "children": [
              {
                "name": "start",
                "type": "integer",
                "description": "The starting point for this range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future."
              },
              {
                "name": "end",
                "type": "integer",
                "description": "The ending point for this range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future."
              }
            ]
          },
          {
            "name": "timestamp_source",
            "type": "string",
            "description": "An expression specifying the field in your JSON object from which the date should be parsed. The expression should follow the structure of \\\"&#123;ObjectTypeName.&lt;Location of timestamp field in JSON pointer format&gt;&#125;\\\". E.g. if your object type is MyType and source JSON is &#123;\"generatedAt\": &#123;\"timestamp\": \"1737587945945\"&#125;&#125;, then TimestampSource should be \"&#123;MyType.generatedAt.timestamp&#125;\"."
          },
          {
            "name": "timestamp_format",
            "type": "string",
            "description": "The format the timestamp field in your JSON object is specified. This value should be one of EPOCHMILLI or ISO&#95;8601. E.g. if your object type is MyType and source JSON is &#123;\"generatedAt\": &#123;\"timestamp\": \"2001-07-04T12:08:56.235Z\"&#125;&#125;, then TimestampFormat should be \"ISO&#95;8601\"."
          }
        ]
      },
      {
        "name": "object_count",
        "type": "integer",
        "description": "The number of profile objects used for the calculated attribute."
      },
      {
        "name": "threshold",
        "type": "object",
        "description": "The threshold for the calculated attribute.",
        "children": [
          {
            "name": "value",
            "type": "string",
            "description": "The value of the threshold."
          },
          {
            "name": "operator",
            "type": "string",
            "description": "The operator of the threshold."
          }
        ]
      }
    ]
  },
  {
    "name": "statistic",
    "type": "string",
    "description": "The aggregation operation to perform for the calculated attribute."
  },
  {
    "name": "use_historical_data",
    "type": "boolean",
    "description": "Whether to use historical data for the calculated attribute."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the calculated attribute definition was created."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The timestamp of when the calculated attribute definition was most recently edited."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the calculated attribute definition."
  },
  {
    "name": "readiness",
    "type": "object",
    "description": "The readiness status of the calculated attribute.",
    "children": [
      {
        "name": "progress_percentage",
        "type": "integer",
        "description": "The progress percentage for including historical data in your calculated attribute."
      },
      {
        "name": "message",
        "type": "string",
        "description": "Any information pertaining to the status of the calculated attribute if required."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "calculated_attribute_name",
    "type": "string",
    "description": "The unique name of the calculated attribute."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html"><code>AWS::CustomerProfiles::CalculatedAttributeDefinition</code></a>.

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
    <td><code>calculated_attribute_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, CalculatedAttributeName, AttributeDetails, Statistic, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>calculated_attribute_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>calculated_attribute_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>calculated_attribute_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>calculated_attribute_definitions</code></td>
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

Gets all properties from an individual <code>calculated_attribute_definition</code>.
```sql
SELECT
region,
domain_name,
calculated_attribute_name,
display_name,
description,
attribute_details,
conditions,
statistic,
use_historical_data,
created_at,
last_updated_at,
status,
readiness,
tags
FROM awscc.customerprofiles.calculated_attribute_definitions
WHERE region = 'us-east-1' AND Identifier = '<DomainName>|<CalculatedAttributeName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>calculated_attribute_definitions</code> in a region.
```sql
SELECT
region,
domain_name,
calculated_attribute_name
FROM awscc.customerprofiles.calculated_attribute_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>calculated_attribute_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.calculated_attribute_definitions (
 DomainName,
 CalculatedAttributeName,
 AttributeDetails,
 Statistic,
 region
)
SELECT 
'{{ DomainName }}',
 '{{ CalculatedAttributeName }}',
 '{{ AttributeDetails }}',
 '{{ Statistic }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.calculated_attribute_definitions (
 DomainName,
 CalculatedAttributeName,
 DisplayName,
 Description,
 AttributeDetails,
 Conditions,
 Statistic,
 UseHistoricalData,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ CalculatedAttributeName }}',
 '{{ DisplayName }}',
 '{{ Description }}',
 '{{ AttributeDetails }}',
 '{{ Conditions }}',
 '{{ Statistic }}',
 '{{ UseHistoricalData }}',
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
  - name: calculated_attribute_definition
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: CalculatedAttributeName
        value: '{{ CalculatedAttributeName }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: Description
        value: '{{ Description }}'
      - name: AttributeDetails
        value:
          Attributes:
            - Name: '{{ Name }}'
          Expression: '{{ Expression }}'
      - name: Conditions
        value:
          Range:
            Value: '{{ Value }}'
            Unit: '{{ Unit }}'
            ValueRange:
              Start: '{{ Start }}'
              End: '{{ End }}'
            TimestampSource: '{{ TimestampSource }}'
            TimestampFormat: '{{ TimestampFormat }}'
          ObjectCount: '{{ ObjectCount }}'
          Threshold:
            Value: '{{ Value }}'
            Operator: '{{ Operator }}'
      - name: Statistic
        value: '{{ Statistic }}'
      - name: UseHistoricalData
        value: '{{ UseHistoricalData }}'
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
UPDATE awscc.customerprofiles.calculated_attribute_definitions
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "Description": description,
    "AttributeDetails": attribute_details,
    "Statistic": statistic,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainName>|<CalculatedAttributeName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.calculated_attribute_definitions
WHERE Identifier = '<DomainName|CalculatedAttributeName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>calculated_attribute_definitions</code> resource, the following permissions are required:

### Create
```json
profile:CreateCalculatedAttributeDefinition,
profile:TagResource
```

### Read
```json
profile:GetCalculatedAttributeDefinition
```

### Update
```json
profile:GetCalculatedAttributeDefinition,
profile:UpdateCalculatedAttributeDefinition,
profile:UntagResource,
profile:TagResource
```

### Delete
```json
profile:DeleteCalculatedAttributeDefinition
```

### List
```json
profile:ListCalculatedAttributeDefinitions
```
