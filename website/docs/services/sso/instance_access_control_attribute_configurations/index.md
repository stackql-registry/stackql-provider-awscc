---
title: instance_access_control_attribute_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_access_control_attribute_configurations
  - sso
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

Creates, updates, deletes or gets an <code>instance_access_control_attribute_configuration</code> resource or lists <code>instance_access_control_attribute_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>instance_access_control_attribute_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for SSO InstanceAccessControlAttributeConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.sso.instance_access_control_attribute_configurations" /></td></tr>
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
    "name": "instance_arn",
    "type": "string",
    "description": "The ARN of the AWS SSO instance under which the operation will be executed."
  },
  {
    "name": "instance_access_control_attribute_configuration",
    "type": "object",
    "description": "The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use AccessControlAttributes property instead.",
    "children": [
      {
        "name": "access_control_attributes",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "key",
            "type": "string",
            "description": ""
          },
          {
            "name": "value",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "source",
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
    "name": "access_control_attributes",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "source",
            "type": "array",
            "description": ""
          }
        ]
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
    "name": "instance_arn",
    "type": "string",
    "description": "The ARN of the AWS SSO instance under which the operation will be executed."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html"><code>AWS::SSO::InstanceAccessControlAttributeConfiguration</code></a>.

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
    <td><code>instance_access_control_attribute_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="InstanceArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>instance_access_control_attribute_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>instance_access_control_attribute_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>instance_access_control_attribute_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>instance_access_control_attribute_configurations</code></td>
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

Gets all properties from an individual <code>instance_access_control_attribute_configuration</code>.
```sql
SELECT
region,
instance_arn,
instance_access_control_attribute_configuration,
access_control_attributes
FROM awscc.sso.instance_access_control_attribute_configurations
WHERE region = 'us-east-1' AND Identifier = '{{ instance_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>instance_access_control_attribute_configurations</code> in a region.
```sql
SELECT
region,
instance_arn
FROM awscc.sso.instance_access_control_attribute_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>instance_access_control_attribute_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.sso.instance_access_control_attribute_configurations (
 InstanceArn,
 region
)
SELECT
'{{ instance_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.sso.instance_access_control_attribute_configurations (
 InstanceArn,
 InstanceAccessControlAttributeConfiguration,
 AccessControlAttributes,
 region
)
SELECT
 '{{ instance_arn }}',
 '{{ instance_access_control_attribute_configuration }}',
 '{{ access_control_attributes }}',
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
  - name: instance_access_control_attribute_configuration
    props:
      - name: instance_arn
        value: '{{ instance_arn }}'
      - name: instance_access_control_attribute_configuration
        value:
          access_control_attributes:
            - key: '{{ key }}'
              value:
                source:
                  - '{{ source[0] }}'
      - name: access_control_attributes
        value: null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>instance_access_control_attribute_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.sso.instance_access_control_attribute_configurations
SET PatchDocument = string('{{ {
    "InstanceAccessControlAttributeConfiguration": instance_access_control_attribute_configuration,
    "AccessControlAttributes": access_control_attributes
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ instance_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.sso.instance_access_control_attribute_configurations
WHERE Identifier = '{{ instance_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>instance_access_control_attribute_configurations</code> resource, the following permissions are required:

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
sso:CreateInstanceAccessControlAttributeConfiguration,
sso:UpdateApplicationProfileForAWSAccountInstance,
sso:DescribeInstanceAccessControlAttributeConfiguration
```

</TabItem>
<TabItem value="read">

```json
sso:DescribeInstanceAccessControlAttributeConfiguration
```

</TabItem>
<TabItem value="update">

```json
sso:UpdateInstanceAccessControlAttributeConfiguration,
sso:DescribeInstanceAccessControlAttributeConfiguration
```

</TabItem>
<TabItem value="delete">

```json
sso:DeleteInstanceAccessControlAttributeConfiguration,
sso:DescribeInstanceAccessControlAttributeConfiguration
```

</TabItem>
<TabItem value="list">

```json
sso:DescribeInstanceAccessControlAttributeConfiguration
```

</TabItem>
</Tabs>