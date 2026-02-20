---
title: trust_anchors
hide_title: false
hide_table_of_contents: false
keywords:
  - trust_anchors
  - rolesanywhere
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

Creates, updates, deletes or gets a <code>trust_anchor</code> resource or lists <code>trust_anchors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trust_anchors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::RolesAnywhere::TrustAnchor Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rolesanywhere.trust_anchors" /></td></tr>
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
    "name": "enabled",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "notification_settings",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "event",
        "type": "string",
        "description": ""
      },
      {
        "name": "threshold",
        "type": "number",
        "description": ""
      },
      {
        "name": "channel",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "source",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "source_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "source_data",
        "type": "object",
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
    "name": "trust_anchor_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "trust_anchor_arn",
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
    "name": "trust_anchor_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html"><code>AWS::RolesAnywhere::TrustAnchor</code></a>.

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
    <td><code>trust_anchors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, Source, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>trust_anchors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>trust_anchors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>trust_anchors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>trust_anchors</code></td>
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

Gets all properties from an individual <code>trust_anchor</code>.
```sql
SELECT
region,
enabled,
name,
notification_settings,
source,
tags,
trust_anchor_id,
trust_anchor_arn
FROM awscc.rolesanywhere.trust_anchors
WHERE region = 'us-east-1' AND Identifier = '<TrustAnchorId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>trust_anchors</code> in a region.
```sql
SELECT
region,
trust_anchor_id
FROM awscc.rolesanywhere.trust_anchors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trust_anchor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rolesanywhere.trust_anchors (
 Name,
 Source,
 region
)
SELECT 
'{{ Name }}',
 '{{ Source }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rolesanywhere.trust_anchors (
 Enabled,
 Name,
 NotificationSettings,
 Source,
 Tags,
 region
)
SELECT 
 '{{ Enabled }}',
 '{{ Name }}',
 '{{ NotificationSettings }}',
 '{{ Source }}',
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
  - name: trust_anchor
    props:
      - name: Enabled
        value: '{{ Enabled }}'
      - name: Name
        value: '{{ Name }}'
      - name: NotificationSettings
        value:
          - Enabled: '{{ Enabled }}'
            Event: '{{ Event }}'
            Threshold: null
            Channel: '{{ Channel }}'
      - name: Source
        value:
          SourceType: '{{ SourceType }}'
          SourceData: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>trust_anchor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rolesanywhere.trust_anchors
SET PatchDocument = string('{{ {
    "Enabled": enabled,
    "Name": name,
    "NotificationSettings": notification_settings,
    "Source": source,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TrustAnchorId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rolesanywhere.trust_anchors
WHERE Identifier = '<TrustAnchorId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trust_anchors</code> resource, the following permissions are required:

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
iam:CreateServiceLinkedRole,
rolesanywhere:CreateTrustAnchor,
rolesanywhere:TagResource
```

</TabItem>
<TabItem value="read">

```json
rolesanywhere:GetTrustAnchor,
rolesanywhere:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
acm-pca:GetCertificateAuthorityCertificate,
rolesanywhere:ListTagsForResource,
rolesanywhere:TagResource,
rolesanywhere:UntagResource,
rolesanywhere:EnableTrustAnchor,
rolesanywhere:DisableTrustAnchor,
rolesanywhere:UpdateTrustAnchor,
rolesanywhere:GetTrustAnchor,
rolesanywhere:PutNotificationSettings,
rolesanywhere:ResetNotificationSettings
```

</TabItem>
<TabItem value="delete">

```json
rolesanywhere:DeleteTrustAnchor
```

</TabItem>
<TabItem value="list">

```json
rolesanywhere:ListTrustAnchors,
rolesanywhere:ListTagsForResource
```

</TabItem>
</Tabs>