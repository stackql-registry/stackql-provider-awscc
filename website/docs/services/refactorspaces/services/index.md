---
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes or gets a <code>service</code> resource or lists <code>services</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RefactorSpaces::Service Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.refactorspaces.services" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "endpoint_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "environment_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "lambda_endpoint",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "url_endpoint",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "health_url",
        "type": "string",
        "description": ""
      },
      {
        "name": "url",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
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
    "name": "service_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html"><code>AWS::RefactorSpaces::Service</code></a>.

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
    <td><code>services</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EnvironmentIdentifier, ApplicationIdentifier, EndpointType, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>services</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>services_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>services</code></td>
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

Gets all properties from an individual <code>service</code>.
```sql
SELECT
region,
arn,
application_identifier,
description,
endpoint_type,
environment_identifier,
lambda_endpoint,
name,
service_identifier,
url_endpoint,
vpc_id,
tags
FROM awscc.refactorspaces.services
WHERE region = 'us-east-1' AND Identifier = '{{ environment_identifier }}|{{ application_identifier }}|{{ service_identifier }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>services</code> in a region.
```sql
SELECT
region,
environment_identifier,
application_identifier,
service_identifier
FROM awscc.refactorspaces.services_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.refactorspaces.services (
 ApplicationIdentifier,
 EndpointType,
 EnvironmentIdentifier,
 Name,
 region
)
SELECT
'{{ application_identifier }}',
 '{{ endpoint_type }}',
 '{{ environment_identifier }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.refactorspaces.services (
 ApplicationIdentifier,
 Description,
 EndpointType,
 EnvironmentIdentifier,
 LambdaEndpoint,
 Name,
 UrlEndpoint,
 VpcId,
 Tags,
 region
)
SELECT
 '{{ application_identifier }}',
 '{{ description }}',
 '{{ endpoint_type }}',
 '{{ environment_identifier }}',
 '{{ lambda_endpoint }}',
 '{{ name }}',
 '{{ url_endpoint }}',
 '{{ vpc_id }}',
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
  - name: service
    props:
      - name: application_identifier
        value: '{{ application_identifier }}'
      - name: description
        value: '{{ description }}'
      - name: endpoint_type
        value: '{{ endpoint_type }}'
      - name: environment_identifier
        value: '{{ environment_identifier }}'
      - name: lambda_endpoint
        value:
          arn: '{{ arn }}'
      - name: name
        value: '{{ name }}'
      - name: url_endpoint
        value:
          health_url: '{{ health_url }}'
          url: '{{ url }}'
      - name: vpc_id
        value: '{{ vpc_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.refactorspaces.services
WHERE Identifier = '{{ environment_identifier }}|{{ application_identifier }}|{{ service_identifier }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>services</code> resource, the following permissions are required:

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
refactor-spaces:CreateService,
refactor-spaces:GetService,
refactor-spaces:TagResource,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeRouteTables,
ec2:CreateTags,
ec2:CreateTransitGatewayVpcAttachment,
ec2:DescribeTransitGatewayVpcAttachments,
ec2:CreateSecurityGroup,
ec2:AuthorizeSecurityGroupIngress,
ec2:CreateRoute,
lambda:GetFunctionConfiguration
```

</TabItem>
<TabItem value="read">

```json
refactor-spaces:GetService,
refactor-spaces:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
refactor-spaces:DeleteService,
refactor-spaces:GetService,
refactor-spaces:UntagResource,
ram:DisassociateResourceShare,
ec2:DescribeNetworkInterfaces,
ec2:DescribeRouteTables,
ec2:DescribeTransitGatewayVpcAttachments,
ec2:DescribeSecurityGroups,
ec2:DeleteSecurityGroup,
ec2:DeleteRoute,
ec2:RevokeSecurityGroupIngress,
ec2:DeleteTransitGatewayVpcAttachment,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
refactor-spaces:ListServices,
refactor-spaces:ListTagsForResource
```

</TabItem>
</Tabs>