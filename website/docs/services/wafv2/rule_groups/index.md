---
title: rule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_groups
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

Creates, updates, deletes or gets a <code>rule_group</code> resource or lists <code>rule_groups</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>rule_groups</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Contains the Rules that identify the requests that you want to allow, block, or count. In a RuleGroup, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a RuleGroup, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the RuleGroup with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a RuleGroup, a request needs to match only one of the specifications to be allowed, blocked, or counted.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wafv2.rule_groups" /></td></tr>
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
    "description": ""
  },
  {
    "name": "capacity",
    "type": "integer",
    "description": ""
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the entity."
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the WebACL."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the WebACL"
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway."
  },
  {
    "name": "rules",
    "type": "array",
    "description": "Collection of Rules.",
    "children": [
      {
        "name": "priority",
        "type": "integer",
        "description": "Priority of the Rule, Rules get evaluated from lower to higher priority."
      },
      {
        "name": "statement",
        "type": "object",
        "description": "First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc",
        "children": [
          {
            "name": "byte_match_statement",
            "type": "object",
            "description": "Byte Match statement.",
            "children": [
              {
                "name": "search_string",
                "type": "string",
                "description": "String that is searched to find a match."
              },
              {
                "name": "search_string_base64",
                "type": "string",
                "description": "Base64 encoded string that is searched to find a match."
              },
              {
                "name": "field_to_match",
                "type": "object",
                "description": "Field of the request to match."
              },
              {
                "name": "text_transformations",
                "type": "array",
                "description": ""
              },
              {
                "name": "positional_constraint",
                "type": "string",
                "description": "Position of the evaluation in the FieldToMatch of request."
              }
            ]
          },
          {
            "name": "sqli_match_statement",
            "type": "object",
            "description": "Sqli Match Statement.",
            "children": [
              {
                "name": "field_to_match",
                "type": "object",
                "description": "Field of the request to match."
              },
              {
                "name": "text_transformations",
                "type": "array",
                "description": ""
              },
              {
                "name": "sensitivity_level",
                "type": "string",
                "description": "Sensitivity Level current only used for sqli match statements."
              }
            ]
          },
          {
            "name": "xss_match_statement",
            "type": "object",
            "description": "Xss Match Statement.",
            "children": [
              {
                "name": "field_to_match",
                "type": "object",
                "description": "Field of the request to match."
              },
              {
                "name": "text_transformations",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "size_constraint_statement",
            "type": "object",
            "description": "Size Constraint statement.",
            "children": [
              {
                "name": "field_to_match",
                "type": "object",
                "description": "Field of the request to match."
              },
              {
                "name": "comparison_operator",
                "type": "string",
                "description": ""
              },
              {
                "name": "size",
                "type": "number",
                "description": ""
              },
              {
                "name": "text_transformations",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "geo_match_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "country_codes",
                "type": "array",
                "description": ""
              },
              {
                "name": "forwarded_ip_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "rule_group_reference_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "excluded_rules",
                "type": "array",
                "description": ""
              },
              {
                "name": "rule_action_overrides",
                "type": "array",
                "description": "Action overrides for rules in the rule group."
              }
            ]
          },
          {
            "name": "ip_set_reference_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "ip_set_forwarded_ip_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "regex_pattern_set_reference_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "field_to_match",
                "type": "object",
                "description": "Field of the request to match."
              },
              {
                "name": "text_transformations",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "managed_rule_group_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "vendor_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "version",
                "type": "string",
                "description": ""
              },
              {
                "name": "excluded_rules",
                "type": "array",
                "description": ""
              },
              {
                "name": "managed_rule_group_configs",
                "type": "array",
                "description": "Collection of ManagedRuleGroupConfig."
              },
              {
                "name": "rule_action_overrides",
                "type": "array",
                "description": "Action overrides for rules in the rule group."
              }
            ]
          },
          {
            "name": "rate_based_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "limit",
                "type": "integer",
                "description": ""
              },
              {
                "name": "evaluation_window_sec",
                "type": "integer",
                "description": ""
              },
              {
                "name": "aggregate_key_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "custom_keys",
                "type": "array",
                "description": "Specifies the aggregate keys to use in a rate-base rule."
              },
              {
                "name": "forwarded_ip_config",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "and_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "statements",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "or_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "statements",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "not_statement",
            "type": "object",
            "description": ""
          },
          {
            "name": "label_match_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "scope",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "regex_match_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "regex_string",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_to_match",
                "type": "object",
                "description": "Field of the request to match."
              },
              {
                "name": "text_transformations",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "asn_match_statement",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "asn_list",
                "type": "array",
                "description": ""
              },
              {
                "name": "forwarded_ip_config",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "action",
        "type": "object",
        "description": "Action taken when Rule matches its condition.",
        "children": [
          {
            "name": "allow",
            "type": "object",
            "description": "Allow traffic towards application.",
            "children": [
              {
                "name": "custom_request_handling",
                "type": "object",
                "description": "Custom request handling."
              }
            ]
          },
          {
            "name": "block",
            "type": "object",
            "description": "Block traffic towards application.",
            "children": [
              {
                "name": "custom_response",
                "type": "object",
                "description": "Custom response."
              }
            ]
          },
          {
            "name": "count",
            "type": "object",
            "description": "Allow traffic towards application.",
            "children": [
              {
                "name": "custom_request_handling",
                "type": "object",
                "description": "Custom request handling."
              }
            ]
          },
          {
            "name": "captcha",
            "type": "object",
            "description": "Checks valid token exists with request.",
            "children": [
              {
                "name": "custom_request_handling",
                "type": "object",
                "description": "Custom request handling."
              }
            ]
          },
          {
            "name": "challenge",
            "type": "object",
            "description": "Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.",
            "children": [
              {
                "name": "custom_request_handling",
                "type": "object",
                "description": "Custom request handling."
              }
            ]
          }
        ]
      },
      {
        "name": "override_action",
        "type": "object",
        "description": "Override a RuleGroup or ManagedRuleGroup behavior. This can only be applied to Rule that has RuleGroupReferenceStatement or ManagedRuleGroupReferenceStatement.",
        "children": [
          {
            "name": "count",
            "type": "object",
            "description": "Count traffic towards application."
          },
          {
            "name": "none",
            "type": "object",
            "description": "Keep the RuleGroup or ManagedRuleGroup behavior as is."
          }
        ]
      },
      {
        "name": "rule_labels",
        "type": "array",
        "description": "Collection of Rule Labels.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "Name of the Label."
          }
        ]
      },
      {
        "name": "visibility_config",
        "type": "object",
        "description": "Visibility Metric of the WebACL.",
        "children": [
          {
            "name": "sampled_requests_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "cloud_watch_metrics_enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "metric_name",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "captcha_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "immunity_time_property",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "immunity_time",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "challenge_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "immunity_time_property",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "immunity_time",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "visibility_config",
    "type": "object",
    "description": "Visibility Metric of the WebACL.",
    "children": [
      {
        "name": "sampled_requests_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "cloud_watch_metrics_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "metric_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "label_namespace",
    "type": "string",
    "description": "Name of the Label."
  },
  {
    "name": "custom_response_bodies",
    "type": "object",
    "description": "Custom response key and body map."
  },
  {
    "name": "available_labels",
    "type": "array",
    "description": "Collection of Available Labels."
  },
  {
    "name": "consumed_labels",
    "type": "array",
    "description": "Collection of Consumed Labels."
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
    "name": "name",
    "type": "string",
    "description": "Name of the WebACL."
  },
  {
    "name": "id",
    "type": "string",
    "description": "Id of the WebACL"
  },
  {
    "name": "scope",
    "type": "string",
    "description": "Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html"><code>AWS::WAFv2::RuleGroup</code></a>.

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
    <td><code>rule_groups</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Capacity, Scope, VisibilityConfig, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>rule_groups</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rule_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>rule_groups_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>rule_groups</code></td>
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

Gets all properties from an individual <code>rule_group</code>.
```sql
SELECT
region,
arn,
capacity,
description,
name,
id,
scope,
rules,
visibility_config,
tags,
label_namespace,
custom_response_bodies,
available_labels,
consumed_labels
FROM awscc.wafv2.rule_groups
WHERE region = 'us-east-1' AND Identifier = '{{ name }}|{{ id }}|{{ scope }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>rule_groups</code> in a region.
```sql
SELECT
region,
name,
id,
scope
FROM awscc.wafv2.rule_groups_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>rule_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wafv2.rule_groups (
 Capacity,
 Scope,
 VisibilityConfig,
 region
)
SELECT
'{{ capacity }}',
 '{{ scope }}',
 '{{ visibility_config }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wafv2.rule_groups (
 Capacity,
 Description,
 Name,
 Scope,
 Rules,
 VisibilityConfig,
 Tags,
 CustomResponseBodies,
 AvailableLabels,
 ConsumedLabels,
 region
)
SELECT
 '{{ capacity }}',
 '{{ description }}',
 '{{ name }}',
 '{{ scope }}',
 '{{ rules }}',
 '{{ visibility_config }}',
 '{{ tags }}',
 '{{ custom_response_bodies }}',
 '{{ available_labels }}',
 '{{ consumed_labels }}',
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
  - name: rule_group
    props:
      - name: capacity
        value: '{{ capacity }}'
      - name: description
        value: '{{ description }}'
      - name: name
        value: '{{ name }}'
      - name: scope
        value: '{{ scope }}'
      - name: rules
        value:
          - name: null
            priority: '{{ priority }}'
            statement:
              byte_match_statement:
                search_string: '{{ search_string }}'
                search_string_base64: '{{ search_string_base64 }}'
                field_to_match:
                  single_header:
                    name: '{{ name }}'
                  single_query_argument:
                    name: '{{ name }}'
                  all_query_arguments: {}
                  uri_path: {}
                  query_string: {}
                  body:
                    oversize_handling: '{{ oversize_handling }}'
                  method: {}
                  json_body:
                    match_pattern:
                      all: {}
                      included_paths:
                        - '{{ included_paths[0] }}'
                    match_scope: '{{ match_scope }}'
                    invalid_fallback_behavior: '{{ invalid_fallback_behavior }}'
                    oversize_handling: null
                  headers:
                    match_pattern:
                      all: {}
                      included_headers:
                        - '{{ included_headers[0] }}'
                      excluded_headers:
                        - '{{ excluded_headers[0] }}'
                    match_scope: '{{ match_scope }}'
                    oversize_handling: null
                  cookies:
                    match_pattern:
                      all: {}
                      included_cookies:
                        - '{{ included_cookies[0] }}'
                      excluded_cookies:
                        - '{{ excluded_cookies[0] }}'
                    match_scope: null
                    oversize_handling: null
                  j_a3_fingerprint:
                    fallback_behavior: '{{ fallback_behavior }}'
                  j_a4_fingerprint:
                    fallback_behavior: '{{ fallback_behavior }}'
                  uri_fragment:
                    fallback_behavior: '{{ fallback_behavior }}'
                text_transformations:
                  - priority: '{{ priority }}'
                    type: '{{ type }}'
                positional_constraint: '{{ positional_constraint }}'
              sqli_match_statement:
                field_to_match: null
                text_transformations:
                  - null
                sensitivity_level: '{{ sensitivity_level }}'
              xss_match_statement:
                field_to_match: null
                text_transformations:
                  - null
              size_constraint_statement:
                field_to_match: null
                comparison_operator: '{{ comparison_operator }}'
                size: null
                text_transformations:
                  - null
              geo_match_statement:
                country_codes:
                  - '{{ country_codes[0] }}'
                forwarded_ip_config:
                  header_name: '{{ header_name }}'
                  fallback_behavior: '{{ fallback_behavior }}'
              rule_group_reference_statement:
                arn: '{{ arn }}'
                excluded_rules:
                  - name: null
                rule_action_overrides:
                  - name: null
                    action_to_use:
                      allow:
                        custom_request_handling:
                          insert_headers:
                            - name: '{{ name }}'
                              value: '{{ value }}'
                      block:
                        custom_response:
                          response_code: '{{ response_code }}'
                          custom_response_body_key: '{{ custom_response_body_key }}'
                          response_headers:
                            - null
                      count:
                        custom_request_handling: null
                      captcha:
                        custom_request_handling: null
                      challenge:
                        custom_request_handling: null
              ip_set_reference_statement:
                arn: null
                ip_set_forwarded_ip_config:
                  header_name: '{{ header_name }}'
                  fallback_behavior: '{{ fallback_behavior }}'
                  position: '{{ position }}'
              regex_pattern_set_reference_statement:
                arn: null
                field_to_match: null
                text_transformations:
                  - null
              managed_rule_group_statement:
                name: null
                vendor_name: '{{ vendor_name }}'
                version: '{{ version }}'
                excluded_rules:
                  - null
                scope_down_statement: null
                managed_rule_group_configs:
                  - login_path: '{{ login_path }}'
                    payload_type: '{{ payload_type }}'
                    username_field:
                      identifier: '{{ identifier }}'
                    password_field: null
                    aws_managed_rules_bot_control_rule_set:
                      inspection_level: '{{ inspection_level }}'
                      enable_machine_learning: '{{ enable_machine_learning }}'
                    aws_managed_rules_at_prule_set:
                      login_path: '{{ login_path }}'
                      enable_regex_in_path: '{{ enable_regex_in_path }}'
                      request_inspection:
                        payload_type: '{{ payload_type }}'
                        username_field: null
                        password_field: null
                      response_inspection:
                        status_code:
                          success_codes:
                            - '{{ success_codes[0] }}'
                          failure_codes:
                            - '{{ failure_codes[0] }}'
                        header:
                          name: '{{ name }}'
                          success_values:
                            - '{{ success_values[0] }}'
                          failure_values:
                            - '{{ failure_values[0] }}'
                        body_contains:
                          success_strings:
                            - '{{ success_strings[0] }}'
                          failure_strings:
                            - '{{ failure_strings[0] }}'
                        json:
                          identifier: '{{ identifier }}'
                          success_values:
                            - '{{ success_values[0] }}'
                          failure_values:
                            - '{{ failure_values[0] }}'
                    aws_managed_rules_ac_fp_rule_set:
                      creation_path: '{{ creation_path }}'
                      registration_page_path: '{{ registration_page_path }}'
                      request_inspection:
                        payload_type: '{{ payload_type }}'
                        username_field: null
                        password_field: null
                        email_field: null
                        phone_number_fields:
                          - null
                        address_fields:
                          - null
                      response_inspection: null
                      enable_regex_in_path: '{{ enable_regex_in_path }}'
                    aws_managed_rules_anti_ddo_srule_set:
                      client_side_action_config:
                        challenge:
                          usage_of_action: '{{ usage_of_action }}'
                          sensitivity: '{{ sensitivity }}'
                          exempt_uri_regular_expressions:
                            - regex_string: '{{ regex_string }}'
                      sensitivity_to_block: null
                rule_action_overrides:
                  - null
              rate_based_statement:
                limit: '{{ limit }}'
                evaluation_window_sec: '{{ evaluation_window_sec }}'
                aggregate_key_type: '{{ aggregate_key_type }}'
                custom_keys:
                  - cookie:
                      name: '{{ name }}'
                      text_transformations:
                        - null
                    forwarded_ip: {}
                    header:
                      name: '{{ name }}'
                      text_transformations:
                        - null
                    h_tt_pmethod: {}
                    ip: {}
                    label_namespace:
                      namespace: '{{ namespace }}'
                    query_argument:
                      name: '{{ name }}'
                      text_transformations:
                        - null
                    query_string:
                      text_transformations:
                        - null
                    uri_path:
                      text_transformations:
                        - null
                    j_a3_fingerprint:
                      fallback_behavior: '{{ fallback_behavior }}'
                    j_a4_fingerprint:
                      fallback_behavior: '{{ fallback_behavior }}'
                    a_sn: {}
                scope_down_statement: null
                forwarded_ip_config: null
              and_statement:
                statements:
                  - null
              or_statement:
                statements:
                  - null
              not_statement:
                statement: null
              label_match_statement:
                scope: '{{ scope }}'
                key: '{{ key }}'
              regex_match_statement:
                regex_string: '{{ regex_string }}'
                field_to_match: null
                text_transformations:
                  - null
              asn_match_statement:
                asn_list:
                  - '{{ asn_list[0] }}'
                forwarded_ip_config: null
            action: null
            override_action:
              count: {}
              none: {}
            rule_labels:
              - name: '{{ name }}'
            visibility_config:
              sampled_requests_enabled: '{{ sampled_requests_enabled }}'
              cloud_watch_metrics_enabled: '{{ cloud_watch_metrics_enabled }}'
              metric_name: '{{ metric_name }}'
            captcha_config:
              immunity_time_property:
                immunity_time: '{{ immunity_time }}'
            challenge_config:
              immunity_time_property: null
      - name: visibility_config
        value: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: custom_response_bodies
        value: {}
      - name: available_labels
        value:
          - name: null
      - name: consumed_labels
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>rule_group</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.wafv2.rule_groups
SET PatchDocument = string('{{ {
    "Capacity": capacity,
    "Description": description,
    "Rules": rules,
    "VisibilityConfig": visibility_config,
    "Tags": tags,
    "CustomResponseBodies": custom_response_bodies
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ name }}|{{ id }}|{{ scope }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wafv2.rule_groups
WHERE Identifier = '{{ name }}|{{ id }}|{{ scope }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rule_groups</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
wafv2:CreateRuleGroup,
wafv2:GetRuleGroup,
wafv2:TagResource,
wafv2:UntagResource,
wafv2:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
wafv2:DeleteRuleGroup,
wafv2:GetRuleGroup
```

</TabItem>
<TabItem value="read">

```json
wafv2:GetRuleGroup,
wafv2:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
wafv2:TagResource,
wafv2:UntagResource,
wafv2:UpdateRuleGroup,
wafv2:GetRuleGroup,
wafv2:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
wafv2:listRuleGroups
```

</TabItem>
</Tabs>