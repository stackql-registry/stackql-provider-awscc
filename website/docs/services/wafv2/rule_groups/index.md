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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>rule_groups</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE data__Identifier = '<Name>|<Id>|<Scope>';
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
;
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
'{{ Capacity }}',
 '{{ Scope }}',
 '{{ VisibilityConfig }}',
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
 '{{ Capacity }}',
 '{{ Description }}',
 '{{ Name }}',
 '{{ Scope }}',
 '{{ Rules }}',
 '{{ VisibilityConfig }}',
 '{{ Tags }}',
 '{{ CustomResponseBodies }}',
 '{{ AvailableLabels }}',
 '{{ ConsumedLabels }}',
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
      - name: Capacity
        value: '{{ Capacity }}'
      - name: Description
        value: '{{ Description }}'
      - name: Name
        value: '{{ Name }}'
      - name: Scope
        value: '{{ Scope }}'
      - name: Rules
        value:
          - Name: null
            Priority: '{{ Priority }}'
            Statement:
              ByteMatchStatement:
                SearchString: '{{ SearchString }}'
                SearchStringBase64: '{{ SearchStringBase64 }}'
                FieldToMatch:
                  SingleHeader:
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
                TextTransformations:
                  - Priority: '{{ Priority }}'
                    Type: '{{ Type }}'
                PositionalConstraint: '{{ PositionalConstraint }}'
              SqliMatchStatement:
                FieldToMatch: null
                TextTransformations:
                  - null
                SensitivityLevel: '{{ SensitivityLevel }}'
              XssMatchStatement:
                FieldToMatch: null
                TextTransformations:
                  - null
              SizeConstraintStatement:
                FieldToMatch: null
                ComparisonOperator: '{{ ComparisonOperator }}'
                Size: null
                TextTransformations:
                  - null
              GeoMatchStatement:
                CountryCodes:
                  - '{{ CountryCodes[0] }}'
                ForwardedIPConfig:
                  HeaderName: '{{ HeaderName }}'
                  FallbackBehavior: '{{ FallbackBehavior }}'
              RuleGroupReferenceStatement:
                Arn: '{{ Arn }}'
                ExcludedRules:
                  - Name: null
                RuleActionOverrides:
                  - Name: null
                    ActionToUse:
                      Allow:
                        CustomRequestHandling:
                          InsertHeaders:
                            - Name: '{{ Name }}'
                              Value: '{{ Value }}'
                      Block:
                        CustomResponse:
                          ResponseCode: '{{ ResponseCode }}'
                          CustomResponseBodyKey: '{{ CustomResponseBodyKey }}'
                          ResponseHeaders:
                            - null
                      Count:
                        CustomRequestHandling: null
                      Captcha:
                        CustomRequestHandling: null
                      Challenge:
                        CustomRequestHandling: null
              IPSetReferenceStatement:
                Arn: null
                IPSetForwardedIPConfig:
                  HeaderName: '{{ HeaderName }}'
                  FallbackBehavior: '{{ FallbackBehavior }}'
                  Position: '{{ Position }}'
              RegexPatternSetReferenceStatement:
                Arn: null
                FieldToMatch: null
                TextTransformations:
                  - null
              ManagedRuleGroupStatement:
                Name: null
                VendorName: '{{ VendorName }}'
                Version: '{{ Version }}'
                ExcludedRules:
                  - null
                ScopeDownStatement: null
                ManagedRuleGroupConfigs:
                  - LoginPath: '{{ LoginPath }}'
                    PayloadType: '{{ PayloadType }}'
                    UsernameField:
                      Identifier: '{{ Identifier }}'
                    PasswordField: null
                    AWSManagedRulesBotControlRuleSet:
                      InspectionLevel: '{{ InspectionLevel }}'
                      EnableMachineLearning: '{{ EnableMachineLearning }}'
                    AWSManagedRulesATPRuleSet:
                      LoginPath: '{{ LoginPath }}'
                      EnableRegexInPath: '{{ EnableRegexInPath }}'
                      RequestInspection:
                        PayloadType: '{{ PayloadType }}'
                        UsernameField: null
                        PasswordField: null
                      ResponseInspection:
                        StatusCode:
                          SuccessCodes:
                            - '{{ SuccessCodes[0] }}'
                          FailureCodes:
                            - '{{ FailureCodes[0] }}'
                        Header:
                          Name: '{{ Name }}'
                          SuccessValues:
                            - '{{ SuccessValues[0] }}'
                          FailureValues:
                            - '{{ FailureValues[0] }}'
                        BodyContains:
                          SuccessStrings:
                            - '{{ SuccessStrings[0] }}'
                          FailureStrings:
                            - '{{ FailureStrings[0] }}'
                        Json:
                          Identifier: '{{ Identifier }}'
                          SuccessValues:
                            - '{{ SuccessValues[0] }}'
                          FailureValues:
                            - '{{ FailureValues[0] }}'
                    AWSManagedRulesACFPRuleSet:
                      CreationPath: '{{ CreationPath }}'
                      RegistrationPagePath: '{{ RegistrationPagePath }}'
                      RequestInspection:
                        PayloadType: '{{ PayloadType }}'
                        UsernameField: null
                        PasswordField: null
                        EmailField: null
                        PhoneNumberFields:
                          - null
                        AddressFields:
                          - null
                      ResponseInspection: null
                      EnableRegexInPath: '{{ EnableRegexInPath }}'
                    AWSManagedRulesAntiDDoSRuleSet:
                      ClientSideActionConfig:
                        Challenge:
                          UsageOfAction: '{{ UsageOfAction }}'
                          Sensitivity: '{{ Sensitivity }}'
                          ExemptUriRegularExpressions:
                            - RegexString: '{{ RegexString }}'
                      SensitivityToBlock: null
                RuleActionOverrides:
                  - null
              RateBasedStatement:
                Limit: '{{ Limit }}'
                EvaluationWindowSec: '{{ EvaluationWindowSec }}'
                AggregateKeyType: '{{ AggregateKeyType }}'
                CustomKeys:
                  - Cookie:
                      Name: '{{ Name }}'
                      TextTransformations:
                        - null
                    ForwardedIP: {}
                    Header:
                      Name: '{{ Name }}'
                      TextTransformations:
                        - null
                    HTTPMethod: {}
                    IP: {}
                    LabelNamespace:
                      Namespace: '{{ Namespace }}'
                    QueryArgument:
                      Name: '{{ Name }}'
                      TextTransformations:
                        - null
                    QueryString:
                      TextTransformations:
                        - null
                    UriPath:
                      TextTransformations:
                        - null
                    JA3Fingerprint:
                      FallbackBehavior: '{{ FallbackBehavior }}'
                    JA4Fingerprint:
                      FallbackBehavior: '{{ FallbackBehavior }}'
                    ASN: {}
                ScopeDownStatement: null
                ForwardedIPConfig: null
              AndStatement:
                Statements:
                  - null
              OrStatement:
                Statements:
                  - null
              NotStatement:
                Statement: null
              LabelMatchStatement:
                Scope: '{{ Scope }}'
                Key: '{{ Key }}'
              RegexMatchStatement:
                RegexString: '{{ RegexString }}'
                FieldToMatch: null
                TextTransformations:
                  - null
              AsnMatchStatement:
                AsnList:
                  - '{{ AsnList[0] }}'
                ForwardedIPConfig: null
            Action: null
            OverrideAction:
              Count: {}
              None: {}
            RuleLabels:
              - Name: '{{ Name }}'
            VisibilityConfig:
              SampledRequestsEnabled: '{{ SampledRequestsEnabled }}'
              CloudWatchMetricsEnabled: '{{ CloudWatchMetricsEnabled }}'
              MetricName: '{{ MetricName }}'
            CaptchaConfig:
              ImmunityTimeProperty:
                ImmunityTime: '{{ ImmunityTime }}'
            ChallengeConfig:
              ImmunityTimeProperty: null
      - name: VisibilityConfig
        value: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CustomResponseBodies
        value: {}
      - name: AvailableLabels
        value:
          - Name: null
      - name: ConsumedLabels
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.wafv2.rule_groups
SET data__PatchDocument = string('{{ {
    "Capacity": capacity,
    "Description": description,
    "Rules": rules,
    "VisibilityConfig": visibility_config,
    "Tags": tags,
    "CustomResponseBodies": custom_response_bodies
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>|<Id>|<Scope>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wafv2.rule_groups
WHERE data__Identifier = '<Name|Id|Scope>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>rule_groups</code> resource, the following permissions are required:

### Create
```json
wafv2:CreateRuleGroup,
wafv2:GetRuleGroup,
wafv2:TagResource,
wafv2:UntagResource,
wafv2:ListTagsForResource
```

### Delete
```json
wafv2:DeleteRuleGroup,
wafv2:GetRuleGroup
```

### Read
```json
wafv2:GetRuleGroup,
wafv2:ListTagsForResource
```

### Update
```json
wafv2:TagResource,
wafv2:UntagResource,
wafv2:UpdateRuleGroup,
wafv2:GetRuleGroup,
wafv2:ListTagsForResource
```

### List
```json
wafv2:listRuleGroups
```
