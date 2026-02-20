---
title: event_data_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - event_data_stores
  - cloudtrail
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

Creates, updates, deletes or gets an <code>event_data_store</code> resource or lists <code>event_data_stores</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>event_data_stores</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 7 to 2557 or 3653 days (about seven or ten years) depending on the selected BillingMode.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudtrail.event_data_stores" /></td></tr>
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
    "name": "advanced_event_selectors",
    "type": "array",
    "description": "The advanced event selectors that were used to select events for the data store.",
    "children": [
      {
        "name": "field_selectors",
        "type": "array",
        "description": "Contains all selector statements in an advanced event selector.",
        "children": [
          {
            "name": "field",
            "type": "string",
            "description": "A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN."
          },
          {
            "name": "equals",
            "type": "array",
            "description": "An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields."
          },
          {
            "name": "not_starts_with",
            "type": "array",
            "description": "An operator that excludes events that match the first few characters of the event record field specified as the value of Field."
          },
          {
            "name": "not_ends_with",
            "type": "array",
            "description": "An operator that excludes events that match the last few characters of the event record field specified as the value of Field."
          },
          {
            "name": "starts_with",
            "type": "array",
            "description": "An operator that includes events that match the first few characters of the event record field specified as the value of Field."
          },
          {
            "name": "ends_with",
            "type": "array",
            "description": "An operator that includes events that match the last few characters of the event record field specified as the value of Field."
          },
          {
            "name": "not_equals",
            "type": "array",
            "description": "An operator that excludes events that match the exact value of the event record field specified as the value of Field."
          }
        ]
      },
      {
        "name": "name",
        "type": "string",
        "description": "An optional, descriptive name for an advanced event selector, such as \"Log data events for only two S3 buckets\"."
      }
    ]
  },
  {
    "name": "created_timestamp",
    "type": "string",
    "description": "The timestamp of the event data store's creation."
  },
  {
    "name": "event_data_store_arn",
    "type": "string",
    "description": "The ARN of the event data store."
  },
  {
    "name": "federation_enabled",
    "type": "boolean",
    "description": "Indicates whether federation is enabled on an event data store."
  },
  {
    "name": "federation_role_arn",
    "type": "string",
    "description": "The ARN of the role used for event data store federation."
  },
  {
    "name": "multi_region_enabled",
    "type": "boolean",
    "description": "Indicates whether the event data store includes events from all regions, or only from the region in which it was created."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the event data store."
  },
  {
    "name": "organization_enabled",
    "type": "boolean",
    "description": "Indicates that an event data store is collecting logged events for an organization."
  },
  {
    "name": "billing_mode",
    "type": "string",
    "description": "The mode that the event data store will use to charge for event storage."
  },
  {
    "name": "retention_period",
    "type": "integer",
    "description": "The retention period, in days."
  },
  {
    "name": "status",
    "type": "string",
    "description": "The status of an event data store. Values are STARTING&#95;INGESTION, ENABLED, STOPPING&#95;INGESTION, STOPPED&#95;INGESTION and PENDING&#95;DELETION."
  },
  {
    "name": "termination_protection_enabled",
    "type": "boolean",
    "description": "Indicates whether the event data store is protected from termination."
  },
  {
    "name": "kms_key_id",
    "type": "string",
    "description": "Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "insight_selectors",
    "type": "array",
    "description": "Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store.",
    "children": [
      {
        "name": "insight_type",
        "type": "string",
        "description": "The type of insight to log on a trail."
      }
    ]
  },
  {
    "name": "insights_destination",
    "type": "string",
    "description": "Specifies the ARN of the event data store that will collect Insights events. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store"
  },
  {
    "name": "max_event_size",
    "type": "string",
    "description": "Specifies the maximum size allowed for the event. Valid values are Standard and Large. If you add ContextKeySelectors, this value must be set to Large."
  },
  {
    "name": "context_key_selectors",
    "type": "array",
    "description": "An array that enriches event records in an existing event data store by including additional information specified in individual ContexKeySelector entries. If you add ContextKeySelectors, you must set MaxEventSize to Large.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext."
      },
      {
        "name": "equals",
        "type": "array",
        "description": "An operator that includes events that match the exact value of the event record field specified in Type."
      }
    ]
  },
  {
    "name": "ingestion_enabled",
    "type": "boolean",
    "description": "Indicates whether the event data store is ingesting events."
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
    "name": "event_data_store_arn",
    "type": "string",
    "description": "The ARN of the event data store."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html"><code>AWS::CloudTrail::EventDataStore</code></a>.

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
    <td><code>event_data_stores</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code=", region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>event_data_stores</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>event_data_stores</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>event_data_stores_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>event_data_stores</code></td>
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

Gets all properties from an individual <code>event_data_store</code>.
```sql
SELECT
region,
advanced_event_selectors,
created_timestamp,
event_data_store_arn,
federation_enabled,
federation_role_arn,
multi_region_enabled,
name,
organization_enabled,
billing_mode,
retention_period,
status,
termination_protection_enabled,
updated_timestamp,
kms_key_id,
tags,
insight_selectors,
insights_destination,
max_event_size,
context_key_selectors,
ingestion_enabled
FROM awscc.cloudtrail.event_data_stores
WHERE region = 'us-east-1' AND Identifier = '<EventDataStoreArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>event_data_stores</code> in a region.
```sql
SELECT
region,
event_data_store_arn
FROM awscc.cloudtrail.event_data_stores_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>event_data_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudtrail.event_data_stores (
 ,
 region
)
SELECT 
'{{  }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudtrail.event_data_stores (
 AdvancedEventSelectors,
 FederationEnabled,
 FederationRoleArn,
 MultiRegionEnabled,
 Name,
 OrganizationEnabled,
 BillingMode,
 RetentionPeriod,
 TerminationProtectionEnabled,
 KmsKeyId,
 Tags,
 InsightSelectors,
 InsightsDestination,
 MaxEventSize,
 ContextKeySelectors,
 IngestionEnabled,
 region
)
SELECT 
 '{{ AdvancedEventSelectors }}',
 '{{ FederationEnabled }}',
 '{{ FederationRoleArn }}',
 '{{ MultiRegionEnabled }}',
 '{{ Name }}',
 '{{ OrganizationEnabled }}',
 '{{ BillingMode }}',
 '{{ RetentionPeriod }}',
 '{{ TerminationProtectionEnabled }}',
 '{{ KmsKeyId }}',
 '{{ Tags }}',
 '{{ InsightSelectors }}',
 '{{ InsightsDestination }}',
 '{{ MaxEventSize }}',
 '{{ ContextKeySelectors }}',
 '{{ IngestionEnabled }}',
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
  - name: event_data_store
    props:
      - name: AdvancedEventSelectors
        value:
          - FieldSelectors:
              - Field: '{{ Field }}'
                Equals:
                  - '{{ Equals[0] }}'
                NotStartsWith:
                  - '{{ NotStartsWith[0] }}'
                NotEndsWith:
                  - '{{ NotEndsWith[0] }}'
                StartsWith:
                  - '{{ StartsWith[0] }}'
                EndsWith:
                  - '{{ EndsWith[0] }}'
                NotEquals:
                  - '{{ NotEquals[0] }}'
            Name: '{{ Name }}'
      - name: FederationEnabled
        value: '{{ FederationEnabled }}'
      - name: FederationRoleArn
        value: '{{ FederationRoleArn }}'
      - name: MultiRegionEnabled
        value: '{{ MultiRegionEnabled }}'
      - name: Name
        value: '{{ Name }}'
      - name: OrganizationEnabled
        value: '{{ OrganizationEnabled }}'
      - name: BillingMode
        value: '{{ BillingMode }}'
      - name: RetentionPeriod
        value: '{{ RetentionPeriod }}'
      - name: TerminationProtectionEnabled
        value: '{{ TerminationProtectionEnabled }}'
      - name: KmsKeyId
        value: '{{ KmsKeyId }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: InsightSelectors
        value:
          - InsightType: '{{ InsightType }}'
      - name: InsightsDestination
        value: '{{ InsightsDestination }}'
      - name: MaxEventSize
        value: '{{ MaxEventSize }}'
      - name: ContextKeySelectors
        value:
          - Type: '{{ Type }}'
            Equals:
              - '{{ Equals[0] }}'
      - name: IngestionEnabled
        value: '{{ IngestionEnabled }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>event_data_store</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.cloudtrail.event_data_stores
