---
title: health_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - health_checks
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

Creates, updates, deletes or gets a <code>health_check</code> resource or lists <code>health_checks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>health_checks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53::HealthCheck.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53.health_checks" /></td></tr>
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
    "name": "health_check_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "health_check_config",
    "type": "object",
    "description": "A complex type that contains information about the health check.",
    "children": [
      {
        "name": "alarm_identifier",
        "type": "object",
        "description": "A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy."
          },
          {
            "name": "region",
            "type": "string",
            "description": "For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in."
          }
        ]
      },
      {
        "name": "child_health_checks",
        "type": "array",
        "description": ""
      },
      {
        "name": "enable_sn_i",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "failure_threshold",
        "type": "integer",
        "description": ""
      },
      {
        "name": "fully_qualified_domain_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "health_threshold",
        "type": "integer",
        "description": ""
      },
      {
        "name": "insufficient_data_health_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "inverted",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ip_address",
        "type": "string",
        "description": ""
      },
      {
        "name": "measure_latency",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "port",
        "type": "integer",
        "description": ""
      },
      {
        "name": "regions",
        "type": "array",
        "description": ""
      },
      {
        "name": "request_interval",
        "type": "integer",
        "description": ""
      },
      {
        "name": "resource_path",
        "type": "string",
        "description": ""
      },
      {
        "name": "search_string",
        "type": "string",
        "description": ""
      },
      {
        "name": "routing_control_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "type",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "health_check_tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
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
    "name": "health_check_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html"><code>AWS::Route53::HealthCheck</code></a>.

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
    <td><code>health_checks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="HealthCheckConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>health_checks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>health_checks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>health_checks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>health_checks</code></td>
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

Gets all properties from an individual <code>health_check</code>.
```sql
SELECT
region,
health_check_id,
health_check_config,
health_check_tags
FROM awscc.route53.health_checks
WHERE Identifier = '<HealthCheckId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>health_checks</code> in a region.
```sql
SELECT
region,
health_check_id
FROM awscc.route53.health_checks_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>health_check</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53.health_checks (
 HealthCheckConfig,
 region
)
SELECT 
'{{ HealthCheckConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53.health_checks (
 HealthCheckConfig,
 HealthCheckTags,
 region
)
SELECT 
 '{{ HealthCheckConfig }}',
 '{{ HealthCheckTags }}',
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
  - name: health_check
    props:
      - name: HealthCheckConfig
        value:
          AlarmIdentifier:
            Name: '{{ Name }}'
            Region: '{{ Region }}'
          ChildHealthChecks:
            - '{{ ChildHealthChecks[0] }}'
          EnableSNI: '{{ EnableSNI }}'
          FailureThreshold: '{{ FailureThreshold }}'
          FullyQualifiedDomainName: '{{ FullyQualifiedDomainName }}'
          HealthThreshold: '{{ HealthThreshold }}'
          InsufficientDataHealthStatus: '{{ InsufficientDataHealthStatus }}'
          Inverted: '{{ Inverted }}'
          IPAddress: '{{ IPAddress }}'
          MeasureLatency: '{{ MeasureLatency }}'
          Port: '{{ Port }}'
          Regions:
            - '{{ Regions[0] }}'
          RequestInterval: '{{ RequestInterval }}'
          ResourcePath: '{{ ResourcePath }}'
          SearchString: '{{ SearchString }}'
          RoutingControlArn: '{{ RoutingControlArn }}'
          Type: '{{ Type }}'
      - name: HealthCheckTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.route53.health_checks
SET PatchDocument = string('{{ {
    "HealthCheckTags": health_check_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<HealthCheckId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53.health_checks
WHERE Identifier = '<HealthCheckId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>health_checks</code> resource, the following permissions are required:

### Create
```json
route53:CreateHealthCheck,
route53:ChangeTagsForResource,
cloudwatch:DescribeAlarms,
route53-recovery-control-config:DescribeRoutingControl
```

### Read
```json
route53:GetHealthCheck,
route53:ListTagsForResource
```

### Update
```json
route53:UpdateHealthCheck,
route53:ChangeTagsForResource,
route53:ListTagsForResource,
cloudwatch:DescribeAlarms
```

### Delete
```json
route53:DeleteHealthCheck
```

### List
```json
route53:ListHealthChecks,
route53:ListTagsForResource
```
