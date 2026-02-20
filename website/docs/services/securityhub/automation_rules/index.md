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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::SecurityHub::AutomationRule&#96;&#96; resource specifies an automation rule based on input parameters. For more information, see &#91;Automation rules&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the &#42;User Guide&#42;.</td></tr>
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
    "description": "Whether the rule is active after it is created. If this parameter is equal to &#96;&#96;ENABLED&#96;&#96;, ASH applies the rule to findings and finding updates after the rule is created."
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
    "description": "One or more actions to update finding fields if a finding matches the conditions specified in &#96;&#96;Criteria&#96;&#96;.",
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
            "description": "The rule action updates the &#96;&#96;Types&#96;&#96; field of a finding."
          },
          {
            "name": "severity",
            "type": "object",
            "description": "The rule action will update the &#96;&#96;Severity&#96;&#96; field of a finding.",
            "children": [
              {
                "name": "product",
                "type": "number",
                "description": "The native severity as defined by the AWS service or integrated partner product that generated the finding."
              },
              {
                "name": "label",
                "type": "string",
                "description": "The severity value of the finding. The allowed values are the following.<br />+ &#96;&#96;INFORMATIONAL&#96;&#96; - No issue was found.<br />+ &#96;&#96;LOW&#96;&#96; - The issue does not require action on its own.<br />+ &#96;&#96;MEDIUM&#96;&#96; - The issue must be addressed but not urgently.<br />+ &#96;&#96;HIGH&#96;&#96; - The issue must be addressed as a priority.<br />+ &#96;&#96;CRITICAL&#96;&#96; - The issue must be remediated immediately to avoid it escalating."
              },
              {
                "name": "normalized",
                "type": "integer",
                "description": "The normalized severity for the finding. This attribute is to be deprecated in favor of &#96;&#96;Label&#96;&#96;.<br />If you provide &#96;&#96;Normalized&#96;&#96; and don't provide &#96;&#96;Label&#96;&#96;, &#96;&#96;Label&#96;&#96; is set automatically as follows.<br />+ 0 - &#96;&#96;INFORMATIONAL&#96;&#96;<br />+ 1–39 - &#96;&#96;LOW&#96;&#96;<br />+ 40–69 - &#96;&#96;MEDIUM&#96;&#96;<br />+ 70–89 - &#96;&#96;HIGH&#96;&#96;<br />+ 90–100 - &#96;&#96;CRITICAL&#96;&#96;"
              }
            ]
          },
          {
            "name": "confidence",
            "type": "integer",
            "description": "The rule action updates the &#96;&#96;Confidence&#96;&#96; field of a finding."
          },
          {
            "name": "user_defined_fields",
            "type": "object",
            "description": "The rule action updates the &#96;&#96;UserDefinedFields&#96;&#96; field of a finding."
          },
          {
            "name": "verification_state",
            "type": "string",
            "description": "The rule action updates the &#96;&#96;VerificationState&#96;&#96; field of a finding."
          },
          {
            "name": "related_findings",
            "type": "array",
            "description": "The rule action will update the &#96;&#96;RelatedFindings&#96;&#96; field of a finding.",
            "children": [
              {
                "name": "product_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) for the product that generated a related finding."
              },
              {
                "name": "id",
                "type": "object",
                "description": "The product-generated identifier for a related finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
              }
            ]
          },
          {
            "name": "note",
            "type": "object",
            "description": "The rule action will update the &#96;&#96;Note&#96;&#96; field of a finding.",
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
            "description": "The rule action will update the &#96;&#96;Workflow&#96;&#96; field of a finding.",
            "children": [
              {
                "name": "status",
                "type": "string",
                "description": "The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to &#96;&#96;SUPPRESSED&#96;&#96; or &#96;&#96;RESOLVED&#96;&#96; does not prevent a new finding for the same issue.<br />The allowed values are the following.<br />+ &#96;&#96;NEW&#96;&#96; - The initial state of a finding, before it is reviewed.<br />Security Hub also resets &#96;&#96;WorkFlowStatus&#96;&#96; from &#96;&#96;NOTIFIED&#96;&#96; or &#96;&#96;RESOLVED&#96;&#96; to &#96;&#96;NEW&#96;&#96; in the following cases:<br />+ The record state changes from &#96;&#96;ARCHIVED&#96;&#96; to &#96;&#96;ACTIVE&#96;&#96;.<br />+ The compliance status changes from &#96;&#96;PASSED&#96;&#96; to either &#96;&#96;WARNING&#96;&#96;, &#96;&#96;FAILED&#96;&#96;, or &#96;&#96;NOT&#95;AVAILABLE&#96;&#96;.<br /><br />+ &#96;&#96;NOTIFIED&#96;&#96; - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.<br />+ &#96;&#96;RESOLVED&#96;&#96; - The finding was reviewed and remediated and is now considered resolved.<br />+ &#96;&#96;SUPPRESSED&#96;&#96; - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated."
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
    "description": "A set of &#91;Security Finding Format (ASFF)&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that ASH uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, ASH applies the rule action to the finding.",
    "children": [
      {
        "name": "product_arn",
        "type": "array",
        "description": "The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items.",
        "children": [
          {
            "name": "comparison",
            "type": "string",
            "description": "The condition to apply to a string value when filtering Security Hub findings."
          },
          {
            "name": "value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "aws_account_id",
        "type": "array",
        "description": "The AWS-account ID in which a finding was generated.<br />Array Members: Minimum number of 1 item. Maximum number of 100 items."
      },
      {
        "name": "id",
        "type": "array",
        "description": "The product-specific identifier for a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "generator_id",
        "type": "array",
        "description": "The identifier for the solution-specific component that generated a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 100 items."
      },
      {
        "name": "type",
        "type": "array",
        "description": "One or more finding types in the format of namespace/category/classifier that classify a finding. For a list of namespaces, classifiers, and categories, see &#91;Types taxonomy for ASFF&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the &#42;User Guide&#42;.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "first_observed_at",
        "type": "array",
        "description": "A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product. <br />For more information about the validation and formatting of timestamp fields in ASHlong, see &#91;Timestamps&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.",
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
        "description": "A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding. <br />For more information about the validation and formatting of timestamp fields in ASHlong, see &#91;Timestamps&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "created_at",
        "type": "array",
        "description": "A timestamp that indicates when this finding record was created. <br />For more information about the validation and formatting of timestamp fields in ASHlong, see &#91;Timestamps&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "updated_at",
        "type": "array",
        "description": "A timestamp that indicates when the finding record was most recently updated. <br />For more information about the validation and formatting of timestamp fields in ASHlong, see &#91;Timestamps&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "confidence",
        "type": "array",
        "description": "The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. &#96;&#96;Confidence&#96;&#96; is scored on a 0–100 basis using a ratio scale. A value of &#96;&#96;0&#96;&#96; means 0 percent confidence, and a value of &#96;&#96;100&#96;&#96; means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see &#91;Confidence&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence) in the &#42;User Guide&#42;.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items.",
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
        "description": "The level of importance that is assigned to the resources that are associated with a finding. &#96;&#96;Criticality&#96;&#96; is scored on a 0–100 basis, using a ratio scale that supports only full integers. A score of &#96;&#96;0&#96;&#96; means that the underlying resources have no criticality, and a score of &#96;&#96;100&#96;&#96; is reserved for the most critical resources. For more information, see &#91;Criticality&#93;(https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality) in the &#42;User Guide&#42;.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "title",
        "type": "array",
        "description": "A finding's title. <br />Array Members: Minimum number of 1 item. Maximum number of 100 items."
      },
      {
        "name": "description",
        "type": "array",
        "description": "A finding's description. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "source_url",
        "type": "array",
        "description": "Provides a URL that links to a page about the current finding in the finding product. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "product_name",
        "type": "array",
        "description": "Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "company_name",
        "type": "array",
        "description": "The name of the company for the product that generated the finding. For control-based findings, the company is AWS. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "severity_label",
        "type": "array",
        "description": "The severity value of the finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "resource_type",
        "type": "array",
        "description": "A finding's title. <br />Array Members: Minimum number of 1 item. Maximum number of 100 items."
      },
      {
        "name": "resource_id",
        "type": "array",
        "description": "The identifier for the given resource type. For AWS resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For AWS resources that lack ARNs, this is the identifier as defined by the AWS-service that created the resource. For non-AWS resources, this is a unique identifier that is associated with the resource. <br />Array Members: Minimum number of 1 item. Maximum number of 100 items."
      },
      {
        "name": "resource_partition",
        "type": "array",
        "description": "The partition in which the resource that the finding pertains to is located. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "resource_region",
        "type": "array",
        "description": "The AWS-Region where the resource that a finding pertains to is located. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "resource_tags",
        "type": "array",
        "description": "A list of AWS tags associated with a resource at the time the finding was processed. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items.",
        "children": [
          {
            "name": "comparison",
            "type": "string",
            "description": "The condition to apply to the key value when filtering Security Hub findings with a map filter."
          },
          {
            "name": "key",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "resource_details_other",
        "type": "array",
        "description": "Custom fields and values about the resource that a finding pertains to. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "compliance_status",
        "type": "array",
        "description": "The result of a security check. This field is only used for findings generated from controls. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "compliance_security_control_id",
        "type": "array",
        "description": "The security control ID for which a finding was generated. Security control IDs are the same across standards.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "compliance_associated_standards_id",
        "type": "array",
        "description": "The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the &#91;DescribeStandards&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/API&#95;DescribeStandards.html) API response.<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "verification_state",
        "type": "array",
        "description": "Provides the veracity of a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "workflow_status",
        "type": "array",
        "description": "Provides information about the status of the investigation into a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "record_state",
        "type": "array",
        "description": "Provides the current state of a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "related_findings_product_arn",
        "type": "array",
        "description": "The ARN for the product that generated a related finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "related_findings_id",
        "type": "array",
        "description": "The product-generated identifier for a related finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "note_text",
        "type": "array",
        "description": "The text of a user-defined note that's added to a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "note_updated_at",
        "type": "array",
        "description": "The timestamp of when the note was updated.<br />For more information about the validation and formatting of timestamp fields in ASHlong, see &#91;Timestamps&#93;(https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps).<br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "note_updated_by",
        "type": "array",
        "description": "The principal that created a note. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
      },
      {
        "name": "user_defined_fields",
        "type": "array",
        "description": "A list of user-defined name and value string pairs added to a finding. <br />Array Members: Minimum number of 1 item. Maximum number of 20 items."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>automation_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<RuleArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>automation_rules</code> in a region.
```sql
SELECT
region,
rule_arn
FROM awscc.securityhub.automation_rules_list_only
WHERE region = 'us-east-1';
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
'{{ RuleOrder }}',
 '{{ Description }}',
 '{{ RuleName }}',
 '{{ Actions }}',
 '{{ Criteria }}',
'{{ region }}';
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
 '{{ RuleStatus }}',
 '{{ RuleOrder }}',
 '{{ Description }}',
 '{{ RuleName }}',
 '{{ IsTerminal }}',
 '{{ Actions }}',
 '{{ Criteria }}',
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
  - name: automation_rule
    props:
      - name: RuleStatus
        value: '{{ RuleStatus }}'
      - name: RuleOrder
        value: '{{ RuleOrder }}'
      - name: Description
        value: '{{ Description }}'
      - name: RuleName
        value: '{{ RuleName }}'
      - name: IsTerminal
        value: '{{ IsTerminal }}'
      - name: Actions
        value:
          - Type: '{{ Type }}'
            FindingFieldsUpdate:
              Types:
                - '{{ Types[0] }}'
              Severity:
                Product: null
                Label: '{{ Label }}'
                Normalized: '{{ Normalized }}'
              Confidence: null
              Criticality: null
              UserDefinedFields: {}
              VerificationState: '{{ VerificationState }}'
              RelatedFindings:
                - ProductArn: '{{ ProductArn }}'
                  Id: null
              Note:
                Text: '{{ Text }}'
                UpdatedBy: null
              Workflow:
                Status: '{{ Status }}'
      - name: Criteria
        value:
          ProductArn:
            - Comparison: '{{ Comparison }}'
              Value: '{{ Value }}'
          AwsAccountId:
            - null
          Id:
            - null
          GeneratorId:
            - null
          Type:
            - null
          FirstObservedAt:
            - DateRange:
                Unit: '{{ Unit }}'
                Value: null
              End: '{{ End }}'
              Start: null
          LastObservedAt:
            - null
          CreatedAt:
            - null
          UpdatedAt:
            - null
          Confidence:
            - Eq: null
              Gte: null
              Lte: null
          Criticality:
            - null
          Title:
            - null
          Description:
            - null
          SourceUrl:
            - null
          ProductName:
            - null
          CompanyName:
            - null
          SeverityLabel:
            - null
          ResourceType:
            - null
          ResourceId:
            - null
          ResourcePartition:
            - null
          ResourceRegion:
            - null
          ResourceTags:
            - Comparison: '{{ Comparison }}'
              Key: null
              Value: null
          ResourceDetailsOther:
            - null
          ComplianceStatus:
            - null
          ComplianceSecurityControlId:
            - null
          ComplianceAssociatedStandardsId:
            - null
          VerificationState:
            - null
          WorkflowStatus:
            - null
          RecordState:
            - null
          RelatedFindingsProductArn:
            - null
          RelatedFindingsId:
            - null
          NoteText:
            - null
          NoteUpdatedAt:
            - null
          NoteUpdatedBy:
            - null
          UserDefinedFields:
            - null
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.securityhub.automation_rules
SET data__PatchDocument = string('{{ {
    "RuleStatus": rule_status,
    "RuleOrder": rule_order,
    "Description": description,
    "RuleName": rule_name,
    "IsTerminal": is_terminal,
    "Actions": actions,
    "Criteria": criteria,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<RuleArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.automation_rules
WHERE data__Identifier = '<RuleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>automation_rules</code> resource, the following permissions are required:

### Create
```json
securityhub:CreateAutomationRule,
securityhub:TagResource,
securityhub:ListTagsForResource
```

### Read
```json
securityhub:ListAutomationRules,
securityhub:BatchGetAutomationRules,
securityhub:ListTagsForResource
```

### Update
```json
securityhub:BatchUpdateAutomationRules,
securityhub:TagResource,
securityhub:UntagResource,
securityhub:ListTagsForResource
```

### Delete
```json
securityhub:BatchDeleteAutomationRules,
securityhub:BatchGetAutomationRules
```

### List
```json
securityhub:ListAutomationRules,
securityhub:ListTagsForResource
```
