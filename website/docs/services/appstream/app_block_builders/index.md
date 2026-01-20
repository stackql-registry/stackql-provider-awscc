---
title: app_block_builders
hide_title: false
hide_table_of_contents: false
keywords:
  - app_block_builders
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

Creates, updates, deletes or gets an <code>app_block_builder</code> resource or lists <code>app_block_builders</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>app_block_builders</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppStream::AppBlockBuilder.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appstream.app_block_builders" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "platform",
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
    "name": "iam_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": ""
  },
  {
    "name": "instance_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "app_block_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblockbuilder.html"><code>AWS::AppStream::AppBlockBuilder</code></a>.

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
    <td><CopyableCode code="Name, Platform, InstanceType, VpcConfig, region" /></td>
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

Gets all properties from an individual <code>app_block_builder</code>.
```sql
SELECT
region,
name,
arn,
description,
display_name,
platform,
access_endpoints,
tags,
vpc_config,
enable_default_internet_access,
iam_role_arn,
created_time,
instance_type,
app_block_arns
FROM awscc.appstream.app_block_builders
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app_block_builder</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appstream.app_block_builders (
 Name,
 Platform,
 VpcConfig,
 InstanceType,
 region
)
SELECT 
'{{ Name }}',
 '{{ Platform }}',
 '{{ VpcConfig }}',
 '{{ InstanceType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appstream.app_block_builders (
 Name,
 Description,
 DisplayName,
 Platform,
 AccessEndpoints,
 Tags,
 VpcConfig,
 EnableDefaultInternetAccess,
 IamRoleArn,
 InstanceType,
 AppBlockArns,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ Platform }}',
 '{{ AccessEndpoints }}',
 '{{ Tags }}',
 '{{ VpcConfig }}',
 '{{ EnableDefaultInternetAccess }}',
 '{{ IamRoleArn }}',
 '{{ InstanceType }}',
 '{{ AppBlockArns }}',
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
  - name: app_block_builder
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: Platform
        value: '{{ Platform }}'
      - name: AccessEndpoints
        value:
          - EndpointType: '{{ EndpointType }}'
            VpceId: '{{ VpceId }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: VpcConfig
        value:
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
      - name: EnableDefaultInternetAccess
        value: '{{ EnableDefaultInternetAccess }}'
      - name: IamRoleArn
        value: '{{ IamRoleArn }}'
      - name: InstanceType
        value: '{{ InstanceType }}'
      - name: AppBlockArns
        value:
          - '{{ AppBlockArns[0] }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appstream.app_block_builders
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>app_block_builders</code> resource, the following permissions are required:

### Create
```json
appstream:CreateAppBlockBuilder,
appstream:DescribeAppBlockBuilders,
appstream:StartAppBlockBuilder,
appstream:AssociateAppBlockBuilderAppBlock,
appstream:DescribeAppBlockBuilderAppBlockAssociations,
appstream:TagResource,
appstream:ListTagsForResource,
iam:PassRole
```

### Read
```json
appstream:DescribeAppBlockBuilders,
appstream:ListTagsForResource
```

### Update
```json
appstream:UpdateAppBlockBuilder,
appstream:DescribeAppBlockBuilders,
appstream:StartAppBlockBuilder,
appstream:StopAppBlockBuilder,
appstream:AssociateAppBlockBuilderAppBlock,
appstream:DisassociateAppBlockBuilderAppBlock,
appstream:DescribeAppBlockBuilderAppBlockAssociations,
appstream:ListTagsForResource,
appstream:TagResource,
appstream:UntagResource,
iam:PassRole
```

### Delete
```json
appstream:DescribeAppBlockBuilders,
appstream:DeleteAppBlockBuilder,
appstream:DisassociateAppBlockBuilderAppBlock,
appstream:DescribeAppBlockBuilderAppBlockAssociations
```

### List
```json
appstream:DescribeAppBlockBuilders
```
