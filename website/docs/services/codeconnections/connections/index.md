---
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - codeconnections
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

Creates, updates, deletes or gets a <code>connection</code> resource or lists <code>connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for AWS::CodeConnections::Connection resource which can be used to connect external source providers with other AWS services (i.e. AWS CodePipeline)</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codeconnections.connections" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "connection_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between AWS services."
  },
  {
    "name": "connection_name",
    "type": "string",
    "description": "The name of the connection. Connection names must be unique in an AWS user account."
  },
  {
    "name": "connection_status",
    "type": "string",
    "description": "The current status of the connection."
  },
  {
    "name": "owner_account_id",
    "type": "string",
    "description": "The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository."
  },
  {
    "name": "provider_type",
    "type": "string",
    "description": "The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn."
  },
  {
    "name": "host_arn",
    "type": "string",
    "description": "The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Specifies the tags applied to a connection.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html"><code>AWS::CodeConnections::Connection</code></a>.

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
    <td><CopyableCode code="ConnectionName, region" /></td>
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

Gets all properties from an individual <code>connection</code>.
```sql
SELECT
region,
connection_arn,
connection_name,
connection_status,
owner_account_id,
provider_type,
host_arn,
tags
FROM awscc.codeconnections.connections
WHERE region = 'us-east-1' AND data__Identifier = '<ConnectionArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codeconnections.connections (
 ConnectionName,
 region
)
SELECT 
'{{ ConnectionName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codeconnections.connections (
 ConnectionName,
 ProviderType,
 HostArn,
 Tags,
 region
)
SELECT 
 '{{ ConnectionName }}',
 '{{ ProviderType }}',
 '{{ HostArn }}',
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
  - name: connection
    props:
      - name: ConnectionName
        value: '{{ ConnectionName }}'
      - name: ProviderType
        value: '{{ ProviderType }}'
      - name: HostArn
        value: '{{ HostArn }}'
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
DELETE FROM awscc.codeconnections.connections
WHERE data__Identifier = '<ConnectionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connections</code> resource, the following permissions are required:

### Create
```json
codeconnections:CreateConnection,
codeconnections:TagResource
```

### Read
```json
codeconnections:GetConnection,
codeconnections:ListTagsForResource
```

### Update
```json
codeconnections:ListTagsForResource,
codeconnections:TagResource,
codeconnections:UntagResource
```

### Delete
```json
codeconnections:DeleteConnection
```

### List
```json
codeconnections:ListConnections,
codeconnections:ListTagsForResource
```
