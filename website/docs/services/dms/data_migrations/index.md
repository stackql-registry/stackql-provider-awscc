---
title: data_migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_migrations
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

Creates, updates, deletes or gets a <code>data_migration</code> resource or lists <code>data_migrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_migrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DMS::DataMigration.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dms.data_migrations" /></td></tr>
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
    "name": "data_migration_name",
    "type": "string",
    "description": "The property describes a name to identify the data migration."
  },
  {
    "name": "data_migration_arn",
    "type": "string",
    "description": "The property describes an ARN of the data migration."
  },
  {
    "name": "data_migration_identifier",
    "type": "string",
    "description": "The property describes an ARN of the data migration."
  },
  {
    "name": "data_migration_create_time",
    "type": "string",
    "description": "The property describes the create time of the data migration."
  },
  {
    "name": "service_access_role_arn",
    "type": "string",
    "description": "The property describes Amazon Resource Name (ARN) of the service access role."
  },
  {
    "name": "migration_project_identifier",
    "type": "string",
    "description": "The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn"
  },
  {
    "name": "data_migration_type",
    "type": "string",
    "description": "The property describes the type of migration."
  },
  {
    "name": "data_migration_settings",
    "type": "object",
    "description": "The property describes the settings for the data migration.",
    "children": [
      {
        "name": "cloudwatch_logs_enabled",
        "type": "boolean",
        "description": "The property specifies whether to enable the CloudWatch log."
      },
      {
        "name": "number_of_jobs",
        "type": "integer",
        "description": "The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target."
      },
      {
        "name": "selection_rules",
        "type": "string",
        "description": "The property specifies the rules of selecting objects for data migration."
      }
    ]
  },
  {
    "name": "source_data_settings",
    "type": "array",
    "description": "The property describes the settings for the data migration.",
    "children": [
      {
        "name": "c_dc_start_position",
        "type": "string",
        "description": "The property is a point in the database engine's log that defines a time where you can begin CDC."
      },
      {
        "name": "c_dc_start_time",
        "type": "string",
        "description": "The property indicates the start time for a change data capture (CDC) operation. The value is server time in UTC format."
      },
      {
        "name": "c_dc_stop_time",
        "type": "string",
        "description": "The property indicates the stop time for a change data capture (CDC) operation. The value is server time in UTC format."
      },
      {
        "name": "slot_name",
        "type": "string",
        "description": "The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance."
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
    "name": "data_migration_arn",
    "type": "string",
    "description": "The property describes an ARN of the data migration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html"><code>AWS::DMS::DataMigration</code></a>.

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
    <td><code>data_migrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DataMigrationType, MigrationProjectIdentifier, ServiceAccessRoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_migrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_migrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_migrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_migrations</code></td>
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

Gets all properties from an individual <code>data_migration</code>.
```sql
SELECT
region,
data_migration_name,
data_migration_arn,
data_migration_identifier,
data_migration_create_time,
service_access_role_arn,
migration_project_identifier,
data_migration_type,
data_migration_settings,
source_data_settings,
tags
FROM awscc.dms.data_migrations
WHERE region = 'us-east-1' AND data__Identifier = '<DataMigrationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_migrations</code> in a region.
```sql
SELECT
region,
data_migration_arn
FROM awscc.dms.data_migrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_migration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dms.data_migrations (
 ServiceAccessRoleArn,
 MigrationProjectIdentifier,
 DataMigrationType,
 region
)
SELECT 
'{{ ServiceAccessRoleArn }}',
 '{{ MigrationProjectIdentifier }}',
 '{{ DataMigrationType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dms.data_migrations (
 DataMigrationName,
 DataMigrationIdentifier,
 ServiceAccessRoleArn,
 MigrationProjectIdentifier,
 DataMigrationType,
 DataMigrationSettings,
 SourceDataSettings,
 Tags,
 region
)
SELECT 
 '{{ DataMigrationName }}',
 '{{ DataMigrationIdentifier }}',
 '{{ ServiceAccessRoleArn }}',
 '{{ MigrationProjectIdentifier }}',
 '{{ DataMigrationType }}',
 '{{ DataMigrationSettings }}',
 '{{ SourceDataSettings }}',
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
  - name: data_migration
    props:
      - name: DataMigrationName
        value: '{{ DataMigrationName }}'
      - name: DataMigrationIdentifier
        value: '{{ DataMigrationIdentifier }}'
      - name: ServiceAccessRoleArn
        value: '{{ ServiceAccessRoleArn }}'
      - name: MigrationProjectIdentifier
        value: '{{ MigrationProjectIdentifier }}'
      - name: DataMigrationType
        value: '{{ DataMigrationType }}'
      - name: DataMigrationSettings
        value:
          CloudwatchLogsEnabled: '{{ CloudwatchLogsEnabled }}'
          NumberOfJobs: '{{ NumberOfJobs }}'
          SelectionRules: '{{ SelectionRules }}'
      - name: SourceDataSettings
        value:
          - CDCStartPosition: '{{ CDCStartPosition }}'
            CDCStartTime: '{{ CDCStartTime }}'
            CDCStopTime: '{{ CDCStopTime }}'
            SlotName: '{{ SlotName }}'
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
UPDATE awscc.dms.data_migrations
SET data__PatchDocument = string('{{ {
    "DataMigrationName": data_migration_name,
    "DataMigrationIdentifier": data_migration_identifier,
    "ServiceAccessRoleArn": service_access_role_arn,
    "MigrationProjectIdentifier": migration_project_identifier,
    "DataMigrationType": data_migration_type,
    "DataMigrationSettings": data_migration_settings,
    "SourceDataSettings": source_data_settings,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DataMigrationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dms.data_migrations
WHERE data__Identifier = '<DataMigrationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_migrations</code> resource, the following permissions are required:

### Create
```json
dms:CreateDataMigration,
dms:DescribeDataMigrations,
dms:AddTagsToResource,
dms:ListTagsForResource,
iam:PassRole
```

### Read
```json
dms:DescribeDataMigrations,
dms:ListTagsForResource
```

### Update
```json
dms:ModifyDataMigration,
dms:AddTagsToResource,
dms:RemoveTagsFromResource,
dms:ListTagsForResource,
iam:PassRole
```

### Delete
```json
dms:DeleteDataMigration,
dms:RemoveTagsFromResource
```

### List
```json
dms:DescribeDataMigrations,
dms:ListTagsForResource
```
