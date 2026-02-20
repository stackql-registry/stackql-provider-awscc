---
title: stream_processors
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_processors
  - rekognition
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

Creates, updates, deletes or gets a <code>stream_processor</code> resource or lists <code>stream_processors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>stream_processors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Rekognition::StreamProcessor type is used to create an Amazon Rekognition StreamProcessor that you can use to analyze streaming videos.<br /></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rekognition.stream_processors" /></td></tr>
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
    "description": "The ARN of the stream processor"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The KMS key that is used by Rekognition to encrypt any intermediate customer metadata and store in the customer's S3 bucket."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "ARN of the IAM role that allows access to the stream processor, and provides Rekognition read permissions for KVS stream and write permissions to S3 bucket and SNS topic."
  },
  {
    "name": "kinesis_video_stream",
    "type": "object",
    "description": "The Kinesis Video Stream that streams the source video.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "ARN of the Kinesis Video Stream that streams the source video."
      }
    ]
  },
  {
    "name": "face_search_settings",
    "type": "object",
    "description": "Face search settings to use on a streaming video. Note that either FaceSearchSettings or ConnectedHomeSettings should be set. Not both",
    "children": [
      {
        "name": "collection_id",
        "type": "string",
        "description": "The ID of a collection that contains faces that you want to search for."
      },
      {
        "name": "face_match_threshold",
        "type": "number",
        "description": "Minimum face match confidence score percentage that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted."
      }
    ]
  },
  {
    "name": "connected_home_settings",
    "type": "object",
    "description": "Connected home settings to use on a streaming video. Note that either ConnectedHomeSettings or FaceSearchSettings should be set. Not both",
    "children": [
      {
        "name": "labels",
        "type": "array",
        "description": "List of labels that need to be detected in the video stream. Current supported values are PERSON, PET, PACKAGE, ALL."
      },
      {
        "name": "min_confidence",
        "type": "number",
        "description": "Minimum object class match confidence score that must be met to return a result for a recognized object."
      }
    ]
  },
  {
    "name": "kinesis_data_stream",
    "type": "object",
    "description": "The Amazon Kinesis Data Stream stream to which the Amazon Rekognition stream processor streams the analysis results, as part of face search feature.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "ARN of the Kinesis Data Stream stream."
      }
    ]
  },
  {
    "name": "s3_destination",
    "type": "object",
    "description": "The S3 location in customer's account where inference output & artifacts are stored, as part of connected home feature.",
    "children": [
      {
        "name": "bucket_name",
        "type": "string",
        "description": "Name of the S3 bucket."
      },
      {
        "name": "object_key_prefix",
        "type": "string",
        "description": "The object key prefix path where the results will be stored. Default is no prefix path"
      }
    ]
  },
  {
    "name": "notification_channel",
    "type": "object",
    "description": "The ARN of the SNS notification channel where events of interests are published, as part of connected home feature.",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "ARN of the SNS topic."
      }
    ]
  },
  {
    "name": "data_sharing_preference",
    "type": "object",
    "description": "Indicates whether Rekognition is allowed to store the video stream data for model-training.",
    "children": [
      {
        "name": "opt_in",
        "type": "boolean",
        "description": "Flag to enable data-sharing"
      }
    ]
  },
  {
    "name": "polygon_regions_of_interest",
    "type": "array",
    "description": "The PolygonRegionsOfInterest specifies a set of polygon areas of interest in the video frames to analyze, as part of connected home feature. Each polygon is in turn, an ordered list of Point"
  },
  {
    "name": "bounding_box_regions_of_interest",
    "type": "array",
    "description": "The BoundingBoxRegionsOfInterest specifies an array of bounding boxes of interest in the video frames to analyze, as part of connected home feature. If an object is partially in a region of interest, Rekognition will tag it as detected if the overlap of the object with the region-of-interest is greater than 20%.",
    "children": [
      {
        "name": "height",
        "type": "number",
        "description": ""
      },
      {
        "name": "width",
        "type": "number",
        "description": ""
      },
      {
        "name": "left",
        "type": "number",
        "description": ""
      },
      {
        "name": "top",
        "type": "number",
        "description": ""
      }
    ]
  },
  {
    "name": "status",
    "type": "string",
    "description": "Current status of the stream processor."
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "Detailed status message about the stream processor."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html"><code>AWS::Rekognition::StreamProcessor</code></a>.

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
    <td><code>stream_processors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoleArn, KinesisVideoStream, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>stream_processors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>stream_processors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>stream_processors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>stream_processors</code></td>
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

Gets all properties from an individual <code>stream_processor</code>.
```sql
SELECT
region,
arn,
name,
kms_key_id,
role_arn,
kinesis_video_stream,
face_search_settings,
connected_home_settings,
kinesis_data_stream,
s3_destination,
notification_channel,
data_sharing_preference,
polygon_regions_of_interest,
bounding_box_regions_of_interest,
status,
status_message,
tags
FROM awscc.rekognition.stream_processors
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>stream_processors</code> in a region.
```sql
SELECT
region,
name
FROM awscc.rekognition.stream_processors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>stream_processor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rekognition.stream_processors (
 RoleArn,
 KinesisVideoStream,
 region
)
SELECT 
'{{ RoleArn }}',
 '{{ KinesisVideoStream }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rekognition.stream_processors (
 Name,
 KmsKeyId,
 RoleArn,
 KinesisVideoStream,
 FaceSearchSettings,
 ConnectedHomeSettings,
 KinesisDataStream,
 S3Destination,
 NotificationChannel,
 DataSharingPreference,
 PolygonRegionsOfInterest,
 BoundingBoxRegionsOfInterest,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ KmsKeyId }}',
 '{{ RoleArn }}',
 '{{ KinesisVideoStream }}',
 '{{ FaceSearchSettings }}',
 '{{ ConnectedHomeSettings }}',
 '{{ KinesisDataStream }}',
 '{{ S3Destination }}',
 '{{ NotificationChannel }}',
 '{{ DataSharingPreference }}',
 '{{ PolygonRegionsOfInterest }}',
 '{{ BoundingBoxRegionsOfInterest }}',
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
  - name: stream_processor
    props:
      - name: Name
        value: '{{ Name }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: KinesisVideoStream
        value:
          Arn: '{{ Arn }}'
      - name: FaceSearchSettings
        value:
          CollectionId: '{{ CollectionId }}'
          FaceMatchThreshold: null
      - name: ConnectedHomeSettings
        value:
          Labels:
            - '{{ Labels[0] }}'
          MinConfidence: null
      - name: KinesisDataStream
        value:
          Arn: '{{ Arn }}'
      - name: S3Destination
        value:
          BucketName: '{{ BucketName }}'
          ObjectKeyPrefix: '{{ ObjectKeyPrefix }}'
      - name: NotificationChannel
        value:
          Arn: '{{ Arn }}'
      - name: DataSharingPreference
        value:
          OptIn: '{{ OptIn }}'
      - name: PolygonRegionsOfInterest
        value:
          - - X: null
              'Y': null
      - name: BoundingBoxRegionsOfInterest
        value:
          - Height: null
            Width: null
            Left: null
            Top: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>stream_processor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rekognition.stream_processors
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rekognition.stream_processors
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>stream_processors</code> resource, the following permissions are required:

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
rekognition:CreateStreamProcessor,
iam:PassRole,
rekognition:DescribeStreamProcessor,
rekognition:ListTagsForResource,
rekognition:TagResource
```

</TabItem>
<TabItem value="read">

```json
rekognition:DescribeStreamProcessor,
rekognition:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
rekognition:TagResource,
rekognition:UntagResource,
rekognition:ListTagsForResource,
rekognition:DescribeStreamProcessor
```

</TabItem>
<TabItem value="delete">

```json
rekognition:DeleteStreamProcessor
```

</TabItem>
<TabItem value="list">

```json
rekognition:ListStreamProcessors
```

</TabItem>
</Tabs>