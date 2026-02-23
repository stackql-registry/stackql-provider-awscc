---
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
  - vpclattice
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

Creates, updates, deletes or gets a <code>listener</code> resource or lists <code>listeners</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>listeners</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.listeners" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_action",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "forward",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "target_groups",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "target_group_identifier",
                "type": "string",
                "description": ""
              },
              {
                "name": "weight",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "fixed_response",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "status_code",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "port",
    "type": "integer",
    "description": ""
  },
  {
    "name": "protocol",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_identifier",
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
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html"><code>AWS::VpcLattice::Listener</code></a>.

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
    <td><code>listeners</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DefaultAction, Protocol, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>listeners_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>listeners</code></td>
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

Gets all properties from an individual <code>listener</code>.
```sql
SELECT
region,
arn,
default_action,
id,
name,
port,
protocol,
service_arn,
service_id,
service_identifier,
tags
FROM awscc.vpclattice.listeners
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>listeners</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.vpclattice.listeners_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>listener</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.listeners (
 DefaultAction,
 Protocol,
 region
)
SELECT
'{{ default_action }}',
 '{{ protocol }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.listeners (
 DefaultAction,
 Name,
 Port,
 Protocol,
 ServiceIdentifier,
 Tags,
 region
)
SELECT
 '{{ default_action }}',
 '{{ name }}',
 '{{ port }}',
 '{{ protocol }}',
 '{{ service_identifier }}',
 '{{ tags }}',
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
  - name: listener
    props:
      - name: default_action
        value:
          forward:
            target_groups:
              - target_group_identifier: '{{ target_group_identifier }}'
                weight: '{{ weight }}'
          fixed_response:
            status_code: '{{ status_code }}'
      - name: name
        value: '{{ name }}'
      - name: port
        value: '{{ port }}'
      - name: protocol
        value: '{{ protocol }}'
      - name: service_identifier
        value: '{{ service_identifier }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>listener</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.vpclattice.listeners
SET PatchDocument = string('{{ {
    "DefaultAction": default_action,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.listeners
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>listeners</code> resource, the following permissions are required:

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
vpc-lattice:CreateListener,
vpc-lattice:TagResource,
vpc-lattice:GetListener,
vpc-lattice:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
vpc-lattice:GetListener,
vpc-lattice:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
vpc-lattice:UpdateListener,
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
vpc-lattice:GetListener,
vpc-lattice:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
vpc-lattice:DeleteListener
```

</TabItem>
<TabItem value="list">

```json
vpc-lattice:ListListeners
```

</TabItem>
</Tabs>