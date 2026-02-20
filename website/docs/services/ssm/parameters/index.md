---
title: parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters
  - ssm
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

Creates, updates, deletes or gets a <code>parameter</code> resource or lists <code>parameters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>parameters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SSM::Parameter&#96;&#96; resource creates an SSM parameter in SYSlong Parameter Store.<br />To create an SSM parameter, you must have the IAMlong (IAM) permissions &#96;&#96;ssm:PutParameter&#96;&#96; and &#96;&#96;ssm:AddTagsToResource&#96;&#96;. On stack creation, CFNlong adds the following three tags to the parameter: &#96;&#96;aws:cloudformation:stack-name&#96;&#96;, &#96;&#96;aws:cloudformation:logical-id&#96;&#96;, and &#96;&#96;aws:cloudformation:stack-id&#96;&#96;, in addition to any custom tags you specify.<br />To add, update, or remove tags during stack update, you must have IAM permissions for both &#96;&#96;ssm:AddTagsToResource&#96;&#96; and &#96;&#96;ssm:RemoveTagsFromResource&#96;&#96;. For more information, see &#91;Managing access using policies&#93;(https://docs.aws.amazon.com/systems-manager/latest/userguide/security-iam.html#security&#95;iam&#95;access-manage) in the &#42;User Guide&#42;.<br />For information about valid values for parameters, see &#91;About requirements and constraints for parameter names&#93;(https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-create.html#sysman-parameter-name-constraints) in the &#42;User Guide&#42; and &#91;PutParameter&#93;(https://docs.aws.amazon.com/systems-manager/latest/APIReference/API&#95;PutParameter.html) in the &#42;API Reference&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.parameters" /></td></tr>
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
    "name": "type",
    "type": "string",
    "description": "The type of parameter.<br />Parameters of type &#96;&#96;SecureString&#96;&#96; are not supported by CFNlong."
  },
  {
    "name": "value",
    "type": "string",
    "description": "The parameter value.<br />If type is &#96;&#96;StringList&#96;&#96;, the system returns a comma-separated string with no spaces between commas in the &#96;&#96;Value&#96;&#96; field."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Information about the parameter."
  },
  {
    "name": "policies",
    "type": "string",
    "description": "Information about the policies assigned to a parameter.<br />&#91;Assigning parameter policies&#93;(https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the &#42;User Guide&#42;."
  },
  {
    "name": "allowed_pattern",
    "type": "string",
    "description": "A regular expression used to validate the parameter value. For example, for &#96;&#96;String&#96;&#96; types with values restricted to numbers, you can specify the following: &#96;&#96;AllowedPattern=^\\d+$&#96;&#96;"
  },
  {
    "name": "tier",
    "type": "string",
    "description": "The parameter tier."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter."
  },
  {
    "name": "data_type",
    "type": "string",
    "description": "The data type of the parameter, such as &#96;&#96;text&#96;&#96; or &#96;&#96;aws:ec2:image&#96;&#96;. The default is &#96;&#96;text&#96;&#96;."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the parameter.<br />The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.<br />This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: &#96;&#96;arn:aws:ssm:us-east-2:111122223333:parameter/&#96;&#96;."
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
    "name": "name",
    "type": "string",
    "description": "The name of the parameter.<br />The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.<br />This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: &#96;&#96;arn:aws:ssm:us-east-2:111122223333:parameter/&#96;&#96;."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-parameter.html"><code>AWS::SSM::Parameter</code></a>.

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
    <td><code>parameters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Value, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>parameters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>parameters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>parameters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>parameters</code></td>
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

Gets all properties from an individual <code>parameter</code>.
```sql
SELECT
region,
type,
value,
description,
policies,
allowed_pattern,
tier,
tags,
data_type,
name
FROM awscc.ssm.parameters
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>parameters</code> in a region.
```sql
SELECT
region,
name
FROM awscc.ssm.parameters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>parameter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssm.parameters (
 Type,
 Value,
 region
)
SELECT 
'{{ Type }}',
 '{{ Value }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssm.parameters (
 Type,
 Value,
 Description,
 Policies,
 AllowedPattern,
 Tier,
 Tags,
 DataType,
 Name,
 region
)
SELECT 
 '{{ Type }}',
 '{{ Value }}',
 '{{ Description }}',
 '{{ Policies }}',
 '{{ AllowedPattern }}',
 '{{ Tier }}',
 '{{ Tags }}',
 '{{ DataType }}',
 '{{ Name }}',
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
  - name: parameter
    props:
      - name: Type
        value: '{{ Type }}'
      - name: Value
        value: '{{ Value }}'
      - name: Description
        value: '{{ Description }}'
      - name: Policies
        value: '{{ Policies }}'
      - name: AllowedPattern
        value: '{{ AllowedPattern }}'
      - name: Tier
        value: '{{ Tier }}'
      - name: Tags
        value: {}
      - name: DataType
        value: '{{ DataType }}'
      - name: Name
        value: '{{ Name }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ssm.parameters
SET data__PatchDocument = string('{{ {
    "Type": type,
    "Value": value,
    "Description": description,
    "Policies": policies,
    "AllowedPattern": allowed_pattern,
    "Tier": tier,
    "Tags": tags,
    "DataType": data_type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssm.parameters
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>parameters</code> resource, the following permissions are required:

### Create
```json
ssm:PutParameter,
ssm:AddTagsToResource,
ssm:GetParameters
```

### Read
```json
ssm:GetParameters,
ssm:ListTagsForResource
```

### Update
```json
ssm:PutParameter,
ssm:AddTagsToResource,
ssm:RemoveTagsFromResource,
ssm:GetParameters
```

### Delete
```json
ssm:DeleteParameter
```

### List
```json
ssm:DescribeParameters
```
