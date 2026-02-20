---
title: configuration_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_policies
  - securityhub
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

Creates, updates, deletes or gets a <code>configuration_policy</code> resource or lists <code>configuration_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::ConfigurationPolicy resource represents the Central Configuration Policy in your account.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.configuration_policies" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the configuration policy."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the configuration policy."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the configuration policy."
  },
  {
    "name": "configuration_policy",
    "type": "object",
    "description": "An object that defines how Security Hub is configured.",
    "children": [
      {
        "name": "security_hub",
        "type": "object",
        "description": "An object that defines how AWS Security Hub is configured.",
        "children": [
          {
            "name": "enabled_standard_identifiers",
            "type": "array",
            "description": "A list that defines which security standards are enabled in the configuration policy."
          },
          {
            "name": "service_enabled",
            "type": "boolean",
            "description": "Indicates whether Security Hub is enabled in the policy."
          },
          {
            "name": "security_controls_configuration",
            "type": "object",
            "description": "An object that defines which security controls are enabled in an AWS Security Hub configuration policy.",
            "children": [
              {
                "name": "disabled_security_control_identifiers",
                "type": "array",
                "description": "A list of security controls that are disabled in the configuration policy"
              },
              {
                "name": "enabled_security_control_identifiers",
                "type": "array",
                "description": "A list of security controls that are enabled in the configuration policy."
              },
              {
                "name": "security_control_custom_parameters",
                "type": "array",
                "description": "A list of security controls and control parameter values that are included in a configuration policy."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "The universally unique identifier (UUID) of the configuration policy."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time, in UTC and ISO 8601 format."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The date and time, in UTC and ISO 8601 format."
  },
  {
    "name": "service_enabled",
    "type": "boolean",
    "description": "Indicates whether the service that the configuration policy applies to is enabled in the policy."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "description": "The Amazon Resource Name (ARN) of the configuration policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html"><code>AWS::SecurityHub::ConfigurationPolicy</code></a>.

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
    <td><code>configuration_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConfigurationPolicy, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configuration_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configuration_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configuration_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configuration_policies</code></td>
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

Gets all properties from an individual <code>configuration_policy</code>.
```sql
SELECT
region,
arn,
name,
description,
configuration_policy,
id,
created_at,
updated_at,
service_enabled,
tags
FROM awscc.securityhub.configuration_policies
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configuration_policies</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.securityhub.configuration_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.configuration_policies (
 Name,
 ConfigurationPolicy,
 region
)
SELECT 
'{{ Name }}',
 '{{ ConfigurationPolicy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.configuration_policies (
 Name,
 Description,
 ConfigurationPolicy,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ ConfigurationPolicy }}',
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
  - name: configuration_policy
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: ConfigurationPolicy
        value:
          SecurityHub:
            EnabledStandardIdentifiers:
              - '{{ EnabledStandardIdentifiers[0] }}'
            ServiceEnabled: '{{ ServiceEnabled }}'
            SecurityControlsConfiguration:
              DisabledSecurityControlIdentifiers:
                - '{{ DisabledSecurityControlIdentifiers[0] }}'
              EnabledSecurityControlIdentifiers:
                - '{{ EnabledSecurityControlIdentifiers[0] }}'
              SecurityControlCustomParameters:
                - Parameters: {}
                  SecurityControlId: '{{ SecurityControlId }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.securityhub.configuration_policies
SET data__PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "ConfigurationPolicy": configuration_policy,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.configuration_policies
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configuration_policies</code> resource, the following permissions are required:

### Create
```json
securityhub:CreateConfigurationPolicy,
securityhub:TagResource,
securityhub:ListTagsForResource
```

### Read
```json
securityhub:GetConfigurationPolicy,
securityhub:ListTagsForResource
```

### Update
```json
securityhub:UpdateConfigurationPolicy,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

### Delete
```json
securityhub:GetConfigurationPolicy,
securityhub:DeleteConfigurationPolicy
```

### List
```json
securityhub:ListConfigurationPolicies,
securityhub:ListTagsForResource
```
