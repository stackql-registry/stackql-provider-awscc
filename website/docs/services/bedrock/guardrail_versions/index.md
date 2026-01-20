---
title: guardrail_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - guardrail_versions
  - bedrock
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

Creates, updates, deletes or gets a <code>guardrail_version</code> resource or lists <code>guardrail_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>guardrail_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::GuardrailVersion Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.guardrail_versions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Guardrail version"
  },
  {
    "name": "guardrail_arn",
    "type": "string",
    "description": "Arn representation for the guardrail"
  },
  {
    "name": "guardrail_id",
    "type": "string",
    "description": "Unique id for the guardrail"
  },
  {
    "name": "guardrail_identifier",
    "type": "string",
    "description": "Identifier (GuardrailId or GuardrailArn) for the guardrail"
  },
  {
    "name": "version",
    "type": "string",
    "description": "Guardrail version"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrailversion.html"><code>AWS::Bedrock::GuardrailVersion</code></a>.

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
    <td><CopyableCode code="GuardrailIdentifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>guardrail_version</code>.
```sql
SELECT
region,
description,
guardrail_arn,
guardrail_id,
guardrail_identifier,
version
FROM awscc.bedrock.guardrail_versions
WHERE region = 'us-east-1' AND data__Identifier = '<GuardrailId>|<Version>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>guardrail_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.bedrock.guardrail_versions (
 GuardrailIdentifier,
 region
)
SELECT 
'{{ GuardrailIdentifier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.guardrail_versions (
 Description,
 GuardrailIdentifier,
 region
)
SELECT 
 '{{ Description }}',
 '{{ GuardrailIdentifier }}',
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
  - name: guardrail_version
    props:
      - name: Description
        value: '{{ Description }}'
      - name: GuardrailIdentifier
        value: '{{ GuardrailIdentifier }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.guardrail_versions
WHERE data__Identifier = '<GuardrailId|Version>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>guardrail_versions</code> resource, the following permissions are required:

### Create
```json
bedrock:CreateGuardrailVersion,
bedrock:GetGuardrail,
kms:CreateGrant,
kms:Decrypt
```

### Read
```json
bedrock:GetGuardrail,
kms:Decrypt
```

### Delete
```json
bedrock:DeleteGuardrail,
bedrock:GetGuardrail,
kms:RetireGrant
```
