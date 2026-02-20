---
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
  - connectcampaignsv2
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
<tr><td><b>Description</b></td><td>Definition of AWS::ConnectCampaignsV2::Campaign Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.connectcampaignsv2.campaigns" /></td></tr>
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
    "description": "Amazon Connect Campaign Arn"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Campaign name"
  },
  {
    "name": "connect_instance_id",
    "type": "string",
    "description": "Amazon Connect Instance Id"
  },
  {
    "name": "channel_subtype_config",
    "type": "object",
    "description": "The possible types of channel subtype config parameters",
    "children": [
      {
        "name": "telephony",
        "type": "object",
        "description": "Telephony Channel Subtype config",
        "children": [
          {
            "name": "capacity",
            "type": "number",
            "description": "Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns"
          },
          {
            "name": "connect_queue_id",
            "type": "string",
            "description": "The queue for the call"
          },
          {
            "name": "outbound_mode",
            "type": "object",
            "description": "Telephony Outbound Mode",
            "children": [
              {
                "name": "progressive_config",
                "type": "object",
                "description": "Progressive config"
              },
              {
                "name": "predictive_config",
                "type": "object",
                "description": "Predictive config"
              },
              {
                "name": "agentless_config",
                "type": "object",
                "description": "Agentless config"
              }
            ]
          },
          {
            "name": "default_outbound_config",
            "type": "object",
            "description": "Default Telephone Outbound config",
            "children": [
              {
                "name": "connect_contact_flow_id",
                "type": "string",
                "description": "The identifier of the contact flow for the outbound call"
              },
              {
                "name": "connect_source_phone_number",
                "type": "string",
                "description": "The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue."
              },
              {
                "name": "answer_machine_detection_config",
                "type": "object",
                "description": "The configuration used for answering machine detection during outbound calls"
              }
            ]
          }
        ]
      },
      {
        "name": "sms",
        "type": "object",
        "description": "SMS Channel Subtype config",
        "children": [
          {
            "name": "capacity",
            "type": "number",
            "description": "Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns"
          },
          {
            "name": "outbound_mode",
            "type": "object",
            "description": "SMS Outbound Mode",
            "children": [
              {
                "name": "agentless_config",
                "type": "object",
                "description": "Agentless config"
              }
            ]
          },
          {
            "name": "default_outbound_config",
            "type": "object",
            "description": "Default SMS outbound config",
            "children": [
              {
                "name": "connect_source_phone_number_arn",
                "type": "string",
                "description": "Arn"
              }
            ]
          }
        ]
      },
      {
        "name": "email",
        "type": "object",
        "description": "Email Channel Subtype config",
        "children": [
          {
            "name": "capacity",
            "type": "number",
            "description": "Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns"
          },
          {
            "name": "outbound_mode",
            "type": "object",
            "description": "Email Outbound Mode",
            "children": [
              {
                "name": "agentless_config",
                "type": "object",
                "description": "Agentless config"
              }
            ]
          },
          {
            "name": "default_outbound_config",
            "type": "object",
            "description": "Default SMS outbound config",
            "children": [
              {
                "name": "connect_source_email_address",
                "type": "string",
                "description": "Email address used for Email messages"
              },
              {
                "name": "source_email_address_display_name",
                "type": "string",
                "description": "The name of the source email address display name"
              },
              {
                "name": "wisdom_template_arn",
                "type": "string",
                "description": "Arn"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "source",
    "type": "object",
    "description": "The possible source of the campaign",
    "children": [
      {
        "name": "customer_profiles_segment_arn",
        "type": "string",
        "description": "Arn"
      },
      {
        "name": "event_trigger",
        "type": "object",
        "description": "The event trigger of the campaign"
      }
    ]
  },
  {
    "name": "connect_campaign_flow_arn",
    "type": "string",
    "description": "Arn"
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "Campaign schedule",
    "children": [
      {
        "name": "start_time",
        "type": "string",
        "description": "Timestamp with no UTC offset or timezone"
      },
      {
        "name": "refresh_frequency",
        "type": "string",
        "description": "Time duration in ISO 8601 format"
      }
    ]
  },
  {
    "name": "communication_time_config",
    "type": "object",
    "description": "Campaign communication time config",
    "children": [
      {
        "name": "local_time_zone_config",
        "type": "object",
        "description": "Local time zone config",
        "children": [
          {
            "name": "default_time_zone",
            "type": "string",
            "description": "Time Zone Id in the IANA format"
          },
          {
            "name": "local_time_zone_detection",
            "type": "array",
            "description": "Local TimeZone Detection method list"
          }
        ]
      },
      {
        "name": "telephony",
        "type": "object",
        "description": "Time window config",
        "children": [
          {
            "name": "open_hours",
            "type": "object",
            "description": "Open Hours config",
            "children": [
              {
                "name": "daily_hours",
                "type": "array",
                "description": "Daily Hours map"
              }
            ]
          },
          {
            "name": "restricted_periods",
            "type": "object",
            "description": "Restricted period config",
            "children": [
              {
                "name": "restricted_period_list",
                "type": "array",
                "description": "List of restricted period"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "communication_limits_override",
    "type": "object",
    "description": "Communication limits config",
    "children": [
      {
        "name": "all_channels_subtypes",
        "type": "object",
        "description": "Communication limits",
        "children": [
          {
            "name": "communication_limit_list",
            "type": "array",
            "description": "List of communication limit",
            "children": [
              {
                "name": "max_count_per_recipient",
                "type": "integer",
                "description": ""
              },
              {
                "name": "frequency",
                "type": "integer",
                "description": ""
              },
              {
                "name": "unit",
                "type": "string",
                "description": "The communication limit time unit"
              }
            ]
          }
        ]
      },
      {
        "name": "instance_limits_handling",
        "type": "string",
        "description": "Enumeration of Instance Limits handling in a Campaign"
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
        "description": "The key name of the tag."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag."
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html"><code>AWS::ConnectCampaignsV2::Campaign</code></a>.

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
    <td><CopyableCode code="Name, ConnectInstanceId, ChannelSubtypeConfig, region" /></td>
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
arn,
name,
connect_instance_id,
channel_subtype_config,
source,
connect_campaign_flow_arn,
schedule,
communication_time_config,
communication_limits_override,
tags
FROM awscc.connectcampaignsv2.campaigns
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>campaigns</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.connectcampaignsv2.campaigns_list_only
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
INSERT INTO awscc.connectcampaignsv2.campaigns (
 Name,
 ConnectInstanceId,
 ChannelSubtypeConfig,
 region
)
SELECT 
'{{ Name }}',
 '{{ ConnectInstanceId }}',
 '{{ ChannelSubtypeConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.connectcampaignsv2.campaigns (
 Name,
 ConnectInstanceId,
 ChannelSubtypeConfig,
 Source,
 ConnectCampaignFlowArn,
 Schedule,
 CommunicationTimeConfig,
 CommunicationLimitsOverride,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ ConnectInstanceId }}',
 '{{ ChannelSubtypeConfig }}',
 '{{ Source }}',
 '{{ ConnectCampaignFlowArn }}',
 '{{ Schedule }}',
 '{{ CommunicationTimeConfig }}',
 '{{ CommunicationLimitsOverride }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: ConnectInstanceId
        value: '{{ ConnectInstanceId }}'
      - name: ChannelSubtypeConfig
        value:
          Telephony:
            Capacity: null
            ConnectQueueId: '{{ ConnectQueueId }}'
            OutboundMode:
              ProgressiveConfig:
                BandwidthAllocation: null
              PredictiveConfig:
                BandwidthAllocation: null
              AgentlessConfig: {}
            DefaultOutboundConfig:
              ConnectContactFlowId: '{{ ConnectContactFlowId }}'
              ConnectSourcePhoneNumber: '{{ ConnectSourcePhoneNumber }}'
              AnswerMachineDetectionConfig:
                EnableAnswerMachineDetection: '{{ EnableAnswerMachineDetection }}'
                AwaitAnswerMachinePrompt: '{{ AwaitAnswerMachinePrompt }}'
          Sms:
            Capacity: null
            OutboundMode:
              AgentlessConfig: null
            DefaultOutboundConfig:
              ConnectSourcePhoneNumberArn: '{{ ConnectSourcePhoneNumberArn }}'
              WisdomTemplateArn: null
          Email:
            Capacity: null
            OutboundMode:
              AgentlessConfig: null
            DefaultOutboundConfig:
              ConnectSourceEmailAddress: '{{ ConnectSourceEmailAddress }}'
              SourceEmailAddressDisplayName: '{{ SourceEmailAddressDisplayName }}'
              WisdomTemplateArn: null
      - name: Source
        value:
          CustomerProfilesSegmentArn: null
          EventTrigger:
            CustomerProfilesDomainArn: null
      - name: ConnectCampaignFlowArn
        value: null
      - name: Schedule
        value:
          StartTime: '{{ StartTime }}'
          EndTime: null
          RefreshFrequency: '{{ RefreshFrequency }}'
      - name: CommunicationTimeConfig
        value:
          LocalTimeZoneConfig:
            DefaultTimeZone: '{{ DefaultTimeZone }}'
            LocalTimeZoneDetection:
              - '{{ LocalTimeZoneDetection[0] }}'
          Telephony:
            OpenHours:
              DailyHours:
                - Key: '{{ Key }}'
                  Value:
                    - StartTime: '{{ StartTime }}'
                      EndTime: null
            RestrictedPeriods:
              RestrictedPeriodList:
                - Name: '{{ Name }}'
                  StartDate: '{{ StartDate }}'
                  EndDate: null
          Sms: null
          Email: null
      - name: CommunicationLimitsOverride
        value:
          AllChannelsSubtypes:
            CommunicationLimitList:
              - MaxCountPerRecipient: '{{ MaxCountPerRecipient }}'
                Frequency: '{{ Frequency }}'
                Unit: '{{ Unit }}'
          InstanceLimitsHandling: '{{ InstanceLimitsHandling }}'
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
UPDATE awscc.connectcampaignsv2.campaigns
SET PatchDocument = string('{{ {
    "Name": name,
    "ChannelSubtypeConfig": channel_subtype_config,
    "Source": source,
    "ConnectCampaignFlowArn": connect_campaign_flow_arn,
    "Schedule": schedule,
    "CommunicationTimeConfig": communication_time_config,
    "CommunicationLimitsOverride": communication_limits_override,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.connectcampaignsv2.campaigns
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
connect:DescribeEmailAddress,
connect:DescribeInstance,
connect:DescribePhoneNumber,
connect:DescribeQueue,
profile:GetSegmentDefinition,
wisdom:GetMessageTemplate
```

</TabItem>
<TabItem value="read">

```json
connect-campaigns:DescribeCampaign
```

</TabItem>
<TabItem value="delete">

```json
connect-campaigns:DeleteCampaign,
connect-campaigns:DeleteCampaignChannelSubtypeConfig,
connect-campaigns:DeleteCampaignCommunicationLimits,
connect-campaigns:DeleteCampaignCommunicationTime
```

</TabItem>
<TabItem value="list">

```json
connect-campaigns:ListCampaigns
```

</TabItem>
<TabItem value="update">

```json
connect-campaigns:DeleteCampaignChannelSubtypeConfig,
connect-campaigns:DeleteCampaignCommunicationLimits,
connect-campaigns:DeleteCampaignCommunicationTime,
connect-campaigns:UpdateCampaignChannelSubtypeConfig,
connect-campaigns:UpdateCampaignCommunicationLimits,
connect-campaigns:UpdateCampaignCommunicationTime,
connect-campaigns:UpdateCampaignName,
connect-campaigns:UpdateCampaignFlowAssociation,
connect-campaigns:UpdateCampaignSchedule,
connect-campaigns:UpdateCampaignSource,
connect-campaigns:TagResource,
connect-campaigns:UntagResource,
connect-campaigns:DescribeCampaign,
connect:DescribeContactFlow,
connect:DescribeEmailAddress,
connect:DescribePhoneNumber,
connect:DescribeQueue,
profile:GetSegmentDefinition,
wisdom:GetMessageTemplate
```

</TabItem>
</Tabs>