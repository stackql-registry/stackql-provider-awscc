---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - voiceid
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::VoiceID::Domain resource specifies an Amazon VoiceID Domain.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.voiceid.domains" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_side_encryption_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "domain_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html"><code>AWS::VoiceID::Domain</code></a>.

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
    <td><code>domains</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ServerSideEncryptionConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domains</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domains</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domains_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domains</code></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
description,
domain_id,
name,
server_side_encryption_configuration,
tags
FROM awscc.voiceid.domains
WHERE region = 'us-east-1' AND Identifier = '{{ domain_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>domains</code> in a region.
```sql
SELECT
region,
domain_id
FROM awscc.voiceid.domains_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.voiceid.domains (
 Name,
 ServerSideEncryptionConfiguration,
 region
)
SELECT
'{{ name }}',
 '{{ server_side_encryption_configuration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.voiceid.domains (
 Description,
 Name,
 ServerSideEncryptionConfiguration,
 Tags,
 region
)
SELECT
 '{{ description }}',
 '{{ name }}',
 '{{ server_side_encryption_configuration }}',
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
  - name: domain
    props:
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: server_side_encryption_configuration
        value:
          kms_key_id: '{{ kms_key_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.voiceid.domains
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name,
    "ServerSideEncryptionConfiguration": server_side_encryption_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.voiceid.domains
WHERE Identifier = '{{ domain_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

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
voiceid:CreateDomain,
voiceid:DescribeDomain,
voiceid:TagResource,
voiceid:ListTagsForResource,
kms:CreateGrant,
kms:DescribeKey,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
voiceid:DescribeDomain,
voiceid:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
voiceid:DescribeDomain,
voiceid:UpdateDomain,
voiceid:TagResource,
voiceid:UntagResource,
voiceid:ListTagsForResource,
kms:CreateGrant,
kms:Decrypt,
kms:DescribeKey
```

</TabItem>
<TabItem value="delete">

```json
voiceid:DeleteDomain,
voiceid:DescribeDomain,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
voiceid:ListDomains,
kms:Decrypt
```

</TabItem>
</Tabs>