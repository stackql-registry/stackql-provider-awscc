---
title: trust_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_stores
  - workspacesweb
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

Creates, updates, deletes or gets a <code>trust_store</code> resource or lists <code>trust_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trust_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::TrustStore Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.trust_stores" /></td></tr>
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
    "name": "associated_portal_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "certificate_list",
    "type": "array",
    "description": ""
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
    "name": "trust_store_arn",
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
    "name": "trust_store_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-truststore.html"><code>AWS::WorkSpacesWeb::TrustStore</code></a>.

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
    <td><code>trust_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="CertificateList, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>trust_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>trust_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>trust_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>trust_stores</code></td>
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

Gets all properties from an individual <code>trust_store</code>.
```sql
SELECT
region,
associated_portal_arns,
certificate_list,
tags,
trust_store_arn
FROM awscc.workspacesweb.trust_stores
WHERE region = 'us-east-1' AND Identifier = '{{ trust_store_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>trust_stores</code> in a region.
```sql
SELECT
region,
trust_store_arn
FROM awscc.workspacesweb.trust_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trust_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.trust_stores (
 CertificateList,
 region
)
SELECT
'{{ certificate_list }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.trust_stores (
 CertificateList,
 Tags,
 region
)
SELECT
 '{{ certificate_list }}',
 '{{ tags }}',
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
  - name: trust_store
    props:
      - name: certificate_list
        value:
          - '{{ certificate_list[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>trust_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.workspacesweb.trust_stores
SET PatchDocument = string('{{ {
    "CertificateList": certificate_list,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ trust_store_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.trust_stores
WHERE Identifier = '{{ trust_store_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trust_stores</code> resource, the following permissions are required:

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
workspaces-web:CreateTrustStore,
workspaces-web:GetTrustStore,
workspaces-web:GetTrustStoreCertificate,
workspaces-web:ListTrustStoreCertificates,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource
```

</TabItem>
<TabItem value="read">

```json
workspaces-web:GetTrustStore,
workspaces-web:GetTrustStoreCertificate,
workspaces-web:ListTagsForResource,
workspaces-web:ListTrustStoreCertificates
```

</TabItem>
<TabItem value="update">

```json
workspaces-web:UpdateTrustStore,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:GetTrustStore,
workspaces-web:GetTrustStoreCertificate,
workspaces-web:ListTagsForResource,
workspaces-web:ListTrustStoreCertificates
```

</TabItem>
<TabItem value="delete">

```json
workspaces-web:GetTrustStore,
workspaces-web:GetTrustStoreCertificate,
workspaces-web:DeleteTrustStore
```

</TabItem>
<TabItem value="list">

```json
workspaces-web:ListTrustStores,
workspaces-web:ListTrustStoreCertificates
```

</TabItem>
</Tabs>