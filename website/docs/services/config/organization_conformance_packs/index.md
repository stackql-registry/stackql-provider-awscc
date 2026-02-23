---
title: organization_conformance_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_conformance_packs
  - config
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

Creates, updates, deletes or gets an <code>organization_conformance_pack</code> resource or lists <code>organization_conformance_packs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organization_conformance_packs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::Config::OrganizationConformancePack.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.config.organization_conformance_packs" /></td></tr>
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
    "name": "organization_conformance_pack_name",
    "type": "string",
    "description": "The name of the organization conformance pack."
  },
  {
    "name": "template_s3_uri",
    "type": "string",
    "description": "Location of file containing the template body."
  },
  {
    "name": "template_body",
    "type": "string",
    "description": "A string containing full conformance pack template body."
  },
  {
    "name": "delivery_s3_bucket",
    "type": "string",
    "description": "AWS Config stores intermediate files while processing conformance pack template."
  },
  {
    "name": "delivery_s3_key_prefix",
    "type": "string",
    "description": "The prefix for the delivery S3 bucket."
  },
  {
    "name": "conformance_pack_input_parameters",
    "type": "array",
    "description": "A list of ConformancePackInputParameter objects.",
    "children": [
      {
        "name": "parameter_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "parameter_value",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "excluded_accounts",
    "type": "array",
    "description": "A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack."
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
    "name": "organization_conformance_pack_name",
    "type": "string",
    "description": "The name of the organization conformance pack."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html"><code>AWS::Config::OrganizationConformancePack</code></a>.

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
    <td><code>organization_conformance_packs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="OrganizationConformancePackName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>organization_conformance_packs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>organization_conformance_packs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>organization_conformance_packs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>organization_conformance_packs</code></td>
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

Gets all properties from an individual <code>organization_conformance_pack</code>.
```sql
SELECT
region,
organization_conformance_pack_name,
template_s3_uri,
template_body,
delivery_s3_bucket,
delivery_s3_key_prefix,
conformance_pack_input_parameters,
excluded_accounts
FROM awscc.config.organization_conformance_packs
WHERE region = 'us-east-1' AND Identifier = '{{ organization_conformance_pack_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>organization_conformance_packs</code> in a region.
```sql
SELECT
region,
organization_conformance_pack_name
FROM awscc.config.organization_conformance_packs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>organization_conformance_pack</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.config.organization_conformance_packs (
 OrganizationConformancePackName,
 region
)
SELECT
'{{ organization_conformance_pack_name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.config.organization_conformance_packs (
 OrganizationConformancePackName,
 TemplateS3Uri,
 TemplateBody,
 DeliveryS3Bucket,
 DeliveryS3KeyPrefix,
 ConformancePackInputParameters,
 ExcludedAccounts,
 region
)
SELECT
 '{{ organization_conformance_pack_name }}',
 '{{ template_s3_uri }}',
 '{{ template_body }}',
 '{{ delivery_s3_bucket }}',
 '{{ delivery_s3_key_prefix }}',
 '{{ conformance_pack_input_parameters }}',
 '{{ excluded_accounts }}',
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
  - name: organization_conformance_pack
    props:
      - name: organization_conformance_pack_name
        value: '{{ organization_conformance_pack_name }}'
      - name: template_s3_uri
        value: '{{ template_s3_uri }}'
      - name: template_body
        value: '{{ template_body }}'
      - name: delivery_s3_bucket
        value: '{{ delivery_s3_bucket }}'
      - name: delivery_s3_key_prefix
        value: '{{ delivery_s3_key_prefix }}'
      - name: conformance_pack_input_parameters
        value:
          - parameter_name: '{{ parameter_name }}'
            parameter_value: '{{ parameter_value }}'
      - name: excluded_accounts
        value:
          - '{{ excluded_accounts[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>organization_conformance_pack</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.config.organization_conformance_packs
SET PatchDocument = string('{{ {
    "TemplateS3Uri": template_s3_uri,
    "TemplateBody": template_body,
    "DeliveryS3Bucket": delivery_s3_bucket,
    "DeliveryS3KeyPrefix": delivery_s3_key_prefix,
    "ConformancePackInputParameters": conformance_pack_input_parameters,
    "ExcludedAccounts": excluded_accounts
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ organization_conformance_pack_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.config.organization_conformance_packs
WHERE Identifier = '{{ organization_conformance_pack_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>organization_conformance_packs</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
config:PutOrganizationConformancePack,
config:DescribeOrganizationConformancePackStatuses,
config:GetOrganizationConformancePackDetailedStatus,
config:DescribeOrganizationConformancePacks,
s3:GetObject,
s3:GetBucketAcl,
iam:CreateServiceLinkedRole,
iam:PassRole,
organizations:ListDelegatedAdministrators,
organizations:EnableAWSServiceAccess
```

</TabItem>
<TabItem value="read">

```json
config:DescribeOrganizationConformancePacks
```

</TabItem>
<TabItem value="delete">

```json
config:DeleteOrganizationConformancePack,
config:DescribeOrganizationConformancePackStatuses,
config:GetOrganizationConformancePackDetailedStatus,
organizations:ListDelegatedAdministrators
```

</TabItem>
<TabItem value="update">

```json
config:PutOrganizationConformancePack,
config:DescribeOrganizationConformancePackStatuses,
config:GetOrganizationConformancePackDetailedStatus,
s3:GetObject,
s3:GetBucketAcl,
iam:CreateServiceLinkedRole,
iam:PassRole,
organizations:ListDelegatedAdministrators,
organizations:EnableAWSServiceAccess
```

</TabItem>
<TabItem value="list">

```json
config:DescribeOrganizationConformancePacks
```

</TabItem>
</Tabs>