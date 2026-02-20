---
title: agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreements
  - transfer
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

Creates, updates, deletes or gets an <code>agreement</code> resource or lists <code>agreements</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>agreements</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Transfer::Agreement</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.transfer.agreements" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "A textual description for the agreement."
  },
  {
    "name": "server_id",
    "type": "string",
    "description": "A unique identifier for the server."
  },
  {
    "name": "local_profile_id",
    "type": "string",
    "description": "A unique identifier for the local profile."
  },
  {
    "name": "partner_profile_id",
    "type": "string",
    "description": "A unique identifier for the partner profile."
  },
  {
    "name": "base_directory",
    "type": "string",
    "description": "Specifies the base directory for the agreement."
  },
  {
    "name": "access_role",
    "type": "string",
    "description": "Specifies the access role for the agreement."
  },
  {
    "name": "status",
    "type": "string",
    "description": "Specifies the status of the agreement."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Key-value pairs that can be used to group and search for agreements. Tags are metadata attached to agreements for any purpose.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The name assigned to the tag that you create."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Contains one or more values that you assigned to the key name you create."
      }
    ]
  },
  {
    "name": "agreement_id",
    "type": "string",
    "description": "A unique identifier for the agreement."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Specifies the unique Amazon Resource Name (ARN) for the agreement."
  },
  {
    "name": "preserve_filename",
    "type": "string",
    "description": "Specifies whether to preserve the filename received for this agreement."
  },
  {
    "name": "enforce_message_signing",
    "type": "string",
    "description": "Specifies whether to enforce an AS2 message is signed for this agreement."
  },
  {
    "name": "custom_directories",
    "type": "object",
    "description": "Specifies a separate directory for each type of file to store for an AS2 message.",
    "children": [
      {
        "name": "failed_files_directory",
        "type": "string",
        "description": "Specifies a location to store the failed files for an AS2 message."
      },
      {
        "name": "mdn_files_directory",
        "type": "string",
        "description": "Specifies a location to store the MDN file for an AS2 message."
      },
      {
        "name": "payload_files_directory",
        "type": "string",
        "description": "Specifies a location to store the payload file for an AS2 message."
      },
      {
        "name": "status_files_directory",
        "type": "string",
        "description": "Specifies a location to store the status file for an AS2 message."
      },
      {
        "name": "temporary_files_directory",
        "type": "string",
        "description": "Specifies a location to store the temporary processing file for an AS2 message."
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
    "name": "server_id",
    "type": "string",
    "description": "A unique identifier for the server."
  },
  {
    "name": "agreement_id",
    "type": "string",
    "description": "A unique identifier for the agreement."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html"><code>AWS::Transfer::Agreement</code></a>.

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
    <td><code>agreements</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ServerId, LocalProfileId, PartnerProfileId, AccessRole, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>agreements</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>agreements</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>agreements_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>agreements</code></td>
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

Gets all properties from an individual <code>agreement</code>.
```sql
SELECT
region,
description,
server_id,
local_profile_id,
partner_profile_id,
base_directory,
access_role,
status,
tags,
agreement_id,
arn,
preserve_filename,
enforce_message_signing,
custom_directories
FROM awscc.transfer.agreements
WHERE region = 'us-east-1' AND Identifier = '<AgreementId>|<ServerId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>agreements</code> in a region.
```sql
SELECT
region,
agreement_id,
server_id
FROM awscc.transfer.agreements_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>agreement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.transfer.agreements (
 ServerId,
 LocalProfileId,
 PartnerProfileId,
 AccessRole,
 region
)
SELECT 
'{{ ServerId }}',
 '{{ LocalProfileId }}',
 '{{ PartnerProfileId }}',
 '{{ AccessRole }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.transfer.agreements (
 Description,
 ServerId,
 LocalProfileId,
 PartnerProfileId,
 BaseDirectory,
 AccessRole,
 Status,
 Tags,
 PreserveFilename,
 EnforceMessageSigning,
 CustomDirectories,
 region
)
SELECT 
 '{{ Description }}',
 '{{ ServerId }}',
 '{{ LocalProfileId }}',
 '{{ PartnerProfileId }}',
 '{{ BaseDirectory }}',
 '{{ AccessRole }}',
 '{{ Status }}',
 '{{ Tags }}',
 '{{ PreserveFilename }}',
 '{{ EnforceMessageSigning }}',
 '{{ CustomDirectories }}',
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
  - name: agreement
    props:
      - name: Description
        value: '{{ Description }}'
      - name: ServerId
        value: '{{ ServerId }}'
      - name: LocalProfileId
        value: '{{ LocalProfileId }}'
      - name: PartnerProfileId
        value: '{{ PartnerProfileId }}'
      - name: BaseDirectory
        value: '{{ BaseDirectory }}'
      - name: AccessRole
        value: '{{ AccessRole }}'
      - name: Status
        value: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: PreserveFilename
        value: '{{ PreserveFilename }}'
      - name: EnforceMessageSigning
        value: '{{ EnforceMessageSigning }}'
      - name: CustomDirectories
        value:
          FailedFilesDirectory: '{{ FailedFilesDirectory }}'
          MdnFilesDirectory: '{{ MdnFilesDirectory }}'
          PayloadFilesDirectory: '{{ PayloadFilesDirectory }}'
          StatusFilesDirectory: '{{ StatusFilesDirectory }}'
          TemporaryFilesDirectory: '{{ TemporaryFilesDirectory }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>agreement</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.transfer.agreements
SET PatchDocument = string('{{ {
    "Description": description,
    "LocalProfileId": local_profile_id,
    "PartnerProfileId": partner_profile_id,
    "BaseDirectory": base_directory,
    "AccessRole": access_role,
    "Status": status,
    "Tags": tags,
    "PreserveFilename": preserve_filename,
    "EnforceMessageSigning": enforce_message_signing,
    "CustomDirectories": custom_directories
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AgreementId>|<ServerId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.transfer.agreements
WHERE Identifier = '<AgreementId|ServerId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>agreements</code> resource, the following permissions are required:

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
transfer:CreateAgreement,
transfer:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
transfer:DescribeAgreement
```

</TabItem>
<TabItem value="update">

```json
transfer:UpdateAgreement,
transfer:UnTagResource,
transfer:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
transfer:DeleteAgreement
```

</TabItem>
<TabItem value="list">

```json
transfer:ListAgreements
```

</TabItem>
</Tabs>