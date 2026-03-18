---
title: zonal_autoshift_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - zonal_autoshift_configurations
  - arczonalshift
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

Creates, updates, deletes or gets a <code>zonal_autoshift_configuration</code> resource or lists <code>zonal_autoshift_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>zonal_autoshift_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ARCZonalShift::ZonalAutoshiftConfiguration Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.arczonalshift.zonal_autoshift_configurations" /></td></tr>
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
    "name": "zonal_autoshift_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "practice_run_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "blocking_alarms",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": ""
          },
          {
            "name": "alarm_identifier",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "outcome_alarms",
        "type": "array",
        "description": ""
      },
      {
        "name": "blocked_dates",
        "type": "array",
        "description": ""
      },
      {
        "name": "blocked_windows",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "resource_identifier",
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
    "name": "resource_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html"><code>AWS::ARCZonalShift::ZonalAutoshiftConfiguration</code></a>.

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
    <td><code>zonal_autoshift_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>zonal_autoshift_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>zonal_autoshift_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>zonal_autoshift_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>zonal_autoshift_configurations</code></td>
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

Gets all properties from an individual <code>zonal_autoshift_configuration</code>.
```sql
SELECT
  region,
  zonal_autoshift_status,
  practice_run_configuration,
  resource_identifier
FROM awscc.arczonalshift.zonal_autoshift_configurations
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resource_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>zonal_autoshift_configurations</code> in a region.
```sql
SELECT
  region,
  resource_identifier
FROM awscc.arczonalshift.zonal_autoshift_configurations_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>zonal_autoshift_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.arczonalshift.zonal_autoshift_configurations (
  ZonalAutoshiftStatus,
  PracticeRunConfiguration,
  ResourceIdentifier,
  region
)
SELECT
  '{{ zonal_autoshift_status }}',
  '{{ practice_run_configuration }}',
  '{{ resource_identifier }}',
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
INSERT INTO awscc.arczonalshift.zonal_autoshift_configurations (
  ZonalAutoshiftStatus,
  PracticeRunConfiguration,
  ResourceIdentifier,
  region
)
SELECT
  '{{ zonal_autoshift_status }}',
  '{{ practice_run_configuration }}',
  '{{ resource_identifier }}',
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
  - name: zonal_autoshift_configuration
    props:
      - name: zonal_autoshift_status
        value: '{{ zonal_autoshift_status }}'
      - name: practice_run_configuration
        value:
          blocking_alarms:
            - type: '{{ type }}'
              alarm_identifier: '{{ alarm_identifier }}'
          outcome_alarms:
            - null
          blocked_dates:
            - '{{ blocked_dates[0] }}'
          blocked_windows:
            - '{{ blocked_windows[0] }}'
      - name: resource_identifier
        value: '{{ resource_identifier }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>zonal_autoshift_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.arczonalshift.zonal_autoshift_configurations
SET PatchDocument = string('{{ {
    "ZonalAutoshiftStatus": zonal_autoshift_status,
    "PracticeRunConfiguration": practice_run_configuration
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ resource_identifier }}'
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
DELETE FROM awscc.arczonalshift.zonal_autoshift_configurations
WHERE
  Identifier = '{{ resource_identifier }}' AND
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

To operate on the <code>zonal_autoshift_configurations</code> resource, the following permissions are required:

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
arc-zonal-shift:CreatePracticeRunConfiguration,
arc-zonal-shift:GetManagedResource,
arc-zonal-shift:UpdateZonalAutoshiftConfiguration,
cloudwatch:DescribeAlarms,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
arc-zonal-shift:GetManagedResource
```

</TabItem>
<TabItem value="update">

```json
arc-zonal-shift:GetManagedResource,
arc-zonal-shift:UpdatePracticeRunConfiguration,
arc-zonal-shift:UpdateZonalAutoshiftConfiguration,
cloudwatch:DescribeAlarms
```

</TabItem>
<TabItem value="delete">

```json
arc-zonal-shift:DeletePracticeRunConfiguration,
arc-zonal-shift:GetManagedResource,
arc-zonal-shift:UpdateZonalAutoshiftConfiguration
```

</TabItem>
<TabItem value="list">

```json
arc-zonal-shift:ListManagedResources
```

</TabItem>
</Tabs>