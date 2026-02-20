---
title: access_point_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_point_policies
  - s3objectlambda
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

Creates, updates, deletes or gets an <code>access_point_policy</code> resource or lists <code>access_point_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_point_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon S3ObjectLambda policy type that you can use to control permissions for your S3ObjectLambda</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.s3objectlambda.access_point_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "object_lambda_access_point",
    "type": "string",
    "description": "The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies."
  },
  {
    "name": "policy_document",
    "type": "object",
    "description": "A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html"><code>AWS::S3ObjectLambda::AccessPointPolicy</code></a>.

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
    <td><CopyableCode code="ObjectLambdaAccessPoint, PolicyDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>access_point_policy</code>.
```sql
SELECT
region,
object_lambda_access_point,
policy_document
FROM awscc.s3objectlambda.access_point_policies
WHERE region = 'us-east-1' AND Identifier = '<ObjectLambdaAccessPoint>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_point_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.s3objectlambda.access_point_policies (
 ObjectLambdaAccessPoint,
 PolicyDocument,
 region
)
SELECT 
'{{ ObjectLambdaAccessPoint }}',
 '{{ PolicyDocument }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.s3objectlambda.access_point_policies (
 ObjectLambdaAccessPoint,
 PolicyDocument,
 region
)
SELECT 
 '{{ ObjectLambdaAccessPoint }}',
 '{{ PolicyDocument }}',
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
  - name: access_point_policy
    props:
      - name: ObjectLambdaAccessPoint
        value: '{{ ObjectLambdaAccessPoint }}'
      - name: PolicyDocument
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>access_point_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.s3objectlambda.access_point_policies
SET PatchDocument = string('{{ {
    "PolicyDocument": policy_document
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ObjectLambdaAccessPoint>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.s3objectlambda.access_point_policies
WHERE Identifier = '<ObjectLambdaAccessPoint>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_point_policies</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="create">

```json
s3:PutAccessPointPolicyForObjectLambda,
s3:GetAccessPointPolicyForObjectLambda
```

</TabItem>
<TabItem value="read">

```json
s3:GetAccessPointPolicyForObjectLambda
```

</TabItem>
<TabItem value="update">

```json
s3:PutAccessPointPolicyForObjectLambda,
s3:GetAccessPointPolicyForObjectLambda
```

</TabItem>
<TabItem value="delete">

```json
s3:DeleteAccessPointPolicyForObjectLambda,
s3:GetAccessPointPolicyForObjectLambda
```

</TabItem>
</Tabs>