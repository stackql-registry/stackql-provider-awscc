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
WHERE region = 'us-east-1' AND Identifier = '<AccountId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>preferences</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.ssmguiconnect.preferences_list_only
WHERE region = 'us-east-1';
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
'{{ ConnectionRecordingPreferences }}',
'{{ region }}';
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
 '{{ ConnectionRecordingPreferences }}',
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
  - name: preference
    props:
      - name: ConnectionRecordingPreferences
        value:
          RecordingDestinations:
            S3Buckets:
              - BucketOwner: '{{ BucketOwner }}'
                BucketName: '{{ BucketName }}'
          KMSKeyArn: '{{ KMSKeyArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ssmguiconnect.preferences
SET PatchDocument = string('{{ {
    "ConnectionRecordingPreferences": connection_recording_preferences
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccountId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssmguiconnect.preferences
WHERE Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>preferences</code> resource, the following permissions are required:

### Create
```json
kms:CreateGrant,
ssm-guiconnect:UpdateConnectionRecordingPreferences,
ssm-guiconnect:GetConnectionRecordingPreferences
```

### Read
```json
ssm-guiconnect:GetConnectionRecordingPreferences
```

### Update
```json
kms:CreateGrant,
ssm-guiconnect:UpdateConnectionRecordingPreferences,
ssm-guiconnect:GetConnectionRecordingPreferences,
ssm-guiconnect:DeleteConnectionRecordingPreferences
```

### Delete
```json
ssm-guiconnect:GetConnectionRecordingPreferences,
ssm-guiconnect:DeleteConnectionRecordingPreferences
```

### List
```json
ssm-guiconnect:GetConnectionRecordingPreferences
```
