---
title: playback_restriction_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - playback_restriction_policies
  - ivs
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

Creates, updates, deletes or gets a <code>playback_restriction_policy</code> resource or lists <code>playback_restriction_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>playback_restriction_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::IVS::PlaybackRestrictionPolicy.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ivs.playback_restriction_policies" /></td></tr>
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
    "description": "Playback-restriction-policy identifier."
  },
  {
    "name": "allowed_countries",
    "type": "array",
    "description": "A list of country codes that control geoblocking restriction. Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array)."
  },
  {
    "name": "allowed_origins",
    "type": "array",
    "description": "A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin"
  },
  {
    "name": "enable_strict_origin_enforcement",
    "type": "boolean",
    "description": "Whether channel playback is constrained by origin site."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Playback-restriction-policy name."
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
    "name": "arn",
    "type": "string",
    "description": "Playback-restriction-policy identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackrestrictionpolicy.html"><code>AWS::IVS::PlaybackRestrictionPolicy</code></a>.

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
    <td><code>playback_restriction_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>playback_restriction_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>playback_restriction_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>playback_restriction_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>playback_restriction_policies</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>playback_restriction_policy</code>.
```sql
SELECT
region,
arn,
allowed_countries,
allowed_origins,
enable_strict_origin_enforcement,
name,
tags
FROM awscc.ivs.playback_restriction_policies
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>playback_restriction_policies</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.ivs.playback_restriction_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>playback_restriction_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ivs.playback_restriction_policies (
 AllowedCountries,
 AllowedOrigins,
 EnableStrictOriginEnforcement,
 Name,
 Tags,
 region
)
SELECT 
'{{ AllowedCountries }}',
 '{{ AllowedOrigins }}',
 '{{ EnableStrictOriginEnforcement }}',
 '{{ Name }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ivs.playback_restriction_policies (
 AllowedCountries,
 AllowedOrigins,
 EnableStrictOriginEnforcement,
 Name,
 Tags,
 region
)
SELECT 
 '{{ AllowedCountries }}',
 '{{ AllowedOrigins }}',
 '{{ EnableStrictOriginEnforcement }}',
 '{{ Name }}',
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
  - name: playback_restriction_policy
    props:
      - name: AllowedCountries
        value:
          - '{{ AllowedCountries[0] }}'
      - name: AllowedOrigins
        value:
          - '{{ AllowedOrigins[0] }}'
      - name: EnableStrictOriginEnforcement
        value: '{{ EnableStrictOriginEnforcement }}'
      - name: Name
        value: '{{ Name }}'
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
UPDATE awscc.ivs.playback_restriction_policies
SET data__PatchDocument = string('{{ {
    "AllowedCountries": allowed_countries,
    "AllowedOrigins": allowed_origins,
    "EnableStrictOriginEnforcement": enable_strict_origin_enforcement,
    "Name": name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ivs.playback_restriction_policies
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>playback_restriction_policies</code> resource, the following permissions are required:

### Create
```json
ivs:CreatePlaybackRestrictionPolicy,
ivs:TagResource
```

### Read
```json
ivs:GetPlaybackRestrictionPolicy,
ivs:ListTagsForResource
```

### Update
```json
ivs:GetPlaybackRestrictionPolicy,
ivs:UpdatePlaybackRestrictionPolicy,
ivs:ListTagsForResource,
ivs:UntagResource,
ivs:TagResource
```

### Delete
```json
ivs:DeletePlaybackRestrictionPolicy,
ivs:UntagResource
```

### List
```json
ivs:ListPlaybackRestrictionPolicies,
ivs:ListTagsForResource
```
