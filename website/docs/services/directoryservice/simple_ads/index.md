---
title: simple_ads
hide_title: false
hide_table_of_contents: false
keywords:
  - simple_ads
  - directoryservice
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

Creates, updates, deletes or gets a <code>simple_ad</code> resource or lists <code>simple_ads</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>simple_ads</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::DirectoryService::SimpleAD</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.directoryservice.simple_ads" /></td></tr>
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
    "name": "directory_id",
    "type": "string",
    "description": "The unique identifier for a directory."
  },
  {
    "name": "alias",
    "type": "string",
    "description": "The alias for a directory."
  },
  {
    "name": "dns_ip_addresses",
    "type": "array",
    "description": "The IP addresses of the DNS servers for the directory, such as &#91; \"172.31.3.154\", \"172.31.63.203\" &#93;."
  },
  {
    "name": "create_alias",
    "type": "boolean",
    "description": "The name of the configuration set."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description for the directory."
  },
  {
    "name": "enable_sso",
    "type": "boolean",
    "description": "Whether to enable single sign-on for a Simple Active Directory in AWS."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The fully qualified domain name for the AWS Managed Simple AD directory."
  },
  {
    "name": "password",
    "type": "string",
    "description": "The password for the default administrative user named Admin."
  },
  {
    "name": "short_name",
    "type": "string",
    "description": "The NetBIOS name for your domain."
  },
  {
    "name": "size",
    "type": "string",
    "description": "The size of the directory."
  },
  {
    "name": "vpc_settings",
    "type": "object",
    "description": "VPC settings of the Simple AD directory server in AWS.",
    "children": [
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets."
      },
      {
        "name": "vpc_id",
        "type": "string",
        "description": "The identifier of the VPC in which to create the directory."
      }
    ]
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
    "name": "directory_id",
    "type": "string",
    "description": "The unique identifier for a directory."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html"><code>AWS::DirectoryService::SimpleAD</code></a>.

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
    <td><code>simple_ads</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="VpcSettings, Size, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>simple_ads</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>simple_ads</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>simple_ads_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>simple_ads</code></td>
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

Gets all properties from an individual <code>simple_ad</code>.
```sql
SELECT
region,
directory_id,
alias,
dns_ip_addresses,
create_alias,
description,
enable_sso,
name,
password,
short_name,
size,
vpc_settings
FROM awscc.directoryservice.simple_ads
WHERE region = 'us-east-1' AND Identifier = '<DirectoryId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>simple_ads</code> in a region.
```sql
SELECT
region,
directory_id
FROM awscc.directoryservice.simple_ads_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>simple_ad</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.directoryservice.simple_ads (
 Name,
 Size,
 VpcSettings,
 region
)
SELECT 
'{{ Name }}',
 '{{ Size }}',
 '{{ VpcSettings }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.directoryservice.simple_ads (
 CreateAlias,
 Description,
 EnableSso,
 Name,
 Password,
 ShortName,
 Size,
 VpcSettings,
 region
)
SELECT 
 '{{ CreateAlias }}',
 '{{ Description }}',
 '{{ EnableSso }}',
 '{{ Name }}',
 '{{ Password }}',
 '{{ ShortName }}',
 '{{ Size }}',
 '{{ VpcSettings }}',
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
  - name: simple_ad
    props:
      - name: CreateAlias
        value: '{{ CreateAlias }}'
      - name: Description
        value: '{{ Description }}'
      - name: EnableSso
        value: '{{ EnableSso }}'
      - name: Name
        value: '{{ Name }}'
      - name: Password
        value: '{{ Password }}'
      - name: ShortName
        value: '{{ ShortName }}'
      - name: Size
        value: '{{ Size }}'
      - name: VpcSettings
        value:
          SubnetIds:
            - '{{ SubnetIds[0] }}'
          VpcId: '{{ VpcId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.directoryservice.simple_ads
SET PatchDocument = string('{{ {
    "EnableSso": enable_sso
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DirectoryId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.directoryservice.simple_ads
WHERE Identifier = '<DirectoryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>simple_ads</code> resource, the following permissions are required:

### Create
```json
ds:CreateDirectory,
ds:CreateAlias,
ds:EnableSso,
ds:DescribeDirectories,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
ec2:CreateSecurityGroup,
ec2:CreateNetworkInterface,
ec2:DescribeNetworkInterfaces,
ec2:AuthorizeSecurityGroupIngress,
ec2:AuthorizeSecurityGroupEgress,
ec2:CreateTags,
ec2:RevokeSecurityGroupIngress,
ec2:RevokeSecurityGroupEgress
```

### Read
```json
ds:DescribeDirectories
```

### Update
```json
ds:EnableSso,
ds:DisableSso,
ds:DescribeDirectories
```

### Delete
```json
ds:DeleteDirectory,
ds:DescribeDirectories,
ec2:DescribeNetworkInterfaces,
ec2:DeleteSecurityGroup,
ec2:DeleteNetworkInterface,
ec2:RevokeSecurityGroupIngress,
ec2:RevokeSecurityGroupEgress,
ec2:DeleteTags
```

### List
```json
ds:DescribeDirectories
```
