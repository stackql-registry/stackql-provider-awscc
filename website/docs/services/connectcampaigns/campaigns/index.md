---
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
  - connectcampaigns
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

Creates, updates, deletes or gets a <code>campaign</code> resource or lists <code>campaigns</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>campaigns</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::ConnectCampaigns::Campaign Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connectcampaigns.campaigns" /></td></tr>
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
    "name": "connect_instance_arn",
    "type": "string",
    "description": "Amazon Connect Instance Arn"
  },
  {
    "name": "dialer_config",
    "type": "object",
    "description": "The possible types of dialer config parameters",
    "children": [
      {
        "name": "progressive_dialer_config",
        "type": "object",
        "description": "Progressive Dialer config",
        "children": [
          {
            "name": "bandwidth_allocation",
            "type": "number",
            "description": "The bandwidth allocation of a queue resource."
          },
          {
            "name": "dialing_capacity",
            "type": "number",
            "description": "Allocates dialing capacity for this campaign between multiple active campaigns."
          }
        ]
      },
      {
        "name": "predictive_dialer_config",
        "type": "object",
        "description": "Predictive Dialer config",
        "children": [
          {
            "name": "bandwidth_allocation",
            "type": "number",
            "description": "The bandwidth allocation of a queue resource."
          },
          {
            "name": "dialing_capacity",
            "type": "number",
            "description": "Allocates dialing capacity for this campaign between multiple active campaigns."
          }
        ]
      },
      {
        "name": "agentless_dialer_config",
        "type": "object",
        "description": "Agentless Dialer config",
        "children": [
          {
            "name": "dialing_capacity",
            "type": "number",
            "description": "Allocates dialing capacity for this campaign between multiple active campaigns."
          }
        ]
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Amazon Connect Campaign Arn"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Amazon Connect Campaign Name"
  },
  {
    "name": "outbound_call_config",
    "type": "object",
    "description": "The configuration used for outbound calls.",
    "children": [
      {
        "name": "connect_contact_flow_arn",
        "type": "string",
        "description": "The identifier of the contact flow for the outbound call."
      },
      {
        "name": "connect_source_phone_number",
        "type": "string",
        "description": "The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue."
      },
      {
        "name": "connect_queue_arn",
        "type": "string",
        "description": "The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number."
      },
      {
        "name": "answer_machine_detection_config",
        "type": "object",
        "description": "The configuration used for answering machine detection during outbound calls",
        "children": [
          {
            "name": "enable_answer_machine_detection",
            "type": "boolean",
            "description": "Flag to decided whether outbound calls should have answering machine detection enabled or not"
          },
          {
            "name": "await_answer_machine_prompt",
            "type": "boolean",
            "description": "Enables detection of prompts (e.g., beep after after a voicemail greeting)"
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "One or more tags.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that's 1 to 256 characters in length."
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
    "description": "Amazon Connect Campaign Arn"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html"><code>AWS::ConnectCampaigns::Campaign</code></a>.

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
    <td><code>campaigns</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConnectInstanceArn, DialerConfig, Name, OutboundCallConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>campaigns</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>campaigns</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>campaigns_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>campaigns</code></td>
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

Gets all properties from an individual <code>campaign</code>.
```sql
SELECT
region,
connect_instance_arn,
dialer_config,
arn,
name,
outbound_call_config,
tags
FROM awscc.connectcampaigns.campaigns
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>campaigns</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.connectcampaigns.campaigns_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>campaign</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.connectcampaigns.campaigns (
 ConnectInstanceArn,
 DialerConfig,
 Name,
 OutboundCallConfig,
 region
)
SELECT 
'{{ ConnectInstanceArn }}',
 '{{ DialerConfig }}',
 '{{ Name }}',
 '{{ OutboundCallConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connectcampaigns.campaigns (
 ConnectInstanceArn,
 DialerConfig,
 Name,
 OutboundCallConfig,
 Tags,
 region
)
SELECT 
 '{{ ConnectInstanceArn }}',
 '{{ DialerConfig }}',
 '{{ Name }}',
 '{{ OutboundCallConfig }}',
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
  - name: campaign
    props:
      - name: ConnectInstanceArn
        value: '{{ ConnectInstanceArn }}'
      - name: DialerConfig
        value:
          ProgressiveDialerConfig:
            BandwidthAllocation: null
            DialingCapacity: null
          PredictiveDialerConfig:
            BandwidthAllocation: null
            DialingCapacity: null
          AgentlessDialerConfig:
            DialingCapacity: null
      - name: Name
        value: '{{ Name }}'
      - name: OutboundCallConfig
        value:
          ConnectContactFlowArn: '{{ ConnectContactFlowArn }}'
          ConnectSourcePhoneNumber: '{{ ConnectSourcePhoneNumber }}'
          ConnectQueueArn: '{{ ConnectQueueArn }}'
          AnswerMachineDetectionConfig:
            EnableAnswerMachineDetection: '{{ EnableAnswerMachineDetection }}'
            AwaitAnswerMachinePrompt: '{{ AwaitAnswerMachinePrompt }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>campaign</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.connectcampaigns.campaigns
SET PatchDocument = string('{{ {
    "DialerConfig": dialer_config,
    "Name": name,
    "OutboundCallConfig": outbound_call_config,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connectcampaigns.campaigns
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>campaigns</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
connect-campaigns:CreateCampaign,
connect-campaigns:DescribeCampaign,
connect-campaigns:TagResource,
connect:DescribeContactFlow,
connect:DescribeInstance,
connect:DescribeQueue
```

</TabItem>
<TabItem value="read">

```json
connect-campaigns:DescribeCampaign
```

</TabItem>
<TabItem value="delete">

```json
connect-campaigns:DeleteCampaign
```

</TabItem>
<TabItem value="list">

```json
connect-campaigns:ListCampaigns
```

</TabItem>
<TabItem value="update">

```json
connect-campaigns:UpdateCampaignDialerConfig,
connect-campaigns:UpdateCampaignName,
connect-campaigns:UpdateCampaignOutboundCallConfig,
connect-campaigns:TagResource,
connect-campaigns:UntagResource,
connect-campaigns:DescribeCampaign
```

</TabItem>
</Tabs>