---
title: organization_telemetry_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_telemetry_rules
  - observabilityadmin
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

Creates, updates, deletes or gets an <code>organization_telemetry_rule</code> resource or lists <code>organization_telemetry_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organization_telemetry_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::ObservabilityAdmin::OrganizationTelemetryRule resource defines a CloudWatch Observability Admin Organization Telemetry Rule.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.observabilityadmin.organization_telemetry_rules" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="rule_name" /></td><td><code>string</code></td><td>The name of the organization telemetry rule</td></tr>
<tr><td><CopyableCode code="rule" /></td><td><code>object</code></td><td>The AWS::ObservabilityAdmin::TelemetryRule resource defines a CloudWatch Observability Admin Telemetry Rule.</td></tr>
<tr><td><CopyableCode code="rule_arn" /></td><td><code>string</code></td><td>The arn of the organization telemetry rule</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td>An array of key-value pairs to apply to this resource</td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-organizationtelemetryrule.html"><code>AWS::ObservabilityAdmin::OrganizationTelemetryRule</code></a>.

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
    <td><CopyableCode code="RuleName, Rule, region" /></td>
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
Gets all <code>organization_telemetry_rules</code> in a region.
```sql
SELECT
region,
rule_name,
rule,
rule_arn,
tags
FROM awscc.observabilityadmin.organization_telemetry_rules
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>organization_telemetry_rule</code>.
```sql
SELECT
region,
rule_name,
rule,
rule_arn,
tags
FROM awscc.observabilityadmin.organization_telemetry_rules
WHERE region = 'us-east-1' AND data__Identifier = '<RuleArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>organization_telemetry_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.observabilityadmin.organization_telemetry_rules (
 RuleName,
 Rule,
 region
)
SELECT 
'{{ RuleName }}',
 '{{ Rule }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.observabilityadmin.organization_telemetry_rules (
 RuleName,
 Rule,
 Tags,
 region
)
SELECT 
 '{{ RuleName }}',
 '{{ Rule }}',
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
  - name: organization_telemetry_rule
    props:
      - name: RuleName
        value: '{{ RuleName }}'
      - name: Rule
        value:
          RuleName: '{{ RuleName }}'
          Rule: null
          Tags:
            - Key: '{{ Key }}'
              Value: '{{ Value }}'
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.observabilityadmin.organization_telemetry_rules
WHERE data__Identifier = '<RuleArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>organization_telemetry_rules</code> resource, the following permissions are required:

### Create
```json
observabilityadmin:CreateTelemetryRuleForOrganization,
observabilityadmin:GetTelemetryRuleForOrganization,
observabilityadmin:TagResource,
observabilityadmin:ListTagsForResource,
observabilityadmin:GetTelemetryEvaluationStatusForOrganization,
organizations:ListDelegatedAdministrators,
iam:CreateServiceLinkedRole
```

### Read
```json
observabilityadmin:GetTelemetryRuleForOrganization,
observabilityadmin:ListTagsForResource,
observabilityadmin:GetTelemetryEvaluationStatusForOrganization,
organizations:ListDelegatedAdministrators
```

### Update
```json
observabilityadmin:UpdateTelemetryRuleForOrganization,
observabilityadmin:GetTelemetryRuleForOrganization,
observabilityadmin:TagResource,
observabilityadmin:UntagResource,
observabilityadmin:ListTagsForResource,
observabilityadmin:GetTelemetryEvaluationStatusForOrganization,
organizations:ListDelegatedAdministrators
```

### Delete
```json
observabilityadmin:DeleteTelemetryRuleForOrganization,
observabilityadmin:GetTelemetryEvaluationStatusForOrganization,
organizations:ListDelegatedAdministrators
```

### List
```json
observabilityadmin:ListTelemetryRulesForOrganization,
observabilityadmin:GetTelemetryEvaluationStatusForOrganization,
organizations:ListDelegatedAdministrators
```
