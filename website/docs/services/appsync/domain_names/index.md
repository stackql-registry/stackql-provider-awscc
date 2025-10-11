---
title: domain_names
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_names
  - appsync
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

Creates, updates, deletes or gets a <code>domain_name</code> resource or lists <code>domain_names</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_names</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppSync::DomainName</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appsync.domain_names" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="domain_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="description" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="certificate_arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="app_sync_domain_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="hosted_zone_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_name_arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) for the Domain Name.</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An arbitrary set of tags (key-value pairs) for this Domain Name.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html"><code>AWS::AppSync::DomainName</code></a>.

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
    <td><CopyableCode code="DomainName, CertificateArn, region" /></td>
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
Gets all <code>domain_names</code> in a region.
```sql
SELECT
region,
domain_name,
description,
certificate_arn,
app_sync_domain_name,
hosted_zone_id,
domain_name_arn,
tags
FROM awscc.appsync.domain_names
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>domain_name</code>.
```sql
SELECT
region,
domain_name,
description,
certificate_arn,
app_sync_domain_name,
hosted_zone_id,
domain_name_arn,
tags
FROM awscc.appsync.domain_names
WHERE region = 'us-east-1' AND data__Identifier = '<DomainName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_name</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appsync.domain_names (
 DomainName,
 CertificateArn,
 region
)
SELECT 
'{{ DomainName }}',
 '{{ CertificateArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appsync.domain_names (
 DomainName,
 Description,
 CertificateArn,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ Description }}',
 '{{ CertificateArn }}',
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
  - name: domain_name
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: Description
        value: '{{ Description }}'
      - name: CertificateArn
        value: '{{ CertificateArn }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appsync.domain_names
WHERE data__Identifier = '<DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_names</code> resource, the following permissions are required:

### Create
```json
appsync:CreateDomainName,
appsync:GetDomainName,
acm:DescribeCertificate,
cloudfront:UpdateDistribution,
appsync:TagResource
```

### Delete
```json
appsync:GetDomainName,
appsync:DeleteDomainName,
appsync:UntagResource
```

### Update
```json
appsync:UpdateDomainName,
appsync:TagResource,
appsync:UntagResource,
appsync:GetDomainName
```

### Read
```json
appsync:GetDomainName
```

### List
```json
appsync:ListDomainNames
```
