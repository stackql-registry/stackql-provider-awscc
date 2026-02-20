---
title: virtual_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_clusters
  - emrcontainers
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

Creates, updates, deletes or gets a <code>virtual_cluster</code> resource or lists <code>virtual_clusters</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>virtual_clusters</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Schema of AWS::EMRContainers::VirtualCluster Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.emrcontainers.virtual_clusters" /></td></tr>
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
    "name": "container_provider",
    "type": "object",
    "description": "Container provider of the virtual cluster.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of the container provider"
      },
      {
        "name": "id",
        "type": "string",
        "description": "The ID of the container cluster"
      },
      {
        "name": "info",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "eks_info",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "namespace",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the virtual cluster."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the virtual cluster."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this virtual cluster.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "security_configuration_id",
    "type": "string",
    "description": "The ID of the security configuration."
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
    "name": "id",
    "type": "string",
    "description": "Id of the virtual cluster."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html"><code>AWS::EMRContainers::VirtualCluster</code></a>.

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
    <td><code>virtual_clusters</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, ContainerProvider, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>virtual_clusters</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>virtual_clusters</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>virtual_clusters_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>virtual_clusters</code></td>
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

Gets all properties from an individual <code>virtual_cluster</code>.
```sql
SELECT
region,
arn,
container_provider,
id,
name,
tags,
security_configuration_id
FROM awscc.emrcontainers.virtual_clusters
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>virtual_clusters</code> in a region.
```sql
SELECT
region,
id
FROM awscc.emrcontainers.virtual_clusters_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>virtual_cluster</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.emrcontainers.virtual_clusters (
 ContainerProvider,
 Name,
 region
)
SELECT 
'{{ ContainerProvider }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.emrcontainers.virtual_clusters (
 ContainerProvider,
 Name,
 Tags,
 SecurityConfigurationId,
 region
)
SELECT 
 '{{ ContainerProvider }}',
 '{{ Name }}',
 '{{ Tags }}',
 '{{ SecurityConfigurationId }}',
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
  - name: virtual_cluster
    props:
      - name: ContainerProvider
        value:
          Type: '{{ Type }}'
          Id: '{{ Id }}'
          Info:
            EksInfo:
              Namespace: '{{ Namespace }}'
      - name: Name
        value: '{{ Name }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: SecurityConfigurationId
        value: '{{ SecurityConfigurationId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.emrcontainers.virtual_clusters
SET PatchDocument = string('{{ {
    "Tags": tags,
    "SecurityConfigurationId": security_configuration_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.emrcontainers.virtual_clusters
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>virtual_clusters</code> resource, the following permissions are required:

### Create
```json
emr-containers:CreateVirtualCluster,
emr-containers:TagResource,
iam:CreateServiceLinkedRole
```

### Read
```json
emr-containers:DescribeVirtualCluster
```

### Delete
```json
emr-containers:DeleteVirtualCluster,
emr-containers:DescribeVirtualCluster
```

### List
```json
emr-containers:ListVirtualClusters
```

### Update
```json
emr-containers:DescribeVirtualCluster,
emr-containers:ListTagsForResource,
emr-containers:TagResource,
emr-containers:UntagResource
```
