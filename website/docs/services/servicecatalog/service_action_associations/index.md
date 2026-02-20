---
title: service_action_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_action_associations
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

Creates, updates, deletes or gets a <code>service_action_association</code> resource or lists <code>service_action_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_action_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema for AWS::ServiceCatalog::ServiceActionAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.servicecatalog.service_action_associations" /></td></tr>
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
    "name": "product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_artifact_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_action_id",
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
    "name": "product_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "provisioning_artifact_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_action_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html"><code>AWS::ServiceCatalog::ServiceActionAssociation</code></a>.

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
    <td><code>service_action_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProductId, ProvisioningArtifactId, ServiceActionId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>service_action_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>service_action_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>service_action_associations</code></td>
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

Gets all properties from an individual <code>service_action_association</code>.
```sql
SELECT
region,
product_id,
provisioning_artifact_id,
service_action_id
FROM awscc.servicecatalog.service_action_associations
WHERE region = 'us-east-1' AND data__Identifier = '<ProductId>|<ProvisioningArtifactId>|<ServiceActionId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>service_action_associations</code> in a region.
```sql
SELECT
region,
product_id,
provisioning_artifact_id,
service_action_id
FROM awscc.servicecatalog.service_action_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_action_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.servicecatalog.service_action_associations (
 ProductId,
 ProvisioningArtifactId,
 ServiceActionId,
 region
)
SELECT 
'{{ ProductId }}',
 '{{ ProvisioningArtifactId }}',
 '{{ ServiceActionId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.servicecatalog.service_action_associations (
 ProductId,
 ProvisioningArtifactId,
 ServiceActionId,
 region
)
SELECT 
 '{{ ProductId }}',
 '{{ ProvisioningArtifactId }}',
 '{{ ServiceActionId }}',
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
  - name: service_action_association
    props:
      - name: ProductId
        value: '{{ ProductId }}'
      - name: ProvisioningArtifactId
        value: '{{ ProvisioningArtifactId }}'
      - name: ServiceActionId
        value: '{{ ServiceActionId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.servicecatalog.service_action_associations
WHERE data__Identifier = '<ProductId|ProvisioningArtifactId|ServiceActionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_action_associations</code> resource, the following permissions are required:

### Create
```json
servicecatalog:AssociateServiceActionWithProvisioningArtifact,
servicecatalog:ListServiceActionsForProvisioningArtifact
```

### Read
```json
servicecatalog:ListServiceActionsForProvisioningArtifact
```

### Delete
```json
servicecatalog:DisassociateServiceActionFromProvisioningArtifact,
servicecatalog:ListServiceActionsForProvisioningArtifact
```

### List
```json
servicecatalog:ListServiceActionsForProvisioningArtifact
```
