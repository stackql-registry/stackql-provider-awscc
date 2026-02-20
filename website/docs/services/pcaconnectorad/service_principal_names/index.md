---
title: service_principal_names
hide_title: false
hide_table_of_contents: false
keywords:
  - service_principal_names
  - pcaconnectorad
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

Creates, updates, deletes or gets a <code>service_principal_name</code> resource or lists <code>service_principal_names</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_principal_names</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::PCAConnectorAD::ServicePrincipalName Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorad.service_principal_names" /></td></tr>
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
    "name": "connector_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "directory_registration_arn",
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
    "name": "connector_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "directory_registration_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-serviceprincipalname.html"><code>AWS::PCAConnectorAD::ServicePrincipalName</code></a>.

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
    <td><code>service_principal_names</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>service_principal_names</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>service_principal_names_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>service_principal_names</code></td>
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

Gets all properties from an individual <code>service_principal_name</code>.
```sql
SELECT
region,
connector_arn,
directory_registration_arn
FROM awscc.pcaconnectorad.service_principal_names
WHERE region = 'us-east-1' AND Identifier = '<ConnectorArn>|<DirectoryRegistrationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>service_principal_names</code> in a region.
```sql
SELECT
region,
connector_arn,
directory_registration_arn
FROM awscc.pcaconnectorad.service_principal_names_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_principal_name</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcaconnectorad.service_principal_names (
 ConnectorArn,
 DirectoryRegistrationArn,
 region
)
SELECT 
'{{ ConnectorArn }}',
 '{{ DirectoryRegistrationArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcaconnectorad.service_principal_names (
 ConnectorArn,
 DirectoryRegistrationArn,
 region
)
SELECT 
 '{{ ConnectorArn }}',
 '{{ DirectoryRegistrationArn }}',
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
  - name: service_principal_name
    props:
      - name: ConnectorArn
        value: '{{ ConnectorArn }}'
      - name: DirectoryRegistrationArn
        value: '{{ DirectoryRegistrationArn }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcaconnectorad.service_principal_names
WHERE Identifier = '<ConnectorArn|DirectoryRegistrationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_principal_names</code> resource, the following permissions are required:

### Create
```json
ds:UpdateAuthorizedApplication,
pca-connector-ad:GetServicePrincipalName,
pca-connector-ad:CreateServicePrincipalName
```

### Read
```json
pca-connector-ad:GetServicePrincipalName
```

### Delete
```json
ds:UpdateAuthorizedApplication,
pca-connector-ad:GetServicePrincipalName,
pca-connector-ad:DeleteServicePrincipalName
```

### List
```json
pca-connector-ad:ListServicePrincipalNames
```
