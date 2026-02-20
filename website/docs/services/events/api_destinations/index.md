---
title: api_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - api_destinations
  - events
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

Creates, updates, deletes or gets an <code>api_destination</code> resource or lists <code>api_destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>api_destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Events::ApiDestination.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.events.api_destinations" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Name of the apiDestination."
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "connection_arn",
    "type": "string",
    "description": "The arn of the connection."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The arn of the api destination."
  },
  {
    "name": "arn_for_policy",
    "type": "string",
    "description": "The arn of the api destination to be used in IAM policies."
  },
  {
    "name": "invocation_rate_limit_per_second",
    "type": "integer",
    "description": ""
  },
  {
    "name": "invocation_endpoint",
    "type": "string",
    "description": "Url endpoint to invoke."
  },
  {
    "name": "http_method",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the apiDestination."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html"><code>AWS::Events::ApiDestination</code></a>.

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
    <td><code>api_destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConnectionArn, InvocationEndpoint, HttpMethod, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>api_destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>api_destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>api_destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>api_destinations</code></td>
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

Gets all properties from an individual <code>api_destination</code>.
```sql
SELECT
region,
name,
description,
connection_arn,
arn,
arn_for_policy,
invocation_rate_limit_per_second,
invocation_endpoint,
http_method
FROM awscc.events.api_destinations
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>api_destinations</code> in a region.
```sql
SELECT
region,
name
FROM awscc.events.api_destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>api_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.events.api_destinations (
 ConnectionArn,
 InvocationEndpoint,
 HttpMethod,
 region
)
SELECT 
'{{ ConnectionArn }}',
 '{{ InvocationEndpoint }}',
 '{{ HttpMethod }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.events.api_destinations (
 Name,
 Description,
 ConnectionArn,
 InvocationRateLimitPerSecond,
 InvocationEndpoint,
 HttpMethod,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ ConnectionArn }}',
 '{{ InvocationRateLimitPerSecond }}',
 '{{ InvocationEndpoint }}',
 '{{ HttpMethod }}',
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
  - name: api_destination
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: ConnectionArn
        value: '{{ ConnectionArn }}'
      - name: InvocationRateLimitPerSecond
        value: '{{ InvocationRateLimitPerSecond }}'
      - name: InvocationEndpoint
        value: '{{ InvocationEndpoint }}'
      - name: HttpMethod
        value: '{{ HttpMethod }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>api_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.events.api_destinations
SET PatchDocument = string('{{ {
    "Description": description,
    "ConnectionArn": connection_arn,
    "InvocationRateLimitPerSecond": invocation_rate_limit_per_second,
    "InvocationEndpoint": invocation_endpoint,
    "HttpMethod": http_method
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.events.api_destinations
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>api_destinations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
events:CreateApiDestination,
events:DescribeApiDestination
```

</TabItem>
<TabItem value="read">

```json
events:DescribeApiDestination
```

</TabItem>
<TabItem value="update">

```json
events:UpdateApiDestination,
events:DescribeApiDestination
```

</TabItem>
<TabItem value="delete">

```json
events:DeleteApiDestination,
events:DescribeApiDestination
```

</TabItem>
<TabItem value="list">

```json
events:ListApiDestinations
```

</TabItem>
</Tabs>