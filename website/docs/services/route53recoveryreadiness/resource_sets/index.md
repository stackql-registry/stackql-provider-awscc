---
title: resource_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_sets
  - route53recoveryreadiness
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

Creates, updates, deletes or gets a <code>resource_set</code> resource or lists <code>resource_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resource_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for the AWS Route53 Recovery Readiness ResourceSet Resource and API.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoveryreadiness.resource_sets" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "resource_set_name",
    "type": "string",
    "description": "The name of the resource set to create."
  },
  {
    "name": "resources",
    "type": "array",
    "description": "A list of resource objects in the resource set.",
    "children": [
      {
        "name": "resource_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the AWS resource."
      },
      {
        "name": "component_id",
        "type": "string",
        "description": "The component identifier of the resource, generated when DNS target resource is used."
      },
      {
        "name": "dns_target_resource",
        "type": "object",
        "description": "A component for DNS/routing control readiness checks.",
        "children": [
          {
            "name": "domain_name",
            "type": "string",
            "description": "The domain name that acts as an ingress point to a portion of the customer application."
          },
          {
            "name": "record_set_id",
            "type": "string",
            "description": "The Route 53 record set ID that will uniquely identify a DNS record, given a name and a type."
          },
          {
            "name": "hosted_zone_arn",
            "type": "string",
            "description": "The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource."
          },
          {
            "name": "record_type",
            "type": "string",
            "description": "The type of DNS record of the target resource."
          },
          {
            "name": "target_resource",
            "type": "object",
            "description": "The target resource that the Route 53 record points to.",
            "children": [
              {
                "name": "n_lb_resource",
                "type": "object",
                "description": "The Network Load Balancer resource that a DNS target resource points to."
              },
              {
                "name": "r53_resource",
                "type": "object",
                "description": "The Route 53 resource that a DNS target resource record points to."
              }
            ]
          }
        ]
      },
      {
        "name": "readiness_scopes",
        "type": "array",
        "description": "A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within."
      }
    ]
  },
  {
    "name": "resource_set_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the resource set."
  },
  {
    "name": "resource_set_type",
    "type": "string",
    "description": "The resource type of the resources in the resource set. Enter one of the following values for resource type: <br />AWS: :AutoScaling: :AutoScalingGroup, AWS: :CloudWatch: :Alarm, AWS: :EC2: :CustomerGateway, AWS: :DynamoDB: :Table, AWS: :EC2: :Volume, AWS: :ElasticLoadBalancing: :LoadBalancer, AWS: :ElasticLoadBalancingV2: :LoadBalancer, AWS: :MSK: :Cluster, AWS: :RDS: :DBCluster, AWS: :Route53: :HealthCheck, AWS: :SQS: :Queue, AWS: :SNS: :Topic, AWS: :SNS: :Subscription, AWS: :EC2: :VPC, AWS: :EC2: :VPNConnection, AWS: :EC2: :VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A tag to associate with the parameters for a resource set.",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html"><code>AWS::Route53RecoveryReadiness::ResourceSet</code></a>.

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
    <td><CopyableCode code="ResourceSetType, Resources, region" /></td>
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

Gets all properties from an individual <code>resource_set</code>.
```sql
SELECT
region,
resource_set_name,
resources,
resource_set_arn,
resource_set_type,
tags
FROM awscc.route53recoveryreadiness.resource_sets
WHERE region = 'us-east-1' AND data__Identifier = '<ResourceSetName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resource_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoveryreadiness.resource_sets (
 Resources,
 ResourceSetType,
 region
)
SELECT 
'{{ Resources }}',
 '{{ ResourceSetType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53recoveryreadiness.resource_sets (
 ResourceSetName,
 Resources,
 ResourceSetType,
 Tags,
 region
)
SELECT 
 '{{ ResourceSetName }}',
 '{{ Resources }}',
 '{{ ResourceSetType }}',
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
  - name: resource_set
    props:
      - name: ResourceSetName
        value: '{{ ResourceSetName }}'
      - name: Resources
        value:
          - ResourceArn: '{{ ResourceArn }}'
            ComponentId: '{{ ComponentId }}'
            DnsTargetResource:
              DomainName: '{{ DomainName }}'
              RecordSetId: '{{ RecordSetId }}'
              HostedZoneArn: '{{ HostedZoneArn }}'
              RecordType: '{{ RecordType }}'
              TargetResource:
                NLBResource:
                  Arn: '{{ Arn }}'
                R53Resource:
                  DomainName: '{{ DomainName }}'
                  RecordSetId: '{{ RecordSetId }}'
            ReadinessScopes:
              - '{{ ReadinessScopes[0] }}'
      - name: ResourceSetType
        value: '{{ ResourceSetType }}'
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
DELETE FROM awscc.route53recoveryreadiness.resource_sets
WHERE data__Identifier = '<ResourceSetName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resource_sets</code> resource, the following permissions are required:

### Create
```json
route53-recovery-readiness:CreateResourceSet,
route53-recovery-readiness:GetResourceSet,
route53-recovery-readiness:GetRecoveryGroup,
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource
```

### Read
```json
route53-recovery-readiness:GetResourceSet,
route53-recovery-readiness:ListTagsForResources
```

### Update
```json
route53-recovery-readiness:UpdateResourceSet,
route53-recovery-readiness:GetResourceSet,
route53-recovery-readiness:GetRecoveryGroup,
route53-recovery-readiness:GetCell,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource,
route53-recovery-readiness:UntagResource
```

### Delete
```json
route53-recovery-readiness:DeleteResourceSet,
route53-recovery-readiness:GetResourceSet
```

### List
```json
route53-recovery-readiness:ListResourceSets
```
