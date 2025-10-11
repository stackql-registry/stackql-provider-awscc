---
title: contact_flow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flow_versions
  - connect
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

Creates, updates, deletes or gets a <code>contact_flow_version</code> resource or lists <code>contact_flow_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>contact_flow_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type Definition for ContactFlowVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connect.contact_flow_versions" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="contact_flow_version_arn" /></td><td><code>string</code></td><td>The identifier of the contact flow version (ARN).</td></tr>
<tr><td><CopyableCode code="contact_flow_id" /></td><td><code>string</code></td><td>The ARN of the contact flow this version is tied to.</td></tr>
<tr><td><CopyableCode code="version" /></td><td><code>integer</code></td><td>The version number of this revision</td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td>The description of the version.</td></tr>
<tr><td><CopyableCode code="flow_content_sha256" /></td><td><code>string</code></td><td>Indicates the checksum value of the latest published flow content</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html"><code>AWS::Connect::ContactFlowVersion</code></a>.

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
    <td><CopyableCode code="ContactFlowId, region" /></td>
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
Gets all <code>contact_flow_versions</code> in a region.
```sql
SELECT
region,
contact_flow_version_arn,
contact_flow_id,
version,
description,
flow_content_sha256
FROM awscc.connect.contact_flow_versions
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>contact_flow_version</code>.
```sql
SELECT
region,
contact_flow_version_arn,
contact_flow_id,
version,
description,
flow_content_sha256
FROM awscc.connect.contact_flow_versions
WHERE region = 'us-east-1' AND data__Identifier = '<ContactFlowVersionARN>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>contact_flow_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connect.contact_flow_versions (
 ContactFlowId,
 region
)
SELECT 
'{{ ContactFlowId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connect.contact_flow_versions (
 ContactFlowId,
 Description,
 region
)
SELECT 
 '{{ ContactFlowId }}',
 '{{ Description }}',
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
  - name: contact_flow_version
    props:
      - name: ContactFlowId
        value: '{{ ContactFlowId }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connect.contact_flow_versions
WHERE data__Identifier = '<ContactFlowVersionARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>contact_flow_versions</code> resource, the following permissions are required:

### Create
```json
connect:CreateContactFlowVersion,
connect:DescribeContactFlow
```

### Read
```json
connect:DescribeContactFlow
```

### Delete
```json
connect:DeleteContactFlowVersion
```

### List
```json
connect:ListContactFlowVersions
```

### Update
```json
connect:DescribeContactFlow
```
