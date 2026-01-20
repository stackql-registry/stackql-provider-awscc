---
title: global_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - global_networks
  - networkmanager
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

Creates, updates, deletes or gets a <code>global_network</code> resource or lists <code>global_networks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>global_networks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::GlobalNetwork type specifies a global network of the user's account</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.global_networks" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the global network."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the global network."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the global network.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time that the global network was created."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the global network."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html"><code>AWS::NetworkManager::GlobalNetwork</code></a>.

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
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>global_network</code>.
```sql
SELECT
region,
arn,
id,
description,
tags,
created_at,
state
FROM awscc.networkmanager.global_networks
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>global_network</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.global_networks (
 Description,
 Tags,
 CreatedAt,
 State,
 region
)
SELECT 
'{{ Description }}',
 '{{ Tags }}',
 '{{ CreatedAt }}',
 '{{ State }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.global_networks (
 Description,
 Tags,
 CreatedAt,
 State,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Tags }}',
 '{{ CreatedAt }}',
 '{{ State }}',
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
  - name: global_network
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CreatedAt
        value: '{{ CreatedAt }}'
      - name: State
        value: '{{ State }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.global_networks
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>global_networks</code> resource, the following permissions are required:

### Create
```json
networkmanager:CreateGlobalNetwork,
networkmanager:DescribeGlobalNetworks,
networkmanager:TagResource,
iam:CreateServiceLinkedRole
```

### Read
```json
networkmanager:DescribeGlobalNetworks
```

### Update
```json
networkmanager:UpdateGlobalNetwork,
networkmanager:DescribeGlobalNetworks,
networkmanager:TagResource,
networkmanager:UntagResource,
networkmanager:ListTagsForResource
```

### Delete
```json
networkmanager:DeleteGlobalNetwork,
networkmanager:DescribeGlobalNetworks
```

### List
```json
networkmanager:DescribeGlobalNetworks
```
