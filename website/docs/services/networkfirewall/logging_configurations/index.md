---
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
  - networkfirewall
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

Creates, updates, deletes or gets a <code>logging_configuration</code> resource or lists <code>logging_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>logging_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::NetworkFirewall::LoggingConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkfirewall.logging_configurations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "firewall_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "firewall_arn",
    "type": "string",
    "description": "A resource ARN."
  },
  {
    "name": "logging_configuration",
    "type": "object",
    "description": "Resource type definition for AWS::NetworkFirewall::LoggingConfiguration",
    "children": [
      {
        "name": "firewall_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "enable_monitoring_dashboard",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "enable_monitoring_dashboard",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html"><code>AWS::NetworkFirewall::LoggingConfiguration</code></a>.

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
    <td><CopyableCode code="FirewallArn, LoggingConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>logging_configuration</code>.
```sql
SELECT
region,
firewall_name,
firewall_arn,
logging_configuration,
enable_monitoring_dashboard
FROM awscc.networkfirewall.logging_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ firewall_arn }}';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>logging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkfirewall.logging_configurations (
 FirewallArn,
 LoggingConfiguration,
 region
)
SELECT
'{{ firewall_arn }}',
 '{{ logging_configuration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkfirewall.logging_configurations (
 FirewallName,
 FirewallArn,
 LoggingConfiguration,
 EnableMonitoringDashboard,
 region
)
SELECT
 '{{ firewall_name }}',
 '{{ firewall_arn }}',
 '{{ logging_configuration }}',
 '{{ enable_monitoring_dashboard }}',
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
  - name: logging_configuration
    props:
      - name: firewall_name
        value: '{{ firewall_name }}'
      - name: firewall_arn
        value: '{{ firewall_arn }}'
      - name: logging_configuration
        value:
          firewall_name: '{{ firewall_name }}'
          firewall_arn: null
          logging_configuration: null
          enable_monitoring_dashboard: '{{ enable_monitoring_dashboard }}'
      - name: enable_monitoring_dashboard
        value: '{{ enable_monitoring_dashboard }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>logging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.networkfirewall.logging_configurations
SET PatchDocument = string('{{ {
    "LoggingConfiguration": logging_configuration,
    "EnableMonitoringDashboard": enable_monitoring_dashboard
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ firewall_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkfirewall.logging_configurations
WHERE Identifier = '{{ firewall_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>logging_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
iam:CreateServiceLinkedRole,
firehose:TagDeliveryStream,
network-firewall:UpdateLoggingConfiguration,
network-firewall:DescribeLoggingConfiguration
```

</TabItem>
<TabItem value="read">

```json
logs:GetLogDelivery,
logs:ListLogDeliveries,
network-firewall:DescribeLoggingConfiguration
```

</TabItem>
<TabItem value="update">

```json
logs:CreateLogDelivery,
logs:DeleteLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:ListLogDeliveries,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
iam:CreateServiceLinkedRole,
firehose:TagDeliveryStream,
network-firewall:UpdateLoggingConfiguration,
network-firewall:DescribeLoggingConfiguration
```

</TabItem>
<TabItem value="delete">

```json
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:GetLogDelivery,
network-firewall:UpdateLoggingConfiguration,
network-firewall:DescribeLoggingConfiguration
```

</TabItem>
</Tabs>