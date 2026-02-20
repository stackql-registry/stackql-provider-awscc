---
title: protections
hide_title: false
hide_table_of_contents: false
keywords:
  - protections
  - shield
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

Creates, updates, deletes or gets a <code>protection</code> resource or lists <code>protections</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>protections</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, AWS Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.shield.protections" /></td></tr>
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
    "name": "protection_id",
    "type": "string",
    "description": "The unique identifier (ID) of the protection."
  },
  {
    "name": "protection_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the protection."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Friendly name for the Protection."
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the resource to be protected."
  },
  {
    "name": "health_check_arns",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the health check to associate with the protection."
  },
  {
    "name": "application_layer_automatic_response_configuration",
    "type": "object",
    "description": "The automatic application layer DDoS mitigation settings for a Protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.",
    "children": [
      {
        "name": "action",
        "type": "object",
        "description": "Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource."
      },
      {
        "name": "status",
        "type": "string",
        "description": "Indicates whether automatic application layer DDoS mitigation is enabled for the protection."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tag key-value pairs for the Protection object.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as \"customer.\" Tag keys are case-sensitive."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as \"companyA\" or \"companyB.\" Tag values are case-sensitive."
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
    "name": "protection_arn",
    "type": "string",
    "description": "The ARN (Amazon Resource Name) of the protection."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-protection.html"><code>AWS::Shield::Protection</code></a>.

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
    <td><code>protections</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ResourceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>protections</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>protections</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>protections_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>protections</code></td>
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

Gets all properties from an individual <code>protection</code>.
```sql
SELECT
region,
protection_id,
protection_arn,
name,
resource_arn,
health_check_arns,
application_layer_automatic_response_configuration,
tags
FROM awscc.shield.protections
WHERE Identifier = '<ProtectionArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>protections</code> in a region.
```sql
SELECT
region,
protection_arn
FROM awscc.shield.protections_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>protection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.shield.protections (
 Name,
 ResourceArn,
 region
)
SELECT 
'{{ Name }}',
 '{{ ResourceArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.shield.protections (
 Name,
 ResourceArn,
 HealthCheckArns,
 ApplicationLayerAutomaticResponseConfiguration,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ ResourceArn }}',
 '{{ HealthCheckArns }}',
 '{{ ApplicationLayerAutomaticResponseConfiguration }}',
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
  - name: protection
    props:
      - name: Name
        value: '{{ Name }}'
      - name: ResourceArn
        value: '{{ ResourceArn }}'
      - name: HealthCheckArns
        value:
          - '{{ HealthCheckArns[0] }}'
      - name: ApplicationLayerAutomaticResponseConfiguration
        value:
          Action: {}
          Status: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>protection</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.shield.protections
SET PatchDocument = string('{{ {
    "HealthCheckArns": health_check_arns,
    "ApplicationLayerAutomaticResponseConfiguration": application_layer_automatic_response_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ProtectionArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.shield.protections
WHERE Identifier = '<ProtectionArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>protections</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
shield:CreateProtection,
shield:DeleteProtection,
shield:DescribeProtection,
shield:ListProtections,
shield:EnableApplicationLayerAutomaticResponse,
shield:AssociateHealthCheck,
shield:TagResource,
ec2:DescribeAddresses,
elasticloadbalancing:DescribeLoadBalancers,
route53:GetHealthCheck,
iam:GetRole,
iam:CreateServiceLinkedRole,
wafv2:GetWebACLForResource,
wafv2:GetWebACL
```

</TabItem>
<TabItem value="delete">

```json
shield:DeleteProtection,
shield:UntagResource
```

</TabItem>
<TabItem value="read">

```json
shield:DescribeProtection,
shield:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
shield:DescribeProtection,
shield:AssociateHealthCheck,
shield:DisassociateHealthCheck,
shield:EnableApplicationLayerAutomaticResponse,
shield:UpdateApplicationLayerAutomaticResponse,
shield:DisableApplicationLayerAutomaticResponse,
shield:ListTagsForResource,
shield:TagResource,
shield:UntagResource,
route53:GetHealthCheck,
iam:GetRole,
iam:CreateServiceLinkedRole,
wafv2:GetWebACLForResource,
wafv2:GetWebACL
```

</TabItem>
<TabItem value="list">

```json
shield:ListProtections
```

</TabItem>
</Tabs>