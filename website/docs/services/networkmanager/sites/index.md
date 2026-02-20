---
title: sites
hide_title: false
hide_table_of_contents: false
keywords:
  - sites
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

Creates, updates, deletes or gets a <code>site</code> resource or lists <code>sites</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sites</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::NetworkManager::Site type describes a site.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.networkmanager.sites" /></td></tr>
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
    "name": "site_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the site."
  },
  {
    "name": "site_id",
    "type": "string",
    "description": "The ID of the site."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the site."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the site.",
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
    "name": "global_network_id",
    "type": "string",
    "description": "The ID of the global network."
  },
  {
    "name": "location",
    "type": "object",
    "description": "The location of the site.",
    "children": [
      {
        "name": "address",
        "type": "string",
        "description": "The physical address."
      },
      {
        "name": "latitude",
        "type": "string",
        "description": "The latitude."
      },
      {
        "name": "longitude",
        "type": "string",
        "description": "The longitude."
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time that the device was created."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the site."
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
    "name": "site_id",
    "type": "string",
    "description": "The ID of the site."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html"><code>AWS::NetworkManager::Site</code></a>.

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
    <td><code>sites</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="GlobalNetworkId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>sites</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>sites</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>sites_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>sites</code></td>
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

Gets all properties from an individual <code>site</code>.
```sql
SELECT
region,
site_arn,
site_id,
description,
tags,
global_network_id,
location,
created_at,
state
FROM awscc.networkmanager.sites
WHERE region = 'us-east-1' AND Identifier = '<GlobalNetworkId>|<SiteId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>sites</code> in a region.
```sql
SELECT
region,
global_network_id,
site_id
FROM awscc.networkmanager.sites_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>site</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.networkmanager.sites (
 GlobalNetworkId,
 region
)
SELECT 
'{{ GlobalNetworkId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.networkmanager.sites (
 Description,
 Tags,
 GlobalNetworkId,
 Location,
 region
)
SELECT 
 '{{ Description }}',
 '{{ Tags }}',
 '{{ GlobalNetworkId }}',
 '{{ Location }}',
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
  - name: site
    props:
      - name: Description
        value: '{{ Description }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: GlobalNetworkId
        value: '{{ GlobalNetworkId }}'
      - name: Location
        value:
          Address: '{{ Address }}'
          Latitude: '{{ Latitude }}'
          Longitude: '{{ Longitude }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.networkmanager.sites
SET PatchDocument = string('{{ {
    "Description": description,
    "Tags": tags,
    "Location": location
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<GlobalNetworkId>|<SiteId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.networkmanager.sites
WHERE Identifier = '<GlobalNetworkId|SiteId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sites</code> resource, the following permissions are required:

### Create
```json
networkmanager:CreateSite,
networkmanager:GetSites,
networkmanager:TagResource
```

### Read
```json
networkmanager:GetSites
```

### Update
```json
networkmanager:GetSites,
networkmanager:ListTagsForResource,
networkmanager:TagResource,
networkmanager:UntagResource,
networkmanager:UpdateSite
```

### Delete
```json
networkmanager:GetSites,
networkmanager:DeleteSite
```

### List
```json
networkmanager:GetSites
```
