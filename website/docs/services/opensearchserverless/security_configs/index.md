---
title: security_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - security_configs
  - opensearchserverless
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

Creates, updates, deletes or gets a <code>security_config</code> resource or lists <code>security_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>security_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Amazon OpenSearchServerless security config resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.opensearchserverless.security_configs" /></td></tr>
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
    "description": "Security config description"
  },
  {
    "name": "id",
    "type": "string",
    "description": "The identifier of the security config"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The friendly name of the security config"
  },
  {
    "name": "saml_options",
    "type": "object",
    "description": "Describes saml options in form of key value map",
    "children": [
      {
        "name": "metadata",
        "type": "string",
        "description": "The XML saml provider metadata document that you want to use"
      },
      {
        "name": "user_attribute",
        "type": "string",
        "description": "Custom attribute for this saml integration"
      },
      {
        "name": "group_attribute",
        "type": "string",
        "description": "Group attribute for this saml integration"
      },
      {
        "name": "open_search_serverless_entity_id",
        "type": "string",
        "description": "Custom entity id attribute to override default entity id for this saml integration"
      },
      {
        "name": "session_timeout",
        "type": "integer",
        "description": "Defines the session timeout in minutes"
      }
    ]
  },
  {
    "name": "iam_identity_center_options",
    "type": "object",
    "description": "Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map",
    "children": [
      {
        "name": "instance_arn",
        "type": "string",
        "description": "The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless"
      },
      {
        "name": "application_arn",
        "type": "string",
        "description": "The ARN of the IAM Identity Center application used to integrate with OpenSearch Serverless"
      },
      {
        "name": "application_name",
        "type": "string",
        "description": "The name of the IAM Identity Center application used to integrate with OpenSearch Serverless"
      },
      {
        "name": "application_description",
        "type": "string",
        "description": "The description of the IAM Identity Center application used to integrate with OpenSearch Serverless"
      },
      {
        "name": "user_attribute",
        "type": "string",
        "description": "User attribute for this IAM Identity Center integration"
      },
      {
        "name": "group_attribute",
        "type": "string",
        "description": "Group attribute for this IAM Identity Center integration"
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": "Config type for security config"
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
    "description": "The identifier of the security config"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html"><code>AWS::OpenSearchServerless::SecurityConfig</code></a>.

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
    <td><code>security_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>security_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>security_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>security_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>security_configs</code></td>
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

Gets all properties from an individual <code>security_config</code>.
```sql
SELECT
region,
description,
id,
name,
saml_options,
iam_identity_center_options,
type
FROM awscc.opensearchserverless.security_configs
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>security_configs</code> in a region.
```sql
SELECT
region,
id
FROM awscc.opensearchserverless.security_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>security_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.opensearchserverless.security_configs (
 Description,
 Name,
 SamlOptions,
 IamIdentityCenterOptions,
 Type,
 region
)
SELECT
'{{ description }}',
 '{{ name }}',
 '{{ saml_options }}',
 '{{ iam_identity_center_options }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.opensearchserverless.security_configs (
 Description,
 Name,
 SamlOptions,
 IamIdentityCenterOptions,
 Type,
 region
)
SELECT
 '{{ description }}',
 '{{ name }}',
 '{{ saml_options }}',
 '{{ iam_identity_center_options }}',
 '{{ type }}',
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
  - name: security_config
    props:
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: saml_options
        value:
          metadata: '{{ metadata }}'
          user_attribute: '{{ user_attribute }}'
          group_attribute: '{{ group_attribute }}'
          open_search_serverless_entity_id: '{{ open_search_serverless_entity_id }}'
          session_timeout: '{{ session_timeout }}'
      - name: iam_identity_center_options
        value:
          instance_arn: '{{ instance_arn }}'
          application_arn: '{{ application_arn }}'
          application_name: '{{ application_name }}'
          application_description: '{{ application_description }}'
          user_attribute: '{{ user_attribute }}'
          group_attribute: '{{ group_attribute }}'
      - name: type
        value: '{{ type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>security_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.opensearchserverless.security_configs
SET PatchDocument = string('{{ {
    "Description": description,
    "SamlOptions": saml_options
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchserverless.security_configs
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_configs</code> resource, the following permissions are required:

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
aoss:CreateSecurityConfig,
sso:CreateApplication,
sso:ListApplications,
sso:DeleteApplication,
sso:PutApplicationAssignmentConfiguration,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant
```

</TabItem>
<TabItem value="read">

```json
aoss:GetSecurityConfig
```

</TabItem>
<TabItem value="update">

```json
aoss:GetSecurityConfig,
aoss:UpdateSecurityConfig
```

</TabItem>
<TabItem value="delete">

```json
aoss:DeleteSecurityConfig,
sso:ListApplicationAssignments,
sso:DeleteApplicationAssignment,
sso:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
aoss:ListSecurityConfigs
```

</TabItem>
</Tabs>