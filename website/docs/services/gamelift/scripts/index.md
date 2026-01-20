---
title: scripts
hide_title: false
hide_table_of_contents: false
keywords:
  - scripts
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

Creates, updates, deletes or gets a <code>script</code> resource or lists <code>scripts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scripts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::GameLift::Script resource creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.gamelift.scripts" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "A descriptive label that is associated with a script. Script names do not need to be unique."
  },
  {
    "name": "storage_location",
    "type": "object",
    "description": "The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the \"key\"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.",
    "children": [
      {
        "name": "bucket",
        "type": "string",
        "description": "An Amazon S3 bucket identifier. This is the name of the S3 bucket."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The name of the zip file that contains the script files."
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
    "description": "The version that is associated with a script. Version strings do not need to be unique."
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
    "name": "creation_time",
    "type": "string",
    "description": "A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example \"1469498468.057\")."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the Id value."
  },
  {
    "name": "id",
    "type": "string",
    "description": "A unique identifier for the Realtime script"
  },
  {
    "name": "size_on_disk",
    "type": "integer",
    "description": "The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at \"0\"."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-script.html"><code>AWS::GameLift::Script</code></a>.

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
    <td><CopyableCode code="StorageLocation, region" /></td>
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

Gets all properties from an individual <code>script</code>.
```sql
SELECT
region,
name,
storage_location,
version,
tags,
creation_time,
arn,
id,
size_on_disk
FROM awscc.gamelift.scripts
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>script</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.gamelift.scripts (
 StorageLocation,
 region
)
SELECT 
'{{ StorageLocation }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.gamelift.scripts (
 Name,
 StorageLocation,
 Version,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ StorageLocation }}',
 '{{ Version }}',
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
  - name: script
    props:
      - name: Name
        value: '{{ Name }}'
      - name: StorageLocation
        value:
          Bucket: '{{ Bucket }}'
          Key: '{{ Key }}'
          ObjectVersion: '{{ ObjectVersion }}'
          RoleArn: '{{ RoleArn }}'
      - name: Version
        value: '{{ Version }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.gamelift.scripts
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scripts</code> resource, the following permissions are required:

### Create
```json
gamelift:CreateScript,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:DescribeScript,
iam:PassRole
```

### Read
```json
gamelift:DescribeScript,
gamelift:ListScripts,
gamelift:ListTagsForResource
```

### Delete
```json
gamelift:DeleteScript
```

### List
```json
gamelift:ListScripts,
gamelift:DescribeScript
```

### Update
```json
gamelift:DescribeScript,
gamelift:UpdateScript,
gamelift:ListTagsForResource,
gamelift:TagResource,
gamelift:UntagResource,
iam:PassRole
```
