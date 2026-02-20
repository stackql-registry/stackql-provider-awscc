---
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - pcaconnectorscep
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

Creates, updates, deletes or gets a <code>connector</code> resource or lists <code>connectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a Connector that allows certificate issuance through Simple Certificate Enrollment Protocol (SCEP)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorscep.connectors" /></td></tr>
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
    "name": "certificate_authority_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "connector_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "mobile_device_management",
    "type": "object",
    "description": ""
  },
  {
    "name": "open_id_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "issuer",
        "type": "string",
        "description": ""
      },
      {
        "name": "subject",
        "type": "string",
        "description": ""
      },
      {
        "name": "audience",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-connector.html"><code>AWS::PCAConnectorSCEP::Connector</code></a>.

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
    <td><code>connectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CertificateAuthorityArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connectors</code></td>
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

Gets all properties from an individual <code>connector</code>.
```sql
SELECT
region,
certificate_authority_arn,
connector_arn,
type,
endpoint,
mobile_device_management,
open_id_configuration,
tags
FROM awscc.pcaconnectorscep.connectors
WHERE region = 'us-east-1' AND Identifier = '<ConnectorArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connectors</code> in a region.
```sql
SELECT
region,
connector_arn
FROM awscc.pcaconnectorscep.connectors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcaconnectorscep.connectors (
 CertificateAuthorityArn,
 region
)
SELECT 
'{{ CertificateAuthorityArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcaconnectorscep.connectors (
 CertificateAuthorityArn,
 MobileDeviceManagement,
 Tags,
 region
)
SELECT 
 '{{ CertificateAuthorityArn }}',
 '{{ MobileDeviceManagement }}',
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
  - name: connector
    props:
      - name: CertificateAuthorityArn
        value: '{{ CertificateAuthorityArn }}'
      - name: MobileDeviceManagement
        value: {}
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.pcaconnectorscep.connectors
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ConnectorArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcaconnectorscep.connectors
WHERE Identifier = '<ConnectorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connectors</code> resource, the following permissions are required:

### Create
```json
acm-pca:DescribeCertificateAuthority,
acm-pca:GetCertificate,
acm-pca:GetCertificateAuthorityCertificate,
acm-pca:IssueCertificate,
pca-connector-scep:GetConnector,
pca-connector-scep:CreateConnector,
pca-connector-scep:TagResource
```

### Read
```json
pca-connector-scep:ListTagsForResource,
pca-connector-scep:GetConnector
```

### Delete
```json
acm-pca:DescribeCertificateAuthority,
acm-pca:GetCertificate,
acm-pca:GetCertificateAuthorityCertificate,
acm-pca:IssueCertificate,
pca-connector-scep:GetConnector,
pca-connector-scep:DeleteConnector,
pca-connector-scep:UntagResource
```

### List
```json
pca-connector-scep:ListConnectors
```

### Update
```json
pca-connector-scep:ListTagsForResource,
pca-connector-scep:TagResource,
pca-connector-scep:UntagResource
```
