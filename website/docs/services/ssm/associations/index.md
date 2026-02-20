---
title: associations
hide_title: false
hide_table_of_contents: false
keywords:
  - associations
  - ssm
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

Creates, updates, deletes or gets an <code>association</code> resource or lists <code>associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with EC2 instances that contain a configuration agent to process the document.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.associations" /></td></tr>
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
    "name": "association_name",
    "type": "string",
    "description": "The name of the association."
  },
  {
    "name": "calendar_names",
    "type": "array",
    "description": ""
  },
  {
    "name": "schedule_expression",
    "type": "string",
    "description": "A Cron or Rate expression that specifies when the association is applied to the target."
  },
  {
    "name": "max_errors",
    "type": "string",
    "description": ""
  },
  {
    "name": "parameters",
    "type": "object",
    "description": "Parameter values that the SSM document uses at runtime."
  },
  {
    "name": "instance_id",
    "type": "string",
    "description": "The ID of the instance that the SSM document is associated with."
  },
  {
    "name": "wait_for_success_timeout_seconds",
    "type": "integer",
    "description": ""
  },
  {
    "name": "max_concurrency",
    "type": "string",
    "description": ""
  },
  {
    "name": "compliance_severity",
    "type": "string",
    "description": ""
  },
  {
    "name": "targets",
    "type": "array",
    "description": "The targets that the SSM document sends commands to.",
    "children": [
      {
        "name": "values",
        "type": "array",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "sync_compliance",
    "type": "string",
    "description": ""
  },
  {
    "name": "output_location",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_location",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "output_s3_key_prefix",
            "type": "string",
            "description": ""
          },
          {
            "name": "output_s3_region",
            "type": "string",
            "description": ""
          },
          {
            "name": "output_s3_bucket_name",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "schedule_offset",
    "type": "integer",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the SSM document."
  },
  {
    "name": "apply_only_at_cron_interval",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "document_version",
    "type": "string",
    "description": "The version of the SSM document to associate with the target."
  },
  {
    "name": "association_id",
    "type": "string",
    "description": "Unique identifier of the association."
  },
  {
    "name": "automation_target_parameter_name",
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
    "name": "association_id",
    "type": "string",
    "description": "Unique identifier of the association."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html"><code>AWS::SSM::Association</code></a>.

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
    <td><code>associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>associations</code></td>
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

Gets all properties from an individual <code>association</code>.
```sql
SELECT
region,
association_name,
calendar_names,
schedule_expression,
max_errors,
parameters,
instance_id,
wait_for_success_timeout_seconds,
max_concurrency,
compliance_severity,
targets,
sync_compliance,
output_location,
schedule_offset,
name,
apply_only_at_cron_interval,
document_version,
association_id,
automation_target_parameter_name
FROM awscc.ssm.associations
WHERE region = 'us-east-1' AND Identifier = '<AssociationId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>associations</code> in a region.
```sql
SELECT
region,
association_id
FROM awscc.ssm.associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssm.associations (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssm.associations (
 AssociationName,
 CalendarNames,
 ScheduleExpression,
 MaxErrors,
 Parameters,
 InstanceId,
 WaitForSuccessTimeoutSeconds,
 MaxConcurrency,
 ComplianceSeverity,
 Targets,
 SyncCompliance,
 OutputLocation,
 ScheduleOffset,
 Name,
 ApplyOnlyAtCronInterval,
 DocumentVersion,
 AutomationTargetParameterName,
 region
)
SELECT 
 '{{ AssociationName }}',
 '{{ CalendarNames }}',
 '{{ ScheduleExpression }}',
 '{{ MaxErrors }}',
 '{{ Parameters }}',
 '{{ InstanceId }}',
 '{{ WaitForSuccessTimeoutSeconds }}',
 '{{ MaxConcurrency }}',
 '{{ ComplianceSeverity }}',
 '{{ Targets }}',
 '{{ SyncCompliance }}',
 '{{ OutputLocation }}',
 '{{ ScheduleOffset }}',
 '{{ Name }}',
 '{{ ApplyOnlyAtCronInterval }}',
 '{{ DocumentVersion }}',
 '{{ AutomationTargetParameterName }}',
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
  - name: association
    props:
      - name: AssociationName
        value: '{{ AssociationName }}'
      - name: CalendarNames
        value:
          - '{{ CalendarNames[0] }}'
      - name: ScheduleExpression
        value: '{{ ScheduleExpression }}'
      - name: MaxErrors
        value: '{{ MaxErrors }}'
      - name: Parameters
        value: {}
      - name: InstanceId
        value: '{{ InstanceId }}'
      - name: WaitForSuccessTimeoutSeconds
        value: '{{ WaitForSuccessTimeoutSeconds }}'
      - name: MaxConcurrency
        value: '{{ MaxConcurrency }}'
      - name: ComplianceSeverity
        value: '{{ ComplianceSeverity }}'
      - name: Targets
        value:
          - Values:
              - '{{ Values[0] }}'
            Key: '{{ Key }}'
      - name: SyncCompliance
        value: '{{ SyncCompliance }}'
      - name: OutputLocation
        value:
          S3Location:
            OutputS3KeyPrefix: '{{ OutputS3KeyPrefix }}'
            OutputS3Region: '{{ OutputS3Region }}'
            OutputS3BucketName: '{{ OutputS3BucketName }}'
      - name: ScheduleOffset
        value: '{{ ScheduleOffset }}'
      - name: Name
        value: '{{ Name }}'
      - name: ApplyOnlyAtCronInterval
        value: '{{ ApplyOnlyAtCronInterval }}'
      - name: DocumentVersion
        value: '{{ DocumentVersion }}'
      - name: AutomationTargetParameterName
        value: '{{ AutomationTargetParameterName }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ssm.associations
SET PatchDocument = string('{{ {
    "AssociationName": association_name,
    "CalendarNames": calendar_names,
    "ScheduleExpression": schedule_expression,
    "MaxErrors": max_errors,
    "Parameters": parameters,
    "InstanceId": instance_id,
    "WaitForSuccessTimeoutSeconds": wait_for_success_timeout_seconds,
    "MaxConcurrency": max_concurrency,
    "ComplianceSeverity": compliance_severity,
    "Targets": targets,
    "SyncCompliance": sync_compliance,
    "OutputLocation": output_location,
    "ScheduleOffset": schedule_offset,
    "Name": name,
    "ApplyOnlyAtCronInterval": apply_only_at_cron_interval,
    "DocumentVersion": document_version,
    "AutomationTargetParameterName": automation_target_parameter_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AssociationId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssm.associations
WHERE Identifier = '<AssociationId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
ssm:DescribeAssociation,
resource-groups:GetGroupQuery,
resource-groups:ListGroups,
resource-groups:ListGroupResources
```

</TabItem>
<TabItem value="create">

```json
ec2:DescribeInstanceStatus,
iam:PassRole,
iam:CreateServiceLinkedRole,
ssm:CreateAssociation,
ssm:DescribeAssociation,
ssm:GetCalendarState
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
ssm:UpdateAssociation,
ssm:GetCalendarState
```

</TabItem>
<TabItem value="list">

```json
ssm:ListAssociations
```

</TabItem>
<TabItem value="delete">

```json
ssm:DeleteAssociation
```

</TabItem>
</Tabs>