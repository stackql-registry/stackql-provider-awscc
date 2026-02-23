---
title: directory_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_configs
  - appstream
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

Creates, updates, deletes or gets a <code>directory_config</code> resource or lists <code>directory_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>directory_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppStream::DirectoryConfig</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appstream.directory_configs" /></td></tr>
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
    "name": "organizational_unit_distinguished_names",
    "type": "array",
    "description": ""
  },
  {
    "name": "service_account_credentials",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "account_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "account_password",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "directory_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "certificate_based_auth_properties",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "certificate_authority_arn",
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
    "name": "directory_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html"><code>AWS::AppStream::DirectoryConfig</code></a>.

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
    <td><code>directory_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DirectoryName, OrganizationalUnitDistinguishedNames, ServiceAccountCredentials, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>directory_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>directory_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>directory_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>directory_configs</code></td>
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

Gets all properties from an individual <code>directory_config</code>.
```sql
SELECT
region,
organizational_unit_distinguished_names,
service_account_credentials,
directory_name,
certificate_based_auth_properties
FROM awscc.appstream.directory_configs
WHERE region = 'us-east-1' AND Identifier = '{{ directory_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>directory_configs</code> in a region.
```sql
SELECT
region,
directory_name
FROM awscc.appstream.directory_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>directory_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appstream.directory_configs (
 OrganizationalUnitDistinguishedNames,
 ServiceAccountCredentials,
 DirectoryName,
 region
)
SELECT
'{{ organizational_unit_distinguished_names }}',
 '{{ service_account_credentials }}',
 '{{ directory_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appstream.directory_configs (
 OrganizationalUnitDistinguishedNames,
 ServiceAccountCredentials,
 DirectoryName,
 CertificateBasedAuthProperties,
 region
)
SELECT
 '{{ organizational_unit_distinguished_names }}',
 '{{ service_account_credentials }}',
 '{{ directory_name }}',
 '{{ certificate_based_auth_properties }}',
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
  - name: directory_config
    props:
      - name: organizational_unit_distinguished_names
        value:
          - '{{ organizational_unit_distinguished_names[0] }}'
      - name: service_account_credentials
        value:
          account_name: '{{ account_name }}'
          account_password: '{{ account_password }}'
      - name: directory_name
        value: '{{ directory_name }}'
      - name: certificate_based_auth_properties
        value:
          status: '{{ status }}'
          certificate_authority_arn: '{{ certificate_authority_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>directory_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appstream.directory_configs
SET PatchDocument = string('{{ {
    "OrganizationalUnitDistinguishedNames": organizational_unit_distinguished_names,
    "ServiceAccountCredentials": service_account_credentials,
    "CertificateBasedAuthProperties": certificate_based_auth_properties
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ directory_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appstream.directory_configs
WHERE Identifier = '{{ directory_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>directory_configs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
appstream:CreateDirectoryConfig,
appstream:DeleteDirectoryConfig,
appstream:DescribeDirectoryConfigs,
appstream:UpdateDirectoryConfig,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="update">

```json
appstream:CreateDirectoryConfig,
appstream:DeleteDirectoryConfig,
appstream:DescribeDirectoryConfigs,
appstream:UpdateDirectoryConfig,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="read">

```json
appstream:CreateDirectoryConfig,
appstream:DeleteDirectoryConfig,
appstream:DescribeDirectoryConfigs,
appstream:UpdateDirectoryConfig,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="delete">

```json
appstream:CreateDirectoryConfig,
appstream:DeleteDirectoryConfig,
appstream:DescribeDirectoryConfigs,
appstream:UpdateDirectoryConfig,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="list">

```json
appstream:CreateDirectoryConfig,
appstream:DeleteDirectoryConfig,
appstream:DescribeDirectoryConfigs,
appstream:UpdateDirectoryConfig,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
</Tabs>