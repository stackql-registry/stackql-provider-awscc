---
title: hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - hubs
  - securityhub
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

Creates, updates, deletes or gets a <code>hub</code> resource or lists <code>hubs</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hubs</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::Hub resource represents the implementation of the AWS Security Hub service in your account. One hub resource is created for each Region in which you enable Security Hub.<br /></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.hubs" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "An ARN is automatically created for the customer."
  },
  {
    "name": "enable_default_standards",
    "type": "boolean",
    "description": "Whether to enable the security standards that Security Hub has designated as automatically enabled."
  },
  {
    "name": "control_finding_generator",
    "type": "string",
    "description": "This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY&#95;CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards. If the value for this field is set to STANDARD&#95;CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards."
  },
  {
    "name": "auto_enable_controls",
    "type": "boolean",
    "description": "Whether to automatically enable new controls when they are added to standards that are enabled"
  },
  {
    "name": "tags",
    "type": "object",
    "description": "A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
  },
  {
    "name": "subscribed_at",
    "type": "string",
    "description": "The date and time when Security Hub was enabled in the account."
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
    "description": "An ARN is automatically created for the customer."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html"><code>AWS::SecurityHub::Hub</code></a>.

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
    <td><code>hubs</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hubs</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>hubs</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hubs_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hubs</code></td>
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

Gets all properties from an individual <code>hub</code>.
```sql
SELECT
region,
arn,
enable_default_standards,
control_finding_generator,
auto_enable_controls,
tags,
subscribed_at
FROM awscc.securityhub.hubs
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>hubs</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.securityhub.hubs_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hub</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.hubs (
 EnableDefaultStandards,
 ControlFindingGenerator,
 AutoEnableControls,
 Tags,
 region
)
SELECT
'{{ enable_default_standards }}',
 '{{ control_finding_generator }}',
 '{{ auto_enable_controls }}',
 '{{ tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.hubs (
 EnableDefaultStandards,
 ControlFindingGenerator,
 AutoEnableControls,
 Tags,
 region
)
SELECT
 '{{ enable_default_standards }}',
 '{{ control_finding_generator }}',
 '{{ auto_enable_controls }}',
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
  - name: hub
    props:
      - name: enable_default_standards
        value: '{{ enable_default_standards }}'
      - name: control_finding_generator
        value: '{{ control_finding_generator }}'
      - name: auto_enable_controls
        value: '{{ auto_enable_controls }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>hub</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.hubs
SET PatchDocument = string('{{ {
    "EnableDefaultStandards": enable_default_standards,
    "ControlFindingGenerator": control_finding_generator,
    "AutoEnableControls": auto_enable_controls,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.hubs
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hubs</code> resource, the following permissions are required:

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
securityhub:EnableSecurityHub,
securityhub:UpdateSecurityHubConfiguration,
securityhub:TagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
securityhub:DescribeHub,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
securityhub:DescribeHub,
securityhub:UpdateSecurityHubConfiguration,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
securityhub:DisableSecurityHub
```

</TabItem>
<TabItem value="list">

```json
securityhub:DescribeHub,
securityhub:ListTagsForResource
```

</TabItem>
</Tabs>