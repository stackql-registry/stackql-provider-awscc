---
title: compute_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_environments
  - batch
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

Creates, updates, deletes or gets a <code>compute_environment</code> resource or lists <code>compute_environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>compute_environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Batch::ComputeEnvironment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.batch.compute_environments" /></td></tr>
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
    "name": "compute_environment_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "compute_environment_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "compute_resources",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allocation_strategy",
        "type": "string",
        "description": ""
      },
      {
        "name": "bid_percentage",
        "type": "integer",
        "description": ""
      },
      {
        "name": "desiredv_cpus",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ec2_configuration",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "image_id_override",
            "type": "string",
            "description": ""
          },
          {
            "name": "image_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "image_kubernetes_version",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "ec2_key_pair",
        "type": "string",
        "description": ""
      },
      {
        "name": "image_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_role",
        "type": "string",
        "description": ""
      },
      {
        "name": "instance_types",
        "type": "array",
        "description": ""
      },
      {
        "name": "launch_template",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "launch_template_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "launch_template_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "version",
            "type": "string",
            "description": ""
          },
          {
            "name": "userdata_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "overrides",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "launch_template_id",
                "type": "string",
                "description": ""
              },
              {
                "name": "launch_template_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "version",
                "type": "string",
                "description": ""
              },
              {
                "name": "userdata_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "target_instance_types",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "maxv_cpus",
        "type": "integer",
        "description": ""
      },
      {
        "name": "minv_cpus",
        "type": "integer",
        "description": ""
      },
      {
        "name": "placement_group",
        "type": "string",
        "description": ""
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "spot_iam_fleet_role",
        "type": "string",
        "description": ""
      },
      {
        "name": "subnets",
        "type": "array",
        "description": ""
      },
      {
        "name": "tags",
        "type": "object",
        "description": "A key-value pair to associate with a resource."
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "update_to_latest_image_version",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "replace_compute_environment",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "service_role",
    "type": "string",
    "description": ""
  },
  {
    "name": "state",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with a resource."
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "update_policy",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "terminate_jobs_on_update",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "job_execution_timeout_minutes",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "unmanagedv_cpus",
    "type": "integer",
    "description": ""
  },
  {
    "name": "eks_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "eks_cluster_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "kubernetes_namespace",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "context",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "compute_environment_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html"><code>AWS::Batch::ComputeEnvironment</code></a>.

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
    <td><code>compute_environments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>compute_environments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>compute_environments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>compute_environments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>compute_environments</code></td>
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

Gets all properties from an individual <code>compute_environment</code>.
```sql
SELECT
region,
compute_environment_arn,
compute_environment_name,
compute_resources,
replace_compute_environment,
service_role,
state,
tags,
type,
update_policy,
unmanagedv_cpus,
eks_configuration,
context
FROM awscc.batch.compute_environments
WHERE region = 'us-east-1' AND Identifier = '{{ compute_environment_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>compute_environments</code> in a region.
```sql
SELECT
region,
compute_environment_arn
FROM awscc.batch.compute_environments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>compute_environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.batch.compute_environments (
 Type,
 region
)
SELECT
'{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.batch.compute_environments (
 ComputeEnvironmentName,
 ComputeResources,
 ReplaceComputeEnvironment,
 ServiceRole,
 State,
 Tags,
 Type,
 UpdatePolicy,
 UnmanagedvCpus,
 EksConfiguration,
 Context,
 region
)
SELECT
 '{{ compute_environment_name }}',
 '{{ compute_resources }}',
 '{{ replace_compute_environment }}',
 '{{ service_role }}',
 '{{ state }}',
 '{{ tags }}',
 '{{ type }}',
 '{{ update_policy }}',
 '{{ unmanagedv_cpus }}',
 '{{ eks_configuration }}',
 '{{ context }}',
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
  - name: compute_environment
    props:
      - name: compute_environment_name
        value: '{{ compute_environment_name }}'
      - name: compute_resources
        value:
          allocation_strategy: '{{ allocation_strategy }}'
          bid_percentage: '{{ bid_percentage }}'
          desiredv_cpus: '{{ desiredv_cpus }}'
          ec2_configuration:
            - image_id_override: '{{ image_id_override }}'
              image_type: '{{ image_type }}'
              image_kubernetes_version: '{{ image_kubernetes_version }}'
          ec2_key_pair: '{{ ec2_key_pair }}'
          image_id: '{{ image_id }}'
          instance_role: '{{ instance_role }}'
          instance_types:
            - '{{ instance_types[0] }}'
          launch_template:
            launch_template_id: '{{ launch_template_id }}'
            launch_template_name: '{{ launch_template_name }}'
            version: '{{ version }}'
            userdata_type: '{{ userdata_type }}'
            overrides:
              - launch_template_id: '{{ launch_template_id }}'
                launch_template_name: '{{ launch_template_name }}'
                version: '{{ version }}'
                userdata_type: '{{ userdata_type }}'
                target_instance_types:
                  - '{{ target_instance_types[0] }}'
          maxv_cpus: '{{ maxv_cpus }}'
          minv_cpus: '{{ minv_cpus }}'
          placement_group: '{{ placement_group }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          spot_iam_fleet_role: '{{ spot_iam_fleet_role }}'
          subnets:
            - '{{ subnets[0] }}'
          tags: {}
          type: '{{ type }}'
          update_to_latest_image_version: '{{ update_to_latest_image_version }}'
      - name: replace_compute_environment
        value: '{{ replace_compute_environment }}'
      - name: service_role
        value: '{{ service_role }}'
      - name: state
        value: '{{ state }}'
      - name: tags
        value: {}
      - name: type
        value: '{{ type }}'
      - name: update_policy
        value:
          terminate_jobs_on_update: '{{ terminate_jobs_on_update }}'
          job_execution_timeout_minutes: '{{ job_execution_timeout_minutes }}'
      - name: unmanagedv_cpus
        value: '{{ unmanagedv_cpus }}'
      - name: eks_configuration
        value:
          eks_cluster_arn: '{{ eks_cluster_arn }}'
          kubernetes_namespace: '{{ kubernetes_namespace }}'
      - name: context
        value: '{{ context }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>compute_environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.batch.compute_environments
