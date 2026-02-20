---
title: data_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integrations
  - appintegrations
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

Creates, updates, deletes or gets a <code>data_integration</code> resource or lists <code>data_integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppIntegrations::DataIntegration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appintegrations.data_integrations" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "The data integration description."
  },
  {
    "name": "id",
    "type": "string",
    "description": "The unique identifer of the data integration."
  },
  {
    "name": "data_integration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the data integration."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the data integration."
  },
  {
    "name": "kms_key",
    "type": "string",
    "description": "The KMS key of the data integration."
  },
  {
    "name": "schedule_config",
    "type": "object",
    "description": "The name of the data and how often it should be pulled from the source.",
    "children": [
      {
        "name": "first_execution_from",
        "type": "string",
        "description": "The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported."
      },
      {
        "name": "object",
        "type": "string",
        "description": "The name of the object to pull from the data source."
      },
      {
        "name": "schedule_expression",
        "type": "string",
        "description": "How often the data should be pulled from data source."
      }
    ]
  },
  {
    "name": "source_uri",
    "type": "string",
    "description": "The URI of the data source."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the data integration.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key to identify the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "Corresponding tag value for the key."
      }
    ]
  },
  {
    "name": "file_configuration",
    "type": "object",
    "description": "The configuration for what files should be pulled from the source.",
    "children": [
      {
        "name": "folders",
        "type": "array",
        "description": "Identifiers for the source folders to pull all files from recursively."
      },
      {
        "name": "filters",
        "type": "object",
        "description": "Restrictions for what files should be pulled from the source."
      }
    ]
  },
  {
    "name": "object_configuration",
    "type": "object",
    "description": "The configuration for what data should be pulled from the source."
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
    "description": "The unique identifer of the data integration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html"><code>AWS::AppIntegrations::DataIntegration</code></a>.

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
    <td><code>data_integrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, KmsKey, SourceURI, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_integrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_integrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_integrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_integrations</code></td>
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

Gets all properties from an individual <code>data_integration</code>.
```sql
SELECT
region,
description,
id,
data_integration_arn,
name,
kms_key,
schedule_config,
source_uri,
tags,
file_configuration,
object_configuration
FROM awscc.appintegrations.data_integrations
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_integrations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.appintegrations.data_integrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appintegrations.data_integrations (
 Name,
 KmsKey,
 SourceURI,
 region
)
SELECT 
'{{ Name }}',
 '{{ KmsKey }}',
 '{{ SourceURI }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appintegrations.data_integrations (
 Description,
 Name,
 KmsKey,
 ScheduleConfig,
 SourceURI,
 Tags,
 FileConfiguration,
 ObjectConfiguration,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Name }}',
 '{{ KmsKey }}',
 '{{ ScheduleConfig }}',
 '{{ SourceURI }}',
 '{{ Tags }}',
 '{{ FileConfiguration }}',
 '{{ ObjectConfiguration }}',
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
  - name: data_integration
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: KmsKey
        value: '{{ KmsKey }}'
      - name: ScheduleConfig
        value:
          FirstExecutionFrom: '{{ FirstExecutionFrom }}'
          Object: '{{ Object }}'
          ScheduleExpression: '{{ ScheduleExpression }}'
      - name: SourceURI
        value: '{{ SourceURI }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: FileConfiguration
        value:
          Folders:
            - '{{ Folders[0] }}'
          Filters: {}
      - name: ObjectConfiguration
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.appintegrations.data_integrations
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name,
    "Tags": tags,
    "FileConfiguration": file_configuration,
    "ObjectConfiguration": object_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appintegrations.data_integrations
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_integrations</code> resource, the following permissions are required:

### Create
```json
app-integrations:CreateDataIntegration,
app-integrations:TagResource,
appflow:DescribeConnectorProfiles,
appflow:CreateFlow,
appflow:DeleteFlow,
appflow:DescribeConnectorEntity,
appflow:UseConnectorProfile,
appflow:TagResource,
appflow:UntagResource,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeys,
s3:GetBucketNotification,
s3:PutBucketNotification,
s3:GetEncryptionConfiguration
```

### Read
```json
app-integrations:GetDataIntegration,
app-integrations:ListTagsForResource
```

### List
```json
app-integrations:ListDataIntegrations
```

### Update
```json
app-integrations:GetDataIntegration,
app-integrations:UpdateDataIntegration,
app-integrations:TagResource,
app-integrations:UntagResource,
appflow:DescribeConnectorProfiles,
appflow:DeleteFlow,
appflow:DescribeConnectorEntity,
appflow:UseConnectorProfile,
appflow:TagResource,
appflow:UntagResource,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeys
```

### Delete
```json
app-integrations:DeleteDataIntegration,
app-integrations:UntagResource,
appflow:CreateFlow,
appflow:DeleteFlow,
appflow:DescribeConnectorEntity,
appflow:UseConnectorProfile,
appflow:TagResource,
appflow:UntagResource,
kms:CreateGrant,
kms:DescribeKey,
kms:ListAliases,
kms:ListGrants,
kms:ListKeys
```
