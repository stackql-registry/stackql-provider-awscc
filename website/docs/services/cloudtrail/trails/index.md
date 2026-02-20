---
title: trails
hide_title: false
hide_table_of_contents: false
keywords:
  - trails
  - cloudtrail
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

Creates, updates, deletes or gets a <code>trail</code> resource or lists <code>trails</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>trails</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective of the region in which they were created.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudtrail.trails" /></td></tr>
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
    "name": "include_global_service_events",
    "type": "boolean",
    "description": "Specifies whether the trail is publishing events from global services such as IAM to the log files."
  },
  {
    "name": "event_selectors",
    "type": "array",
    "description": "Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.",
    "children": [
      {
        "name": "include_management_events",
        "type": "boolean",
        "description": "Specify if you want your event selector to include management events for your trail."
      },
      {
        "name": "read_write_type",
        "type": "string",
        "description": "Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation."
      },
      {
        "name": "exclude_management_event_sources",
        "type": "array",
        "description": "An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing \"kms.amazonaws.com\". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail."
      },
      {
        "name": "data_resources",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources."
          },
          {
            "name": "values",
            "type": "array",
            "description": "An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects."
          }
        ]
      }
    ]
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier."
  },
  {
    "name": "cloud_watch_logs_role_arn",
    "type": "string",
    "description": "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group."
  },
  {
    "name": "s3_key_prefix",
    "type": "string",
    "description": "Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters."
  },
  {
    "name": "advanced_event_selectors",
    "type": "array",
    "description": "The advanced event selectors that were used to select events for the data store.",
    "children": [
      {
        "name": "field_selectors",
        "type": "array",
        "description": "Contains all selector statements in an advanced event selector.",
        "children": [
          {
            "name": "field",
            "type": "string",
            "description": "A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN."
          },
          {
            "name": "equals",
            "type": "array",
            "description": "An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields."
          },
          {
            "name": "not_starts_with",
            "type": "array",
            "description": "An operator that excludes events that match the first few characters of the event record field specified as the value of Field."
          },
          {
            "name": "not_ends_with",
            "type": "array",
            "description": "An operator that excludes events that match the last few characters of the event record field specified as the value of Field."
          },
          {
            "name": "starts_with",
            "type": "array",
            "description": "An operator that includes events that match the first few characters of the event record field specified as the value of Field."
          },
          {
            "name": "ends_with",
            "type": "array",
            "description": "An operator that includes events that match the last few characters of the event record field specified as the value of Field."
          },
          {
            "name": "not_equals",
            "type": "array",
            "description": "An operator that excludes events that match the exact value of the event record field specified as the value of Field."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "An optional, descriptive name for an advanced event selector, such as \"Log data events for only two S3 buckets\"."
      }
    ]
  },
  {
    "name": "trail_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "is_organization_trail",
    "type": "boolean",
    "description": "Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations."
  },
  {
    "name": "insight_selectors",
    "type": "array",
    "description": "Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.",
    "children": [
      {
        "name": "insight_type",
        "type": "string",
        "description": "The type of insight to log on a trail."
      }
    ]
  },
  {
    "name": "cloud_watch_logs_log_group_arn",
    "type": "string",
    "description": "Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn."
  },
  {
    "name": "sns_topic_name",
    "type": "string",
    "description": "Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters."
  },
  {
    "name": "is_multi_region_trail",
    "type": "boolean",
    "description": "Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions."
  },
  {
    "name": "s3_bucket_name",
    "type": "string",
    "description": "Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements."
  },
  {
    "name": "sns_topic_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "enable_log_file_validation",
    "type": "boolean",
    "description": "Specifies whether log file validation is enabled. The default is false."
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "is_logging",
    "type": "boolean",
    "description": "Whether the CloudTrail is currently logging AWS API calls."
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
    "name": "trail_name",
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
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html"><code>AWS::CloudTrail::Trail</code></a>.

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
    <td><code>trails</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="S3BucketName, IsLogging, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>trails</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>trails</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>trails_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>trails</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>trail</code>.
```sql
SELECT
region,
include_global_service_events,
event_selectors,
kms_key_id,
cloud_watch_logs_role_arn,
s3_key_prefix,
advanced_event_selectors,
trail_name,
is_organization_trail,
insight_selectors,
cloud_watch_logs_log_group_arn,
sns_topic_name,
is_multi_region_trail,
s3_bucket_name,
sns_topic_arn,
enable_log_file_validation,
arn,
tags,
is_logging
FROM awscc.cloudtrail.trails
WHERE region = 'us-east-1' AND data__Identifier = '<TrailName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>trails</code> in a region.
```sql
SELECT
region,
trail_name
FROM awscc.cloudtrail.trails_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>trail</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudtrail.trails (
 S3BucketName,
 IsLogging,
 region
)
SELECT 
'{{ S3BucketName }}',
 '{{ IsLogging }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudtrail.trails (
 IncludeGlobalServiceEvents,
 EventSelectors,
 KMSKeyId,
 CloudWatchLogsRoleArn,
 S3KeyPrefix,
 AdvancedEventSelectors,
 TrailName,
 IsOrganizationTrail,
 InsightSelectors,
 CloudWatchLogsLogGroupArn,
 SnsTopicName,
 IsMultiRegionTrail,
 S3BucketName,
 EnableLogFileValidation,
 Tags,
 IsLogging,
 region
)
SELECT 
 '{{ IncludeGlobalServiceEvents }}',
 '{{ EventSelectors }}',
 '{{ KMSKeyId }}',
 '{{ CloudWatchLogsRoleArn }}',
 '{{ S3KeyPrefix }}',
 '{{ AdvancedEventSelectors }}',
 '{{ TrailName }}',
 '{{ IsOrganizationTrail }}',
 '{{ InsightSelectors }}',
 '{{ CloudWatchLogsLogGroupArn }}',
 '{{ SnsTopicName }}',
 '{{ IsMultiRegionTrail }}',
 '{{ S3BucketName }}',
 '{{ EnableLogFileValidation }}',
 '{{ Tags }}',
 '{{ IsLogging }}',
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
  - name: trail
    props:
      - name: IncludeGlobalServiceEvents
        value: '{{ IncludeGlobalServiceEvents }}'
      - name: EventSelectors
        value:
          - IncludeManagementEvents: '{{ IncludeManagementEvents }}'
            ReadWriteType: '{{ ReadWriteType }}'
            ExcludeManagementEventSources:
              - '{{ ExcludeManagementEventSources[0] }}'
            DataResources:
              - Type: '{{ Type }}'
                Values:
                  - '{{ Values[0] }}'
      - name: KMSKeyId
        value: '{{ KMSKeyId }}'
      - name: CloudWatchLogsRoleArn
        value: '{{ CloudWatchLogsRoleArn }}'
      - name: S3KeyPrefix
        value: '{{ S3KeyPrefix }}'
      - name: AdvancedEventSelectors
        value:
          - FieldSelectors:
              - Field: '{{ Field }}'
                Equals:
                  - '{{ Equals[0] }}'
                NotStartsWith:
                  - '{{ NotStartsWith[0] }}'
                NotEndsWith:
                  - '{{ NotEndsWith[0] }}'
                StartsWith:
                  - '{{ StartsWith[0] }}'
                EndsWith:
                  - '{{ EndsWith[0] }}'
                NotEquals:
                  - '{{ NotEquals[0] }}'
            Name: '{{ Name }}'
      - name: TrailName
        value: '{{ TrailName }}'
      - name: IsOrganizationTrail
        value: '{{ IsOrganizationTrail }}'
      - name: InsightSelectors
        value:
          - InsightType: '{{ InsightType }}'
      - name: CloudWatchLogsLogGroupArn
        value: '{{ CloudWatchLogsLogGroupArn }}'
      - name: SnsTopicName
        value: '{{ SnsTopicName }}'
      - name: IsMultiRegionTrail
        value: '{{ IsMultiRegionTrail }}'
      - name: S3BucketName
        value: '{{ S3BucketName }}'
      - name: EnableLogFileValidation
        value: '{{ EnableLogFileValidation }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: IsLogging
        value: '{{ IsLogging }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cloudtrail.trails
SET data__PatchDocument = string('{{ {
    "IncludeGlobalServiceEvents": include_global_service_events,
    "EventSelectors": event_selectors,
    "KMSKeyId": kms_key_id,
    "CloudWatchLogsRoleArn": cloud_watch_logs_role_arn,
    "S3KeyPrefix": s3_key_prefix,
    "AdvancedEventSelectors": advanced_event_selectors,
    "IsOrganizationTrail": is_organization_trail,
    "InsightSelectors": insight_selectors,
    "CloudWatchLogsLogGroupArn": cloud_watch_logs_log_group_arn,
    "SnsTopicName": sns_topic_name,
    "IsMultiRegionTrail": is_multi_region_trail,
    "S3BucketName": s3_bucket_name,
    "EnableLogFileValidation": enable_log_file_validation,
    "Tags": tags,
    "IsLogging": is_logging
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<TrailName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudtrail.trails
WHERE data__Identifier = '<TrailName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>trails</code> resource, the following permissions are required:

### Read
```json
CloudTrail:GetTrail,
CloudTrail:GetTrailStatus,
CloudTrail:ListTags,
CloudTrail:GetEventSelectors,
CloudTrail:GetInsightSelectors,
CloudTrail:DescribeTrails
```

### Create
```json
CloudTrail:CreateTrail,
CloudTrail:StartLogging,
CloudTrail:AddTags,
CloudTrail:PutEventSelectors,
CloudTrail:PutInsightSelectors,
iam:GetRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
organizations:DescribeOrganization,
organizations:ListAWSServiceAccessForOrganization
```

### Update
```json
CloudTrail:UpdateTrail,
CloudTrail:StartLogging,
CloudTrail:StopLogging,
CloudTrail:AddTags,
CloudTrail:RemoveTags,
CloudTrail:PutEventSelectors,
CloudTrail:PutInsightSelectors,
iam:GetRole,
iam:PassRole,
iam:CreateServiceLinkedRole,
organizations:DescribeOrganization,
organizations:ListAWSServiceAccessForOrganization,
CloudTrail:GetTrail,
CloudTrail:DescribeTrails
```

### List
```json
CloudTrail:ListTrails,
CloudTrail:GetTrail,
CloudTrail:GetTrailStatus,
CloudTrail:ListTags,
CloudTrail:GetEventSelectors,
CloudTrail:GetInsightSelectors,
CloudTrail:DescribeTrails
```

### Delete
```json
CloudTrail:DeleteTrail
```
