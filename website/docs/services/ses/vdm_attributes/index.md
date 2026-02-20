---
title: vdm_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - vdm_attributes
  - ses
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

Creates, updates, deletes or gets a <code>vdm_attribute</code> resource or lists <code>vdm_attributes</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>vdm_attributes</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SES::VdmAttributes</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.vdm_attributes" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "vdm_attributes_resource_id",
    "type": "string",
    "description": "Unique identifier for this resource"
  },
  {
    "name": "dashboard_attributes",
    "type": "object",
    "description": "Preferences regarding the Dashboard feature.",
    "children": [
      {
        "name": "engagement_metrics",
        "type": "string",
        "description": "Whether emails sent from this account have engagement tracking enabled."
      }
    ]
  },
  {
    "name": "guardian_attributes",
    "type": "object",
    "description": "Preferences regarding the Guardian feature.",
    "children": [
      {
        "name": "optimized_shared_delivery",
        "type": "string",
        "description": "Whether emails sent from this account have optimized delivery algorithm enabled."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattribute.html"><code>AWS::SES::VdmAttributes</code></a>.

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
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>vdm_attribute</code>.
```sql
SELECT
region,
vdm_attributes_resource_id,
dashboard_attributes,
guardian_attributes
FROM awscc.ses.vdm_attributes
WHERE region = 'us-east-1' AND Identifier = '<VdmAttributesResourceId>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>vdm_attribute</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.vdm_attributes (
 DashboardAttributes,
 GuardianAttributes,
 region
)
SELECT 
'{{ DashboardAttributes }}',
 '{{ GuardianAttributes }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.vdm_attributes (
 DashboardAttributes,
 GuardianAttributes,
 region
)
SELECT 
 '{{ DashboardAttributes }}',
 '{{ GuardianAttributes }}',
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
  - name: vdm_attribute
    props:
      - name: DashboardAttributes
        value:
          EngagementMetrics: '{{ EngagementMetrics }}'
      - name: GuardianAttributes
        value:
          OptimizedSharedDelivery: '{{ OptimizedSharedDelivery }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ses.vdm_attributes
SET PatchDocument = string('{{ {
    "DashboardAttributes": dashboard_attributes,
    "GuardianAttributes": guardian_attributes
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<VdmAttributesResourceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.vdm_attributes
WHERE Identifier = '<VdmAttributesResourceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>vdm_attributes</code> resource, the following permissions are required:

### Create
```json
ses:PutAccountVdmAttributes,
ses:GetAccount
```

### Read
```json
ses:GetAccount
```

### Update
```json
ses:PutAccountVdmAttributes,
ses:GetAccount
```

### Delete
```json
ses:PutAccountVdmAttributes,
ses:GetAccount
```
