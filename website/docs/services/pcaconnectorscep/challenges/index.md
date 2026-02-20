---
title: challenges
hide_title: false
hide_table_of_contents: false
keywords:
  - challenges
  - pcaconnectorscep
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

Creates, updates, deletes or gets a <code>challenge</code> resource or lists <code>challenges</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>challenges</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a SCEP Challenge that is used for certificate enrollment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorscep.challenges" /></td></tr>
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
    "name": "challenge_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "connector_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
    "description": ""
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
    "name": "challenge_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html"><code>AWS::PCAConnectorSCEP::Challenge</code></a>.

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
    <td><code>challenges</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConnectorArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>challenges</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>challenges</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>challenges_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>challenges</code></td>
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

Gets all properties from an individual <code>challenge</code>.
```sql
SELECT
region,
challenge_arn,
connector_arn,
tags
FROM awscc.pcaconnectorscep.challenges
WHERE region = 'us-east-1' AND Identifier = '<ChallengeArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>challenges</code> in a region.
```sql
SELECT
region,
challenge_arn
FROM awscc.pcaconnectorscep.challenges_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>challenge</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcaconnectorscep.challenges (
 ConnectorArn,
 region
)
SELECT 
'{{ ConnectorArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcaconnectorscep.challenges (
 ConnectorArn,
 Tags,
 region
)
SELECT 
 '{{ ConnectorArn }}',
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
  - name: challenge
    props:
      - name: ConnectorArn
        value: '{{ ConnectorArn }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>challenge</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.pcaconnectorscep.challenges
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ChallengeArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcaconnectorscep.challenges
WHERE Identifier = '<ChallengeArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>challenges</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
pca-connector-scep:CreateChallenge,
pca-connector-scep:TagResource
```

</TabItem>
<TabItem value="read">

```json
pca-connector-scep:ListTagsForResource,
pca-connector-scep:GetChallengeMetadata
```

</TabItem>
<TabItem value="delete">

```json
pca-connector-scep:GetChallengeMetadata,
pca-connector-scep:DeleteChallenge,
pca-connector-scep:UntagResource
```

</TabItem>
<TabItem value="list">

```json
pca-connector-scep:ListChallengeMetadata
```

</TabItem>
<TabItem value="update">

```json
pca-connector-scep:ListTagsForResource,
pca-connector-scep:TagResource,
pca-connector-scep:UntagResource
```

</TabItem>
</Tabs>