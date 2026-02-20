---
title: zonal_autoshift_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - zonal_autoshift_configurations
  - arczonalshift
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

Creates, updates, deletes or gets a <code>zonal_autoshift_configuration</code> resource or lists <code>zonal_autoshift_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>zonal_autoshift_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ARCZonalShift::ZonalAutoshiftConfiguration Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.arczonalshift.zonal_autoshift_configurations" /></td></tr>
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
    "name": "zonal_autoshift_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "practice_run_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "blocking_alarms",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": ""
          },
          {
            "name": "alarm_identifier",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "outcome_alarms",
        "type": "array",
        "description": ""
      },
      {
        "name": "blocked_dates",
        "type": "array",
        "description": ""
      },
      {
        "name": "blocked_windows",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "resource_identifier",
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
    "name": "resource_identifier",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html"><code>AWS::ARCZonalShift::ZonalAutoshiftConfiguration</code></a>.

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
    <td><code>zonal_autoshift_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>zonal_autoshift_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>zonal_autoshift_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>zonal_autoshift_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>zonal_autoshift_configurations</code></td>
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

Gets all properties from an individual <code>zonal_autoshift_configuration</code>.
```sql
SELECT
region,
zonal_autoshift_status,
practice_run_configuration,
resource_identifier
FROM awscc.arczonalshift.zonal_autoshift_configurations
WHERE region = 'us-east-1' AND Identifier = '<ResourceIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>zonal_autoshift_configurations</code> in a region.
```sql
SELECT
region,
resource_identifier
FROM awscc.arczonalshift.zonal_autoshift_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>zonal_autoshift_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.arczonalshift.zonal_autoshift_configurations (
 ZonalAutoshiftStatus,
 PracticeRunConfiguration,
 ResourceIdentifier,
 region
)
SELECT 
'{{ ZonalAutoshiftStatus }}',
 '{{ PracticeRunConfiguration }}',
 '{{ ResourceIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.arczonalshift.zonal_autoshift_configurations (
 ZonalAutoshiftStatus,
 PracticeRunConfiguration,
 ResourceIdentifier,
 region
)
SELECT 
 '{{ ZonalAutoshiftStatus }}',
 '{{ PracticeRunConfiguration }}',
 '{{ ResourceIdentifier }}',
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
  - name: zonal_autoshift_configuration
    props:
      - name: ZonalAutoshiftStatus
        value: '{{ ZonalAutoshiftStatus }}'
      - name: PracticeRunConfiguration
        value:
          BlockingAlarms:
            - Type: '{{ Type }}'
              AlarmIdentifier: '{{ AlarmIdentifier }}'
          OutcomeAlarms:
            - null
          BlockedDates:
            - '{{ BlockedDates[0] }}'
          BlockedWindows:
            - '{{ BlockedWindows[0] }}'
      - name: ResourceIdentifier
        value: '{{ ResourceIdentifier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.arczonalshift.zonal_autoshift_configurations
SET PatchDocument = string('{{ {
    "ZonalAutoshiftStatus": zonal_autoshift_status,
    "PracticeRunConfiguration": practice_run_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ResourceIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.arczonalshift.zonal_autoshift_configurations
WHERE Identifier = '<ResourceIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>zonal_autoshift_configurations</code> resource, the following permissions are required:

### Create
```json
arc-zonal-shift:CreatePracticeRunConfiguration,
arc-zonal-shift:GetManagedResource,
arc-zonal-shift:UpdateZonalAutoshiftConfiguration,
cloudwatch:DescribeAlarms,
iam:CreateServiceLinkedRole
```

### Read
```json
arc-zonal-shift:GetManagedResource
```

### Update
```json
arc-zonal-shift:GetManagedResource,
arc-zonal-shift:UpdatePracticeRunConfiguration,
arc-zonal-shift:UpdateZonalAutoshiftConfiguration,
cloudwatch:DescribeAlarms
```

### Delete
```json
arc-zonal-shift:DeletePracticeRunConfiguration,
arc-zonal-shift:GetManagedResource,
arc-zonal-shift:UpdateZonalAutoshiftConfiguration
```

### List
```json
arc-zonal-shift:ListManagedResources
```
