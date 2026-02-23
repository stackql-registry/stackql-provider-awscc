---
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
  - refactorspaces
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

Creates, updates, deletes or gets a <code>route</code> resource or lists <code>routes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>routes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RefactorSpaces::Route Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.refactorspaces.routes" /></td></tr>
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
    "name": "path_resource_to_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "route_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "route_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_route",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "activation_state",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "uri_path_route",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "source_path",
        "type": "string",
        "description": ""
      },
      {
        "name": "activation_state",
        "type": "string",
        "description": ""
      },
      {
        "name": "methods",
        "type": "array",
        "description": ""
      },
      {
        "name": "include_child_paths",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "append_source_path",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
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
    "name": "application_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "route_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html"><code>AWS::RefactorSpaces::Route</code></a>.

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
    <td><code>routes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EnvironmentIdentifier, ApplicationIdentifier, ServiceIdentifier, RouteType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>routes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>routes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>routes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>routes</code></td>
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

Gets all properties from an individual <code>route</code>.
```sql
SELECT
region,
path_resource_to_id,
arn,
application_identifier,
environment_identifier,
route_identifier,
route_type,
service_identifier,
default_route,
uri_path_route,
tags
FROM awscc.refactorspaces.routes
WHERE region = 'us-east-1' AND Identifier = '{{ environment_identifier }}|{{ application_identifier }}|{{ route_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>routes</code> in a region.
```sql
SELECT
region,
environment_identifier,
application_identifier,
route_identifier
FROM awscc.refactorspaces.routes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>route</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.refactorspaces.routes (
 ApplicationIdentifier,
 EnvironmentIdentifier,
 RouteType,
 ServiceIdentifier,
 region
)
SELECT
'{{ application_identifier }}',
 '{{ environment_identifier }}',
 '{{ route_type }}',
 '{{ service_identifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.refactorspaces.routes (
 ApplicationIdentifier,
 EnvironmentIdentifier,
 RouteType,
 ServiceIdentifier,
 DefaultRoute,
 UriPathRoute,
 Tags,
 region
)
SELECT
 '{{ application_identifier }}',
 '{{ environment_identifier }}',
 '{{ route_type }}',
 '{{ service_identifier }}',
 '{{ default_route }}',
 '{{ uri_path_route }}',
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
  - name: route
    props:
      - name: application_identifier
        value: '{{ application_identifier }}'
      - name: environment_identifier
        value: '{{ environment_identifier }}'
      - name: route_type
        value: '{{ route_type }}'
      - name: service_identifier
        value: '{{ service_identifier }}'
      - name: default_route
        value:
          activation_state: '{{ activation_state }}'
      - name: uri_path_route
        value:
          source_path: '{{ source_path }}'
          activation_state: null
          methods:
            - '{{ methods[0] }}'
          include_child_paths: '{{ include_child_paths }}'
          append_source_path: '{{ append_source_path }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>route</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.refactorspaces.routes
SET PatchDocument = string('{{ {
    "DefaultRoute": default_route,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ environment_identifier }}|{{ application_identifier }}|{{ route_identifier }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.refactorspaces.routes
WHERE Identifier = '{{ environment_identifier }}|{{ application_identifier }}|{{ route_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>routes</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
refactor-spaces:CreateRoute,
refactor-spaces:GetRoute,
refactor-spaces:TagResource,
iam:CreateServiceLinkedRole,
apigateway:GET,
apigateway:PATCH,
apigateway:POST,
apigateway:PUT,
apigateway:DELETE,
apigateway:UpdateRestApiPolicy,
lambda:GetFunctionConfiguration,
lambda:AddPermission,
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeTargetGroups,
elasticloadbalancing:CreateListener,
elasticloadbalancing:CreateTargetGroup,
elasticloadbalancing:DescribeTags,
elasticloadbalancing:AddTags,
elasticloadbalancing:RegisterTargets,
elasticloadbalancing:DescribeTargetHealth,
ec2:DescribeSubnets,
tag:GetResources
```

</TabItem>
<TabItem value="read">

```json
refactor-spaces:GetRoute,
refactor-spaces:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
refactor-spaces:DeleteRoute,
refactor-spaces:GetRoute,
refactor-spaces:UntagResource,
apigateway:GET,
apigateway:PATCH,
apigateway:POST,
apigateway:PUT,
apigateway:DELETE,
apigateway:UpdateRestApiPolicy,
lambda:GetFunctionConfiguration,
lambda:AddPermission,
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeTargetGroups,
elasticloadbalancing:CreateListener,
elasticloadbalancing:CreateTargetGroup,
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DeleteTargetGroup,
elasticloadbalancing:DescribeTags,
elasticloadbalancing:AddTags,
elasticloadbalancing:RegisterTargets,
elasticloadbalancing:DescribeTargetHealth,
ec2:DescribeSubnets,
tag:GetResources
```

</TabItem>
<TabItem value="list">

```json
refactor-spaces:ListRoutes,
refactor-spaces:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
refactor-spaces:UpdateRoute,
refactor-spaces:GetRoute,
refactor-spaces:TagResource,
iam:CreateServiceLinkedRole,
apigateway:GET,
apigateway:PATCH,
apigateway:POST,
apigateway:PUT,
apigateway:DELETE,
apigateway:UpdateRestApiPolicy,
lambda:GetFunctionConfiguration,
lambda:AddPermission,
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeTargetGroups,
elasticloadbalancing:CreateListener,
elasticloadbalancing:CreateTargetGroup,
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DeleteTargetGroup,
elasticloadbalancing:DescribeTags,
elasticloadbalancing:AddTags,
elasticloadbalancing:RegisterTargets,
elasticloadbalancing:DescribeTargetHealth,
ec2:DescribeSubnets,
ec2:DescribeSubnets,
tag:GetResources
```

</TabItem>
</Tabs>