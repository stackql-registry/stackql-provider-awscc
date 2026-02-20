---
title: web_experiences
hide_title: false
hide_table_of_contents: false
keywords:
  - web_experiences
  - qbusiness
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

Creates, updates, deletes or gets a <code>web_experience</code> resource or lists <code>web_experiences</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>web_experiences</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::WebExperience Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.web_experiences" /></td></tr>
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "default_endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "identity_provider_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "sample_prompts_control_mode",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "subtitle",
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
    "name": "title",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "web_experience_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "web_experience_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "welcome_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "origins",
    "type": "array",
    "description": ""
  },
  {
    "name": "customization_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "custom_cs_surl",
        "type": "string",
        "description": ""
      },
      {
        "name": "logo_url",
        "type": "string",
        "description": ""
      },
      {
        "name": "font_url",
        "type": "string",
        "description": ""
      },
      {
        "name": "favicon_url",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "browser_extension_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled_browser_extensions",
        "type": "array",
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "web_experience_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html"><code>AWS::QBusiness::WebExperience</code></a>.

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
    <td><code>web_experiences</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>web_experiences</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>web_experiences</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>web_experiences_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>web_experiences</code></td>
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

Gets all properties from an individual <code>web_experience</code>.
```sql
SELECT
region,
application_id,
created_at,
default_endpoint,
identity_provider_configuration,
role_arn,
sample_prompts_control_mode,
status,
subtitle,
tags,
title,
updated_at,
web_experience_arn,
web_experience_id,
welcome_message,
origins,
customization_configuration,
browser_extension_configuration
FROM awscc.qbusiness.web_experiences
WHERE region = 'us-east-1' AND Identifier = '<ApplicationId>|<WebExperienceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>web_experiences</code> in a region.
```sql
SELECT
region,
application_id,
web_experience_id
FROM awscc.qbusiness.web_experiences_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>web_experience</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.web_experiences (
 ApplicationId,
 region
)
SELECT 
'{{ ApplicationId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.web_experiences (
 ApplicationId,
 IdentityProviderConfiguration,
 RoleArn,
 SamplePromptsControlMode,
 Subtitle,
 Tags,
 Title,
 WelcomeMessage,
 Origins,
 CustomizationConfiguration,
 BrowserExtensionConfiguration,
 region
)
SELECT 
 '{{ ApplicationId }}',
 '{{ IdentityProviderConfiguration }}',
 '{{ RoleArn }}',
 '{{ SamplePromptsControlMode }}',
 '{{ Subtitle }}',
 '{{ Tags }}',
 '{{ Title }}',
 '{{ WelcomeMessage }}',
 '{{ Origins }}',
 '{{ CustomizationConfiguration }}',
 '{{ BrowserExtensionConfiguration }}',
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
  - name: web_experience
    props:
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: IdentityProviderConfiguration
        value: null
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: SamplePromptsControlMode
        value: '{{ SamplePromptsControlMode }}'
      - name: Subtitle
        value: '{{ Subtitle }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Title
        value: '{{ Title }}'
      - name: WelcomeMessage
        value: '{{ WelcomeMessage }}'
      - name: Origins
        value:
          - '{{ Origins[0] }}'
      - name: CustomizationConfiguration
        value:
          CustomCSSUrl: '{{ CustomCSSUrl }}'
          LogoUrl: '{{ LogoUrl }}'
          FontUrl: '{{ FontUrl }}'
          FaviconUrl: '{{ FaviconUrl }}'
      - name: BrowserExtensionConfiguration
        value:
          EnabledBrowserExtensions:
            - '{{ EnabledBrowserExtensions[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>web_experience</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.qbusiness.web_experiences
SET PatchDocument = string('{{ {
    "IdentityProviderConfiguration": identity_provider_configuration,
    "RoleArn": role_arn,
    "SamplePromptsControlMode": sample_prompts_control_mode,
    "Subtitle": subtitle,
    "Tags": tags,
    "Title": title,
    "WelcomeMessage": welcome_message,
    "Origins": origins,
    "CustomizationConfiguration": customization_configuration,
    "BrowserExtensionConfiguration": browser_extension_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationId>|<WebExperienceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.web_experiences
WHERE Identifier = '<ApplicationId|WebExperienceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>web_experiences</code> resource, the following permissions are required:

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
iam:PassRole,
qbusiness:CreateWebExperience,
qbusiness:GetWebExperience,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
sso:PutApplicationGrant,
sso:UpdateApplication
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetWebExperience,
qbusiness:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
qbusiness:GetWebExperience,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateWebExperience,
sso:PutApplicationGrant,
sso:UpdateApplication
```

</TabItem>
<TabItem value="delete">

```json
qbusiness:DeleteWebExperience,
qbusiness:GetWebExperience
```

</TabItem>
<TabItem value="list">

```json
qbusiness:ListWebExperiences
```

</TabItem>
</Tabs>