---
title: security_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - security_controls
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

Creates, updates, deletes or gets a <code>security_control</code> resource or lists <code>security_controls</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_controls</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A security control in Security Hub describes a security best practice related to a specific resource.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.security_controls" /></td></tr>
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
    "name": "security_control_id",
    "type": "string",
    "description": "The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3."
  },
  {
    "name": "last_update_reason",
    "type": "string",
    "description": "The most recent reason for updating the customizable properties of a security control. This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores."
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "An object that identifies the name of a control parameter, its current value, and whether it has been customized."
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
    "name": "security_control_id",
    "type": "string",
    "description": "The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html"><code>AWS::SecurityHub::SecurityControl</code></a>.

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
    <td><code>security_controls</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Parameters, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_controls</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_controls</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_controls_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_controls</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>security_control</code>.
```sql
SELECT
region,
security_control_id,
security_control_arn,
last_update_reason,
parameters
FROM awscc.securityhub.security_controls
WHERE region = 'us-east-1' AND data__Identifier = '<SecurityControlId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_controls</code> in a region.
```sql
SELECT
region,
security_control_id
FROM awscc.securityhub.security_controls_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_control</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.security_controls (
 Parameters,
 region
)
SELECT 
'{{ Parameters }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.security_controls (
 SecurityControlId,
 SecurityControlArn,
 LastUpdateReason,
 Parameters,
 region
)
SELECT 
 '{{ SecurityControlId }}',
 '{{ SecurityControlArn }}',
 '{{ LastUpdateReason }}',
 '{{ Parameters }}',
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
  - name: security_control
    props:
      - name: SecurityControlId
        value: '{{ SecurityControlId }}'
      - name: SecurityControlArn
        value: null
      - name: LastUpdateReason
        value: '{{ LastUpdateReason }}'
      - name: Parameters
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.securityhub.security_controls
SET data__PatchDocument = string('{{ {
    "SecurityControlArn": security_control_arn,
    "LastUpdateReason": last_update_reason,
    "Parameters": parameters
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<SecurityControlId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.security_controls
WHERE data__Identifier = '<SecurityControlId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_controls</code> resource, the following permissions are required:

### Create
```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:UpdateSecurityControl,
securityhub:UpdateStandardsControl
```

### Read
```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls
```

### Update
```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:UpdateSecurityControl,
securityhub:UpdateStandardsControl
```

### Delete
```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:UpdateSecurityControl,
securityhub:UpdateStandardsControl
```

### List
```json
securityhub:BatchGetSecurityControls,
securityhub:DescribeStandardsControls,
securityhub:ListSecurityControlDefinitions
```
