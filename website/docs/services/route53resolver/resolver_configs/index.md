---
title: resolver_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_configs
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

Creates, updates, deletes or gets a <code>resolver_config</code> resource or lists <code>resolver_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>resolver_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Route53Resolver::ResolverConfig.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53resolver.resolver_configs" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Id"
  },
  {
    "name": "owner_id",
    "type": "string",
    "description": "AccountId"
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "ResourceId"
  },
  {
    "name": "autodefined_reverse",
    "type": "string",
    "description": "ResolverAutodefinedReverseStatus, possible values are ENABLING, ENABLED, DISABLING AND DISABLED."
  },
  {
    "name": "autodefined_reverse_flag",
    "type": "string",
    "description": "Represents the desired status of AutodefinedReverse. The only supported value on creation is DISABLE. Deletion of this resource will return AutodefinedReverse to its default value (ENABLED)."
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
    "description": "Id"
  },
  {
    "name": "resource_id",
    "type": "string",
    "description": "ResourceId"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html"><code>AWS::Route53Resolver::ResolverConfig</code></a>.

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
    <td><code>resolver_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceId, AutodefinedReverseFlag, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>resolver_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>resolver_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>resolver_configs</code></td>
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

Gets all properties from an individual <code>resolver_config</code>.
```sql
SELECT
region,
id,
owner_id,
resource_id,
autodefined_reverse,
autodefined_reverse_flag
FROM awscc.route53resolver.resolver_configs
WHERE region = 'us-east-1' AND Identifier = '<ResourceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>resolver_configs</code> in a region.
```sql
SELECT
region,
resource_id
FROM awscc.route53resolver.resolver_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>resolver_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53resolver.resolver_configs (
 ResourceId,
 AutodefinedReverseFlag,
 region
)
SELECT 
'{{ ResourceId }}',
 '{{ AutodefinedReverseFlag }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53resolver.resolver_configs (
 ResourceId,
 AutodefinedReverseFlag,
 region
)
SELECT 
 '{{ ResourceId }}',
 '{{ AutodefinedReverseFlag }}',
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
  - name: resolver_config
    props:
      - name: ResourceId
        value: '{{ ResourceId }}'
      - name: AutodefinedReverseFlag
        value: '{{ AutodefinedReverseFlag }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53resolver.resolver_configs
WHERE Identifier = '<ResourceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>resolver_configs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
route53resolver:UpdateResolverConfig,
route53resolver:GetResolverConfig,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="read">

```json
route53resolver:GetResolverConfig,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="delete">

```json
route53resolver:UpdateResolverConfig,
route53resolver:ListResolverConfigs,
ec2:DescribeVpcs
```

</TabItem>
<TabItem value="list">

```json
route53resolver:ListResolverConfigs,
ec2:DescribeVpcs
```

</TabItem>
</Tabs>