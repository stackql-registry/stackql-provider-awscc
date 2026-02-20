---
title: source_api_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - source_api_associations
  - appsync
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

Creates, updates, deletes or gets a <code>source_api_association</code> resource or lists <code>source_api_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>source_api_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppSync::SourceApiAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appsync.source_api_associations" /></td></tr>
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
    "name": "source_api_identifier",
    "type": "string",
    "description": "Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN"
  },
  {
    "name": "merged_api_identifier",
    "type": "string",
    "description": "Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN"
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the SourceApiAssociation."
  },
  {
    "name": "source_api_association_config",
    "type": "object",
    "description": "Customized configuration for SourceApiAssociation.",
    "children": [
      {
        "name": "merge_type",
        "type": "string",
        "description": "Configuration of the merged behavior for the association. For example when it could be auto or has to be manual."
      }
    ]
  },
  {
    "name": "association_id",
    "type": "string",
    "description": "Id of the SourceApiAssociation."
  },
  {
    "name": "association_arn",
    "type": "string",
    "description": "ARN of the SourceApiAssociation."
  },
  {
    "name": "source_api_id",
    "type": "string",
    "description": "GraphQLApiId of the source API in the association."
  },
  {
    "name": "source_api_arn",
    "type": "string",
    "description": "ARN of the source API in the association."
  },
  {
    "name": "merged_api_id",
    "type": "string",
    "description": "GraphQLApiId of the Merged API in the association."
  },
  {
    "name": "merged_api_arn",
    "type": "string",
    "description": "ARN of the Merged API in the association."
  },
  {
    "name": "source_api_association_status",
    "type": "string",
    "description": "Current status of SourceApiAssociation."
  },
  {
    "name": "source_api_association_status_detail",
    "type": "string",
    "description": "Current SourceApiAssociation status details."
  },
  {
    "name": "last_successful_merge_date",
    "type": "string",
    "description": "Date of last schema successful merge."
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
    "name": "association_arn",
    "type": "string",
    "description": "ARN of the SourceApiAssociation."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html"><code>AWS::AppSync::SourceApiAssociation</code></a>.

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
    <td><code>source_api_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>source_api_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>source_api_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>source_api_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>source_api_associations</code></td>
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

Gets all properties from an individual <code>source_api_association</code>.
```sql
SELECT
region,
source_api_identifier,
merged_api_identifier,
description,
source_api_association_config,
association_id,
association_arn,
source_api_id,
source_api_arn,
merged_api_id,
merged_api_arn,
source_api_association_status,
source_api_association_status_detail,
last_successful_merge_date
FROM awscc.appsync.source_api_associations
WHERE region = 'us-east-1' AND Identifier = '<AssociationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>source_api_associations</code> in a region.
```sql
SELECT
region,
association_arn
FROM awscc.appsync.source_api_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>source_api_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appsync.source_api_associations (
 SourceApiIdentifier,
 MergedApiIdentifier,
 Description,
 SourceApiAssociationConfig,
 region
)
SELECT 
'{{ SourceApiIdentifier }}',
 '{{ MergedApiIdentifier }}',
 '{{ Description }}',
 '{{ SourceApiAssociationConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appsync.source_api_associations (
 SourceApiIdentifier,
 MergedApiIdentifier,
 Description,
 SourceApiAssociationConfig,
 region
)
SELECT 
 '{{ SourceApiIdentifier }}',
 '{{ MergedApiIdentifier }}',
 '{{ Description }}',
 '{{ SourceApiAssociationConfig }}',
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
  - name: source_api_association
    props:
      - name: SourceApiIdentifier
        value: '{{ SourceApiIdentifier }}'
      - name: MergedApiIdentifier
        value: '{{ MergedApiIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: SourceApiAssociationConfig
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.appsync.source_api_associations
SET PatchDocument = string('{{ {
    "Description": description,
    "SourceApiAssociationConfig": source_api_association_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AssociationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.source_api_associations
WHERE Identifier = '<AssociationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>source_api_associations</code> resource, the following permissions are required:

### Create
```json
appsync:AssociateSourceGraphqlApi,
appsync:AssociateMergedGraphqlApi,
appsync:GetSourceApiAssociation
```

### Read
```json
appsync:GetSourceApiAssociation,
appsync:ListSourceApiAssociations
```

### Update
```json
appsync:GetSourceApiAssociation,
appsync:UpdateSourceApiAssociation,
appsync:GetSourceApiAssociation
```

### Delete
```json
appsync:GetSourceApiAssociation,
appsync:DisassociateSourceGraphqlApi,
appsync:DisassociateMergedGraphqlApi,
appsync:ListSourceApiAssociations
```

### List
```json
appsync:ListSourceApiAssociations
```
