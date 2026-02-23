---
title: migration_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_projects
  - dms
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

Creates, updates, deletes or gets a <code>migration_project</code> resource or lists <code>migration_projects</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>migration_projects</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DMS::MigrationProject</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dms.migration_projects" /></td></tr>
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
    "name": "migration_project_name",
    "type": "string",
    "description": "The property describes a name to identify the migration project."
  },
  {
    "name": "migration_project_identifier",
    "type": "string",
    "description": "The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn"
  },
  {
    "name": "migration_project_arn",
    "type": "string",
    "description": "The property describes an ARN of the migration project."
  },
  {
    "name": "migration_project_creation_time",
    "type": "string",
    "description": "The property describes a creating time of the migration project."
  },
  {
    "name": "instance_profile_identifier",
    "type": "string",
    "description": "The property describes an instance profile identifier for the migration project. For create"
  },
  {
    "name": "instance_profile_name",
    "type": "string",
    "description": "The property describes an instance profile name for the migration project. For read"
  },
  {
    "name": "instance_profile_arn",
    "type": "string",
    "description": "The property describes an instance profile arn for the migration project. For read"
  },
  {
    "name": "transformation_rules",
    "type": "string",
    "description": "The property describes transformation rules for the migration project."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The optional description of the migration project."
  },
  {
    "name": "schema_conversion_application_attributes",
    "type": "object",
    "description": "The property describes schema conversion application attributes for the migration project.",
    "children": [
      {
        "name": "s3_bucket_path",
        "type": "string",
        "description": ""
      },
      {
        "name": "s3_bucket_role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "source_data_provider_descriptors",
    "type": "array",
    "description": "The property describes source data provider descriptors for the migration project.",
    "children": [
      {
        "name": "data_provider_identifier",
        "type": "string",
        "description": ""
      },
      {
        "name": "data_provider_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "data_provider_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "secrets_manager_secret_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "secrets_manager_access_role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "target_data_provider_descriptors",
    "type": "array",
    "description": "The property describes target data provider descriptors for the migration project."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
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
    "name": "migration_project_arn",
    "type": "string",
    "description": "The property describes an ARN of the migration project."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html"><code>AWS::DMS::MigrationProject</code></a>.

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
    <td><code>migration_projects</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>migration_projects</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>migration_projects</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>migration_projects_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>migration_projects</code></td>
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

Gets all properties from an individual <code>migration_project</code>.
```sql
SELECT
region,
migration_project_name,
migration_project_identifier,
migration_project_arn,
migration_project_creation_time,
instance_profile_identifier,
instance_profile_name,
instance_profile_arn,
transformation_rules,
description,
schema_conversion_application_attributes,
source_data_provider_descriptors,
target_data_provider_descriptors,
tags
FROM awscc.dms.migration_projects
WHERE region = 'us-east-1' AND Identifier = '{{ migration_project_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>migration_projects</code> in a region.
```sql
SELECT
region,
migration_project_arn
FROM awscc.dms.migration_projects_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>migration_project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dms.migration_projects (
 MigrationProjectName,
 MigrationProjectIdentifier,
 MigrationProjectCreationTime,
 InstanceProfileIdentifier,
 InstanceProfileName,
 InstanceProfileArn,
 TransformationRules,
 Description,
 SchemaConversionApplicationAttributes,
 SourceDataProviderDescriptors,
 TargetDataProviderDescriptors,
 Tags,
 region
)
SELECT
'{{ migration_project_name }}',
 '{{ migration_project_identifier }}',
 '{{ migration_project_creation_time }}',
 '{{ instance_profile_identifier }}',
 '{{ instance_profile_name }}',
 '{{ instance_profile_arn }}',
 '{{ transformation_rules }}',
 '{{ description }}',
 '{{ schema_conversion_application_attributes }}',
 '{{ source_data_provider_descriptors }}',
 '{{ target_data_provider_descriptors }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dms.migration_projects (
 MigrationProjectName,
 MigrationProjectIdentifier,
 MigrationProjectCreationTime,
 InstanceProfileIdentifier,
 InstanceProfileName,
 InstanceProfileArn,
 TransformationRules,
 Description,
 SchemaConversionApplicationAttributes,
 SourceDataProviderDescriptors,
 TargetDataProviderDescriptors,
 Tags,
 region
)
SELECT
 '{{ migration_project_name }}',
 '{{ migration_project_identifier }}',
 '{{ migration_project_creation_time }}',
 '{{ instance_profile_identifier }}',
 '{{ instance_profile_name }}',
 '{{ instance_profile_arn }}',
 '{{ transformation_rules }}',
 '{{ description }}',
 '{{ schema_conversion_application_attributes }}',
 '{{ source_data_provider_descriptors }}',
 '{{ target_data_provider_descriptors }}',
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
  - name: migration_project
    props:
      - name: migration_project_name
        value: '{{ migration_project_name }}'
      - name: migration_project_identifier
        value: '{{ migration_project_identifier }}'
      - name: migration_project_creation_time
        value: '{{ migration_project_creation_time }}'
      - name: instance_profile_identifier
        value: '{{ instance_profile_identifier }}'
      - name: instance_profile_name
        value: '{{ instance_profile_name }}'
      - name: instance_profile_arn
        value: '{{ instance_profile_arn }}'
      - name: transformation_rules
        value: '{{ transformation_rules }}'
      - name: description
        value: '{{ description }}'
      - name: schema_conversion_application_attributes
        value:
          s3_bucket_path: '{{ s3_bucket_path }}'
          s3_bucket_role_arn: '{{ s3_bucket_role_arn }}'
      - name: source_data_provider_descriptors
        value:
          - data_provider_identifier: '{{ data_provider_identifier }}'
            data_provider_name: '{{ data_provider_name }}'
            data_provider_arn: '{{ data_provider_arn }}'
            secrets_manager_secret_id: '{{ secrets_manager_secret_id }}'
            secrets_manager_access_role_arn: '{{ secrets_manager_access_role_arn }}'
      - name: target_data_provider_descriptors
        value:
          - null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>migration_project</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.dms.migration_projects
SET PatchDocument = string('{{ {
    "MigrationProjectName": migration_project_name,
    "MigrationProjectIdentifier": migration_project_identifier,
    "MigrationProjectCreationTime": migration_project_creation_time,
    "InstanceProfileIdentifier": instance_profile_identifier,
    "InstanceProfileName": instance_profile_name,
    "InstanceProfileArn": instance_profile_arn,
    "TransformationRules": transformation_rules,
    "Description": description,
    "SchemaConversionApplicationAttributes": schema_conversion_application_attributes,
    "SourceDataProviderDescriptors": source_data_provider_descriptors,
    "TargetDataProviderDescriptors": target_data_provider_descriptors,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ migration_project_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dms.migration_projects
WHERE Identifier = '{{ migration_project_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>migration_projects</code> resource, the following permissions are required:

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
dms:CreateMigrationProject,
dms:ListMigrationProjects,
dms:DescribeMigrationProjects,
dms:AddTagsToResource,
dms:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
dms:DescribeMigrationProjects,
dms:ListMigrationProjects,
dms:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
dms:UpdateMigrationProject,
dms:ModifyMigrationProject,
dms:AddTagsToResource,
dms:RemoveTagsFromResource,
dms:ListTagsForResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
dms:DeleteMigrationProject
```

</TabItem>
<TabItem value="list">

```json
dms:ListMigrationProjects,
dms:DescribeMigrationProjects,
dms:ListTagsForResource
```

</TabItem>
</Tabs>