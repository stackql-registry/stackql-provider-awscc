---
title: preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - preferences
  - ssmguiconnect
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

Creates, updates, deletes or gets a <code>preference</code> resource or lists <code>preferences</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>preferences</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SSMGuiConnect::Preferences Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssmguiconnect.preferences" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": "The AWS Account Id that the preference is associated with, used as the unique identifier for this resource."
  },
  {
    "name": "connection_recording_preferences",
    "type": "object",
    "description": "The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. This includes details such as which S3 bucket recordings are stored in.",
    "children": [
      {
        "name": "recording_destinations",
        "type": "object",
        "description": "Determines where recordings of RDP connections are stored.",
        "children": [
          {
            "name": "s3_buckets",
            "type": "array",
            "description": "The S3 bucket where RDP connection recordings are stored.",
            "children": [
              {
                "name": "bucket_owner",
                "type": "string",
                "description": "The AWS account number that owns the S3 bucket."
              },
              {
                "name": "bucket_name",
                "type": "string",
                "description": "The name of the S3 bucket where RDP connection recordings are stored."
              }
            ]
          }
        ]
      },
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same AWS Region as the node you start an RDP connection to."
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
    "name": "account_id",
    "type": "string",
    "description": "The AWS Account Id that the preference is associated with, used as the unique identifier for this resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preference.html"><code>AWS::SSMGuiConnect::Preferences</code></a>.

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
    <td><code>preferences</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>preferences</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>preferences</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>preferences_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>preferences</code></td>
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

Gets all properties from an individual <code>preference</code>.
```sql
SELECT
  region,
  account_id,
  connection_recording_preferences
FROM awscc.ssmguiconnect.preferences
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ account_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>preferences</code> in a region.
```sql
SELECT
  region,
  account_id
FROM awscc.ssmguiconnect.preferences_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>preference</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssmguiconnect.preferences (
  ConnectionRecordingPreferences,
  region
)
SELECT
  '{{ connection_recording_preferences }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssmguiconnect.preferences (
  ConnectionRecordingPreferences,
  region
)
SELECT
  '{{ connection_recording_preferences }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
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
  - name: preference
    props:
      - name: connection_recording_preferences
        value:
          recording_destinations:
            s3_buckets:
              - bucket_owner: '{{ bucket_owner }}'
                bucket_name: '{{ bucket_name }}'
          kms_key_arn: '{{ kms_key_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>preference</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssmguiconnect.preferences
SET PatchDocument = string('{{ {
    "ConnectionRecordingPreferences": connection_recording_preferences
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ account_id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmguiconnect.preferences
WHERE
  Identifier = '{{ account_id }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>preferences</code> resource, the following permissions are required:

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
kms:CreateGrant,
ssm-guiconnect:UpdateConnectionRecordingPreferences,
ssm-guiconnect:GetConnectionRecordingPreferences
```

</TabItem>
<TabItem value="read">

```json
ssm-guiconnect:GetConnectionRecordingPreferences
```

</TabItem>
<TabItem value="update">

```json
kms:CreateGrant,
ssm-guiconnect:UpdateConnectionRecordingPreferences,
ssm-guiconnect:GetConnectionRecordingPreferences,
ssm-guiconnect:DeleteConnectionRecordingPreferences
```

</TabItem>
<TabItem value="delete">

```json
ssm-guiconnect:GetConnectionRecordingPreferences,
ssm-guiconnect:DeleteConnectionRecordingPreferences
```

</TabItem>
<TabItem value="list">

```json
ssm-guiconnect:GetConnectionRecordingPreferences
```

</TabItem>
</Tabs>