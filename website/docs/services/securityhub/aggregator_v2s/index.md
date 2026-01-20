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
    "description": "A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-aggregatorv2.html"><code>AWS::SecurityHub::AggregatorV2</code></a>.

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
    <td><CopyableCode code="RegionLinkingMode, LinkedRegions, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<AggregatorV2Arn>';
```

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
'{{ RegionLinkingMode }}',
 '{{ LinkedRegions }}',
'{{ region }}';
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
 '{{ RegionLinkingMode }}',
 '{{ LinkedRegions }}',
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
  - name: aggregator_v2
    props:
      - name: RegionLinkingMode
        value: '{{ RegionLinkingMode }}'
      - name: LinkedRegions
        value:
          - '{{ LinkedRegions[0] }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.aggregator_v2s
WHERE data__Identifier = '<AggregatorV2Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>aggregator_v2s</code> resource, the following permissions are required:

### Create
```json
securityhub:CreateAggregatorV2,
securityhub:GetAggregatorV2,
securityhub:TagResource,
securityhub:ListTagsForResource
```

### Read
```json
securityhub:GetAggregatorV2,
securityhub:ListTagsForResource
```

### Update
```json
securityhub:UpdateAggregatorV2,
securityhub:GetAggregatorV2,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

### Delete
```json
securityhub:DeleteAggregatorV2
```

### List
```json
securityhub:ListAggregatorsV2,
securityhub:ListTagsForResource
```
