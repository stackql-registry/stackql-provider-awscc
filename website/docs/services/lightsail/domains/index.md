---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - lightsail
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Domain</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.domains" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="domain_name" /></td><td><code>string</code></td><td>The name of the domain to manage in Lightsail.</td></tr>
<tr><td><CopyableCode code="domain_entries" /></td><td><code>array</code></td><td>An array of key-value pairs containing information about the domain entries.</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>The Amazon Resource Name (ARN) of the domain (read-only).</td></tr>
<tr><td><CopyableCode code="support_code" /></td><td><code>string</code></td><td>The support code. Include this code in your email to support when you have questions (read-only).</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>The timestamp when the domain was created (read-only).</td></tr>
<tr><td><CopyableCode code="location" /></td><td><code>object</code></td><td>The AWS Region and Availability Zone where the domain was created (read-only).</td></tr>
<tr><td><CopyableCode code="resource_type" /></td><td><code>string</code></td><td>The Lightsail resource type (read-only).</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource.</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-domain.html"><code>AWS::Lightsail::Domain</code></a>.

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
    <td><CopyableCode code="DomainName, region" /></td>
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
Gets all <code>domains</code> in a region.
```sql
SELECT
region,
domain_name,
domain_entries,
arn,
support_code,
created_at,
location,
resource_type,
tags
FROM awscc.lightsail.domains
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
domain_name,
domain_entries,
arn,
support_code,
created_at,
location,
resource_type,
tags
FROM awscc.lightsail.domains
WHERE region = 'us-east-1' AND data__Identifier = '<DomainName>';
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
INSERT INTO awscc.lightsail.domains (
 DomainName,
 region
)
SELECT 
'{{ DomainName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.domains (
 DomainName,
 DomainEntries,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ DomainEntries }}',
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
  - name: domain
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: DomainEntries
        value:
          - Id: '{{ Id }}'
            Name: '{{ Name }}'
            Target: '{{ Target }}'
            IsAlias: '{{ IsAlias }}'
            Type: '{{ Type }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.domains
WHERE data__Identifier = '<DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateDomain,
lightsail:GetDomain,
lightsail:CreateDomainEntry,
lightsail:TagResource
```

### Read
```json
lightsail:GetDomain
```

### Update
```json
lightsail:GetDomain,
lightsail:CreateDomainEntry,
lightsail:DeleteDomainEntry,
lightsail:TagResource,
lightsail:UntagResource
```

### Delete
```json
lightsail:DeleteDomain,
lightsail:GetDomain
```

### List
```json
lightsail:GetDomains
```
