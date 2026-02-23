---
title: mlflow_tracking_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - mlflow_tracking_servers
  - sagemaker
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

Creates, updates, deletes or gets a <code>mlflow_tracking_server</code> resource or lists <code>mlflow_tracking_servers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mlflow_tracking_servers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SageMaker::MlflowTrackingServer</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sagemaker.mlflow_tracking_servers" /></td></tr>
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
    "name": "tracking_server_name",
    "type": "string",
    "description": "The name of the MLFlow Tracking Server."
  },
  {
    "name": "tracking_server_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the MLFlow Tracking Server."
  },
  {
    "name": "tracking_server_size",
    "type": "string",
    "description": "The size of the MLFlow Tracking Server."
  },
  {
    "name": "mlflow_version",
    "type": "string",
    "description": "The MLFlow Version used on the MLFlow Tracking Server."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer."
  },
  {
    "name": "artifact_store_uri",
    "type": "string",
    "description": "The Amazon S3 URI for MLFlow Tracking Server artifacts."
  },
  {
    "name": "automatic_model_registration",
    "type": "boolean",
    "description": "A flag to enable Automatic SageMaker Model Registration."
  },
  {
    "name": "weekly_maintenance_window_start",
    "type": "string",
    "description": "The start of the time window for maintenance of the MLFlow Tracking Server in UTC time."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
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
    "name": "tracking_server_name",
    "type": "string",
    "description": "The name of the MLFlow Tracking Server."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-mlflowtrackingserver.html"><code>AWS::SageMaker::MlflowTrackingServer</code></a>.

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
    <td><code>mlflow_tracking_servers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="TrackingServerName, ArtifactStoreUri, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mlflow_tracking_servers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mlflow_tracking_servers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mlflow_tracking_servers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mlflow_tracking_servers</code></td>
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

Gets all properties from an individual <code>mlflow_tracking_server</code>.
```sql
SELECT
region,
tracking_server_name,
tracking_server_arn,
tracking_server_size,
mlflow_version,
role_arn,
artifact_store_uri,
automatic_model_registration,
weekly_maintenance_window_start,
tags
FROM awscc.sagemaker.mlflow_tracking_servers
WHERE region = 'us-east-1' AND Identifier = '{{ tracking_server_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>mlflow_tracking_servers</code> in a region.
```sql
SELECT
region,
tracking_server_name
FROM awscc.sagemaker.mlflow_tracking_servers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mlflow_tracking_server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sagemaker.mlflow_tracking_servers (
 TrackingServerName,
 RoleArn,
 ArtifactStoreUri,
 region
)
SELECT
'{{ tracking_server_name }}',
 '{{ role_arn }}',
 '{{ artifact_store_uri }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sagemaker.mlflow_tracking_servers (
 TrackingServerName,
 TrackingServerSize,
 MlflowVersion,
 RoleArn,
 ArtifactStoreUri,
 AutomaticModelRegistration,
 WeeklyMaintenanceWindowStart,
 Tags,
 region
)
SELECT
 '{{ tracking_server_name }}',
 '{{ tracking_server_size }}',
 '{{ mlflow_version }}',
 '{{ role_arn }}',
 '{{ artifact_store_uri }}',
 '{{ automatic_model_registration }}',
 '{{ weekly_maintenance_window_start }}',
 '{{ tags }}',
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
  - name: mlflow_tracking_server
    props:
      - name: tracking_server_name
        value: '{{ tracking_server_name }}'
      - name: tracking_server_size
        value: '{{ tracking_server_size }}'
      - name: mlflow_version
        value: '{{ mlflow_version }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: artifact_store_uri
        value: '{{ artifact_store_uri }}'
      - name: automatic_model_registration
        value: '{{ automatic_model_registration }}'
      - name: weekly_maintenance_window_start
        value: '{{ weekly_maintenance_window_start }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>mlflow_tracking_server</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sagemaker.mlflow_tracking_servers
SET PatchDocument = string('{{ {
    "TrackingServerSize": tracking_server_size,
    "MlflowVersion": mlflow_version,
    "RoleArn": role_arn,
    "ArtifactStoreUri": artifact_store_uri,
    "AutomaticModelRegistration": automatic_model_registration,
    "WeeklyMaintenanceWindowStart": weekly_maintenance_window_start,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ tracking_server_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sagemaker.mlflow_tracking_servers
WHERE Identifier = '{{ tracking_server_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mlflow_tracking_servers</code> resource, the following permissions are required:

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
sagemaker:CreateMlflowTrackingServer,
sagemaker:DescribeMlflowTrackingServer,
sagemaker:AddTags,
sagemaker:ListTags,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
sagemaker:DescribeMlflowTrackingServer,
sagemaker:ListTags
```

</TabItem>
<TabItem value="update">

```json
sagemaker:UpdateMlflowTrackingServer,
sagemaker:DescribeMlflowTrackingServer,
sagemaker:ListTags,
sagemaker:AddTags,
sagemaker:DeleteTags,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
sagemaker:DeleteMlflowTrackingServer,
sagemaker:DescribeMlflowTrackingServer
```

</TabItem>
<TabItem value="list">

```json
sagemaker:ListMlflowTrackingServers
```

</TabItem>
</Tabs>