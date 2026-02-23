---
title: object_types
hide_title: false
hide_table_of_contents: false
keywords:
  - object_types
  - customerprofiles
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

Creates, updates, deletes or gets an <code>object_type</code> resource or lists <code>object_types</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>object_types</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An ObjectType resource of Amazon Connect Customer Profiles</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.object_types" /></td></tr>
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "object_type_name",
    "type": "string",
    "description": "The name of the profile object type."
  },
  {
    "name": "allow_profile_creation",
    "type": "boolean",
    "description": "Indicates whether a profile should be created when data is received."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the profile object type."
  },
  {
    "name": "encryption_key",
    "type": "string",
    "description": "The default encryption key"
  },
  {
    "name": "expiration_days",
    "type": "integer",
    "description": "The default number of days until the data within the domain expires."
  },
  {
    "name": "fields",
    "type": "array",
    "description": "A list of the name and ObjectType field.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "object_type_field",
        "type": "object",
        "description": "Represents a field in a ProfileObjectType.",
        "children": [
          {
            "name": "source",
            "type": "string",
            "description": "A field of a ProfileObject. For example: &#95;source.FirstName, where \"&#95;source\" is a ProfileObjectType of a Zendesk user and \"FirstName\" is a field in that ObjectType."
          },
          {
            "name": "target",
            "type": "string",
            "description": "The location of the data in the standard ProfileObject model. For example: &#95;profile.Address.PostalCode."
          },
          {
            "name": "content_type",
            "type": "string",
            "description": "The content type of the field. Used for determining equality when searching."
          }
        ]
      }
    ]
  },
  {
    "name": "keys",
    "type": "array",
    "description": "A list of unique keys that can be used to map data to the profile.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "object_type_key_list",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "field_names",
            "type": "array",
            "description": "The reference for the key name of the fields map."
          },
          {
            "name": "standard_identifiers",
            "type": "array",
            "description": "The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP&#95;ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW&#95;ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles."
          }
        ]
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time of this integration got created."
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The time of this integration got last updated at."
  },
  {
    "name": "source_last_updated_timestamp_format",
    "type": "string",
    "description": "The format of your sourceLastUpdatedTimestamp that was previously set up."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the integration.",
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
    "name": "template_id",
    "type": "string",
    "description": "A unique identifier for the object template."
  },
  {
    "name": "max_profile_object_count",
    "type": "integer",
    "description": "The maximum number of profile objects for this object type"
  },
  {
    "name": "max_available_profile_object_count",
    "type": "integer",
    "description": "The maximum available number of profile objects"
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
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "object_type_name",
    "type": "string",
    "description": "The name of the profile object type."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-objecttype.html"><code>AWS::CustomerProfiles::ObjectType</code></a>.

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
    <td><code>object_types</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainName, ObjectTypeName, Description, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>object_types</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>object_types</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>object_types_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>object_types</code></td>
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

Gets all properties from an individual <code>object_type</code>.
```sql
SELECT
region,
domain_name,
object_type_name,
allow_profile_creation,
description,
encryption_key,
expiration_days,
fields,
keys,
created_at,
last_updated_at,
source_last_updated_timestamp_format,
tags,
template_id,
max_profile_object_count,
max_available_profile_object_count
FROM awscc.customerprofiles.object_types
WHERE region = 'us-east-1' AND Identifier = '{{ domain_name }}|{{ object_type_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>object_types</code> in a region.
```sql
SELECT
region,
domain_name,
object_type_name
FROM awscc.customerprofiles.object_types_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>object_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.object_types (
 DomainName,
 ObjectTypeName,
 Description,
 region
)
SELECT
'{{ domain_name }}',
 '{{ object_type_name }}',
 '{{ description }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.object_types (
 DomainName,
 ObjectTypeName,
 AllowProfileCreation,
 Description,
 EncryptionKey,
 ExpirationDays,
 Fields,
 Keys,
 SourceLastUpdatedTimestampFormat,
 Tags,
 TemplateId,
 MaxProfileObjectCount,
 region
)
SELECT
 '{{ domain_name }}',
 '{{ object_type_name }}',
 '{{ allow_profile_creation }}',
 '{{ description }}',
 '{{ encryption_key }}',
 '{{ expiration_days }}',
 '{{ fields }}',
 '{{ keys }}',
 '{{ source_last_updated_timestamp_format }}',
 '{{ tags }}',
 '{{ template_id }}',
 '{{ max_profile_object_count }}',
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
  - name: object_type
    props:
      - name: domain_name
        value: '{{ domain_name }}'
      - name: object_type_name
        value: '{{ object_type_name }}'
      - name: allow_profile_creation
        value: '{{ allow_profile_creation }}'
      - name: description
        value: '{{ description }}'
      - name: encryption_key
        value: '{{ encryption_key }}'
      - name: expiration_days
        value: '{{ expiration_days }}'
      - name: fields
        value:
          - name: '{{ name }}'
            object_type_field:
              source: '{{ source }}'
              target: '{{ target }}'
              content_type: '{{ content_type }}'
      - name: keys
        value:
          - name: '{{ name }}'
            object_type_key_list:
              - field_names:
                  - '{{ field_names[0] }}'
                standard_identifiers:
                  - '{{ standard_identifiers[0] }}'
      - name: source_last_updated_timestamp_format
        value: '{{ source_last_updated_timestamp_format }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: template_id
        value: '{{ template_id }}'
      - name: max_profile_object_count
        value: '{{ max_profile_object_count }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>object_type</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.customerprofiles.object_types
SET PatchDocument = string('{{ {
    "AllowProfileCreation": allow_profile_creation,
    "Description": description,
    "EncryptionKey": encryption_key,
    "ExpirationDays": expiration_days,
    "Fields": fields,
    "Keys": keys,
    "SourceLastUpdatedTimestampFormat": source_last_updated_timestamp_format,
    "Tags": tags,
    "TemplateId": template_id,
    "MaxProfileObjectCount": max_profile_object_count
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ domain_name }}|{{ object_type_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.object_types
WHERE Identifier = '{{ domain_name }}|{{ object_type_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>object_types</code> resource, the following permissions are required:

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
profile:GetProfileObjectType,
profile:PutProfileObjectType,
profile:TagResource,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
profile:GetProfileObjectType,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
profile:GetProfileObjectType,
profile:PutProfileObjectType,
profile:UntagResource,
profile:TagResource,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
profile:DeleteProfileObjectType
```

</TabItem>
<TabItem value="list">

```json
profile:ListProfileObjectTypes,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
</Tabs>