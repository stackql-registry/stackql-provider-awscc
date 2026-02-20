---
title: data_protection_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - data_protection_settings
  - workspacesweb
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

Creates, updates, deletes or gets a <code>data_protection_setting</code> resource or lists <code>data_protection_settings</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_protection_settings</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::WorkSpacesWeb::DataProtectionSettings Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesweb.data_protection_settings" /></td></tr>
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
    "name": "additional_encryption_context",
    "type": "object",
    "description": ""
  },
  {
    "name": "associated_portal_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "creation_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "customer_managed_key",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_protection_settings_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "inline_redaction_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "inline_redaction_patterns",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "built_in_pattern_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "custom_pattern",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "pattern_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "pattern_regex",
                "type": "string",
                "description": ""
              },
              {
                "name": "pattern_description",
                "type": "string",
                "description": ""
              },
              {
                "name": "keyword_regex",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "redaction_place_holder",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "redaction_place_holder_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "redaction_place_holder_text",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "enforced_urls",
            "type": "array",
            "description": ""
          },
          {
            "name": "exempt_urls",
            "type": "array",
            "description": ""
          },
          {
            "name": "confidence_level",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "global_enforced_urls",
        "type": "array",
        "description": ""
      },
      {
        "name": "global_exempt_urls",
        "type": "array",
        "description": ""
      },
      {
        "name": "global_confidence_level",
        "type": "number",
        "description": ""
      }
    ]
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
    "name": "data_protection_settings_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsetting.html"><code>AWS::WorkSpacesWeb::DataProtectionSettings</code></a>.

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
    <td><code>data_protection_settings</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_protection_settings</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_protection_settings</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_protection_settings_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_protection_settings</code></td>
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

Gets all properties from an individual <code>data_protection_setting</code>.
```sql
SELECT
region,
additional_encryption_context,
associated_portal_arns,
creation_date,
customer_managed_key,
data_protection_settings_arn,
description,
display_name,
inline_redaction_configuration,
tags
FROM awscc.workspacesweb.data_protection_settings
WHERE region = 'us-east-1' AND data__Identifier = '<DataProtectionSettingsArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_protection_settings</code> in a region.
```sql
SELECT
region,
data_protection_settings_arn
FROM awscc.workspacesweb.data_protection_settings_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_protection_setting</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesweb.data_protection_settings (
 AdditionalEncryptionContext,
 CustomerManagedKey,
 Description,
 DisplayName,
 InlineRedactionConfiguration,
 Tags,
 region
)
SELECT 
'{{ AdditionalEncryptionContext }}',
 '{{ CustomerManagedKey }}',
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ InlineRedactionConfiguration }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesweb.data_protection_settings (
 AdditionalEncryptionContext,
 CustomerManagedKey,
 Description,
 DisplayName,
 InlineRedactionConfiguration,
 Tags,
 region
)
SELECT 
 '{{ AdditionalEncryptionContext }}',
 '{{ CustomerManagedKey }}',
 '{{ Description }}',
 '{{ DisplayName }}',
 '{{ InlineRedactionConfiguration }}',
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
  - name: data_protection_setting
    props:
      - name: AdditionalEncryptionContext
        value: {}
      - name: CustomerManagedKey
        value: '{{ CustomerManagedKey }}'
      - name: Description
        value: '{{ Description }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: InlineRedactionConfiguration
        value:
          InlineRedactionPatterns:
            - BuiltInPatternId: '{{ BuiltInPatternId }}'
              CustomPattern:
                PatternName: '{{ PatternName }}'
                PatternRegex: '{{ PatternRegex }}'
                PatternDescription: '{{ PatternDescription }}'
                KeywordRegex: '{{ KeywordRegex }}'
              RedactionPlaceHolder:
                RedactionPlaceHolderType: '{{ RedactionPlaceHolderType }}'
                RedactionPlaceHolderText: '{{ RedactionPlaceHolderText }}'
              EnforcedUrls:
                - '{{ EnforcedUrls[0] }}'
              ExemptUrls:
                - '{{ ExemptUrls[0] }}'
              ConfidenceLevel: null
          GlobalEnforcedUrls:
            - '{{ GlobalEnforcedUrls[0] }}'
          GlobalExemptUrls:
            - '{{ GlobalExemptUrls[0] }}'
          GlobalConfidenceLevel: null
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
UPDATE awscc.workspacesweb.data_protection_settings
SET data__PatchDocument = string('{{ {
    "Description": description,
    "DisplayName": display_name,
    "InlineRedactionConfiguration": inline_redaction_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<DataProtectionSettingsArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesweb.data_protection_settings
WHERE data__Identifier = '<DataProtectionSettingsArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_protection_settings</code> resource, the following permissions are required:

### Create
```json
workspaces-web:CreateDataProtectionSettings,
workspaces-web:GetDataProtectionSettings,
workspaces-web:ListDataProtectionSettings,
workspaces-web:ListTagsForResource,
workspaces-web:TagResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt,
kms:GenerateDataKeyWithoutPlaintext,
kms:ReEncryptTo,
kms:ReEncryptFrom
```

### Read
```json
workspaces-web:GetDataProtectionSettings,
workspaces-web:ListDataProtectionSettings,
workspaces-web:ListTagsForResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Update
```json
workspaces-web:UpdateDataProtectionSettings,
workspaces-web:GetDataProtectionSettings,
workspaces-web:ListDataProtectionSettings,
workspaces-web:TagResource,
workspaces-web:UntagResource,
workspaces-web:ListTagsForResource,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### Delete
```json
workspaces-web:GetDataProtectionSettings,
workspaces-web:ListDataProtectionSettings,
workspaces-web:DeleteDataProtectionSettings,
kms:DescribeKey,
kms:GenerateDataKey,
kms:Decrypt
```

### List
```json
workspaces-web:ListDataProtectionSettings,
kms:Decrypt,
kms:DescribeKey
```
