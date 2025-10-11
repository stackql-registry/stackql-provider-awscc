---
title: replication_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configurations
  - ecr
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

Creates, updates, deletes or gets a <code>replication_configuration</code> resource or lists <code>replication_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>replication_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::ECR::ReplicationConfiguration</code> resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see &#91;Using Service-Linked Roles for Amazon ECR&#93;(https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the ASTERIX;Amazon Elastic Container Registry User GuideASTERIX;.<br />When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see <code>AWS::ECR::RegistryPolicy</code>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.replication_configurations" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="replication_configuration" /></td><td><code>object</code></td><td>The replication configuration for a registry.</td></tr>
<tr><td><CopyableCode code="registry_id" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html"><code>AWS::ECR::ReplicationConfiguration</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ReplicationConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Gets all <code>replication_configurations</code> in a region.
```sql
SELECT
region,
replication_configuration,
registry_id
FROM awscc.ecr.replication_configurations
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>replication_configuration</code>.
```sql
SELECT
region,
replication_configuration,
registry_id
FROM awscc.ecr.replication_configurations
WHERE region = 'us-east-1' AND data__Identifier = '<RegistryId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>replication_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.replication_configurations (
 ReplicationConfiguration,
 region
)
SELECT 
'{{ ReplicationConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.replication_configurations (
 ReplicationConfiguration,
 region
)
SELECT 
 '{{ ReplicationConfiguration }}',
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
  - name: replication_configuration
    props:
      - name: ReplicationConfiguration
        value:
          ReplicationConfiguration: null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.replication_configurations
WHERE data__Identifier = '<RegistryId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>replication_configurations</code> resource, the following permissions are required:

### Create
```json
ecr:DescribeRegistry,
ecr:PutReplicationConfiguration,
iam:CreateServiceLinkedRole
```

### Read
```json
ecr:DescribeRegistry
```

### Update
```json
ecr:DescribeRegistry,
ecr:PutReplicationConfiguration,
iam:CreateServiceLinkedRole
```

### Delete
```json
ecr:DescribeRegistry,
ecr:PutReplicationConfiguration,
iam:CreateServiceLinkedRole
```

### List
```json
ecr:DescribeRegistry
```
