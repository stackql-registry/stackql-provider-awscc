---
title: service_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - service_profiles
  - iotwireless
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

Creates, updates, deletes or gets a <code>service_profile</code> resource or lists <code>service_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotwireless.service_profiles" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of service profile"
  },
  {
    "name": "lo_ra_wan",
    "type": "object",
    "description": "LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation",
    "children": [
      {
        "name": "ul_rate",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ul_bucket_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "ul_rate_policy",
        "type": "string",
        "description": ""
      },
      {
        "name": "dl_rate",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dl_bucket_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dl_rate_policy",
        "type": "string",
        "description": ""
      },
      {
        "name": "add_gw_metadata",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dev_status_req_freq",
        "type": "integer",
        "description": ""
      },
      {
        "name": "report_dev_status_battery",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "report_dev_status_margin",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dr_min",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dr_max",
        "type": "integer",
        "description": ""
      },
      {
        "name": "channel_mask",
        "type": "string",
        "description": ""
      },
      {
        "name": "pr_allowed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "hr_allowed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ra_allowed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "nwk_geo_loc",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "target_per",
        "type": "integer",
        "description": ""
      },
      {
        "name": "min_gw_diversity",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the service profile.",
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
    "name": "arn",
    "type": "string",
    "description": "Service profile Arn. Returned after successful create."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Service profile Id. Returned after successful create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html"><code>AWS::IoTWireless::ServiceProfile</code></a>.

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
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>service_profile</code>.
```sql
SELECT
region,
name,
lo_ra_wan,
tags,
arn,
id
FROM awscc.iotwireless.service_profiles
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotwireless.service_profiles (
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
INSERT INTO awscc.iotwireless.service_profiles (
 Name,
 LoRaWAN,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ LoRaWAN }}',
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
  - name: service_profile
    props:
      - name: Name
        value: '{{ Name }}'
      - name: LoRaWAN
        value:
          UlRate: '{{ UlRate }}'
          UlBucketSize: '{{ UlBucketSize }}'
          UlRatePolicy: '{{ UlRatePolicy }}'
          DlRate: '{{ DlRate }}'
          DlBucketSize: '{{ DlBucketSize }}'
          DlRatePolicy: '{{ DlRatePolicy }}'
          AddGwMetadata: '{{ AddGwMetadata }}'
          DevStatusReqFreq: '{{ DevStatusReqFreq }}'
          ReportDevStatusBattery: '{{ ReportDevStatusBattery }}'
          ReportDevStatusMargin: '{{ ReportDevStatusMargin }}'
          DrMin: '{{ DrMin }}'
          DrMax: '{{ DrMax }}'
          ChannelMask: '{{ ChannelMask }}'
          PrAllowed: '{{ PrAllowed }}'
          HrAllowed: '{{ HrAllowed }}'
          RaAllowed: '{{ RaAllowed }}'
          NwkGeoLoc: '{{ NwkGeoLoc }}'
          TargetPer: '{{ TargetPer }}'
          MinGwDiversity: '{{ MinGwDiversity }}'
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
DELETE FROM awscc.iotwireless.service_profiles
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_profiles</code> resource, the following permissions are required:

### Create
```json
iotwireless:CreateServiceProfile,
iotwireless:TagResource
```

### Update
```json
iotwireless:GetServiceProfile,
iotwireless:TagResource,
iotwireless:UntagResource
```

### Read
```json
iotwireless:GetServiceProfile,
iotwireless:ListTagsForResource
```

### Delete
```json
iotwireless:DeleteServiceProfile
```

### List
```json
iotwireless:ListServiceProfiles,
iotwireless:ListTagsForResource
```
