---
title: package_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - package_groups
  - codeartifact
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

Creates, updates, deletes or gets a <code>package_group</code> resource or lists <code>package_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>package_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The resource schema to create a CodeArtifact package group.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codeartifact.package_groups" /></td></tr>
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
    "name": "domain_name",
    "type": "string",
    "description": "The name of the domain that contains the package group."
  },
  {
    "name": "domain_owner",
    "type": "string",
    "description": "The 12-digit account ID of the AWS account that owns the domain."
  },
  {
    "name": "pattern",
    "type": "string",
    "description": "The package group pattern that is used to gather packages."
  },
  {
    "name": "contact_info",
    "type": "string",
    "description": "The contact info of the package group."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The text description of the package group."
  },
  {
    "name": "origin_configuration",
    "type": "object",
    "description": "The package origin configuration of the package group.",
    "children": [
      {
        "name": "restrictions",
        "type": "object",
        "description": "The origin configuration that is applied to the package group.",
        "children": [
          {
            "name": "publish",
            "type": "object",
            "description": "The publish restriction determines if new package versions can be published.",
            "children": [
              {
                "name": "restriction_mode",
                "type": "string",
                "description": ""
              },
              {
                "name": "repositories",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to the package group.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the package group."
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
    "name": "arn",
    "type": "string",
    "description": "The ARN of the package group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html"><code>AWS::CodeArtifact::PackageGroup</code></a>.

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
    <td><code>package_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Pattern, DomainName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>package_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>package_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>package_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>package_groups</code></td>
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

Gets all properties from an individual <code>package_group</code>.
```sql
SELECT
region,
domain_name,
domain_owner,
pattern,
contact_info,
description,
origin_configuration,
tags,
arn
FROM awscc.codeartifact.package_groups
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>package_groups</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.codeartifact.package_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>package_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codeartifact.package_groups (
 DomainName,
 Pattern,
 region
)
SELECT
'{{ domain_name }}',
 '{{ pattern }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codeartifact.package_groups (
 DomainName,
 DomainOwner,
 Pattern,
 ContactInfo,
 Description,
 OriginConfiguration,
 Tags,
 region
)
SELECT
 '{{ domain_name }}',
 '{{ domain_owner }}',
 '{{ pattern }}',
 '{{ contact_info }}',
 '{{ description }}',
 '{{ origin_configuration }}',
 '{{ tags }}',
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
  - name: package_group
    props:
      - name: domain_name
        value: '{{ domain_name }}'
      - name: domain_owner
        value: '{{ domain_owner }}'
      - name: pattern
        value: '{{ pattern }}'
      - name: contact_info
        value: '{{ contact_info }}'
      - name: description
        value: '{{ description }}'
      - name: origin_configuration
        value:
          restrictions:
            publish:
              restriction_mode: '{{ restriction_mode }}'
              repositories:
                - '{{ repositories[0] }}'
            external_upstream: null
            internal_upstream: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>package_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.codeartifact.package_groups
SET PatchDocument = string('{{ {
    "DomainOwner": domain_owner,
    "ContactInfo": contact_info,
    "Description": description,
    "OriginConfiguration": origin_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codeartifact.package_groups
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>package_groups</code> resource, the following permissions are required:

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
codeartifact:CreatePackageGroup,
codeartifact:DescribePackageGroup,
codeartifact:UpdatePackageGroup,
codeartifact:UpdatePackageGroupOriginConfiguration,
codeartifact:ListAllowedRepositoriesForGroup,
codeartifact:ListTagsForResource,
codeartifact:TagResource
```

</TabItem>
<TabItem value="read">

```json
codeartifact:DescribePackageGroup,
codeartifact:ListAllowedRepositoriesForGroup,
codeartifact:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
codeartifact:UpdatePackageGroup,
codeartifact:UpdatePackageGroupOriginConfiguration,
codeartifact:DescribePackageGroup,
codeartifact:ListAllowedRepositoriesForGroup,
codeartifact:ListTagsForResource,
codeartifact:TagResource,
codeartifact:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
codeartifact:DeletePackageGroup,
codeartifact:DescribePackageGroup
```

</TabItem>
<TabItem value="list">

```json
codeartifact:ListPackageGroups
```

</TabItem>
</Tabs>