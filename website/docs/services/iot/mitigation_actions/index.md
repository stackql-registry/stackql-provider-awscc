---
title: mitigation_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - mitigation_actions
  - iot
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

Creates, updates, deletes or gets a <code>mitigation_action</code> resource or lists <code>mitigation_actions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mitigation_actions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Mitigation actions can be used to take actions to mitigate issues that were found in an Audit finding or Detect violation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iot.mitigation_actions" /></td></tr>
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
    "name": "action_name",
    "type": "string",
    "description": "A unique identifier for the mitigation action."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": ""
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
    "name": "action_params",
    "type": "object",
    "description": "The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).",
    "children": [
      {
        "name": "add_things_to_thing_group_params",
        "type": "object",
        "description": "Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.",
        "children": [
          {
            "name": "override_dynamic_groups",
            "type": "boolean",
            "description": "Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups."
          },
          {
            "name": "thing_group_names",
            "type": "array",
            "description": "The list of groups to which you want to add the things that triggered the mitigation action."
          }
        ]
      },
      {
        "name": "enable_io_tlogging_params",
        "type": "object",
        "description": "Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.",
        "children": [
          {
            "name": "log_level",
            "type": "string",
            "description": "Specifies which types of information are logged."
          },
          {
            "name": "role_arn_for_logging",
            "type": "string",
            "description": "The ARN of the IAM role used for logging."
          }
        ]
      },
      {
        "name": "publish_finding_to_sns_params",
        "type": "object",
        "description": "Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.",
        "children": [
          {
            "name": "topic_arn",
            "type": "string",
            "description": "The ARN of the topic to which you want to publish the findings."
          }
        ]
      },
      {
        "name": "replace_default_policy_version_params",
        "type": "object",
        "description": "Parameters to define a mitigation action that adds a blank policy to restrict permissions.",
        "children": [
          {
            "name": "template_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "update_ca_certificate_params",
        "type": "object",
        "description": "Parameters to define a mitigation action that changes the state of the CA certificate to inactive.",
        "children": [
          {
            "name": "action",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "update_device_certificate_params",
        "type": "object",
        "description": "Parameters to define a mitigation action that changes the state of the device certificate to inactive.",
        "children": [
          {
            "name": "action",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "mitigation_action_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "mitigation_action_id",
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
    "name": "action_name",
    "type": "string",
    "description": "A unique identifier for the mitigation action."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html"><code>AWS::IoT::MitigationAction</code></a>.

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
    <td><code>mitigation_actions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RoleArn, ActionParams, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mitigation_actions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mitigation_actions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mitigation_actions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mitigation_actions</code></td>
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

Gets all properties from an individual <code>mitigation_action</code>.
```sql
SELECT
region,
action_name,
role_arn,
tags,
action_params,
mitigation_action_arn,
mitigation_action_id
FROM awscc.iot.mitigation_actions
WHERE region = 'us-east-1' AND Identifier = '<ActionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>mitigation_actions</code> in a region.
```sql
SELECT
region,
action_name
FROM awscc.iot.mitigation_actions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mitigation_action</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iot.mitigation_actions (
 RoleArn,
 ActionParams,
 region
)
SELECT 
'{{ RoleArn }}',
 '{{ ActionParams }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iot.mitigation_actions (
 ActionName,
 RoleArn,
 Tags,
 ActionParams,
 region
)
SELECT 
 '{{ ActionName }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ ActionParams }}',
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
  - name: mitigation_action
    props:
      - name: ActionName
        value: '{{ ActionName }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: ActionParams
        value:
          AddThingsToThingGroupParams:
            OverrideDynamicGroups: '{{ OverrideDynamicGroups }}'
            ThingGroupNames:
              - '{{ ThingGroupNames[0] }}'
          EnableIoTLoggingParams:
            LogLevel: '{{ LogLevel }}'
            RoleArnForLogging: '{{ RoleArnForLogging }}'
          PublishFindingToSnsParams:
            TopicArn: '{{ TopicArn }}'
          ReplaceDefaultPolicyVersionParams:
            TemplateName: '{{ TemplateName }}'
          UpdateCACertificateParams:
            Action: '{{ Action }}'
          UpdateDeviceCertificateParams:
            Action: '{{ Action }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iot.mitigation_actions
SET PatchDocument = string('{{ {
    "RoleArn": role_arn,
    "Tags": tags,
    "ActionParams": action_params
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ActionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iot.mitigation_actions
WHERE Identifier = '<ActionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mitigation_actions</code> resource, the following permissions are required:

### Create
```json
iot:CreateMitigationAction,
iot:DescribeMitigationAction,
iot:TagResource,
iam:PassRole
```

### Read
```json
iot:DescribeMitigationAction,
iot:ListTagsForResource
```

### Update
```json
iot:UpdateMitigationAction,
iot:ListTagsForResource,
iot:UntagResource,
iot:TagResource,
iam:PassRole
```

### Delete
```json
iot:DescribeMitigationAction,
iot:DeleteMitigationAction
```

### List
```json
iot:ListMitigationActions
```
