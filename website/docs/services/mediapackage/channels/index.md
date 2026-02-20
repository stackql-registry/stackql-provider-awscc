---
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - mediapackage
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

Creates, updates, deletes or gets a <code>channel</code> resource or lists <code>channels</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>channels</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaPackage::Channel</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackage.channels" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) assigned to the Channel."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the Channel."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A short text description of the Channel."
  },
  {
    "name": "hls_ingest",
    "type": "object",
    "description": "An HTTP Live Streaming (HLS) ingest resource configuration.",
    "children": [
      {
        "name": "ingest_endpoints",
        "type": "array",
        "description": "A list of endpoints to which the source stream should be sent.",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "The system generated unique identifier for the IngestEndpoint"
          },
          {
            "name": "username",
            "type": "string",
            "description": "The system generated username for ingest authentication."
          },
          {
            "name": "password",
            "type": "string",
            "description": "The system generated password for ingest authentication."
          },
          {
            "name": "url",
            "type": "string",
            "description": "The ingest URL to which the source stream should be sent."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "egress_access_logs",
    "type": "object",
    "description": "The configuration parameters for egress access logging.",
    "children": [
      {
        "name": "log_group_name",
        "type": "string",
        "description": "Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs."
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
    "name": "id",
    "type": "string",
    "description": "The ID of the Channel."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html"><code>AWS::MediaPackage::Channel</code></a>.

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
    <td><code>channels</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Id, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>channels</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>channels</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>channels_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>channels</code></td>
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

Gets all properties from an individual <code>channel</code>.
```sql
SELECT
region,
arn,
id,
description,
hls_ingest,
tags,
egress_access_logs,
ingress_access_logs
FROM awscc.mediapackage.channels
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>channels</code> in a region.
```sql
SELECT
region,
id
FROM awscc.mediapackage.channels_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>channel</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackage.channels (
 Id,
 region
)
SELECT 
'{{ Id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackage.channels (
 Id,
 Description,
 HlsIngest,
 Tags,
 EgressAccessLogs,
 IngressAccessLogs,
 region
)
SELECT 
 '{{ Id }}',
 '{{ Description }}',
 '{{ HlsIngest }}',
 '{{ Tags }}',
 '{{ EgressAccessLogs }}',
 '{{ IngressAccessLogs }}',
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
  - name: channel
    props:
      - name: Id
        value: '{{ Id }}'
      - name: Description
        value: '{{ Description }}'
      - name: HlsIngest
        value:
          ingestEndpoints:
            - Id: '{{ Id }}'
              Username: '{{ Username }}'
              Password: '{{ Password }}'
              Url: '{{ Url }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: EgressAccessLogs
        value:
          LogGroupName: '{{ LogGroupName }}'
      - name: IngressAccessLogs
        value: null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediapackage.channels
SET PatchDocument = string('{{ {
    "Description": description,
    "EgressAccessLogs": egress_access_logs,
    "IngressAccessLogs": ingress_access_logs
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediapackage.channels
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>channels</code> resource, the following permissions are required:

### Create
```json
mediapackage:CreateChannel,
mediapackage:DescribeChannel,
mediapackage:UpdateChannel,
mediapackage:TagResource,
mediapackage:ConfigureLogs,
iam:CreateServiceLinkedRole
```

### Read
```json
mediapackage:DescribeChannel
```

### Update
```json
mediapackage:UpdateChannel,
mediapackage:ConfigureLogs,
iam:CreateServiceLinkedRole
```

### Delete
```json
mediapackage:DeleteChannel
```

### List
```json
mediapackage:ListChannels
```
