---
title: session_loggers
hide_title: false
hide_table_of_contents: false
keywords:
  - session_loggers
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

Creates, updates, deletes or gets a <code>session_logger</code> resource or lists <code>session_loggers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>session_loggers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::SessionLogger Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.session_loggers" /></td></tr>
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
    "name": "additional_encryption_context",
    "type": "object",
    "description": ""
  },
  {
    "name": "associated_portal_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "customer_managed_key",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_filter",
    "type": "object",
    "description": ""
  },
  {
    "name": "log_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "bucket",
            "type": "string",
            "description": ""
          },
          {
            "name": "key_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "bucket_owner",
            "type": "string",
            "description": ""
          },
          {
            "name": "log_file_format",
            "type": "string",
            "description": ""
          },
          {
            "name": "folder_structure",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "session_logger_arn",
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
    "name": "session_logger_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-sessionlogger.html"><code>AWS::WorkSpacesWeb::SessionLogger</code></a>.

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
    <td><code>session_loggers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EventFilter, LogConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>session_loggers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>session_loggers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>session_loggers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>session_loggers</code></td>
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

Gets all properties from an individual <code>session_logger</code>.
```sql
SELECT
region,
additional_encryption_context,
associated_portal_arns,
creation_date,
customer_managed_key,
display_name,
event_filter,
log_configuration,
session_logger_arn,
tags
FROM awscc.workspacesweb.session_loggers
WHERE region = 'us-east-1' AND Identifier = '<SessionLoggerArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>session_loggers</code> in a region.
```sql
SELECT
region,
session_logger_arn
FROM awscc.workspacesweb.session_loggers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>session_logger</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.session_loggers (
 EventFilter,
 LogConfiguration,
 region
)
SELECT 
'{{ EventFilter }}',
 '{{ LogConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.session_loggers (
 AdditionalEncryptionContext,
 CustomerManagedKey,
 DisplayName,
 EventFilter,
 LogConfiguration,
 Tags,
 region
)
SELECT 
 '{{ AdditionalEncryptionContext }}',
 '{{ CustomerManagedKey }}',
 '{{ DisplayName }}',
 '{{ EventFilter }}',
 '{{ LogConfiguration }}',
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
  - name: session_logger
    props:
      - name: AdditionalEncryptionContext
        value: {}
      - name: CustomerManagedKey
        value: '{{ CustomerManagedKey }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: EventFilter
        value: null
      - name: LogConfiguration
        value:
          S3:
            Bucket: '{{ Bucket }}'
            KeyPrefix: '{{ KeyPrefix }}'
            BucketOwner: '{{ BucketOwner }}'
            LogFileFormat: '{{ LogFileFormat }}'
            FolderStructure: '{{ FolderStructure }}'
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
UPDATE awscc.workspacesweb.session_loggers
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "EventFilter": event_filter,
    "LogConfiguration": log_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SessionLoggerArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.session_loggers
WHERE Identifier = '<SessionLoggerArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>session_loggers</code> resource, the following permissions are required:

### Create
```json
workspaces-web:CreateSessionLogger,
workspaces-web:GetSessionLogger,
workspaces-web:ListSessionLoggers,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource,
s3:PutObject,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt,
kms:GenerateDataKeyWithoutPlaintext,
kms:ReEncryptTo,
kms:ReEncryptFrom
```

### Read
```json
workspaces-web:GetSessionLogger,
workspaces-web:ListTagsForResource,
kms:Decrypt
```

### Update
```json
workspaces-web:UpdateSessionLogger,
workspaces-web:GetSessionLogger,
workspaces-web:ListSessionLoggers,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:ListTagsForResource,
s3:PutObject,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
workspaces-web:GetSessionLogger,
workspaces-web:DeleteSessionLogger,
kms:Decrypt
```

### List
```json
workspaces-web:ListSessionLoggers,
kms:Decrypt
```
