---
title: hosted_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zones
  - route53
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>hosted_zone</code> resource or lists <code>hosted_zones</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hosted_zones</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs).</summary>You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.<br />For more information about charges for hosted zones, see <a href="https://docs.aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.<br />Note the following:<br />+  You can't create a hosted zone for a top-level domain (TLD) such as .com.<br />+  If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.<br />When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.<br />The <code>CreateHostedZone</code> request requires the caller to have an <code>ec2:DescribeVpcs</code> permission.<br />When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition.<br />The following are the supported partitions:<br />+  <code>aws</code> - AWS-Regions<br />+  <code>aws-cn</code> - China Regions<br />+  <code>aws-us-gov</code> - govcloud-us-region<br />For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>General Reference</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.hosted_zones" /></td></tr>
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
    "name": "hosted_zone_tags",
    "type": "array",
    "description": "<details><summary>Adds, edits, or deletes tags for a health check or a hosted zone.</summary>For information about using tags for cost allocation, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html\">Using Cost Allocation Tags</a> in the <i>User Guide</i>.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "<details><summary>The value of <code>Value</code> depends on the operation that you want to perform:</summary>+  <i>Add a tag to a health check or hosted zone</i>: <code>Value</code> is the value that you want to give the new tag.<br />+  <i>Edit a tag</i>: <code>Value</code> is the new value that you want to assign the tag.</details>"
      },
      {
        "name": "key",
        "type": "string",
        "description": "<details><summary>The value of <code>Key</code> depends on the operation that you want to perform:</summary>+  <i>Add a tag to a health check or hosted zone</i>: <code>Key</code> is the name that you want to give the new tag.<br />+  <i>Edit a tag</i>: <code>Key</code> is the name of the tag that you want to change the <code>Value</code> for.<br />+  <i>Delete a key</i>: <code>Key</code> is the name of the tag you want to remove.<br />+  <i>Give a name to a health check</i>: Edit the default <code>Name</code> tag. In the Amazon Route 53 console, the list of your health checks includes a <i>Name</i> column that lets you see the name that you've given to each health check.</details>"
      }
    ]
  },
  {
    "name": "vpcs",
    "type": "array",
    "description": "<details><summary><i>Private hosted zones:</i> A complex type that contains information about the VPCs that are associated with the specified hosted zone.</summary>For public hosted zones, omit <code>VPCs</code>, <code>VPCId</code>, and <code>VPCRegion</code>.</details>",
    "children": [
      {
        "name": "vpc_region",
        "type": "string",
        "description": "<details><summary><i>Private hosted zones only:</i> The region that an Amazon VPC was created in.</summary>For public hosted zones, omit <code>VPCs</code>, <code>VPCId</code>, and <code>VPCRegion</code>.</details>"
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": "<details><summary><i>Private hosted zones only:</i> The ID of an Amazon VPC.</summary>For public hosted zones, omit <code>VPCs</code>, <code>VPCId</code>, and <code>VPCRegion</code>.</details>"
      }
    ]
  },
  {
    "name": "hosted_zone_config",
    "type": "object",
    "description": "<details><summary>A complex type that contains an optional comment.</summary>If you don't want to specify a comment, omit the <code>HostedZoneConfig</code> and <code>Comment</code> elements.</details>",
    "children": [
      {
        "name": "comment",
        "type": "string",
        "description": "Any comments that you want to include about the hosted zone."
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name_servers",
    "type": "array",
    "description": ""
  },
  {
    "name": "query_logging_config",
    "type": "object",
    "description": "<details><summary>Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.</summary>DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:<br />+  Route 53 edge location that responded to the DNS query<br />+  Domain or subdomain that was requested<br />+  DNS record type, such as A or AAAA<br />+  DNS response code, such as <code>NoError</code> or <code>ServFail</code><br />+ Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with <i>, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/</i> To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see \"The Route 53 Global Network\" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.</details>",
    "children": [
      {
        "name": "cloud_watch_logs_log_group_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "<details><summary>The name of the domain. Specify a fully qualified domain name, for example, <i>www.example.com</i>. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats <i>www.example.com</i> (without a trailing dot) and <i>www.example.com.</i> (with a trailing dot) as identical.</summary>If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of <code>NameServers</code> that are returned by the <code>Fn::GetAtt</code> intrinsic function.</details>"
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html"><code>AWS::Route53::HostedZone</code></a>.

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
    <td><code>hosted_zones</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hosted_zones</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hosted_zones</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hosted_zones_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hosted_zones</code></td>
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

Gets all properties from an individual <code>hosted_zone</code>.
```sql
SELECT
  region,
  hosted_zone_tags,
  vpcs,
  hosted_zone_config,
  id,
  name_servers,
  query_logging_config,
  name
FROM awscc.route53.hosted_zones
WHERE
  region = 'us-east-1' AND
  Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>hosted_zones</code> in a region.
```sql
SELECT
  region,
  id
FROM awscc.route53.hosted_zones_list_only
WHERE
  region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hosted_zone</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53.hosted_zones (
  HostedZoneTags,
  VPCs,
  HostedZoneConfig,
  QueryLoggingConfig,
  Name,
  region
)
SELECT
  '{{ hosted_zone_tags }}',
  '{{ vpcs }}',
  '{{ hosted_zone_config }}',
  '{{ query_logging_config }}',
  '{{ name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53.hosted_zones (
  HostedZoneTags,
  VPCs,
  HostedZoneConfig,
  QueryLoggingConfig,
  Name,
  region
)
SELECT
  '{{ hosted_zone_tags }}',
  '{{ vpcs }}',
  '{{ hosted_zone_config }}',
  '{{ query_logging_config }}',
  '{{ name }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: hosted_zone
    props:
      - name: hosted_zone_tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: vpcs
        value:
          - vpc_region: '{{ vpc_region }}'
            vpc_id: '{{ vpc_id }}'
      - name: hosted_zone_config
        value:
          comment: '{{ comment }}'
      - name: query_logging_config
        value:
          cloud_watch_logs_log_group_arn: '{{ cloud_watch_logs_log_group_arn }}'
      - name: name
        value: '{{ name }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>hosted_zone</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53.hosted_zones
SET PatchDocument = string('{{ {
    "HostedZoneTags": hosted_zone_tags,
    "VPCs": vpcs,
    "HostedZoneConfig": hosted_zone_config,
    "QueryLoggingConfig": query_logging_config
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ id }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53.hosted_zones
WHERE
  Identifier = '{{ id }}' AND
  region = 'us-east-1'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>hosted_zones</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
route53:GetHostedZone,
route53:ListTagsForResource,
route53:ListQueryLoggingConfigs
```

</TabItem>
<TabItem value="create">

```json
route53:CreateHostedZone,
route53:CreateQueryLoggingConfig,
route53:ChangeTagsForResource,
route53:GetChange,
route53:AssociateVPCWithHostedZone,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="update">

```json
route53:GetChange,
route53:GetHostedZone,
route53:ListTagsForResource,
route53:ListQueryLoggingConfigs,
route53:UpdateHostedZoneComment,
route53:ChangeTagsForResource,
route53:AssociateVPCWithHostedZone,
route53:DisassociateVPCFromHostedZone,
route53:CreateQueryLoggingConfig,
route53:DeleteQueryLoggingConfig,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="list">

```json
route53:GetHostedZone,
route53:ListHostedZones,
route53:ListQueryLoggingConfigs,
route53:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
route53:DeleteHostedZone,
route53:DeleteQueryLoggingConfig,
route53:ListQueryLoggingConfigs,
route53:GetChange
```

</TabItem>
</Tabs>