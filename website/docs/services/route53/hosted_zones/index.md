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
<tr><td><b>Description</b></td><td>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). <br />You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.<br />For more information about charges for hosted zones, see &#91;Amazon Route 53 Pricing&#93;(https://docs.aws.amazon.com/route53/pricing/).<br />Note the following:<br />+ You can't create a hosted zone for a top-level domain (TLD) such as .com.<br />+ If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see &#91;Migrating DNS Service for an Existing Domain to Amazon Route 53&#93;(https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html) in the &#42;Amazon Route 53 Developer Guide&#42;. <br /><br />When you submit a &#96;&#96;CreateHostedZone&#96;&#96; request, the initial status of the hosted zone is &#96;&#96;PENDING&#96;&#96;. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to &#96;&#96;INSYNC&#96;&#96;.<br />The &#96;&#96;CreateHostedZone&#96;&#96; request requires the caller to have an &#96;&#96;ec2:DescribeVpcs&#96;&#96; permission.<br />When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition.<br />The following are the supported partitions:<br />+ &#96;&#96;aws&#96;&#96; - AWS-Regions<br />+ &#96;&#96;aws-cn&#96;&#96; - China Regions<br />+ &#96;&#96;aws-us-gov&#96;&#96; - govcloud-us-region<br /><br />For more information, see &#91;Access Management&#93;(https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the &#42;General Reference&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.hosted_zones" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "hosted_zone_tags",
    "type": "array",
    "description": "Adds, edits, or deletes tags for a health check or a hosted zone.<br />For information about using tags for cost allocation, see &#91;Using Cost Allocation Tags&#93;(https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the &#42;User Guide&#42;.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value of &#96;&#96;Value&#96;&#96; depends on the operation that you want to perform:<br />+ &#42;Add a tag to a health check or hosted zone&#42;: &#96;&#96;Value&#96;&#96; is the value that you want to give the new tag.<br />+ &#42;Edit a tag&#42;: &#96;&#96;Value&#96;&#96; is the new value that you want to assign the tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The value of &#96;&#96;Key&#96;&#96; depends on the operation that you want to perform:<br />+ &#42;Add a tag to a health check or hosted zone&#42;: &#96;&#96;Key&#96;&#96; is the name that you want to give the new tag.<br />+ &#42;Edit a tag&#42;: &#96;&#96;Key&#96;&#96; is the name of the tag that you want to change the &#96;&#96;Value&#96;&#96; for.<br />+ &#42;Delete a key&#42;: &#96;&#96;Key&#96;&#96; is the name of the tag you want to remove.<br />+ &#42;Give a name to a health check&#42;: Edit the default &#96;&#96;Name&#96;&#96; tag. In the Amazon Route 53 console, the list of your health checks includes a &#42;Name&#42; column that lets you see the name that you've given to each health check."
      }
    ]
  },
  {
    "name": "vpcs",
    "type": "array",
    "description": "&#42;Private hosted zones:&#42; A complex type that contains information about the VPCs that are associated with the specified hosted zone.<br />For public hosted zones, omit &#96;&#96;VPCs&#96;&#96;, &#96;&#96;VPCId&#96;&#96;, and &#96;&#96;VPCRegion&#96;&#96;.",
    "children": [
      {
        "name": "vpc_region",
        "type": "string",
        "description": "&#42;Private hosted zones only:&#42; The region that an Amazon VPC was created in.<br />For public hosted zones, omit &#96;&#96;VPCs&#96;&#96;, &#96;&#96;VPCId&#96;&#96;, and &#96;&#96;VPCRegion&#96;&#96;."
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": "&#42;Private hosted zones only:&#42; The ID of an Amazon VPC.<br />For public hosted zones, omit &#96;&#96;VPCs&#96;&#96;, &#96;&#96;VPCId&#96;&#96;, and &#96;&#96;VPCRegion&#96;&#96;."
      }
    ]
  },
  {
    "name": "hosted_zone_config",
    "type": "object",
    "description": "A complex type that contains an optional comment.<br />If you don't want to specify a comment, omit the &#96;&#96;HostedZoneConfig&#96;&#96; and &#96;&#96;Comment&#96;&#96; elements.",
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
    "description": "Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.<br />DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:<br />+ Route 53 edge location that responded to the DNS query<br />+ Domain or subdomain that was requested<br />+ DNS record type, such as A or AAAA<br />+ DNS response code, such as &#96;&#96;NoError&#96;&#96; or &#96;&#96;ServFail&#96;&#96;<br /><br />+ Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with &#42;, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/&#42; To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see \"The Route 53 Global Network\" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.",
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
    "description": "The name of the domain. Specify a fully qualified domain name, for example, &#42;www.example.com&#42;. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats &#42;www.example.com&#42; (without a trailing dot) and &#42;www.example.com.&#42; (with a trailing dot) as identical.<br />If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of &#96;&#96;NameServers&#96;&#96; that are returned by the &#96;&#96;Fn::GetAtt&#96;&#96; intrinsic function."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html"><code>AWS::Route53::HostedZone</code></a>.

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
    <td><CopyableCode code="region" /></td>
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
WHERE data__Identifier = '<Id>';
```

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
'{{ HostedZoneTags }}',
 '{{ VPCs }}',
 '{{ HostedZoneConfig }}',
 '{{ QueryLoggingConfig }}',
 '{{ Name }}',
'{{ region }}';
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
 '{{ HostedZoneTags }}',
 '{{ VPCs }}',
 '{{ HostedZoneConfig }}',
 '{{ QueryLoggingConfig }}',
 '{{ Name }}',
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
  - name: hosted_zone
    props:
      - name: HostedZoneTags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: VPCs
        value:
          - VPCRegion: '{{ VPCRegion }}'
            VPCId: '{{ VPCId }}'
      - name: HostedZoneConfig
        value:
          Comment: '{{ Comment }}'
      - name: QueryLoggingConfig
        value:
          CloudWatchLogsLogGroupArn: '{{ CloudWatchLogsLogGroupArn }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53.hosted_zones
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hosted_zones</code> resource, the following permissions are required:

### Read
```json
route53:GetHostedZone,
route53:ListTagsForResource,
route53:ListQueryLoggingConfigs
```

### Create
```json
route53:CreateHostedZone,
route53:CreateQueryLoggingConfig,
route53:ChangeTagsForResource,
route53:GetChange,
route53:AssociateVPCWithHostedZone,
ec2:DescribeVpcs
```

### Update
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

### List
```json
route53:GetHostedZone,
route53:ListHostedZones,
route53:ListQueryLoggingConfigs,
route53:ListTagsForResource
```

### Delete
```json
route53:DeleteHostedZone,
route53:DeleteQueryLoggingConfig,
route53:ListQueryLoggingConfigs,
route53:GetChange
```
