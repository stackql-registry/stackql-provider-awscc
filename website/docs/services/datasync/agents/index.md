---
title: agents
hide_title: false
hide_table_of_contents: false
keywords:
  - agents
  - datasync
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

Creates, updates, deletes or gets an <code>agent</code> resource or lists <code>agents</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>agents</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DataSync::Agent.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.datasync.agents" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "agent_name",
    "type": "string",
    "description": "The name configured for the agent. Text reference used to identify the agent in the console."
  },
  {
    "name": "activation_key",
    "type": "string",
    "description": "Activation key of the Agent."
  },
  {
    "name": "security_group_arns",
    "type": "array",
    "description": "The ARNs of the security group used to protect your data transfer task subnets."
  },
  {
    "name": "subnet_arns",
    "type": "array",
    "description": "The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task."
  },
  {
    "name": "vpc_endpoint_id",
    "type": "string",
    "description": "The ID of the VPC endpoint that the agent has access to."
  },
  {
    "name": "endpoint_type",
    "type": "string",
    "description": "The service endpoints that the agent will connect to."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key for an AWS resource tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for an AWS resource tag."
      }
    ]
  },
  {
    "name": "agent_arn",
    "type": "string",
    "description": "The DataSync Agent ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html"><code>AWS::DataSync::Agent</code></a>.

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
    <td><CopyableCode code=", region" /></td>
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

Gets all properties from an individual <code>agent</code>.
```sql
SELECT
region,
agent_name,
activation_key,
security_group_arns,
subnet_arns,
vpc_endpoint_id,
endpoint_type,
tags,
agent_arn
FROM awscc.datasync.agents
WHERE region = 'us-east-1' AND data__Identifier = '<AgentArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>agent</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.datasync.agents (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.datasync.agents (
 AgentName,
 ActivationKey,
 SecurityGroupArns,
 SubnetArns,
 VpcEndpointId,
 Tags,
 region
)
SELECT 
 '{{ AgentName }}',
 '{{ ActivationKey }}',
 '{{ SecurityGroupArns }}',
 '{{ SubnetArns }}',
 '{{ VpcEndpointId }}',
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
  - name: agent
    props:
      - name: AgentName
        value: '{{ AgentName }}'
      - name: ActivationKey
        value: '{{ ActivationKey }}'
      - name: SecurityGroupArns
        value:
          - '{{ SecurityGroupArns[0] }}'
      - name: SubnetArns
        value:
          - '{{ SubnetArns[0] }}'
      - name: VpcEndpointId
        value: '{{ VpcEndpointId }}'
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
DELETE FROM awscc.datasync.agents
WHERE data__Identifier = '<AgentArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>agents</code> resource, the following permissions are required:

### Create
```json
datasync:CreateAgent,
datasync:TagResource,
datasync:DescribeAgent,
datasync:ListTagsForResource,
ec2:DescribeNetworkInterfaces,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcEndpoints
```

### Read
```json
datasync:DescribeAgent,
datasync:ListTagsForResource
```

### Update
```json
datasync:UpdateAgent,
datasync:DescribeAgent,
datasync:ListTagsForResource,
datasync:TagResource,
datasync:UntagResource
```

### Delete
```json
datasync:DeleteAgent
```

### List
```json
datasync:ListAgents
```
