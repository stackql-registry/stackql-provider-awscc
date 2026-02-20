---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - datazone
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A domain is an organizing entity for connecting together assets, users, and their projects</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datazone.domains" /></td></tr>
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
    "name": "root_domain_unit_id",
    "type": "string",
    "description": "The ID of the root domain in Amazon Datazone."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the Amazon DataZone domain."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp of when the Amazon DataZone domain was last updated."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the Amazon DataZone domain."
  },
  {
    "name": "domain_execution_role",
    "type": "string",
    "description": "The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the AWS account that houses the Amazon DataZone domain."
  },
  {
    "name": "service_role",
    "type": "string",
    "description": "The service role of the domain that is created."
  },
  {
    "name": "domain_version",
    "type": "string",
    "description": "The version of the domain."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The id of the Amazon DataZone domain."
  },
  {
    "name": "kms_key_identifier",
    "type": "string",
    "description": "The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The timestamp of when the Amazon DataZone domain was last updated."
  },
  {
    "name": "managed_account_id",
    "type": "string",
    "description": "The identifier of the AWS account that manages the domain."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the Amazon DataZone domain."
  },
  {
    "name": "portal_url",
    "type": "string",
    "description": "The URL of the data portal for this Amazon DataZone domain."
  },
  {
    "name": "single_sign_on",
    "type": "object",
    "description": "The single-sign on configuration of the Amazon DataZone domain.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of single sign-on in Amazon DataZone."
      },
      {
        "name": "user_assignment",
        "type": "string",
        "description": "The single sign-on user assignment in Amazon DataZone."
      },
      {
        "name": "idc_instance_arn",
        "type": "string",
        "description": "The ARN of the AWS Identity Center instance."
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the Amazon DataZone domain."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags specified for the Amazon DataZone domain.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
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
    "name": "id",
    "type": "string",
    "description": "The id of the Amazon DataZone domain."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html"><code>AWS::DataZone::Domain</code></a>.

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
    <td><code>domains</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainExecutionRole, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domains</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>domains</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domains_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domains</code></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
root_domain_unit_id,
arn,
created_at,
description,
domain_execution_role,
service_role,
domain_version,
id,
kms_key_identifier,
last_updated_at,
managed_account_id,
name,
portal_url,
single_sign_on,
status,
tags
FROM awscc.datazone.domains
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>domains</code> in a region.
```sql
SELECT
region,
id
FROM awscc.datazone.domains_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datazone.domains (
 DomainExecutionRole,
 Name,
 region
)
SELECT 
'{{ DomainExecutionRole }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datazone.domains (
 Description,
 DomainExecutionRole,
 ServiceRole,
 DomainVersion,
 KmsKeyIdentifier,
 Name,
 SingleSignOn,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ DomainExecutionRole }}',
 '{{ ServiceRole }}',
 '{{ DomainVersion }}',
 '{{ KmsKeyIdentifier }}',
 '{{ Name }}',
 '{{ SingleSignOn }}',
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
  - name: domain
    props:
      - name: Description
        value: '{{ Description }}'
      - name: DomainExecutionRole
        value: '{{ DomainExecutionRole }}'
      - name: ServiceRole
        value: '{{ ServiceRole }}'
      - name: DomainVersion
        value: '{{ DomainVersion }}'
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: SingleSignOn
        value:
          Type: '{{ Type }}'
          UserAssignment: '{{ UserAssignment }}'
          IdcInstanceArn: '{{ IdcInstanceArn }}'
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
UPDATE awscc.datazone.domains
SET data__PatchDocument = string('{{ {
    "Description": description,
    "DomainExecutionRole": domain_execution_role,
    "ServiceRole": service_role,
    "Name": name,
    "SingleSignOn": single_sign_on,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.datazone.domains
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
datazone:CreateDomain,
datazone:UpdateDomain,
datazone:GetDomain,
datazone:TagResource,
sso:CreateManagedApplicationInstance,
sso:DeleteManagedApplicationInstance,
sso:PutApplicationAssignmentConfiguration,
sso:ListInstances,
sso:PutApplicationAccessScope,
sso:PutApplicationGrant,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationAccessScope,
sso:CreateApplication,
sso:DeleteApplication,
sso:CreateApplicationAssignment,
sso:DeleteApplicationAssignment,
iam:PassRole
```

### Read
```json
datazone:GetDomain
```

### Update
```json
datazone:UpdateDomain,
datazone:GetDomain,
datazone:TagResource,
datazone:UntagResource,
sso:CreateManagedApplicationInstance,
sso:DeleteManagedApplicationInstance,
sso:PutApplicationAssignmentConfiguration,
sso:ListInstances,
sso:PutApplicationAccessScope,
iam:PassRole
```

### Delete
```json
datazone:DeleteDomain,
datazone:GetDomain,
sso:DeleteManagedApplicationInstance,
sso:PutApplicationAssignmentConfiguration,
sso:DeleteApplication,
sso:DeleteApplicationAssignment,
sso:ListInstances
```

### List
```json
datazone:ListDomains
```
