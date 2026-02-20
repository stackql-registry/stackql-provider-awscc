---
title: domain_name_access_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_name_access_associations
  - apigateway
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

Creates, updates, deletes or gets a <code>domain_name_access_association</code> resource or lists <code>domain_name_access_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domain_name_access_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ApiGateway::DomainNameAccessAssociation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apigateway.domain_name_access_associations" /></td></tr>
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
    "name": "domain_name_access_association_arn",
    "type": "string",
    "description": "The amazon resource name (ARN) of the domain name access association resource."
  },
  {
    "name": "domain_name_arn",
    "type": "string",
    "description": "The amazon resource name (ARN) of the domain name resource."
  },
  {
    "name": "access_association_source",
    "type": "string",
    "description": "The source of the domain name access association resource."
  },
  {
    "name": "access_association_source_type",
    "type": "string",
    "description": "The source type of the domain name access association resource."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of arbitrary tags (key-value pairs) to associate with the domainname access association.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": ""
      },
      {
        "name": "key",
        "type": "string",
        "description": ""
      }
    ]
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
    "name": "domain_name_access_association_arn",
    "type": "string",
    "description": "The amazon resource name (ARN) of the domain name access association resource."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html"><code>AWS::ApiGateway::DomainNameAccessAssociation</code></a>.

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
    <td><code>domain_name_access_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DomainNameArn, AccessAssociationSource, AccessAssociationSourceType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>domain_name_access_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>domain_name_access_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>domain_name_access_associations</code></td>
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

Gets all properties from an individual <code>domain_name_access_association</code>.
```sql
SELECT
region,
domain_name_access_association_arn,
domain_name_arn,
access_association_source,
access_association_source_type,
tags
FROM awscc.apigateway.domain_name_access_associations
WHERE region = 'us-east-1' AND Identifier = '<DomainNameAccessAssociationArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>domain_name_access_associations</code> in a region.
```sql
SELECT
region,
domain_name_access_association_arn
FROM awscc.apigateway.domain_name_access_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain_name_access_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apigateway.domain_name_access_associations (
 DomainNameArn,
 AccessAssociationSource,
 AccessAssociationSourceType,
 region
)
SELECT 
'{{ DomainNameArn }}',
 '{{ AccessAssociationSource }}',
 '{{ AccessAssociationSourceType }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apigateway.domain_name_access_associations (
 DomainNameArn,
 AccessAssociationSource,
 AccessAssociationSourceType,
 Tags,
 region
)
SELECT 
 '{{ DomainNameArn }}',
 '{{ AccessAssociationSource }}',
 '{{ AccessAssociationSourceType }}',
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
  - name: domain_name_access_association
    props:
      - name: DomainNameArn
        value: '{{ DomainNameArn }}'
      - name: AccessAssociationSource
        value: '{{ AccessAssociationSource }}'
      - name: AccessAssociationSourceType
        value: '{{ AccessAssociationSourceType }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apigateway.domain_name_access_associations
WHERE Identifier = '<DomainNameAccessAssociationArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domain_name_access_associations</code> resource, the following permissions are required:

### Create
```json
apigateway:POST,
apigateway:GET
```

### Read
```json
apigateway:GET
```

### Delete
```json
apigateway:DELETE,
apigateway:GET
```

### List
```json
apigateway:GET
```
