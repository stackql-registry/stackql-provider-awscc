---
title: segment_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_definitions
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

Creates, updates, deletes or gets a <code>segment_definition</code> resource or lists <code>segment_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>segment_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A segment definition resource of Amazon Connect Customer Profiles</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.segment_definitions" /></td></tr>
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
    "name": "created_at",
    "type": "string",
    "description": "The time of this segment definition got created."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the segment definition."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "The display name of the segment definition."
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "segment_definition_name",
    "type": "string",
    "description": "The unique name of the segment definition."
  },
  {
    "name": "segment_groups",
    "type": "object",
    "description": "An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.",
    "children": [
      {
        "name": "groups",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "dimensions",
            "type": "array",
            "description": ""
          },
          {
            "name": "source_segments",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "segment_definition_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "source_type",
            "type": "string",
            "description": "Specifies the operator on how to handle multiple groups within the same segment."
          }
        ]
      },
      {
        "name": "include",
        "type": "string",
        "description": "Specifies the operator on how to handle multiple groups within the same segment."
      }
    ]
  },
  {
    "name": "segment_definition_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the segment definition."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags used to organize, track, or control access for this resource.",
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
    "name": "segment_definition_name",
    "type": "string",
    "description": "The unique name of the segment definition."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html"><code>AWS::CustomerProfiles::SegmentDefinition</code></a>.

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
    <td><code>segment_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, DisplayName, SegmentDefinitionName, SegmentGroups, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>segment_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>segment_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>segment_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>segment_definitions</code></td>
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

Gets all properties from an individual <code>segment_definition</code>.
```sql
SELECT
region,
created_at,
description,
display_name,
domain_name,
segment_definition_name,
segment_groups,
segment_definition_arn,
tags
FROM awscc.customerprofiles.segment_definitions
WHERE region = 'us-east-1' AND data__Identifier = '<DomainName>|<SegmentDefinitionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>segment_definitions</code> in a region.
```sql
SELECT
region,
domain_name,
segment_definition_name
FROM awscc.customerprofiles.segment_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>segment_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.segment_definitions (
 DisplayName,
 DomainName,
 SegmentDefinitionName,
 SegmentGroups,
 region
)
SELECT 
'{{ DisplayName }}',
 '{{ DomainName }}',
 '{{ SegmentDefinitionName }}',
 '{{ SegmentGroups }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.segment_definitions (
 Description,
 DisplayName,
 DomainName,
 SegmentDefinitionName,
 SegmentGroups,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ DomainName }}',
 '{{ SegmentDefinitionName }}',
 '{{ SegmentGroups }}',
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
  - name: segment_definition
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: SegmentDefinitionName
        value: '{{ SegmentDefinitionName }}'
      - name: SegmentGroups
        value:
          Groups:
            - Dimensions:
                - null
              SourceSegments:
                - SegmentDefinitionName: '{{ SegmentDefinitionName }}'
              SourceType: '{{ SourceType }}'
              Type: null
          Include: null
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
UPDATE awscc.customerprofiles.segment_definitions
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DomainName>|<SegmentDefinitionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.segment_definitions
WHERE data__Identifier = '<DomainName|SegmentDefinitionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>segment_definitions</code> resource, the following permissions are required:

### Create
```json
profile:CreateSegmentDefinition,
profile:TagResource
```

### Read
```json
profile:GetSegmentDefinition
```

### Update
```json
profile:GetSegmentDefinition,
profile:UntagResource,
profile:TagResource
```

### Delete
```json
profile:DeleteSegmentDefinition
```

### List
```json
profile:ListSegmentDefinitions
```
