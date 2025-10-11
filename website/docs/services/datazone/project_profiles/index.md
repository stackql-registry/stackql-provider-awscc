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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="created_by" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_identifier" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_unit_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_unit_identifier" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="environment_configurations" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="identifier" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="last_updated_at" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html"><code>AWS::DataZone::ProjectProfile</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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
Gets all <code>project_profiles</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<DomainIdentifier>|<Identifier>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.project_profiles
WHERE data__Identifier = '<DomainIdentifier|Identifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>project_profiles</code> resource, the following permissions are required:

### Create
```json
datazone:CreateProjectProfile,
datazone:GetProjectProfile,
ssm:GetParameter
```

### Read
```json
datazone:GetProjectProfile,
ssm:GetParameter
```

### Update
```json
datazone:UpdateProjectProfile,
datazone:GetProjectProfile,
ssm:GetParameter
```

### Delete
```json
datazone:DeleteProjectProfile,
datazone:GetProjectProfile
```

### List
```json
datazone:ListProjectProfiles
```
