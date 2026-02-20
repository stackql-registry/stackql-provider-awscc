---
title: landing_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - landing_zones
  - controltower
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

Creates, updates, deletes or gets a <code>landing_zone</code> resource or lists <code>landing_zones</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>landing_zones</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ControlTower::LandingZone Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.controltower.landing_zones" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "latest_available_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "version",
    "type": "string",
    "description": ""
  },
  {
    "name": "drift_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "manifest",
    "type": "object",
    "description": ""
  },
  {
    "name": "landing_zone_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "landing_zone_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-landingzone.html"><code>AWS::ControlTower::LandingZone</code></a>.

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
    <td><code>landing_zones</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Manifest, Version, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>landing_zones</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>landing_zones</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>landing_zones_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>landing_zones</code></td>
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

Gets all properties from an individual <code>landing_zone</code>.
```sql
SELECT
region,
status,
latest_available_version,
version,
drift_status,
arn,
manifest,
landing_zone_identifier,
tags
FROM awscc.controltower.landing_zones
WHERE region = 'us-east-1' AND Identifier = '<LandingZoneIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>landing_zones</code> in a region.
```sql
SELECT
region,
landing_zone_identifier
FROM awscc.controltower.landing_zones_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>landing_zone</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.controltower.landing_zones (
 Version,
 Manifest,
 region
)
SELECT 
'{{ Version }}',
 '{{ Manifest }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.controltower.landing_zones (
 Version,
 Manifest,
 Tags,
 region
)
SELECT 
 '{{ Version }}',
 '{{ Manifest }}',
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
  - name: landing_zone
    props:
      - name: Version
        value: '{{ Version }}'
      - name: Manifest
        value: null
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.controltower.landing_zones
SET PatchDocument = string('{{ {
    "Version": version,
    "Manifest": manifest,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<LandingZoneIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.controltower.landing_zones
WHERE Identifier = '<LandingZoneIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>landing_zones</code> resource, the following permissions are required:

### Read
```json
controltower:GetLandingZone,
controltower:ListTagsForResource
```

### Create
```json
controltower:CreateLandingZone,
controltower:GetLandingZoneOperation,
controltower:ListTagsForResource,
controltower:TagResource,
controltower:GetLandingZone,
cloudformation:DescribeOrganizationsAccess,
servicecatalog:AssociatePrincipalWithPortfolio,
servicecatalog:AssociateProductWithPortfolio,
servicecatalog:CreatePortfolio,
servicecatalog:CreateProduct,
servicecatalog:CreateProvisioningArtifact,
servicecatalog:ListPortfolios,
servicecatalog:ListProvisioningArtifacts,
servicecatalog:SearchProductsAsAdmin,
servicecatalog:UpdatePortfolio,
servicecatalog:UpdateProvisioningArtifact,
servicecatalog:ListPrincipalsForPortfolio,
organizations:CreateOrganizationalUnit,
organizations:CreateOrganization,
organizations:UpdatePolicy,
organizations:CreatePolicy,
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:DeletePolicy,
organizations:EnablePolicyType,
organizations:EnableAWSServiceAccess,
organizations:ListRoots,
sso:GetPeregrineStatus,
sso:ListDirectoryAssociations,
sso:StartPeregrine,
iam:CreateServiceLinkedRole,
cloudformation:EnableOrganizationsAccess,
sso:RegisterRegion
```

### Update
```json
controltower:UpdateLandingZone,
controltower:GetLandingZoneOperation,
controltower:ListTagsForResource,
controltower:TagResource,
controltower:GetLandingZone,
controltower:UntagResource,
cloudformation:DescribeOrganizationsAccess,
servicecatalog:AssociatePrincipalWithPortfolio,
servicecatalog:AssociateProductWithPortfolio,
servicecatalog:CreatePortfolio,
servicecatalog:CreateProduct,
servicecatalog:CreateProvisioningArtifact,
servicecatalog:ListPortfolios,
servicecatalog:ListProvisioningArtifacts,
servicecatalog:SearchProductsAsAdmin,
servicecatalog:UpdatePortfolio,
servicecatalog:UpdateProvisioningArtifact,
servicecatalog:ListPrincipalsForPortfolio,
organizations:CreateOrganizationalUnit,
organizations:CreateOrganization,
organizations:UpdatePolicy,
organizations:CreatePolicy,
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:DeletePolicy,
organizations:EnablePolicyType,
organizations:EnableAWSServiceAccess,
organizations:ListRoots,
sso:GetPeregrineStatus,
iam:CreateServiceLinkedRole,
cloudformation:EnableOrganizationsAccess,
sso:ListDirectoryAssociations,
sso:StartPeregrine,
sso:RegisterRegion
```

### List
```json
controltower:ListLandingZones
```

### Delete
```json
controltower:DeleteLandingZone,
controltower:GetLandingZone,
controltower:GetLandingZoneOperation,
cloudformation:DescribeOrganizationsAccess,
servicecatalog:ListPortfolios,
servicecatalog:ListProvisioningArtifacts,
servicecatalog:SearchProductsAsAdmin,
servicecatalog:DeleteProvisioningArtifact,
servicecatalog:ListPrincipalsForPortfolio,
servicecatalog:DeleteProduct,
servicecatalog:DisassociatePrincipalFromPortfolio,
servicecatalog:DisassociateProductFromPortfolio,
servicecatalog:DeletePortfolio,
organizations:AttachPolicy,
organizations:DetachPolicy,
organizations:DeletePolicy,
organizations:ListRoots,
sso:GetPeregrineStatus,
sso:ListDirectoryAssociations,
iam:CreateServiceLinkedRole,
iam:DeleteRolePolicy,
iam:DetachRolePolicy,
cloudformation:EnableOrganizationsAccess,
iam:DeleteRole
```
