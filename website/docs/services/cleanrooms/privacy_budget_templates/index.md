---
title: privacy_budget_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - privacy_budget_templates
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

Creates, updates, deletes or gets a <code>privacy_budget_template</code> resource or lists <code>privacy_budget_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>privacy_budget_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a privacy budget within a collaboration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.privacy_budget_templates" /></td></tr>
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
    "name": "privacy_budget_template_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.",
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
    "name": "auto_refresh",
    "type": "string",
    "description": ""
  },
  {
    "name": "privacy_budget_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "epsilon",
        "type": "integer",
        "description": ""
      },
      {
        "name": "users_noise_per_query",
        "type": "integer",
        "description": ""
      }
    ]
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "privacy_budget_template_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-privacybudgettemplate.html"><code>AWS::CleanRooms::PrivacyBudgetTemplate</code></a>.

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
    <td><code>privacy_budget_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AutoRefresh, PrivacyBudgetType, Parameters, MembershipIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>privacy_budget_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>privacy_budget_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>privacy_budget_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>privacy_budget_templates</code></td>
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

Gets all properties from an individual <code>privacy_budget_template</code>.
```sql
SELECT
region,
arn,
collaboration_arn,
collaboration_identifier,
privacy_budget_template_identifier,
tags,
auto_refresh,
privacy_budget_type,
parameters,
membership_arn,
membership_identifier
FROM awscc.cleanrooms.privacy_budget_templates
WHERE region = 'us-east-1' AND Identifier = '<PrivacyBudgetTemplateIdentifier>|<MembershipIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>privacy_budget_templates</code> in a region.
```sql
SELECT
region,
privacy_budget_template_identifier,
membership_identifier
FROM awscc.cleanrooms.privacy_budget_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>privacy_budget_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.privacy_budget_templates (
 AutoRefresh,
 PrivacyBudgetType,
 Parameters,
 MembershipIdentifier,
 region
)
SELECT 
'{{ AutoRefresh }}',
 '{{ PrivacyBudgetType }}',
 '{{ Parameters }}',
 '{{ MembershipIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanrooms.privacy_budget_templates (
 Tags,
 AutoRefresh,
 PrivacyBudgetType,
 Parameters,
 MembershipIdentifier,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ AutoRefresh }}',
 '{{ PrivacyBudgetType }}',
 '{{ Parameters }}',
 '{{ MembershipIdentifier }}',
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
  - name: privacy_budget_template
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AutoRefresh
        value: '{{ AutoRefresh }}'
      - name: PrivacyBudgetType
        value: '{{ PrivacyBudgetType }}'
      - name: Parameters
        value:
          Epsilon: '{{ Epsilon }}'
          UsersNoisePerQuery: '{{ UsersNoisePerQuery }}'
      - name: MembershipIdentifier
        value: '{{ MembershipIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cleanrooms.privacy_budget_templates
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Parameters": parameters
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PrivacyBudgetTemplateIdentifier>|<MembershipIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.privacy_budget_templates
WHERE Identifier = '<PrivacyBudgetTemplateIdentifier|MembershipIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>privacy_budget_templates</code> resource, the following permissions are required:

### Create
```json
cleanrooms:CreatePrivacyBudgetTemplate,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:GetPrivacyBudgetTemplate,
cleanrooms:ListPrivacyBudgetTemplates
```

### Read
```json
cleanrooms:GetPrivacyBudgetTemplate,
cleanrooms:ListTagsForResource
```

### Update
```json
cleanrooms:UpdatePrivacyBudgetTemplate,
cleanrooms:GetPrivacyBudgetTemplate,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource
```

### Delete
```json
cleanrooms:DeletePrivacyBudgetTemplate,
cleanrooms:GetPrivacyBudgetTemplate,
cleanrooms:ListPrivacyBudgetTemplates,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource
```

### List
```json
cleanrooms:ListPrivacyBudgetTemplates
```
