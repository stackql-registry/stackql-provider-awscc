---
title: service_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - service_profiles
  - iotwireless
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

Creates, updates, deletes or gets a <code>service_profile</code> resource or lists <code>service_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.service_profiles" /></td></tr>
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
    "description": "Name of service profile"
  },
  {
    "name": "lo_ra_wan",
    "type": "object",
    "description": "LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation",
    "children": [
      {
        "name": "ul_rate",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ul_bucket_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ul_rate_policy",
        "type": "string",
        "description": ""
      },
      {
        "name": "dl_rate",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dl_bucket_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dl_rate_policy",
        "type": "string",
        "description": ""
      },
      {
        "name": "add_gw_metadata",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dev_status_req_freq",
        "type": "integer",
        "description": ""
      },
      {
        "name": "report_dev_status_battery",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "report_dev_status_margin",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dr_min",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dr_max",
        "type": "integer",
        "description": ""
      },
      {
        "name": "channel_mask",
        "type": "string",
        "description": ""
      },
      {
        "name": "pr_allowed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hr_allowed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ra_allowed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "nwk_geo_loc",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "target_per",
        "type": "integer",
        "description": ""
      },
      {
        "name": "min_gw_diversity",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the service profile.",
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
    "name": "arn",
    "type": "string",
    "description": "Service profile Arn. Returned after successful create."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Service profile Id. Returned after successful create."
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
    "description": "Service profile Id. Returned after successful create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html"><code>AWS::IoTWireless::ServiceProfile</code></a>.

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
    <td><code>service_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>service_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>service_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>service_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>service_profiles</code></td>
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

Gets all properties from an individual <code>service_profile</code>.
```sql
SELECT
  region,
  name,
  lo_ra_wan,
  tags,
  arn,
  id
FROM awscc.iotwireless.service_profiles
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>service_profiles</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.iotwireless.service_profiles_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.service_profiles (
  ,
  region
)
SELECT
  '{{  }}',
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
INSERT INTO awscc.iotwireless.service_profiles (
  Name,
  LoRaWAN,
  Tags,
  region
)
SELECT
  '{{ name }}',
  '{{ lo_ra_wan }}',
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
  - name: service_profile
    props:
      - name: name
        value: '{{ name }}'
      - name: lo_ra_wan
        value:
          ul_rate: '{{ ul_rate }}'
          ul_bucket_size: '{{ ul_bucket_size }}'
          ul_rate_policy: '{{ ul_rate_policy }}'
          dl_rate: '{{ dl_rate }}'
          dl_bucket_size: '{{ dl_bucket_size }}'
          dl_rate_policy: '{{ dl_rate_policy }}'
          add_gw_metadata: '{{ add_gw_metadata }}'
          dev_status_req_freq: '{{ dev_status_req_freq }}'
          report_dev_status_battery: '{{ report_dev_status_battery }}'
          report_dev_status_margin: '{{ report_dev_status_margin }}'
          dr_min: '{{ dr_min }}'
          dr_max: '{{ dr_max }}'
          channel_mask: '{{ channel_mask }}'
          pr_allowed: '{{ pr_allowed }}'
          hr_allowed: '{{ hr_allowed }}'
          ra_allowed: '{{ ra_allowed }}'
          nwk_geo_loc: '{{ nwk_geo_loc }}'
          target_per: '{{ target_per }}'
          min_gw_diversity: '{{ min_gw_diversity }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>service_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iotwireless.service_profiles
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
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
DELETE FROM awscc.iotwireless.service_profiles
WHERE
  Identifier = '{{ id }}' AND
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

To operate on the <code>service_profiles</code> resource, the following permissions are required:

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
iotwireless:CreateServiceProfile,
iotwireless:TagResource
```

</TabItem>
<TabItem value="update">

```json
iotwireless:GetServiceProfile,
iotwireless:TagResource,
iotwireless:UntagResource
```

</TabItem>
<TabItem value="read">

```json
iotwireless:GetServiceProfile,
iotwireless:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
iotwireless:DeleteServiceProfile
```

</TabItem>
<TabItem value="list">

```json
iotwireless:ListServiceProfiles,
iotwireless:ListTagsForResource
```

</TabItem>
</Tabs>