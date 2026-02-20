---
title: builds
hide_title: false
hide_table_of_contents: false
keywords:
  - builds
  - gamelift
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

Creates, updates, deletes or gets a <code>build</code> resource or lists <code>builds</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>builds</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GameLift::Build</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.builds" /></td></tr>
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
    "name": "build_id",
    "type": "string",
    "description": "A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A descriptive label that is associated with a build. Build names do not need to be unique."
  },
  {
    "name": "operating_system",
    "type": "string",
    "description": "The operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS&#95;2012). This value cannot be changed later."
  },
  {
    "name": "storage_location",
    "type": "object",
    "description": "Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.",
    "children": [
      {
        "name": "bucket",
        "type": "string",
        "description": "An Amazon S3 bucket identifier. This is the name of the S3 bucket."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The name of the zip file that contains the build files or script files."
      },
      {
        "name": "object_version",
        "type": "string",
        "description": "The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter."
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket."
      }
    ]
  },
  {
    "name": "version",
    "type": "string",
    "description": "Version information that is associated with this build. Version strings do not need to be unique."
  },
  {
    "name": "server_sdk_version",
    "type": "string",
    "description": "A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift sets this value to 4.0.2."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length."
      }
    ]
  },
  {
    "name": "build_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift build ARN, the resource ID matches the BuildId value."
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
    "name": "build_id",
    "type": "string",
    "description": "A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html"><code>AWS::GameLift::Build</code></a>.

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
    <td><code>builds</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>builds</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>builds</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>builds_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>builds</code></td>
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

Gets all properties from an individual <code>build</code>.
```sql
SELECT
region,
build_id,
name,
operating_system,
storage_location,
version,
server_sdk_version,
tags,
build_arn
FROM awscc.gamelift.builds
WHERE region = 'us-east-1' AND Identifier = '<BuildId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>builds</code> in a region.
```sql
SELECT
region,
build_id
FROM awscc.gamelift.builds_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>build</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.builds (
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
INSERT INTO awscc.gamelift.builds (
 Name,
 OperatingSystem,
 StorageLocation,
 Version,
 ServerSdkVersion,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ OperatingSystem }}',
 '{{ StorageLocation }}',
 '{{ Version }}',
 '{{ ServerSdkVersion }}',
 '{{ Tags }}',
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
  - name: build
    props:
      - name: Name
        value: '{{ Name }}'
      - name: OperatingSystem
        value: '{{ OperatingSystem }}'
      - name: StorageLocation
        value:
          Bucket: '{{ Bucket }}'
          Key: '{{ Key }}'
          ObjectVersion: '{{ ObjectVersion }}'
          RoleArn: '{{ RoleArn }}'
      - name: Version
        value: '{{ Version }}'
      - name: ServerSdkVersion
        value: '{{ ServerSdkVersion }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>build</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.gamelift.builds
SET PatchDocument = string('{{ {
    "Name": name,
    "Version": version,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<BuildId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.builds
WHERE Identifier = '<BuildId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>builds</code> resource, the following permissions are required:

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
gamelift:DescribeBuild,
gamelift:CreateBuild,
gamelift:ListTagsForResource,
gamelift:TagResource,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
gamelift:DescribeBuild,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
gamelift:UpdateBuild,
gamelift:DescribeBuild,
gamelift:TagResource,
gamelift:UntagResource,
gamelift:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
gamelift:DescribeBuild,
gamelift:DeleteBuild
```

</TabItem>
<TabItem value="list">

```json
gamelift:ListBuilds
```

</TabItem>
</Tabs>