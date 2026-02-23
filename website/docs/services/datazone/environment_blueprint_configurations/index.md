---
title: environment_blueprint_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_blueprint_configurations
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

Creates, updates, deletes or gets an <code>environment_blueprint_configuration</code> resource or lists <code>environment_blueprint_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environment_blueprint_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::DataZone::EnvironmentBlueprintConfiguration Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.environment_blueprint_configurations" /></td></tr>
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
    "name": "enabled_regions",
    "type": "array",
    "description": ""
  },
  {
    "name": "environment_blueprint_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_blueprint_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "regional_parameters",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "parameters",
        "type": "object",
        "description": ""
      },
      {
        "name": "region",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "provisioning_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_configurations",
    "type": "array",
    "description": ""
  },
  {
    "name": "domain_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_role_permission_boundary",
    "type": "string",
    "description": ""
  },
  {
    "name": "manage_access_role_arn",
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
    "name": "environment_blueprint_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html"><code>AWS::DataZone::EnvironmentBlueprintConfiguration</code></a>.

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
    <td><code>environment_blueprint_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainIdentifier, EnvironmentBlueprintIdentifier, EnabledRegions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environment_blueprint_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environment_blueprint_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environment_blueprint_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environment_blueprint_configurations</code></td>
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

Gets all properties from an individual <code>environment_blueprint_configuration</code>.
```sql
SELECT
region,
created_at,
enabled_regions,
environment_blueprint_identifier,
environment_blueprint_id,
updated_at,
regional_parameters,
provisioning_role_arn,
domain_id,
provisioning_configurations,
domain_identifier,
environment_role_permission_boundary,
manage_access_role_arn
FROM awscc.datazone.environment_blueprint_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ domain_id }}|{{ environment_blueprint_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>environment_blueprint_configurations</code> in a region.
```sql
SELECT
region,
domain_id,
environment_blueprint_id
FROM awscc.datazone.environment_blueprint_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment_blueprint_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.environment_blueprint_configurations (
 EnabledRegions,
 EnvironmentBlueprintIdentifier,
 DomainIdentifier,
 region
)
SELECT
'{{ enabled_regions }}',
 '{{ environment_blueprint_identifier }}',
 '{{ domain_identifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.environment_blueprint_configurations (
 EnabledRegions,
 EnvironmentBlueprintIdentifier,
 RegionalParameters,
 ProvisioningRoleArn,
 ProvisioningConfigurations,
 DomainIdentifier,
 EnvironmentRolePermissionBoundary,
 ManageAccessRoleArn,
 region
)
SELECT
 '{{ enabled_regions }}',
 '{{ environment_blueprint_identifier }}',
 '{{ regional_parameters }}',
 '{{ provisioning_role_arn }}',
 '{{ provisioning_configurations }}',
 '{{ domain_identifier }}',
 '{{ environment_role_permission_boundary }}',
 '{{ manage_access_role_arn }}',
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
  - name: environment_blueprint_configuration
    props:
      - name: enabled_regions
        value:
          - '{{ enabled_regions[0] }}'
      - name: environment_blueprint_identifier
        value: '{{ environment_blueprint_identifier }}'
      - name: regional_parameters
        value:
          - parameters: {}
            region: '{{ region }}'
      - name: provisioning_role_arn
        value: '{{ provisioning_role_arn }}'
      - name: provisioning_configurations
        value:
          - null
      - name: domain_identifier
        value: '{{ domain_identifier }}'
      - name: environment_role_permission_boundary
        value: '{{ environment_role_permission_boundary }}'
      - name: manage_access_role_arn
        value: '{{ manage_access_role_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>environment_blueprint_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.datazone.environment_blueprint_configurations
SET PatchDocument = string('{{ {
    "EnabledRegions": enabled_regions,
    "RegionalParameters": regional_parameters,
    "ProvisioningRoleArn": provisioning_role_arn,
    "ProvisioningConfigurations": provisioning_configurations,
    "EnvironmentRolePermissionBoundary": environment_role_permission_boundary,
    "ManageAccessRoleArn": manage_access_role_arn
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_id }}|{{ environment_blueprint_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.environment_blueprint_configurations
WHERE Identifier = '{{ domain_id }}|{{ environment_blueprint_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environment_blueprint_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
datazone:GetEnvironmentBlueprintConfiguration
```

</TabItem>
<TabItem value="create">

```json
datazone:ListEnvironmentBlueprints,
iam:PassRole,
datazone:GetEnvironmentBlueprintConfiguration,
datazone:PutEnvironmentBlueprintConfiguration
```

</TabItem>
<TabItem value="update">

```json
datazone:DeleteEnvironmentBlueprintConfiguration,
iam:PassRole,
datazone:GetEnvironmentBlueprintConfiguration,
datazone:PutEnvironmentBlueprintConfiguration
```

</TabItem>
<TabItem value="list">

```json
datazone:ListEnvironmentBlueprintConfigurations
```

</TabItem>
<TabItem value="delete">

```json
datazone:GetEnvironmentBlueprintConfiguration,
datazone:DeleteEnvironmentBlueprintConfiguration
```

</TabItem>
</Tabs>