---
title: distribution_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_tenants
  - cloudfront
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

Creates, updates, deletes or gets a <code>distribution_tenant</code> resource or lists <code>distribution_tenants</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>distribution_tenants</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The distribution tenant.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudfront.distribution_tenants" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="distribution_id" /></td><td><code>string</code></td><td>The ID of the multi-tenant distribution.</td></tr>
<tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>The name of the distribution tenant.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domain_results" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>A complex type that contains zero or more <code>Tag</code> elements.</td></tr>
<tr><td><CopyableCode code="customizations" /></td><td><code>object</code></td><td>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</td></tr>
<tr><td><CopyableCode code="parameters" /></td><td><code>array</code></td><td>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</td></tr>
<tr><td><CopyableCode code="connection_group_id" /></td><td><code>string</code></td><td>The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</td></tr>
<tr><td><CopyableCode code="created_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="last_modified_time" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="enabled" /></td><td><code>boolean</code></td><td>Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="e_tag" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="domains" /></td><td><code>array</code></td><td>The domains associated with the distribution tenant.</td></tr>
<tr><td><CopyableCode code="managed_certificate_request" /></td><td><code>object</code></td><td>An object that represents the request for the Amazon CloudFront managed ACM certificate.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html"><code>AWS::CloudFront::DistributionTenant</code></a>.

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
    <td><CopyableCode code="DistributionId, Name, Domains, region" /></td>
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
Gets all <code>distribution_tenants</code> in a region.
```sql
SELECT
region,
id,
distribution_id,
name,
arn,
domain_results,
tags,
customizations,
parameters,
connection_group_id,
created_time,
last_modified_time,
enabled,
status,
e_tag,
domains,
managed_certificate_request
FROM awscc.cloudfront.distribution_tenants
;
```
Gets all properties from an individual <code>distribution_tenant</code>.
```sql
SELECT
region,
id,
distribution_id,
name,
arn,
domain_results,
tags,
customizations,
parameters,
connection_group_id,
created_time,
last_modified_time,
enabled,
status,
e_tag,
domains,
managed_certificate_request
FROM awscc.cloudfront.distribution_tenants
WHERE data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>distribution_tenant</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudfront.distribution_tenants (
 DistributionId,
 Name,
 Domains,
 region
)
SELECT 
'{{ DistributionId }}',
 '{{ Name }}',
 '{{ Domains }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudfront.distribution_tenants (
 DistributionId,
 Name,
 Tags,
 Customizations,
 Parameters,
 ConnectionGroupId,
 Enabled,
 Domains,
 ManagedCertificateRequest,
 region
)
SELECT 
 '{{ DistributionId }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ Customizations }}',
 '{{ Parameters }}',
 '{{ ConnectionGroupId }}',
 '{{ Enabled }}',
 '{{ Domains }}',
 '{{ ManagedCertificateRequest }}',
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
  - name: distribution_tenant
    props:
      - name: DistributionId
        value: '{{ DistributionId }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Customizations
        value:
          WebAcl:
            Action: '{{ Action }}'
            Arn: '{{ Arn }}'
          Certificate:
            Arn: '{{ Arn }}'
          GeoRestrictions:
            RestrictionType: '{{ RestrictionType }}'
            Locations:
              - '{{ Locations[0] }}'
      - name: Parameters
        value:
          - Name: '{{ Name }}'
            Value: '{{ Value }}'
      - name: ConnectionGroupId
        value: '{{ ConnectionGroupId }}'
      - name: Enabled
        value: '{{ Enabled }}'
      - name: Domains
        value:
          - '{{ Domains[0] }}'
      - name: ManagedCertificateRequest
        value:
          ValidationTokenHost: '{{ ValidationTokenHost }}'
          PrimaryDomainName: '{{ PrimaryDomainName }}'
          CertificateTransparencyLoggingPreference: '{{ CertificateTransparencyLoggingPreference }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudfront.distribution_tenants
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>distribution_tenants</code> resource, the following permissions are required:

### Create
```json
acm:DescribeCertificate,
acm:RequestCertificate,
cloudfront:CreateDistributionTenant,
cloudfront:GetDistributionTenant,
cloudfront:GetManagedCertificateDetails,
cloudfront:TagResource,
cloudfront:VerifyDnsConfiguration,
wafv2:GetWebACL
```

### Delete
```json
cloudfront:DeleteDistributionTenant,
cloudfront:UpdateDistributionTenant,
cloudfront:GetDistributionTenant,
wafv2:GetWebACL
```

### List
```json
cloudfront:ListDistributionTenants,
cloudfront:ListTagsForResource
```

### Read
```json
cloudfront:GetDistributionTenant,
cloudfront:ListTagsForResource
```

### Update
```json
acm:DescribeCertificate,
acm:RequestCertificate,
cloudfront:GetDistributionTenant,
cloudfront:GetManagedCertificateDetails,
cloudfront:UpdateDistributionTenant,
cloudfront:ListTagsForResource,
cloudfront:TagResource,
cloudfront:UntagResource,
cloudfront:VerifyDnsConfiguration,
wafv2:GetWebACL
```
