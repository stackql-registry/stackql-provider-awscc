---
title: cluster_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_parameter_groups
  - redshift
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

Creates, updates, deletes or gets a <code>cluster_parameter_group</code> resource or lists <code>cluster_parameter_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>cluster_parameter_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Redshift::ClusterParameterGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.redshift.cluster_parameter_groups" /></td></tr>
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
    "name": "parameter_group_name",
    "type": "string",
    "description": "The name of the cluster parameter group."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the parameter group."
  },
  {
    "name": "parameter_group_family",
    "type": "string",
    "description": "The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters."
  },
  {
    "name": "parameters",
    "type": "array",
    "description": "An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.",
    "children": [
      {
        "name": "parameter_name",
        "type": "string",
        "description": "The name of the parameter."
      },
      {
        "name": "parameter_value",
        "type": "string",
        "description": "The value of the parameter. If &#96;ParameterName&#96; is &#96;wlm&#95;json&#95;configuration&#96;, then the maximum size of &#96;ParameterValue&#96; is 8000 characters."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "parameter_group_name",
    "type": "string",
    "description": "The name of the cluster parameter group."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html"><code>AWS::Redshift::ClusterParameterGroup</code></a>.

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
    <td><code>cluster_parameter_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Description, ParameterGroupFamily, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>cluster_parameter_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>cluster_parameter_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>cluster_parameter_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>cluster_parameter_groups</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>cluster_parameter_group</code>.
```sql
SELECT
region,
parameter_group_name,
description,
parameter_group_family,
parameters,
tags
FROM awscc.redshift.cluster_parameter_groups
WHERE region = 'us-east-1' AND data__Identifier = '<ParameterGroupName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>cluster_parameter_groups</code> in a region.
```sql
SELECT
region,
parameter_group_name
FROM awscc.redshift.cluster_parameter_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>cluster_parameter_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.redshift.cluster_parameter_groups (
 Description,
 ParameterGroupFamily,
 region
)
SELECT 
'{{ Description }}',
 '{{ ParameterGroupFamily }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.redshift.cluster_parameter_groups (
 ParameterGroupName,
 Description,
 ParameterGroupFamily,
 Parameters,
 Tags,
 region
)
SELECT 
 '{{ ParameterGroupName }}',
 '{{ Description }}',
 '{{ ParameterGroupFamily }}',
 '{{ Parameters }}',
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
  - name: cluster_parameter_group
    props:
      - name: ParameterGroupName
        value: '{{ ParameterGroupName }}'
      - name: Description
        value: '{{ Description }}'
      - name: ParameterGroupFamily
        value: '{{ ParameterGroupFamily }}'
      - name: Parameters
        value:
          - ParameterName: '{{ ParameterName }}'
            ParameterValue: '{{ ParameterValue }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.redshift.cluster_parameter_groups
SET data__PatchDocument = string('{{ {
    "Parameters": parameters,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ParameterGroupName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.redshift.cluster_parameter_groups
WHERE data__Identifier = '<ParameterGroupName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>cluster_parameter_groups</code> resource, the following permissions are required:

### Create
```json
redshift:CreateClusterParameterGroup,
redshift:ModifyClusterParameterGroup,
redshift:DescribeClusterParameterGroups,
redshift:DescribeClusterParameters,
redshift:DescribeTags,
redshift:CreateTags,
ec2:AllocateAddress,
ec2:AssociateAddress,
ec2:AttachNetworkInterface,
ec2:DescribeAccountAttributes,
ec2:DescribeAddresses,
ec2:DescribeAvailabilityZones,
ec2:DescribeInternetGateways,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs
```

### Read
```json
redshift:DescribeClusterParameterGroups,
initech:DescribeReport,
redshift:DescribeClusterParameters,
redshift:DescribeTags
```

### Update
```json
redshift:DescribeClusterParameterGroups,
redshift:ResetClusterParameterGroup,
redshift:ModifyClusterParameterGroup,
redshift:DescribeClusterParameters,
redshift:DescribeTags,
redshift:CreateTags,
redshift:DeleteTags,
initech:UpdateReport
```

### Delete
```json
redshift:DescribeTags,
redshift:DeleteTags,
redshift:DescribeClusterParameterGroups,
redshift:DeleteClusterParameterGroup,
redshift:DescribeClusterParameters,
initech:DeleteReport
```

### List
```json
redshift:DescribeTags,
redshift:DescribeClusterParameterGroups,
redshift:DescribeClusterParameters,
initech:ListReports
```
