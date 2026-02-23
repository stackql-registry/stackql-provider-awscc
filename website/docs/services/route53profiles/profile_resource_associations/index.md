---
title: profile_resource_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_resource_associations
  - route53profiles
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

Creates, updates, deletes or gets a <code>profile_resource_association</code> resource or lists <code>profile_resource_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>profile_resource_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Route53Profiles::ProfileResourceAssociation</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53profiles.profile_resource_associations" /></td></tr>
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
    "name": "profile_id",
    "type": "string",
    "description": "The ID of the profile that you associated the resource to that is specified by ResourceArn."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Primary Identifier for Profile Resource Association"
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of an association between the Profile and resource."
  },
  {
    "name": "resource_arn",
    "type": "string",
    "description": "The arn of the resource that you associated to the Profile."
  },
  {
    "name": "resource_properties",
    "type": "string",
    "description": "A JSON-formatted string with key-value pairs specifying the properties of the associated resource."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The type of the resource associated to the Profile."
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
    "name": "id",
    "type": "string",
    "description": "Primary Identifier for Profile Resource Association"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileresourceassociation.html"><code>AWS::Route53Profiles::ProfileResourceAssociation</code></a>.

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
    <td><code>profile_resource_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProfileId, Name, ResourceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>profile_resource_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>profile_resource_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>profile_resource_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>profile_resource_associations</code></td>
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

Gets all properties from an individual <code>profile_resource_association</code>.
```sql
SELECT
region,
profile_id,
id,
name,
resource_arn,
resource_properties,
resource_type
FROM awscc.route53profiles.profile_resource_associations
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>profile_resource_associations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.route53profiles.profile_resource_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>profile_resource_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53profiles.profile_resource_associations (
 ProfileId,
 Name,
 ResourceArn,
 region
)
SELECT
'{{ profile_id }}',
 '{{ name }}',
 '{{ resource_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53profiles.profile_resource_associations (
 ProfileId,
 Name,
 ResourceArn,
 ResourceProperties,
 region
)
SELECT
 '{{ profile_id }}',
 '{{ name }}',
 '{{ resource_arn }}',
 '{{ resource_properties }}',
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
  - name: profile_resource_association
    props:
      - name: profile_id
        value: '{{ profile_id }}'
      - name: name
        value: '{{ name }}'
      - name: resource_arn
        value: '{{ resource_arn }}'
      - name: resource_properties
        value: '{{ resource_properties }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>profile_resource_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53profiles.profile_resource_associations
SET PatchDocument = string('{{ {
    "ResourceProperties": resource_properties
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53profiles.profile_resource_associations
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>profile_resource_associations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
route53profiles:AssociateResourceToProfile,
route53profiles:GetProfileResourceAssociation,
route53resolver:GetFirewallRuleGroup,
route53resolver:GetResolverRule,
route53:GetHostedZone,
route53resolver:GetResolverQueryLogConfig,
ec2:DescribeVpcEndpoints
```

</TabItem>
<TabItem value="read">

```json
route53profiles:GetProfileResourceAssociation
```

</TabItem>
<TabItem value="delete">

```json
route53profiles:DisassociateResourceFromProfile,
route53profiles:GetProfileResourceAssociation,
route53resolver:GetFirewallRuleGroup,
route53resolver:GetResolverRule,
route53:GetHostedZone,
route53resolver:GetResolverQueryLogConfig,
ec2:DescribeVpcEndpoints
```

</TabItem>
<TabItem value="list">

```json
route53profiles:ListProfileResourceAssociations
```

</TabItem>
<TabItem value="update">

```json
route53profiles:UpdateProfileResourceAssociation
```

</TabItem>
</Tabs>