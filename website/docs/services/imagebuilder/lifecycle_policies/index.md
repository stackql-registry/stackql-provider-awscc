---
title: lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policies
  - imagebuilder
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

Creates, updates, deletes or gets a <code>lifecycle_policy</code> resource or lists <code>lifecycle_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>lifecycle_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::LifecyclePolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.lifecycle_policies" /></td></tr>
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
    "description": "The Amazon Resource Name (ARN) of the lifecycle policy."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the lifecycle policy."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the lifecycle policy."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of the lifecycle policy."
  },
  {
    "name": "execution_role",
    "type": "string",
    "description": "The execution role of the lifecycle policy."
  },
  {
    "name": "resource_type",
    "type": "string",
    "description": "The resource type of the lifecycle policy."
  },
  {
    "name": "policy_details",
    "type": "array",
    "description": "The policy details of the lifecycle policy.",
    "children": [
      {
        "name": "action",
        "type": "object",
        "description": "The action of the policy detail.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The action type of the policy detail."
          },
          {
            "name": "include_resources",
            "type": "object",
            "description": "The included resources of the policy detail.",
            "children": [
              {
                "name": "amis",
                "type": "boolean",
                "description": "Use to configure lifecycle actions on AMIs."
              },
              {
                "name": "containers",
                "type": "boolean",
                "description": "Use to configure lifecycle actions on containers."
              },
              {
                "name": "snapshots",
                "type": "boolean",
                "description": "Use to configure lifecycle actions on snapshots."
              }
            ]
          }
        ]
      },
      {
        "name": "filter",
        "type": "object",
        "description": "The filters to apply of the policy detail.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The filter type."
          },
          {
            "name": "value",
            "type": "integer",
            "description": "The filter value."
          },
          {
            "name": "unit",
            "type": "string",
            "description": "The value's time unit."
          },
          {
            "name": "retain_at_least",
            "type": "integer",
            "description": "The minimum number of Image Builder resources to retain."
          }
        ]
      },
      {
        "name": "exclusion_rules",
        "type": "object",
        "description": "The exclusion rules to apply of the policy detail.",
        "children": [
          {
            "name": "tag_map",
            "type": "object",
            "description": "The Image Builder tags to filter on."
          },
          {
            "name": "amis",
            "type": "object",
            "description": "The AMI exclusion rules for the policy detail.",
            "children": [
              {
                "name": "is_public",
                "type": "boolean",
                "description": "Use to apply lifecycle policy actions on whether the AMI is public."
              },
              {
                "name": "regions",
                "type": "array",
                "description": "Use to apply lifecycle policy actions on AMIs distributed to a set of regions."
              },
              {
                "name": "shared_accounts",
                "type": "array",
                "description": "Use to apply lifecycle policy actions on AMIs shared with a set of regions."
              },
              {
                "name": "last_launched",
                "type": "object",
                "description": "Use to apply lifecycle policy actions on AMIs launched before a certain time."
              },
              {
                "name": "tag_map",
                "type": "object",
                "description": "The AMIs to select by tag."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "resource_selection",
    "type": "object",
    "description": "The resource selection of the lifecycle policy.",
    "children": [
      {
        "name": "recipes",
        "type": "array",
        "description": "The recipes to select.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The recipe name."
          },
          {
            "name": "semantic_version",
            "type": "string",
            "description": "The recipe version."
          }
        ]
      },
      {
        "name": "tag_map",
        "type": "object",
        "description": "The Image Builder resources to select by tag."
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags associated with the lifecycle policy."
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
    "description": "The Amazon Resource Name (ARN) of the lifecycle policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html"><code>AWS::ImageBuilder::LifecyclePolicy</code></a>.

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
    <td><code>lifecycle_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ExecutionRole, ResourceType, PolicyDetails, ResourceSelection, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>lifecycle_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>lifecycle_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>lifecycle_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>lifecycle_policies</code></td>
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

Gets all properties from an individual <code>lifecycle_policy</code>.
```sql
SELECT
region,
arn,
name,
description,
status,
execution_role,
resource_type,
policy_details,
resource_selection,
tags
FROM awscc.imagebuilder.lifecycle_policies
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>lifecycle_policies</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.lifecycle_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>lifecycle_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.lifecycle_policies (
 Name,
 ExecutionRole,
 ResourceType,
 PolicyDetails,
 ResourceSelection,
 region
)
SELECT 
'{{ Name }}',
 '{{ ExecutionRole }}',
 '{{ ResourceType }}',
 '{{ PolicyDetails }}',
 '{{ ResourceSelection }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.lifecycle_policies (
 Name,
 Description,
 Status,
 ExecutionRole,
 ResourceType,
 PolicyDetails,
 ResourceSelection,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ Status }}',
 '{{ ExecutionRole }}',
 '{{ ResourceType }}',
 '{{ PolicyDetails }}',
 '{{ ResourceSelection }}',
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
  - name: lifecycle_policy
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: Status
        value: '{{ Status }}'
      - name: ExecutionRole
        value: '{{ ExecutionRole }}'
      - name: ResourceType
        value: '{{ ResourceType }}'
      - name: PolicyDetails
        value:
          - Action:
              Type: '{{ Type }}'
              IncludeResources:
                Amis: '{{ Amis }}'
                Containers: '{{ Containers }}'
                Snapshots: '{{ Snapshots }}'
            Filter:
              Type: '{{ Type }}'
              Value: '{{ Value }}'
              Unit: '{{ Unit }}'
              RetainAtLeast: '{{ RetainAtLeast }}'
            ExclusionRules:
              TagMap: {}
              Amis:
                IsPublic: '{{ IsPublic }}'
                Regions:
                  - '{{ Regions[0] }}'
                SharedAccounts:
                  - '{{ SharedAccounts[0] }}'
                LastLaunched:
                  Value: '{{ Value }}'
                  Unit: null
                TagMap: {}
      - name: ResourceSelection
        value:
          Recipes:
            - Name: '{{ Name }}'
              SemanticVersion: '{{ SemanticVersion }}'
          TagMap: {}
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.imagebuilder.lifecycle_policies
SET PatchDocument = string('{{ {
    "Description": description,
    "Status": status,
    "ExecutionRole": execution_role,
    "ResourceType": resource_type,
    "PolicyDetails": policy_details,
    "ResourceSelection": resource_selection,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.lifecycle_policies
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>lifecycle_policies</code> resource, the following permissions are required:

### Create
```json
iam:PassRole,
imagebuilder:CreateLifecyclePolicy,
imagebuilder:GetLifecyclePolicy,
imagebuilder:TagResource
```

### Update
```json
iam:PassRole,
imagebuilder:GetLifecyclePolicy,
imagebuilder:UpdateLifecyclePolicy,
imagebuilder:TagResource,
imagebuilder:UntagResource
```

### Read
```json
imagebuilder:GetLifecyclePolicy
```

### Delete
```json
imagebuilder:GetLifecyclePolicy,
imagebuilder:DeleteLifecyclePolicy,
imagebuilder:UntagResource
```

### List
```json
imagebuilder:ListLifecyclePolicies
```
