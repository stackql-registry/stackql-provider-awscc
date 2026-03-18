---
title: network_insights_access_scope_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_access_scope_analyses
  - ec2
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

Creates, updates, deletes or gets a <code>network_insights_access_scope_analysis</code> resource or lists <code>network_insights_access_scope_analyses</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_insights_access_scope_analyses</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EC2::NetworkInsightsAccessScopeAnalysis</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_insights_access_scope_analyses" /></td></tr>
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
    "name": "network_insights_access_scope_analysis_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_insights_access_scope_analysis_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_insights_access_scope_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "start_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "end_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "findings_found",
    "type": "string",
    "description": ""
  },
  {
    "name": "analyzed_eni_count",
    "type": "integer",
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
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
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
    "name": "network_insights_access_scope_analysis_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscopeanalysis.html"><code>AWS::EC2::NetworkInsightsAccessScopeAnalysis</code></a>.

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
    <td><code>network_insights_access_scope_analyses</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="NetworkInsightsAccessScopeId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_insights_access_scope_analyses</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_insights_access_scope_analyses</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_insights_access_scope_analyses_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_insights_access_scope_analyses</code></td>
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

Gets all properties from an individual <code>network_insights_access_scope_analysis</code>.
```sql
SELECT
  region,
  network_insights_access_scope_analysis_id,
  network_insights_access_scope_analysis_arn,
  network_insights_access_scope_id,
  status,
  status_message,
  start_date,
  end_date,
  findings_found,
  analyzed_eni_count,
  tags
FROM awscc.ec2.network_insights_access_scope_analyses
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ network_insights_access_scope_analysis_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_insights_access_scope_analyses</code> in a region.
```sql
SELECT
  region,
  network_insights_access_scope_analysis_id
FROM awscc.ec2.network_insights_access_scope_analyses_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_insights_access_scope_analysis</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_insights_access_scope_analyses (
  NetworkInsightsAccessScopeId,
  region
)
SELECT
  '{{ network_insights_access_scope_id }}',
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
INSERT INTO awscc.ec2.network_insights_access_scope_analyses (
  NetworkInsightsAccessScopeId,
  Tags,
  region
)
SELECT
  '{{ network_insights_access_scope_id }}',
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
  - name: network_insights_access_scope_analysis
    props:
      - name: network_insights_access_scope_id
        value: '{{ network_insights_access_scope_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>network_insights_access_scope_analysis</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.network_insights_access_scope_analyses
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ network_insights_access_scope_analysis_id }}'
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
DELETE FROM awscc.ec2.network_insights_access_scope_analyses
WHERE
  Identifier = '{{ network_insights_access_scope_analysis_id }}' AND
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

To operate on the <code>network_insights_access_scope_analyses</code> resource, the following permissions are required:

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
ec2:CreateTags,
ec2:StartNetworkInsightsAccessScopeAnalysis,
ec2:GetTransitGatewayRouteTablePropagations,
ec2:Describe*,
elasticloadbalancing:Describe*,
directconnect:Describe*,
tiros:CreateQuery,
tiros:GetQueryAnswer,
tiros:GetQueryExplanation
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeNetworkInsightsAccessScopeAnalyses
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeNetworkInsightsAccessScopeAnalyses,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteNetworkInsightsAccessScopeAnalysis,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeNetworkInsightsAccessScopeAnalyses
```

</TabItem>
</Tabs>