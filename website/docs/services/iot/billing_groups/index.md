---
title: billing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_groups
  - iot
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

Creates, updates, deletes or gets a <code>billing_group</code> resource or lists <code>billing_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>billing_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IoT::BillingGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.billing_groups" /></td></tr>
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
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "billing_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "billing_group_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "billing_group_description",
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
    "name": "billing_group_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html"><code>AWS::IoT::BillingGroup</code></a>.

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
    <td><code>billing_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>billing_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>billing_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>billing_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>billing_groups</code></td>
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

Gets all properties from an individual <code>billing_group</code>.
```sql
SELECT
region,
id,
arn,
billing_group_name,
tags,
billing_group_properties
FROM awscc.iot.billing_groups
WHERE region = 'us-east-1' AND Identifier = '{{ billing_group_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>billing_groups</code> in a region.
```sql
SELECT
region,
billing_group_name
FROM awscc.iot.billing_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>billing_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.billing_groups (
 BillingGroupName,
 Tags,
 BillingGroupProperties,
 region
)
SELECT
'{{ billing_group_name }}',
 '{{ tags }}',
 '{{ billing_group_properties }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.billing_groups (
 BillingGroupName,
 Tags,
 BillingGroupProperties,
 region
)
SELECT
 '{{ billing_group_name }}',
 '{{ tags }}',
 '{{ billing_group_properties }}',
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
  - name: billing_group
    props:
      - name: billing_group_name
        value: '{{ billing_group_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: billing_group_properties
        value:
          billing_group_description: '{{ billing_group_description }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>billing_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.billing_groups
SET PatchDocument = string('{{ {
    "Tags": tags,
    "BillingGroupProperties": billing_group_properties
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ billing_group_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.billing_groups
WHERE Identifier = '{{ billing_group_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>billing_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
iot:DescribeBillingGroup,
iot:ListTagsForResource,
iot:CreateBillingGroup,
iot:TagResource
```

</TabItem>
<TabItem value="delete">

```json
iot:DescribeBillingGroup,
iot:DeleteBillingGroup
```

</TabItem>
<TabItem value="list">

```json
iot:ListBillingGroups,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
iot:DescribeBillingGroup,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iot:DescribeBillingGroup,
iot:UpdateBillingGroup,
iot:ListTagsForResource,
iot:TagResource,
iot:UntagResource
```

</TabItem>
</Tabs>