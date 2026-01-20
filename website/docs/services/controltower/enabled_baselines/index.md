---
title: enabled_baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - enabled_baselines
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

Creates, updates, deletes or gets an <code>enabled_baseline</code> resource or lists <code>enabled_baselines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>enabled_baselines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ControlTower::EnabledBaseline Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.controltower.enabled_baselines" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "baseline_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "baseline_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled_baseline_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "target_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "object",
        "description": ""
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html"><code>AWS::ControlTower::EnabledBaseline</code></a>.

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
    <td><CopyableCode code="BaselineIdentifier, TargetIdentifier, BaselineVersion, region" /></td>
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

Gets all properties from an individual <code>enabled_baseline</code>.
```sql
SELECT
region,
baseline_identifier,
baseline_version,
enabled_baseline_identifier,
target_identifier,
parameters,
tags
FROM awscc.controltower.enabled_baselines
WHERE region = 'us-east-1' AND data__Identifier = '<EnabledBaselineIdentifier>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>enabled_baseline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.controltower.enabled_baselines (
 BaselineIdentifier,
 BaselineVersion,
 TargetIdentifier,
 region
)
SELECT 
'{{ BaselineIdentifier }}',
 '{{ BaselineVersion }}',
 '{{ TargetIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.controltower.enabled_baselines (
 BaselineIdentifier,
 BaselineVersion,
 TargetIdentifier,
 Parameters,
 Tags,
 region
)
SELECT 
 '{{ BaselineIdentifier }}',
 '{{ BaselineVersion }}',
 '{{ TargetIdentifier }}',
 '{{ Parameters }}',
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
  - name: enabled_baseline
    props:
      - name: BaselineIdentifier
        value: '{{ BaselineIdentifier }}'
      - name: BaselineVersion
        value: '{{ BaselineVersion }}'
      - name: TargetIdentifier
        value: '{{ TargetIdentifier }}'
      - name: Parameters
        value:
          - Key: '{{ Key }}'
            Value: null
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.controltower.enabled_baselines
WHERE data__Identifier = '<EnabledBaselineIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>enabled_baselines</code> resource, the following permissions are required:

### Create
```json
controltower:EnableBaseline,
controltower:TagResource,
controltower:UntagResource,
controltower:GetBaselineOperation,
controltower:GetEnabledBaseline,
controltower:ListTagsForResource,
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
servicecatalog:DeleteProvisioningArtifact
```

### Read
```json
controltower:GetEnabledBaseline,
controltower:ListEnabledBaselines,
controltower:ListTagsForResource
```

### Update
```json
controltower:UpdateEnabledBaseline,
controltower:GetBaselineOperation,
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
servicecatalog:DeleteProvisioningArtifact,
controltower:TagResource,
controltower:UntagResource,
controltower:GetEnabledBaseline
```

### Delete
```json
controltower:DisableBaseline,
controltower:GetBaselineOperation,
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
servicecatalog:DeleteProvisioningArtifact
```

### List
```json
controltower:ListEnabledBaselines
```
