---
title: origin_endpoint_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoint_policies
  - mediapackagev2
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

Creates, updates, deletes or gets an <code>origin_endpoint_policy</code> resource or lists <code>origin_endpoint_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>origin_endpoint_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><p>Represents a resource policy that allows or denies access to an origin endpoint.</p></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.mediapackagev2.origin_endpoint_policies" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "cdn_auth_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "cdn_identifier_secret_arns",
        "type": "array",
        "description": ""
      },
      {
        "name": "secrets_role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "channel_group_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "channel_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "origin_endpoint_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "policy",
    "type": "object",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html"><code>AWS::MediaPackageV2::OriginEndpointPolicy</code></a>.

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
    <td><CopyableCode code="ChannelGroupName, ChannelName, OriginEndpointName, Policy, region" /></td>
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
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>origin_endpoint_policy</code>.
```sql
SELECT
region,
cdn_auth_configuration,
channel_group_name,
channel_name,
origin_endpoint_name,
policy
FROM awscc.mediapackagev2.origin_endpoint_policies
WHERE region = 'us-east-1' AND data__Identifier = '<ChannelGroupName>|<ChannelName>|<OriginEndpointName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>origin_endpoint_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.mediapackagev2.origin_endpoint_policies (
 ChannelGroupName,
 ChannelName,
 OriginEndpointName,
 Policy,
 region
)
SELECT 
'{{ ChannelGroupName }}',
 '{{ ChannelName }}',
 '{{ OriginEndpointName }}',
 '{{ Policy }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.mediapackagev2.origin_endpoint_policies (
 CdnAuthConfiguration,
 ChannelGroupName,
 ChannelName,
 OriginEndpointName,
 Policy,
 region
)
SELECT 
 '{{ CdnAuthConfiguration }}',
 '{{ ChannelGroupName }}',
 '{{ ChannelName }}',
 '{{ OriginEndpointName }}',
 '{{ Policy }}',
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
  - name: origin_endpoint_policy
    props:
      - name: CdnAuthConfiguration
        value:
          CdnIdentifierSecretArns:
            - '{{ CdnIdentifierSecretArns[0] }}'
          SecretsRoleArn: '{{ SecretsRoleArn }}'
      - name: ChannelGroupName
        value: '{{ ChannelGroupName }}'
      - name: ChannelName
        value: '{{ ChannelName }}'
      - name: OriginEndpointName
        value: '{{ OriginEndpointName }}'
      - name: Policy
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.mediapackagev2.origin_endpoint_policies
SET data__PatchDocument = string('{{ {
    "CdnAuthConfiguration": cdn_auth_configuration,
    "Policy": policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ChannelGroupName>|<ChannelName>|<OriginEndpointName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.mediapackagev2.origin_endpoint_policies
WHERE data__Identifier = '<ChannelGroupName|ChannelName|OriginEndpointName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>origin_endpoint_policies</code> resource, the following permissions are required:

### Create
```json
mediapackagev2:GetOriginEndpointPolicy,
mediapackagev2:PutOriginEndpointPolicy,
iam:PassRole
```

### Read
```json
mediapackagev2:GetOriginEndpointPolicy
```

### Update
```json
mediapackagev2:GetOriginEndpointPolicy,
mediapackagev2:PutOriginEndpointPolicy,
iam:PassRole
```

### Delete
```json
mediapackagev2:GetOriginEndpointPolicy,
mediapackagev2:DeleteOriginEndpointPolicy
```
