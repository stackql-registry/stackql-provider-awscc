---
title: hub_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - hub_v2s
  - securityhub
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

Creates, updates, deletes or gets a <code>hub_v2</code> resource or lists <code>hub_v2s</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hub_v2s</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::HubV2 resource represents the implementation of the AWS Security Hub V2 service in your account. Only one hubv2 resource can created in each region in which you enable Security Hub V2.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.hub_v2s" /></td></tr>
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
    "name": "hub_v2_arn",
    "type": "string",
    "description": "The Amazon Resource Name of the Security Hub V2 resource."
  },
  {
    "name": "subscribed_at",
    "type": "string",
    "description": "The date and time, in UTC and ISO 8601 format."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "hub_v2_arn",
    "type": "string",
    "description": "The Amazon Resource Name of the Security Hub V2 resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hubv2.html"><code>AWS::SecurityHub::HubV2</code></a>.

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
    <td><code>hub_v2s</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hub_v2s</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hub_v2s</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hub_v2s_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hub_v2s</code></td>
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

Gets all properties from an individual <code>hub_v2</code>.
```sql
SELECT
region,
hub_v2_arn,
subscribed_at,
tags
FROM awscc.securityhub.hub_v2s
WHERE region = 'us-east-1' AND Identifier = '<HubV2Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>hub_v2s</code> in a region.
```sql
SELECT
region,
hub_v2_arn
FROM awscc.securityhub.hub_v2s_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hub_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.hub_v2s (
 Tags,
 region
)
SELECT 
'{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.hub_v2s (
 Tags,
 region
)
SELECT 
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
  - name: hub_v2
    props:
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.securityhub.hub_v2s
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<HubV2Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.hub_v2s
WHERE Identifier = '<HubV2Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hub_v2s</code> resource, the following permissions are required:

### Create
```json
securityhub:EnableSecurityHubV2,
securityhub:DescribeSecurityHubV2,
securityhub:TagResource,
iam:CreateServiceLinkedRole
```

### Read
```json
securityhub:DescribeSecurityHubV2,
securityhub:ListTagsForResource
```

### Update
```json
securityhub:DescribeSecurityHubV2,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

### Delete
```json
securityhub:DescribeSecurityHubV2,
securityhub:DisableSecurityHubV2
```

### List
```json
securityhub:DescribeSecurityHubV2,
securityhub:ListTagsForResource
```
