---
title: source_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - source_locations
  - mediatailor
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>source_location</code> resource or lists <code>source_locations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>source_locations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::MediaTailor::SourceLocation Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediatailor.source_locations" /></td></tr>
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
    "name": "access_configuration",
    "type": "object",
    "description": "<p>Access configuration parameters.</p>",
    "children": [
      {
        "name": "access_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "secrets_manager_access_token_configuration",
        "type": "object",
        "description": "<p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href=\"https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html\">Working with AWS Secrets Manager access token authentication</a>.</p>",
        "children": [
          {
            "name": "header_name",
            "type": "string",
            "description": "<p>The name of the HTTP header used to supply the access token in requests to the source location.</p>"
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": "<p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>"
          },
          {
            "name": "secret_string_key",
            "type": "string",
            "description": "<p>The AWS Secrets Manager <a href=\"https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html\">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "<p>The ARN of the source location.</p>"
  },
  {
    "name": "default_segment_delivery_configuration",
    "type": "object",
    "description": "<p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>",
    "children": [
      {
        "name": "base_url",
        "type": "string",
        "description": "<p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>"
      }
    ]
  },
  {
    "name": "http_configuration",
    "type": "object",
    "description": "<p>The HTTP configuration for the source location.</p>",
    "children": [
      {
        "name": "base_url",
        "type": "string",
        "description": "<p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>"
      }
    ]
  },
  {
    "name": "segment_delivery_configurations",
    "type": "array",
    "description": "<p>A list of the segment delivery configurations associated with this resource.</p>",
    "children": [
      {
        "name": "base_url",
        "type": "string",
        "description": "<p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>"
      },
      {
        "name": "name",
        "type": "string",
        "description": "<p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>"
      }
    ]
  },
  {
    "name": "source_location_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags to assign to the source location.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "source_location_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html"><code>AWS::MediaTailor::SourceLocation</code></a>.

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
    <td><code>source_locations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="HttpConfiguration, SourceLocationName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>source_locations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>source_locations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>source_locations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>source_locations</code></td>
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

Gets all properties from an individual <code>source_location</code>.
```sql
SELECT
  region,
  access_configuration,
  arn,
  default_segment_delivery_configuration,
  http_configuration,
  segment_delivery_configurations,
  source_location_name,
  tags
FROM awscc.mediatailor.source_locations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ source_location_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>source_locations</code> in a region.
```sql
SELECT
  region,
  source_location_name
FROM awscc.mediatailor.source_locations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>source_location</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediatailor.source_locations (
  HttpConfiguration,
  SourceLocationName,
  region
)
SELECT
  '{{ http_configuration }}',
  '{{ source_location_name }}',
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
INSERT INTO awscc.mediatailor.source_locations (
  AccessConfiguration,
  DefaultSegmentDeliveryConfiguration,
  HttpConfiguration,
  SegmentDeliveryConfigurations,
  SourceLocationName,
  Tags,
  region
)
SELECT
  '{{ access_configuration }}',
  '{{ default_segment_delivery_configuration }}',
  '{{ http_configuration }}',
  '{{ segment_delivery_configurations }}',
  '{{ source_location_name }}',
  '{{ tags }}',
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

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: source_location
    props:
      - name: access_configuration
        value:
          access_type: '{{ access_type }}'
          secrets_manager_access_token_configuration:
            header_name: '{{ header_name }}'
            secret_arn: '{{ secret_arn }}'
            secret_string_key: '{{ secret_string_key }}'
      - name: default_segment_delivery_configuration
        value:
          base_url: '{{ base_url }}'
      - name: http_configuration
        value:
          base_url: '{{ base_url }}'
      - name: segment_delivery_configurations
        value:
          - base_url: '{{ base_url }}'
            name: '{{ name }}'
      - name: source_location_name
        value: '{{ source_location_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>source_location</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.mediatailor.source_locations
SET PatchDocument = string('{{ {
    "AccessConfiguration": access_configuration,
    "DefaultSegmentDeliveryConfiguration": default_segment_delivery_configuration,
    "HttpConfiguration": http_configuration,
    "SegmentDeliveryConfigurations": segment_delivery_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ source_location_name }}'
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
DELETE FROM awscc.mediatailor.source_locations
WHERE
  Identifier = '{{ source_location_name }}' AND
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

To operate on the <code>source_locations</code> resource, the following permissions are required:

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
mediatailor:CreateSourceLocation,
mediatailor:DescribeSourceLocation,
mediatailor:TagResource,
secretsmanager:DescribeSecret,
secretsmanager:GetSecretValue,
kms:CreateGrant
```

</TabItem>
<TabItem value="read">

```json
mediatailor:DescribeSourceLocation
```

</TabItem>
<TabItem value="update">

```json
mediatailor:DescribeSourceLocation,
mediatailor:TagResource,
mediatailor:UntagResource,
mediatailor:UpdateSourceLocation,
secretsmanager:DescribeSecret,
secretsmanager:GetSecretValue,
kms:CreateGrant
```

</TabItem>
<TabItem value="delete">

```json
mediatailor:DeleteSourceLocation,
mediatailor:DescribeSourceLocation
```

</TabItem>
<TabItem value="list">

```json
mediatailor:ListSourceLocations
```

</TabItem>
</Tabs>