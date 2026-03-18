---
title: tls_inspection_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - tls_inspection_configurations
  - networkfirewall
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

Creates, updates, deletes or gets a <code>tls_inspection_configuration</code> resource or lists <code>tls_inspection_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tls_inspection_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.tls_inspection_configurations" /></td></tr>
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
    "name": "tls_inspection_configuration_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "tls_inspection_configuration_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "tls_inspection_configuration",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration",
    "children": [
      {
        "name": "tls_inspection_configuration_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "tls_inspection_configuration_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
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
      }
    ]
  },
  {
    "name": "tls_inspection_configuration_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "tls_inspection_configuration_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "tls_inspection_configuration",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::TLSInspectionConfiguration",
    "children": [
      {
        "name": "tls_inspection_configuration_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "tls_inspection_configuration_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html"><code>AWS::NetworkFirewall::TLSInspectionConfiguration</code></a>.

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
    <td><code>tls_inspection_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TLSInspectionConfigurationName, TLSInspectionConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>tls_inspection_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>tls_inspection_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>tls_inspection_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>tls_inspection_configurations</code></td>
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

Gets all properties from an individual <code>tls_inspection_configuration</code>.
```sql
SELECT
  region,
  tls_inspection_configuration_name,
  tls_inspection_configuration_arn,
  tls_inspection_configuration,
  tls_inspection_configuration_id,
  description,
  tags
FROM awscc.networkfirewall.tls_inspection_configurations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ tls_inspection_configuration_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>tls_inspection_configurations</code> in a region.
```sql
SELECT
  region,
  tls_inspection_configuration_arn
FROM awscc.networkfirewall.tls_inspection_configurations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>tls_inspection_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkfirewall.tls_inspection_configurations (
  TLSInspectionConfigurationName,
  TLSInspectionConfiguration,
  region
)
SELECT
  '{{ tls_inspection_configuration_name }}',
  '{{ tls_inspection_configuration }}',
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
INSERT INTO awscc.networkfirewall.tls_inspection_configurations (
  TLSInspectionConfigurationName,
  TLSInspectionConfiguration,
  Description,
  Tags,
  region
)
SELECT
  '{{ tls_inspection_configuration_name }}',
  '{{ tls_inspection_configuration }}',
  '{{ description }}',
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
  - name: tls_inspection_configuration
    props:
      - name: tls_inspection_configuration_name
        value: '{{ tls_inspection_configuration_name }}'
      - name: tls_inspection_configuration
        value:
          tls_inspection_configuration_name: '{{ tls_inspection_configuration_name }}'
          tls_inspection_configuration: null
          description: '{{ description }}'
          tags:
            - key: '{{ key }}'
              value: '{{ value }}'
      - name: description
        value: '{{ description }}'
      - name: tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>tls_inspection_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkfirewall.tls_inspection_configurations
SET PatchDocument = string('{{ {
    "TLSInspectionConfiguration": tls_inspection_configuration,
    "Description": description,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ tls_inspection_configuration_arn }}'
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
DELETE FROM awscc.networkfirewall.tls_inspection_configurations
WHERE
  Identifier = '{{ tls_inspection_configuration_arn }}' AND
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

To operate on the <code>tls_inspection_configurations</code> resource, the following permissions are required:

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
iam:CreateServiceLinkedRole,
network-firewall:CreateTLSInspectionConfiguration,
network-firewall:DescribeTLSInspectionConfiguration,
network-firewall:TagResource
```

</TabItem>
<TabItem value="read">

```json
network-firewall:DescribeTLSInspectionConfiguration,
network-firewall:ListTagsForResources
```

</TabItem>
<TabItem value="update">

```json
network-firewall:UpdateTLSInspectionConfiguration,
network-firewall:DescribeTLSInspectionConfiguration,
network-firewall:TagResource,
network-firewall:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
network-firewall:DeleteTLSInspectionConfiguration,
network-firewall:DescribeTLSInspectionConfiguration,
network-firewall:UntagResource
```

</TabItem>
<TabItem value="list">

```json
network-firewall:ListTLSInspectionConfigurations
```

</TabItem>
</Tabs>