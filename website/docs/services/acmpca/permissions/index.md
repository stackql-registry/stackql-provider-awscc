---
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - acmpca
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

Creates, updates, deletes or gets a <code>permission</code> resource or lists <code>permissions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>permissions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Permission set on private certificate authority</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.acmpca.permissions" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "actions",
    "type": "array",
    "description": "The actions that the specified AWS service principal can use. Actions IssueCertificate, GetCertificate and ListPermissions must be provided."
  },
  {
    "name": "certificate_authority_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the Private Certificate Authority that grants the permission."
  },
  {
    "name": "principal",
    "type": "string",
    "description": "The AWS service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com."
  },
  {
    "name": "source_account",
    "type": "string",
    "description": "The ID of the calling account."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html"><code>AWS::ACMPCA::Permission</code></a>.

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
    <td><CopyableCode code="Actions, CertificateAuthorityArn, Principal, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>permission</code>.
```sql
SELECT
region,
actions,
certificate_authority_arn,
principal,
source_account
FROM awscc.acmpca.permissions
WHERE region = 'us-east-1' AND Identifier = '<CertificateAuthorityArn>|<Principal>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>permission</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.acmpca.permissions (
 Actions,
 CertificateAuthorityArn,
 Principal,
 region
)
SELECT 
'{{ Actions }}',
 '{{ CertificateAuthorityArn }}',
 '{{ Principal }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.acmpca.permissions (
 Actions,
 CertificateAuthorityArn,
 Principal,
 SourceAccount,
 region
)
SELECT 
 '{{ Actions }}',
 '{{ CertificateAuthorityArn }}',
 '{{ Principal }}',
 '{{ SourceAccount }}',
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
  - name: permission
    props:
      - name: Actions
        value:
          - '{{ Actions[0] }}'
      - name: CertificateAuthorityArn
        value: '{{ CertificateAuthorityArn }}'
      - name: Principal
        value: '{{ Principal }}'
      - name: SourceAccount
        value: '{{ SourceAccount }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.acmpca.permissions
WHERE Identifier = '<CertificateAuthorityArn|Principal>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>permissions</code> resource, the following permissions are required:

### Create
```json
acm-pca:CreatePermission,
acm-pca:ListPermissions
```

### Read
```json
acm-pca:ListPermissions
```

### Delete
```json
acm-pca:DeletePermission
```
