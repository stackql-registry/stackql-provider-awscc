---
title: public_type_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - public_type_versions
  - cloudformation
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

Creates, updates, deletes or gets a <code>public_type_version</code> resource or lists <code>public_type_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>public_type_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Test and Publish a resource that has been registered in the CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.public_type_versions" /></td></tr>
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
    "description": "The Amazon Resource Number (ARN) of the extension."
  },
  {
    "name": "type_version_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) of the extension with the versionId."
  },
  {
    "name": "public_version_number",
    "type": "string",
    "description": "The version number of a public third-party extension"
  },
  {
    "name": "publisher_id",
    "type": "string",
    "description": "The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region."
  },
  {
    "name": "public_type_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) assigned to the public extension upon publication"
  },
  {
    "name": "type_name",
    "type": "string",
    "description": "The name of the type being registered.<br />We recommend that type names adhere to the following pattern: company&#95;or&#95;organization::service::type."
  },
  {
    "name": "log_delivery_bucket",
    "type": "string",
    "description": "A url to the S3 bucket where logs for the testType run will be available"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The kind of extension"
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
    "description": "The Amazon Resource Number (ARN) of the extension."
  },
  {
    "name": "public_type_arn",
    "type": "string",
    "description": "The Amazon Resource Number (ARN) assigned to the public extension upon publication"
  },
  {
    "name": "type",
    "type": "string",
    "description": "The kind of extension"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html"><code>AWS::CloudFormation::PublicTypeVersion</code></a>.

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
    <td><code>public_type_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>public_type_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>public_type_versions</code></td>
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

Gets all properties from an individual <code>public_type_version</code>.
```sql
SELECT
region,
arn,
type_version_arn,
public_version_number,
publisher_id,
public_type_arn,
type_name,
log_delivery_bucket,
type
FROM awscc.cloudformation.public_type_versions
WHERE region = 'us-east-1' AND Identifier = '<PublicTypeArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>public_type_versions</code> in a region.
```sql
SELECT
region,
public_type_arn
FROM awscc.cloudformation.public_type_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>public_type_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.public_type_versions (
 Arn,
 PublicVersionNumber,
 TypeName,
 LogDeliveryBucket,
 Type,
 region
)
SELECT 
'{{ Arn }}',
 '{{ PublicVersionNumber }}',
 '{{ TypeName }}',
 '{{ LogDeliveryBucket }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.public_type_versions (
 Arn,
 PublicVersionNumber,
 TypeName,
 LogDeliveryBucket,
 Type,
 region
)
SELECT 
 '{{ Arn }}',
 '{{ PublicVersionNumber }}',
 '{{ TypeName }}',
 '{{ LogDeliveryBucket }}',
 '{{ Type }}',
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
  - name: public_type_version
    props:
      - name: Arn
        value: '{{ Arn }}'
      - name: PublicVersionNumber
        value: '{{ PublicVersionNumber }}'
      - name: TypeName
        value: '{{ TypeName }}'
      - name: LogDeliveryBucket
        value: '{{ LogDeliveryBucket }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>


## Permissions

To operate on the <code>public_type_versions</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:TestType,
cloudformation:DescribeType,
cloudformation:PublishType,
cloudformation:DescribePublisher,
s3:GetObject,
s3:PutObject
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribeType,
cloudformation:DescribePublisher
```

</TabItem>
<TabItem value="list">

```json
cloudformation:ListTypes
```

</TabItem>
</Tabs>