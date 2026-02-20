---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RefactorSpaces::Application Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.refactorspaces.applications" /></td></tr>
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
    "name": "api_gateway_proxy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "stage_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "endpoint_type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "api_gateway_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_link_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "nlb_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "nlb_name",
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
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "proxy_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "stage_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "proxy_url",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html"><code>AWS::RefactorSpaces::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EnvironmentIdentifier, VpcId, Name, ProxyType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
api_gateway_proxy,
arn,
api_gateway_id,
vpc_link_id,
nlb_arn,
nlb_name,
application_identifier,
environment_identifier,
name,
proxy_type,
vpc_id,
stage_name,
proxy_url,
tags
FROM awscc.refactorspaces.applications
WHERE region = 'us-east-1' AND Identifier = '<EnvironmentIdentifier>|<ApplicationIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
environment_identifier,
application_identifier
FROM awscc.refactorspaces.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.refactorspaces.applications (
 EnvironmentIdentifier,
 Name,
 ProxyType,
 VpcId,
 region
)
SELECT 
'{{ EnvironmentIdentifier }}',
 '{{ Name }}',
 '{{ ProxyType }}',
 '{{ VpcId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.refactorspaces.applications (
 ApiGatewayProxy,
 EnvironmentIdentifier,
 Name,
 ProxyType,
 VpcId,
 Tags,
 region
)
SELECT 
 '{{ ApiGatewayProxy }}',
 '{{ EnvironmentIdentifier }}',
 '{{ Name }}',
 '{{ ProxyType }}',
 '{{ VpcId }}',
 '{{ Tags }}',
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
  - name: application
    props:
      - name: ApiGatewayProxy
        value:
          StageName: '{{ StageName }}'
          EndpointType: '{{ EndpointType }}'
      - name: EnvironmentIdentifier
        value: '{{ EnvironmentIdentifier }}'
      - name: Name
        value: '{{ Name }}'
      - name: ProxyType
        value: '{{ ProxyType }}'
      - name: VpcId
        value: '{{ VpcId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.refactorspaces.applications
WHERE Identifier = '<EnvironmentIdentifier|ApplicationIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
refactor-spaces:GetApplication,
refactor-spaces:CreateApplication,
refactor-spaces:TagResource,
ec2:CreateTags,
ec2:CreateVpcEndpointServiceConfiguration,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeVpcEndpointServiceConfigurations,
ec2:DescribeAccountAttributes,
ec2:DescribeInternetGateways,
ec2:ModifyVpcEndpointServicePermissions,
apigateway:DELETE,
apigateway:GET,
apigateway:PATCH,
apigateway:POST,
apigateway:PUT,
apigateway:UpdateRestApiPolicy,
elasticloadbalancing:CreateLoadBalancer,
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DescribeTags,
elasticloadbalancing:AddTags,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
refactor-spaces:GetApplication,
refactor-spaces:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
refactor-spaces:GetApplication,
refactor-spaces:DeleteApplication,
refactor-spaces:UntagResource,
ec2:DescribeVpcEndpointServiceConfigurations,
ec2:DeleteRoute,
ec2:DeleteSecurityGroup,
ec2:DeleteTransitGateway,
ec2:DeleteTransitGatewayVpcAttachment,
ec2:DeleteVpcEndpointServiceConfigurations,
ec2:DeleteTags,
ec2:RevokeSecurityGroupIngress,
elasticloadbalancing:DeleteLoadBalancer,
apigateway:DELETE,
apigateway:GET,
apigateway:PUT,
apigateway:UpdateRestApiPolicy
```

</TabItem>
<TabItem value="list">

```json
refactor-spaces:ListApplications,
refactor-spaces:ListTagsForResource
```

</TabItem>
</Tabs>