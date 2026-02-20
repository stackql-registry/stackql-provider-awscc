---
title: organization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_configurations
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

Creates, updates, deletes or gets an <code>organization_configuration</code> resource or lists <code>organization_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>organization_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::SecurityHub::OrganizationConfiguration resource represents the configuration of your organization in Security Hub. Only the Security Hub administrator account can create Organization Configuration resource in each region and can opt-in to Central Configuration only in the aggregation region of FindingAggregator.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.securityhub.organization_configurations" /></td></tr>
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
    "name": "auto_enable",
    "type": "boolean",
    "description": "Whether to automatically enable Security Hub in new member accounts when they join the organization."
  },
  {
    "name": "auto_enable_standards",
    "type": "string",
    "description": "Whether to automatically enable Security Hub default standards in new member accounts when they join the organization."
  },
  {
    "name": "configuration_type",
    "type": "string",
    "description": "Indicates whether the organization uses local or central configuration."
  },
  {
    "name": "status",
    "type": "string",
    "description": "Describes whether central configuration could be enabled as the ConfigurationType for the organization."
  },
  {
    "name": "status_message",
    "type": "string",
    "description": "Provides an explanation if the value of Status is equal to FAILED when ConfigurationType is equal to CENTRAL."
  },
  {
    "name": "member_account_limit_reached",
    "type": "boolean",
    "description": "Whether the maximum number of allowed member accounts are already associated with the Security Hub administrator account."
  },
  {
    "name": "organization_configuration_identifier",
    "type": "string",
    "description": "The identifier of the OrganizationConfiguration being created and assigned as the unique identifier."
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
    "name": "organization_configuration_identifier",
    "type": "string",
    "description": "The identifier of the OrganizationConfiguration being created and assigned as the unique identifier."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html"><code>AWS::SecurityHub::OrganizationConfiguration</code></a>.

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
    <td><code>organization_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AutoEnable, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>organization_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>organization_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>organization_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>organization_configurations</code></td>
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

Gets all properties from an individual <code>organization_configuration</code>.
```sql
SELECT
region,
auto_enable,
auto_enable_standards,
configuration_type,
status,
status_message,
member_account_limit_reached,
organization_configuration_identifier
FROM awscc.securityhub.organization_configurations
WHERE region = 'us-east-1' AND Identifier = '<OrganizationConfigurationIdentifier>';
```
</TabItem>
<TabItem value="list">

Lists all <code>organization_configurations</code> in a region.
```sql
SELECT
region,
organization_configuration_identifier
FROM awscc.securityhub.organization_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>organization_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.securityhub.organization_configurations (
 AutoEnable,
 region
)
SELECT 
'{{ AutoEnable }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.securityhub.organization_configurations (
 AutoEnable,
 AutoEnableStandards,
 ConfigurationType,
 region
)
SELECT 
 '{{ AutoEnable }}',
 '{{ AutoEnableStandards }}',
 '{{ ConfigurationType }}',
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
  - name: organization_configuration
    props:
      - name: AutoEnable
        value: '{{ AutoEnable }}'
      - name: AutoEnableStandards
        value: '{{ AutoEnableStandards }}'
      - name: ConfigurationType
        value: '{{ ConfigurationType }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.securityhub.organization_configurations
SET PatchDocument = string('{{ {
    "AutoEnable": auto_enable,
    "AutoEnableStandards": auto_enable_standards,
    "ConfigurationType": configuration_type
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<OrganizationConfigurationIdentifier>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.securityhub.organization_configurations
WHERE Identifier = '<OrganizationConfigurationIdentifier>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>organization_configurations</code> resource, the following permissions are required:

### Create
```json
securityhub:UpdateOrganizationConfiguration,
securityhub:DescribeOrganizationConfiguration,
organizations:DescribeOrganization
```

### Read
```json
securityhub:DescribeOrganizationConfiguration
```

### Update
```json
securityhub:UpdateOrganizationConfiguration,
securityhub:DescribeOrganizationConfiguration,
organizations:DescribeOrganization
```

### Delete
```json
securityhub:UpdateOrganizationConfiguration,
securityhub:DescribeOrganizationConfiguration,
securityhub:ListFindingAggregators,
organizations:DescribeOrganization
```

### List
```json
securityhub:DescribeOrganizationConfiguration
```
