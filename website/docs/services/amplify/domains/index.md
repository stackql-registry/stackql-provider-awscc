---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - amplify
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::Amplify::Domain resource allows you to connect a custom domain to your app.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.amplify.domains" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "app_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "auto_sub_domain_creation_patterns",
    "type": "array",
    "description": ""
  },
  {
    "name": "auto_sub_domain_iam_role",
    "type": "string",
    "description": ""
  },
  {
    "name": "certificate_record",
    "type": "string",
    "description": ""
  },
  {
    "name": "certificate",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "certificate_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "certificate_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "certificate_verification_dns_record",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "certificate_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "certificate_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_certificate_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "update_status",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_auto_sub_domain",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "status_reason",
    "type": "string",
    "description": ""
  },
  {
    "name": "sub_domain_settings",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "prefix",
        "type": "string",
        "description": ""
      },
      {
        "name": "branch_name",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html"><code>AWS::Amplify::Domain</code></a>.

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
    <td><CopyableCode code="AppId, DomainName, SubDomainSettings, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
app_id,
arn,
auto_sub_domain_creation_patterns,
auto_sub_domain_iam_role,
certificate_record,
certificate,
certificate_settings,
domain_name,
domain_status,
update_status,
enable_auto_sub_domain,
status_reason,
sub_domain_settings
FROM awscc.amplify.domains
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.amplify.domains (
 AppId,
 DomainName,
 SubDomainSettings,
 region
)
SELECT 
'{{ AppId }}',
 '{{ DomainName }}',
 '{{ SubDomainSettings }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.amplify.domains (
 AppId,
 AutoSubDomainCreationPatterns,
 AutoSubDomainIAMRole,
 CertificateSettings,
 DomainName,
 EnableAutoSubDomain,
 SubDomainSettings,
 region
)
SELECT 
 '{{ AppId }}',
 '{{ AutoSubDomainCreationPatterns }}',
 '{{ AutoSubDomainIAMRole }}',
 '{{ CertificateSettings }}',
 '{{ DomainName }}',
 '{{ EnableAutoSubDomain }}',
 '{{ SubDomainSettings }}',
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
  - name: domain
    props:
      - name: AppId
        value: '{{ AppId }}'
      - name: AutoSubDomainCreationPatterns
        value:
          - '{{ AutoSubDomainCreationPatterns[0] }}'
      - name: AutoSubDomainIAMRole
        value: '{{ AutoSubDomainIAMRole }}'
      - name: CertificateSettings
        value:
          CertificateType: '{{ CertificateType }}'
          CustomCertificateArn: '{{ CustomCertificateArn }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: EnableAutoSubDomain
        value: '{{ EnableAutoSubDomain }}'
      - name: SubDomainSettings
        value:
          - Prefix: '{{ Prefix }}'
            BranchName: '{{ BranchName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.amplify.domains
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
amplify:GetDomainAssociation,
amplify:CreateDomainAssociation,
route53:ListHostedZones,
route53:ChangeResourceRecordSets,
iam:PassRole,
amplify:TagResource
```

### Delete
```json
amplify:GetDomainAssociation,
amplify:DeleteDomainAssociation,
route53:ListHostedZones,
iam:PassRole
```

### List
```json
amplify:ListDomainAssociations,
iam:PassRole,
amplify:ListTagsForResource
```

### Read
```json
amplify:GetDomainAssociation,
route53:ListHostedZones,
iam:PassRole,
amplify:ListTagsForResource
```

### Update
```json
amplify:GetDomainAssociation,
amplify:UpdateDomainAssociation,
route53:ListHostedZones,
route53:ChangeResourceRecordSets,
iam:PassRole,
amplify:ListTagsForResource,
amplify:TagResource,
amplify:UntagResource
```
