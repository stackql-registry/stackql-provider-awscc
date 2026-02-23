---
title: standards
hide_title: false
hide_table_of_contents: false
keywords:
  - standards
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

Creates, updates, deletes or gets a <code>standard</code> resource or lists <code>standards</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>standards</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::Standard&#96;&#96; resource specifies the enablement of a security standard. The standard is identified by the &#96;&#96;StandardsArn&#96;&#96; property. To view a list of ASH standards and their Amazon Resource Names (ARNs), use the &#91;DescribeStandards&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/API&#95;DescribeStandards.html) API operation.<br />You must create a separate &#96;&#96;AWS::SecurityHub::Standard&#96;&#96; resource for each standard that you want to enable.<br />For more information about ASH standards, see &#91;standards reference&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html) in the &#42;User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.standards" /></td></tr>
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
    "name": "standards_subscription_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "standards_arn",
    "type": "string",
    "description": "The ARN of the standard that you want to enable. To view a list of available ASH standards and their ARNs, use the &#91;DescribeStandards&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/API&#95;DescribeStandards.html) API operation."
  },
  {
    "name": "disabled_standards_controls",
    "type": "array",
    "description": "Specifies which controls are to be disabled in a standard. <br />&#42;Maximum&#42;: &#96;&#96;100&#96;&#96;",
    "children": [
      {
        "name": "standards_control_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the control."
      },
      {
        "name": "reason",
        "type": "string",
        "description": "A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required."
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
    "name": "standards_subscription_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html"><code>AWS::SecurityHub::Standard</code></a>.

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
    <td><code>standards</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="StandardsArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>standards</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>standards</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>standards_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>standards</code></td>
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

Gets all properties from an individual <code>standard</code>.
```sql
SELECT
region,
standards_subscription_arn,
standards_arn,
disabled_standards_controls
FROM awscc.securityhub.standards
WHERE region = 'us-east-1' AND Identifier = '{{ standards_subscription_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>standards</code> in a region.
```sql
SELECT
region,
standards_subscription_arn
FROM awscc.securityhub.standards_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>standard</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.standards (
 StandardsArn,
 region
)
SELECT
'{{ standards_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.standards (
 StandardsArn,
 DisabledStandardsControls,
 region
)
SELECT
 '{{ standards_arn }}',
 '{{ disabled_standards_controls }}',
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
  - name: standard
    props:
      - name: standards_arn
        value: '{{ standards_arn }}'
      - name: disabled_standards_controls
        value:
          - standards_control_arn: '{{ standards_control_arn }}'
            reason: '{{ reason }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>standard</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.standards
SET PatchDocument = string('{{ {
    "DisabledStandardsControls": disabled_standards_controls
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ standards_subscription_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.standards
WHERE Identifier = '{{ standards_subscription_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>standards</code> resource, the following permissions are required:

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
securityhub:GetEnabledStandards,
securityhub:BatchEnableStandards,
securityhub:UpdateStandardsControl
```

</TabItem>
<TabItem value="read">

```json
securityhub:GetEnabledStandards,
securityhub:DescribeStandardsControls
```

</TabItem>
<TabItem value="update">

```json
securityhub:GetEnabledStandards,
securityhub:UpdateStandardsControl
```

</TabItem>
<TabItem value="delete">

```json
securityhub:GetEnabledStandards,
securityhub:BatchDisableStandards
```

</TabItem>
<TabItem value="list">

```json
securityhub:GetEnabledStandards
```

</TabItem>
</Tabs>