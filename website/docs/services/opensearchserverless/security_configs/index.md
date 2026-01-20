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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html"><code>AWS::OpenSearchServerless::SecurityConfig</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

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
'{{ Description }}',
 '{{ Name }}',
 '{{ SamlOptions }}',
 '{{ IamIdentityCenterOptions }}',
 '{{ Type }}',
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
 '{{ Description }}',
 '{{ Name }}',
 '{{ SamlOptions }}',
 '{{ IamIdentityCenterOptions }}',
 '{{ Type }}',
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
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: SamlOptions
        value:
          Metadata: '{{ Metadata }}'
          UserAttribute: '{{ UserAttribute }}'
          GroupAttribute: '{{ GroupAttribute }}'
          OpenSearchServerlessEntityId: '{{ OpenSearchServerlessEntityId }}'
          SessionTimeout: '{{ SessionTimeout }}'
      - name: IamIdentityCenterOptions
        value:
          InstanceArn: '{{ InstanceArn }}'
          ApplicationArn: '{{ ApplicationArn }}'
          ApplicationName: '{{ ApplicationName }}'
          ApplicationDescription: '{{ ApplicationDescription }}'
          UserAttribute: '{{ UserAttribute }}'
          GroupAttribute: '{{ GroupAttribute }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchserverless.security_configs
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>security_configs</code> resource, the following permissions are required:

### Create
```json
aoss:CreateSecurityConfig,
sso:CreateApplication,
sso:ListApplications,
sso:DeleteApplication,
sso:PutApplicationAssignmentConfiguration,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant
```

### Read
```json
aoss:GetSecurityConfig
```

### Update
```json
aoss:GetSecurityConfig,
aoss:UpdateSecurityConfig
```

### Delete
```json
aoss:DeleteSecurityConfig,
sso:ListApplicationAssignments,
sso:DeleteApplicationAssignment,
sso:DeleteApplication
```

### List
```json
aoss:ListSecurityConfigs
```
