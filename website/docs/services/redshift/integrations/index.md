---
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - redshift
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

Creates, updates, deletes or gets an <code>integration</code> resource or lists <code>integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Integration from a source AWS service to a Redshift cluster</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.integrations" /></td></tr>
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
    "name": "integration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the integration."
  },
  {
    "name": "integration_name",
    "type": "string",
    "description": "The name of the integration."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the database to use as the source for replication"
  },
  {
    "name": "target_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication"
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
    "name": "create_time",
    "type": "string",
    "description": "The time (UTC) when the integration was created."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "An KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default AWS owned KMS key is used."
  },
  {
    "name": "additional_encryption_context",
    "type": "object",
    "description": "An optional set of non-secret key–value pairs that contains additional contextual information about the data."
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
    "name": "integration_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the integration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html"><code>AWS::Redshift::Integration</code></a>.

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
    <td><code>integrations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SourceArn, TargetArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>integrations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>integrations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>integrations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>integrations</code></td>
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

Gets all properties from an individual <code>integration</code>.
```sql
SELECT
region,
integration_arn,
integration_name,
source_arn,
target_arn,
tags,
create_time,
kms_key_id,
additional_encryption_context
FROM awscc.redshift.integrations
WHERE region = 'us-east-1' AND Identifier = '{{ integration_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>integrations</code> in a region.
```sql
SELECT
region,
integration_arn
FROM awscc.redshift.integrations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.integrations (
 SourceArn,
 TargetArn,
 region
)
SELECT
'{{ source_arn }}',
 '{{ target_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.integrations (
 IntegrationName,
 SourceArn,
 TargetArn,
 Tags,
 KMSKeyId,
 AdditionalEncryptionContext,
 region
)
SELECT
 '{{ integration_name }}',
 '{{ source_arn }}',
 '{{ target_arn }}',
 '{{ tags }}',
 '{{ kms_key_id }}',
 '{{ additional_encryption_context }}',
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
  - name: integration
    props:
      - name: integration_name
        value: '{{ integration_name }}'
      - name: source_arn
        value: '{{ source_arn }}'
      - name: target_arn
        value: '{{ target_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: kms_key_id
        value: '{{ kms_key_id }}'
      - name: additional_encryption_context
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.redshift.integrations
SET PatchDocument = string('{{ {
    "IntegrationName": integration_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ integration_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.integrations
WHERE Identifier = '{{ integration_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>integrations</code> resource, the following permissions are required:

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
redshift:CreateIntegration,
redshift:DescribeIntegrations,
redshift:CreateTags,
redshift:DescribeTags,
redshift:DescribeClusters,
redshift:CreateInboundIntegration,
redshift-serverless:ListNamespaces,
kms:CreateGrant,
kms:DescribeKey
```

</TabItem>
<TabItem value="read">

```json
redshift:DescribeIntegrations,
redshift:DescribeTags
```

</TabItem>
<TabItem value="update">

```json
redshift:DescribeIntegrations,
redshift:ModifyIntegration,
redshift:CreateTags,
redshift:DeleteTags,
redshift:DescribeClusters,
redshift:DescribeTags,
redshift-serverless:ListNamespaces
```

</TabItem>
<TabItem value="delete">

```json
redshift:DeleteTags,
redshift:DeleteIntegration,
redshift:DescribeIntegrations
```

</TabItem>
<TabItem value="list">

```json
redshift:DescribeTags,
redshift:DescribeIntegrations
```

</TabItem>
</Tabs>