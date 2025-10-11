---
title: registry_scanning_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_scanning_configurations
  - ecr
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

Creates, updates, deletes or gets a <code>registry_scanning_configuration</code> resource or lists <code>registry_scanning_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>registry_scanning_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The scanning configuration for a private registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.registry_scanning_configurations" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="rules" /></td><td><code>array</code></td><td>The scanning rules associated with the registry.</td></tr>
<tr><td><CopyableCode code="scan_type" /></td><td><code>string</code></td><td>The type of scanning configured for the registry.</td></tr>
<tr><td><CopyableCode code="registry_id" /></td><td><code>string</code></td><td>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html"><code>AWS::ECR::RegistryScanningConfiguration</code></a>.

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
    <td><CopyableCode code="Rules, ScanType, region" /></td>
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
Gets all <code>registry_scanning_configurations</code> in a region.
```sql
SELECT
region,
rules,
scan_type,
registry_id
FROM awscc.ecr.registry_scanning_configurations
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>registry_scanning_configuration</code>.
```sql
SELECT
region,
rules,
scan_type,
registry_id
FROM awscc.ecr.registry_scanning_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<RegistryId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>registry_scanning_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.registry_scanning_configurations (
 Rules,
 ScanType,
 region
)
SELECT 
'{{ Rules }}',
 '{{ ScanType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.registry_scanning_configurations (
 Rules,
 ScanType,
 region
)
SELECT 
 '{{ Rules }}',
 '{{ ScanType }}',
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
  - name: registry_scanning_configuration
    props:
      - name: Rules
        value:
          - RepositoryFilters:
              - Filter: '{{ Filter }}'
                FilterType: '{{ FilterType }}'
            ScanFrequency: '{{ ScanFrequency }}'
      - name: ScanType
        value: '{{ ScanType }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.registry_scanning_configurations
WHERE data__Identifier = '<RegistryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>registry_scanning_configurations</code> resource, the following permissions are required:

### Create
```json
ecr:PutRegistryScanningConfiguration,
ecr:GetRegistryScanningConfiguration,
inspector2:Enable,
iam:CreateServiceLinkedRole
```

### Read
```json
ecr:GetRegistryScanningConfiguration
```

### Update
```json
ecr:PutRegistryScanningConfiguration,
ecr:GetRegistryScanningConfiguration,
inspector2:Enable,
inspector2:Disable,
inspector2:ListAccountPermissions,
iam:CreateServiceLinkedRole
```

### Delete
```json
ecr:PutRegistryScanningConfiguration,
ecr:GetRegistryScanningConfiguration,
inspector2:ListAccountPermissions,
inspector2:Disable
```

### List
```json
ecr:GetRegistryScanningConfiguration
```
