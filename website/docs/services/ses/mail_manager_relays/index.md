---
title: mail_manager_relays
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_relays
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

Creates, updates, deletes or gets a <code>mail_manager_relay</code> resource or lists <code>mail_manager_relays</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_relays</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerRelay Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_relays" /></td></tr>
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
    "name": "authentication",
    "type": "object",
    "description": ""
  },
  {
    "name": "relay_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "relay_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "relay_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "server_port",
    "type": "number",
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
    "name": "relay_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html"><code>AWS::SES::MailManagerRelay</code></a>.

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
    <td><code>mail_manager_relays</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Authentication, ServerName, ServerPort, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mail_manager_relays</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mail_manager_relays</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mail_manager_relays_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mail_manager_relays</code></td>
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

Gets all properties from an individual <code>mail_manager_relay</code>.
```sql
SELECT
region,
authentication,
relay_arn,
relay_id,
relay_name,
server_name,
server_port,
tags
FROM awscc.ses.mail_manager_relays
WHERE region = 'us-east-1' AND data__Identifier = '<RelayId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>mail_manager_relays</code> in a region.
```sql
SELECT
region,
relay_id
FROM awscc.ses.mail_manager_relays_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_relay</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_relays (
 Authentication,
 ServerName,
 ServerPort,
 region
)
SELECT 
'{{ Authentication }}',
 '{{ ServerName }}',
 '{{ ServerPort }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.mail_manager_relays (
 Authentication,
 RelayName,
 ServerName,
 ServerPort,
 Tags,
 region
)
SELECT 
 '{{ Authentication }}',
 '{{ RelayName }}',
 '{{ ServerName }}',
 '{{ ServerPort }}',
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
  - name: mail_manager_relay
    props:
      - name: Authentication
        value: null
      - name: RelayName
        value: '{{ RelayName }}'
      - name: ServerName
        value: '{{ ServerName }}'
      - name: ServerPort
        value: null
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
UPDATE awscc.ses.mail_manager_relays
SET data__PatchDocument = string('{{ {
    "Authentication": authentication,
    "RelayName": relay_name,
    "ServerName": server_name,
    "ServerPort": server_port,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<RelayId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.mail_manager_relays
WHERE data__Identifier = '<RelayId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mail_manager_relays</code> resource, the following permissions are required:

### Create
```json
ses:TagResource,
ses:ListTagsForResource,
ses:GetRelay,
ses:CreateRelay
```

### Read
```json
ses:ListTagsForResource,
ses:GetRelay
```

### Update
```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetRelay,
ses:UpdateRelay
```

### Delete
```json
ses:GetRelay,
ses:DeleteRelay
```

### List
```json
ses:ListRelays
```
