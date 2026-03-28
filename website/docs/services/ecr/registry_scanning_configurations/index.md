---
title: registry_scanning_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - registry_scanning_configurations
  - ecr
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

Creates, updates, deletes or gets a <code>registry_scanning_configuration</code> resource or lists <code>registry_scanning_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>registry_scanning_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The scanning configuration for a private registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.registry_scanning_configurations" /></td></tr>
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
    "name": "rules",
    "type": "array",
    "description": "The scanning rules associated with the registry.",
    "children": [
      {
        "name": "repository_filters",
        "type": "array",
        "description": "The details of a scanning repository filter. For more information on how to use filters, see <a href=\"https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters\">Using filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>.",
        "children": [
          {
            "name": "filter",
            "type": "string",
            "description": "The repository filter details. When the <code>PREFIX_MATCH</code> filter type is specified, this value is required and should be the repository name prefix to configure replication for."
          },
          {
            "name": "filter_type",
            "type": "string",
            "description": "The repository filter type. The only supported value is <code>PREFIX_MATCH</code>, which is a repository name prefix specified with the <code>filter</code> parameter."
          }
        ]
      },
      {
        "name": "scan_frequency",
        "type": "string",
        "description": "The frequency that scans are performed at for a private registry. When the <code>ENHANCED</code> scan type is specified, the supported scan frequencies are <code>CONTINUOUS_SCAN</code> and <code>SCAN_ON_PUSH</code>. When the <code>BASIC</code> scan type is specified, the <code>SCAN_ON_PUSH</code> scan frequency is supported. If scan on push is not specified, then the <code>MANUAL</code> scan frequency is set by default."
      }
    ]
  },
  {
    "name": "scan_type",
    "type": "string",
    "description": "The type of scanning configured for the registry."
  },
  {
    "name": "registry_id",
    "type": "string",
    "description": "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
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
    "name": "registry_id",
    "type": "string",
    "description": "The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html"><code>AWS::ECR::RegistryScanningConfiguration</code></a>.

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
    <td><code>registry_scanning_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Rules, ScanType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>registry_scanning_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>registry_scanning_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>registry_scanning_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>registry_scanning_configurations</code></td>
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

Gets all properties from an individual <code>registry_scanning_configuration</code>.
```sql
SELECT
  region,
  rules,
  scan_type,
  registry_id
FROM awscc.ecr.registry_scanning_configurations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ registry_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>registry_scanning_configurations</code> in a region.
```sql
SELECT
  region,
  registry_id
FROM awscc.ecr.registry_scanning_configurations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>registry_scanning_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.registry_scanning_configurations (
  Rules,
  ScanType,
  region
)
SELECT
  '{{ rules }}',
  '{{ scan_type }}',
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
INSERT INTO awscc.ecr.registry_scanning_configurations (
  Rules,
  ScanType,
  region
)
SELECT
  '{{ rules }}',
  '{{ scan_type }}',
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
  - name: registry_scanning_configuration
    props:
      - name: rules
        value:
          - repository_filters:
              - filter: '{{ filter }}'
                filter_type: '{{ filter_type }}'
            scan_frequency: '{{ scan_frequency }}'
      - name: scan_type
        value: '{{ scan_type }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>registry_scanning_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ecr.registry_scanning_configurations
SET PatchDocument = string('{{ {
    "Rules": rules,
    "ScanType": scan_type
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ registry_id }}'
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
DELETE FROM awscc.ecr.registry_scanning_configurations
WHERE
  Identifier = '{{ registry_id }}' AND
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

To operate on the <code>registry_scanning_configurations</code> resource, the following permissions are required:

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
ecr:PutRegistryScanningConfiguration,
ecr:GetRegistryScanningConfiguration,
inspector2:Enable,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
ecr:GetRegistryScanningConfiguration
```

</TabItem>
<TabItem value="update">

```json
ecr:PutRegistryScanningConfiguration,
ecr:GetRegistryScanningConfiguration,
inspector2:Enable,
inspector2:Disable,
inspector2:ListAccountPermissions,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="delete">

```json
ecr:PutRegistryScanningConfiguration,
ecr:GetRegistryScanningConfiguration,
inspector2:ListAccountPermissions,
inspector2:Disable
```

</TabItem>
<TabItem value="list">

```json
ecr:GetRegistryScanningConfiguration
```

</TabItem>
</Tabs>