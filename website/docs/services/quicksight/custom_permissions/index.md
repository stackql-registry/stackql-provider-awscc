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
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>custom_permissions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ aws_account_id }}|{{ custom_permissions_name }}';
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
'{{ aws_account_id }}',
 '{{ custom_permissions_name }}',
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
 '{{ aws_account_id }}',
 '{{ capabilities }}',
 '{{ custom_permissions_name }}',
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
  - name: custom_permission
    props:
      - name: aws_account_id
        value: '{{ aws_account_id }}'
      - name: capabilities
        value:
          export_to_csv: '{{ export_to_csv }}'
          export_to_excel: null
          export_to_pdf: null
          print_reports: null
          create_and_update_themes: null
          add_or_run_anomaly_detection_for_analyses: null
          share_analyses: null
          create_and_update_datasets: null
          share_datasets: null
          subscribe_dashboard_email_reports: null
          create_and_update_dashboard_email_reports: null
          share_dashboards: null
          create_and_update_threshold_alerts: null
          rename_shared_folders: null
          create_shared_folders: null
          create_and_update_data_sources: null
          share_data_sources: null
          view_account_sp_ic_ecapacity: null
          create_sp_ic_edataset: null
          export_to_pdf_in_scheduled_reports: null
          export_to_csv_in_scheduled_reports: null
          export_to_excel_in_scheduled_reports: null
          include_content_in_scheduled_reports_email: null
      - name: custom_permissions_name
        value: '{{ custom_permissions_name }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>custom_permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.quicksight.custom_permissions
SET PatchDocument = string('{{ {
    "Capabilities": capabilities,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ aws_account_id }}|{{ custom_permissions_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.custom_permissions
WHERE Identifier = '{{ aws_account_id }}|{{ custom_permissions_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>custom_permissions</code> resource, the following permissions are required:

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
quicksight:CreateCustomPermissions,
quicksight:TagResource
```

</TabItem>
<TabItem value="read">

```json
quicksight:DescribeCustomPermissions,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
quicksight:UpdateCustomPermissions,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DeleteCustomPermissions
```

</TabItem>
<TabItem value="list">

```json
quicksight:ListCustomPermissions
```

</TabItem>
</Tabs>