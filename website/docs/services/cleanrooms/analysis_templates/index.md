---
title: analysis_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_templates
  - cleanrooms
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

Creates, updates, deletes or gets an <code>analysis_template</code> resource or lists <code>analysis_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>analysis_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a stored analysis within a collaboration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.analysis_templates" /></td></tr>
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
    "description": ""
  },
  {
    "name": "collaboration_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "collaboration_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.",
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
    "name": "analysis_parameters",
    "type": "array",
    "description": "The member who can query can provide this placeholder for a literal data value in an analysis template",
    "children": [
      {
        "name": "default_value",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "analysis_template_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "membership_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "membership_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "schema",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "referenced_tables",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "source",
    "type": "object",
    "description": ""
  },
  {
    "name": "source_metadata",
    "type": "object",
    "description": ""
  },
  {
    "name": "format",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "analysis_template_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "membership_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html"><code>AWS::CleanRooms::AnalysisTemplate</code></a>.

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
    <td><code>analysis_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Source, Format, Name, MembershipIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>analysis_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>analysis_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>analysis_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>analysis_templates</code></td>
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

Gets all properties from an individual <code>analysis_template</code>.
```sql
SELECT
region,
arn,
collaboration_arn,
collaboration_identifier,
tags,
analysis_parameters,
analysis_template_identifier,
description,
membership_arn,
membership_identifier,
name,
schema,
source,
source_metadata,
format
FROM awscc.cleanrooms.analysis_templates
WHERE region = 'us-east-1' AND Identifier = '<AnalysisTemplateIdentifier>|<MembershipIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>analysis_templates</code> in a region.
```sql
SELECT
region,
analysis_template_identifier,
membership_identifier
FROM awscc.cleanrooms.analysis_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>analysis_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.analysis_templates (
 MembershipIdentifier,
 Name,
 Source,
 Format,
 region
)
SELECT 
'{{ MembershipIdentifier }}',
 '{{ Name }}',
 '{{ Source }}',
 '{{ Format }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanrooms.analysis_templates (
 Tags,
 AnalysisParameters,
 Description,
 MembershipIdentifier,
 Name,
 Schema,
 Source,
 SourceMetadata,
 Format,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ AnalysisParameters }}',
 '{{ Description }}',
 '{{ MembershipIdentifier }}',
 '{{ Name }}',
 '{{ Schema }}',
 '{{ Source }}',
 '{{ SourceMetadata }}',
 '{{ Format }}',
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
  - name: analysis_template
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AnalysisParameters
        value:
          - DefaultValue: '{{ DefaultValue }}'
            Name: '{{ Name }}'
            Type: '{{ Type }}'
      - name: Description
        value: '{{ Description }}'
      - name: MembershipIdentifier
        value: '{{ MembershipIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: Schema
        value:
          ReferencedTables:
            - '{{ ReferencedTables[0] }}'
      - name: Source
        value: null
      - name: SourceMetadata
        value: null
      - name: Format
        value: '{{ Format }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>analysis_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cleanrooms.analysis_templates
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Description": description,
    "SourceMetadata": source_metadata
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AnalysisTemplateIdentifier>|<MembershipIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.analysis_templates
WHERE Identifier = '<AnalysisTemplateIdentifier|MembershipIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>analysis_templates</code> resource, the following permissions are required:

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
cleanrooms:CreateAnalysisTemplate,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:GetAnalysisTemplate,
cleanrooms:ListAnalysisTemplates,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
cleanrooms:GetAnalysisTemplate,
cleanrooms:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
cleanrooms:UpdateAnalysisTemplate,
cleanrooms:GetAnalysisTemplate,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
cleanrooms:DeleteAnalysisTemplate,
cleanrooms:GetAnalysisTemplate,
cleanrooms:ListAnalysisTemplates,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource
```

</TabItem>
<TabItem value="list">

```json
cleanrooms:ListAnalysisTemplates
```

</TabItem>
</Tabs>