---
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes or gets a <code>connector</code> resource or lists <code>connectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a Connector that connects AWS PrivateCA and your directory</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorad.connectors" /></td></tr>
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
    "name": "directory_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "vpc_information",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "ip_address_type",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html"><code>AWS::PCAConnectorAD::Connector</code></a>.

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
    <td><CopyableCode code="CertificateAuthorityArn, DirectoryId, VpcInformation, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>connector</code>.
```sql
SELECT
region,
certificate_authority_arn,
connector_arn,
directory_id,
tags,
vpc_information
FROM awscc.pcaconnectorad.connectors
WHERE region = 'us-east-1' AND data__Identifier = '<ConnectorArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connectors</code> in a region.
```sql
SELECT
region,
connector_arn
FROM awscc.pcaconnectorad.connectors_list_only
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
INSERT INTO awscc.pcaconnectorad.connectors (
 CertificateAuthorityArn,
 DirectoryId,
 VpcInformation,
 region
)
SELECT 
'{{ CertificateAuthorityArn }}',
 '{{ DirectoryId }}',
 '{{ VpcInformation }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcaconnectorad.connectors (
 CertificateAuthorityArn,
 DirectoryId,
 Tags,
 VpcInformation,
 region
)
SELECT 
 '{{ CertificateAuthorityArn }}',
 '{{ DirectoryId }}',
 '{{ Tags }}',
 '{{ VpcInformation }}',
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
      - name: DirectoryId
        value: '{{ DirectoryId }}'
      - name: Tags
        value: {}
      - name: VpcInformation
        value:
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          IpAddressType: '{{ IpAddressType }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.pcaconnectorad.connectors
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ConnectorArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcaconnectorad.connectors
WHERE data__Identifier = '<ConnectorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connectors</code> resource, the following permissions are required:

### Create
```json
acm-pca:DescribeCertificateAuthority,
acm-pca:GetCertificateAuthorityCertificate,
acm-pca:GetCertificate,
acm-pca:IssueCertificate,
ds:DescribeDirectories,
ec2:CreateTags,
ec2:CreateVpcEndpoint,
ec2:DescribeVpcEndpoints,
pca-connector-ad:CreateConnector,
pca-connector-ad:GetConnector,
pca-connector-ad:TagResource
```

### Read
```json
pca-connector-ad:ListTagsForResource,
pca-connector-ad:GetConnector
```

### Delete
```json
ec2:DeleteVpcEndpoints,
ec2:DescribeVpcEndpoints,
pca-connector-ad:GetConnector,
pca-connector-ad:DeleteConnector,
pca-connector-ad:UntagResource
```

### List
```json
pca-connector-ad:ListConnectors
```

### Update
```json
pca-connector-ad:ListTagsForResource,
pca-connector-ad:TagResource,
pca-connector-ad:UntagResource
```
