---
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - connect
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

Creates, updates, deletes or gets an <code>instance</code> resource or lists <code>instances</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instances</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Connect::Instance</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.instances" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "An instanceId is automatically generated on creation and assigned as the unique identifier."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "An instanceArn is automatically generated on creation based on instanceId."
  },
  {
    "name": "identity_management_type",
    "type": "string",
    "description": "Specifies the type of directory integration for new instance."
  },
  {
    "name": "instance_alias",
    "type": "string",
    "description": "Alias of the new directory created as part of new instance creation."
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "Timestamp of instance creation logged as part of instance creation."
  },
  {
    "name": "service_role",
    "type": "string",
    "description": "Service linked role created as part of instance creation."
  },
  {
    "name": "instance_status",
    "type": "string",
    "description": "Specifies the creation status of new instance."
  },
  {
    "name": "directory_id",
    "type": "string",
    "description": "Existing directoryId user wants to map to the new Connect instance."
  },
  {
    "name": "attributes",
    "type": "object",
    "description": "The attributes for the instance.",
    "children": [
      {
        "name": "inbound_calls",
        "type": "boolean",
        "description": "Mandatory element which enables inbound calls on new instance."
      },
      {
        "name": "outbound_calls",
        "type": "boolean",
        "description": "Mandatory element which enables outbound calls on new instance."
      },
      {
        "name": "contactflow_logs",
        "type": "boolean",
        "description": "Boolean flag which enables CONTACTFLOW&#95;LOGS on an instance."
      },
      {
        "name": "contact_lens",
        "type": "boolean",
        "description": "Boolean flag which enables CONTACT&#95;LENS on an instance."
      },
      {
        "name": "auto_resolve_best_voices",
        "type": "boolean",
        "description": "Boolean flag which enables AUTO&#95;RESOLVE&#95;BEST&#95;VOICES on an instance."
      },
      {
        "name": "use_custom_tt_svoices",
        "type": "boolean",
        "description": "Boolean flag which enables USE&#95;CUSTOM&#95;TTS&#95;VOICES on an instance."
      },
      {
        "name": "early_media",
        "type": "boolean",
        "description": "Boolean flag which enables EARLY&#95;MEDIA on an instance."
      },
      {
        "name": "multi_party_conference",
        "type": "boolean",
        "description": "Boolean flag which enables MULTI&#95;PARTY&#95;CONFERENCE on an instance."
      },
      {
        "name": "high_volume_out_bound",
        "type": "boolean",
        "description": "Boolean flag which enables HIGH&#95;VOLUME&#95;OUTBOUND on an instance."
      },
      {
        "name": "enhanced_contact_monitoring",
        "type": "boolean",
        "description": "Boolean flag which enables ENHANCED&#95;CONTACT&#95;MONITORING on an instance."
      },
      {
        "name": "enhanced_chat_monitoring",
        "type": "boolean",
        "description": "Boolean flag which enables ENHANCED&#95;CHAT&#95;MONITORING on an instance."
      },
      {
        "name": "multi_party_chat_conference",
        "type": "boolean",
        "description": "Boolean flag which enables MULTI&#95;PARTY&#95;CHAT&#95;CONFERENCE on an instance."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. . You can specify a value that is maximum of 256 Unicode characters"
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
    "description": "An instanceArn is automatically generated on creation based on instanceId."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html"><code>AWS::Connect::Instance</code></a>.

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
    <td><code>instances</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="IdentityManagementType, Attributes, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instances</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instances</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instances_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instances</code></td>
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

Gets all properties from an individual <code>instance</code>.
```sql
SELECT
region,
id,
arn,
identity_management_type,
instance_alias,
created_time,
service_role,
instance_status,
directory_id,
attributes,
tags
FROM awscc.connect.instances
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>instances</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.connect.instances_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.instances (
 IdentityManagementType,
 Attributes,
 region
)
SELECT 
'{{ IdentityManagementType }}',
 '{{ Attributes }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.instances (
 IdentityManagementType,
 InstanceAlias,
 DirectoryId,
 Attributes,
 Tags,
 region
)
SELECT 
 '{{ IdentityManagementType }}',
 '{{ InstanceAlias }}',
 '{{ DirectoryId }}',
 '{{ Attributes }}',
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
  - name: instance
    props:
      - name: IdentityManagementType
        value: '{{ IdentityManagementType }}'
      - name: InstanceAlias
        value: '{{ InstanceAlias }}'
      - name: DirectoryId
        value: '{{ DirectoryId }}'
      - name: Attributes
        value:
          InboundCalls: '{{ InboundCalls }}'
          OutboundCalls: '{{ OutboundCalls }}'
          ContactflowLogs: '{{ ContactflowLogs }}'
          ContactLens: '{{ ContactLens }}'
          AutoResolveBestVoices: '{{ AutoResolveBestVoices }}'
          UseCustomTTSVoices: '{{ UseCustomTTSVoices }}'
          EarlyMedia: '{{ EarlyMedia }}'
          MultiPartyConference: '{{ MultiPartyConference }}'
          HighVolumeOutBound: '{{ HighVolumeOutBound }}'
          EnhancedContactMonitoring: '{{ EnhancedContactMonitoring }}'
          EnhancedChatMonitoring: '{{ EnhancedChatMonitoring }}'
          MultiPartyChatConference: '{{ MultiPartyChatConference }}'
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
UPDATE awscc.connect.instances
SET PatchDocument = string('{{ {
    "Attributes": attributes,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.instances
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instances</code> resource, the following permissions are required:

### Create
```json
connect:CreateInstance,
connect:DescribeInstance,
connect:UpdateInstanceAttribute,
connect:TagResource,
ds:CheckAlias,
ds:CreateAlias,
ds:AuthorizeApplication,
ds:UnauthorizeApplication,
ds:CreateIdentityPoolDirectory,
ds:CreateDirectory,
ds:DescribeDirectories,
iam:CreateServiceLinkedRole,
iam:PutRolePolicy,
logs:CreateLogGroup
```

### Read
```json
connect:DescribeInstance,
connect:ListInstanceAttributes,
ds:DescribeDirectories
```

### Update
```json
connect:ListInstanceAttributes,
connect:UpdateInstanceAttribute,
ds:DescribeDirectories,
iam:CreateServiceLinkedRole,
iam:DeleteRolePolicy,
logs:CreateLogGroup,
iam:PutRolePolicy,
connect:TagResource,
connect:UntagResource
```

### Delete
```json
connect:DeleteInstance,
connect:DescribeInstance,
connect:UntagResource,
ds:DeleteDirectory,
ds:UnauthorizeApplication,
ds:DescribeDirectories
```

### List
```json
connect:ListInstances,
connect:ListInstanceAttributes,
ds:DescribeDirectories
```
