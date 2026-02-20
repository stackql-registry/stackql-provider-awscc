---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - elasticbeanstalk
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ElasticBeanstalk::Application resource specifies an Elastic Beanstalk application.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticbeanstalk.applications" /></td></tr>
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
    "name": "application_name",
    "type": "string",
    "description": "A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Your description of the application."
  },
  {
    "name": "resource_lifecycle_config",
    "type": "object",
    "description": "Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.",
    "children": [
      {
        "name": "service_role",
        "type": "string",
        "description": "The ARN of an IAM service role that Elastic Beanstalk has permission to assume. The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value."
      },
      {
        "name": "version_lifecycle_config",
        "type": "object",
        "description": "Defines lifecycle settings for application versions.",
        "children": [
          {
            "name": "max_age_rule",
            "type": "object",
            "description": "Specify a max age rule to restrict the length of time that application versions are retained for an application.",
            "children": [
              {
                "name": "delete_source_from_s3",
                "type": "boolean",
                "description": "Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version."
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Specify true to apply the rule, or false to disable it."
              },
              {
                "name": "max_age_in_days",
                "type": "integer",
                "description": "Specify the number of days to retain an application versions."
              }
            ]
          },
          {
            "name": "max_count_rule",
            "type": "object",
            "description": "Specify a max count rule to restrict the number of application versions that are retained for an application.",
            "children": [
              {
                "name": "delete_source_from_s3",
                "type": "boolean",
                "description": "Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version."
              },
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Specify true to apply the rule, or false to disable it."
              },
              {
                "name": "max_count",
                "type": "integer",
                "description": "Specify the maximum number of application versions to retain."
              }
            ]
          }
        ]
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
    "name": "application_name",
    "type": "string",
    "description": "A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html"><code>AWS::ElasticBeanstalk::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
application_name,
description,
resource_lifecycle_config
FROM awscc.elasticbeanstalk.applications
WHERE region = 'us-east-1' AND Identifier = '<ApplicationName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_name
FROM awscc.elasticbeanstalk.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticbeanstalk.applications (
 ApplicationName,
 Description,
 ResourceLifecycleConfig,
 region
)
SELECT 
'{{ ApplicationName }}',
 '{{ Description }}',
 '{{ ResourceLifecycleConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticbeanstalk.applications (
 ApplicationName,
 Description,
 ResourceLifecycleConfig,
 region
)
SELECT 
 '{{ ApplicationName }}',
 '{{ Description }}',
 '{{ ResourceLifecycleConfig }}',
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
  - name: application
    props:
      - name: ApplicationName
        value: '{{ ApplicationName }}'
      - name: Description
        value: '{{ Description }}'
      - name: ResourceLifecycleConfig
        value:
          ServiceRole: '{{ ServiceRole }}'
          VersionLifecycleConfig:
            MaxAgeRule:
              DeleteSourceFromS3: '{{ DeleteSourceFromS3 }}'
              Enabled: '{{ Enabled }}'
              MaxAgeInDays: '{{ MaxAgeInDays }}'
            MaxCountRule:
              DeleteSourceFromS3: '{{ DeleteSourceFromS3 }}'
              Enabled: '{{ Enabled }}'
              MaxCount: '{{ MaxCount }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticbeanstalk.applications
SET PatchDocument = string('{{ {
    "Description": description,
    "ResourceLifecycleConfig": resource_lifecycle_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticbeanstalk.applications
WHERE Identifier = '<ApplicationName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
elasticbeanstalk:CreateApplication,
elasticbeanstalk:DescribeApplications,
s3:CreateBucket,
s3:PutBucketAcl,
s3:PutBucketObjectLockConfiguration,
s3:PutBucketVersioning,
s3:PutBucketOwnershipControls,
s3:PutBucketPolicy,
s3:PutBucketPublicAccessBlock,
s3:PutObject,
s3:ListBucket,
s3:GetObject,
s3:GetBucketLocation,
s3:GetBucketPolicy,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
elasticbeanstalk:DescribeApplications
```

</TabItem>
<TabItem value="update">

```json
elasticbeanstalk:UpdateApplication,
elasticbeanstalk:UpdateApplicationResourceLifecycle,
elasticbeanstalk:DescribeApplications,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
elasticbeanstalk:DeleteApplication,
elasticbeanstalk:DescribeApplications,
s3:ListBucket
```

</TabItem>
<TabItem value="list">

```json
elasticbeanstalk:DescribeApplications
```

</TabItem>
</Tabs>