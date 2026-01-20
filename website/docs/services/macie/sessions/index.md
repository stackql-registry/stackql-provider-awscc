---
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - macie
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

Creates, updates, deletes or gets a <code>session</code> resource or lists <code>sessions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sessions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Macie::Session resource specifies a new Amazon Macie session. A session is an object that represents the Amazon Macie service. A session is required for Amazon Macie to become operational.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.macie.sessions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "aws_account_id",
    "type": "string",
    "description": "AWS account ID of customer"
  },
  {
    "name": "status",
    "type": "string",
    "description": "A enumeration value that specifies the status of the Macie Session."
  },
  {
    "name": "finding_publishing_frequency",
    "type": "string",
    "description": "A enumeration value that specifies how frequently finding updates are published."
  },
  {
    "name": "service_role",
    "type": "string",
    "description": "Service role used by Macie"
  },
  {
    "name": "automated_discovery_status",
    "type": "string",
    "description": "The status of automated sensitive data discovery for the Macie session."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html"><code>AWS::Macie::Session</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>session</code>.
```sql
SELECT
region,
aws_account_id,
status,
finding_publishing_frequency,
service_role,
automated_discovery_status
FROM awscc.macie.sessions
WHERE region = 'us-east-1' AND data__Identifier = '<AwsAccountId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>session</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.macie.sessions (
 Status,
 FindingPublishingFrequency,
 region
)
SELECT 
'{{ Status }}',
 '{{ FindingPublishingFrequency }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.macie.sessions (
 Status,
 FindingPublishingFrequency,
 region
)
SELECT 
 '{{ Status }}',
 '{{ FindingPublishingFrequency }}',
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
  - name: session
    props:
      - name: Status
        value: '{{ Status }}'
      - name: FindingPublishingFrequency
        value: '{{ FindingPublishingFrequency }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.macie.sessions
WHERE data__Identifier = '<AwsAccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sessions</code> resource, the following permissions are required:

### Create
```json
macie2:GetMacieSession,
macie2:EnableMacie,
macie2:ListAutomatedDiscoveryAccounts
```

### Read
```json
macie2:GetMacieSession,
macie2:ListAutomatedDiscoveryAccounts
```

### List
```json
macie2:GetMacieSession,
macie2:ListAutomatedDiscoveryAccounts
```

### Update
```json
macie2:GetMacieSession,
macie2:UpdateMacieSession,
macie2:ListAutomatedDiscoveryAccounts
```

### Delete
```json
macie2:DisableMacie
```
