---
title: cidr_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - cidr_collections
  - route53
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

Creates, updates, deletes or gets a <code>cidr_collection</code> resource or lists <code>cidr_collections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cidr_collections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Route53::CidrCollection.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.cidr_collections" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "UUID of the CIDR collection."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A unique name for the CIDR collection."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon resource name (ARN) to uniquely identify the AWS resource."
  },
  {
    "name": "locations",
    "type": "array",
    "description": "A complex type that contains information about the list of CIDR locations.",
    "children": [
      {
        "name": "location_name",
        "type": "string",
        "description": "The name of the location that is associated with the CIDR collection."
      },
      {
        "name": "cidr_list",
        "type": "array",
        "description": "A list of CIDR blocks."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html"><code>AWS::Route53::CidrCollection</code></a>.

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
    <td><CopyableCode code="Name, region" /></td>
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

Gets all properties from an individual <code>cidr_collection</code>.
```sql
SELECT
region,
id,
name,
arn,
locations
FROM awscc.route53.cidr_collections
WHERE data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cidr_collection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53.cidr_collections (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53.cidr_collections (
 Name,
 Locations,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Locations }}',
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
  - name: cidr_collection
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Locations
        value:
          - LocationName: '{{ LocationName }}'
            CidrList:
              - '{{ CidrList[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53.cidr_collections
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cidr_collections</code> resource, the following permissions are required:

### Create
```json
route53:CreateCidrCollection,
route53:ChangeCidrCollection
```

### Read
```json
route53:ListCidrCollections,
route53:ListCidrBlocks
```

### Update
```json
route53:ChangeCidrCollection
```

### Delete
```json
route53:DeleteCidrCollection,
route53:ChangeCidrCollection,
route53:ListCidrBlocks
```

### List
```json
route53:ListCidrCollections,
route53:ListCidrBlocks
```
