---
title: provisioning_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_templates
  - iot
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

Creates, updates, deletes or gets a <code>provisioning_template</code> resource or lists <code>provisioning_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>provisioning_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a fleet provisioning template.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.provisioning_templates" /></td></tr>
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
    "name": "template_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "provisioning_role_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_body",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "pre_provisioning_hook",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "target_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "payload_version",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
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
        "type": "string",
        "description": ""
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
    "name": "template_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html"><code>AWS::IoT::ProvisioningTemplate</code></a>.

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
    <td><code>provisioning_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ProvisioningRoleArn, TemplateBody, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>provisioning_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>provisioning_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>provisioning_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>provisioning_templates</code></td>
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

Gets all properties from an individual <code>provisioning_template</code>.
```sql
SELECT
region,
template_arn,
template_name,
description,
enabled,
provisioning_role_arn,
template_body,
template_type,
pre_provisioning_hook,
tags
FROM awscc.iot.provisioning_templates
WHERE region = 'us-east-1' AND Identifier = '{{ template_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>provisioning_templates</code> in a region.
```sql
SELECT
region,
template_name
FROM awscc.iot.provisioning_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>provisioning_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.provisioning_templates (
 ProvisioningRoleArn,
 TemplateBody,
 region
)
SELECT
'{{ provisioning_role_arn }}',
 '{{ template_body }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.provisioning_templates (
 TemplateName,
 Description,
 Enabled,
 ProvisioningRoleArn,
 TemplateBody,
 TemplateType,
 PreProvisioningHook,
 Tags,
 region
)
SELECT
 '{{ template_name }}',
 '{{ description }}',
 '{{ enabled }}',
 '{{ provisioning_role_arn }}',
 '{{ template_body }}',
 '{{ template_type }}',
 '{{ pre_provisioning_hook }}',
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
  - name: provisioning_template
    props:
      - name: template_name
        value: '{{ template_name }}'
      - name: description
        value: '{{ description }}'
      - name: enabled
        value: '{{ enabled }}'
      - name: provisioning_role_arn
        value: '{{ provisioning_role_arn }}'
      - name: template_body
        value: '{{ template_body }}'
      - name: template_type
        value: '{{ template_type }}'
      - name: pre_provisioning_hook
        value:
          target_arn: '{{ target_arn }}'
          payload_version: '{{ payload_version }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>provisioning_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.iot.provisioning_templates
SET PatchDocument = string('{{ {
    "Description": description,
    "Enabled": enabled,
    "ProvisioningRoleArn": provisioning_role_arn,
    "TemplateBody": template_body,
    "PreProvisioningHook": pre_provisioning_hook,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ template_name }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.provisioning_templates
WHERE Identifier = '{{ template_name }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>provisioning_templates</code> resource, the following permissions are required:

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
iam:GetRole,
iam:PassRole,
iot:CreateProvisioningTemplate,
iot:DescribeProvisioningTemplate,
iot:TagResource,
iot:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
iot:DescribeProvisioningTemplate,
iot:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
iam:GetRole,
iam:PassRole,
iot:UpdateProvisioningTemplate,
iot:CreateProvisioningTemplateVersion,
iot:ListProvisioningTemplateVersions,
iot:DeleteProvisioningTemplateVersion,
iot:DescribeProvisioningTemplate,
iot:TagResource,
iot:UntagResource,
iot:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="delete">

```json
iot:DeleteProvisioningTemplate,
iot:DescribeProvisioningTemplate,
kms:Decrypt
```

</TabItem>
<TabItem value="list">

```json
iot:ListProvisioningTemplates
```

</TabItem>
</Tabs>