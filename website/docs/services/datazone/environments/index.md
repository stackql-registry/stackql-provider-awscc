---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::DataZone::Environment Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.environments" /></td></tr>
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
    "name": "aws_account_id",
    "type": "string",
    "description": "The AWS account in which the Amazon DataZone environment is created."
  },
  {
    "name": "aws_account_region",
    "type": "string",
    "description": "The AWS region in which the Amazon DataZone environment is created."
  },
  {
    "name": "environment_account_identifier",
    "type": "string",
    "description": "The AWS account in which the Amazon DataZone environment is created."
  },
  {
    "name": "environment_account_region",
    "type": "string",
    "description": "The AWS region in which the Amazon DataZone environment is created."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the environment was created."
  },
  {
    "name": "created_by",
    "type": "string",
    "description": "The Amazon DataZone user who created the environment."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the Amazon DataZone environment."
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the environment is created."
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the environment would be created."
  },
  {
    "name": "environment_blueprint_id",
    "type": "string",
    "description": "The ID of the blueprint with which the Amazon DataZone environment was created."
  },
  {
    "name": "environment_profile_id",
    "type": "string",
    "description": "The ID of the environment profile with which the Amazon DataZone environment was created."
  },
  {
    "name": "environment_profile_identifier",
    "type": "string",
    "description": "The ID of the environment profile with which the Amazon DataZone environment would be created."
  },
  {
    "name": "glossary_terms",
    "type": "array",
    "description": "The glossary terms that can be used in the Amazon DataZone environment."
  },
  {
    "name": "environment_role_arn",
    "type": "string",
    "description": "Environment role arn for custom aws environment permissions"
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone environment."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the environment."
  },
  {
    "name": "project_id",
    "type": "string",
    "description": "The ID of the Amazon DataZone project in which the environment is created."
  },
  {
    "name": "project_identifier",
    "type": "string",
    "description": "The ID of the Amazon DataZone project in which the environment would be created."
  },
  {
    "name": "provider",
    "type": "string",
    "description": "The provider of the Amazon DataZone environment."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the Amazon DataZone environment."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The timestamp of when the environment was updated."
  },
  {
    "name": "user_parameters",
    "type": "array",
    "description": "The user parameters of the Amazon DataZone environment.",
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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "domain_id",
    "type": "string",
    "description": "The identifier of the Amazon DataZone domain in which the environment is created."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Amazon DataZone environment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html"><code>AWS::DataZone::Environment</code></a>.

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
    <td><code>environments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ProjectIdentifier, DomainIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environments</code></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
aws_account_id,
aws_account_region,
environment_account_identifier,
environment_account_region,
created_at,
created_by,
description,
domain_id,
domain_identifier,
environment_blueprint_id,
environment_profile_id,
environment_profile_identifier,
glossary_terms,
environment_role_arn,
id,
name,
project_id,
project_identifier,
provider,
status,
updated_at,
user_parameters
FROM awscc.datazone.environments
WHERE region = 'us-east-1' AND data__Identifier = '<DomainId>|<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>environments</code> in a region.
```sql
SELECT
region,
domain_id,
id
FROM awscc.datazone.environments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.environments (
 DomainIdentifier,
 Name,
 ProjectIdentifier,
 region
)
SELECT 
'{{ DomainIdentifier }}',
 '{{ Name }}',
 '{{ ProjectIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.environments (
 EnvironmentAccountIdentifier,
 EnvironmentAccountRegion,
 Description,
 DomainIdentifier,
 EnvironmentProfileIdentifier,
 GlossaryTerms,
 EnvironmentRoleArn,
 Name,
 ProjectIdentifier,
 UserParameters,
 region
)
SELECT 
 '{{ EnvironmentAccountIdentifier }}',
 '{{ EnvironmentAccountRegion }}',
 '{{ Description }}',
 '{{ DomainIdentifier }}',
 '{{ EnvironmentProfileIdentifier }}',
 '{{ GlossaryTerms }}',
 '{{ EnvironmentRoleArn }}',
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
  - name: environment
    props:
      - name: EnvironmentAccountIdentifier
        value: '{{ EnvironmentAccountIdentifier }}'
      - name: EnvironmentAccountRegion
        value: '{{ EnvironmentAccountRegion }}'
      - name: Description
        value: '{{ Description }}'
      - name: DomainIdentifier
        value: '{{ DomainIdentifier }}'
      - name: EnvironmentProfileIdentifier
        value: '{{ EnvironmentProfileIdentifier }}'
      - name: GlossaryTerms
        value:
          - '{{ GlossaryTerms[0] }}'
      - name: EnvironmentRoleArn
        value: '{{ EnvironmentRoleArn }}'
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

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.datazone.environments
SET data__PatchDocument = string('{{ {
    "Description": description,
    "GlossaryTerms": glossary_terms,
    "EnvironmentRoleArn": environment_role_arn,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DomainId>|<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.environments
WHERE data__Identifier = '<DomainId|Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

### Create
```json
datazone:CreateEnvironment,
datazone:GetEnvironment,
datazone:DeleteEnvironment,
datazone:AssociateEnvironmentRole,
iam:PassRole
```

### Read
```json
datazone:GetEnvironment
```

### Update
```json
datazone:UpdateEnvironment,
datazone:GetEnvironment,
datazone:DeleteEnvironment,
datazone:AssociateEnvironmentRole,
datazone:DisassociateEnvironmentRole,
iam:PassRole
```

### Delete
```json
datazone:DeleteEnvironment,
datazone:GetEnvironment
```

### List
```json
datazone:ListEnvironments
```
