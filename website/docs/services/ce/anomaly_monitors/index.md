---
title: anomaly_monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - anomaly_monitors
  - ce
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

Creates, updates, deletes or gets an <code>anomaly_monitor</code> resource or lists <code>anomaly_monitors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>anomaly_monitors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. You can use Cost Anomaly Detection by creating monitor.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ce.anomaly_monitors" /></td></tr>
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
    "name": "monitor_arn",
    "type": "string",
    "description": "Subscription ARN"
  },
  {
    "name": "monitor_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "monitor_name",
    "type": "string",
    "description": "The name of the monitor."
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": "The date when the monitor was created."
  },
  {
    "name": "last_evaluated_date",
    "type": "string",
    "description": "The date when the monitor last evaluated for anomalies."
  },
  {
    "name": "last_updated_date",
    "type": "string",
    "description": "The date when the monitor was last updated."
  },
  {
    "name": "monitor_dimension",
    "type": "string",
    "description": "The dimensions to evaluate"
  },
  {
    "name": "monitor_specification",
    "type": "string",
    "description": ""
  },
  {
    "name": "dimensional_value_count",
    "type": "integer",
    "description": "The value for evaluated dimensions."
  },
  {
    "name": "resource_tags",
    "type": "array",
    "description": "Tags to assign to monitor.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name for the tag."
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
    "name": "monitor_arn",
    "type": "string",
    "description": "Subscription ARN"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html"><code>AWS::CE::AnomalyMonitor</code></a>.

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
    <td><code>anomaly_monitors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="MonitorName, MonitorType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>anomaly_monitors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>anomaly_monitors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>anomaly_monitors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>anomaly_monitors</code></td>
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

Gets all properties from an individual <code>anomaly_monitor</code>.
```sql
SELECT
region,
monitor_arn,
monitor_type,
monitor_name,
creation_date,
last_evaluated_date,
last_updated_date,
monitor_dimension,
monitor_specification,
dimensional_value_count,
resource_tags
FROM awscc.ce.anomaly_monitors
WHERE region = 'us-east-1' AND Identifier = '<MonitorArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>anomaly_monitors</code> in a region.
```sql
SELECT
region,
monitor_arn
FROM awscc.ce.anomaly_monitors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>anomaly_monitor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ce.anomaly_monitors (
 MonitorType,
 MonitorName,
 region
)
SELECT 
'{{ MonitorType }}',
 '{{ MonitorName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ce.anomaly_monitors (
 MonitorType,
 MonitorName,
 MonitorDimension,
 MonitorSpecification,
 ResourceTags,
 region
)
SELECT 
 '{{ MonitorType }}',
 '{{ MonitorName }}',
 '{{ MonitorDimension }}',
 '{{ MonitorSpecification }}',
 '{{ ResourceTags }}',
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
  - name: anomaly_monitor
    props:
      - name: MonitorType
        value: '{{ MonitorType }}'
      - name: MonitorName
        value: '{{ MonitorName }}'
      - name: MonitorDimension
        value: '{{ MonitorDimension }}'
      - name: MonitorSpecification
        value: '{{ MonitorSpecification }}'
      - name: ResourceTags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ce.anomaly_monitors
SET PatchDocument = string('{{ {
    "MonitorName": monitor_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<MonitorArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ce.anomaly_monitors
WHERE Identifier = '<MonitorArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>anomaly_monitors</code> resource, the following permissions are required:

### Create
```json
ce:CreateAnomalyMonitor,
ce:TagResource
```

### Read
```json
ce:GetAnomalyMonitors,
ce:ListTagsForResource
```

### Update
```json
ce:UpdateAnomalyMonitor
```

### Delete
```json
ce:DeleteAnomalyMonitor
```

### List
```json
ce:GetAnomalyMonitors
```
