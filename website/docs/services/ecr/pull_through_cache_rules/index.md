---
title: pull_through_cache_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_through_cache_rules
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
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>pull_through_cache_rule</code> resource or lists <code>pull_through_cache_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>pull_through_cache_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::ECR::PullThroughCacheRule&#96;&#96; resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ecr.pull_through_cache_rules" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "ecr_repository_prefix",
    "type": "string",
    "description": "The Amazon ECR repository prefix associated with the pull through cache rule."
  },
  {
    "name": "upstream_registry_url",
    "type": "string",
    "description": "The upstream registry URL associated with the pull through cache rule."
  },
  {
    "name": "credential_arn",
    "type": "string",
    "description": "The ARN of the Secrets Manager secret associated with the pull through cache rule."
  },
  {
    "name": "upstream_registry",
    "type": "string",
    "description": "The name of the upstream source registry associated with the pull through cache rule."
  },
  {
    "name": "custom_role_arn",
    "type": "string",
    "description": "The ARN of the IAM role associated with the pull through cache rule."
  },
  {
    "name": "upstream_repository_prefix",
    "type": "string",
    "description": "The upstream repository prefix associated with the pull through cache rule."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html"><code>AWS::ECR::PullThroughCacheRule</code></a>.

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
    <td><CopyableCode code="region" /></td>
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

Gets all properties from an individual <code>pull_through_cache_rule</code>.
```sql
SELECT
region,
ecr_repository_prefix,
upstream_registry_url,
credential_arn,
upstream_registry,
custom_role_arn,
upstream_repository_prefix
FROM awscc.ecr.pull_through_cache_rules
WHERE region = 'us-east-1' AND data__Identifier = '<EcrRepositoryPrefix>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>pull_through_cache_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ecr.pull_through_cache_rules (
 EcrRepositoryPrefix,
 UpstreamRegistryUrl,
 CredentialArn,
 UpstreamRegistry,
 CustomRoleArn,
 UpstreamRepositoryPrefix,
 region
)
SELECT 
'{{ EcrRepositoryPrefix }}',
 '{{ UpstreamRegistryUrl }}',
 '{{ CredentialArn }}',
 '{{ UpstreamRegistry }}',
 '{{ CustomRoleArn }}',
 '{{ UpstreamRepositoryPrefix }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ecr.pull_through_cache_rules (
 EcrRepositoryPrefix,
 UpstreamRegistryUrl,
 CredentialArn,
 UpstreamRegistry,
 CustomRoleArn,
 UpstreamRepositoryPrefix,
 region
)
SELECT 
 '{{ EcrRepositoryPrefix }}',
 '{{ UpstreamRegistryUrl }}',
 '{{ CredentialArn }}',
 '{{ UpstreamRegistry }}',
 '{{ CustomRoleArn }}',
 '{{ UpstreamRepositoryPrefix }}',
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
  - name: pull_through_cache_rule
    props:
      - name: EcrRepositoryPrefix
        value: '{{ EcrRepositoryPrefix }}'
      - name: UpstreamRegistryUrl
        value: '{{ UpstreamRegistryUrl }}'
      - name: CredentialArn
        value: '{{ CredentialArn }}'
      - name: UpstreamRegistry
        value: '{{ UpstreamRegistry }}'
      - name: CustomRoleArn
        value: '{{ CustomRoleArn }}'
      - name: UpstreamRepositoryPrefix
        value: '{{ UpstreamRepositoryPrefix }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ecr.pull_through_cache_rules
WHERE data__Identifier = '<EcrRepositoryPrefix>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>pull_through_cache_rules</code> resource, the following permissions are required:

### Create
```json
ecr:DescribePullThroughCacheRules,
ecr:CreatePullThroughCacheRule,
ecr:DeletePullThroughCacheRule,
iam:CreateServiceLinkedRole,
secretsmanager:GetSecretValue,
iam:PassRole
```

### Read
```json
ecr:DescribePullThroughCacheRules
```

### Update
```json
ecr:DescribePullThroughCacheRules,
ecr:CreatePullThroughCacheRule,
ecr:DeletePullThroughCacheRule,
iam:CreateServiceLinkedRole,
secretsmanager:GetSecretValue,
iam:PassRole
```

### Delete
```json
ecr:DescribePullThroughCacheRules,
ecr:DeletePullThroughCacheRule
```

### List
```json
ecr:DescribePullThroughCacheRules
```
