---
title: finding_aggregators
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_aggregators
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

Creates, updates, deletes or gets a <code>finding_aggregator</code> resource or lists <code>finding_aggregators</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>finding_aggregators</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::FindingAggregator&#96;&#96; resource enables cross-Region aggregation. When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see &#91;Cross-Region aggregation&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html) in the &#42;User Guide&#42;<br />This resource must be created in the Region that you want to designate as your aggregation Region.<br />Cross-Region aggregation is also a prerequisite for using &#91;central configuration&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in ASH.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.finding_aggregators" /></td></tr>
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
    "name": "finding_aggregator_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region_linking_mode",
    "type": "string",
    "description": "Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.<br />The selected option also determines how to use the Regions provided in the Regions list.<br />In CFN, the options for this property are as follows:<br />+ &#96;&#96;ALL&#95;REGIONS&#96;&#96; - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. <br />+ &#96;&#96;ALL&#95;REGIONS&#95;EXCEPT&#95;SPECIFIED&#96;&#96; - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the &#96;&#96;Regions&#96;&#96; parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. <br />+ &#96;&#96;SPECIFIED&#95;REGIONS&#96;&#96; - Indicates to aggregate findings only from the Regions listed in the &#96;&#96;Regions&#96;&#96; parameter. Security Hub does not automatically aggregate findings from new Regions."
  },
  {
    "name": "regions",
    "type": "array",
    "description": "If &#96;&#96;RegionLinkingMode&#96;&#96; is &#96;&#96;ALL&#95;REGIONS&#95;EXCEPT&#95;SPECIFIED&#96;&#96;, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.<br />If &#96;&#96;RegionLinkingMode&#96;&#96; is &#96;&#96;SPECIFIED&#95;REGIONS&#96;&#96;, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region."
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
    "name": "finding_aggregator_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html"><code>AWS::SecurityHub::FindingAggregator</code></a>.

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
    <td><code>finding_aggregators</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RegionLinkingMode, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>finding_aggregators</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>finding_aggregators</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>finding_aggregators_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>finding_aggregators</code></td>
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

Gets all properties from an individual <code>finding_aggregator</code>.
```sql
SELECT
region,
finding_aggregator_arn,
region_linking_mode,
regions,
finding_aggregation_region
FROM awscc.securityhub.finding_aggregators
WHERE region = 'us-east-1' AND Identifier = '<FindingAggregatorArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>finding_aggregators</code> in a region.
```sql
SELECT
region,
finding_aggregator_arn
FROM awscc.securityhub.finding_aggregators_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>finding_aggregator</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.finding_aggregators (
 RegionLinkingMode,
 region
)
SELECT 
'{{ RegionLinkingMode }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.finding_aggregators (
 RegionLinkingMode,
 Regions,
 region
)
SELECT 
 '{{ RegionLinkingMode }}',
 '{{ Regions }}',
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
  - name: finding_aggregator
    props:
      - name: RegionLinkingMode
        value: '{{ RegionLinkingMode }}'
      - name: Regions
        value:
          - '{{ Regions[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>finding_aggregator</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.finding_aggregators
SET PatchDocument = string('{{ {
    "RegionLinkingMode": region_linking_mode,
    "Regions": regions
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<FindingAggregatorArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.finding_aggregators
WHERE Identifier = '<FindingAggregatorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>finding_aggregators</code> resource, the following permissions are required:

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
securityhub:CreateFindingAggregator
```

</TabItem>
<TabItem value="read">

```json
securityhub:GetFindingAggregator
```

</TabItem>
<TabItem value="update">

```json
securityhub:UpdateFindingAggregator
```

</TabItem>
<TabItem value="delete">

```json
securityhub:DeleteFindingAggregator
```

</TabItem>
<TabItem value="list">

```json
securityhub:ListFindingAggregators
```

</TabItem>
</Tabs>