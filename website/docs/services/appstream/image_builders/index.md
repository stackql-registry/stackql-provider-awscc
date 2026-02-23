---
title: image_builders
hide_title: false
hide_table_of_contents: false
keywords:
  - image_builders
  - appstream
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

Creates, updates, deletes or gets an <code>image_builder</code> resource or lists <code>image_builders</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>image_builders</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppStream::ImageBuilder</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appstream.image_builders" /></td></tr>
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
    "description": ""
  },
  {
    "name": "vpc_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "enable_default_internet_access",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "domain_join_info",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "organizational_unit_distinguished_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "directory_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "appstream_agent_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "image_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "iam_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "streaming_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "image_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "access_endpoints",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "endpoint_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpce_id",
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
    "name": "name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-imagebuilder.html"><code>AWS::AppStream::ImageBuilder</code></a>.

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
    <td><code>image_builders</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceType, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>image_builders</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>image_builders_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>image_builders</code></td>
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

Gets all properties from an individual <code>image_builder</code>.
```sql
SELECT
region,
description,
vpc_config,
enable_default_internet_access,
domain_join_info,
appstream_agent_version,
name,
image_name,
display_name,
iam_role_arn,
instance_type,
tags,
streaming_url,
image_arn,
access_endpoints
FROM awscc.appstream.image_builders
WHERE region = 'us-east-1' AND Identifier = '{{ name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>image_builders</code> in a region.
```sql
SELECT
region,
name
FROM awscc.appstream.image_builders_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>image_builder</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appstream.image_builders (
 Name,
 InstanceType,
 region
)
SELECT
'{{ name }}',
 '{{ instance_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appstream.image_builders (
 Description,
 VpcConfig,
 EnableDefaultInternetAccess,
 DomainJoinInfo,
 AppstreamAgentVersion,
 Name,
 ImageName,
 DisplayName,
 IamRoleArn,
 InstanceType,
 Tags,
 ImageArn,
 AccessEndpoints,
 region
)
SELECT
 '{{ description }}',
 '{{ vpc_config }}',
 '{{ enable_default_internet_access }}',
 '{{ domain_join_info }}',
 '{{ appstream_agent_version }}',
 '{{ name }}',
 '{{ image_name }}',
 '{{ display_name }}',
 '{{ iam_role_arn }}',
 '{{ instance_type }}',
 '{{ tags }}',
 '{{ image_arn }}',
 '{{ access_endpoints }}',
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
  - name: image_builder
    props:
      - name: description
        value: '{{ description }}'
      - name: vpc_config
        value:
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          subnet_ids:
            - '{{ subnet_ids[0] }}'
      - name: enable_default_internet_access
        value: '{{ enable_default_internet_access }}'
      - name: domain_join_info
        value:
          organizational_unit_distinguished_name: '{{ organizational_unit_distinguished_name }}'
          directory_name: '{{ directory_name }}'
      - name: appstream_agent_version
        value: '{{ appstream_agent_version }}'
      - name: name
        value: '{{ name }}'
      - name: image_name
        value: '{{ image_name }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: iam_role_arn
        value: '{{ iam_role_arn }}'
      - name: instance_type
        value: '{{ instance_type }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: image_arn
        value: '{{ image_arn }}'
      - name: access_endpoints
        value:
          - endpoint_type: '{{ endpoint_type }}'
            vpce_id: '{{ vpce_id }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appstream.image_builders
WHERE Identifier = '{{ name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>image_builders</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
appstream:CreateImageBuilder,
appstream:CreateImageBuilderStreamingURL,
appstream:CreateStreamingURL,
appstream:DeleteImageBuilder,
appstream:DescribeImageBuilders,
appstream:StartImageBuilder,
appstream:StopImageBuilder,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="read">

```json
appstream:CreateImageBuilder,
appstream:CreateImageBuilderStreamingURL,
appstream:CreateStreamingURL,
appstream:DeleteImageBuilder,
appstream:DescribeImageBuilders,
appstream:StartImageBuilder,
appstream:StopImageBuilder,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="delete">

```json
appstream:CreateImageBuilder,
appstream:CreateImageBuilderStreamingURL,
appstream:CreateStreamingURL,
appstream:DeleteImageBuilder,
appstream:DescribeImageBuilders,
appstream:StartImageBuilder,
appstream:StopImageBuilder,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
<TabItem value="list">

```json
appstream:CreateImageBuilder,
appstream:CreateImageBuilderStreamingURL,
appstream:CreateStreamingURL,
appstream:DeleteImageBuilder,
appstream:DescribeImageBuilders,
appstream:StartImageBuilder,
appstream:StopImageBuilder,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

</TabItem>
</Tabs>