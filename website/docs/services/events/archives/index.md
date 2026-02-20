---
title: archives
hide_title: false
hide_table_of_contents: false
keywords:
  - archives
  - events
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

Creates, updates, deletes or gets an <code>archive</code> resource or lists <code>archives</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>archives</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Events::Archive</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.events.archives" /></td></tr>
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
    "name": "archive_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "event_pattern",
    "type": "object",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "retention_days",
    "type": "integer",
    "description": ""
  },
  {
    "name": "kms_key_identifier",
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
    "name": "archive_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html"><code>AWS::Events::Archive</code></a>.

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
    <td><code>archives</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SourceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>archives</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>archives</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>archives_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>archives</code></td>
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

Gets all properties from an individual <code>archive</code>.
```sql
SELECT
region,
archive_name,
source_arn,
description,
event_pattern,
arn,
retention_days,
kms_key_identifier
FROM awscc.events.archives
WHERE region = 'us-east-1' AND data__Identifier = '<ArchiveName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>archives</code> in a region.
```sql
SELECT
region,
archive_name
FROM awscc.events.archives_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>archive</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.events.archives (
 SourceArn,
 region
)
SELECT 
'{{ SourceArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.events.archives (
 ArchiveName,
 SourceArn,
 Description,
 EventPattern,
 RetentionDays,
 KmsKeyIdentifier,
 region
)
SELECT 
 '{{ ArchiveName }}',
 '{{ SourceArn }}',
 '{{ Description }}',
 '{{ EventPattern }}',
 '{{ RetentionDays }}',
 '{{ KmsKeyIdentifier }}',
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
  - name: archive
    props:
      - name: ArchiveName
        value: '{{ ArchiveName }}'
      - name: SourceArn
        value: '{{ SourceArn }}'
      - name: Description
        value: '{{ Description }}'
      - name: EventPattern
        value: {}
      - name: RetentionDays
        value: '{{ RetentionDays }}'
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.events.archives
SET data__PatchDocument = string('{{ {
    "Description": description,
    "EventPattern": event_pattern,
    "RetentionDays": retention_days,
    "KmsKeyIdentifier": kms_key_identifier
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ArchiveName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.events.archives
WHERE data__Identifier = '<ArchiveName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>archives</code> resource, the following permissions are required:

### Create
```json
events:DescribeArchive,
events:CreateArchive,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
events:DescribeArchive,
events:DeleteArchive
```

### List
```json
events:ListArchives
```

### Update
```json
events:DescribeArchive,
events:UpdateArchive,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt,
kms:ReEncryptTo,
kms:ReEncryptFrom
```

### Read
```json
events:DescribeArchive,
kms:Decrypt
```
