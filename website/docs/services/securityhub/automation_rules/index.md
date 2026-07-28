---
title: automation_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rules
  - securityhub
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets an <code>automation_rule</code> resource or lists <code>automation_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>automation_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The <code>AWS::SecurityHub::AutomationRule</code> resource specifies an automation rule based on input parameters. For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html">Automation rules</a> in the <i>User Guide</i>.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.automation_rules" /></td></tr>
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
    "name": "rule_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "rule_status",
    "type": "string",
    "description": "Whether the rule is active after it is created. If this parameter is equal to <code>ENABLED</code>, ASH applies the rule to findings and finding updates after the rule is created."
  },
  {
    "name": "rule_order",
    "type": "integer",
    "description": "An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the rule."
  },
  {
    "name": "rule_name",
    "type": "string",
    "description": "The name of the rule."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The date and time, in UTC and ISO 8601 format."
  },
  {
    "name": "created_by",
    "type": "string",
    "description": ""
  },
  {
    "name": "is_terminal",
    "type": "boolean",
    "description": "Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal."
  },
  {
    "name": "actions",
    "type": "array",
    "description": "One or more actions to update finding fields if a finding matches the conditions specified in <code>Criteria</code>.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "Specifies the type of action that Security Hub takes when a finding matches the defined criteria of a rule."
      },
      {
        "name": "finding_fields_update",
        "type": "object",
        "description": "Specifies that the automation rule action is an update to a finding field.",
        "children": [
          {
            "name": "types",
            "type": "array",
            "description": "The rule action updates the <code>Types</code> field of a finding."
          },
          {
            "name": "severity",
            "type": "object",
            "description": "The rule action will update the <code>Severity</code> field of a finding.",
            "children": [
              {
                "name": "product",
                "type": "number",
                "description": "The native severity as defined by the AWS service or integrated partner product that generated the finding."
              },
              {
                "name": "label",
                "type": "string",
                "description": "<details><summary>The severity value of the finding. The allowed values are the following.</summary>+  <code>INFORMATIONAL</code> - No issue was found.<br />+  <code>LOW</code> - The issue does not require action on its own.<br />+  <code>MEDIUM</code> - The issue must be addressed but not urgently.<br />+  <code>HIGH</code> - The issue must be addressed as a priority.<br />+  <code>CRITICAL</code> - The issue must be remediated immediately to avoid it escalating.</details>"
              },
              {
                "name": "normalized",
                "type": "integer",
                "description": "<details><summary>The normalized severity for the finding. This attribute is to be deprecated in favor of <code>Label</code>.</summary>If you provide <code>Normalized</code> and don't provide <code>Label</code>, <code>Label</code> is set automatically as follows.<br />+  0 - <code>INFORMATIONAL</code><br />+  1–39 - <code>LOW</code><br />+  40–69 - <code>MEDIUM</code><br />+  70–89 - <code>HIGH</code><br />+  90–100 - <code>CRITICAL</code></details>"
              }
            ]
          },
          {
            "name": "confidence",
            "type": "integer",
            "description": "The rule action updates the <code>Confidence</code> field of a finding."
          },
          {
            "name": "user_defined_fields",
            "type": "object",
            "description": "The rule action updates the <code>UserDefinedFields</code> field of a finding."
          },
          {
            "name": "verification_state",
            "type": "string",
            "description": "The rule action updates the <code>VerificationState</code> field of a finding."
          },
          {
            "name": "related_findings",
            "type": "array",
            "description": "The rule action will update the <code>RelatedFindings</code> field of a finding.",
            "children": [
              {
                "name": "product_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) for the product that generated a related finding."
              },
              {
                "name": "id",
                "type": "object",
                "description": "<details><summary>The product-generated identifier for a related finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
              }
            ]
          },
          {
            "name": "note",
            "type": "object",
            "description": "The rule action will update the <code>Note</code> field of a finding.",
            "children": [
              {
                "name": "text",
                "type": "string",
                "description": "The updated note text."
              },
              {
                "name": "updated_by",
                "type": "object",
                "description": "The principal that updated the note."
              }
            ]
          },
          {
            "name": "workflow",
            "type": "object",
            "description": "The rule action will update the <code>Workflow</code> field of a finding.",
            "children": [
              {
                "name": "status",
                "type": "string",
                "description": "<details><summary>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</summary>The allowed values are the following.<br />+  <code>NEW</code> - The initial state of a finding, before it is reviewed.<br />Security Hub also resets <code>WorkFlowStatus</code> from <code>NOTIFIED</code> or <code>RESOLVED</code> to <code>NEW</code> in the following cases:<br />+  The record state changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.<br />+  The compliance status changes from <code>PASSED</code> to either <code>WARNING</code>, <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.<br />+  <code>NOTIFIED</code> - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.<br />+  <code>RESOLVED</code> - The finding was reviewed and remediated and is now considered resolved.<br />+  <code>SUPPRESSED</code> - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.</details>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "criteria",
    "type": "object",
    "description": "A set of <a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html\">Security Finding Format (ASFF)</a> finding field attributes and corresponding expected values that ASH uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, ASH applies the rule action to the finding.",
    "children": [
      {
        "name": "product_arn",
        "type": "array",
        "description": "<details><summary>The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>",
        "children": [
          {
            "name": "comparison",
            "type": "string",
            "description": "<details><summary>The condition to apply to a string value when filtering Security Hub findings.</summary>To search for values that have the filter value, use one of the following comparison operators:<br />+  To search for values that include the filter value, use <code>CONTAINS</code>. For example, the filter <code>Title CONTAINS CloudFront</code> matches findings that have a <code>Title</code> that includes the string CloudFront.<br />+  To search for values that exactly match the filter value, use <code>EQUALS</code>. For example, the filter <code>AwsAccountId EQUALS 123456789012</code> only matches findings that have an account ID of <code>123456789012</code>.<br />+  To search for values that start with the filter value, use <code>PREFIX</code>. For example, the filter <code>ResourceRegion PREFIX us</code> matches findings that have a <code>ResourceRegion</code> that starts with <code>us</code>. A <code>ResourceRegion</code> that starts with a different value, such as <code>af</code>, <code>ap</code>, or <code>ca</code>, doesn't match.<br /><code>CONTAINS</code>, <code>EQUALS</code>, and <code>PREFIX</code> filters on the same field are joined by <code>OR</code>. A finding matches if it matches any one of those filters. For example, the filters <code>Title CONTAINS CloudFront OR Title CONTAINS CloudWatch</code> match a finding that includes either <code>CloudFront</code>, <code>CloudWatch</code>, or both strings in the title.<br />To search for values that don’t have the filter value, use one of the following comparison operators:<br />+  To search for values that exclude the filter value, use <code>NOT_CONTAINS</code>. For example, the filter <code>Title NOT_CONTAINS CloudFront</code> matches findings that have a <code>Title</code> that excludes the string CloudFront.<br />+  To search for values other than the filter value, use <code>NOT_EQUALS</code>. For example, the filter <code>AwsAccountId NOT_EQUALS 123456789012</code> only matches findings that have an account ID other than <code>123456789012</code>.<br />+  To search for values that don't start with the filter value, use <code>PREFIX_NOT_EQUALS</code>. For example, the filter <code>ResourceRegion PREFIX_NOT_EQUALS us</code> matches findings with a <code>ResourceRegion</code> that starts with a value other than <code>us</code>.<br /><code>NOT_CONTAINS</code>, <code>NOT_EQUALS</code>, and <code>PREFIX_NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A finding matches only if it matches all of those filters. For example, the filters <code>Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch</code> match a finding that excludes both <code>CloudFront</code> and <code>CloudWatch</code> in the title.<br />You can’t have both a <code>CONTAINS</code> filter and a <code>NOT_CONTAINS</code> filter on the same field. Similarly, you can't provide both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filter on the same field. Combining filters in this way returns an error. <code>CONTAINS</code> filters can only be used with other <code>CONTAINS</code> filters. <code>NOT_CONTAINS</code> filters can only be used with other <code>NOT_CONTAINS</code> filters.<br />You can combine <code>PREFIX</code> filters with <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filters for the same field. Security Hub first processes the <code>PREFIX</code> filters, and then the <code>NOT_EQUALS</code> or <code>PREFIX_NOT_EQUALS</code> filters.<br />For example, for the following filters, Security Hub first identifies findings that have resource types that start with either <code>AwsIam</code> or <code>AwsEc2</code>. It then excludes findings that have a resource type of <code>AwsIamPolicy</code> and findings that have a resource type of <code>AwsEc2NetworkInterface</code>.<br />+   <code>ResourceType PREFIX AwsIam</code><br />+   <code>ResourceType PREFIX AwsEc2</code><br />+   <code>ResourceType NOT_EQUALS AwsIamPolicy</code><br />+   <code>ResourceType NOT_EQUALS AwsEc2NetworkInterface</code><br /><code>CONTAINS</code> and <code>NOT_CONTAINS</code> operators can be used only with automation rules V1. <code>CONTAINS_WORD</code> operator is only supported in <code>GetFindingsV2</code>, <code>GetFindingStatisticsV2</code>, <code>GetResourcesV2</code>, and <code>GetResourceStatisticsV2</code> APIs. For more information, see <a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html\">Automation rules</a> in the <i>User Guide</i>.</details>"
          },
          {
            "name": "value",
            "type": "string",
            "description": "The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is <code>Security Hub</code>. If you provide <code>security hub</code> as the filter value, there's no match."
          }
        ]
      },
      {
        "name": "aws_account_id",
        "type": "array",
        "description": "<details><summary>The AWS-account ID in which a finding was generated.</summary>Array Members: Minimum number of 1 item. Maximum number of 100 items.</details>"
      },
      {
        "name": "id",
        "type": "array",
        "description": "<details><summary>The product-specific identifier for a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "generator_id",
        "type": "array",
        "description": "<details><summary>The identifier for the solution-specific component that generated a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 100 items.</details>"
      },
      {
        "name": "type",
        "type": "array",
        "description": "<details><summary>One or more finding types in the format of namespace/category/classifier that classify a finding. For a list of namespaces, classifiers, and categories, see <a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html\">Types taxonomy for ASFF</a> in the <i>User Guide</i>.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "first_observed_at",
        "type": "array",
        "description": "<details><summary>A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product.</summary>For more information about the validation and formatting of timestamp fields in ASHlong, see <a href=\"https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps\">Timestamps</a>.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>",
        "children": [
          {
            "name": "date_range",
            "type": "object",
            "description": "A date range for the date filter.",
            "children": [
              {
                "name": "unit",
                "type": "string",
                "description": "A date range unit for the date filter."
              },
              {
                "name": "value",
                "type": "number",
                "description": "A date range value for the date filter."
              }
            ]
          }
        ]
      },
      {
        "name": "last_observed_at",
        "type": "array",
        "description": "<details><summary>A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.</summary>For more information about the validation and formatting of timestamp fields in ASHlong, see <a href=\"https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps\">Timestamps</a>.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "created_at",
        "type": "array",
        "description": "<details><summary>A timestamp that indicates when this finding record was created.</summary>For more information about the validation and formatting of timestamp fields in ASHlong, see <a href=\"https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps\">Timestamps</a>.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "updated_at",
        "type": "array",
        "description": "<details><summary>A timestamp that indicates when the finding record was most recently updated.</summary>For more information about the validation and formatting of timestamp fields in ASHlong, see <a href=\"https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps\">Timestamps</a>.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "confidence",
        "type": "array",
        "description": "<details><summary>The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. <code>Confidence</code> is scored on a 0–100 basis using a ratio scale. A value of <code>0</code> means 0 percent confidence, and a value of <code>100</code> means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see <a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence\">Confidence</a> in the <i>User Guide</i>.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>",
        "children": [
          {
            "name": "eq",
            "type": "number",
            "description": "The equal-to condition to be applied to a single field when querying for findings."
          },
          {
            "name": "gte",
            "type": "number",
            "description": "The greater-than-equal condition to be applied to a single field when querying for findings."
          },
          {
            "name": "lte",
            "type": "number",
            "description": "The less-than-equal condition to be applied to a single field when querying for findings."
          }
        ]
      },
      {
        "name": "criticality",
        "type": "array",
        "description": "<details><summary>The level of importance that is assigned to the resources that are associated with a finding. <code>Criticality</code> is scored on a 0–100 basis, using a ratio scale that supports only full integers. A score of <code>0</code> means that the underlying resources have no criticality, and a score of <code>100</code> is reserved for the most critical resources. For more information, see <a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality\">Criticality</a> in the <i>User Guide</i>.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "title",
        "type": "array",
        "description": "<details><summary>A finding's title.</summary>Array Members: Minimum number of 1 item. Maximum number of 100 items.</details>"
      },
      {
        "name": "description",
        "type": "array",
        "description": "<details><summary>A finding's description.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "source_url",
        "type": "array",
        "description": "<details><summary>Provides a URL that links to a page about the current finding in the finding product.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "product_name",
        "type": "array",
        "description": "<details><summary>Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "company_name",
        "type": "array",
        "description": "<details><summary>The name of the company for the product that generated the finding. For control-based findings, the company is AWS.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "severity_label",
        "type": "array",
        "description": "<details><summary>The severity value of the finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "resource_type",
        "type": "array",
        "description": "<details><summary>A finding's title.</summary>Array Members: Minimum number of 1 item. Maximum number of 100 items.</details>"
      },
      {
        "name": "resource_id",
        "type": "array",
        "description": "<details><summary>The identifier for the given resource type. For AWS resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For AWS resources that lack ARNs, this is the identifier as defined by the AWS-service that created the resource. For non-AWS resources, this is a unique identifier that is associated with the resource.</summary>Array Members: Minimum number of 1 item. Maximum number of 100 items.</details>"
      },
      {
        "name": "resource_partition",
        "type": "array",
        "description": "<details><summary>The partition in which the resource that the finding pertains to is located. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "resource_region",
        "type": "array",
        "description": "<details><summary>The AWS-Region where the resource that a finding pertains to is located.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "resource_tags",
        "type": "array",
        "description": "<details><summary>A list of AWS tags associated with a resource at the time the finding was processed.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>",
        "children": [
          {
            "name": "comparison",
            "type": "string",
            "description": "<details><summary>The condition to apply to the key value when filtering Security Hub findings with a map filter.</summary>To search for values that have the filter value, use one of the following comparison operators:<br />+  To search for values that include the filter value, use <code>CONTAINS</code>. For example, for the <code>ResourceTags</code> field, the filter <code>Department CONTAINS Security</code> matches findings that include the value <code>Security</code> for the <code>Department</code> tag. In the same example, a finding with a value of <code>Security team</code> for the <code>Department</code> tag is a match.<br />+  To search for values that exactly match the filter value, use <code>EQUALS</code>. For example, for the <code>ResourceTags</code> field, the filter <code>Department EQUALS Security</code> matches findings that have the value <code>Security</code> for the <code>Department</code> tag.<br /><code>CONTAINS</code> and <code>EQUALS</code> filters on the same field are joined by <code>OR</code>. A finding matches if it matches any one of those filters. For example, the filters <code>Department CONTAINS Security OR Department CONTAINS Finance</code> match a finding that includes either <code>Security</code>, <code>Finance</code>, or both values.<br />To search for values that don't have the filter value, use one of the following comparison operators:<br />+  To search for values that exclude the filter value, use <code>NOT_CONTAINS</code>. For example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_CONTAINS Finance</code> matches findings that exclude the value <code>Finance</code> for the <code>Department</code> tag.<br />+  To search for values other than the filter value, use <code>NOT_EQUALS</code>. For example, for the <code>ResourceTags</code> field, the filter <code>Department NOT_EQUALS Finance</code> matches findings that don’t have the value <code>Finance</code> for the <code>Department</code> tag.<br /><code>NOT_CONTAINS</code> and <code>NOT_EQUALS</code> filters on the same field are joined by <code>AND</code>. A finding matches only if it matches all of those filters. For example, the filters <code>Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance</code> match a finding that excludes both the <code>Security</code> and <code>Finance</code> values.<br /><code>CONTAINS</code> filters can only be used with other <code>CONTAINS</code> filters. <code>NOT_CONTAINS</code> filters can only be used with other <code>NOT_CONTAINS</code> filters.<br />You can’t have both a <code>CONTAINS</code> filter and a <code>NOT_CONTAINS</code> filter on the same field. Similarly, you can’t have both an <code>EQUALS</code> filter and a <code>NOT_EQUALS</code> filter on the same field. Combining filters in this way returns an error.<br /><code>CONTAINS</code> and <code>NOT_CONTAINS</code> operators can be used only with automation rules. For more information, see <a href=\"https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html\">Automation rules</a> in the <i>User Guide</i>.</details>"
          },
          {
            "name": "key",
            "type": "string",
            "description": "The key of the map filter. For example, for <code>ResourceTags</code>, <code>Key</code> identifies the name of the tag. For <code>UserDefinedFields</code>, <code>Key</code> is the name of the field."
          },
          {
            "name": "value",
            "type": "string",
            "description": "The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called <code>Department</code> might be <code>Security</code>. If you provide <code>security</code> as the filter value, then there's no match."
          }
        ]
      },
      {
        "name": "resource_details_other",
        "type": "array",
        "description": "<details><summary>Custom fields and values about the resource that a finding pertains to.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "compliance_status",
        "type": "array",
        "description": "<details><summary>The result of a security check. This field is only used for findings generated from controls.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "compliance_security_control_id",
        "type": "array",
        "description": "<details><summary>The security control ID for which a finding was generated. Security control IDs are the same across standards.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "compliance_associated_standards_id",
        "type": "array",
        "description": "<details><summary>The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the <a href=\"https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html\">DescribeStandards</a> API response.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "verification_state",
        "type": "array",
        "description": "<details><summary>Provides the veracity of a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "workflow_status",
        "type": "array",
        "description": "<details><summary>Provides information about the status of the investigation into a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "record_state",
        "type": "array",
        "description": "<details><summary>Provides the current state of a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "related_findings_product_arn",
        "type": "array",
        "description": "<details><summary>The ARN for the product that generated a related finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "related_findings_id",
        "type": "array",
        "description": "<details><summary>The product-generated identifier for a related finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "note_text",
        "type": "array",
        "description": "<details><summary>The text of a user-defined note that's added to a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "note_updated_at",
        "type": "array",
        "description": "<details><summary>The timestamp of when the note was updated.</summary>For more information about the validation and formatting of timestamp fields in ASHlong, see <a href=\"https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps\">Timestamps</a>.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "note_updated_by",
        "type": "array",
        "description": "<details><summary>The principal that created a note.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      },
      {
        "name": "user_defined_fields",
        "type": "array",
        "description": "<details><summary>A list of user-defined name and value string pairs added to a finding.</summary>Array Members: Minimum number of 1 item. Maximum number of 20 items.</details>"
      }
    ]
  },
  {
    "name": "tags",
    "type": "object",
    "description": "User-defined tags associated with an automation rule."
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
    "name": "rule_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html"><code>AWS::SecurityHub::AutomationRule</code></a>.

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
    <td><code>automation_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="RuleOrder, RuleName, Description, Criteria, Actions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>automation_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>automation_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>automation_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>automation_rules</code></td>
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

Gets all properties from an individual <code>automation_rule</code>.
```sql
SELECT
  region,
  rule_arn,
  rule_status,
  rule_order,
  description,
  rule_name,
  created_at,
  updated_at,
  created_by,
  is_terminal,
  actions,
  criteria,
  tags
FROM awscc.securityhub.automation_rules
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ rule_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>automation_rules</code> in a region.
```sql
SELECT
  region,
  rule_arn
FROM awscc.securityhub.automation_rules_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>automation_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.automation_rules (
  RuleOrder,
  Description,
  RuleName,
  Actions,
  Criteria,
  region
)
SELECT
  '{{ rule_order }}',
  '{{ description }}',
  '{{ rule_name }}',
  '{{ actions }}',
  '{{ criteria }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.automation_rules (
  RuleStatus,
  RuleOrder,
  Description,
  RuleName,
  IsTerminal,
  Actions,
  Criteria,
  Tags,
  region
)
SELECT
  '{{ rule_status }}',
  '{{ rule_order }}',
  '{{ description }}',
  '{{ rule_name }}',
  '{{ is_terminal }}',
  '{{ actions }}',
  '{{ criteria }}',
  '{{ tags }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: automation_rule
    props:
      - name: rule_status
        value: '{{ rule_status }}'
      - name: rule_order
        value: '{{ rule_order }}'
      - name: description
        value: '{{ description }}'
      - name: rule_name
        value: '{{ rule_name }}'
      - name: is_terminal
        value: '{{ is_terminal }}'
      - name: actions
        value:
          - type: '{{ type }}'
            finding_fields_update:
              types:
                - '{{ types[0] }}'
              severity:
                product: null
                label: '{{ label }}'
                normalized: '{{ normalized }}'
              confidence: null
              criticality: null
              user_defined_fields: {}
              verification_state: '{{ verification_state }}'
              related_findings:
                - product_arn: '{{ product_arn }}'
                  id: null
              note:
                text: '{{ text }}'
                updated_by: null
              workflow:
                status: '{{ status }}'
      - name: criteria
        value:
          product_arn:
            - comparison: '{{ comparison }}'
              value: '{{ value }}'
          aws_account_id:
            - null
          id:
            - null
          generator_id:
            - null
          type:
            - null
          first_observed_at:
            - date_range:
                unit: '{{ unit }}'
                value: null
              end: '{{ end }}'
              start: null
          last_observed_at:
            - null
          created_at:
            - null
          updated_at:
            - null
          confidence:
            - eq: null
              gte: null
              lte: null
          criticality:
            - null
          title:
            - null
          description:
            - null
          source_url:
            - null
          product_name:
            - null
          company_name:
            - null
          severity_label:
            - null
          resource_type:
            - null
          resource_id:
            - null
          resource_partition:
            - null
          resource_region:
            - null
          resource_tags:
            - comparison: '{{ comparison }}'
              key: '{{ key }}'
              value: '{{ value }}'
          resource_details_other:
            - null
          compliance_status:
            - null
          compliance_security_control_id:
            - null
          compliance_associated_standards_id:
            - null
          verification_state:
            - null
          workflow_status:
            - null
          record_state:
            - null
          related_findings_product_arn:
            - null
          related_findings_id:
            - null
          note_text:
            - null
          note_updated_at:
            - null
          note_updated_by:
            - null
          user_defined_fields:
            - null
      - name: tags
        value: {}`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>automation_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.securityhub.automation_rules
SET PatchDocument = string('{{ {
    "RuleStatus": rule_status,
    "RuleOrder": rule_order,
    "Description": description,
    "RuleName": rule_name,
    "IsTerminal": is_terminal,
    "Actions": actions,
    "Criteria": criteria,
    "Tags": tags
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ rule_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.automation_rules
WHERE
  Identifier = '{{ rule_arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>automation_rules</code> resource, the following permissions are required:

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
securityhub:CreateAutomationRule,
securityhub:TagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="read">

```json
securityhub:ListAutomationRules,
securityhub:BatchGetAutomationRules,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="update">

```json
securityhub:BatchUpdateAutomationRules,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
securityhub:BatchDeleteAutomationRules,
securityhub:BatchGetAutomationRules
```

</TabItem>
<TabItem value="list">

```json
securityhub:ListAutomationRules,
securityhub:ListTagsForResource
```

</TabItem>
</Tabs>