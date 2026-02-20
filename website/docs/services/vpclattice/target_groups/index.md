---
title: target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - target_groups
  - vpclattice
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

Creates, updates, deletes or gets a <code>target_group</code> resource or lists <code>target_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>target_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.target_groups" /></td></tr>
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
    "name": "config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "protocol",
        "type": "string",
        "description": ""
      },
      {
        "name": "protocol_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "ip_address_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "lambda_event_structure_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "vpc_identifier",
        "type": "string",
        "description": ""
      },
      {
        "name": "health_check",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "protocol",
            "type": "string",
            "description": ""
          },
          {
            "name": "protocol_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "port",
            "type": "integer",
            "description": ""
          },
          {
            "name": "path",
            "type": "string",
            "description": ""
          },
          {
            "name": "health_check_interval_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "health_check_timeout_seconds",
            "type": "integer",
            "description": ""
          },
          {
            "name": "healthy_threshold_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "unhealthy_threshold_count",
            "type": "integer",
            "description": ""
          },
          {
            "name": "matcher",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "http_code",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "targets",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "port",
        "type": "integer",
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
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
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
    "name": "arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html"><code>AWS::VpcLattice::TargetGroup</code></a>.

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
    <td><code>target_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>target_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>target_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>target_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>target_groups</code></td>
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

Gets all properties from an individual <code>target_group</code>.
```sql
SELECT
region,
arn,
config,
created_at,
id,
last_updated_at,
name,
status,
type,
targets,
tags
FROM awscc.vpclattice.target_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>target_groups</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.vpclattice.target_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>target_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.target_groups (
 Type,
 region
)
SELECT 
'{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.target_groups (
 Config,
 Name,
 Type,
 Targets,
 Tags,
 region
)
SELECT 
 '{{ Config }}',
 '{{ Name }}',
 '{{ Type }}',
 '{{ Targets }}',
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
  - name: target_group
    props:
      - name: Config
        value:
          Port: '{{ Port }}'
          Protocol: '{{ Protocol }}'
          ProtocolVersion: '{{ ProtocolVersion }}'
          IpAddressType: '{{ IpAddressType }}'
          LambdaEventStructureVersion: '{{ LambdaEventStructureVersion }}'
          VpcIdentifier: '{{ VpcIdentifier }}'
          HealthCheck:
            Enabled: '{{ Enabled }}'
            Protocol: '{{ Protocol }}'
            ProtocolVersion: '{{ ProtocolVersion }}'
            Port: '{{ Port }}'
            Path: '{{ Path }}'
            HealthCheckIntervalSeconds: '{{ HealthCheckIntervalSeconds }}'
            HealthCheckTimeoutSeconds: '{{ HealthCheckTimeoutSeconds }}'
            HealthyThresholdCount: '{{ HealthyThresholdCount }}'
            UnhealthyThresholdCount: '{{ UnhealthyThresholdCount }}'
            Matcher:
              HttpCode: '{{ HttpCode }}'
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: Targets
        value:
          - Id: '{{ Id }}'
            Port: '{{ Port }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.vpclattice.target_groups
SET data__PatchDocument = string('{{ {
    "Targets": targets,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.target_groups
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>target_groups</code> resource, the following permissions are required:

### Create
```json
vpc-lattice:CreateTargetGroup,
vpc-lattice:GetTargetGroup,
vpc-lattice:RegisterTargets,
vpc-lattice:ListTargets,
vpc-lattice:ListTagsForResource,
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
ec2:DescribeVpcs,
ec2:DescribeInstances,
ec2:DescribeSubnets,
ec2:DescribeAvailabilityZoneMappings,
lambda:Invoke,
lambda:AddPermission,
elasticloadbalancing:DescribeLoadBalancers,
iam:CreateServiceLinkedRole
```

### Read
```json
vpc-lattice:GetTargetGroup,
vpc-lattice:ListTargets,
vpc-lattice:ListTagsForResource
```

### Update
```json
vpc-lattice:UpdateTargetGroup,
vpc-lattice:GetTargetGroup,
vpc-lattice:ListTargets,
vpc-lattice:RegisterTargets,
vpc-lattice:DeregisterTargets,
ec2:DescribeVpcs,
ec2:DescribeInstances,
ec2:DescribeSubnets,
ec2:DescribeAvailabilityZoneMappings,
elasticloadbalancing:DescribeLoadBalancers,
lambda:Invoke,
lambda:RemovePermission,
lambda:AddPermission,
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
vpc-lattice:ListTagsForResource
```

### Delete
```json
vpc-lattice:DeleteTargetGroup,
vpc-lattice:GetTargetGroup,
vpc-lattice:DeregisterTargets,
vpc-lattice:ListTargets,
lambda:RemovePermission
```

### List
```json
vpc-lattice:ListTargetGroups
```
