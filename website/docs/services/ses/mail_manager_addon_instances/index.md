---
title: mail_manager_addon_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_addon_instances
  - ses
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

Creates, updates, deletes or gets a <code>mail_manager_addon_instance</code> resource or lists <code>mail_manager_addon_instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_addon_instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerAddonInstance Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_addon_instances" /></td></tr>
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
    "name": "addon_instance_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "addon_instance_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "addon_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "addon_subscription_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "addon_instance_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html"><code>AWS::SES::MailManagerAddonInstance</code></a>.

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
    <td><code>mail_manager_addon_instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AddonSubscriptionId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mail_manager_addon_instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mail_manager_addon_instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mail_manager_addon_instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mail_manager_addon_instances</code></td>
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

Gets all properties from an individual <code>mail_manager_addon_instance</code>.
```sql
SELECT
region,
addon_instance_arn,
addon_instance_id,
addon_name,
addon_subscription_id,
tags
FROM awscc.ses.mail_manager_addon_instances
WHERE region = 'us-east-1' AND data__Identifier = '<AddonInstanceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>mail_manager_addon_instances</code> in a region.
```sql
SELECT
region,
addon_instance_id
FROM awscc.ses.mail_manager_addon_instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_addon_instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_addon_instances (
 AddonSubscriptionId,
 region
)
SELECT 
'{{ AddonSubscriptionId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.mail_manager_addon_instances (
 AddonSubscriptionId,
 Tags,
 region
)
SELECT 
 '{{ AddonSubscriptionId }}',
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
  - name: mail_manager_addon_instance
    props:
      - name: AddonSubscriptionId
        value: '{{ AddonSubscriptionId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ses.mail_manager_addon_instances
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AddonInstanceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.mail_manager_addon_instances
WHERE data__Identifier = '<AddonInstanceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mail_manager_addon_instances</code> resource, the following permissions are required:

### Create
```json
ses:TagResource,
ses:ListTagsForResource,
ses:GetAddonInstance,
ses:CreateAddonInstance
```

### Read
```json
ses:ListTagsForResource,
ses:GetAddonInstance
```

### Update
```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetAddonInstance
```

### Delete
```json
ses:GetAddonInstance,
ses:DeleteAddonInstance
```

### List
```json
ses:ListAddonInstances
```
