---
title: trusted_entity_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - trusted_entity_sets
  - guardduty
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

Creates, updates, deletes or gets a <code>trusted_entity_set</code> resource or lists <code>trusted_entity_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trusted_entity_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::GuardDuty::TrustedEntitySet</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.guardduty.trusted_entity_sets" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "format",
    "type": "string",
    "description": ""
  },
  {
    "name": "activate",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "error_details",
    "type": "string",
    "description": ""
  },
  {
    "name": "detector_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "location",
    "type": "string",
    "description": ""
  },
  {
    "name": "expected_bucket_owner",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "description": ""
  },
  {
    "name": "detector_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-trustedentityset.html"><code>AWS::GuardDuty::TrustedEntitySet</code></a>.

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
    <td><code>trusted_entity_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Format, Location, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>trusted_entity_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>trusted_entity_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>trusted_entity_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>trusted_entity_sets</code></td>
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

Gets all properties from an individual <code>trusted_entity_set</code>.
```sql
SELECT
region,
id,
format,
activate,
status,
created_at,
updated_at,
error_details,
detector_id,
name,
location,
expected_bucket_owner,
tags
FROM awscc.guardduty.trusted_entity_sets
WHERE region = 'us-east-1' AND Identifier = '<Id>|<DetectorId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>trusted_entity_sets</code> in a region.
```sql
SELECT
region,
id,
detector_id
FROM awscc.guardduty.trusted_entity_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trusted_entity_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.guardduty.trusted_entity_sets (
 Format,
 Location,
 region
)
SELECT 
'{{ Format }}',
 '{{ Location }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.guardduty.trusted_entity_sets (
 Format,
 Activate,
 DetectorId,
 Name,
 Location,
 ExpectedBucketOwner,
 Tags,
 region
)
SELECT 
 '{{ Format }}',
 '{{ Activate }}',
 '{{ DetectorId }}',
 '{{ Name }}',
 '{{ Location }}',
 '{{ ExpectedBucketOwner }}',
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
  - name: trusted_entity_set
    props:
      - name: Format
        value: '{{ Format }}'
      - name: Activate
        value: '{{ Activate }}'
      - name: DetectorId
        value: '{{ DetectorId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Location
        value: '{{ Location }}'
      - name: ExpectedBucketOwner
        value: '{{ ExpectedBucketOwner }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.guardduty.trusted_entity_sets
SET PatchDocument = string('{{ {
    "Activate": activate,
    "Name": name,
    "Location": location,
    "ExpectedBucketOwner": expected_bucket_owner,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>|<DetectorId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.guardduty.trusted_entity_sets
WHERE Identifier = '<Id|DetectorId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trusted_entity_sets</code> resource, the following permissions are required:

### Create
```json
guardduty:CreateTrustedEntitySet,
guardduty:GetTrustedEntitySet,
guardduty:TagResource,
s3:GetObject
```

### Read
```json
guardduty:GetTrustedEntitySet
```

### Delete
```json
guardduty:ListDetectors,
guardduty:ListTrustedEntitySets,
guardduty:DeleteTrustedEntitySet,
guardduty:GetTrustedEntitySet
```

### Update
```json
guardduty:UpdateTrustedEntitySet,
guardduty:GetTrustedEntitySet,
guardduty:ListTrustedEntitySets,
guardduty:TagResource,
guardduty:UntagResource,
s3:GetObject
```

### List
```json
guardduty:ListTrustedEntitySets
```
