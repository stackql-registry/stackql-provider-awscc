---
title: network_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - network_settings
  - workspacesweb
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

Creates, updates, deletes or gets a <code>network_setting</code> resource or lists <code>network_settings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::NetworkSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.network_settings" /></td></tr>
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
    "name": "associated_portal_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "network_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": ""
  },
  {
    "name": "subnet_ids",
    "type": "array",
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
    "name": "vpc_id",
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
    "name": "network_settings_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksetting.html"><code>AWS::WorkSpacesWeb::NetworkSettings</code></a>.

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
    <td><code>network_settings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SecurityGroupIds, SubnetIds, VpcId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_settings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_settings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_settings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_settings</code></td>
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

Gets all properties from an individual <code>network_setting</code>.
```sql
SELECT
region,
associated_portal_arns,
network_settings_arn,
security_group_ids,
subnet_ids,
tags,
vpc_id
FROM awscc.workspacesweb.network_settings
WHERE region = 'us-east-1' AND Identifier = '{{ network_settings_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_settings</code> in a region.
```sql
SELECT
region,
network_settings_arn
FROM awscc.workspacesweb.network_settings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.network_settings (
 SecurityGroupIds,
 SubnetIds,
 VpcId,
 region
)
SELECT
'{{ security_group_ids }}',
 '{{ subnet_ids }}',
 '{{ vpc_id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.network_settings (
 SecurityGroupIds,
 SubnetIds,
 Tags,
 VpcId,
 region
)
SELECT
 '{{ security_group_ids }}',
 '{{ subnet_ids }}',
 '{{ tags }}',
 '{{ vpc_id }}',
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
  - name: network_setting
    props:
      - name: security_group_ids
        value:
          - '{{ security_group_ids[0] }}'
      - name: subnet_ids
        value:
          - '{{ subnet_ids[0] }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>network_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.workspacesweb.network_settings
SET PatchDocument = string('{{ {
    "SecurityGroupIds": security_group_ids,
    "SubnetIds": subnet_ids,
    "Tags": tags,
    "VpcId": vpc_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ network_settings_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.network_settings
WHERE Identifier = '{{ network_settings_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_settings</code> resource, the following permissions are required:

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
workspaces-web:CreateNetworkSettings,
workspaces-web:GetNetworkSettings,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource
```

</TabItem>
<TabItem value="read">

```json
workspaces-web:GetNetworkSettings,
workspaces-web:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
workspaces-web:UpdateNetworkSettings,
workspaces-web:UpdateResource,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:GetNetworkSettings,
workspaces-web:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
workspaces-web:GetNetworkSettings,
workspaces-web:DeleteNetworkSettings
```

</TabItem>
<TabItem value="list">

```json
workspaces-web:ListNetworkSettings
```

</TabItem>
</Tabs>