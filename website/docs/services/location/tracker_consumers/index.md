---
title: tracker_consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - tracker_consumers
  - location
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

Creates, updates, deletes or gets a <code>tracker_consumer</code> resource or lists <code>tracker_consumers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tracker_consumers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Location::TrackerConsumer Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.location.tracker_consumers" /></td></tr>
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
    "name": "consumer_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tracker_name",
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
    "name": "consumer_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tracker_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html"><code>AWS::Location::TrackerConsumer</code></a>.

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
    <td><code>tracker_consumers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConsumerArn, TrackerName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>tracker_consumers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>tracker_consumers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>tracker_consumers</code></td>
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

Gets all properties from an individual <code>tracker_consumer</code>.
```sql
SELECT
region,
consumer_arn,
tracker_name
FROM awscc.location.tracker_consumers
WHERE region = 'us-east-1' AND Identifier = '{{ tracker_name }}|{{ consumer_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>tracker_consumers</code> in a region.
```sql
SELECT
region,
tracker_name,
consumer_arn
FROM awscc.location.tracker_consumers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>tracker_consumer</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.location.tracker_consumers (
 ConsumerArn,
 TrackerName,
 region
)
SELECT
'{{ consumer_arn }}',
 '{{ tracker_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.location.tracker_consumers (
 ConsumerArn,
 TrackerName,
 region
)
SELECT
 '{{ consumer_arn }}',
 '{{ tracker_name }}',
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
  - name: tracker_consumer
    props:
      - name: consumer_arn
        value: '{{ consumer_arn }}'
      - name: tracker_name
        value: '{{ tracker_name }}'
```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.location.tracker_consumers
WHERE Identifier = '{{ tracker_name }}|{{ consumer_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>tracker_consumers</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
    ]
}>
<TabItem value="create">

```json
geo:AssociateTrackerConsumer,
geo:ListTrackerConsumers
```

</TabItem>
<TabItem value="delete">

```json
geo:DisassociateTrackerConsumer,
geo:ListTrackerConsumers
```

</TabItem>
<TabItem value="list">

```json
geo:ListTrackerConsumers
```

</TabItem>
<TabItem value="read">

```json
geo:ListTrackerConsumers
```

</TabItem>
</Tabs>