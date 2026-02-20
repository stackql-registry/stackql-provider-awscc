---
title: verified_access_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_endpoints
  - ec2
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

Creates, updates, deletes or gets a <code>verified_access_endpoint</code> resource or lists <code>verified_access_endpoints</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>verified_access_endpoints</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::EC2::VerifiedAccessEndpoint resource creates an AWS EC2 Verified Access Endpoint.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.verified_access_endpoints" /></td></tr>
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
    "name": "verified_access_endpoint_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access endpoint."
  },
  {
    "name": "verified_access_group_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access group."
  },
  {
    "name": "verified_access_instance_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access instance."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The endpoint status."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "The IDs of the security groups for the endpoint."
  },
  {
    "name": "network_interface_options",
    "type": "object",
    "description": "The options for network-interface type endpoint.",
    "children": [
      {
        "name": "network_interface_id",
        "type": "string",
        "description": "The ID of the network interface."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The IP port number."
      },
      {
        "name": "port_ranges",
        "type": "array",
        "description": "The list of port ranges.",
        "children": [
          {
            "name": "from_port",
            "type": "integer",
            "description": "The first port in the range."
          },
          {
            "name": "to_port",
            "type": "integer",
            "description": "The last port in the range."
          }
        ]
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The IP protocol."
      }
    ]
  },
  {
    "name": "load_balancer_options",
    "type": "object",
    "description": "The load balancer details if creating the AWS Verified Access endpoint as load-balancer type.",
    "children": [
      {
        "name": "load_balancer_arn",
        "type": "string",
        "description": "The ARN of the load balancer."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The IP port number."
      },
      {
        "name": "port_ranges",
        "type": "array",
        "description": "The list of port range.",
        "children": [
          {
            "name": "from_port",
            "type": "integer",
            "description": "The first port in the range."
          },
          {
            "name": "to_port",
            "type": "integer",
            "description": "The last port in the range."
          }
        ]
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The IP protocol."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The IDs of the subnets."
      }
    ]
  },
  {
    "name": "rds_options",
    "type": "object",
    "description": "The options for rds type endpoint.",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "The IP protocol."
      },
      {
        "name": "port",
        "type": "integer",
        "description": "The IP port number."
      },
      {
        "name": "rds_db_instance_arn",
        "type": "string",
        "description": "The ARN of the RDS DB instance."
      },
      {
        "name": "rds_db_cluster_arn",
        "type": "string",
        "description": "The ARN of the RDS DB cluster."
      },
      {
        "name": "rds_db_proxy_arn",
        "type": "string",
        "description": "The ARN of the RDS DB proxy."
      },
      {
        "name": "rds_endpoint",
        "type": "string",
        "description": "The RDS endpoint."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The IDs of the subnets."
      }
    ]
  },
  {
    "name": "cidr_options",
    "type": "object",
    "description": "The options for cidr type endpoint.",
    "children": [
      {
        "name": "cidr",
        "type": "string",
        "description": "The IP address range, in CIDR notation."
      },
      {
        "name": "port_ranges",
        "type": "array",
        "description": "The list of port range.",
        "children": [
          {
            "name": "from_port",
            "type": "integer",
            "description": "The first port in the range."
          },
          {
            "name": "to_port",
            "type": "integer",
            "description": "The last port in the range."
          }
        ]
      },
      {
        "name": "protocol",
        "type": "string",
        "description": "The IP protocol."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The IDs of the subnets."
      }
    ]
  },
  {
    "name": "endpoint_type",
    "type": "string",
    "description": "The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified."
  },
  {
    "name": "endpoint_domain",
    "type": "string",
    "description": "A DNS name that is generated for the endpoint."
  },
  {
    "name": "endpoint_domain_prefix",
    "type": "string",
    "description": "A custom identifier that gets prepended to a DNS name that is generated for the endpoint."
  },
  {
    "name": "device_validation_domain",
    "type": "string",
    "description": "Returned if endpoint has a device trust provider attached."
  },
  {
    "name": "domain_certificate_arn",
    "type": "string",
    "description": "The ARN of a public TLS/SSL certificate imported into or created with ACM."
  },
  {
    "name": "attachment_type",
    "type": "string",
    "description": "The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application."
  },
  {
    "name": "application_domain",
    "type": "string",
    "description": "The DNS name for users to reach your application."
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "The creation time."
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "The last updated time."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description for the AWS Verified Access endpoint."
  },
  {
    "name": "policy_document",
    "type": "string",
    "description": "The AWS Verified Access policy document."
  },
  {
    "name": "policy_enabled",
    "type": "boolean",
    "description": "The status of the Verified Access policy."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "sse_specification",
    "type": "object",
    "description": "The configuration options for customer provided KMS encryption.",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "KMS Key Arn used to encrypt the group policy"
      },
      {
        "name": "customer_managed_key_enabled",
        "type": "boolean",
        "description": "Whether to encrypt the policy with the provided key or disable encryption"
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
    "name": "verified_access_endpoint_id",
    "type": "string",
    "description": "The ID of the AWS Verified Access endpoint."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html"><code>AWS::EC2::VerifiedAccessEndpoint</code></a>.

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
    <td><code>verified_access_endpoints</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AttachmentType, EndpointType, VerifiedAccessGroupId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>verified_access_endpoints</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>verified_access_endpoints</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>verified_access_endpoints_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>verified_access_endpoints</code></td>
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

Gets all properties from an individual <code>verified_access_endpoint</code>.
```sql
SELECT
region,
verified_access_endpoint_id,
verified_access_group_id,
verified_access_instance_id,
status,
security_group_ids,
network_interface_options,
load_balancer_options,
rds_options,
cidr_options,
endpoint_type,
endpoint_domain,
endpoint_domain_prefix,
device_validation_domain,
domain_certificate_arn,
attachment_type,
application_domain,
creation_time,
last_updated_time,
description,
policy_document,
policy_enabled,
tags,
sse_specification
FROM awscc.ec2.verified_access_endpoints
WHERE region = 'us-east-1' AND Identifier = '<VerifiedAccessEndpointId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>verified_access_endpoints</code> in a region.
```sql
SELECT
region,
verified_access_endpoint_id
FROM awscc.ec2.verified_access_endpoints_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>verified_access_endpoint</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.verified_access_endpoints (
 VerifiedAccessGroupId,
 EndpointType,
 AttachmentType,
 region
)
SELECT 
'{{ VerifiedAccessGroupId }}',
 '{{ EndpointType }}',
 '{{ AttachmentType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.verified_access_endpoints (
 VerifiedAccessGroupId,
 SecurityGroupIds,
 NetworkInterfaceOptions,
 LoadBalancerOptions,
 RdsOptions,
 CidrOptions,
 EndpointType,
 EndpointDomainPrefix,
 DomainCertificateArn,
 AttachmentType,
 ApplicationDomain,
 Description,
 PolicyDocument,
 PolicyEnabled,
 Tags,
 SseSpecification,
 region
)
SELECT 
 '{{ VerifiedAccessGroupId }}',
 '{{ SecurityGroupIds }}',
 '{{ NetworkInterfaceOptions }}',
 '{{ LoadBalancerOptions }}',
 '{{ RdsOptions }}',
 '{{ CidrOptions }}',
 '{{ EndpointType }}',
 '{{ EndpointDomainPrefix }}',
 '{{ DomainCertificateArn }}',
 '{{ AttachmentType }}',
 '{{ ApplicationDomain }}',
 '{{ Description }}',
 '{{ PolicyDocument }}',
 '{{ PolicyEnabled }}',
 '{{ Tags }}',
 '{{ SseSpecification }}',
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
  - name: verified_access_endpoint
    props:
      - name: VerifiedAccessGroupId
        value: '{{ VerifiedAccessGroupId }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: NetworkInterfaceOptions
        value:
          NetworkInterfaceId: '{{ NetworkInterfaceId }}'
          Port: '{{ Port }}'
          PortRanges:
            - FromPort: '{{ FromPort }}'
              ToPort: '{{ ToPort }}'
          Protocol: '{{ Protocol }}'
      - name: LoadBalancerOptions
        value:
          LoadBalancerArn: '{{ LoadBalancerArn }}'
          Port: '{{ Port }}'
          PortRanges:
            - null
          Protocol: '{{ Protocol }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
      - name: RdsOptions
        value:
          Protocol: '{{ Protocol }}'
          Port: '{{ Port }}'
          RdsDbInstanceArn: '{{ RdsDbInstanceArn }}'
          RdsDbClusterArn: '{{ RdsDbClusterArn }}'
          RdsDbProxyArn: '{{ RdsDbProxyArn }}'
          RdsEndpoint: '{{ RdsEndpoint }}'
          SubnetIds:
            - null
      - name: CidrOptions
        value:
          Cidr: '{{ Cidr }}'
          PortRanges:
            - null
          Protocol: '{{ Protocol }}'
          SubnetIds:
            - null
      - name: EndpointType
        value: '{{ EndpointType }}'
      - name: EndpointDomainPrefix
        value: '{{ EndpointDomainPrefix }}'
      - name: DomainCertificateArn
        value: '{{ DomainCertificateArn }}'
      - name: AttachmentType
        value: '{{ AttachmentType }}'
      - name: ApplicationDomain
        value: '{{ ApplicationDomain }}'
      - name: Description
        value: '{{ Description }}'
      - name: PolicyDocument
        value: '{{ PolicyDocument }}'
      - name: PolicyEnabled
        value: '{{ PolicyEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SseSpecification
        value:
          KmsKeyArn: '{{ KmsKeyArn }}'
          CustomerManagedKeyEnabled: '{{ CustomerManagedKeyEnabled }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ec2.verified_access_endpoints
