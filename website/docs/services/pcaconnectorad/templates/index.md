---
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
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

Creates, updates, deletes or gets a <code>template</code> resource or lists <code>templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Represents a template that defines certificate configurations, both for issuance and client handling</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.pcaconnectorad.templates" /></td></tr>
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
    "name": "connector_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "definition",
    "type": "object",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "reenroll_all_certificate_holders",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "tags",
    "type": "object",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html"><code>AWS::PCAConnectorAD::Template</code></a>.

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
    <td><code>templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConnectorArn, Definition, Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>templates</code></td>
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

Gets all properties from an individual <code>template</code>.
```sql
SELECT
region,
connector_arn,
definition,
name,
reenroll_all_certificate_holders,
tags,
template_arn
FROM awscc.pcaconnectorad.templates
WHERE region = 'us-east-1' AND Identifier = '<TemplateArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>templates</code> in a region.
```sql
SELECT
region,
template_arn
FROM awscc.pcaconnectorad.templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.pcaconnectorad.templates (
 ConnectorArn,
 Definition,
 Name,
 region
)
SELECT 
'{{ ConnectorArn }}',
 '{{ Definition }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.pcaconnectorad.templates (
 ConnectorArn,
 Definition,
 Name,
 ReenrollAllCertificateHolders,
 Tags,
 region
)
SELECT 
 '{{ ConnectorArn }}',
 '{{ Definition }}',
 '{{ Name }}',
 '{{ ReenrollAllCertificateHolders }}',
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
  - name: template
    props:
      - name: ConnectorArn
        value: '{{ ConnectorArn }}'
      - name: Definition
        value: null
      - name: Name
        value: '{{ Name }}'
      - name: ReenrollAllCertificateHolders
        value: '{{ ReenrollAllCertificateHolders }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.pcaconnectorad.templates
SET PatchDocument = string('{{ {
    "Definition": definition,
    "ReenrollAllCertificateHolders": reenroll_all_certificate_holders,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<TemplateArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.pcaconnectorad.templates
WHERE Identifier = '<TemplateArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>templates</code> resource, the following permissions are required:

### Create
```json
pca-connector-ad:CreateTemplate,
pca-connector-ad:TagResource
```

### Read
```json
pca-connector-ad:GetTemplate,
pca-connector-ad:ListTagsForResource
```

### Update
```json
pca-connector-ad:ListTagsForResource,
pca-connector-ad:TagResource,
pca-connector-ad:UntagResource,
pca-connector-ad:UpdateTemplate
```

### Delete
```json
pca-connector-ad:GetTemplate,
pca-connector-ad:DeleteTemplate,
pca-connector-ad:UntagResource
```

### List
```json
pca-connector-ad:ListTemplates
```
