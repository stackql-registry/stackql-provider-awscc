---
title: logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_configurations
  - wafv2
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

Creates, updates, deletes or gets a <code>logging_configuration</code> resource or lists <code>logging_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>logging_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A WAFv2 Logging Configuration Resource Provider</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wafv2.logging_configurations" /></td></tr>
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
    "name": "resource_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs."
  },
  {
    "name": "log_destination_configs",
    "type": "array",
    "description": "The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL."
  },
  {
    "name": "redacted_fields",
    "type": "array",
    "description": "The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.",
    "children": [
      {
        "name": "single_header",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "single_query_argument",
        "type": "object",
        "description": "One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "all_query_arguments",
        "type": "object",
        "description": "All query arguments of a web request."
      },
      {
        "name": "uri_path",
        "type": "object",
        "description": "The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg."
      },
      {
        "name": "query_string",
        "type": "object",
        "description": "The query string of a web request. This is the part of a URL that appears after a ? character, if any."
      },
      {
        "name": "body",
        "type": "object",
        "description": "The body of a web request. This immediately follows the request headers.",
        "children": [
          {
            "name": "oversize_handling",
            "type": "string",
            "description": "Handling of requests containing oversize fields"
          }
        ]
      },
      {
        "name": "method",
        "type": "object",
        "description": "The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform."
      },
      {
        "name": "json_body",
        "type": "object",
        "description": "Inspect the request body as JSON. The request body immediately follows the request headers.",
        "children": [
          {
            "name": "match_pattern",
            "type": "object",
            "description": "The pattern to look for in the JSON body.",
            "children": [
              {
                "name": "all",
                "type": "object",
                "description": "Inspect all parts of the web request's JSON body."
              },
              {
                "name": "included_paths",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "match_scope",
            "type": "string",
            "description": "The parts of the JSON to match against using the MatchPattern."
          },
          {
            "name": "invalid_fallback_behavior",
            "type": "string",
            "description": "The inspection behavior to fall back to if the JSON in the request body is invalid."
          },
          {
            "name": "oversize_handling",
            "type": "string",
            "description": "Handling of requests containing oversize fields"
          }
        ]
      },
      {
        "name": "headers",
        "type": "object",
        "description": "Includes headers of a web request.",
        "children": [
          {
            "name": "match_pattern",
            "type": "object",
            "description": "The pattern to look for in the request headers.",
            "children": [
              {
                "name": "all",
                "type": "object",
                "description": "Inspect all parts of the web request headers."
              },
              {
                "name": "included_headers",
                "type": "array",
                "description": ""
              },
              {
                "name": "excluded_headers",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "match_scope",
            "type": "string",
            "description": "The parts of the request to match against using the MatchPattern."
          },
          {
            "name": "oversize_handling",
            "type": "string",
            "description": "Handling of requests containing oversize fields"
          }
        ]
      },
      {
        "name": "cookies",
        "type": "object",
        "description": "Includes cookies of a web request.",
        "children": [
          {
            "name": "match_pattern",
            "type": "object",
            "description": "The pattern to look for in the request cookies.",
            "children": [
              {
                "name": "all",
                "type": "object",
                "description": "Inspect all parts of the web request cookies."
              },
              {
                "name": "included_cookies",
                "type": "array",
                "description": ""
              },
              {
                "name": "excluded_cookies",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "match_scope",
            "type": "string",
            "description": "The parts of the request to match against using the MatchPattern."
          },
          {
            "name": "oversize_handling",
            "type": "string",
            "description": "Handling of requests containing oversize fields"
          }
        ]
      },
      {
        "name": "j_a3_fingerprint",
        "type": "object",
        "description": "Includes the JA3 fingerprint of a web request.",
        "children": [
          {
            "name": "fallback_behavior",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "j_a4_fingerprint",
        "type": "object",
        "description": "Includes the JA4 fingerprint of a web request.",
        "children": [
          {
            "name": "fallback_behavior",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "uri_fragment",
        "type": "object",
        "description": "The path component of the URI Fragment. This is the part of a web request that identifies a fragment uri, for example, /abcd#introduction",
        "children": [
          {
            "name": "fallback_behavior",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "managed_by_firewall_manager",
    "type": "boolean",
    "description": "Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration."
  },
  {
    "name": "logging_filter",
    "type": "object",
    "description": "Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.",
    "children": [
      {
        "name": "default_behavior",
        "type": "string",
        "description": "Default handling for logs that don't match any of the specified filtering conditions."
      },
      {
        "name": "filters",
        "type": "array",
        "description": "The filters that you want to apply to the logs.",
        "children": [
          {
            "name": "behavior",
            "type": "string",
            "description": "How to handle logs that satisfy the filter's conditions and requirement."
          },
          {
            "name": "conditions",
            "type": "array",
            "description": "Match conditions for the filter.",
            "children": [
              {
                "name": "action_condition",
                "type": "object",
                "description": "A single action condition."
              },
              {
                "name": "label_name_condition",
                "type": "object",
                "description": "A single label name condition."
              }
            ]
          },
          {
            "name": "requirement",
            "type": "string",
            "description": "Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition."
          }
        ]
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
    "name": "resource_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html"><code>AWS::WAFv2::LoggingConfiguration</code></a>.

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
    <td><code>logging_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceArn, LogDestinationConfigs, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>logging_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>logging_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>logging_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>logging_configurations</code></td>
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

Gets all properties from an individual <code>logging_configuration</code>.
```sql
SELECT
region,
resource_arn,
log_destination_configs,
redacted_fields,
managed_by_firewall_manager,
logging_filter
FROM awscc.wafv2.logging_configurations
WHERE data__Identifier = '<ResourceArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>logging_configurations</code> in a region.
```sql
SELECT
region,
resource_arn
FROM awscc.wafv2.logging_configurations_list_only
;
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>logging_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wafv2.logging_configurations (
 ResourceArn,
 LogDestinationConfigs,
 region
)
SELECT 
'{{ ResourceArn }}',
 '{{ LogDestinationConfigs }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wafv2.logging_configurations (
 ResourceArn,
 LogDestinationConfigs,
 RedactedFields,
 LoggingFilter,
 region
)
SELECT 
 '{{ ResourceArn }}',
 '{{ LogDestinationConfigs }}',
 '{{ RedactedFields }}',
 '{{ LoggingFilter }}',
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
  - name: logging_configuration
    props:
      - name: ResourceArn
        value: '{{ ResourceArn }}'
      - name: LogDestinationConfigs
        value:
          - '{{ LogDestinationConfigs[0] }}'
      - name: RedactedFields
        value:
          - SingleHeader:
              Name: '{{ Name }}'
            SingleQueryArgument:
              Name: '{{ Name }}'
            AllQueryArguments: {}
            UriPath: {}
            QueryString: {}
            Body:
              OversizeHandling: '{{ OversizeHandling }}'
            Method: {}
            JsonBody:
              MatchPattern:
                All: {}
                IncludedPaths:
                  - '{{ IncludedPaths[0] }}'
              MatchScope: '{{ MatchScope }}'
              InvalidFallbackBehavior: '{{ InvalidFallbackBehavior }}'
              OversizeHandling: null
            Headers:
              MatchPattern:
                All: {}
                IncludedHeaders:
                  - '{{ IncludedHeaders[0] }}'
                ExcludedHeaders:
                  - '{{ ExcludedHeaders[0] }}'
              MatchScope: '{{ MatchScope }}'
              OversizeHandling: null
            Cookies:
              MatchPattern:
                All: {}
                IncludedCookies:
                  - '{{ IncludedCookies[0] }}'
                ExcludedCookies:
                  - '{{ ExcludedCookies[0] }}'
              MatchScope: null
              OversizeHandling: null
            JA3Fingerprint:
              FallbackBehavior: '{{ FallbackBehavior }}'
            JA4Fingerprint:
              FallbackBehavior: '{{ FallbackBehavior }}'
            UriFragment:
              FallbackBehavior: '{{ FallbackBehavior }}'
      - name: LoggingFilter
        value:
          DefaultBehavior: '{{ DefaultBehavior }}'
          Filters:
            - Behavior: '{{ Behavior }}'
              Conditions:
                - ActionCondition:
                    Action: '{{ Action }}'
                  LabelNameCondition:
                    LabelName: '{{ LabelName }}'
              Requirement: '{{ Requirement }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.wafv2.logging_configurations
SET data__PatchDocument = string('{{ {
    "LogDestinationConfigs": log_destination_configs,
    "RedactedFields": redacted_fields,
    "LoggingFilter": logging_filter
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ResourceArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wafv2.logging_configurations
WHERE data__Identifier = '<ResourceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>logging_configurations</code> resource, the following permissions are required:

### Create
```json
wafv2:PutLoggingConfiguration,
wafv2:GetLoggingConfiguration,
firehose:ListDeliveryStreams,
iam:CreateServiceLinkedRole,
iam:DescribeOrganization,
logs:CreateLogDelivery,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups
```

### Read
```json
wafv2:GetLoggingConfiguration
```

### Update
```json
wafv2:PutLoggingConfiguration,
wafv2:GetLoggingConfiguration,
firehose:ListDeliveryStreams,
iam:CreateServiceLinkedRole,
iam:DescribeOrganization,
logs:CreateLogDelivery,
s3:PutBucketPolicy,
s3:GetBucketPolicy,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups
```

### Delete
```json
wafv2:DeleteLoggingConfiguration,
wafv2:GetLoggingConfiguration,
logs:DeleteLogDelivery
```

### List
```json
wafv2:ListLoggingConfigurations
```
