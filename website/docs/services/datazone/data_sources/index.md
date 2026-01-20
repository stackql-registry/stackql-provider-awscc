---
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - datazone
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

Creates, updates, deletes or gets a <code>data_source</code> resource or lists <code>data_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A data source is used to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.data_sources" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "asset_forms_input",
    "type": "array",
    "description": "The metadata forms that are to be attached to the assets that this data source works with.",
    "children": [
      {
        "name": "form_name",
        "type": "string",
        "description": "The name of the metadata form."
      },
      {
        "name": "type_identifier",
        "type": "string",
        "description": "The ID of the metadata form type."
      },
      {
        "name": "type_revision",
        "type": "string",
        "description": "The revision of the metadata form type."
      },
      {
        "name": "content",
        "type": "string",
        "description": "The content of the metadata form."
      }
    ]
  },
  {
    "name": "connection_id",
    "type": "string",
    "description": "The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run"
  },
  {
    "name": "connection_identifier",
    "type": "string",
    "description": "The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the data source was created."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the data source."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain where the data source is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain where the data source is created."
  },
  {
    "name": "enable_setting",
    "type": "string",
    "description": "Specifies whether the data source is enabled."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The unique identifier of the Amazon DataZone environment to which the data source publishes assets."
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": "The unique identifier of the Amazon DataZone environment to which the data source publishes assets."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique identifier of the data source."
  },
  {
    "name": "configuration",
    "type": "object",
    "description": "Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration."
  },
  {
    "name": "last_run_asset_count",
    "type": "number",
    "description": "The number of assets created by the data source during its last run."
  },
  {
    "name": "last_run_at",
    "type": "string",
    "description": "The timestamp that specifies when the data source was last run."
  },
  {
    "name": "last_run_status",
    "type": "string",
    "description": "The status of the last run of this data source."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the data source."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "The ID of the Amazon DataZone project to which the data source is added."
  },
  {
    "name": "project_identifier",
    "type": "string",
    "description": "The identifier of the Amazon DataZone project in which you want to add the data source."
  },
  {
    "name": "publish_on_import",
    "type": "boolean",
    "description": "Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog."
  },
  {
    "name": "recommendation",
    "type": "object",
    "description": "Specifies whether the business name generation is to be enabled for this data source.",
    "children": [
      {
        "name": "enable_business_name_generation",
        "type": "boolean",
        "description": "Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration."
      }
    ]
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "The schedule of the data source runs.",
    "children": [
      {
        "name": "timezone",
        "type": "string",
        "description": "The timezone of the data source run."
      },
      {
        "name": "schedule",
        "type": "string",
        "description": "The schedule of the data source runs."
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the data source."
  },
  {
    "name": "type",
    "type": "string",
    "description": "The type of the data source."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The timestamp of when this data source was updated."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html"><code>AWS::DataZone::DataSource</code></a>.

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
    <td><CopyableCode code="Name, DomainIdentifier, ProjectIdentifier, Type, region" /></td>
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

Gets all properties from an individual <code>data_source</code>.
```sql
SELECT
region,
asset_forms_input,
connection_id,
connection_identifier,
created_at,
description,
domain_id,
domain_identifier,
enable_setting,
environment_id,
environment_identifier,
id,
configuration,
last_run_asset_count,
last_run_at,
last_run_status,
name,
project_id,
project_identifier,
publish_on_import,
recommendation,
schedule,
status,
type,
updated_at
FROM awscc.datazone.data_sources
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.data_sources (
 DomainIdentifier,
 Name,
 ProjectIdentifier,
 Type,
 region
)
SELECT 
'{{ DomainIdentifier }}',
 '{{ Name }}',
 '{{ ProjectIdentifier }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.data_sources (
 AssetFormsInput,
 ConnectionIdentifier,
 Description,
 DomainIdentifier,
 EnableSetting,
 EnvironmentIdentifier,
 Configuration,
 Name,
 ProjectIdentifier,
 PublishOnImport,
 Recommendation,
 Schedule,
 Type,
 region
)
SELECT 
 '{{ AssetFormsInput }}',
 '{{ ConnectionIdentifier }}',
 '{{ Description }}',
 '{{ DomainIdentifier }}',
 '{{ EnableSetting }}',
 '{{ EnvironmentIdentifier }}',
 '{{ Configuration }}',
 '{{ Name }}',
 '{{ ProjectIdentifier }}',
 '{{ PublishOnImport }}',
 '{{ Recommendation }}',
 '{{ Schedule }}',
 '{{ Type }}',
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
  - name: data_source
    props:
      - name: AssetFormsInput
        value:
          - FormName: '{{ FormName }}'
            TypeIdentifier: '{{ TypeIdentifier }}'
            TypeRevision: '{{ TypeRevision }}'
            Content: '{{ Content }}'
      - name: ConnectionIdentifier
        value: '{{ ConnectionIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: EnableSetting
        value: '{{ EnableSetting }}'
      - name: EnvironmentIdentifier
        value: '{{ EnvironmentIdentifier }}'
      - name: Configuration
        value: null
      - name: Name
        value: '{{ Name }}'
      - name: ProjectIdentifier
        value: '{{ ProjectIdentifier }}'
      - name: PublishOnImport
        value: '{{ PublishOnImport }}'
      - name: Recommendation
        value:
          EnableBusinessNameGeneration: '{{ EnableBusinessNameGeneration }}'
      - name: Schedule
        value:
          Timezone: '{{ Timezone }}'
          Schedule: '{{ Schedule }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.data_sources
WHERE data__Identifier = '<DomainId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

### Create
```json
datazone:CreateDataSource,
iam:PassRole,
datazone:GetDataSource,
datazone:DeleteDataSource
```

### Read
```json
datazone:GetDataSource
```

### Update
```json
datazone:UpdateDataSource,
datazone:GetDataSource,
datazone:DeleteDataSource
```

### Delete
```json
datazone:DeleteDataSource,
datazone:GetDataSource
```

### List
```json
datazone:ListDataSources
```