SET PatchDocument = string('{{ {
    "AdvancedEventSelectors": advanced_event_selectors,
    "FederationEnabled": federation_enabled,
    "FederationRoleArn": federation_role_arn,
    "MultiRegionEnabled": multi_region_enabled,
    "Name": name,
    "OrganizationEnabled": organization_enabled,
    "BillingMode": billing_mode,
    "RetentionPeriod": retention_period,
    "TerminationProtectionEnabled": termination_protection_enabled,
    "KmsKeyId": kms_key_id,
    "Tags": tags,
    "InsightSelectors": insight_selectors,
    "InsightsDestination": insights_destination,
    "MaxEventSize": max_event_size,
    "ContextKeySelectors": context_key_selectors,
    "IngestionEnabled": ingestion_enabled
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<EventDataStoreArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cloudtrail.event_data_stores
WHERE Identifier = '<EventDataStoreArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>event_data_stores</code> resource, the following permissions are required:

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
CloudTrail:CreateEventDataStore,
CloudTrail:AddTags,
CloudTrail:PutInsightSelectors,
CloudTrail:EnableFederation,
CloudTrail:GetEventDataStore,
CloudTrail:PutEventConfiguration,
iam:PassRole,
iam:GetRole,
iam:CreateServiceLinkedRole,
organizations:DescribeOrganization,
organizations:ListAWSServiceAccessForOrganization,
kms:GenerateDataKey,
kms:Decrypt,
glue:CreateDatabase,
glue:CreateTable,
glue:PassConnection,
lakeformation:RegisterResource
```

</TabItem>
<TabItem value="read">

```json
CloudTrail:GetEventDataStore,
CloudTrail:ListEventDataStores,
CloudTrail:GetInsightSelectors,
CloudTrail:GetEventConfiguration,
CloudTrail:ListTags
```

</TabItem>
<TabItem value="update">

```json
CloudTrail:UpdateEventDataStore,
CloudTrail:RestoreEventDataStore,
CloudTrail:AddTags,
CloudTrail:RemoveTags,
CloudTrail:StartEventDataStoreIngestion,
CloudTrail:StopEventDataStoreIngestion,
CloudTrail:GetEventDataStore,
CloudTrail:PutInsightSelectors,
CloudTrail:GetInsightSelectors,
CloudTrail:EnableFederation,
CloudTrail:DisableFederation,
CloudTrail:PutEventConfiguration,
iam:PassRole,
iam:GetRole,
iam:CreateServiceLinkedRole,
organizations:DescribeOrganization,
organizations:ListAWSServiceAccessForOrganization,
glue:CreateDatabase,
glue:CreateTable,
glue:PassConnection,
lakeformation:RegisterResource,
glue:DeleteTable,
lakeformation:DeregisterResource,
kms:DescribeKey
```

</TabItem>
<TabItem value="delete">

```json
CloudTrail:DeleteEventDataStore,
CloudTrail:GetEventDataStore,
CloudTrail:DisableFederation,
glue:DeleteTable,
lakeformation:DeregisterResource
```

</TabItem>
<TabItem value="list">

```json
CloudTrail:ListEventDataStores,
CloudTrail:GetEventDataStore,
CloudTrail:GetInsightSelectors,
CloudTrail:ListTags
```

</TabItem>
</Tabs>