---
title: patch_baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - patch_baselines
  - ssm
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

Creates, updates, deletes or gets a <code>patch_baseline</code> resource or lists <code>patch_baselines</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>patch_baselines</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SSM::PatchBaseline</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ssm.patch_baselines" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The ID of the patch baseline."
  },
  {
    "name": "default_baseline",
    "type": "boolean",
    "description": "Set the baseline as default baseline. Only registering to default patch baseline is allowed."
  },
  {
    "name": "operating_system",
    "type": "string",
    "description": "Defines the operating system the patch baseline applies to. The Default value is WINDOWS."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the patch baseline."
  },
  {
    "name": "approval_rules",
    "type": "object",
    "description": "A set of rules defining the approval rules for a patch baseline.",
    "children": [
      {
        "name": "patch_rules",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "approve_until_date",
            "type": "string",
            "description": ""
          },
          {
            "name": "enable_non_security",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "patch_filter_group",
            "type": "object",
            "description": "The patch filter group that defines the criteria for the rule.",
            "children": [
              {
                "name": "patch_filters",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "approve_after_days",
            "type": "integer",
            "description": ""
          },
          {
            "name": "compliance_level",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "sources",
    "type": "array",
    "description": "Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.",
    "children": [
      {
        "name": "products",
        "type": "array",
        "description": ""
      },
      {
        "name": "configuration",
        "type": "string",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the patch baseline."
  },
  {
    "name": "rejected_patches",
    "type": "array",
    "description": "A list of explicitly rejected patches for the baseline."
  },
  {
    "name": "approved_patches",
    "type": "array",
    "description": "A list of explicitly approved patches for the baseline."
  },
  {
    "name": "rejected_patches_action",
    "type": "string",
    "description": "The action for Patch Manager to take on patches included in the RejectedPackages list."
  },
  {
    "name": "patch_groups",
    "type": "array",
    "description": "PatchGroups is used to associate instances with a specific patch baseline"
  },
  {
    "name": "approved_patches_compliance_level",
    "type": "string",
    "description": "Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED."
  },
  {
    "name": "approved_patches_enable_non_security",
    "type": "boolean",
    "description": "Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only."
  },
  {
    "name": "global_filters",
    "type": "object",
    "description": "A set of global filters used to include patches in the baseline.",
    "children": [
      {
        "name": "patch_filters",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": ""
          },
          {
            "name": "key",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "available_security_updates_compliance_status",
    "type": "string",
    "description": "The compliance status for vendor recommended security updates that are not approved by this patch baseline."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": "The ID of the patch baseline."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html"><code>AWS::SSM::PatchBaseline</code></a>.

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
    <td><code>patch_baselines</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>patch_baselines</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>patch_baselines</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>patch_baselines_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>patch_baselines</code></td>
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

Gets all properties from an individual <code>patch_baseline</code>.
```sql
SELECT
region,
id,
default_baseline,
operating_system,
description,
approval_rules,
sources,
name,
rejected_patches,
approved_patches,
rejected_patches_action,
patch_groups,
approved_patches_compliance_level,
approved_patches_enable_non_security,
global_filters,
available_security_updates_compliance_status,
tags
FROM awscc.ssm.patch_baselines
WHERE region = 'us-east-1' AND Identifier = '<Id>';
```
</TabItem>
<TabItem value="list">

Lists all <code>patch_baselines</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ssm.patch_baselines_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>patch_baseline</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ssm.patch_baselines (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ssm.patch_baselines (
 DefaultBaseline,
 OperatingSystem,
 Description,
 ApprovalRules,
 Sources,
 Name,
 RejectedPatches,
 ApprovedPatches,
 RejectedPatchesAction,
 PatchGroups,
 ApprovedPatchesComplianceLevel,
 ApprovedPatchesEnableNonSecurity,
 GlobalFilters,
 AvailableSecurityUpdatesComplianceStatus,
 Tags,
 region
)
SELECT 
 '{{ DefaultBaseline }}',
 '{{ OperatingSystem }}',
 '{{ Description }}',
 '{{ ApprovalRules }}',
 '{{ Sources }}',
 '{{ Name }}',
 '{{ RejectedPatches }}',
 '{{ ApprovedPatches }}',
 '{{ RejectedPatchesAction }}',
 '{{ PatchGroups }}',
 '{{ ApprovedPatchesComplianceLevel }}',
 '{{ ApprovedPatchesEnableNonSecurity }}',
 '{{ GlobalFilters }}',
 '{{ AvailableSecurityUpdatesComplianceStatus }}',
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
  - name: patch_baseline
    props:
      - name: DefaultBaseline
        value: '{{ DefaultBaseline }}'
      - name: OperatingSystem
        value: '{{ OperatingSystem }}'
      - name: Description
        value: '{{ Description }}'
      - name: ApprovalRules
        value:
          PatchRules:
            - ApproveUntilDate: '{{ ApproveUntilDate }}'
              EnableNonSecurity: '{{ EnableNonSecurity }}'
              PatchFilterGroup:
                PatchFilters:
                  - Values:
                      - '{{ Values[0] }}'
                    Key: '{{ Key }}'
              ApproveAfterDays: '{{ ApproveAfterDays }}'
              ComplianceLevel: '{{ ComplianceLevel }}'
      - name: Sources
        value:
          - Products:
              - '{{ Products[0] }}'
            Configuration: '{{ Configuration }}'
            Name: '{{ Name }}'
      - name: Name
        value: '{{ Name }}'
      - name: RejectedPatches
        value:
          - '{{ RejectedPatches[0] }}'
      - name: ApprovedPatches
        value:
          - '{{ ApprovedPatches[0] }}'
      - name: RejectedPatchesAction
        value: '{{ RejectedPatchesAction }}'
      - name: PatchGroups
        value:
          - '{{ PatchGroups[0] }}'
      - name: ApprovedPatchesComplianceLevel
        value: '{{ ApprovedPatchesComplianceLevel }}'
      - name: ApprovedPatchesEnableNonSecurity
        value: '{{ ApprovedPatchesEnableNonSecurity }}'
      - name: GlobalFilters
        value: null
      - name: AvailableSecurityUpdatesComplianceStatus
        value: '{{ AvailableSecurityUpdatesComplianceStatus }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ssm.patch_baselines
SET PatchDocument = string('{{ {
    "DefaultBaseline": default_baseline,
    "Description": description,
    "ApprovalRules": approval_rules,
    "Sources": sources,
    "Name": name,
    "RejectedPatches": rejected_patches,
    "ApprovedPatches": approved_patches,
    "RejectedPatchesAction": rejected_patches_action,
    "PatchGroups": patch_groups,
    "ApprovedPatchesComplianceLevel": approved_patches_compliance_level,
    "ApprovedPatchesEnableNonSecurity": approved_patches_enable_non_security,
    "GlobalFilters": global_filters,
    "AvailableSecurityUpdatesComplianceStatus": available_security_updates_compliance_status,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Id>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ssm.patch_baselines
WHERE Identifier = '<Id>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>patch_baselines</code> resource, the following permissions are required:

### Create
```json
ssm:CreatePatchBaseline,
ssm:RegisterPatchBaselineForPatchGroup,
ssm:AddTagsToResource,
ssm:RemoveTagsFromResource,
ssm:ListTagsForResource,
ssm:GetDefaultPatchBaseline,
ssm:RegisterDefaultPatchBaseline
```

### Delete
```json
ssm:DeletePatchBaseline,
ssm:GetPatchBaseline,
ssm:DeregisterPatchBaselineForPatchGroup
```

### List
```json
ssm:DescribePatchBaselines,
ssm:GetDefaultPatchBaseline,
ssm:GetPatchBaseline,
ssm:ListTagsForResource
```

### Read
```json
ssm:GetDefaultPatchBaseline,
ssm:GetPatchBaseline,
ssm:ListTagsForResource
```

### Update
```json
ssm:UpdatePatchBaseline,
ssm:DeregisterPatchBaselineForPatchGroup,
ssm:AddTagsToResource,
ssm:RemoveTagsFromResource,
ssm:ListTagsForResource,
ssm:GetDefaultPatchBaseline,
ssm:RegisterDefaultPatchBaseline
```
