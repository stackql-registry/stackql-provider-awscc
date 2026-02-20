---
title: multi_region_access_point_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_point_policies
  - s3
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

Creates, updates, deletes or gets a <code>multi_region_access_point_policy</code> resource or lists <code>multi_region_access_point_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>multi_region_access_point_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The policy to be attached to a Multi Region Access Point</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3.multi_region_access_point_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "mrap_name",
    "type": "string",
    "description": "The name of the Multi Region Access Point to apply policy"
  },
  {
    "name": "policy",
    "type": "object",
    "description": "Policy document to apply to a Multi Region Access Point"
  },
  {
    "name": "policy_status",
    "type": "object",
    "description": "The Policy Status associated with this Multi Region Access Point",
    "children": [
      {
        "name": "is_public",
        "type": "string",
        "description": "Specifies whether the policy is public or not."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html"><code>AWS::S3::MultiRegionAccessPointPolicy</code></a>.

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
    <td><CopyableCode code="Policy, MrapName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>multi_region_access_point_policy</code>.
```sql
SELECT
region,
mrap_name,
policy,
policy_status
FROM awscc.s3.multi_region_access_point_policies
WHERE region = 'us-east-1' AND Identifier = '<MrapName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>multi_region_access_point_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3.multi_region_access_point_policies (
 MrapName,
 Policy,
 region
)
SELECT 
'{{ MrapName }}',
 '{{ Policy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3.multi_region_access_point_policies (
 MrapName,
 Policy,
 region
)
SELECT 
 '{{ MrapName }}',
 '{{ Policy }}',
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
  - name: multi_region_access_point_policy
    props:
      - name: MrapName
        value: '{{ MrapName }}'
      - name: Policy
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.s3.multi_region_access_point_policies
SET PatchDocument = string('{{ {
    "Policy": policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<MrapName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3.multi_region_access_point_policies
WHERE Identifier = '<MrapName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>multi_region_access_point_policies</code> resource, the following permissions are required:

### Update
```json
s3:PutMultiRegionAccessPointPolicy,
s3:DescribeMultiRegionAccessPointOperation
```

### Read
```json
s3:GetMultiRegionAccessPointPolicy,
s3:GetMultiRegionAccessPointPolicyStatus
```

### Delete
```json
s3:GetMultiRegionAccessPointPolicy,
s3:GetMultiRegionAccessPoint
```

### Create
```json
s3:PutMultiRegionAccessPointPolicy,
s3:DescribeMultiRegionAccessPointOperation
```
