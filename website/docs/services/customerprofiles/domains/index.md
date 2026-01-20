---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - customerprofiles
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A domain defined for 3rd party data source in Profile Service</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.customerprofiles.domains" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "domain_name",
    "type": "string",
    "description": "The unique name of the domain."
  },
  {
    "name": "dead_letter_queue_url",
    "type": "string",
    "description": "The URL of the SQS dead letter queue"
  },
  {
    "name": "default_encryption_key",
    "type": "string",
    "description": "The default encryption key"
  },
  {
    "name": "default_expiration_days",
    "type": "integer",
    "description": "The default number of days until the data within the domain expires."
  },
  {
    "name": "matching",
    "type": "object",
    "description": "The process of matching duplicate profiles. If Matching = true, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. After the Identity Resolution Job completes, use the GetMatches API to return and review the results. Or, if you have configured ExportingConfig in the MatchingRequest, you can download the results from S3.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "The flag that enables the matching process of duplicate profiles."
      },
      {
        "name": "auto_merging",
        "type": "object",
        "description": "Configuration information about the auto-merging process.",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": "The flag that enables the auto-merging of duplicate profiles."
          },
          {
            "name": "conflict_resolution",
            "type": "object",
            "description": "How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same FirstName and LastName (and that is the matching criteria), which EmailAddress should be used?",
            "children": [
              {
                "name": "conflict_resolving_model",
                "type": "string",
                "description": "How the auto-merging process should resolve conflicts between different profiles."
              },
              {
                "name": "source_name",
                "type": "string",
                "description": "The ObjectType name that is used to resolve profile merging conflicts when choosing SOURCE as the ConflictResolvingModel."
              }
            ]
          },
          {
            "name": "consolidation",
            "type": "object",
            "description": "A list of matching attributes that represent matching criteria. If two profiles meet at least one of the requirements in the matching attributes list, they will be merged.",
            "children": [
              {
                "name": "matching_attributes_list",
                "type": "array",
                "description": "A list of matching criteria."
              }
            ]
          },
          {
            "name": "min_allowed_confidence_score_for_merging",
            "type": "number",
            "description": "A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles."
          }
        ]
      },
      {
        "name": "exporting_config",
        "type": "object",
        "description": "Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.",
        "children": [
          {
            "name": "s3_exporting",
            "type": "object",
            "description": "The S3 location where Identity Resolution Jobs write result files.",
            "children": [
              {
                "name": "s3_bucket_name",
                "type": "string",
                "description": "The name of the S3 bucket where Identity Resolution Jobs write result files."
              },
              {
                "name": "s3_key_name",
                "type": "string",
                "description": "The S3 key name of the location where Identity Resolution Jobs write result files."
              }
            ]
          }
        ]
      },
      {
        "name": "job_schedule",
        "type": "object",
        "description": "The day and time when do you want to start the Identity Resolution Job every week.",
        "children": [
          {
            "name": "day_of_the_week",
            "type": "string",
            "description": "The day when the Identity Resolution Job should run every week."
          },
          {
            "name": "time",
            "type": "string",
            "description": "The time when the Identity Resolution Job should run every week."
          }
        ]
      }
    ]
  },
  {
    "name": "rule_based_matching",
    "type": "object",
    "description": "The process of matching duplicate profiles using the Rule-Based matching. If RuleBasedMatching = true, Amazon Connect Customer Profiles will start to match and merge your profiles according to your configuration in the RuleBasedMatchingRequest. You can use the ListRuleBasedMatches and GetSimilarProfiles API to return and review the results. Also, if you have configured ExportingConfig in the RuleBasedMatchingRequest, you can download the results from S3.",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": "The flag that enables the rule-based matching process of duplicate profiles."
      },
      {
        "name": "attribute_types_selector",
        "type": "object",
        "description": "Configures information about the AttributeTypesSelector where the rule-based identity resolution uses to match profiles.",
        "children": [
          {
            "name": "attribute_matching_model",
            "type": "string",
            "description": "Configures the AttributeMatchingModel, you can either choose ONE&#95;TO&#95;ONE or MANY&#95;TO&#95;MANY."
          },
          {
            "name": "address",
            "type": "array",
            "description": "The Address type. You can choose from Address, BusinessAddress, MaillingAddress, and ShippingAddress. You only can use the Address type in the MatchingRule. For example, if you want to match profile based on BusinessAddress.City or MaillingAddress.City, you need to choose the BusinessAddress and the MaillingAddress to represent the Address type and specify the Address.City on the matching rule."
          },
          {
            "name": "email_address",
            "type": "array",
            "description": "The Email type. You can choose from EmailAddress, BusinessEmailAddress and PersonalEmailAddress. You only can use the EmailAddress type in the MatchingRule. For example, if you want to match profile based on PersonalEmailAddress or BusinessEmailAddress, you need to choose the PersonalEmailAddress and the BusinessEmailAddress to represent the EmailAddress type and only specify the EmailAddress on the matching rule."
          },
          {
            "name": "phone_number",
            "type": "array",
            "description": "The PhoneNumber type. You can choose from PhoneNumber, HomePhoneNumber, and MobilePhoneNumber. You only can use the PhoneNumber type in the MatchingRule. For example, if you want to match a profile based on Phone or HomePhone, you need to choose the Phone and the HomePhone to represent the PhoneNumber type and only specify the PhoneNumber on the matching rule."
          }
        ]
      },
      {
        "name": "conflict_resolution",
        "type": "object",
        "description": "How the auto-merging process should resolve conflicts between different profiles. For example, if Profile A and Profile B have the same FirstName and LastName (and that is the matching criteria), which EmailAddress should be used?",
        "children": [
          {
            "name": "conflict_resolving_model",
            "type": "string",
            "description": "How the auto-merging process should resolve conflicts between different profiles."
          },
          {
            "name": "source_name",
            "type": "string",
            "description": "The ObjectType name that is used to resolve profile merging conflicts when choosing SOURCE as the ConflictResolvingModel."
          }
        ]
      },
      {
        "name": "exporting_config",
        "type": "object",
        "description": "Configuration information for exporting Identity Resolution results, for example, to an S3 bucket.",
        "children": [
          {
            "name": "s3_exporting",
            "type": "object",
            "description": "The S3 location where Identity Resolution Jobs write result files.",
            "children": [
              {
                "name": "s3_bucket_name",
                "type": "string",
                "description": "The name of the S3 bucket where Identity Resolution Jobs write result files."
              },
              {
                "name": "s3_key_name",
                "type": "string",
                "description": "The S3 key name of the location where Identity Resolution Jobs write result files."
              }
            ]
          }
        ]
      },
      {
        "name": "matching_rules",
        "type": "array",
        "description": "Configures how the rule-based matching process should match profiles. You can have up to 15 MatchingRule in the MatchingRules.",
        "children": [
          {
            "name": "rule",
            "type": "array",
            "description": "A single rule level of the MatchRules. Configures how the rule-based matching process should match profiles."
          }
        ]
      },
      {
        "name": "max_allowed_rule_level_for_matching",
        "type": "integer",
        "description": "Indicates the maximum allowed rule level for matching."
      },
      {
        "name": "max_allowed_rule_level_for_merging",
        "type": "integer",
        "description": "Indicates the maximum allowed rule level for merging."
      },
      {
        "name": "status",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "stats",
    "type": "object",
    "description": "Usage-specific statistics about the domain.",
    "children": [
      {
        "name": "metering_profile_count",
        "type": "number",
        "description": "The number of profiles that you are currently paying for in the domain. If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on."
      },
      {
        "name": "object_count",
        "type": "number",
        "description": "The total number of objects in domain."
      },
      {
        "name": "profile_count",
        "type": "number",
        "description": "The total number of profiles currently in the domain."
      },
      {
        "name": "total_size",
        "type": "number",
        "description": "The total size, in bytes, of all objects in the domain."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the domain",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time of this integration got created"
  },
  {
    "name": "last_updated_at",
    "type": "string",
    "description": "The time of this integration got last updated at"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-domain.html"><code>AWS::CustomerProfiles::Domain</code></a>.

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
    <td><CopyableCode code="DomainName, DefaultExpirationDays, region" /></td>
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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
domain_name,
dead_letter_queue_url,
default_encryption_key,
default_expiration_days,
matching,
rule_based_matching,
stats,
tags,
created_at,
last_updated_at
FROM awscc.customerprofiles.domains
WHERE region = 'us-east-1' AND data__Identifier = '<DomainName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.customerprofiles.domains (
 DomainName,
 DefaultExpirationDays,
 region
)
SELECT 
'{{ DomainName }}',
 '{{ DefaultExpirationDays }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.customerprofiles.domains (
 DomainName,
 DeadLetterQueueUrl,
 DefaultEncryptionKey,
 DefaultExpirationDays,
 Matching,
 RuleBasedMatching,
 Tags,
 region
)
SELECT 
 '{{ DomainName }}',
 '{{ DeadLetterQueueUrl }}',
 '{{ DefaultEncryptionKey }}',
 '{{ DefaultExpirationDays }}',
 '{{ Matching }}',
 '{{ RuleBasedMatching }}',
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
  - name: domain
    props:
      - name: DomainName
        value: '{{ DomainName }}'
      - name: DeadLetterQueueUrl
        value: '{{ DeadLetterQueueUrl }}'
      - name: DefaultEncryptionKey
        value: '{{ DefaultEncryptionKey }}'
      - name: DefaultExpirationDays
        value: '{{ DefaultExpirationDays }}'
      - name: Matching
        value:
          Enabled: '{{ Enabled }}'
          AutoMerging:
            Enabled: '{{ Enabled }}'
            ConflictResolution:
              ConflictResolvingModel: '{{ ConflictResolvingModel }}'
              SourceName: '{{ SourceName }}'
            Consolidation:
              MatchingAttributesList:
                - - '{{ 0[0] }}'
            MinAllowedConfidenceScoreForMerging: null
          ExportingConfig:
            S3Exporting:
              S3BucketName: '{{ S3BucketName }}'
              S3KeyName: '{{ S3KeyName }}'
          JobSchedule:
            DayOfTheWeek: '{{ DayOfTheWeek }}'
            Time: '{{ Time }}'
      - name: RuleBasedMatching
        value:
          Enabled: '{{ Enabled }}'
          AttributeTypesSelector:
            AttributeMatchingModel: '{{ AttributeMatchingModel }}'
            Address:
              - '{{ Address[0] }}'
            EmailAddress:
              - '{{ EmailAddress[0] }}'
            PhoneNumber:
              - '{{ PhoneNumber[0] }}'
          ConflictResolution: null
          ExportingConfig: null
          MatchingRules:
            - Rule:
                - '{{ Rule[0] }}'
          MaxAllowedRuleLevelForMatching: '{{ MaxAllowedRuleLevelForMatching }}'
          MaxAllowedRuleLevelForMerging: '{{ MaxAllowedRuleLevelForMerging }}'
          Status: '{{ Status }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.customerprofiles.domains
WHERE data__Identifier = '<DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
profile:CreateDomain,
profile:TagResource
```

### Read
```json
profile:GetDomain
```

### Update
```json
profile:GetDomain,
profile:UpdateDomain,
profile:UntagResource,
profile:TagResource
```

### Delete
```json
profile:DeleteDomain
```

### List
```json
profile:ListDomains
```
