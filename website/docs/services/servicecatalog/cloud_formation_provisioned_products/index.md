---
title: cloud_formation_provisioned_products
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_formation_provisioned_products
  - servicecatalog
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

Creates, updates, deletes or gets a <code>cloud_formation_provisioned_product</code> resource or lists <code>cloud_formation_provisioned_products</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cloud_formation_provisioned_products</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::ServiceCatalog::CloudFormationProvisionedProduct</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.cloud_formation_provisioned_products" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "accept_language",
    "type": "string",
    "description": ""
  },
  {
    "name": "notification_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "path_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "path_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "product_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioned_product_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_artifact_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_artifact_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_parameters",
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
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "provisioning_preferences",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "stack_set_accounts",
        "type": "array",
        "description": ""
      },
      {
        "name": "stack_set_failure_tolerance_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "stack_set_failure_tolerance_percentage",
        "type": "integer",
        "description": ""
      },
      {
        "name": "stack_set_max_concurrency_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "stack_set_max_concurrency_percentage",
        "type": "integer",
        "description": ""
      },
      {
        "name": "stack_set_operation_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "stack_set_regions",
        "type": "array",
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
        "name": "key",
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
    "name": "provisioned_product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "record_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "cloudformation_stack_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "outputs",
    "type": "object",
    "description": "List of key-value pair outputs."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html"><code>AWS::ServiceCatalog::CloudFormationProvisionedProduct</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>cloud_formation_provisioned_product</code>.
```sql
SELECT
region,
accept_language,
notification_arns,
path_id,
path_name,
product_id,
product_name,
provisioned_product_name,
provisioning_artifact_id,
provisioning_artifact_name,
provisioning_parameters,
provisioning_preferences,
tags,
provisioned_product_id,
record_id,
cloudformation_stack_arn,
outputs
FROM awscc.servicecatalog.cloud_formation_provisioned_products
WHERE region = 'us-east-1' AND data__Identifier = '<ProvisionedProductId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cloud_formation_provisioned_product</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.servicecatalog.cloud_formation_provisioned_products (
 AcceptLanguage,
 NotificationArns,
 PathId,
 PathName,
 ProductId,
 ProductName,
 ProvisionedProductName,
 ProvisioningArtifactId,
 ProvisioningArtifactName,
 ProvisioningParameters,
 ProvisioningPreferences,
 Tags,
 region
)
SELECT 
'{{ AcceptLanguage }}',
 '{{ NotificationArns }}',
 '{{ PathId }}',
 '{{ PathName }}',
 '{{ ProductId }}',
 '{{ ProductName }}',
 '{{ ProvisionedProductName }}',
 '{{ ProvisioningArtifactId }}',
 '{{ ProvisioningArtifactName }}',
 '{{ ProvisioningParameters }}',
 '{{ ProvisioningPreferences }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.servicecatalog.cloud_formation_provisioned_products (
 AcceptLanguage,
 NotificationArns,
 PathId,
 PathName,
 ProductId,
 ProductName,
 ProvisionedProductName,
 ProvisioningArtifactId,
 ProvisioningArtifactName,
 ProvisioningParameters,
 ProvisioningPreferences,
 Tags,
 region
)
SELECT 
 '{{ AcceptLanguage }}',
 '{{ NotificationArns }}',
 '{{ PathId }}',
 '{{ PathName }}',
 '{{ ProductId }}',
 '{{ ProductName }}',
 '{{ ProvisionedProductName }}',
 '{{ ProvisioningArtifactId }}',
 '{{ ProvisioningArtifactName }}',
 '{{ ProvisioningParameters }}',
 '{{ ProvisioningPreferences }}',
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
  - name: cloud_formation_provisioned_product
    props:
      - name: AcceptLanguage
        value: '{{ AcceptLanguage }}'
      - name: NotificationArns
        value:
          - '{{ NotificationArns[0] }}'
      - name: PathId
        value: '{{ PathId }}'
      - name: PathName
        value: '{{ PathName }}'
      - name: ProductId
        value: '{{ ProductId }}'
      - name: ProductName
        value: '{{ ProductName }}'
      - name: ProvisionedProductName
        value: '{{ ProvisionedProductName }}'
      - name: ProvisioningArtifactId
        value: '{{ ProvisioningArtifactId }}'
      - name: ProvisioningArtifactName
        value: '{{ ProvisioningArtifactName }}'
      - name: ProvisioningParameters
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ProvisioningPreferences
        value:
          StackSetAccounts:
            - '{{ StackSetAccounts[0] }}'
          StackSetFailureToleranceCount: '{{ StackSetFailureToleranceCount }}'
          StackSetFailureTolerancePercentage: '{{ StackSetFailureTolerancePercentage }}'
          StackSetMaxConcurrencyCount: '{{ StackSetMaxConcurrencyCount }}'
          StackSetMaxConcurrencyPercentage: '{{ StackSetMaxConcurrencyPercentage }}'
          StackSetOperationType: '{{ StackSetOperationType }}'
          StackSetRegions:
            - '{{ StackSetRegions[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.servicecatalog.cloud_formation_provisioned_products
SET data__PatchDocument = string('{{ {
    "AcceptLanguage": accept_language,
    "PathId": path_id,
    "PathName": path_name,
    "ProductId": product_id,
    "ProductName": product_name,
    "ProvisioningArtifactId": provisioning_artifact_id,
    "ProvisioningArtifactName": provisioning_artifact_name,
    "ProvisioningParameters": provisioning_parameters,
    "ProvisioningPreferences": provisioning_preferences,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ProvisionedProductId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.servicecatalog.cloud_formation_provisioned_products
WHERE data__Identifier = '<ProvisionedProductId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cloud_formation_provisioned_products</code> resource, the following permissions are required:

### Create
```json
servicecatalog:provisionProduct,
cloudformation:CreateStack
```

### Read
```json
servicecatalog:describeProvisionedProduct,
cloudformation:ListStacks
```

### Update
```json
servicecatalog:updateProvisionedProduct,
cloudformation:UpdateStack
```

### Delete
```json
servicecatalog:terminateProvisionedProduct,
servicecatalog:describeRecord,
cloudformation:DeleteStack
```
