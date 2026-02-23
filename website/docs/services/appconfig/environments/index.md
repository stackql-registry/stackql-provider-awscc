---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - appconfig
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppConfig::Environment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appconfig.environments" /></td></tr>
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
    "name": "environment_id",
    "type": "string",
    "description": "The environment ID."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the environment."
  },
  {
    "name": "monitors",
    "type": "array",
    "description": "Amazon CloudWatch alarms to monitor during the deployment process.",
    "children": [
      {
        "name": "alarm_arn",
        "type": "string",
        "description": "Amazon Resource Name (ARN) of the Amazon CloudWatch alarm."
      },
      {
        "name": "alarm_role_arn",
        "type": "string",
        "description": "ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn."
      }
    ]
  },
  {
    "name": "deletion_protection_check",
    "type": "string",
    "description": "On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html"
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the environment."
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
    "name": "environment_id",
    "type": "string",
    "description": "The environment ID."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html"><code>AWS::AppConfig::Environment</code></a>.

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
    <td><code>environments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ApplicationId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environments</code></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
environment_id,
description,
monitors,
deletion_protection_check,
application_id,
tags,
name
FROM awscc.appconfig.environments
WHERE region = 'us-east-1' AND Identifier = '{{ application_id }}|{{ environment_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>environments</code> in a region.
```sql
SELECT
region,
application_id,
environment_id
FROM awscc.appconfig.environments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appconfig.environments (
 ApplicationId,
 Name,
 region
)
SELECT
'{{ application_id }}',
 '{{ name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appconfig.environments (
 Description,
 Monitors,
 DeletionProtectionCheck,
 ApplicationId,
 Tags,
 Name,
 region
)
SELECT
 '{{ description }}',
 '{{ monitors }}',
 '{{ deletion_protection_check }}',
 '{{ application_id }}',
 '{{ tags }}',
 '{{ name }}',
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
  - name: environment
    props:
      - name: description
        value: '{{ description }}'
      - name: monitors
        value:
          - alarm_arn: '{{ alarm_arn }}'
            alarm_role_arn: '{{ alarm_role_arn }}'
      - name: deletion_protection_check
        value: '{{ deletion_protection_check }}'
      - name: application_id
        value: '{{ application_id }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: name
        value: '{{ name }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appconfig.environments
SET PatchDocument = string('{{ {
    "Description": description,
    "Monitors": monitors,
    "DeletionProtectionCheck": deletion_protection_check,
    "Tags": tags,
    "Name": name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ application_id }}|{{ environment_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appconfig.environments
WHERE Identifier = '{{ application_id }}|{{ environment_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

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
appconfig:GetEnvironment,
appconfig:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
appconfig:CreateEnvironment,
appconfig:GetEnvironment,
appconfig:ListTagsForResource,
appconfig:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="update">

```json
appconfig:UpdateEnvironment,
appconfig:TagResource,
appconfig:UntagResource,
iam:PassRole
```

</TabItem>
<TabItem value="list">

```json
appconfig:ListEnvironments
```

</TabItem>
<TabItem value="delete">

```json
appconfig:GetEnvironment,
appconfig:DeleteEnvironment
```

</TabItem>
</Tabs>