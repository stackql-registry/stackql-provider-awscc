---
title: dedicated_ip_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_ip_pools
  - ses
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

Creates, updates, deletes or gets a <code>dedicated_ip_pool</code> resource or lists <code>dedicated_ip_pools</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>dedicated_ip_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SES::DedicatedIpPool</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.dedicated_ip_pools" /></td></tr>
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
    "name": "pool_name",
    "type": "string",
    "description": "The name of the dedicated IP pool."
  },
  {
    "name": "scaling_mode",
    "type": "string",
    "description": "Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the dedicated IP pool.",
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
    "name": "pool_name",
    "type": "string",
    "description": "The name of the dedicated IP pool."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html"><code>AWS::SES::DedicatedIpPool</code></a>.

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
    <td><code>dedicated_ip_pools</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>dedicated_ip_pools</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>dedicated_ip_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>dedicated_ip_pools_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>dedicated_ip_pools</code></td>
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

Gets all properties from an individual <code>dedicated_ip_pool</code>.
```sql
SELECT
region,
pool_name,
scaling_mode,
tags
FROM awscc.ses.dedicated_ip_pools
WHERE region = 'us-east-1' AND Identifier = '<PoolName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>dedicated_ip_pools</code> in a region.
```sql
SELECT
region,
pool_name
FROM awscc.ses.dedicated_ip_pools_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>dedicated_ip_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.dedicated_ip_pools (
 PoolName,
 ScalingMode,
 Tags,
 region
)
SELECT 
'{{ PoolName }}',
 '{{ ScalingMode }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.dedicated_ip_pools (
 PoolName,
 ScalingMode,
 Tags,
 region
)
SELECT 
 '{{ PoolName }}',
 '{{ ScalingMode }}',
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
  - name: dedicated_ip_pool
    props:
      - name: PoolName
        value: '{{ PoolName }}'
      - name: ScalingMode
        value: '{{ ScalingMode }}'
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
UPDATE awscc.ses.dedicated_ip_pools
SET PatchDocument = string('{{ {
    "ScalingMode": scaling_mode,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<PoolName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.dedicated_ip_pools
WHERE Identifier = '<PoolName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>dedicated_ip_pools</code> resource, the following permissions are required:

### Create
```json
ses:CreateDedicatedIpPool,
ses:GetDedicatedIpPool,
ses:GetDedicatedIps,
ses:TagResource,
ses:UntagResource
```

### Read
```json
ses:GetDedicatedIpPool,
ses:GetDedicatedIps,
ses:ListTagsForResource
```

### Update
```json
ses:PutDedicatedIpPoolScalingAttributes,
ses:GetDedicatedIpPool,
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource
```

### Delete
```json
ses:DeleteDedicatedIpPool
```

### List
```json
ses:ListDedicatedIpPools
```