SET PatchDocument = string('{{ {
    "VerifiedAccessGroupId": verified_access_group_id,
    "Description": description,
    "PolicyDocument": policy_document,
    "PolicyEnabled": policy_enabled,
    "Tags": tags,
    "SseSpecification": sse_specification
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<VerifiedAccessEndpointId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.verified_access_endpoints
WHERE Identifier = '<VerifiedAccessEndpointId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>verified_access_endpoints</code> resource, the following permissions are required:

### Create
```json
ec2:CreateVerifiedAccessEndpoint,
ec2:DescribeVerifiedAccessEndpoints,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeNetworkInterfaces,
ec2:DescribeAccountAttributes,
ec2:CreateTags,
ec2:DescribeTags,
ec2:DescribeVpcs,
ec2:GetVerifiedAccessEndpointPolicy,
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeListenerCertificates,
iam:CreateServiceLinkedRole,
acm:DescribeCertificate,
sso:PutApplicationAccessScope,
sso:GetSharedSsoConfiguration,
sso:CreateManagedApplicationInstance,
sso:DeleteManagedApplicationInstance,
kms:DescribeKey,
kms:GenerateDataKey,
kms:RetireGrant,
kms:CreateGrant,
kms:Decrypt,
rds:DescribeDbInstances,
rds:DescribeDbProxies,
rds:DescribeDbClusters,
ec2:DescribeAvailabilityZones,
ec2:DescribeVpcEndpointServiceConfigurations
```

### Read
```json
ec2:DescribeVerifiedAccessEndpoints,
ec2:GetVerifiedAccessEndpointPolicy,
ec2:DescribeTags,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```

### Update
```json
ec2:ModifyVerifiedAccessEndpoint,
ec2:ModifyVerifiedAccessEndpointPolicy,
ec2:DescribeVerifiedAccessEndpoints,
ec2:GetVerifiedAccessEndpointPolicy,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
ec2:DescribeNetworkInterfaces,
ec2:DescribeVpcs,
ec2:DescribeTags,
ec2:DeleteTags,
ec2:CreateTags,
elasticloadbalancing:DescribeLoadBalancers,
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeListenerCertificates,
kms:DescribeKey,
kms:GenerateDataKey,
kms:RetireGrant,
kms:CreateGrant,
kms:Decrypt,
rds:DescribeDbInstances,
rds:DescribeDbProxies,
rds:DescribeDbClusters
```

### Delete
```json
ec2:DescribeVerifiedAccessEndpoints,
ec2:DeleteVerifiedAccessEndpoint,
ec2:GetVerifiedAccessEndpointPolicy,
ec2:DescribeTags,
ec2:DeleteTags,
sso:DeleteManagedApplicationInstance,
kms:DescribeKey,
kms:RetireGrant,
kms:Decrypt,
kms:GenerateDataKey
```

### List
```json
ec2:DescribeVerifiedAccessEndpoints,
ec2:GetVerifiedAccessEndpointPolicy,
ec2:DescribeTags,
kms:DescribeKey,
kms:Decrypt,
kms:GenerateDataKey
```
