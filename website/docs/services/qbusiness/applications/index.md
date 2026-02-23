---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - qbusiness
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::Application Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.applications" /></td></tr>
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
    "name": "application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "attachments_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attachments_control_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "auto_subscription_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "auto_subscribe",
        "type": "string",
        "description": ""
      },
      {
        "name": "default_subscription_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "client_ids_for_oid_c",
    "type": "array",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "encryption_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "iam_identity_provider_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_center_application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_center_instance_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "personalization_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "personalization_control_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "q_apps_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "q_apps_control_mode",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "quick_sight_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "client_namespace",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
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
    "name": "updated_at",
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
    "name": "application_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html"><code>AWS::QBusiness::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
application_arn,
application_id,
attachments_configuration,
auto_subscription_configuration,
client_ids_for_oid_c,
created_at,
description,
display_name,
encryption_configuration,
iam_identity_provider_arn,
identity_center_application_arn,
identity_center_instance_arn,
identity_type,
personalization_configuration,
q_apps_configuration,
quick_sight_configuration,
role_arn,
status,
tags,
updated_at
FROM awscc.qbusiness.applications
WHERE region = 'us-east-1' AND Identifier = '{{ application_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_id
FROM awscc.qbusiness.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.applications (
 DisplayName,
 region
)
SELECT
'{{ display_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.applications (
 AttachmentsConfiguration,
 AutoSubscriptionConfiguration,
 ClientIdsForOIDC,
 Description,
 DisplayName,
 EncryptionConfiguration,
 IamIdentityProviderArn,
 IdentityCenterInstanceArn,
 IdentityType,
 PersonalizationConfiguration,
 QAppsConfiguration,
 QuickSightConfiguration,
 RoleArn,
 Tags,
 region
)
SELECT
 '{{ attachments_configuration }}',
 '{{ auto_subscription_configuration }}',
 '{{ client_ids_for_oid_c }}',
 '{{ description }}',
 '{{ display_name }}',
 '{{ encryption_configuration }}',
 '{{ iam_identity_provider_arn }}',
 '{{ identity_center_instance_arn }}',
 '{{ identity_type }}',
 '{{ personalization_configuration }}',
 '{{ q_apps_configuration }}',
 '{{ quick_sight_configuration }}',
 '{{ role_arn }}',
 '{{ tags }}',
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
  - name: application
    props:
      - name: attachments_configuration
        value:
          attachments_control_mode: '{{ attachments_control_mode }}'
      - name: auto_subscription_configuration
        value:
          auto_subscribe: '{{ auto_subscribe }}'
          default_subscription_type: '{{ default_subscription_type }}'
      - name: client_ids_for_oid_c
        value:
          - '{{ client_ids_for_oid_c[0] }}'
      - name: description
        value: '{{ description }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: encryption_configuration
        value:
          kms_key_id: '{{ kms_key_id }}'
      - name: iam_identity_provider_arn
        value: '{{ iam_identity_provider_arn }}'
      - name: identity_center_instance_arn
        value: '{{ identity_center_instance_arn }}'
      - name: identity_type
        value: '{{ identity_type }}'
      - name: personalization_configuration
        value:
          personalization_control_mode: '{{ personalization_control_mode }}'
      - name: q_apps_configuration
        value:
          q_apps_control_mode: '{{ q_apps_control_mode }}'
      - name: quick_sight_configuration
        value:
          client_namespace: '{{ client_namespace }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.qbusiness.applications
SET PatchDocument = string('{{ {
    "AttachmentsConfiguration": attachments_configuration,
    "AutoSubscriptionConfiguration": auto_subscription_configuration,
    "Description": description,
    "DisplayName": display_name,
    "IdentityCenterInstanceArn": identity_center_instance_arn,
    "PersonalizationConfiguration": personalization_configuration,
    "QAppsConfiguration": q_apps_configuration,
    "RoleArn": role_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.applications
WHERE Identifier = '{{ application_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
iam:GetSAMLProvider,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
qbusiness:CreateApplication,
qbusiness:GetApplication,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UpdateApplication,
quicksight:DescribeAccountSubscription,
quicksight:ListNamespaces,
sso:CreateApplication,
sso:DeleteApplication,
sso:DescribeInstance,
sso:PutApplicationAccessScope,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetApplication,
qbusiness:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
qbusiness:GetApplication,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateApplication,
sso:CreateApplication,
sso:DeleteApplication,
sso:DescribeInstance,
sso:PutApplicationAccessScope,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant
```

</TabItem>
<TabItem value="delete">

```json
kms:RetireGrant,
qbusiness:DeleteApplication,
qbusiness:GetApplication,
sso:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
qbusiness:ListApplications
```

</TabItem>
</Tabs>