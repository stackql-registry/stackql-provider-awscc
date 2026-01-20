---
title: packaging_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - packaging_groups
  - mediapackage
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

Creates, updates, deletes or gets a <code>packaging_group</code> resource or lists <code>packaging_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>packaging_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::MediaPackage::PackagingGroup</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackage.packaging_groups" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the PackagingGroup."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The ARN of the PackagingGroup."
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": "The fully qualified domain name for Assets in the PackagingGroup."
  },
  {
    "name": "authorization",
    "type": "object",
    "description": "CDN Authorization",
    "children": [
      {
        "name": "cdn_identifier_secret",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization."
      },
      {
        "name": "secrets_role_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource",
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
    "name": "egress_access_logs",
    "type": "object",
    "description": "The configuration parameters for egress access logging.",
    "children": [
      {
        "name": "log_group_name",
        "type": "string",
        "description": "Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html"><code>AWS::MediaPackage::PackagingGroup</code></a>.

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
    <td><CopyableCode code="Id, region" /></td>
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

Gets all properties from an individual <code>packaging_group</code>.
```sql
SELECT
region,
id,
arn,
domain_name,
authorization,
tags,
egress_access_logs
FROM awscc.mediapackage.packaging_groups
WHERE region = 'us-east-1' AND data__Identifier = '<Id>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>packaging_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackage.packaging_groups (
 Id,
 region
)
SELECT 
'{{ Id }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackage.packaging_groups (
 Id,
 Authorization,
 Tags,
 EgressAccessLogs,
 region
)
SELECT 
 '{{ Id }}',
 '{{ Authorization }}',
 '{{ Tags }}',
 '{{ EgressAccessLogs }}',
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
  - name: packaging_group
    props:
      - name: Id
        value: '{{ Id }}'
      - name: Authorization
        value:
          CdnIdentifierSecret: '{{ CdnIdentifierSecret }}'
          SecretsRoleArn: '{{ SecretsRoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: EgressAccessLogs
        value:
          LogGroupName: '{{ LogGroupName }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediapackage.packaging_groups
WHERE data__Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>packaging_groups</code> resource, the following permissions are required:

### Create
```json
mediapackage-vod:CreatePackagingGroup,
mediapackage-vod:DescribePackagingGroup,
mediapackage-vod:TagResource,
mediapackage-vod:ConfigureLogs,
iam:PassRole,
iam:CreateServiceLinkedRole
```

### Read
```json
mediapackage-vod:DescribePackagingGroup
```

### Update
```json
mediapackage-vod:DescribePackagingGroup,
mediapackage-vod:UpdatePackagingGroup,
mediapackage-vod:ConfigureLogs,
mediapackage-vod:TagResource,
iam:PassRole,
iam:CreateServiceLinkedRole
```

### List
```json
mediapackage-vod:ListPackagingGroups
```

### Delete
```json
mediapackage-vod:DescribePackagingGroup,
mediapackage-vod:DeletePackagingGroup
```
