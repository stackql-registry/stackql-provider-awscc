---
title: code_signing_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - code_signing_configs
  - lambda
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

Creates, updates, deletes or gets a <code>code_signing_config</code> resource or lists <code>code_signing_configs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>code_signing_configs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lambda::CodeSigningConfig.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.code_signing_configs" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "A description of the CodeSigningConfig"
  },
  {
    "name": "allowed_publishers",
    "type": "object",
    "description": "When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list",
    "children": [
      {
        "name": "signing_profile_version_arns",
        "type": "array",
        "description": "List of Signing profile version Arns"
      }
    ]
  },
  {
    "name": "code_signing_policies",
    "type": "object",
    "description": "Policies to control how to act if a signature is invalid",
    "children": [
      {
        "name": "untrusted_artifact_on_deployment",
        "type": "string",
        "description": "Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided"
      }
    ]
  },
  {
    "name": "code_signing_config_id",
    "type": "string",
    "description": "A unique identifier for CodeSigningConfig resource"
  },
  {
    "name": "code_signing_config_arn",
    "type": "string",
    "description": "A unique Arn for CodeSigningConfig resource"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags to apply to CodeSigningConfig resource",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for this tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key for this tag."
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
    "name": "code_signing_config_arn",
    "type": "string",
    "description": "A unique Arn for CodeSigningConfig resource"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html"><code>AWS::Lambda::CodeSigningConfig</code></a>.

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
    <td><code>code_signing_configs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AllowedPublishers, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>code_signing_configs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>code_signing_configs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>code_signing_configs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>code_signing_configs</code></td>
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

Gets all properties from an individual <code>code_signing_config</code>.
```sql
SELECT
region,
description,
allowed_publishers,
code_signing_policies,
code_signing_config_id,
code_signing_config_arn,
tags
FROM awscc.lambda.code_signing_configs
WHERE region = 'us-east-1' AND Identifier = '<CodeSigningConfigArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>code_signing_configs</code> in a region.
```sql
SELECT
region,
code_signing_config_arn
FROM awscc.lambda.code_signing_configs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>code_signing_config</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.code_signing_configs (
 AllowedPublishers,
 region
)
SELECT 
'{{ AllowedPublishers }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lambda.code_signing_configs (
 Description,
 AllowedPublishers,
 CodeSigningPolicies,
 Tags,
 region
)
SELECT 
 '{{ Description }}',
 '{{ AllowedPublishers }}',
 '{{ CodeSigningPolicies }}',
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
  - name: code_signing_config
    props:
      - name: Description
        value: '{{ Description }}'
      - name: AllowedPublishers
        value:
          SigningProfileVersionArns:
            - '{{ SigningProfileVersionArns[0] }}'
      - name: CodeSigningPolicies
        value:
          UntrustedArtifactOnDeployment: '{{ UntrustedArtifactOnDeployment }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lambda.code_signing_configs
SET PatchDocument = string('{{ {
    "Description": description,
    "AllowedPublishers": allowed_publishers,
    "CodeSigningPolicies": code_signing_policies,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<CodeSigningConfigArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.code_signing_configs
WHERE Identifier = '<CodeSigningConfigArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>code_signing_configs</code> resource, the following permissions are required:

### Create
```json
lambda:CreateCodeSigningConfig,
lambda:TagResource
```

### Read
```json
lambda:GetCodeSigningConfig,
lambda:ListTags
```

### Update
```json
lambda:UpdateCodeSigningConfig,
lambda:TagResource,
lambda:UntagResource
```

### Delete
```json
lambda:DeleteCodeSigningConfig
```

### List
```json
lambda:ListCodeSigningConfigs
```
