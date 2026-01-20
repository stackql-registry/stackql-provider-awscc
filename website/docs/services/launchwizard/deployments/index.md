---
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - launchwizard
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

Creates, updates, deletes or gets a <code>deployment</code> resource or lists <code>deployments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::LaunchWizard::Deployment Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.launchwizard.deployments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "ARN of the LaunchWizard deployment"
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Timestamp of LaunchWizard deployment creation"
  },
  {
    "name": "deleted_at",
    "type": "string",
    "description": "Timestamp of LaunchWizard deployment deletion"
  },
  {
    "name": "deployment_id",
    "type": "string",
    "description": "Deployment ID of the LaunchWizard deployment"
  },
  {
    "name": "deployment_pattern_name",
    "type": "string",
    "description": "Workload deployment pattern name"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of LaunchWizard deployment"
  },
  {
    "name": "resource_group",
    "type": "string",
    "description": "Resource Group Name created for LaunchWizard deployment"
  },
  {
    "name": "specifications",
    "type": "object",
    "description": "LaunchWizard deployment specifications"
  },
  {
    "name": "status",
    "type": "string",
    "description": "Status of LaunchWizard deployment"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for LaunchWizard deployment",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "workload_name",
    "type": "string",
    "description": "Workload Name for LaunchWizard deployment"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-launchwizard-deployment.html"><code>AWS::LaunchWizard::Deployment</code></a>.

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
    <td><CopyableCode code="DeploymentPatternName, Name, WorkloadName, region" /></td>
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

Gets all properties from an individual <code>deployment</code>.
```sql
SELECT
region,
arn,
created_at,
deleted_at,
deployment_id,
deployment_pattern_name,
name,
resource_group,
specifications,
status,
tags,
workload_name
FROM awscc.launchwizard.deployments
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.launchwizard.deployments (
 DeploymentPatternName,
 Name,
 WorkloadName,
 region
)
SELECT 
'{{ DeploymentPatternName }}',
 '{{ Name }}',
 '{{ WorkloadName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.launchwizard.deployments (
 DeploymentPatternName,
 Name,
 Specifications,
 Tags,
 WorkloadName,
 region
)
SELECT 
 '{{ DeploymentPatternName }}',
 '{{ Name }}',
 '{{ Specifications }}',
 '{{ Tags }}',
 '{{ WorkloadName }}',
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
  - name: deployment
    props:
      - name: DeploymentPatternName
        value: '{{ DeploymentPatternName }}'
      - name: Name
        value: '{{ Name }}'
      - name: Specifications
        value: {}
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: WorkloadName
        value: '{{ WorkloadName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.launchwizard.deployments
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

### Create
```json
launchwizard:CreateDeployment,
launchwizard:GetDeployment,
launchwizard:ListDeploymentEvents,
launchwizard:ListTagsForResource,
launchwizard:TagResource,
ssm:GetParameter,
ssm:PutParameter,
ssm:DescribeParameters,
ssm:AddTagsToResource,
ssm:DeleteParameter,
secretsmanager:DescribeSecret,
secretsmanager:PutSecretValue,
secretsmanager:CreateSecret,
secretsmanager:TagResource,
secretsmanager:UpdateSecret,
resource-groups:CreateGroup,
resource-groups:DeleteGroup,
cloudformation:DeleteStack,
cloudformation:DescribeStackResources,
cloudformation:DescribeStackResource,
cloudformation:DescribeStacks,
cloudformation:DescribeStackEvents,
cloudformation:CreateStack,
cloudformation:TagResource,
s3:PutObject,
s3:GetObject,
s3:CreateBucket,
sns:ListSubscriptionsByTopic,
sns:Publish,
sns:ListSubscriptions,
sns:ListTopics,
sns:CreateTopic,
sns:Subscribe,
sns:Unsubscribe,
sqs:TagQueue,
sqs:GetQueueUrl,
sqs:AddPermission,
sqs:ListQueues,
sqs:GetQueueAttributes,
sqs:ListQueueTags,
sqs:CreateQueue,
sqs:SetQueueAttributes
```

### Read
```json
launchwizard:GetDeployment,
launchwizard:ListDeploymentEvents,
launchwizard:ListTagsForResource
```

### Delete
```json
launchwizard:GetDeployment,
launchwizard:DeleteDeployment,
launchwizard:UntagResource,
ssm:DeleteParameter,
secretsmanager:DeleteSecret,
resource-groups:DeleteGroup,
cloudformation:DeleteStack,
cloudformation:DescribeStacks,
ssm:GetParameter,
sns:ListSubscriptionsByTopic,
sns:Publish,
sns:ListSubscriptions,
sns:ListTopics,
sns:CreateTopic,
sns:DeleteTopic,
sns:Subscribe,
sns:Unsubscribe,
sqs:GetQueueUrl,
sqs:ListQueues,
sqs:DeleteQueue,
sqs:GetQueueAttributes,
sqs:ListQueueTags
```

### Update
```json
launchwizard:GetDeployment,
launchwizard:ListTagsForResource,
launchwizard:TagResource,
launchwizard:UntagResource
```

### List
```json
launchwizard:ListDeployments,
launchwizard:ListTagsForResource
```
