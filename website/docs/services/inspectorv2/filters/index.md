---
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
  - inspectorv2
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

Creates, updates, deletes or gets a <code>filter</code> resource or lists <code>filters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>filters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Inspector Filter resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.inspectorv2.filters" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "Findings filter name."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Findings filter description."
  },
  {
    "name": "filter_criteria",
    "type": "object",
    "description": "Findings filter criteria.",
    "children": [
      {
        "name": "aws_account_id",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "comparison",
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
        "name": "ecr_image_pushed_at",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "end_inclusive",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "epss_score",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "lower_inclusive",
            "type": "number",
            "description": ""
          },
          {
            "name": "upper_inclusive",
            "type": "number",
            "description": ""
          }
        ]
      },
      {
        "name": "port_range",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "begin_inclusive",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "resource_tags",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "comparison",
            "type": "string",
            "description": ""
          },
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
        "name": "vulnerable_packages",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "filter_action",
    "type": "string",
    "description": "Findings filter action."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Findings filter ARN."
  },
  {
    "name": "tags",
    "type": "object",
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
    "name": "arn",
    "type": "string",
    "description": "Findings filter ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html"><code>AWS::InspectorV2::Filter</code></a>.

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
    <td><code>filters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, FilterCriteria, FilterAction, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>filters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>filters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>filters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>filters</code></td>
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

Gets all properties from an individual <code>filter</code>.
```sql
SELECT
region,
name,
description,
filter_criteria,
filter_action,
arn,
tags
FROM awscc.inspectorv2.filters
WHERE region = 'us-east-1' AND Identifier = '{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>filters</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.inspectorv2.filters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.inspectorv2.filters (
 Name,
 FilterCriteria,
 FilterAction,
 region
)
SELECT
'{{ name }}',
 '{{ filter_criteria }}',
 '{{ filter_action }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.inspectorv2.filters (
 Name,
 Description,
 FilterCriteria,
 FilterAction,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ description }}',
 '{{ filter_criteria }}',
 '{{ filter_action }}',
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
  - name: filter
    props:
      - name: name
        value: '{{ name }}'
      - name: description
        value: '{{ description }}'
      - name: filter_criteria
        value:
          aws_account_id:
            - comparison: '{{ comparison }}'
              value: '{{ value }}'
          code_vulnerability_detector_name: null
          code_vulnerability_detector_tags: null
          code_vulnerability_file_path: null
          component_id: null
          component_type: null
          ec2_instance_image_id: null
          ec2_instance_subnet_id: null
          ec2_instance_vpc_id: null
          ecr_image_architecture: null
          ecr_image_hash: null
          ecr_image_pushed_at:
            - end_inclusive: '{{ end_inclusive }}'
              start_inclusive: null
          ecr_image_registry: null
          ecr_image_repository_name: null
          ecr_image_tags: null
          epss_score:
            - lower_inclusive: null
              upper_inclusive: null
          exploit_available: null
          finding_arn: null
          finding_status: null
          finding_type: null
          first_observed_at: null
          fix_available: null
          inspector_score: null
          lambda_function_execution_role_arn: null
          lambda_function_last_modified_at: null
          lambda_function_layers: null
          lambda_function_name: null
          lambda_function_runtime: null
          last_observed_at: null
          network_protocol: null
          port_range:
            - begin_inclusive: '{{ begin_inclusive }}'
              end_inclusive: null
          related_vulnerabilities: null
          resource_id: null
          resource_tags:
            - comparison: '{{ comparison }}'
              key: '{{ key }}'
              value: '{{ value }}'
          resource_type: null
          severity: null
          title: null
          updated_at: null
          vendor_severity: null
          vulnerability_id: null
          vulnerability_source: null
          vulnerable_packages:
            - architecture: null
              epoch: null
              file_path: null
              name: null
              release: null
              source_lambda_layer_arn: null
              source_layer_hash: null
              version: null
      - name: filter_action
        value: '{{ filter_action }}'
      - name: tags
        value: {}
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>filter</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.inspectorv2.filters
SET PatchDocument = string('{{ {
    "Name": name,
    "Description": description,
    "FilterCriteria": filter_criteria,
    "FilterAction": filter_action,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.inspectorv2.filters
WHERE Identifier = '{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>filters</code> resource, the following permissions are required:

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
inspector2:CreateFilter,
inspector2:ListFilters,
inspector2:TagResource
```

</TabItem>
<TabItem value="read">

```json
inspector2:ListFilters,
inspector2:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
inspector2:ListFilters,
inspector2:UpdateFilter,
inspector2:TagResource,
inspector2:UntagResource,
inspector2:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
inspector2:DeleteFilter,
inspector2:ListFilters
```

</TabItem>
<TabItem value="list">

```json
inspector2:ListFilters
```

</TabItem>
</Tabs>