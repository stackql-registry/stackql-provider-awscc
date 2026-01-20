---
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
  - deadline
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

Creates, updates, deletes or gets a <code>monitor</code> resource or lists <code>monitors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>monitors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Deadline::Monitor Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.deadline.monitors" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_center_application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_center_instance_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "monitor_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "subdomain",
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
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "url",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-monitor.html"><code>AWS::Deadline::Monitor</code></a>.

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
    <td><CopyableCode code="DisplayName, IdentityCenterInstanceArn, RoleArn, Subdomain, region" /></td>
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

Gets all properties from an individual <code>monitor</code>.
```sql
SELECT
region,
display_name,
identity_center_application_arn,
identity_center_instance_arn,
monitor_id,
role_arn,
subdomain,
tags,
url,
arn
FROM awscc.deadline.monitors
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>monitor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.deadline.monitors (
 DisplayName,
 IdentityCenterInstanceArn,
 RoleArn,
 Subdomain,
 region
)
SELECT 
'{{ DisplayName }}',
 '{{ IdentityCenterInstanceArn }}',
 '{{ RoleArn }}',
 '{{ Subdomain }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.deadline.monitors (
 DisplayName,
 IdentityCenterInstanceArn,
 RoleArn,
 Subdomain,
 Tags,
 region
)
SELECT 
 '{{ DisplayName }}',
 '{{ IdentityCenterInstanceArn }}',
 '{{ RoleArn }}',
 '{{ Subdomain }}',
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
  - name: monitor
    props:
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: IdentityCenterInstanceArn
        value: '{{ IdentityCenterInstanceArn }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Subdomain
        value: '{{ Subdomain }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.deadline.monitors
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>monitors</code> resource, the following permissions are required:

### Create
```json
deadline:CreateMonitor,
deadline:GetMonitor,
deadline:TagResource,
deadline:ListTagsForResource,
iam:PassRole,
kms:CreateGrant,
sso:CreateApplication,
sso:DeleteApplication,
sso:PutApplicationAssignmentConfiguration,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant
```

### Read
```json
deadline:GetMonitor,
deadline:ListTagsForResource
```

### Update
```json
deadline:GetMonitor,
deadline:TagResource,
deadline:UntagResource,
deadline:ListTagsForResource,
deadline:UpdateMonitor,
iam:PassRole,
kms:CreateGrant,
sso:PutApplicationGrant,
sso:UpdateApplication
```

### Delete
```json
deadline:DeleteMonitor,
deadline:GetMonitor,
sso:DeleteApplication
```

### List
```json
deadline:ListMonitors
```
