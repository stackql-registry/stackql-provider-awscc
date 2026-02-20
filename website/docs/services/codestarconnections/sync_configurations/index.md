---
title: sync_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - sync_configurations
  - codestarconnections
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

Creates, updates, deletes or gets a <code>sync_configuration</code> resource or lists <code>sync_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>sync_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Schema for AWS::CodeStarConnections::SyncConfiguration resource which is used to enables an AWS resource to be synchronized from a source-provider.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.codestarconnections.sync_configurations" /></td></tr>
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
    "name": "owner_id",
    "type": "string",
    "description": "the ID of the entity that owns the repository."
  },
  {
    "name": "resource_name",
    "type": "string",
    "description": "The name of the resource that is being synchronized to the repository."
  },
  {
    "name": "repository_name",
    "type": "string",
    "description": "The name of the repository that is being synced to."
  },
  {
    "name": "provider_type",
    "type": "string",
    "description": "The name of the external provider where your third-party code repository is configured."
  },
  {
    "name": "branch",
    "type": "string",
    "description": "The name of the branch of the repository from which resources are to be synchronized,"
  },
  {
    "name": "config_file",
    "type": "string",
    "description": "The source provider repository path of the sync configuration file of the respective SyncType."
  },
  {
    "name": "sync_type",
    "type": "string",
    "description": "The type of resource synchronization service that is to be configured, for example, CFN&#95;STACK&#95;SYNC."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository."
  },
  {
    "name": "publish_deployment_status",
    "type": "string",
    "description": "Whether to enable or disable publishing of deployment status to source providers."
  },
  {
    "name": "trigger_resource_update_on",
    "type": "string",
    "description": "When to trigger Git sync to begin the stack update."
  },
  {
    "name": "repository_link_id",
    "type": "string",
    "description": "A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with."
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
    "name": "resource_name",
    "type": "string",
    "description": "The name of the resource that is being synchronized to the repository."
  },
  {
    "name": "sync_type",
    "type": "string",
    "description": "The type of resource synchronization service that is to be configured, for example, CFN&#95;STACK&#95;SYNC."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html"><code>AWS::CodeStarConnections::SyncConfiguration</code></a>.

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
    <td><code>sync_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Branch, ConfigFile, RepositoryLinkId, ResourceName, SyncType, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>sync_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>sync_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>sync_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>sync_configurations</code></td>
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

Gets all properties from an individual <code>sync_configuration</code>.
```sql
SELECT
region,
owner_id,
resource_name,
repository_name,
provider_type,
branch,
config_file,
sync_type,
role_arn,
publish_deployment_status,
trigger_resource_update_on,
repository_link_id
FROM awscc.codestarconnections.sync_configurations
WHERE region = 'us-east-1' AND Identifier = '<ResourceName>|<SyncType>';
```
</TabItem>
<TabItem value="list">

Lists all <code>sync_configurations</code> in a region.
```sql
SELECT
region,
resource_name,
sync_type
FROM awscc.codestarconnections.sync_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>sync_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.codestarconnections.sync_configurations (
 ResourceName,
 Branch,
 ConfigFile,
 SyncType,
 RoleArn,
 RepositoryLinkId,
 region
)
SELECT 
'{{ ResourceName }}',
 '{{ Branch }}',
 '{{ ConfigFile }}',
 '{{ SyncType }}',
 '{{ RoleArn }}',
 '{{ RepositoryLinkId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.codestarconnections.sync_configurations (
 ResourceName,
 Branch,
 ConfigFile,
 SyncType,
 RoleArn,
 PublishDeploymentStatus,
 TriggerResourceUpdateOn,
 RepositoryLinkId,
 region
)
SELECT 
 '{{ ResourceName }}',
 '{{ Branch }}',
 '{{ ConfigFile }}',
 '{{ SyncType }}',
 '{{ RoleArn }}',
 '{{ PublishDeploymentStatus }}',
 '{{ TriggerResourceUpdateOn }}',
 '{{ RepositoryLinkId }}',
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
  - name: sync_configuration
    props:
      - name: ResourceName
        value: '{{ ResourceName }}'
      - name: Branch
        value: '{{ Branch }}'
      - name: ConfigFile
        value: '{{ ConfigFile }}'
      - name: SyncType
        value: '{{ SyncType }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: PublishDeploymentStatus
        value: '{{ PublishDeploymentStatus }}'
      - name: TriggerResourceUpdateOn
        value: '{{ TriggerResourceUpdateOn }}'
      - name: RepositoryLinkId
        value: '{{ RepositoryLinkId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>sync_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.codestarconnections.sync_configurations
SET PatchDocument = string('{{ {
    "Branch": branch,
    "ConfigFile": config_file,
    "RoleArn": role_arn,
    "PublishDeploymentStatus": publish_deployment_status,
    "TriggerResourceUpdateOn": trigger_resource_update_on,
    "RepositoryLinkId": repository_link_id
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ResourceName>|<SyncType>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.codestarconnections.sync_configurations
WHERE Identifier = '<ResourceName|SyncType>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>sync_configurations</code> resource, the following permissions are required:

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
codestar-connections:CreateSyncConfiguration,
codestar-connections:PassRepository,
iam:PassRole
```

</TabItem>
<TabItem value="read">

```json
codestar-connections:GetSyncConfiguration
```

</TabItem>
<TabItem value="update">

```json
codestar-connections:UpdateSyncConfiguration,
codestar-connections:PassRepository,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
codestar-connections:DeleteSyncConfiguration,
codestar-connections:GetSyncConfiguration
```

</TabItem>
<TabItem value="list">

```json
codestar-connections:ListSyncConfigurations,
codestar-connections:ListRepositoryLinks
```

</TabItem>
</Tabs>