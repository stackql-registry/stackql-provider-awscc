---
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
  - resiliencehub
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

Creates, updates, deletes or gets an <code>app</code> resource or lists <code>apps</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>apps</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for AWS::ResilienceHub::App.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.resiliencehub.apps" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the app."
  },
  {
    "name": "description",
    "type": "string",
    "description": "App description."
  },
  {
    "name": "app_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the App."
  },
  {
    "name": "resiliency_policy_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the Resiliency Policy."
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "app_template_body",
    "type": "string",
    "description": "A string containing full ResilienceHub app template body."
  },
  {
    "name": "resource_mappings",
    "type": "array",
    "description": "An array of ResourceMapping objects.",
    "children": [
      {
        "name": "logical_stack_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "mapping_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "resource_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "terraform_source_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "eks_source_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "physical_resource_id",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "aws_account_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "aws_region",
            "type": "string",
            "description": ""
          },
          {
            "name": "identifier",
            "type": "string",
            "description": ""
          },
          {
            "name": "type",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "app_assessment_schedule",
    "type": "string",
    "description": "Assessment execution schedule."
  },
  {
    "name": "permission_model",
    "type": "object",
    "description": "Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user."
      },
      {
        "name": "invoker_role_name",
        "type": "string",
        "description": "Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment."
      },
      {
        "name": "cross_account_role_arns",
        "type": "array",
        "description": "Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application."
      }
    ]
  },
  {
    "name": "event_subscriptions",
    "type": "array",
    "description": "The list of events you would like to subscribe and get notification for.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "Unique name to identify an event subscription."
      },
      {
        "name": "event_type",
        "type": "string",
        "description": "The type of event you would like to subscribe and get notification for."
      },
      {
        "name": "sns_topic_arn",
        "type": "string",
        "description": "Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic."
      }
    ]
  },
  {
    "name": "drift_status",
    "type": "string",
    "description": "Indicates if compliance drifts (deviations) were detected while running an assessment for your application."
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
    "name": "app_arn",
    "type": "string",
    "description": "Amazon Resource Name (ARN) of the App."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html"><code>AWS::ResilienceHub::App</code></a>.

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
    <td><code>apps</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, AppTemplateBody, ResourceMappings, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>apps</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>apps</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>apps_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>apps</code></td>
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

Gets all properties from an individual <code>app</code>.
```sql
SELECT
region,
name,
description,
app_arn,
resiliency_policy_arn,
tags,
app_template_body,
resource_mappings,
app_assessment_schedule,
permission_model,
event_subscriptions,
drift_status
FROM awscc.resiliencehub.apps
WHERE region = 'us-east-1' AND Identifier = '{{ app_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>apps</code> in a region.
```sql
SELECT
region,
app_arn
FROM awscc.resiliencehub.apps_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.resiliencehub.apps (
 Name,
 AppTemplateBody,
 ResourceMappings,
 region
)
SELECT
'{{ name }}',
 '{{ app_template_body }}',
 '{{ resource_mappings }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.resiliencehub.apps (
 Name,
 Description,
 ResiliencyPolicyArn,
 Tags,
 AppTemplateBody,
 ResourceMappings,
 AppAssessmentSchedule,
 PermissionModel,
 EventSubscriptions,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ resiliency_policy_arn }}',
 '{{ tags }}',
 '{{ app_template_body }}',
 '{{ resource_mappings }}',
 '{{ app_assessment_schedule }}',
 '{{ permission_model }}',
 '{{ event_subscriptions }}',
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
  - name: app
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: resiliency_policy_arn
        value: '{{ resiliency_policy_arn }}'
      - name: tags
        value: {}
      - name: app_template_body
        value: '{{ app_template_body }}'
      - name: resource_mappings
        value:
          - logical_stack_name: '{{ logical_stack_name }}'
            mapping_type: '{{ mapping_type }}'
            resource_name: '{{ resource_name }}'
            terraform_source_name: '{{ terraform_source_name }}'
            eks_source_name: '{{ eks_source_name }}'
            physical_resource_id:
              aws_account_id: '{{ aws_account_id }}'
              aws_region: '{{ aws_region }}'
              identifier: '{{ identifier }}'
              type: '{{ type }}'
      - name: app_assessment_schedule
        value: '{{ app_assessment_schedule }}'
      - name: permission_model
        value:
          type: '{{ type }}'
          invoker_role_name: '{{ invoker_role_name }}'
          cross_account_role_arns:
            - '{{ cross_account_role_arns[0] }}'
      - name: event_subscriptions
        value:
          - name: '{{ name }}'
            event_type: '{{ event_type }}'
            sns_topic_arn: '{{ sns_topic_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>app</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.resiliencehub.apps
