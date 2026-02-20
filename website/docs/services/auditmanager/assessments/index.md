---
title: assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - assessments
  - auditmanager
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

Creates, updates, deletes or gets an <code>assessment</code> resource or lists <code>assessments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>assessments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An entity that defines the scope of audit evidence collected by AWS Audit Manager.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.auditmanager.assessments" /></td></tr>
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
    "name": "framework_id",
    "type": "string",
    "description": "The identifier for the specified framework."
  },
  {
    "name": "assessment_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "aws_account",
    "type": "object",
    "description": "The AWS account associated with the assessment.",
    "children": [
      {
        "name": "id",
        "type": "string",
        "description": "The identifier for the specified AWS account."
      },
      {
        "name": "email_address",
        "type": "string",
        "description": "The unique identifier for the email account."
      },
      {
        "name": "name",
        "type": "string",
        "description": "The name of the specified AWS account."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the assessment."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags associated with the assessment.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "delegations",
    "type": "array",
    "description": "The list of delegations.",
    "children": [
      {
        "name": "last_updated",
        "type": "number",
        "description": "The sequence of characters that identifies when the event occurred."
      },
      {
        "name": "control_set_id",
        "type": "string",
        "description": "The identifier for the specified control set."
      },
      {
        "name": "created_by",
        "type": "string",
        "description": "The IAM user or role that performed the action."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAM user or role."
      },
      {
        "name": "assessment_name",
        "type": "string",
        "description": "The name of the related assessment."
      },
      {
        "name": "comment",
        "type": "string",
        "description": "The comment related to the delegation."
      },
      {
        "name": "role_type",
        "type": "string",
        "description": "The IAM role type."
      },
      {
        "name": "status",
        "type": "string",
        "description": "The status of the delegation."
      }
    ]
  },
  {
    "name": "roles",
    "type": "array",
    "description": "The list of roles for the specified assessment.",
    "children": [
      {
        "name": "role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the IAM user or role."
      },
      {
        "name": "role_type",
        "type": "string",
        "description": "The IAM role type."
      }
    ]
  },
  {
    "name": "scope",
    "type": "object",
    "description": "The wrapper that contains the AWS accounts and AWS services in scope for the assessment.",
    "children": [
      {
        "name": "aws_accounts",
        "type": "array",
        "description": "The AWS accounts included in scope."
      },
      {
        "name": "aws_services",
        "type": "array",
        "description": "The AWS services included in scope.",
        "children": [
          {
            "name": "service_name",
            "type": "string",
            "description": "The name of the AWS service."
          }
        ]
      }
    ]
  },
  {
    "name": "assessment_reports_destination",
    "type": "object",
    "description": "The destination in which evidence reports are stored for the specified assessment.",
    "children": [
      {
        "name": "destination",
        "type": "string",
        "description": "The URL of the specified Amazon S3 bucket."
      },
      {
        "name": "destination_type",
        "type": "string",
        "description": "The destination type, such as Amazon S3."
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the specified assessment."
  },
  {
    "name": "creation_time",
    "type": "number",
    "description": "The sequence of characters that identifies when the event occurred."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the related assessment."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the specified assessment."
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
    "name": "assessment_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html"><code>AWS::AuditManager::Assessment</code></a>.

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
    <td><code>assessments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>assessments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>assessments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>assessments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>assessments</code></td>
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

Gets all properties from an individual <code>assessment</code>.
```sql
SELECT
region,
framework_id,
assessment_id,
aws_account,
arn,
tags,
delegations,
roles,
scope,
assessment_reports_destination,
status,
creation_time,
name,
description
FROM awscc.auditmanager.assessments
WHERE region = 'us-east-1' AND Identifier = '<AssessmentId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>assessments</code> in a region.
```sql
SELECT
region,
assessment_id
FROM awscc.auditmanager.assessments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>assessment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.auditmanager.assessments (
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
INSERT INTO awscc.auditmanager.assessments (
 FrameworkId,
 AwsAccount,
 Tags,
 Delegations,
 Roles,
 Scope,
 AssessmentReportsDestination,
 Status,
 Name,
 Description,
 region
)
SELECT 
 '{{ FrameworkId }}',
 '{{ AwsAccount }}',
 '{{ Tags }}',
 '{{ Delegations }}',
 '{{ Roles }}',
 '{{ Scope }}',
 '{{ AssessmentReportsDestination }}',
 '{{ Status }}',
 '{{ Name }}',
 '{{ Description }}',
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
  - name: assessment
    props:
      - name: FrameworkId
        value: '{{ FrameworkId }}'
      - name: AwsAccount
        value:
          Id: '{{ Id }}'
          EmailAddress: '{{ EmailAddress }}'
          Name: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Delegations
        value:
          - LastUpdated: null
            ControlSetId: '{{ ControlSetId }}'
            CreationTime: null
            CreatedBy: '{{ CreatedBy }}'
            RoleArn: '{{ RoleArn }}'
            AssessmentName: '{{ AssessmentName }}'
            Comment: '{{ Comment }}'
            Id: '{{ Id }}'
            RoleType: '{{ RoleType }}'
            AssessmentId: null
            Status: '{{ Status }}'
      - name: Roles
        value:
          - RoleArn: null
            RoleType: null
      - name: Scope
        value:
          AwsAccounts:
            - null
          AwsServices:
            - ServiceName: '{{ ServiceName }}'
      - name: AssessmentReportsDestination
        value:
          Destination: '{{ Destination }}'
          DestinationType: '{{ DestinationType }}'
      - name: Status
        value: '{{ Status }}'
      - name: Name
        value: null
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.auditmanager.assessments
SET PatchDocument = string('{{ {
    "Tags": tags,
    "Delegations": delegations,
    "Roles": roles,
    "Scope": scope,
    "AssessmentReportsDestination": assessment_reports_destination,
    "Status": status,
    "Name": name,
    "Description": description
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AssessmentId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.auditmanager.assessments
WHERE Identifier = '<AssessmentId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>assessments</code> resource, the following permissions are required:

### Create
```json
auditmanager:CreateAssessment,
auditmanager:TagResource,
auditmanager:ListTagsForResource,
auditmanager:BatchCreateDelegationByAssessment,
iam:PassRole
```

### Read
```json
auditmanager:GetAssessment
```

### Update
```json
auditmanager:UpdateAssessment,
auditmanager:UpdateAssessmentStatus,
auditmanager:BatchCreateDelegationByAssessment,
auditmanager:BatchDeleteDelegationByAssessment
```

### Delete
```json
auditmanager:DeleteAssessment,
auditmanager:UntagResource
```

### List
```json
auditmanager:ListAssessments,
auditmanager:ListTagsForResource
```
