---
title: aggregation_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregation_authorizations
  - config
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

Creates, updates, deletes or gets an <code>aggregation_authorization</code> resource or lists <code>aggregation_authorizations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>aggregation_authorizations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Config::AggregationAuthorization</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.config.aggregation_authorizations" /></td></tr>
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
    "name": "authorized_account_id",
    "type": "string",
    "description": "The 12-digit account ID of the account authorized to aggregate data."
  },
  {
    "name": "authorized_aws_region",
    "type": "string",
    "description": "The region authorized to collect aggregated data."
  },
  {
    "name": "aggregation_authorization_arn",
    "type": "string",
    "description": "The ARN of the AggregationAuthorization."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the AggregationAuthorization.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "authorized_account_id",
    "type": "string",
    "description": "The 12-digit account ID of the account authorized to aggregate data."
  },
  {
    "name": "authorized_aws_region",
    "type": "string",
    "description": "The region authorized to collect aggregated data."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-aggregationauthorization.html"><code>AWS::Config::AggregationAuthorization</code></a>.

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
    <td><code>aggregation_authorizations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AuthorizedAccountId, AuthorizedAwsRegion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>aggregation_authorizations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>aggregation_authorizations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>aggregation_authorizations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>aggregation_authorizations</code></td>
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

Gets all properties from an individual <code>aggregation_authorization</code>.
```sql
SELECT
region,
authorized_account_id,
authorized_aws_region,
aggregation_authorization_arn,
tags
FROM awscc.config.aggregation_authorizations
WHERE region = 'us-east-1' AND Identifier = '{{ authorized_account_id }}|{{ authorized_aws_region }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>aggregation_authorizations</code> in a region.
```sql
SELECT
region,
authorized_account_id,
authorized_aws_region
FROM awscc.config.aggregation_authorizations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>aggregation_authorization</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.config.aggregation_authorizations (
 AuthorizedAccountId,
 AuthorizedAwsRegion,
 region
)
SELECT
'{{ authorized_account_id }}',
 '{{ authorized_aws_region }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.config.aggregation_authorizations (
 AuthorizedAccountId,
 AuthorizedAwsRegion,
 Tags,
 region
)
SELECT
 '{{ authorized_account_id }}',
 '{{ authorized_aws_region }}',
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
  - name: aggregation_authorization
    props:
      - name: authorized_account_id
        value: '{{ authorized_account_id }}'
      - name: authorized_aws_region
        value: '{{ authorized_aws_region }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>aggregation_authorization</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.config.aggregation_authorizations
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ authorized_account_id }}|{{ authorized_aws_region }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.config.aggregation_authorizations
WHERE Identifier = '{{ authorized_account_id }}|{{ authorized_aws_region }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>aggregation_authorizations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
config:DescribeAggregationAuthorizations,
config:PutAggregationAuthorization,
config:TagResource
```

</TabItem>
<TabItem value="update">

```json
config:DescribeAggregationAuthorizations,
config:TagResource,
config:UntagResource,
config:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
config:DescribeAggregationAuthorizations,
config:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
config:DescribeAggregationAuthorizations,
config:DeleteAggregationAuthorization,
config:UntagResource
```

</TabItem>
<TabItem value="list">

```json
config:DescribeAggregationAuthorizations
```

</TabItem>
</Tabs>