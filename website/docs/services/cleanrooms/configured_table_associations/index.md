---
title: configured_table_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_table_associations
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

Creates, updates, deletes or gets a <code>configured_table_association</code> resource or lists <code>configured_table_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configured_table_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a table that can be queried within a collaboration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cleanrooms.configured_table_associations" /></td></tr>
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
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.",
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
    "name": "configured_table_association_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "configured_table_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
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
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "configured_table_association_analysis_rules",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "v1",
            "type": "object",
            "description": ""
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
    "name": "configured_table_association_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html"><code>AWS::CleanRooms::ConfiguredTableAssociation</code></a>.

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
    <td><code>configured_table_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConfiguredTableIdentifier, Name, RoleArn, MembershipIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configured_table_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configured_table_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configured_table_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configured_table_associations</code></td>
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

Gets all properties from an individual <code>configured_table_association</code>.
```sql
SELECT
region,
arn,
tags,
configured_table_association_identifier,
configured_table_identifier,
description,
membership_identifier,
name,
role_arn,
configured_table_association_analysis_rules
FROM awscc.cleanrooms.configured_table_associations
WHERE region = 'us-east-1' AND data__Identifier = '<ConfiguredTableAssociationIdentifier>|<MembershipIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configured_table_associations</code> in a region.
```sql
SELECT
region,
configured_table_association_identifier,
membership_identifier
FROM awscc.cleanrooms.configured_table_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configured_table_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cleanrooms.configured_table_associations (
 ConfiguredTableIdentifier,
 MembershipIdentifier,
 Name,
 RoleArn,
 region
)
SELECT 
'{{ ConfiguredTableIdentifier }}',
 '{{ MembershipIdentifier }}',
 '{{ Name }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cleanrooms.configured_table_associations (
 Tags,
 ConfiguredTableIdentifier,
 Description,
 MembershipIdentifier,
 Name,
 RoleArn,
 ConfiguredTableAssociationAnalysisRules,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ ConfiguredTableIdentifier }}',
 '{{ Description }}',
 '{{ MembershipIdentifier }}',
 '{{ Name }}',
 '{{ RoleArn }}',
 '{{ ConfiguredTableAssociationAnalysisRules }}',
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
  - name: configured_table_association
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ConfiguredTableIdentifier
        value: '{{ ConfiguredTableIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: MembershipIdentifier
        value: '{{ MembershipIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: ConfiguredTableAssociationAnalysisRules
        value:
          - Type: '{{ Type }}'
            Policy:
              V1: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cleanrooms.configured_table_associations
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "Description": description,
    "RoleArn": role_arn,
    "ConfiguredTableAssociationAnalysisRules": configured_table_association_analysis_rules
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ConfiguredTableAssociationIdentifier>|<MembershipIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cleanrooms.configured_table_associations
WHERE data__Identifier = '<ConfiguredTableAssociationIdentifier|MembershipIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configured_table_associations</code> resource, the following permissions are required:

### Create
```json
cleanrooms:CreateConfiguredTableAssociation,
iam:PassRole,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:GetConfiguredTableAssociation,
cleanrooms:ListConfiguredTableAssociations,
cleanrooms:DeleteConfiguredTableAssociation,
cleanrooms:DeleteConfiguredTableAssociationAnalysisRule,
cleanrooms:CreateConfiguredTableAssociationAnalysisRule,
cleanrooms:GetConfiguredTableAssociationAnalysisRule
```

### Read
```json
cleanrooms:GetConfiguredTableAssociation,
cleanrooms:ListTagsForResource,
cleanrooms:GetConfiguredTableAssociationAnalysisRule
```

### Update
```json
cleanrooms:UpdateConfiguredTableAssociation,
cleanrooms:GetConfiguredTableAssociation,
iam:PassRole,
cleanrooms:ListTagsForResource,
cleanrooms:TagResource,
cleanrooms:UntagResource,
cleanrooms:DeleteConfiguredTableAssociationAnalysisRule,
cleanrooms:CreateConfiguredTableAssociationAnalysisRule,
cleanrooms:GetConfiguredTableAssociationAnalysisRule,
cleanrooms:UpdateConfiguredTableAssociationAnalysisRule
```

### Delete
```json
cleanrooms:DeleteConfiguredTableAssociation,
cleanrooms:GetConfiguredTableAssociation,
cleanrooms:ListConfiguredTableAssociations,
cleanrooms:ListTagsForResource,
cleanrooms:UntagResource,
cleanrooms:DeleteConfiguredTableAssociationAnalysisRule,
cleanrooms:GetConfiguredTableAssociationAnalysisRule
```

### List
```json
cleanrooms:ListConfiguredTableAssociations
```
