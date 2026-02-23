---
title: outpost_resolvers
hide_title: false
hide_table_of_contents: false
keywords:
  - outpost_resolvers
  - route53resolver
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

Creates, updates, deletes or gets an <code>outpost_resolver</code> resource or lists <code>outpost_resolvers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>outpost_resolvers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::OutpostResolver.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.outpost_resolvers" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Id"
  },
  {
    "name": "creator_request_id",
    "type": "string",
    "description": "The id of the creator request."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The OutpostResolver name."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The OutpostResolver ARN."
  },
  {
    "name": "outpost_arn",
    "type": "string",
    "description": "The Outpost ARN."
  },
  {
    "name": "preferred_instance_type",
    "type": "string",
    "description": "The OutpostResolver instance type."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The OutpostResolver status, possible values are CREATING, OPERATIONAL, UPDATING, DELETING, ACTION&#95;NEEDED, FAILED&#95;CREATION and FAILED&#95;DELETION."
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "The OutpostResolver status message."
  },
  {
    "name": "instance_count",
    "type": "integer",
    "description": "The number of OutpostResolvers."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The OutpostResolver creation time"
  },
  {
    "name": "modification_time",
    "type": "string",
    "description": "The OutpostResolver last modified time"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "Id"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html"><code>AWS::Route53Resolver::OutpostResolver</code></a>.

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
    <td><code>outpost_resolvers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="OutpostArn, PreferredInstanceType, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>outpost_resolvers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>outpost_resolvers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>outpost_resolvers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>outpost_resolvers</code></td>
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

Gets all properties from an individual <code>outpost_resolver</code>.
```sql
SELECT
region,
id,
creator_request_id,
name,
arn,
outpost_arn,
preferred_instance_type,
status,
status_message,
instance_count,
creation_time,
modification_time,
tags
FROM awscc.route53resolver.outpost_resolvers
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>outpost_resolvers</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53resolver.outpost_resolvers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>outpost_resolver</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.outpost_resolvers (
 Name,
 OutpostArn,
 PreferredInstanceType,
 region
)
SELECT
'{{ name }}',
 '{{ outpost_arn }}',
 '{{ preferred_instance_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.outpost_resolvers (
 Name,
 OutpostArn,
 PreferredInstanceType,
 InstanceCount,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ outpost_arn }}',
 '{{ preferred_instance_type }}',
 '{{ instance_count }}',
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
  - name: outpost_resolver
    props:
      - name: name
        value: '{{ name }}'
      - name: outpost_arn
        value: '{{ outpost_arn }}'
      - name: preferred_instance_type
        value: '{{ preferred_instance_type }}'
      - name: instance_count
        value: '{{ instance_count }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>outpost_resolver</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53resolver.outpost_resolvers
SET PatchDocument = string('{{ {
    "Name": name,
    "PreferredInstanceType": preferred_instance_type,
    "InstanceCount": instance_count,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.outpost_resolvers
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>outpost_resolvers</code> resource, the following permissions are required:

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
route53resolver:CreateOutpostResolver,
route53resolver:GetOutpostResolver,
route53resolver:ListOutpostResolvers,
route53resolver:ListTagsForResource,
outposts:GetOutpost,
route53resolver:TagResource
```

</TabItem>
<TabItem value="read">

```json
route53resolver:GetOutpostResolver,
route53resolver:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
route53resolver:UpdateOutpostResolver,
route53resolver:GetOutpostResolver,
route53resolver:UntagResource,
route53resolver:TagResource,
route53resolver:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
route53resolver:DeleteOutpostResolver,
route53resolver:GetOutpostResolver,
route53resolver:ListOutpostResolvers,
route53resolver:ListResolverEndpoints
```

</TabItem>
<TabItem value="list">

```json
route53resolver:ListOutpostResolvers,
route53resolver:ListTagsForResource
```

</TabItem>
</Tabs>