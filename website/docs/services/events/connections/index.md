---
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes or gets a <code>connection</code> resource or lists <code>connections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Events::Connection.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.events.connections" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the connection."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The arn of the connection resource."
  },
  {
    "name": "arn_for_policy",
    "type": "string",
    "description": "The arn of the connection resource to be used in IAM policies."
  },
  {
    "name": "secret_arn",
    "type": "string",
    "description": "The arn of the secrets manager secret created in the customer account."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the connection."
  },
  {
    "name": "authorization_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "auth_parameters",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "api_key_auth_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "api_key_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "api_key_value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "basic_auth_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "username",
            "type": "string",
            "description": ""
          },
          {
            "name": "password",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "oauth_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "client_parameters",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "client_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "client_secret",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "authorization_endpoint",
            "type": "string",
            "description": ""
          },
          {
            "name": "http_method",
            "type": "string",
            "description": ""
          },
          {
            "name": "oauth_http_parameters",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "header_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "query_string_parameters",
                "type": "array",
                "description": ""
              },
              {
                "name": "body_parameters",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "invocation_http_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "header_parameters",
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
              },
              {
                "name": "is_value_secret",
                "type": "boolean",
                "description": ""
              }
            ]
          },
          {
            "name": "query_string_parameters",
            "type": "array",
            "description": ""
          },
          {
            "name": "body_parameters",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "connectivity_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "resource_parameters",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resource_configuration_arn",
                "type": "string",
                "description": ""
              },
              {
                "name": "resource_association_arn",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "invocation_connectivity_parameters",
    "type": "object",
    "description": "The private resource the HTTP request will be sent to.",
    "children": [
      {
        "name": "resource_parameters",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "resource_configuration_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "resource_association_arn",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
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
    "name": "name",
    "type": "string",
    "description": "Name of the connection."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html"><code>AWS::Events::Connection</code></a>.

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
    <td><code>connections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connections</code></td>
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

Gets all properties from an individual <code>connection</code>.
```sql
SELECT
region,
name,
arn,
arn_for_policy,
secret_arn,
description,
authorization_type,
auth_parameters,
invocation_connectivity_parameters,
kms_key_identifier
FROM awscc.events.connections
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connections</code> in a region.
```sql
SELECT
region,
name
FROM awscc.events.connections_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.events.connections (
 Name,
 Description,
 AuthorizationType,
 AuthParameters,
 InvocationConnectivityParameters,
 KmsKeyIdentifier,
 region
)
SELECT 
'{{ Name }}',
 '{{ Description }}',
 '{{ AuthorizationType }}',
 '{{ AuthParameters }}',
 '{{ InvocationConnectivityParameters }}',
 '{{ KmsKeyIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.events.connections (
 Name,
 Description,
 AuthorizationType,
 AuthParameters,
 InvocationConnectivityParameters,
 KmsKeyIdentifier,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ AuthorizationType }}',
 '{{ AuthParameters }}',
 '{{ InvocationConnectivityParameters }}',
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
  - name: connection
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: AuthorizationType
        value: '{{ AuthorizationType }}'
      - name: AuthParameters
        value:
          ApiKeyAuthParameters:
            ApiKeyName: '{{ ApiKeyName }}'
            ApiKeyValue: '{{ ApiKeyValue }}'
          BasicAuthParameters:
            Username: '{{ Username }}'
            Password: '{{ Password }}'
          OAuthParameters:
            ClientParameters:
              ClientID: '{{ ClientID }}'
              ClientSecret: '{{ ClientSecret }}'
            AuthorizationEndpoint: '{{ AuthorizationEndpoint }}'
            HttpMethod: '{{ HttpMethod }}'
            OAuthHttpParameters:
              HeaderParameters:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
                  IsValueSecret: '{{ IsValueSecret }}'
              QueryStringParameters:
                - null
              BodyParameters:
                - null
          InvocationHttpParameters: null
          ConnectivityParameters:
            ResourceParameters:
              ResourceConfigurationArn: '{{ ResourceConfigurationArn }}'
              ResourceAssociationArn: '{{ ResourceAssociationArn }}'
      - name: InvocationConnectivityParameters
        value:
          ResourceParameters: null
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.events.connections
SET data__PatchDocument = string('{{ {
    "Description": description,
    "AuthorizationType": authorization_type,
    "KmsKeyIdentifier": kms_key_identifier
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.events.connections
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connections</code> resource, the following permissions are required:

### Create
```json
events:CreateConnection,
events:DescribeConnection,
secretsmanager:CreateSecret,
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue,
iam:CreateServiceLinkedRole,
kms:DescribeKey,
kms:GenerateDataKey
```

### Read
```json
events:DescribeConnection,
kms:Decrypt
```

### Update
```json
events:UpdateConnection,
events:DescribeConnection,
secretsmanager:CreateSecret,
secretsmanager:UpdateSecret,
secretsmanager:GetSecretValue,
secretsmanager:PutSecretValue,
kms:Decrypt,
kms:DescribeKey,
kms:Encrypt,
kms:GenerateDataKey
```

### Delete
```json
events:DeleteConnection,
events:DescribeConnection
```

### List
```json
events:ListConnections
```
