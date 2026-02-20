---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - systemsmanagersap
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
<tr><td><b>Description</b></td><td>Resource schema for AWS::SystemsManagerSAP::Application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.systemsmanagersap.applications" /></td></tr>
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "application_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the SSM-SAP application"
  },
  {
    "name": "credentials",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "database_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "credential_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "secret_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "instances",
    "type": "array",
    "description": ""
  },
  {
    "name": "sap_instance_number",
    "type": "string",
    "description": ""
  },
  {
    "name": "sid",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags of a SystemsManagerSAP application.",
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
    "name": "database_arn",
    "type": "string",
    "description": "The ARN of the SAP HANA database"
  },
  {
    "name": "components_info",
    "type": "array",
    "description": "This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.",
    "children": [
      {
        "name": "component_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "ec2_instance_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "sid",
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the SSM-SAP application"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html"><code>AWS::SystemsManagerSAP::Application</code></a>.

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
    <td><CopyableCode code="ApplicationId, ApplicationType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
application_id,
application_type,
arn,
credentials,
instances,
sap_instance_number,
sid,
tags,
database_arn,
components_info
FROM awscc.systemsmanagersap.applications
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.systemsmanagersap.applications_list_only
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
INSERT INTO awscc.systemsmanagersap.applications (
 ApplicationId,
 ApplicationType,
 region
)
SELECT 
'{{ ApplicationId }}',
 '{{ ApplicationType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.systemsmanagersap.applications (
 ApplicationId,
 ApplicationType,
 Credentials,
 Instances,
 SapInstanceNumber,
 Sid,
 Tags,
 DatabaseArn,
 ComponentsInfo,
 region
)
SELECT 
 '{{ ApplicationId }}',
 '{{ ApplicationType }}',
 '{{ Credentials }}',
 '{{ Instances }}',
 '{{ SapInstanceNumber }}',
 '{{ Sid }}',
 '{{ Tags }}',
 '{{ DatabaseArn }}',
 '{{ ComponentsInfo }}',
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
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: ApplicationType
        value: '{{ ApplicationType }}'
      - name: Credentials
        value:
          - DatabaseName: '{{ DatabaseName }}'
            CredentialType: '{{ CredentialType }}'
            SecretId: '{{ SecretId }}'
      - name: Instances
        value:
          - '{{ Instances[0] }}'
      - name: SapInstanceNumber
        value: '{{ SapInstanceNumber }}'
      - name: Sid
        value: '{{ Sid }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: DatabaseArn
        value: '{{ DatabaseArn }}'
      - name: ComponentsInfo
        value:
          - ComponentType: '{{ ComponentType }}'
            Ec2InstanceId: '{{ Ec2InstanceId }}'
            Sid: '{{ Sid }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.systemsmanagersap.applications
SET data__PatchDocument = string('{{ {
    "ApplicationId": application_id,
    "ApplicationType": application_type,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.systemsmanagersap.applications
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

### Create
```json
ssm-sap:RegisterApplication,
ssm-sap:GetApplication,
ssm-sap:TagResource,
ssm-sap:ListTagsForResource,
iam:CreateServiceLinkedRole
```

### Read
```json
ssm-sap:GetApplication,
ssm-sap:ListTagsForResource
```

### Update
```json
ssm-sap:TagResource,
ssm-sap:UntagResource,
ssm-sap:ListTagsForResource,
ssm-sap:GetApplication
```

### Delete
```json
ssm-sap:DeregisterApplication,
ssm-sap:GetApplication
```

### List
```json
ssm-sap:ListApplications
```