SET PatchDocument = string('{{ {
    "Description": description,
    "ResiliencyPolicyArn": resiliency_policy_arn,
    "Tags": tags,
    "AppTemplateBody": app_template_body,
    "ResourceMappings": resource_mappings,
    "AppAssessmentSchedule": app_assessment_schedule,
    "PermissionModel": permission_model,
    "EventSubscriptions": event_subscriptions
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ app_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.resiliencehub.apps
WHERE Identifier = '{{ app_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>apps</code> resource, the following permissions are required:

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
cloudformation:DescribeStacks,
cloudformation:ListStackResources,
s3:GetBucketLocation,
s3:GetObject,
s3:ListAllMyBuckets,
autoscaling:DescribeAutoScalingGroups,
apigateway:GET,
ec2:Describe*,
ecs:DescribeServices,
eks:DescribeCluster,
elasticfilesystem:DescribeFileSystems,
elasticloadbalancing:DescribeLoadBalancers,
lambda:GetFunction*,
rds:Describe*,
dynamodb:Describe*,
sqs:GetQueueAttributes,
sns:GetTopicAttributes,
route53:List*,
iam:PassRole,
resiliencehub:CreateApp,
resiliencehub:DescribeApp,
resiliencehub:DescribeAppVersionTemplate,
resiliencehub:PutDraftAppVersionTemplate,
resiliencehub:AddDraftAppVersionResourceMappings,
resiliencehub:ListAppVersionResourceMappings,
resiliencehub:ListAppVersions,
resiliencehub:PublishAppVersion,
resiliencehub:ListTagsForResource,
resiliencehub:TagResource,
resiliencehub:UntagResource
```

</TabItem>
<TabItem value="read">

```json
resiliencehub:DescribeApp,
resiliencehub:DescribeAppVersionTemplate,
resiliencehub:ListAppVersionResourceMappings,
resiliencehub:ListTagsForResource,
resiliencehub:ListAppVersions
```

</TabItem>
<TabItem value="update">

```json
cloudformation:DescribeStacks,
cloudformation:ListStackResources,
s3:GetBucketLocation,
s3:GetObject,
s3:ListAllMyBuckets,
autoscaling:DescribeAutoScalingGroups,
apigateway:GET,
ec2:Describe*,
ecs:DescribeServices,
eks:DescribeCluster,
elasticfilesystem:DescribeFileSystems,
elasticloadbalancing:DescribeLoadBalancers,
lambda:GetFunction*,
rds:Describe*,
dynamodb:Describe*,
sqs:GetQueueAttributes,
sns:GetTopicAttributes,
route53:List*,
iam:PassRole,
resiliencehub:UpdateApp,
resiliencehub:DescribeApp,
resiliencehub:DescribeAppVersionTemplate,
resiliencehub:PutDraftAppVersionTemplate,
resiliencehub:AddDraftAppVersionResourceMappings,
resiliencehub:RemoveDraftAppVersionResourceMappings,
resiliencehub:ListAppVersionResourceMappings,
resiliencehub:ListAppVersions,
resiliencehub:PublishAppVersion,
resiliencehub:ListTagsForResource,
resiliencehub:TagResource,
resiliencehub:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
resiliencehub:DeleteApp,
resiliencehub:UntagResource,
resiliencehub:ListApps
```

</TabItem>
<TabItem value="list">

```json
resiliencehub:ListApps
```

</TabItem>
</Tabs>