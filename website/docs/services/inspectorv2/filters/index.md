---
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
  - inspectorv2
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

Creates, updates, deletes or gets a <code>filter</code> resource or lists <code>filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Inspector Filter resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.inspectorv2.filters" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Findings filter name."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Findings filter description."
  },
  {
    "name": "filter_criteria",
    "type": "object",
    "description": "Findings filter criteria.",
    "children": [
      {
        "name": "aws_account_id",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "comparison",
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
        "name": "ecr_image_pushed_at",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "end_inclusive",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "epss_score",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "lower_inclusive",
            "type": "number",
            "description": ""
          },
          {
            "name": "upper_inclusive",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "port_range",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "begin_inclusive",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "resource_tags",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "comparison",
            "type": "string",
            "description": ""
          },
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
        "name": "vulnerable_packages",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "filter_action",
    "type": "string",
    "description": "Findings filter action."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Findings filter ARN."
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html"><code>AWS::InspectorV2::Filter</code></a>.

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
    <td><CopyableCode code="Name, FilterCriteria, FilterAction, region" /></td>
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

Gets all properties from an individual <code>filter</code>.
```sql
SELECT
region,
name,
description,
filter_criteria,
filter_action,
arn,
tags
FROM awscc.inspectorv2.filters
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.inspectorv2.filters (
 Name,
 FilterCriteria,
 FilterAction,
 region
)
SELECT 
'{{ Name }}',
 '{{ FilterCriteria }}',
 '{{ FilterAction }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.inspectorv2.filters (
 Name,
 Description,
 FilterCriteria,
 FilterAction,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ FilterCriteria }}',
 '{{ FilterAction }}',
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
  - name: filter
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: FilterCriteria
        value:
          AwsAccountId:
            - Comparison: '{{ Comparison }}'
              Value: '{{ Value }}'
          CodeVulnerabilityDetectorName: null
          CodeVulnerabilityDetectorTags: null
          CodeVulnerabilityFilePath: null
          ComponentId: null
          ComponentType: null
          Ec2InstanceImageId: null
          Ec2InstanceSubnetId: null
          Ec2InstanceVpcId: null
          EcrImageArchitecture: null
          EcrImageHash: null
          EcrImagePushedAt:
            - EndInclusive: '{{ EndInclusive }}'
              StartInclusive: null
          EcrImageRegistry: null
          EcrImageRepositoryName: null
          EcrImageTags: null
          EpssScore:
            - LowerInclusive: null
              UpperInclusive: null
          ExploitAvailable: null
          FindingArn: null
          FindingStatus: null
          FindingType: null
          FirstObservedAt: null
          FixAvailable: null
          InspectorScore: null
          LambdaFunctionExecutionRoleArn: null
          LambdaFunctionLastModifiedAt: null
          LambdaFunctionLayers: null
          LambdaFunctionName: null
          LambdaFunctionRuntime: null
          LastObservedAt: null
          NetworkProtocol: null
          PortRange:
            - BeginInclusive: '{{ BeginInclusive }}'
              EndInclusive: null
          RelatedVulnerabilities: null
          ResourceId: null
          ResourceTags:
            - Comparison: '{{ Comparison }}'
              Key: '{{ Key }}'
              Value: '{{ Value }}'
          ResourceType: null
          Severity: null
          Title: null
          UpdatedAt: null
          VendorSeverity: null
          VulnerabilityId: null
          VulnerabilitySource: null
          VulnerablePackages:
            - Architecture: null
              Epoch: null
              FilePath: null
              Name: null
              Release: null
              SourceLambdaLayerArn: null
              SourceLayerHash: null
              Version: null
      - name: FilterAction
        value: '{{ FilterAction }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.inspectorv2.filters
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>filters</code> resource, the following permissions are required:

### Create
```json
inspector2:CreateFilter,
inspector2:ListFilters,
inspector2:TagResource
```

### Read
```json
inspector2:ListFilters,
inspector2:ListTagsForResource
```

### Update
```json
inspector2:ListFilters,
inspector2:UpdateFilter,
inspector2:TagResource,
inspector2:UntagResource,
inspector2:ListTagsForResource
```

### Delete
```json
inspector2:DeleteFilter,
inspector2:ListFilters
```

### List
```json
inspector2:ListFilters
```
