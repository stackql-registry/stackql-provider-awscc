---
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - certificatemanager
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

Creates, updates, deletes or gets an <code>account</code> resource or lists <code>accounts</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>accounts</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::CertificateManager::Account.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.certificatemanager.accounts" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "expiry_events_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "days_before_expiry",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html"><code>AWS::CertificateManager::Account</code></a>.

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
    <td><CopyableCode code="ExpiryEventsConfiguration, region" /></td>
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
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>account</code>.
```sql
SELECT
region,
expiry_events_configuration,
account_id
FROM awscc.certificatemanager.accounts
WHERE region = 'us-east-1' AND data__Identifier = '<AccountId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>account</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.certificatemanager.accounts (
 ExpiryEventsConfiguration,
 region
)
SELECT 
'{{ ExpiryEventsConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.certificatemanager.accounts (
 ExpiryEventsConfiguration,
 region
)
SELECT 
 '{{ ExpiryEventsConfiguration }}',
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
  - name: account
    props:
      - name: ExpiryEventsConfiguration
        value:
          DaysBeforeExpiry: '{{ DaysBeforeExpiry }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.certificatemanager.accounts
WHERE data__Identifier = '<AccountId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>accounts</code> resource, the following permissions are required:

### Create
```json
acm:GetAccountConfiguration,
acm:PutAccountConfiguration
```

### Read
```json
acm:GetAccountConfiguration
```

### Update
```json
acm:GetAccountConfiguration,
acm:PutAccountConfiguration
```

### Delete
```json
acm:GetAccountConfiguration,
acm:PutAccountConfiguration
```
