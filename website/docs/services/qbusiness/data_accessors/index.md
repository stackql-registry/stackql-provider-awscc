---
title: data_accessors
hide_title: false
hide_table_of_contents: false
keywords:
  - data_accessors
  - qbusiness
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

Creates, updates, deletes or gets a <code>data_accessor</code> resource or lists <code>data_accessors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_accessors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::QBusiness::DataAccessor Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.qbusiness.data_accessors" /></td></tr>
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
    "name": "action_configurations",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "action",
        "type": "string",
        "description": ""
      },
      {
        "name": "filter_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "document_attribute_filter",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "and_all_filters",
                "type": "array",
                "description": ""
              },
              {
                "name": "or_all_filters",
                "type": "array",
                "description": ""
              },
              {
                "name": "equals_to",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "authentication_detail",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "authentication_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "authentication_configuration",
        "type": "object",
        "description": ""
      },
      {
        "name": "external_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_accessor_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_accessor_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "display_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "idc_application_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "principal",
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
    "name": "updated_at",
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
    "name": "application_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_accessor_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html"><code>AWS::QBusiness::DataAccessor</code></a>.

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
    <td><code>data_accessors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, ActionConfigurations, DisplayName, Principal, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_accessors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_accessors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_accessors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_accessors</code></td>
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

Gets all properties from an individual <code>data_accessor</code>.
```sql
SELECT
region,
action_configurations,
application_id,
authentication_detail,
created_at,
data_accessor_arn,
data_accessor_id,
display_name,
idc_application_arn,
principal,
tags,
updated_at
FROM awscc.qbusiness.data_accessors
WHERE region = 'us-east-1' AND Identifier = '<ApplicationId>|<DataAccessorId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_accessors</code> in a region.
```sql
SELECT
region,
application_id,
data_accessor_id
FROM awscc.qbusiness.data_accessors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_accessor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.qbusiness.data_accessors (
 ActionConfigurations,
 ApplicationId,
 DisplayName,
 Principal,
 region
)
SELECT 
'{{ ActionConfigurations }}',
 '{{ ApplicationId }}',
 '{{ DisplayName }}',
 '{{ Principal }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.qbusiness.data_accessors (
 ActionConfigurations,
 ApplicationId,
 AuthenticationDetail,
 DisplayName,
 Principal,
 Tags,
 region
)
SELECT 
 '{{ ActionConfigurations }}',
 '{{ ApplicationId }}',
 '{{ AuthenticationDetail }}',
 '{{ DisplayName }}',
 '{{ Principal }}',
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
  - name: data_accessor
    props:
      - name: ActionConfigurations
        value:
          - Action: '{{ Action }}'
            FilterConfiguration:
              DocumentAttributeFilter:
                AndAllFilters:
                  - null
                OrAllFilters:
                  - null
                NotFilter: null
                EqualsTo:
                  Name: '{{ Name }}'
                  Value: null
                ContainsAll: null
                ContainsAny: null
                GreaterThan: null
                GreaterThanOrEquals: null
                LessThan: null
                LessThanOrEquals: null
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: AuthenticationDetail
        value:
          AuthenticationType: '{{ AuthenticationType }}'
          AuthenticationConfiguration: null
          ExternalIds:
            - '{{ ExternalIds[0] }}'
      - name: DisplayName
        value: '{{ DisplayName }}'
      - name: Principal
        value: '{{ Principal }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_accessor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.qbusiness.data_accessors
SET PatchDocument = string('{{ {
    "ActionConfigurations": action_configurations,
    "AuthenticationDetail": authentication_detail,
    "DisplayName": display_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationId>|<DataAccessorId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.qbusiness.data_accessors
WHERE Identifier = '<ApplicationId|DataAccessorId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_accessors</code> resource, the following permissions are required:

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
qbusiness:CreateDataAccessor,
qbusiness:GetDataAccessor,
qbusiness:ListTagsForResource,
qbusiness:CreateDataAccessorWithTti,
qbusiness:TagResource,
sso:CreateApplication,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant,
sso:PutApplicationAccessScope,
sso:DescribeTrustedTokenIssuer
```

</TabItem>
<TabItem value="read">

```json
qbusiness:GetDataAccessor,
qbusiness:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
qbusiness:GetDataAccessor,
qbusiness:ListTagsForResource,
qbusiness:TagResource,
qbusiness:UntagResource,
qbusiness:UpdateDataAccessor,
sso:PutApplicationAuthenticationMethod,
sso:PutApplicationGrant,
sso:PutApplicationAccessScope,
sso:DescribeTrustedTokenIssuer,
sso:UpdateApplication
```

</TabItem>
<TabItem value="delete">

```json
qbusiness:DeleteDataAccessor,
qbusiness:GetDataAccessor,
sso:DeleteApplication
```

</TabItem>
<TabItem value="list">

```json
qbusiness:ListDataAccessors
```

</TabItem>
</Tabs>