SET PatchDocument = string('{{ {
    "ReplaceComputeEnvironment": replace_compute_environment,
    "ServiceRole": service_role,
    "State": state,
    "UpdatePolicy": update_policy,
    "UnmanagedvCpus": unmanagedv_cpus,
    "Context": context
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ compute_environment_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.batch.compute_environments
WHERE Identifier = '{{ compute_environment_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>compute_environments</code> resource, the following permissions are required:

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
Batch:CreateComputeEnvironment,
Batch:TagResource,
Batch:DescribeComputeEnvironments,
iam:CreateServiceLinkedRole,
Iam:PassRole,
Eks:DescribeCluster,
ec2:DescribeLaunchTemplateVersions
```

</TabItem>
<TabItem value="read">

```json
Batch:DescribeComputeEnvironments
```

</TabItem>
<TabItem value="update">

```json
Batch:UpdateComputeEnvironment,
Batch:DescribeComputeEnvironments,
Batch:TagResource,
Batch:UnTagResource,
Iam:PassRole,
Eks:DescribeCluster,
ec2:DescribeLaunchTemplateVersions
```

</TabItem>
<TabItem value="delete">

```json
Batch:DeleteComputeEnvironment,
Batch:DescribeComputeEnvironments,
Batch:UpdateComputeEnvironment,
Iam:PassRole,
Eks:DescribeCluster,
ec2:DescribeLaunchTemplateVersions
```

</TabItem>
<TabItem value="list">

```json
Batch:DescribeComputeEnvironments
```

</TabItem>
</Tabs>