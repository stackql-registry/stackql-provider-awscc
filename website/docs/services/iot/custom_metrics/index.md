---
title: custom_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_metrics
  - iot
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

Creates, updates, deletes or gets a <code>custom_metric</code> resource or lists <code>custom_metrics</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_metrics</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A custom metric published by your devices to Device Defender.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.custom_metrics" /></td></tr>
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
    "name": "metric_name",
    "type": "string",
    "description": "The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined."
  },
  {
    "name": "display_name",
    "type": "string",
    "description": "Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined."
  },
  {
    "name": "metric_type",
    "type": "string",
    "description": "The type of the custom metric. Types include string-list, ip-address-list, number-list, and number."
  },
  {
    "name": "metric_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the custom metric."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "metric_name",
    "type": "string",
    "description": "The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html"><code>AWS::IoT::CustomMetric</code></a>.

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
    <td><code>custom_metrics</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MetricType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>custom_metrics</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>custom_metrics</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>custom_metrics_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>custom_metrics</code></td>
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

Gets all properties from an individual <code>custom_metric</code>.
```sql
SELECT
region,
metric_name,
display_name,
metric_type,
metric_arn,
tags
FROM awscc.iot.custom_metrics
WHERE region = 'us-east-1' AND Identifier = '{{ metric_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>custom_metrics</code> in a region.
```sql
SELECT
region,
metric_name
FROM awscc.iot.custom_metrics_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_metric</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.custom_metrics (
 MetricType,
 region
)
SELECT
'{{ metric_type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.custom_metrics (
 MetricName,
 DisplayName,
 MetricType,
 Tags,
 region
)
SELECT
 '{{ metric_name }}',
 '{{ display_name }}',
 '{{ metric_type }}',
 '{{ tags }}',
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
  - name: custom_metric
    props:
      - name: metric_name
        value: '{{ metric_name }}'
      - name: display_name
        value: '{{ display_name }}'
      - name: metric_type
        value: '{{ metric_type }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>custom_metric</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.custom_metrics
SET PatchDocument = string('{{ {
    "DisplayName": display_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ metric_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.custom_metrics
WHERE Identifier = '{{ metric_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_metrics</code> resource, the following permissions are required:

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
iot:CreateCustomMetric,
iot:TagResource
```

</TabItem>
<TabItem value="read">

```json
iot:DescribeCustomMetric,
iot:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iot:UpdateCustomMetric,
iot:ListTagsForResource,
iot:UntagResource,
iot:TagResource
```

</TabItem>
<TabItem value="delete">

```json
iot:DescribeCustomMetric,
iot:DeleteCustomMetric
```

</TabItem>
<TabItem value="list">

```json
iot:ListCustomMetrics
```

</TabItem>
</Tabs>