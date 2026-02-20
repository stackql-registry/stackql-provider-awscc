---
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
  - rds
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
<tr><td><b>Description</b></td><td>A zero-ETL integration with Amazon Redshift.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.integrations" /></td></tr>
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
    "name": "integration_name",
    "type": "string",
    "description": "The name of the integration."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the integration."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of tags. For more information, see &#91;Tagging Amazon RDS Resources&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;Tagging.html) in the &#42;Amazon RDS User Guide.&#42;.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      },
      {
        "name": "value",
        "type": "string",
        "description": "A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with &#96;&#96;aws:&#96;&#96; or &#96;&#96;rds:&#96;&#96;. The string can only contain only the set of Unicode letters, digits, white-space, '&#95;', '.', ':', '/', '=', '+', '-', '@' (Java regex: \"^(&#91;\\\\p&#123;L&#125;\\\\p&#123;Z&#125;\\\\p&#123;N&#125;&#95;.:/=+\\\\-@&#93;&#42;)$\")."
      }
    ]
  },
  {
    "name": "data_filter",
    "type": "string",
    "description": "Data filters for the integration. These filters determine which tables from the source database are sent to the target Amazon Redshift data warehouse."
  },
  {
    "name": "source_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the database to use as the source for replication."
  },
  {
    "name": "target_arn",
    "type": "string",
    "description": "The ARN of the Redshift data warehouse to use as the target for replication."
  },
  {
    "name": "integration_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default AWS owned key."
  },
  {
    "name": "additional_encryption_context",
    "type": "object",
    "description": "An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see &#91;Encryption context&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt&#95;context) in the &#42;Key Management Service Developer Guide&#42;.<br />You can only include this parameter if you specify the &#96;&#96;KMSKeyId&#96;&#96; parameter."
  },
  {
    "name": "create_time",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "integration_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html"><code>AWS::RDS::Integration</code></a>.

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
integration_name,
description,
tags,
data_filter,
source_arn,
target_arn,
integration_arn,
kms_key_id,
additional_encryption_context,
create_time
FROM awscc.rds.integrations
WHERE region = 'us-east-1' AND Identifier = '<IntegrationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>integrations</code> in a region.
```sql
SELECT
region,
integration_arn
FROM awscc.rds.integrations_list_only
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
INSERT INTO awscc.rds.integrations (
 SourceArn,
 TargetArn,
 region
)
SELECT 
'{{ SourceArn }}',
 '{{ TargetArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rds.integrations (
 IntegrationName,
 Description,
 Tags,
 DataFilter,
 SourceArn,
 TargetArn,
 KMSKeyId,
 AdditionalEncryptionContext,
 region
)
SELECT 
 '{{ IntegrationName }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ DataFilter }}',
 '{{ SourceArn }}',
 '{{ TargetArn }}',
 '{{ KMSKeyId }}',
 '{{ AdditionalEncryptionContext }}',
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
      - name: IntegrationName
        value: '{{ IntegrationName }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: DataFilter
        value: '{{ DataFilter }}'
      - name: SourceArn
        value: '{{ SourceArn }}'
      - name: TargetArn
        value: '{{ TargetArn }}'
      - name: KMSKeyId
        value: '{{ KMSKeyId }}'
      - name: AdditionalEncryptionContext
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.rds.integrations
SET PatchDocument = string('{{ {
    "IntegrationName": integration_name,
    "Description": description,
    "Tags": tags,
    "DataFilter": data_filter
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<IntegrationArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rds.integrations
WHERE Identifier = '<IntegrationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>integrations</code> resource, the following permissions are required:

### Create
```json
rds:CreateIntegration,
rds:DescribeIntegrations,
rds:AddTagsToResource,
kms:CreateGrant,
kms:DescribeKey,
redshift:CreateInboundIntegration
```

### Read
```json
rds:DescribeIntegrations
```

### Update
```json
rds:DescribeIntegrations,
rds:AddTagsToResource,
rds:RemoveTagsFromResource,
rds:ModifyIntegration
```

### Delete
```json
rds:DeleteIntegration,
rds:DescribeIntegrations
```

### List
```json
rds:DescribeIntegrations
```
