---
title: report_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - report_plans
  - backup
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

Creates, updates, deletes or gets a <code>report_plan</code> resource or lists <code>report_plans</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>report_plans</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains detailed information about a report plan in AWS Backup Audit Manager.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.backup.report_plans" /></td></tr>
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
    "name": "report_plan_name",
    "type": "string",
    "description": "The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (&#95;)."
  },
  {
    "name": "report_plan_arn",
    "type": "string",
    "description": "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type."
  },
  {
    "name": "report_plan_description",
    "type": "string",
    "description": "An optional description of the report plan with a maximum of 1,024 characters."
  },
  {
    "name": "report_plan_tags",
    "type": "array",
    "description": "Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "report_delivery_channel",
    "type": "object",
    "description": "A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.",
    "children": [
      {
        "name": "formats",
        "type": "array",
        "description": "A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV."
      },
      {
        "name": "s3_bucket_name",
        "type": "string",
        "description": "The unique name of the S3 bucket that receives your reports."
      },
      {
        "name": "s3_key_prefix",
        "type": "string",
        "description": "The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix."
      }
    ]
  },
  {
    "name": "report_setting",
    "type": "object",
    "description": "Identifies the report template for the report. Reports are built using a report template.",
    "children": [
      {
        "name": "report_template",
        "type": "string",
        "description": "Identifies the report template for the report. Reports are built using a report template. The report templates are: &#96;BACKUP&#95;JOB&#95;REPORT &#124; COPY&#95;JOB&#95;REPORT &#124; RESTORE&#95;JOB&#95;REPORT&#96;"
      },
      {
        "name": "framework_arns",
        "type": "array",
        "description": "The Amazon Resource Names (ARNs) of the frameworks a report covers."
      },
      {
        "name": "accounts",
        "type": "array",
        "description": "The list of AWS accounts that a report covers."
      },
      {
        "name": "organization_units",
        "type": "array",
        "description": "The list of AWS organization units that a report covers."
      },
      {
        "name": "regions",
        "type": "array",
        "description": "The list of AWS regions that a report covers."
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
    "name": "report_plan_arn",
    "type": "string",
    "description": "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html"><code>AWS::Backup::ReportPlan</code></a>.

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
    <td><code>report_plans</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ReportDeliveryChannel, ReportSetting, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>report_plans</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>report_plans</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>report_plans_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>report_plans</code></td>
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

Gets all properties from an individual <code>report_plan</code>.
```sql
SELECT
region,
report_plan_name,
report_plan_arn,
report_plan_description,
report_plan_tags,
report_delivery_channel,
report_setting
FROM awscc.backup.report_plans
WHERE region = 'us-east-1' AND Identifier = '{{ report_plan_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>report_plans</code> in a region.
```sql
SELECT
region,
report_plan_arn
FROM awscc.backup.report_plans_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>report_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.backup.report_plans (
 ReportDeliveryChannel,
 ReportSetting,
 region
)
SELECT
'{{ report_delivery_channel }}',
 '{{ report_setting }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.backup.report_plans (
 ReportPlanName,
 ReportPlanDescription,
 ReportPlanTags,
 ReportDeliveryChannel,
 ReportSetting,
 region
)
SELECT
 '{{ report_plan_name }}',
 '{{ report_plan_description }}',
 '{{ report_plan_tags }}',
 '{{ report_delivery_channel }}',
 '{{ report_setting }}',
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
  - name: report_plan
    props:
      - name: report_plan_name
        value: '{{ report_plan_name }}'
      - name: report_plan_description
        value: '{{ report_plan_description }}'
      - name: report_plan_tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: report_delivery_channel
        value:
          formats:
            - '{{ formats[0] }}'
          s3_bucket_name: '{{ s3_bucket_name }}'
          s3_key_prefix: '{{ s3_key_prefix }}'
      - name: report_setting
        value:
          report_template: '{{ report_template }}'
          framework_arns:
            - '{{ framework_arns[0] }}'
          accounts:
            - '{{ accounts[0] }}'
          organization_units:
            - '{{ organization_units[0] }}'
          regions:
            - '{{ regions[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>report_plan</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.backup.report_plans
SET PatchDocument = string('{{ {
    "ReportPlanDescription": report_plan_description,
    "ReportPlanTags": report_plan_tags,
    "ReportDeliveryChannel": report_delivery_channel,
    "ReportSetting": report_setting
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ report_plan_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.backup.report_plans
WHERE Identifier = '{{ report_plan_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>report_plans</code> resource, the following permissions are required:

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
backup:CreateReportPlan,
backup:DescribeReportPlan,
backup:ListTags,
backup:TagResource,
iam:CreateServiceLinkedRole
```

</TabItem>
<TabItem value="read">

```json
backup:DescribeReportPlan,
backup:ListTags
```

</TabItem>
<TabItem value="update">

```json
backup:DescribeReportPlan,
backup:UpdateReportPlan,
backup:ListTags,
backup:UntagResource,
backup:TagResource
```

</TabItem>
<TabItem value="delete">

```json
backup:DeleteReportPlan,
backup:DescribeReportPlan
```

</TabItem>
<TabItem value="list">

```json
backup:ListReportPlans
```

</TabItem>
</Tabs>