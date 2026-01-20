---
title: enclave_certificate_iam_role_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - enclave_certificate_iam_role_associations
  - ec2
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

Creates, updates, deletes or gets an <code>enclave_certificate_iam_role_association</code> resource or lists <code>enclave_certificate_iam_role_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>enclave_certificate_iam_role_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate. This association is based on Amazon Resource Names and it enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.enclave_certificate_iam_role_associations" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "certificate_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate."
  },
  {
    "name": "certificate_s3_bucket_name",
    "type": "string",
    "description": "The name of the Amazon S3 bucket to which the certificate was uploaded."
  },
  {
    "name": "certificate_s3_object_key",
    "type": "string",
    "description": "The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored."
  },
  {
    "name": "encryption_kms_key_id",
    "type": "string",
    "description": "The ID of the AWS KMS CMK used to encrypt the private key of the certificate."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html"><code>AWS::EC2::EnclaveCertificateIamRoleAssociation</code></a>.

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
    <td><CopyableCode code="CertificateArn, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>enclave_certificate_iam_role_association</code>.
```sql
SELECT
region,
certificate_arn,
role_arn,
certificate_s3_bucket_name,
certificate_s3_object_key,
encryption_kms_key_id
FROM awscc.ec2.enclave_certificate_iam_role_associations
WHERE region = 'us-east-1' AND data__Identifier = '<CertificateArn>|<RoleArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>enclave_certificate_iam_role_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.enclave_certificate_iam_role_associations (
 CertificateArn,
 RoleArn,
 region
)
SELECT 
'{{ CertificateArn }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.enclave_certificate_iam_role_associations (
 CertificateArn,
 RoleArn,
 region
)
SELECT 
 '{{ CertificateArn }}',
 '{{ RoleArn }}',
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
  - name: enclave_certificate_iam_role_association
    props:
      - name: CertificateArn
        value: '{{ CertificateArn }}'
      - name: RoleArn
        value: '{{ RoleArn }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.enclave_certificate_iam_role_associations
WHERE data__Identifier = '<CertificateArn|RoleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>enclave_certificate_iam_role_associations</code> resource, the following permissions are required:

### Create
```json
ec2:AssociateEnclaveCertificateIamRole,
ec2:GetAssociatedEnclaveCertificateIamRoles
```

### Read
```json
ec2:GetAssociatedEnclaveCertificateIamRoles
```

### Delete
```json
ec2:DisassociateEnclaveCertificateIamRole,
ec2:GetAssociatedEnclaveCertificateIamRoles
```

### List
```json
ec2:GetAssociatedEnclaveCertificateIamRoles
```
