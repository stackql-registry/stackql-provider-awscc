---
title: service_network_service_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_network_service_associations
  - vpclattice
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

Creates, updates, deletes or gets a <code>service_network_service_association</code> resource or lists <code>service_network_service_associations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>service_network_service_associations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Associates a service with a service network.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.vpclattice.service_network_service_associations" /></td></tr>
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
    "description": ""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": ""
  },
  {
    "name": "dns_entry",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "domain_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "hosted_zone_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_network_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_identifier",
    "type": "string",
    "description": ""
  },
  {
    "name": "service_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkserviceassociation.html"><code>AWS::VpcLattice::ServiceNetworkServiceAssociation</code></a>.

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
    <td><code>service_network_service_associations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>service_network_service_associations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>service_network_service_associations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>service_network_service_associations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>service_network_service_associations</code></td>
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

Gets all properties from an individual <code>service_network_service_association</code>.
```sql
SELECT
region,
arn,
created_at,
dns_entry,
id,
service_network_arn,
service_network_id,
service_network_identifier,
service_network_name,
service_arn,
service_id,
service_identifier,
service_name,
status,
tags
FROM awscc.vpclattice.service_network_service_associations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>service_network_service_associations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.vpclattice.service_network_service_associations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service_network_service_association</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.vpclattice.service_network_service_associations (
 DnsEntry,
 ServiceNetworkIdentifier,
 ServiceIdentifier,
 Tags,
 region
)
SELECT 
'{{ DnsEntry }}',
 '{{ ServiceNetworkIdentifier }}',
 '{{ ServiceIdentifier }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.vpclattice.service_network_service_associations (
 DnsEntry,
 ServiceNetworkIdentifier,
 ServiceIdentifier,
 Tags,
 region
)
SELECT 
 '{{ DnsEntry }}',
 '{{ ServiceNetworkIdentifier }}',
 '{{ ServiceIdentifier }}',
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
  - name: service_network_service_association
    props:
      - name: DnsEntry
        value:
          DomainName: '{{ DomainName }}'
          HostedZoneId: '{{ HostedZoneId }}'
      - name: ServiceNetworkIdentifier
        value: '{{ ServiceNetworkIdentifier }}'
      - name: ServiceIdentifier
        value: '{{ ServiceIdentifier }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.vpclattice.service_network_service_associations
SET data__PatchDocument = string('{{ {
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.vpclattice.service_network_service_associations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>service_network_service_associations</code> resource, the following permissions are required:

### Create
```json
vpc-lattice:CreateServiceNetworkServiceAssociation,
vpc-lattice:GetServiceNetworkServiceAssociation,
vpc-lattice:TagResource,
vpc-lattice:ListTagsForResource
```

### Read
```json
vpc-lattice:GetServiceNetworkServiceAssociation,
vpc-lattice:ListTagsForResource
```

### Update
```json
vpc-lattice:TagResource,
vpc-lattice:UntagResource,
vpc-lattice:GetServiceNetworkServiceAssociation,
vpc-lattice:ListTagsForResource
```

### Delete
```json
vpc-lattice:DeleteServiceNetworkServiceAssociation,
vpc-lattice:GetServiceNetworkServiceAssociation,
vpc-lattice:UntagResource
```

### List
```json
vpc-lattice:ListServiceNetworkServiceAssociations
```
