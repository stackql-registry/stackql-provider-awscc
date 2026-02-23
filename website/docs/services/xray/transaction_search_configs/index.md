---
title: transaction_search_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - transaction_search_configs
  - xray
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

Creates, updates, deletes or gets a <code>transaction_search_config</code> resource or lists <code>transaction_search_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>transaction_search_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This schema provides construct and validation rules for AWS-XRay TransactionSearchConfig resource parameters.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.xray.transaction_search_configs" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as the primary identifier for the resource"
  },
  {
    "name": "indexing_percentage",
    "type": "number",
    "description": "Determines the percentage of traces indexed from CloudWatch Logs to X-Ray"
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
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as the primary identifier for the resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-transactionsearchconfig.html"><code>AWS::XRay::TransactionSearchConfig</code></a>.

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
    <td><code>transaction_search_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>transaction_search_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>transaction_search_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>transaction_search_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>transaction_search_configs</code></td>
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

Gets all properties from an individual <code>transaction_search_config</code>.
```sql
SELECT
region,
account_id,
indexing_percentage
FROM awscc.xray.transaction_search_configs
WHERE region = 'us-east-1' AND Identifier = '{{ account_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>transaction_search_configs</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.xray.transaction_search_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>transaction_search_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.xray.transaction_search_configs (
 IndexingPercentage,
 region
)
SELECT
'{{ indexing_percentage }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.xray.transaction_search_configs (
 IndexingPercentage,
 region
)
SELECT
 '{{ indexing_percentage }}',
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
  - name: transaction_search_config
    props:
      - name: indexing_percentage
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>transaction_search_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.xray.transaction_search_configs
SET PatchDocument = string('{{ {
    "IndexingPercentage": indexing_percentage
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ account_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.xray.transaction_search_configs
WHERE Identifier = '{{ account_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>transaction_search_configs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
application-signals:StartDiscovery,
iam:CreateServiceLinkedRole,
logs:CreateLogGroup,
logs:CreateLogStream,
logs:PutRetentionPolicy,
xray:GetIndexingRules,
xray:GetTraceSegmentDestination,
xray:UpdateIndexingRule,
xray:UpdateTraceSegmentDestination
```

</TabItem>
<TabItem value="read">

```json
xray:GetTraceSegmentDestination,
xray:GetIndexingRules
```

</TabItem>
<TabItem value="list">

```json
xray:GetTraceSegmentDestination,
xray:GetIndexingRules
```

</TabItem>
<TabItem value="update">

```json
xray:GetIndexingRules,
xray:GetTraceSegmentDestination,
xray:UpdateIndexingRule
```

</TabItem>
<TabItem value="delete">

```json
xray:GetTraceSegmentDestination,
xray:UpdateTraceSegmentDestination,
xray:UpdateIndexingRule
```

</TabItem>
</Tabs>