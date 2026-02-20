---
title: custom_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_permissions
  - quicksight
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

Creates, updates, deletes or gets a <code>custom_permission</code> resource or lists <code>custom_permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>custom_permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::CustomPermissions Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.custom_permissions" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "capabilities",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "export_to_csv",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "custom_permissions_name",
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
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
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
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "custom_permissions_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermission.html"><code>AWS::QuickSight::CustomPermissions</code></a>.

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
    <td><code>custom_permissions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AwsAccountId, CustomPermissionsName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>custom_permissions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>custom_permissions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>custom_permissions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>custom_permissions</code></td>
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

Gets all properties from an individual <code>custom_permission</code>.
```sql
SELECT
region,
arn,
aws_account_id,
capabilities,
custom_permissions_name,
tags
FROM awscc.quicksight.custom_permissions
WHERE region = 'us-east-1' AND data__Identifier = '<AwsAccountId>|<CustomPermissionsName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>custom_permissions</code> in a region.
```sql
SELECT
region,
aws_account_id,
custom_permissions_name
FROM awscc.quicksight.custom_permissions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>custom_permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.quicksight.custom_permissions (
 AwsAccountId,
 CustomPermissionsName,
 region
)
SELECT 
'{{ AwsAccountId }}',
 '{{ CustomPermissionsName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.custom_permissions (
 AwsAccountId,
 Capabilities,
 CustomPermissionsName,
 Tags,
 region
)
SELECT 
 '{{ AwsAccountId }}',
 '{{ Capabilities }}',
 '{{ CustomPermissionsName }}',
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
  - name: custom_permission
    props:
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: Capabilities
        value:
          ExportToCsv: '{{ ExportToCsv }}'
          ExportToExcel: null
          ExportToPdf: null
          PrintReports: null
          CreateAndUpdateThemes: null
          AddOrRunAnomalyDetectionForAnalyses: null
          ShareAnalyses: null
          CreateAndUpdateDatasets: null
          ShareDatasets: null
          SubscribeDashboardEmailReports: null
          CreateAndUpdateDashboardEmailReports: null
          ShareDashboards: null
          CreateAndUpdateThresholdAlerts: null
          RenameSharedFolders: null
          CreateSharedFolders: null
          CreateAndUpdateDataSources: null
          ShareDataSources: null
          ViewAccountSPICECapacity: null
          CreateSPICEDataset: null
          ExportToPdfInScheduledReports: null
          ExportToCsvInScheduledReports: null
          ExportToExcelInScheduledReports: null
          IncludeContentInScheduledReportsEmail: null
      - name: CustomPermissionsName
        value: '{{ CustomPermissionsName }}'
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
UPDATE awscc.quicksight.custom_permissions
SET data__PatchDocument = string('{{ {
    "Capabilities": capabilities,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<AwsAccountId>|<CustomPermissionsName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.custom_permissions
WHERE data__Identifier = '<AwsAccountId|CustomPermissionsName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_permissions</code> resource, the following permissions are required:

### Create
```json
quicksight:CreateCustomPermissions,
quicksight:TagResource
```

### Read
```json
quicksight:DescribeCustomPermissions,
quicksight:ListTagsForResource
```

### Update
```json
quicksight:UpdateCustomPermissions,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource
```

### Delete
```json
quicksight:DeleteCustomPermissions
```

### List
```json
quicksight:ListCustomPermissions
```
