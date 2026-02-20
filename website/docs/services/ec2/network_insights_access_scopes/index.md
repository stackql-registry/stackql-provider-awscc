---
title: network_insights_access_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_access_scopes
  - ec2
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

Creates, updates, deletes or gets a <code>network_insights_access_scope</code> resource or lists <code>network_insights_access_scopes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>network_insights_access_scopes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::EC2::NetworkInsightsAccessScope</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ec2.network_insights_access_scopes" /></td></tr>
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
    "name": "network_insights_access_scope_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_insights_access_scope_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "updated_date",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The tag key."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The tag value."
      }
    ]
  },
  {
    "name": "match_paths",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "source",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "packet_header_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "source_addresses",
                "type": "array",
                "description": ""
              },
              {
                "name": "destination_addresses",
                "type": "array",
                "description": ""
              },
              {
                "name": "source_ports",
                "type": "array",
                "description": ""
              },
              {
                "name": "destination_ports",
                "type": "array",
                "description": ""
              },
              {
                "name": "source_prefix_lists",
                "type": "array",
                "description": ""
              },
              {
                "name": "destination_prefix_lists",
                "type": "array",
                "description": ""
              },
              {
                "name": "protocols",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "resource_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resources",
                "type": "array",
                "description": ""
              },
              {
                "name": "resource_types",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "through_resources",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "resource_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "resources",
                "type": "array",
                "description": ""
              },
              {
                "name": "resource_types",
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
    "name": "exclude_paths",
    "type": "array",
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
    "name": "network_insights_access_scope_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html"><code>AWS::EC2::NetworkInsightsAccessScope</code></a>.

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
    <td><code>network_insights_access_scopes</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>network_insights_access_scopes</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>network_insights_access_scopes</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>network_insights_access_scopes_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>network_insights_access_scopes</code></td>
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

Gets all properties from an individual <code>network_insights_access_scope</code>.
```sql
SELECT
region,
network_insights_access_scope_id,
network_insights_access_scope_arn,
created_date,
updated_date,
tags,
match_paths,
exclude_paths
FROM awscc.ec2.network_insights_access_scopes
WHERE region = 'us-east-1' AND Identifier = '<NetworkInsightsAccessScopeId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>network_insights_access_scopes</code> in a region.
```sql
SELECT
region,
network_insights_access_scope_id
FROM awscc.ec2.network_insights_access_scopes_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>network_insights_access_scope</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ec2.network_insights_access_scopes (
 Tags,
 MatchPaths,
 ExcludePaths,
 region
)
SELECT 
'{{ Tags }}',
 '{{ MatchPaths }}',
 '{{ ExcludePaths }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ec2.network_insights_access_scopes (
 Tags,
 MatchPaths,
 ExcludePaths,
 region
)
SELECT 
 '{{ Tags }}',
 '{{ MatchPaths }}',
 '{{ ExcludePaths }}',
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
  - name: network_insights_access_scope
    props:
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: MatchPaths
        value:
          - Source:
              PacketHeaderStatement:
                SourceAddresses:
                  - '{{ SourceAddresses[0] }}'
                DestinationAddresses:
                  - '{{ DestinationAddresses[0] }}'
                SourcePorts:
                  - '{{ SourcePorts[0] }}'
                DestinationPorts:
                  - '{{ DestinationPorts[0] }}'
                SourcePrefixLists:
                  - '{{ SourcePrefixLists[0] }}'
                DestinationPrefixLists:
                  - '{{ DestinationPrefixLists[0] }}'
                Protocols:
                  - '{{ Protocols[0] }}'
              ResourceStatement:
                Resources:
                  - '{{ Resources[0] }}'
                ResourceTypes:
                  - '{{ ResourceTypes[0] }}'
            Destination: null
            ThroughResources:
              - ResourceStatement: null
      - name: ExcludePaths
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>network_insights_access_scope</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ec2.network_insights_access_scopes
SET PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<NetworkInsightsAccessScopeId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ec2.network_insights_access_scopes
WHERE Identifier = '<NetworkInsightsAccessScopeId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>network_insights_access_scopes</code> resource, the following permissions are required:

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
ec2:CreateNetworkInsightsAccessScope,
ec2:CreateTags,
tiros:CreateQuery
```

</TabItem>
<TabItem value="read">

```json
ec2:DescribeNetworkInsightsAccessScopes,
ec2:GetNetworkInsightsAccessScopeContent
```

</TabItem>
<TabItem value="update">

```json
ec2:DescribeNetworkInsightsAccessScopes,
ec2:GetNetworkInsightsAccessScopeContent,
ec2:CreateTags,
ec2:DeleteTags
```

</TabItem>
<TabItem value="delete">

```json
ec2:DeleteNetworkInsightsAccessScope,
ec2:DeleteTags
```

</TabItem>
<TabItem value="list">

```json
ec2:DescribeNetworkInsightsAccessScopes
```

</TabItem>
</Tabs>