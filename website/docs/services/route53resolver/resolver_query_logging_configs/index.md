---
title: resolver_query_logging_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_query_logging_configs
  - route53resolver
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

Creates, updates, deletes or gets a <code>resolver_query_logging_config</code> resource or lists <code>resolver_query_logging_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resolver_query_logging_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.resolver_query_logging_configs" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "ResourceId"
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "AccountId"
  },
  {
    "name": "status",
    "type": "string",
    "description": "ResolverQueryLogConfigStatus, possible values are CREATING, CREATED, DELETED AND FAILED."
  },
  {
    "name": "share_status",
    "type": "string",
    "description": "ShareStatus, possible values are NOT&#95;SHARED, SHARED&#95;WITH&#95;ME, SHARED&#95;BY&#95;ME."
  },
  {
    "name": "association_count",
    "type": "integer",
    "description": "Count"
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Arn"
  },
  {
    "name": "name",
    "type": "string",
    "description": "ResolverQueryLogConfigName"
  },
  {
    "name": "creator_request_id",
    "type": "string",
    "description": "The id of the creator request."
  },
  {
    "name": "destination_arn",
    "type": "string",
    "description": "destination arn"
  },
  {
    "name": "creation_time",
    "type": "string",
    "description": "Rfc3339TimeString"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html"><code>AWS::Route53Resolver::ResolverQueryLoggingConfig</code></a>.

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

Gets all properties from an individual <code>resolver_query_logging_config</code>.
```sql
SELECT
region,
id,
owner_id,
status,
share_status,
association_count,
arn,
name,
creator_request_id,
destination_arn,
creation_time,
tags
FROM awscc.route53resolver.resolver_query_logging_configs
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resolver_query_logging_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.resolver_query_logging_configs (
 Name,
 DestinationArn,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ DestinationArn }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.resolver_query_logging_configs (
 Name,
 DestinationArn,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ DestinationArn }}',
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
  - name: resolver_query_logging_config
    props:
      - name: Name
        value: '{{ Name }}'
      - name: DestinationArn
        value: '{{ DestinationArn }}'
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
DELETE FROM awscc.route53resolver.resolver_query_logging_configs
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resolver_query_logging_configs</code> resource, the following permissions are required:

### Create
```json
resolverquerylogging:CreateConfig,
resolverquerylogging:GetConfig,
route53resolver:CreateResolverQueryLogConfig,
route53resolver:GetResolverQueryLogConfig,
logs:CreateLogDelivery,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:DeleteLogDelivery,
logs:ListLogDeliveries,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
iam:CreateServiceLinkedRole,
route53resolver:ListTagsForResource,
route53resolver:TagResource,
route53resolver:ListResolverQueryLogConfigs
```

### Read
```json
resolverquerylogging:GetConfig,
route53resolver:GetResolverQueryLogConfig,
route53resolver:ListTagsForResource,
route53resolver:ListResolverQueryLogConfigs
```

### Delete
```json
resolverquerylogging:DeleteConfig,
resolverquerylogging:ListConfig,
route53resolver:DeleteResolverQueryLogConfig,
route53resolver:ListResolverQueryLogConfigs,
route53resolver:UntagResource,
route53resolver:ListTagsForResource
```

### List
```json
resolverquerylogging:ListConfig,
route53resolver:ListResolverQueryLogConfigs,
route53resolver:ListTagsForResource
```
