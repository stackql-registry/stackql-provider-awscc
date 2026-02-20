---
title: detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - detectors
  - guardduty
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

Creates, updates, deletes or gets a <code>detector</code> resource or lists <code>detectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>detectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GuardDuty::Detector</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.detectors" /></td></tr>
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
    "name": "finding_publishing_frequency",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "data_sources",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_logs",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enable",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "kubernetes",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "audit_logs",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enable",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "malware_protection",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "scan_ec2_instance_with_findings",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "ebs_volumes",
                "type": "boolean",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "features",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "status",
        "type": "string",
        "description": ""
      },
      {
        "name": "additional_configuration",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "status",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html"><code>AWS::GuardDuty::Detector</code></a>.

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
    <td><code>detectors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Enable, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>detectors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>detectors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>detectors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>detectors</code></td>
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

Gets all properties from an individual <code>detector</code>.
```sql
SELECT
region,
finding_publishing_frequency,
enable,
data_sources,
features,
id,
tags
FROM awscc.guardduty.detectors
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>detectors</code> in a region.
```sql
SELECT
region,
id
FROM awscc.guardduty.detectors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>detector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.guardduty.detectors (
 Enable,
 region
)
SELECT 
'{{ Enable }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.detectors (
 FindingPublishingFrequency,
 Enable,
 DataSources,
 Features,
 Tags,
 region
)
SELECT 
 '{{ FindingPublishingFrequency }}',
 '{{ Enable }}',
 '{{ DataSources }}',
 '{{ Features }}',
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
  - name: detector
    props:
      - name: FindingPublishingFrequency
        value: '{{ FindingPublishingFrequency }}'
      - name: Enable
        value: '{{ Enable }}'
      - name: DataSources
        value:
          S3Logs:
            Enable: '{{ Enable }}'
          Kubernetes:
            AuditLogs:
              Enable: '{{ Enable }}'
          MalwareProtection:
            ScanEc2InstanceWithFindings:
              EbsVolumes: '{{ EbsVolumes }}'
      - name: Features
        value:
          - Name: '{{ Name }}'
            Status: '{{ Status }}'
            AdditionalConfiguration:
              - Name: '{{ Name }}'
                Status: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.guardduty.detectors
SET PatchDocument = string('{{ {
    "FindingPublishingFrequency": finding_publishing_frequency,
    "Enable": enable,
    "DataSources": data_sources,
    "Features": features,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.detectors
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>detectors</code> resource, the following permissions are required:

### Create
```json
guardduty:CreateDetector,
guardduty:GetDetector,
guardduty:TagResource,
iam:CreateServiceLinkedRole,
iam:GetRole
```

### Read
```json
guardduty:GetDetector,
guardduty:ListTagsForResource
```

### Delete
```json
guardduty:ListDetectors,
guardduty:DeleteDetector,
guardduty:GetDetector
```

### Update
```json
guardduty:UpdateDetector,
guardduty:GetDetector,
guardduty:ListDetectors,
iam:CreateServiceLinkedRole,
iam:GetRole,
guardduty:TagResource,
guardduty:UntagResource
```

### List
```json
guardduty:ListDetectors
```
