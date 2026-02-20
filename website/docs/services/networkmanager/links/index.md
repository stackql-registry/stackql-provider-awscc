---
title: links
hide_title: false
hide_table_of_contents: false
keywords:
  - links
  - networkmanager
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

Creates, updates, deletes or gets a <code>link</code> resource or lists <code>links</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>links</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::Link type describes a link.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.links" /></td></tr>
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
    "name": "link_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the link."
  },
  {
    "name": "link_id",
    "type": "string",
    "description": "The ID of the link."
  },
  {
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "site_id",
    "type": "string",
    "description": "The ID of the site"
  },
  {
    "name": "bandwidth",
    "type": "object",
    "description": "The Bandwidth for the link.",
    "children": [
      {
        "name": "download_speed",
        "type": "integer",
        "description": "Download speed in Mbps."
      },
      {
        "name": "upload_speed",
        "type": "integer",
        "description": "Upload speed in Mbps."
      }
    ]
  },
  {
    "name": "provider",
    "type": "string",
    "description": "The provider of the link."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the link."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the link.",
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
    "name": "type",
    "type": "string",
    "description": "The type of the link."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time that the device was created."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the link."
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
    "name": "link_id",
    "type": "string",
    "description": "The ID of the link."
  },
  {
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html"><code>AWS::NetworkManager::Link</code></a>.

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
    <td><code>links</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GlobalNetworkId, SiteId, Bandwidth, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>links</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>links</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>links_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>links</code></td>
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

Gets all properties from an individual <code>link</code>.
```sql
SELECT
region,
link_arn,
link_id,
global_network_id,
site_id,
bandwidth,
provider,
description,
tags,
type,
created_at,
state
FROM awscc.networkmanager.links
WHERE region = 'us-east-1' AND data__Identifier = '<GlobalNetworkId>|<LinkId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>links</code> in a region.
```sql
SELECT
region,
global_network_id,
link_id
FROM awscc.networkmanager.links_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>link</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.links (
 GlobalNetworkId,
 SiteId,
 Bandwidth,
 region
)
SELECT 
'{{ GlobalNetworkId }}',
 '{{ SiteId }}',
 '{{ Bandwidth }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.links (
 GlobalNetworkId,
 SiteId,
 Bandwidth,
 Provider,
 Description,
 Tags,
 Type,
 region
)
SELECT 
 '{{ GlobalNetworkId }}',
 '{{ SiteId }}',
 '{{ Bandwidth }}',
 '{{ Provider }}',
 '{{ Description }}',
 '{{ Tags }}',
 '{{ Type }}',
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
  - name: link
    props:
      - name: GlobalNetworkId
        value: '{{ GlobalNetworkId }}'
      - name: SiteId
        value: '{{ SiteId }}'
      - name: Bandwidth
        value:
          DownloadSpeed: '{{ DownloadSpeed }}'
          UploadSpeed: '{{ UploadSpeed }}'
      - name: Provider
        value: '{{ Provider }}'
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.networkmanager.links
SET data__PatchDocument = string('{{ {
    "Bandwidth": bandwidth,
    "Provider": provider,
    "Description": description,
    "Tags": tags,
    "Type": type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<GlobalNetworkId>|<LinkId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.links
WHERE data__Identifier = '<GlobalNetworkId|LinkId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>links</code> resource, the following permissions are required:

### Create
```json
networkmanager:CreateLink,
networkmanager:GetLinks,
networkmanager:TagResource
```

### Read
```json
networkmanager:GetLinks
```

### Update
```json
networkmanager:ListTagsForResource,
networkmanager:TagResource,
networkmanager:GetLinks,
networkmanager:UntagResource,
networkmanager:UpdateLink
```

### Delete
```json
networkmanager:GetLinks,
networkmanager:DeleteLink
```

### List
```json
networkmanager:GetLinks
```
