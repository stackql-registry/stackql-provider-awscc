---
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
  - licensemanager
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

Creates, updates, deletes or gets a <code>license</code> resource or lists <code>licenses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>licenses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::LicenseManager::License</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.licensemanager.licenses" /></td></tr>
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
    "name": "product_sku",
    "type": "string",
    "description": "ProductSKU of the license."
  },
  {
    "name": "issuer",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "sign_key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "license_name",
    "type": "string",
    "description": "Name for the created license."
  },
  {
    "name": "product_name",
    "type": "string",
    "description": "Product name for the created license."
  },
  {
    "name": "home_region",
    "type": "string",
    "description": "Home region for the created license."
  },
  {
    "name": "validity",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "begin",
        "type": "string",
        "description": "Validity begin date for the license."
      },
      {
        "name": "end",
        "type": "string",
        "description": "Validity begin date for the license."
      }
    ]
  },
  {
    "name": "entitlements",
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
        "name": "max_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "overage",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "unit",
        "type": "string",
        "description": ""
      },
      {
        "name": "allow_check_in",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "beneficiary",
    "type": "string",
    "description": "Beneficiary of the license."
  },
  {
    "name": "consumption_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "renew_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "provisional_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_time_to_live_in_minutes",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "borrow_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_time_to_live_in_minutes",
            "type": "integer",
            "description": ""
          },
          {
            "name": "allow_early_check_in",
            "type": "boolean",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "license_metadata",
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
      }
    ]
  },
  {
    "name": "license_arn",
    "type": "string",
    "description": "Amazon Resource Name is a unique name for each resource."
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "version",
    "type": "string",
    "description": "The version of the license."
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
    "name": "license_arn",
    "type": "string",
    "description": "Amazon Resource Name is a unique name for each resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html"><code>AWS::LicenseManager::License</code></a>.

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
    <td><code>licenses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LicenseName, ProductName, Issuer, HomeRegion, Validity, ConsumptionConfiguration, Entitlements, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>licenses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>licenses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>licenses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>licenses</code></td>
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

Gets all properties from an individual <code>license</code>.
```sql
SELECT
region,
product_sku,
issuer,
license_name,
product_name,
home_region,
validity,
entitlements,
beneficiary,
consumption_configuration,
license_metadata,
license_arn,
status,
version
FROM awscc.licensemanager.licenses
WHERE region = 'us-east-1' AND Identifier = '<LicenseArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>licenses</code> in a region.
```sql
SELECT
region,
license_arn
FROM awscc.licensemanager.licenses_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>license</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.licensemanager.licenses (
 Issuer,
 LicenseName,
 ProductName,
 HomeRegion,
 Validity,
 Entitlements,
 ConsumptionConfiguration,
 region
)
SELECT 
'{{ Issuer }}',
 '{{ LicenseName }}',
 '{{ ProductName }}',
 '{{ HomeRegion }}',
 '{{ Validity }}',
 '{{ Entitlements }}',
 '{{ ConsumptionConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.licensemanager.licenses (
 ProductSKU,
 Issuer,
 LicenseName,
 ProductName,
 HomeRegion,
 Validity,
 Entitlements,
 Beneficiary,
 ConsumptionConfiguration,
 LicenseMetadata,
 Status,
 region
)
SELECT 
 '{{ ProductSKU }}',
 '{{ Issuer }}',
 '{{ LicenseName }}',
 '{{ ProductName }}',
 '{{ HomeRegion }}',
 '{{ Validity }}',
 '{{ Entitlements }}',
 '{{ Beneficiary }}',
 '{{ ConsumptionConfiguration }}',
 '{{ LicenseMetadata }}',
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
  - name: license
    props:
      - name: ProductSKU
        value: '{{ ProductSKU }}'
      - name: Issuer
        value:
          Name: '{{ Name }}'
          SignKey: '{{ SignKey }}'
      - name: LicenseName
        value: '{{ LicenseName }}'
      - name: ProductName
        value: '{{ ProductName }}'
      - name: HomeRegion
        value: '{{ HomeRegion }}'
      - name: Validity
        value:
          Begin: '{{ Begin }}'
          End: '{{ End }}'
      - name: Entitlements
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'
            MaxCount: '{{ MaxCount }}'
            Overage: '{{ Overage }}'
            Unit: '{{ Unit }}'
            AllowCheckIn: '{{ AllowCheckIn }}'
      - name: Beneficiary
        value: '{{ Beneficiary }}'
      - name: ConsumptionConfiguration
        value:
          RenewType: '{{ RenewType }}'
          ProvisionalConfiguration:
            MaxTimeToLiveInMinutes: '{{ MaxTimeToLiveInMinutes }}'
          BorrowConfiguration:
            MaxTimeToLiveInMinutes: '{{ MaxTimeToLiveInMinutes }}'
            AllowEarlyCheckIn: '{{ AllowEarlyCheckIn }}'
      - name: LicenseMetadata
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'
      - name: Status
        value: '{{ Status }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>license</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.licensemanager.licenses
SET PatchDocument = string('{{ {
    "ProductSKU": product_sku,
    "Issuer": issuer,
    "LicenseName": license_name,
    "ProductName": product_name,
    "HomeRegion": home_region,
    "Validity": validity,
    "Entitlements": entitlements,
    "Beneficiary": beneficiary,
    "ConsumptionConfiguration": consumption_configuration,
    "LicenseMetadata": license_metadata,
    "Status": status
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<LicenseArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.licensemanager.licenses
WHERE Identifier = '<LicenseArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>licenses</code> resource, the following permissions are required:

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
license-manager:CreateLicense
```

</TabItem>
<TabItem value="read">

```json
license-manager:GetLicense
```

</TabItem>
<TabItem value="update">

```json
license-manager:CreateLicenseVersion
```

</TabItem>
<TabItem value="delete">

```json
license-manager:DeleteLicense
```

</TabItem>
<TabItem value="list">

```json
license-manager:ListLicenses
```

</TabItem>
</Tabs>