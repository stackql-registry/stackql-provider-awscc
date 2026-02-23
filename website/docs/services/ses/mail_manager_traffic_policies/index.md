---
title: mail_manager_traffic_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_traffic_policies
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

Creates, updates, deletes or gets a <code>mail_manager_traffic_policy</code> resource or lists <code>mail_manager_traffic_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_traffic_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerTrafficPolicy Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_traffic_policies" /></td></tr>
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
    "name": "default_action",
    "type": "string",
    "description": ""
  },
  {
    "name": "max_message_size_bytes",
    "type": "number",
    "description": ""
  },
  {
    "name": "policy_statements",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "conditions",
        "type": "array",
        "description": ""
      }
    ]
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
    "name": "traffic_policy_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "traffic_policy_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "traffic_policy_name",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "traffic_policy_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html"><code>AWS::SES::MailManagerTrafficPolicy</code></a>.

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
    <td><code>mail_manager_traffic_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DefaultAction, PolicyStatements, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mail_manager_traffic_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mail_manager_traffic_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mail_manager_traffic_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mail_manager_traffic_policies</code></td>
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

Gets all properties from an individual <code>mail_manager_traffic_policy</code>.
```sql
SELECT
region,
default_action,
max_message_size_bytes,
policy_statements,
tags,
traffic_policy_arn,
traffic_policy_id,
traffic_policy_name
FROM awscc.ses.mail_manager_traffic_policies
WHERE region = 'us-east-1' AND Identifier = '{{ traffic_policy_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>mail_manager_traffic_policies</code> in a region.
```sql
SELECT
region,
traffic_policy_id
FROM awscc.ses.mail_manager_traffic_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_traffic_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_traffic_policies (
 DefaultAction,
 PolicyStatements,
 region
)
SELECT
'{{ default_action }}',
 '{{ policy_statements }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.mail_manager_traffic_policies (
 DefaultAction,
 MaxMessageSizeBytes,
 PolicyStatements,
 Tags,
 TrafficPolicyName,
 region
)
SELECT
 '{{ default_action }}',
 '{{ max_message_size_bytes }}',
 '{{ policy_statements }}',
 '{{ tags }}',
 '{{ traffic_policy_name }}',
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
  - name: mail_manager_traffic_policy
    props:
      - name: default_action
        value: '{{ default_action }}'
      - name: max_message_size_bytes
        value: null
      - name: policy_statements
        value:
          - conditions:
              - null
            action: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: traffic_policy_name
        value: '{{ traffic_policy_name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>mail_manager_traffic_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ses.mail_manager_traffic_policies
SET PatchDocument = string('{{ {
    "DefaultAction": default_action,
    "MaxMessageSizeBytes": max_message_size_bytes,
    "PolicyStatements": policy_statements,
    "Tags": tags,
    "TrafficPolicyName": traffic_policy_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ traffic_policy_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.mail_manager_traffic_policies
WHERE Identifier = '{{ traffic_policy_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mail_manager_traffic_policies</code> resource, the following permissions are required:

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
ses:TagResource,
ses:ListTagsForResource,
ses:GetTrafficPolicy,
ses:CreateTrafficPolicy
```

</TabItem>
<TabItem value="read">

```json
ses:ListTagsForResource,
ses:GetTrafficPolicy
```

</TabItem>
<TabItem value="update">

```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetTrafficPolicy,
ses:UpdateTrafficPolicy
```

</TabItem>
<TabItem value="delete">

```json
ses:GetTrafficPolicy,
ses:DeleteTrafficPolicy
```

</TabItem>
<TabItem value="list">

```json
ses:ListTrafficPolicies
```

</TabItem>
</Tabs>