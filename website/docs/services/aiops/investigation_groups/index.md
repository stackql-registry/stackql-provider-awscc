---
title: investigation_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - investigation_groups
  - aiops
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

Creates, updates, deletes or gets an <code>investigation_group</code> resource or lists <code>investigation_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>investigation_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::AIOps::InvestigationGroup Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.aiops.investigation_groups" /></td></tr>
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
    "name": "role_arn",
    "type": "string",
    "description": "The Investigation Role's ARN."
  },
  {
    "name": "name",
    "type": "string",
    "description": "User friendly name for resources."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp value."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The Investigation Group's ARN."
  },
  {
    "name": "retention_in_days",
    "type": "integer",
    "description": "The number of days to retain the investigation group"
  },
  {
    "name": "encryption_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "encryption_configuration_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "investigation_group_policy",
    "type": "string",
    "description": "Investigation Group policy"
  },
  {
    "name": "is_cloud_trail_event_history_enabled",
    "type": "boolean",
    "description": "Flag to enable cloud trail history"
  },
  {
    "name": "tag_key_boundaries",
    "type": "array",
    "description": ""
  },
  {
    "name": "chatbot_notification_channels",
    "type": "array",
    "description": "An array of key-value pairs of notification channels to apply to this resource.",
    "children": [
      {
        "name": "sns_topic_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "chat_configuration_arns",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "cross_account_configurations",
    "type": "array",
    "description": "An array of cross account configurations."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
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
    "description": "The Investigation Group's ARN."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aiops-investigationgroup.html"><code>AWS::AIOps::InvestigationGroup</code></a>.

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
    <td><code>investigation_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>investigation_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>investigation_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>investigation_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>investigation_groups</code></td>
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

Gets all properties from an individual <code>investigation_group</code>.
```sql
SELECT
region,
role_arn,
name,
created_by,
created_at,
last_modified_by,
last_modified_at,
arn,
retention_in_days,
encryption_config,
investigation_group_policy,
is_cloud_trail_event_history_enabled,
tag_key_boundaries,
chatbot_notification_channels,
cross_account_configurations,
tags
FROM awscc.aiops.investigation_groups
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>investigation_groups</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.aiops.investigation_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>investigation_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.aiops.investigation_groups (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.aiops.investigation_groups (
 RoleArn,
 Name,
 RetentionInDays,
 EncryptionConfig,
 InvestigationGroupPolicy,
 IsCloudTrailEventHistoryEnabled,
 TagKeyBoundaries,
 ChatbotNotificationChannels,
 CrossAccountConfigurations,
 Tags,
 region
)
SELECT 
 '{{ RoleArn }}',
 '{{ Name }}',
 '{{ RetentionInDays }}',
 '{{ EncryptionConfig }}',
 '{{ InvestigationGroupPolicy }}',
 '{{ IsCloudTrailEventHistoryEnabled }}',
 '{{ TagKeyBoundaries }}',
 '{{ ChatbotNotificationChannels }}',
 '{{ CrossAccountConfigurations }}',
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
  - name: investigation_group
    props:
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: RetentionInDays
        value: '{{ RetentionInDays }}'
      - name: EncryptionConfig
        value:
          EncryptionConfigurationType: '{{ EncryptionConfigurationType }}'
          KmsKeyId: '{{ KmsKeyId }}'
      - name: InvestigationGroupPolicy
        value: '{{ InvestigationGroupPolicy }}'
      - name: IsCloudTrailEventHistoryEnabled
        value: '{{ IsCloudTrailEventHistoryEnabled }}'
      - name: TagKeyBoundaries
        value:
          - '{{ TagKeyBoundaries[0] }}'
      - name: ChatbotNotificationChannels
        value:
          - SNSTopicArn: '{{ SNSTopicArn }}'
            ChatConfigurationArns:
              - '{{ ChatConfigurationArns[0] }}'
      - name: CrossAccountConfigurations
        value:
          - SourceRoleArn: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>investigation_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.aiops.investigation_groups
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "EncryptionConfig": encryption_config,
    "InvestigationGroupPolicy": investigation_group_policy,
    "IsCloudTrailEventHistoryEnabled": is_cloud_trail_event_history_enabled,
    "TagKeyBoundaries": tag_key_boundaries,
    "ChatbotNotificationChannels": chatbot_notification_channels,
    "CrossAccountConfigurations": cross_account_configurations,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.aiops.investigation_groups
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>investigation_groups</code> resource, the following permissions are required:

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
aiops:CreateInvestigationGroup,
aiops:GetInvestigationGroup,
aiops:GetInvestigationGroupPolicy,
aiops:PutInvestigationGroupPolicy,
aiops:TagResource,
aiops:ListTagsForResource,
iam:PassRole,
kms:DescribeKey,
kms:ListAliases,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="read">

```json
aiops:GetInvestigationGroup,
aiops:GetInvestigationGroupPolicy,
aiops:ListTagsForResource,
kms:DescribeKey,
kms:ListAliases,
kms:Decrypt,
kms:Encrypt
```

</TabItem>
<TabItem value="update">

```json
aiops:GetInvestigationGroup,
aiops:UpdateInvestigationGroup,
aiops:GetInvestigationGroupPolicy,
aiops:PutInvestigationGroupPolicy,
aiops:DeleteInvestigationGroupPolicy,
aiops:TagResource,
aiops:UntagResource,
aiops:ListTagsForResource,
iam:PassRole,
kms:DescribeKey,
kms:ListAliases,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="delete">

```json
aiops:DeleteInvestigationGroup,
aiops:GetInvestigationGroup,
aiops:DeleteInvestigationGroupPolicy,
aiops:GetInvestigationGroupPolicy,
aiops:UntagResource,
kms:DescribeKey,
kms:ListAliases
```

</TabItem>
<TabItem value="list">

```json
aiops:ListInvestigationGroups,
kms:DescribeKey,
kms:ListAliases
```

</TabItem>
</Tabs>