---
title: environment_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_profiles
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

Creates, updates, deletes or gets an <code>environment_profile</code> resource or lists <code>environment_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environment_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Datazone Environment Profile is pre-configured set of resources and blueprints that provide reusable templates for creating environments.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.environment_profiles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "aws_account_id",
    "type": "string",
    "description": "The AWS account in which the Amazon DataZone environment is created."
  },
  {
    "name": "aws_account_region",
    "type": "string",
    "description": "The AWS region in which this environment profile is created."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when this environment profile was created."
  },
  {
    "name": "created_by",
    "type": "string",
    "description": "The Amazon DataZone user who created this environment profile."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of this Amazon DataZone environment profile."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain in which this environment profile is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The ID of the Amazon DataZone domain in which this environment profile is created."
  },
  {
    "name": "environment_blueprint_id",
    "type": "string",
    "description": "The ID of the blueprint with which this environment profile is created."
  },
  {
    "name": "environment_blueprint_identifier",
    "type": "string",
    "description": "The ID of the blueprint with which this environment profile is created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of this Amazon DataZone environment profile."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of this Amazon DataZone environment profile."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "The identifier of the project in which to create the environment profile."
  },
  {
    "name": "project_identifier",
    "type": "string",
    "description": "The identifier of the project in which to create the environment profile."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The timestamp of when this environment profile was updated."
  },
  {
    "name": "user_parameters",
    "type": "array",
    "description": "The user parameters of this Amazon DataZone environment profile.",
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
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html"><code>AWS::DataZone::EnvironmentProfile</code></a>.

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
    <td><CopyableCode code="EnvironmentBlueprintIdentifier, ProjectIdentifier, DomainIdentifier, AwsAccountId, AwsAccountRegion, Name, region" /></td>
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

Gets all properties from an individual <code>environment_profile</code>.
```sql
SELECT
region,
aws_account_id,
aws_account_region,
created_at,
created_by,
description,
domain_id,
domain_identifier,
environment_blueprint_id,
environment_blueprint_identifier,
id,
name,
project_id,
project_identifier,
updated_at,
user_parameters
FROM awscc.datazone.environment_profiles
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.environment_profiles (
 AwsAccountId,
 AwsAccountRegion,
 DomainIdentifier,
 EnvironmentBlueprintIdentifier,
 Name,
 ProjectIdentifier,
 region
)
SELECT 
'{{ AwsAccountId }}',
 '{{ AwsAccountRegion }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentBlueprintIdentifier }}',
 '{{ Name }}',
 '{{ ProjectIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.environment_profiles (
 AwsAccountId,
 AwsAccountRegion,
 Description,
 DomainIdentifier,
 EnvironmentBlueprintIdentifier,
 Name,
 ProjectIdentifier,
 UserParameters,
 region
)
SELECT 
 '{{ AwsAccountId }}',
 '{{ AwsAccountRegion }}',
 '{{ Description }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentBlueprintIdentifier }}',
 '{{ Name }}',
 '{{ ProjectIdentifier }}',
 '{{ UserParameters }}',
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
  - name: environment_profile
    props:
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: AwsAccountRegion
        value: '{{ AwsAccountRegion }}'
      - name: Description
        value: '{{ Description }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: EnvironmentBlueprintIdentifier
        value: '{{ EnvironmentBlueprintIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: ProjectIdentifier
        value: '{{ ProjectIdentifier }}'
      - name: UserParameters
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.environment_profiles
WHERE data__Identifier = '<DomainId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environment_profiles</code> resource, the following permissions are required:

### Create
```json
datazone:CreateEnvironmentProfile,
datazone:GetEnvironmentProfile
```

### Read
```json
datazone:GetEnvironmentProfile
```

### Update
```json
datazone:UpdateEnvironmentProfile,
datazone:GetEnvironmentProfile
```

### Delete
```json
datazone:DeleteEnvironmentProfile,
datazone:GetEnvironmentProfile
```

### List
```json
datazone:ListEnvironmentProfiles
```
