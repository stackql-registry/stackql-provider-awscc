---
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
  - organizations
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

Creates, updates, deletes or gets an <code>organization</code> resource or lists <code>organizations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organizations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Organizations::Organization</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.organizations.organizations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "The unique identifier (ID) of an organization."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an organization."
  },
  {
    "name": "feature_set",
    "type": "string",
    "description": "Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality."
  },
  {
    "name": "management_account_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization."
  },
  {
    "name": "management_account_id",
    "type": "string",
    "description": "The unique identifier (ID) of the management account of an organization."
  },
  {
    "name": "management_account_email",
    "type": "string",
    "description": "The email address that is associated with the AWS account that is designated as the management account for the organization."
  },
  {
    "name": "root_id",
    "type": "string",
    "description": "The unique identifier (ID) for the root."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html"><code>AWS::Organizations::Organization</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>organization</code>.
```sql
SELECT
region,
id,
arn,
feature_set,
management_account_arn,
management_account_id,
management_account_email,
root_id
FROM awscc.organizations.organizations
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>organization</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.organizations.organizations (
 FeatureSet,
 region
)
SELECT 
'{{ FeatureSet }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.organizations.organizations (
 FeatureSet,
 region
)
SELECT 
 '{{ FeatureSet }}',
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
  - name: organization
    props:
      - name: FeatureSet
        value: '{{ FeatureSet }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.organizations.organizations
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>organizations</code> resource, the following permissions are required:

### Create
```json
organizations:CreateOrganization,
organizations:DescribeOrganization,
iam:CreateServiceLinkedRole,
organizations:ListRoots
```

### Read
```json
organizations:DescribeOrganization,
organizations:ListRoots
```

### Delete
```json
organizations:DeleteOrganization,
organizations:DescribeOrganization
```

### List
```json
organizations:DescribeOrganization
```

### Update
```json
organizations:DescribeOrganization
```
