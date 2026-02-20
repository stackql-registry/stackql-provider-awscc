---
title: vpc_links
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_links
  - apigatewayv2
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

Creates, updates, deletes or gets a <code>vpc_link</code> resource or lists <code>vpc_links</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vpc_links</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ApiGatewayV2::VpcLink&#96;&#96; resource creates a VPC link. Supported only for HTTP APIs. The VPC link status must transition from &#96;&#96;PENDING&#96;&#96; to &#96;&#96;AVAILABLE&#96;&#96; to successfully create a VPC link, which can take up to 10 minutes. To learn more, see &#91;Working with VPC Links for HTTP APIs&#93;(https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html) in the &#42;API Gateway Developer Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigatewayv2.vpc_links" /></td></tr>
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
    "name": "vpc_link_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "subnet_ids",
    "type": "array",
    "description": "A list of subnet IDs to include in the VPC link."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "A list of security group IDs for the VPC link."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The collection of tags. Each tag element is associated with a given resource."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the VPC link."
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
    "name": "vpc_link_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html"><code>AWS::ApiGatewayV2::VpcLink</code></a>.

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
    <td><code>vpc_links</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SubnetIds, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>vpc_links</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>vpc_links</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>vpc_links_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>vpc_links</code></td>
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

Gets all properties from an individual <code>vpc_link</code>.
```sql
SELECT
region,
vpc_link_id,
subnet_ids,
security_group_ids,
tags,
name
FROM awscc.apigatewayv2.vpc_links
WHERE region = 'us-east-1' AND data__Identifier = '<VpcLinkId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>vpc_links</code> in a region.
```sql
SELECT
region,
vpc_link_id
FROM awscc.apigatewayv2.vpc_links_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vpc_link</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigatewayv2.vpc_links (
 SubnetIds,
 Name,
 region
)
SELECT 
'{{ SubnetIds }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigatewayv2.vpc_links (
 SubnetIds,
 SecurityGroupIds,
 Tags,
 Name,
 region
)
SELECT 
 '{{ SubnetIds }}',
 '{{ SecurityGroupIds }}',
 '{{ Tags }}',
 '{{ Name }}',
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
  - name: vpc_link
    props:
      - name: SubnetIds
        value:
          - '{{ SubnetIds[0] }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: Tags
        value: {}
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.apigatewayv2.vpc_links
SET data__PatchDocument = string('{{ {
    "Tags": tags,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<VpcLinkId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigatewayv2.vpc_links
WHERE data__Identifier = '<VpcLinkId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vpc_links</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET,
apigateway:TagResource,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

### Update
```json
apigateway:PATCH,
apigateway:GET,
apigateway:TagResource,
apigateway:unTagResource,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

### Read
```json
apigateway:GET,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

### Delete
```json
apigateway:GET,
apigateway:DELETE,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```

### List
```json
apigateway:GET,
iam:CreateServiceLinkedRole,
iam:DeleteServiceLinkedRole,
iam:GetServiceLinkedRoleDeletionStatus
```
