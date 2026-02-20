---
title: log_anomaly_detection_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - log_anomaly_detection_integrations
  - devopsguru
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

Creates, updates, deletes or gets a <code>log_anomaly_detection_integration</code> resource or lists <code>log_anomaly_detection_integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>log_anomaly_detection_integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>This resource schema represents the LogAnomalyDetectionIntegration resource in the Amazon DevOps Guru.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.devopsguru.log_anomaly_detection_integrations" /></td></tr>
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
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as the primary identifier for the resource"
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
    "name": "account_id",
    "type": "string",
    "description": "User account id, used as the primary identifier for the resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html"><code>AWS::DevOpsGuru::LogAnomalyDetectionIntegration</code></a>.

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
    <td><code>log_anomaly_detection_integrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>log_anomaly_detection_integrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>log_anomaly_detection_integrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>log_anomaly_detection_integrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>log_anomaly_detection_integrations</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>log_anomaly_detection_integration</code>.
```sql
SELECT
region,
account_id
FROM awscc.devopsguru.log_anomaly_detection_integrations
WHERE region = 'us-east-1' AND data__Identifier = '<AccountId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>log_anomaly_detection_integrations</code> in a region.
```sql
SELECT
region,
account_id
FROM awscc.devopsguru.log_anomaly_detection_integrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>log_anomaly_detection_integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.devopsguru.log_anomaly_detection_integrations (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.devopsguru.log_anomaly_detection_integrations (
 ,
 region
)
SELECT 
 '{{  }}',
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
  - name: log_anomaly_detection_integration
    props: []

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.devopsguru.log_anomaly_detection_integrations
WHERE data__Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>log_anomaly_detection_integrations</code> resource, the following permissions are required:

### Create
```json
devops-guru:DescribeServiceIntegration,
devops-guru:UpdateServiceIntegration,
logs:TagLogGroup,
logs:UntagLogGroup
```

### Read
```json
devops-guru:DescribeServiceIntegration
```

### Update
```json
devops-guru:UpdateServiceIntegration,
logs:TagLogGroup,
logs:UntagLogGroup
```

### Delete
```json
devops-guru:DescribeServiceIntegration,
devops-guru:UpdateServiceIntegration,
logs:TagLogGroup,
logs:UntagLogGroup
```

### List
```json
devops-guru:DescribeServiceIntegration
```
