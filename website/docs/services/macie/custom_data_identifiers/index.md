---
title: custom_data_identifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_data_identifiers
  - macie
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

Creates, updates, deletes or gets a <code>custom_data_identifier</code> resource or lists <code>custom_data_identifiers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_data_identifiers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Macie CustomDataIdentifier resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.macie.custom_data_identifiers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of custom data identifier."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of custom data identifier."
  },
  {
    "name": "regex",
    "type": "string",
    "description": "Regular expression for custom data identifier."
  },
  {
    "name": "maximum_match_distance",
    "type": "integer",
    "description": "Maximum match distance."
  },
  {
    "name": "keywords",
    "type": "array",
    "description": "Keywords to be matched against."
  },
  {
    "name": "ignore_words",
    "type": "array",
    "description": "Words to be ignored."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Custom data identifier ID."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Custom data identifier ARN."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag's key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag's value."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html"><code>AWS::Macie::CustomDataIdentifier</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Regex, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>custom_data_identifier</code>.
```sql
SELECT
region,
name,
description,
regex,
maximum_match_distance,
keywords,
ignore_words,
id,
arn,
tags
FROM awscc.macie.custom_data_identifiers
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_data_identifier</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.macie.custom_data_identifiers (
 Name,
 Regex,
 region
)
SELECT 
'{{ Name }}',
 '{{ Regex }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.macie.custom_data_identifiers (
 Name,
 Description,
 Regex,
 MaximumMatchDistance,
 Keywords,
 IgnoreWords,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Regex }}',
 '{{ MaximumMatchDistance }}',
 '{{ Keywords }}',
 '{{ IgnoreWords }}',
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
  - name: custom_data_identifier
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Regex
        value: '{{ Regex }}'
      - name: MaximumMatchDistance
        value: '{{ MaximumMatchDistance }}'
      - name: Keywords
        value:
          - '{{ Keywords[0] }}'
      - name: IgnoreWords
        value:
          - '{{ IgnoreWords[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.macie.custom_data_identifiers
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_data_identifiers</code> resource, the following permissions are required:

### Create
```json
macie2:CreateCustomDataIdentifier,
macie2:GetCustomDataIdentifier,
macie2:TagResource
```

### Read
```json
macie2:GetCustomDataIdentifier
```

### Delete
```json
macie2:DeleteCustomDataIdentifier
```

### List
```json
macie2:ListCustomDataIdentifiers
```

### Update
```json
macie2:TagResource,
macie2:UntagResource,
macie2:GetCustomDataIdentifier
```
