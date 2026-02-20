---
title: ipam_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_scopes
  - ec2
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

Creates, updates, deletes or gets an <code>ipam_scope</code> resource or lists <code>ipam_scopes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>ipam_scopes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EC2::IPAMScope Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.ipam_scopes" /></td></tr>
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
    "name": "ipam_scope_id",
    "type": "string",
    "description": "Id of the IPAM scope."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IPAM scope."
  },
  {
    "name": "ipam_id",
    "type": "string",
    "description": "The Id of the IPAM this scope is a part of."
  },
  {
    "name": "ipam_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IPAM this scope is a part of."
  },
  {
    "name": "ipam_scope_type",
    "type": "string",
    "description": "Determines whether this scope contains publicly routable space or space for a private network"
  },
  {
    "name": "is_default",
    "type": "boolean",
    "description": "Is this one of the default scopes created with the IPAM."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "pool_count",
    "type": "integer",
    "description": "The number of pools that currently exist in this scope."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "ipam_scope_id",
    "type": "string",
    "description": "Id of the IPAM scope."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html"><code>AWS::EC2::IPAMScope</code></a>.

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
    <td><code>ipam_scopes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IpamId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>ipam_scopes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>ipam_scopes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>ipam_scopes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>ipam_scopes</code></td>
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

Gets all properties from an individual <code>ipam_scope</code>.
```sql
SELECT
region,
ipam_scope_id,
arn,
ipam_id,
ipam_arn,
ipam_scope_type,
is_default,
description,
pool_count,
tags
FROM awscc.ec2.ipam_scopes
WHERE region = 'us-east-1' AND data__Identifier = '<IpamScopeId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>ipam_scopes</code> in a region.
```sql
SELECT
region,
ipam_scope_id
FROM awscc.ec2.ipam_scopes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>ipam_scope</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.ipam_scopes (
 IpamId,
 region
)
SELECT 
'{{ IpamId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.ipam_scopes (
 IpamId,
 Description,
 Tags,
 region
)
SELECT 
 '{{ IpamId }}',
 '{{ Description }}',
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
  - name: ipam_scope
    props:
      - name: IpamId
        value: '{{ IpamId }}'
      - name: Description
        value: '{{ Description }}'
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
UPDATE awscc.ec2.ipam_scopes
SET data__PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<IpamScopeId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.ipam_scopes
WHERE data__Identifier = '<IpamScopeId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>ipam_scopes</code> resource, the following permissions are required:

### Create
```json
ec2:CreateIpamScope,
ec2:DescribeIpamScopes,
ec2:CreateTags
```

### Read
```json
ec2:DescribeIpamScopes
```

### Update
```json
ec2:ModifyIpamScope,
ec2:DescribeIpamScopes,
ec2:CreateTags,
ec2:DeleteTags
```

### Delete
```json
ec2:DeleteIpamScope,
ec2:DescribeIpamScopes,
ec2:DeleteTags
```

### List
```json
ec2:DescribeIpamScopes
```
