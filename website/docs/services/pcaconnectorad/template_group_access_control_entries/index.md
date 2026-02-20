---
title: template_group_access_control_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - template_group_access_control_entries
  - pcaconnectorad
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

Creates, updates, deletes or gets a <code>template_group_access_control_entry</code> resource or lists <code>template_group_access_control_entries</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>template_group_access_control_entries</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::PCAConnectorAD::TemplateGroupAccessControlEntry Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorad.template_group_access_control_entries" /></td></tr>
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
    "name": "access_rights",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enroll",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "group_display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "group_security_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_arn",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "group_security_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "template_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html"><code>AWS::PCAConnectorAD::TemplateGroupAccessControlEntry</code></a>.

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
    <td><code>template_group_access_control_entries</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccessRights, GroupDisplayName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>template_group_access_control_entries</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>template_group_access_control_entries</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>template_group_access_control_entries_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>template_group_access_control_entries</code></td>
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

Gets all properties from an individual <code>template_group_access_control_entry</code>.
```sql
SELECT
region,
access_rights,
group_display_name,
group_security_identifier,
template_arn
FROM awscc.pcaconnectorad.template_group_access_control_entries
WHERE region = 'us-east-1' AND Identifier = '<GroupSecurityIdentifier>|<TemplateArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>template_group_access_control_entries</code> in a region.
```sql
SELECT
region,
group_security_identifier,
template_arn
FROM awscc.pcaconnectorad.template_group_access_control_entries_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>template_group_access_control_entry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcaconnectorad.template_group_access_control_entries (
 AccessRights,
 GroupDisplayName,
 region
)
SELECT 
'{{ AccessRights }}',
 '{{ GroupDisplayName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcaconnectorad.template_group_access_control_entries (
 AccessRights,
 GroupDisplayName,
 GroupSecurityIdentifier,
 TemplateArn,
 region
)
SELECT 
 '{{ AccessRights }}',
 '{{ GroupDisplayName }}',
 '{{ GroupSecurityIdentifier }}',
 '{{ TemplateArn }}',
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
  - name: template_group_access_control_entry
    props:
      - name: AccessRights
        value:
          Enroll: '{{ Enroll }}'
          AutoEnroll: null
      - name: GroupDisplayName
        value: '{{ GroupDisplayName }}'
      - name: GroupSecurityIdentifier
        value: '{{ GroupSecurityIdentifier }}'
      - name: TemplateArn
        value: '{{ TemplateArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>template_group_access_control_entry</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.pcaconnectorad.template_group_access_control_entries
SET PatchDocument = string('{{ {
    "AccessRights": access_rights,
    "GroupDisplayName": group_display_name
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<GroupSecurityIdentifier>|<TemplateArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcaconnectorad.template_group_access_control_entries
WHERE Identifier = '<GroupSecurityIdentifier|TemplateArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>template_group_access_control_entries</code> resource, the following permissions are required:

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
pca-connector-ad:CreateTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="read">

```json
pca-connector-ad:GetTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="update">

```json
pca-connector-ad:UpdateTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="delete">

```json
pca-connector-ad:DeleteTemplateGroupAccessControlEntry,
pca-connector-ad:GetTemplateGroupAccessControlEntry
```

</TabItem>
<TabItem value="list">

```json
pca-connector-ad:ListTemplateGroupAccessControlEntries
```

</TabItem>
</Tabs>