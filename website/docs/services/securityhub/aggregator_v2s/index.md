---
title: aggregator_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregator_v2s
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>aggregator_v2</code> resource or lists <code>aggregator_v2s</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>aggregator_v2s</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::AggregatorV2 resource represents the AWS Security Hub AggregatorV2 in your account. One aggregatorv2 resource is created for each account in non opt-in region in which you configure region linking mode.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.aggregator_v2s" /></td></tr>
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
    "name": "aggregator_v2_arn",
    "type": "string",
    "description": "The ARN of the AggregatorV2 being created and assigned as the unique identifier"
  },
  {
    "name": "region_linking_mode",
    "type": "string",
    "description": "Indicates to link a list of included Regions"
  },
  {
    "name": "linked_regions",
    "type": "array",
    "description": "The list of included Regions"
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."
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
    "name": "aggregator_v2_arn",
    "type": "string",
    "description": "The ARN of the AggregatorV2 being created and assigned as the unique identifier"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-aggregatorv2.html"><code>AWS::SecurityHub::AggregatorV2</code></a>.

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
    <td><code>aggregator_v2s</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RegionLinkingMode, LinkedRegions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>aggregator_v2s</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>aggregator_v2s</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>aggregator_v2s_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>aggregator_v2s</code></td>
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

Gets all properties from an individual <code>aggregator_v2</code>.
```sql
SELECT
  region,
  aggregator_v2_arn,
  region_linking_mode,
  linked_regions,
  tags,
  aggregation_region
FROM awscc.securityhub.aggregator_v2s
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ aggregator_v2_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>aggregator_v2s</code> in a region.
```sql
SELECT
  region,
  aggregator_v2_arn
FROM awscc.securityhub.aggregator_v2s_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>aggregator_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.aggregator_v2s (
  RegionLinkingMode,
  LinkedRegions,
  region
)
SELECT
  '{{ region_linking_mode }}',
  '{{ linked_regions }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.aggregator_v2s (
  RegionLinkingMode,
  LinkedRegions,
  Tags,
  region
)
SELECT
  '{{ region_linking_mode }}',
  '{{ linked_regions }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: aggregator_v2
    props:
      - name: region_linking_mode
        value: '{{ region_linking_mode }}'
      - name: linked_regions
        value:
          - '{{ linked_regions[0] }}'
      - name: tags
        value: {}`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>aggregator_v2</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.aggregator_v2s
SET PatchDocument = string('{{ {
    "RegionLinkingMode": region_linking_mode,
    "LinkedRegions": linked_regions,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ aggregator_v2_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.aggregator_v2s
WHERE
  Identifier = '{{ aggregator_v2_arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>aggregator_v2s</code> resource, the following permissions are required:

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
securityhub:CreateAggregatorV2,
securityhub:GetAggregatorV2,
securityhub:TagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
securityhub:GetAggregatorV2,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
securityhub:UpdateAggregatorV2,
securityhub:GetAggregatorV2,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
securityhub:DeleteAggregatorV2
```

</TabItem>
<TabItem value="list">

```json
securityhub:ListAggregatorsV2,
securityhub:ListTagsForResource
```

</TabItem>
</Tabs>