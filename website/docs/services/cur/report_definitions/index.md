---
title: report_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - report_definitions
  - cur
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

Creates, updates, deletes or gets a <code>report_definition</code> resource or lists <code>report_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>report_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::CUR::ReportDefinition resource creates a Cost & Usage Report with user-defined settings. You can use this resource to define settings like time granularity (hourly, daily, monthly), file format (Parquet, CSV), and S3 bucket for delivery of these reports.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cur.report_definitions" /></td></tr>
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
    "name": "report_name",
    "type": "string",
    "description": "The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces."
  },
  {
    "name": "time_unit",
    "type": "string",
    "description": "The granularity of the line items in the report."
  },
  {
    "name": "format",
    "type": "string",
    "description": "The format that AWS saves the report in."
  },
  {
    "name": "compression",
    "type": "string",
    "description": "The compression format that AWS uses for the report."
  },
  {
    "name": "additional_schema_elements",
    "type": "array",
    "description": "A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs."
  },
  {
    "name": "s3_bucket",
    "type": "string",
    "description": "The S3 bucket where AWS delivers the report."
  },
  {
    "name": "s3_prefix",
    "type": "string",
    "description": "The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces."
  },
  {
    "name": "s3_region",
    "type": "string",
    "description": "The region of the S3 bucket that AWS delivers the report into."
  },
  {
    "name": "additional_artifacts",
    "type": "array",
    "description": "A list of manifests that you want Amazon Web Services to create for this report."
  },
  {
    "name": "refresh_closed_reports",
    "type": "boolean",
    "description": "Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees."
  },
  {
    "name": "report_versioning",
    "type": "string",
    "description": "Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions."
  },
  {
    "name": "billing_view_arn",
    "type": "string",
    "description": "The Amazon resource name of the billing view. You can get this value by using the billing view service public APIs."
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
    "name": "report_name",
    "type": "string",
    "description": "The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html"><code>AWS::CUR::ReportDefinition</code></a>.

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
    <td><code>report_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ReportName, TimeUnit, Format, Compression, S3Bucket, S3Prefix, S3Region, RefreshClosedReports, ReportVersioning, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>report_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>report_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>report_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>report_definitions</code></td>
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

Gets all properties from an individual <code>report_definition</code>.
```sql
SELECT
region,
report_name,
time_unit,
format,
compression,
additional_schema_elements,
s3_bucket,
s3_prefix,
s3_region,
additional_artifacts,
refresh_closed_reports,
report_versioning,
billing_view_arn
FROM awscc.cur.report_definitions
WHERE region = 'us-east-1' AND Identifier = '<ReportName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>report_definitions</code> in a region.
```sql
SELECT
region,
report_name
FROM awscc.cur.report_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>report_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cur.report_definitions (
 ReportName,
 TimeUnit,
 Format,
 Compression,
 S3Bucket,
 S3Prefix,
 S3Region,
 RefreshClosedReports,
 ReportVersioning,
 region
)
SELECT 
'{{ ReportName }}',
 '{{ TimeUnit }}',
 '{{ Format }}',
 '{{ Compression }}',
 '{{ S3Bucket }}',
 '{{ S3Prefix }}',
 '{{ S3Region }}',
 '{{ RefreshClosedReports }}',
 '{{ ReportVersioning }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cur.report_definitions (
 ReportName,
 TimeUnit,
 Format,
 Compression,
 AdditionalSchemaElements,
 S3Bucket,
 S3Prefix,
 S3Region,
 AdditionalArtifacts,
 RefreshClosedReports,
 ReportVersioning,
 BillingViewArn,
 region
)
SELECT 
 '{{ ReportName }}',
 '{{ TimeUnit }}',
 '{{ Format }}',
 '{{ Compression }}',
 '{{ AdditionalSchemaElements }}',
 '{{ S3Bucket }}',
 '{{ S3Prefix }}',
 '{{ S3Region }}',
 '{{ AdditionalArtifacts }}',
 '{{ RefreshClosedReports }}',
 '{{ ReportVersioning }}',
 '{{ BillingViewArn }}',
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
  - name: report_definition
    props:
      - name: ReportName
        value: '{{ ReportName }}'
      - name: TimeUnit
        value: '{{ TimeUnit }}'
      - name: Format
        value: '{{ Format }}'
      - name: Compression
        value: '{{ Compression }}'
      - name: AdditionalSchemaElements
        value:
          - '{{ AdditionalSchemaElements[0] }}'
      - name: S3Bucket
        value: '{{ S3Bucket }}'
      - name: S3Prefix
        value: '{{ S3Prefix }}'
      - name: S3Region
        value: '{{ S3Region }}'
      - name: AdditionalArtifacts
        value:
          - '{{ AdditionalArtifacts[0] }}'
      - name: RefreshClosedReports
        value: '{{ RefreshClosedReports }}'
      - name: ReportVersioning
        value: '{{ ReportVersioning }}'
      - name: BillingViewArn
        value: '{{ BillingViewArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>report_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cur.report_definitions
SET PatchDocument = string('{{ {
    "Format": format,
    "Compression": compression,
    "S3Bucket": s3_bucket,
    "S3Prefix": s3_prefix,
    "S3Region": s3_region,
    "AdditionalArtifacts": additional_artifacts,
    "RefreshClosedReports": refresh_closed_reports
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ReportName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cur.report_definitions
WHERE Identifier = '<ReportName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>report_definitions</code> resource, the following permissions are required:

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
cur:PutReportDefinition,
cur:DescribeReportDefinitions
```

</TabItem>
<TabItem value="read">

```json
cur:DescribeReportDefinitions
```

</TabItem>
<TabItem value="update">

```json
cur:DescribeReportDefinitions,
cur:ModifyReportDefinition
```

</TabItem>
<TabItem value="delete">

```json
cur:DeleteReportDefinition
```

</TabItem>
<TabItem value="list">

```json
cur:DescribeReportDefinitions
```

</TabItem>
</Tabs>