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
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="additional_encryption_context" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="associated_portal_arns" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="creation_date" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="customer_managed_key" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="display_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="event_filter" /></td><td><code>undefined</code></td><td></td></tr>
<tr><td><CopyableCode code="log_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="session_logger_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-sessionlogger.html"><code>AWS::WorkSpacesWeb::SessionLogger</code></a>.

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
    <td><CopyableCode code="EventFilter, LogConfiguration, region" /></td>
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
Gets all <code>session_loggers</code> in a region.
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
WHERE region = 'us-east-1';
```
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
WHERE region = 'us-east-1' AND data__Identifier = '<SessionLoggerArn>';
```

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

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.session_loggers
WHERE data__Identifier = '<SessionLoggerArn>'
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
