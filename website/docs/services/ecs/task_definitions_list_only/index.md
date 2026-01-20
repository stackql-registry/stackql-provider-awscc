---
title: task_definitions_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - task_definitions_list_only
  - ecs
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

Lists <code>task_definitions</code> in a region or regions, for all properties use <a href="/services/ecs/task_definitions/"><code>task_definitions</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>task_definitions_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Registers a new task definition from the supplied &#96;&#96;family&#96;&#96; and &#96;&#96;containerDefinitions&#96;&#96;. Optionally, you can add data volumes to your containers with the &#96;&#96;volumes&#96;&#96; parameter. For more information about task definition parameters and defaults, see &#91;Amazon ECS Task Definitions&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task&#95;defintions.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />You can specify a role for your task with the &#96;&#96;taskRoleArn&#96;&#96; parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the AWS services that are specified in the policy that's associated with the role. For more information, see &#91;IAM Roles for Tasks&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />You can specify a Docker networking mode for the containers in your task definition with the &#96;&#96;networkMode&#96;&#96; parameter. If you specify the &#96;&#96;awsvpc&#96;&#96; network mode, the task is allocated an elastic network interface, and you must specify a &#91;NetworkConfiguration&#93;(https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API&#95;NetworkConfiguration.html) when you create a service or run a task with the task definition. For more information, see &#91;Task Networking&#93;(https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the &#42;Amazon Elastic Container Service Developer Guide&#42;.<br />In the following example or examples, the Authorization header contents (&#96;&#96;AUTHPARAMS&#96;&#96;) must be replaced with an AWS Signature Version 4 signature. For more information, see &#91;Signature Version 4 Signing Process&#93;(https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) in the &#42;General Reference&#42;.<br />You only need to learn how to sign HTTP requests if you intend to create them manually. When you use the &#91;&#93;(https://docs.aws.amazon.com/cli/) or one of the &#91;SDKs&#93;(https://docs.aws.amazon.com/tools/) to make requests to AWS, these tools automatically sign the requests for you, with the access key that you specify when you configure the tools. When you use these tools, you don't have to sign requests yourself.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecs.task_definitions_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "task_definition_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>task_definitions</code> in a region.
```sql
SELECT
region,
task_definition_arn
FROM awscc.ecs.task_definitions_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>task_definitions_list_only</code> resource, see <a href="/services/ecs/task_definitions/#permissions"><code>task_definitions</code></a>

