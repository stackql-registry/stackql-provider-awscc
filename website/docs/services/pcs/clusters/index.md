---
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - pcs
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

Creates, updates, deletes or gets a <code>cluster</code> resource or lists <code>clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::PCS::Cluster resource creates an AWS PCS cluster.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcs.clusters" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "arn",
    "type": "string",
    "description": "The unique Amazon Resource Name (ARN) of the cluster."
  },
  {
    "name": "endpoints",
    "type": "array",
    "description": "The list of endpoints available for interaction with the scheduler.",
    "children": [
      {
        "name": "port",
        "type": "string",
        "description": "The endpoint's connection port number."
      },
      {
        "name": "private_ip_address",
        "type": "string",
        "description": "The endpoint's private IP address."
      },
      {
        "name": "ipv6_address",
        "type": "string",
        "description": "The endpoint's IPv6 address."
      },
      {
        "name": "type",
        "type": "string",
        "description": "Indicates the type of endpoint running at the specific IP address."
      },
      {
        "name": "public_ip_address",
        "type": "string",
        "description": "The endpoint's public IP address."
      }
    ]
  },
  {
    "name": "error_info",
    "type": "array",
    "description": "The list of errors that occurred during cluster provisioning.",
    "children": [
      {
        "name": "code",
        "type": "string",
        "description": "The short-form error code."
      },
      {
        "name": "message",
        "type": "string",
        "description": "The detailed error information."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The generated unique ID of the cluster."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name that identifies the cluster."
  },
  {
    "name": "networking",
    "type": "object",
    "description": "The networking configuration for the cluster's control plane.",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list."
      },
      {
        "name": "network_type",
        "type": "string",
        "description": "The IP of the cluster (IPV4 or IPV6)"
      }
    ]
  },
  {
    "name": "scheduler",
    "type": "object",
    "description": "The cluster management and job scheduling software associated with the cluster.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The software AWS PCS uses to manage cluster scaling and job scheduling."
      },
      {
        "name": "version",
        "type": "string",
        "description": "The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling."
      }
    ]
  },
  {
    "name": "size",
    "type": "string",
    "description": "The size of the cluster."
  },
  {
    "name": "slurm_configuration",
    "type": "object",
    "description": "Additional options related to the Slurm scheduler.",
    "children": [
      {
        "name": "accounting",
        "type": "object",
        "description": "The accounting configuration includes configurable settings for Slurm accounting.",
        "children": [
          {
            "name": "default_purge_time_in_days",
            "type": "integer",
            "description": "The default value for all purge settings for &#96;slurmdbd.conf&#96;. For more information, see the &#91;slurmdbd.conf documentation at SchedMD&#93;(https://slurm.schedmd.com/slurmdbd.conf.html). The default value is &#96;-1&#96;. A value of &#96;-1&#96; means there is no purge time and records persist as long as the cluster exists."
          },
          {
            "name": "mode",
            "type": "string",
            "description": "The default value is &#96;STANDARD&#96;. A value of &#96;STANDARD&#96; means that Slurm accounting is enabled."
          }
        ]
      },
      {
        "name": "auth_key",
        "type": "object",
        "description": "The shared Slurm key for authentication, also known as the cluster secret.",
        "children": [
          {
            "name": "secret_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the the shared Slurm key."
          },
          {
            "name": "secret_version",
            "type": "string",
            "description": "The version of the shared Slurm key."
          }
        ]
      },
      {
        "name": "scale_down_idle_time_in_seconds",
        "type": "integer",
        "description": "The time before an idle node is scaled down."
      },
      {
        "name": "slurm_custom_settings",
        "type": "array",
        "description": "Additional Slurm-specific configuration that directly maps to Slurm settings.",
        "children": [
          {
            "name": "parameter_value",
            "type": "string",
            "description": "The value for the configured Slurm setting."
          },
          {
            "name": "parameter_name",
            "type": "string",
            "description": "AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory."
          }
        ]
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The provisioning status of the cluster. The provisioning status doesn't indicate the overall health of the cluster."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html"><code>AWS::PCS::Cluster</code></a>.

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
    <td><CopyableCode code="Networking, Scheduler, Size, region" /></td>
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

Gets all properties from an individual <code>cluster</code>.
```sql
SELECT
region,
arn,
endpoints,
error_info,
id,
name,
networking,
scheduler,
size,
slurm_configuration,
status,
tags
FROM awscc.pcs.clusters
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcs.clusters (
 Networking,
 Scheduler,
 Size,
 region
)
SELECT 
'{{ Networking }}',
 '{{ Scheduler }}',
 '{{ Size }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcs.clusters (
 Name,
 Networking,
 Scheduler,
 Size,
 SlurmConfiguration,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Networking }}',
 '{{ Scheduler }}',
 '{{ Size }}',
 '{{ SlurmConfiguration }}',
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
  - name: cluster
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Networking
        value:
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
          NetworkType: '{{ NetworkType }}'
      - name: Scheduler
        value:
          Type: '{{ Type }}'
          Version: '{{ Version }}'
      - name: Size
        value: '{{ Size }}'
      - name: SlurmConfiguration
        value:
          Accounting:
            DefaultPurgeTimeInDays: '{{ DefaultPurgeTimeInDays }}'
            Mode: '{{ Mode }}'
          AuthKey:
            SecretArn: '{{ SecretArn }}'
            SecretVersion: '{{ SecretVersion }}'
          ScaleDownIdleTimeInSeconds: '{{ ScaleDownIdleTimeInSeconds }}'
          SlurmCustomSettings:
            - ParameterValue: '{{ ParameterValue }}'
              ParameterName: '{{ ParameterName }}'
      - name: Tags
        value: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcs.clusters
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>clusters</code> resource, the following permissions are required:

### Create
```json
ec2:CreateNetworkInterface,
ec2:DescribeVpcs,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:GetSecurityGroupsForVpc,
iam:CreateServiceLinkedRole,
secretsmanager:CreateSecret,
secretsmanager:TagResource,
pcs:CreateCluster,
pcs:GetCluster,
pcs:ListTagsForResource,
pcs:TagResource
```

### Read
```json
pcs:GetCluster,
pcs:ListTagsForResource
```

### Update
```json
pcs:GetCluster,
pcs:ListTagsForResource,
pcs:TagResource,
pcs:UntagResource
```

### Delete
```json
pcs:DeleteCluster,
pcs:GetCluster
```

### List
```json
pcs:ListClusters
```
