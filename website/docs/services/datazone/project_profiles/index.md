---
title: project_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - project_profiles
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

Creates, updates, deletes or gets a <code>project_profile</code> resource or lists <code>project_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>project_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::DataZone::ProjectProfile Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.project_profiles" /></td></tr>
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
    "description": ""
  },
  {
    "name": "created_by",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_unit_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_unit_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "environment_blueprint_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "deployment_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "configuration_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "ssm_path",
            "type": "string",
            "description": ""
          },
          {
            "name": "parameter_overrides",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "value",
                "type": "string",
                "description": ""
              },
              {
                "name": "is_editable",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "resolved_parameters",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "aws_account",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "aws_account_id",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "aws_region",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "region_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "deployment_order",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
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
    "name": "domain_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html"><code>AWS::DataZone::ProjectProfile</code></a>.

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
    <td><code>project_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>project_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>project_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>project_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>project_profiles</code></td>
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

Gets all properties from an individual <code>project_profile</code>.
```sql
SELECT
region,
created_at,
created_by,
description,
domain_id,
domain_identifier,
domain_unit_id,
domain_unit_identifier,
environment_configurations,
id,
identifier,
last_updated_at,
name,
status
FROM awscc.datazone.project_profiles
WHERE region = 'us-east-1' AND Identifier = '<DomainIdentifier>|<Identifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>project_profiles</code> in a region.
```sql
SELECT
region,
domain_identifier,
identifier
FROM awscc.datazone.project_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>project_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.project_profiles (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.project_profiles (
 Description,
 DomainIdentifier,
 DomainUnitIdentifier,
 EnvironmentConfigurations,
 Name,
 Status,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DomainIdentifier }}',
 '{{ DomainUnitIdentifier }}',
 '{{ EnvironmentConfigurations }}',
 '{{ Name }}',
 '{{ Status }}',
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
  - name: project_profile
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: DomainUnitIdentifier
        value: '{{ DomainUnitIdentifier }}'
      - name: EnvironmentConfigurations
        value:
          - Name: '{{ Name }}'
            Id: '{{ Id }}'
            EnvironmentBlueprintId: '{{ EnvironmentBlueprintId }}'
            Description: '{{ Description }}'
            DeploymentMode: '{{ DeploymentMode }}'
            ConfigurationParameters:
              SsmPath: '{{ SsmPath }}'
              ParameterOverrides:
                - Name: '{{ Name }}'
                  Value: '{{ Value }}'
                  IsEditable: '{{ IsEditable }}'
              ResolvedParameters:
                - null
            AwsAccount:
              AwsAccountId: '{{ AwsAccountId }}'
            AwsRegion:
              RegionName: '{{ RegionName }}'
            DeploymentOrder: null
      - name: Name
        value: '{{ Name }}'
      - name: Status
        value: '{{ Status }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>project_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.project_profiles
SET PatchDocument = string('{{ {
    "Description": description,
    "DomainUnitIdentifier": domain_unit_identifier,
    "Name": name,
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainIdentifier>|<Identifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.project_profiles
WHERE Identifier = '<DomainIdentifier|Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>project_profiles</code> resource, the following permissions are required:

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
datazone:CreateProjectProfile,
datazone:GetProjectProfile,
ssm:GetParameter
```

</TabItem>
<TabItem value="read">

```json
datazone:GetProjectProfile,
ssm:GetParameter
```

</TabItem>
<TabItem value="update">

```json
datazone:UpdateProjectProfile,
datazone:GetProjectProfile,
ssm:GetParameter
```

</TabItem>
<TabItem value="delete">

```json
datazone:DeleteProjectProfile,
datazone:GetProjectProfile
```

</TabItem>
<TabItem value="list">

```json
datazone:ListProjectProfiles
```

</TabItem>
</Tabs>