---
title: crls
hide_title: false
hide_table_of_contents: false
keywords:
  - crls
  - rolesanywhere
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

Creates, updates, deletes or gets a <code>crl</code> resource or lists <code>crls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>crls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RolesAnywhere::CRL Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rolesanywhere.crls" /></td></tr>
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
    "name": "crl_data",
    "type": "string",
    "description": ""
  },
  {
    "name": "crl_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "trust_anchor_arn",
    "type": "string",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "crl_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-crl.html"><code>AWS::RolesAnywhere::CRL</code></a>.

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
    <td><code>crls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, CrlData, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>crls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>crls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>crls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>crls</code></td>
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

Gets all properties from an individual <code>crl</code>.
```sql
SELECT
region,
crl_data,
crl_id,
enabled,
name,
trust_anchor_arn,
tags
FROM awscc.rolesanywhere.crls
WHERE region = 'us-east-1' AND Identifier = '<CrlId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>crls</code> in a region.
```sql
SELECT
region,
crl_id
FROM awscc.rolesanywhere.crls_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>crl</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rolesanywhere.crls (
 CrlData,
 Name,
 region
)
SELECT 
'{{ CrlData }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rolesanywhere.crls (
 CrlData,
 Enabled,
 Name,
 TrustAnchorArn,
 Tags,
 region
)
SELECT 
 '{{ CrlData }}',
 '{{ Enabled }}',
 '{{ Name }}',
 '{{ TrustAnchorArn }}',
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
  - name: crl
    props:
      - name: CrlData
        value: '{{ CrlData }}'
      - name: Enabled
        value: '{{ Enabled }}'
      - name: Name
        value: '{{ Name }}'
      - name: TrustAnchorArn
        value: '{{ TrustAnchorArn }}'
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
UPDATE awscc.rolesanywhere.crls
SET PatchDocument = string('{{ {
    "CrlData": crl_data,
    "Enabled": enabled,
    "Name": name,
    "TrustAnchorArn": trust_anchor_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CrlId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rolesanywhere.crls
WHERE Identifier = '<CrlId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>crls</code> resource, the following permissions are required:

### Create
```json
rolesanywhere:ImportCrl,
rolesanywhere:TagResource
```

### Read
```json
rolesanywhere:GetCrl,
rolesanywhere:ListTagsForResource
```

### Update
```json
rolesanywhere:EnableCrl,
rolesanywhere:DisableCrl,
rolesanywhere:UpdateCrl,
rolesanywhere:TagResource,
rolesanywhere:UntagResource,
rolesanywhere:ListTagsForResource
```

### Delete
```json
rolesanywhere:DeleteCrl
```

### List
```json
rolesanywhere:ListCrls,
rolesanywhere:ListTagsForResource
```
