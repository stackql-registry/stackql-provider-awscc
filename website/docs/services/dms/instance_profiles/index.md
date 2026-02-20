---
title: instance_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_profiles
  - dms
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

Creates, updates, deletes or gets an <code>instance_profile</code> resource or lists <code>instance_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instance_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::DMS::InstanceProfile.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dms.instance_profiles" /></td></tr>
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
    "name": "instance_profile_arn",
    "type": "string",
    "description": "The property describes an ARN of the instance profile."
  },
  {
    "name": "instance_profile_identifier",
    "type": "string",
    "description": "The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be name/arn"
  },
  {
    "name": "availability_zone",
    "type": "string",
    "description": "The property describes an availability zone of the instance profile."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The optional description of the instance profile."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The property describes kms key arn for the instance profile."
  },
  {
    "name": "publicly_accessible",
    "type": "boolean",
    "description": "The property describes the publicly accessible of the instance profile"
  },
  {
    "name": "network_type",
    "type": "string",
    "description": "The property describes a network type for the instance profile."
  },
  {
    "name": "instance_profile_name",
    "type": "string",
    "description": "The property describes a name for the instance profile."
  },
  {
    "name": "instance_profile_creation_time",
    "type": "string",
    "description": "The property describes a creating time of the instance profile."
  },
  {
    "name": "subnet_group_identifier",
    "type": "string",
    "description": "The property describes a subnet group identifier for the instance profile."
  },
  {
    "name": "vpc_security_groups",
    "type": "array",
    "description": "The property describes vps security groups for the instance profile."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
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
    "name": "instance_profile_arn",
    "type": "string",
    "description": "The property describes an ARN of the instance profile."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html"><code>AWS::DMS::InstanceProfile</code></a>.

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
    <td><code>instance_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instance_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instance_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instance_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instance_profiles</code></td>
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

Gets all properties from an individual <code>instance_profile</code>.
```sql
SELECT
region,
instance_profile_arn,
instance_profile_identifier,
availability_zone,
description,
kms_key_arn,
publicly_accessible,
network_type,
instance_profile_name,
instance_profile_creation_time,
subnet_group_identifier,
vpc_security_groups,
tags
FROM awscc.dms.instance_profiles
WHERE region = 'us-east-1' AND Identifier = '<InstanceProfileArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>instance_profiles</code> in a region.
```sql
SELECT
region,
instance_profile_arn
FROM awscc.dms.instance_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.dms.instance_profiles (
 InstanceProfileIdentifier,
 AvailabilityZone,
 Description,
 KmsKeyArn,
 PubliclyAccessible,
 NetworkType,
 InstanceProfileName,
 SubnetGroupIdentifier,
 VpcSecurityGroups,
 Tags,
 region
)
SELECT 
'{{ InstanceProfileIdentifier }}',
 '{{ AvailabilityZone }}',
 '{{ Description }}',
 '{{ KmsKeyArn }}',
 '{{ PubliclyAccessible }}',
 '{{ NetworkType }}',
 '{{ InstanceProfileName }}',
 '{{ SubnetGroupIdentifier }}',
 '{{ VpcSecurityGroups }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.dms.instance_profiles (
 InstanceProfileIdentifier,
 AvailabilityZone,
 Description,
 KmsKeyArn,
 PubliclyAccessible,
 NetworkType,
 InstanceProfileName,
 SubnetGroupIdentifier,
 VpcSecurityGroups,
 Tags,
 region
)
SELECT 
 '{{ InstanceProfileIdentifier }}',
 '{{ AvailabilityZone }}',
 '{{ Description }}',
 '{{ KmsKeyArn }}',
 '{{ PubliclyAccessible }}',
 '{{ NetworkType }}',
 '{{ InstanceProfileName }}',
 '{{ SubnetGroupIdentifier }}',
 '{{ VpcSecurityGroups }}',
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
  - name: instance_profile
    props:
      - name: InstanceProfileIdentifier
        value: '{{ InstanceProfileIdentifier }}'
      - name: AvailabilityZone
        value: '{{ AvailabilityZone }}'
      - name: Description
        value: '{{ Description }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: PubliclyAccessible
        value: '{{ PubliclyAccessible }}'
      - name: NetworkType
        value: '{{ NetworkType }}'
      - name: InstanceProfileName
        value: '{{ InstanceProfileName }}'
      - name: SubnetGroupIdentifier
        value: '{{ SubnetGroupIdentifier }}'
      - name: VpcSecurityGroups
        value:
          - '{{ VpcSecurityGroups[0] }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>instance_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.dms.instance_profiles
SET PatchDocument = string('{{ {
    "InstanceProfileIdentifier": instance_profile_identifier,
    "AvailabilityZone": availability_zone,
    "Description": description,
    "KmsKeyArn": kms_key_arn,
    "PubliclyAccessible": publicly_accessible,
    "NetworkType": network_type,
    "InstanceProfileName": instance_profile_name,
    "SubnetGroupIdentifier": subnet_group_identifier,
    "VpcSecurityGroups": vpc_security_groups,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<InstanceProfileArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.dms.instance_profiles
WHERE Identifier = '<InstanceProfileArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instance_profiles</code> resource, the following permissions are required:

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
dms:CreateInstanceProfile,
dms:ListInstanceProfiles,
dms:DescribeInstanceProfiles,
dms:AddTagsToResource,
dms:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
dms:ListInstanceProfiles,
dms:DescribeInstanceProfiles,
dms:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
dms:UpdateInstanceProfile,
dms:ModifyInstanceProfile,
dms:AddTagsToResource,
dms:RemoveTagsFromResource,
dms:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
dms:DeleteInstanceProfile
```

</TabItem>
<TabItem value="list">

```json
dms:ListInstanceProfiles,
dms:DescribeInstanceProfiles,
dms:ListTagsForResource
```

</TabItem>
</Tabs>