---
title: configuration_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_sets
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

Creates, updates, deletes or gets a <code>configuration_set</code> resource or lists <code>configuration_sets</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_sets</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::SES::ConfigurationSet.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.configuration_sets" /></td></tr>
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
    "name": "name",
    "type": "string",
    "description": "The name of the configuration set."
  },
  {
    "name": "tracking_options",
    "type": "object",
    "description": "An object that defines the open and click tracking options for emails that you send using the configuration set.",
    "children": [
      {
        "name": "custom_redirect_domain",
        "type": "string",
        "description": "The domain to use for tracking open and click events."
      },
      {
        "name": "https_policy",
        "type": "string",
        "description": "The https policy to use for tracking open and click events."
      }
    ]
  },
  {
    "name": "delivery_options",
    "type": "object",
    "description": "An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.",
    "children": [
      {
        "name": "tls_policy",
        "type": "string",
        "description": "Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established."
      },
      {
        "name": "sending_pool_name",
        "type": "string",
        "description": "The name of the dedicated IP pool to associate with the configuration set."
      },
      {
        "name": "max_delivery_seconds",
        "type": "number",
        "description": "Specifies the maximum time until which SES will retry sending emails"
      }
    ]
  },
  {
    "name": "reputation_options",
    "type": "object",
    "description": "An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.",
    "children": [
      {
        "name": "reputation_metrics_enabled",
        "type": "boolean",
        "description": "If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set."
      }
    ]
  },
  {
    "name": "sending_options",
    "type": "object",
    "description": "An object that defines whether or not Amazon SES can send email that you send using the configuration set.",
    "children": [
      {
        "name": "sending_enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "suppression_options",
    "type": "object",
    "description": "An object that contains information about the suppression list preferences for your account.",
    "children": [
      {
        "name": "suppressed_reasons",
        "type": "array",
        "description": "A list that contains the reasons that email addresses are automatically added to the suppression list for your account."
      }
    ]
  },
  {
    "name": "vdm_options",
    "type": "object",
    "description": "An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.",
    "children": [
      {
        "name": "dashboard_options",
        "type": "object",
        "description": "Preferences regarding the Dashboard feature.",
        "children": [
          {
            "name": "engagement_metrics",
            "type": "string",
            "description": "Whether emails sent with this configuration set have engagement tracking enabled."
          }
        ]
      },
      {
        "name": "guardian_options",
        "type": "object",
        "description": "Preferences regarding the Guardian feature.",
        "children": [
          {
            "name": "optimized_shared_delivery",
            "type": "string",
            "description": "Whether emails sent with this configuration set have optimized delivery algorithm enabled."
          }
        ]
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the contact list.",
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
    "name": "name",
    "type": "string",
    "description": "The name of the configuration set."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html"><code>AWS::SES::ConfigurationSet</code></a>.

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
    <td><code>configuration_sets</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configuration_sets</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configuration_sets</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configuration_sets_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configuration_sets</code></td>
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

Gets all properties from an individual <code>configuration_set</code>.
```sql
SELECT
region,
name,
tracking_options,
delivery_options,
reputation_options,
sending_options,
suppression_options,
vdm_options,
tags
FROM awscc.ses.configuration_sets
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configuration_sets</code> in a region.
```sql
SELECT
region,
name
FROM awscc.ses.configuration_sets_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration_set</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.configuration_sets (
 Name,
 TrackingOptions,
 DeliveryOptions,
 ReputationOptions,
 SendingOptions,
 SuppressionOptions,
 VdmOptions,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ TrackingOptions }}',
 '{{ DeliveryOptions }}',
 '{{ ReputationOptions }}',
 '{{ SendingOptions }}',
 '{{ SuppressionOptions }}',
 '{{ VdmOptions }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.configuration_sets (
 Name,
 TrackingOptions,
 DeliveryOptions,
 ReputationOptions,
 SendingOptions,
 SuppressionOptions,
 VdmOptions,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ TrackingOptions }}',
 '{{ DeliveryOptions }}',
 '{{ ReputationOptions }}',
 '{{ SendingOptions }}',
 '{{ SuppressionOptions }}',
 '{{ VdmOptions }}',
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
  - name: configuration_set
    props:
      - name: Name
        value: '{{ Name }}'
      - name: TrackingOptions
        value:
          CustomRedirectDomain: '{{ CustomRedirectDomain }}'
          HttpsPolicy: '{{ HttpsPolicy }}'
      - name: DeliveryOptions
        value:
          TlsPolicy: '{{ TlsPolicy }}'
          SendingPoolName: '{{ SendingPoolName }}'
          MaxDeliverySeconds: null
      - name: ReputationOptions
        value:
          ReputationMetricsEnabled: '{{ ReputationMetricsEnabled }}'
      - name: SendingOptions
        value:
          SendingEnabled: '{{ SendingEnabled }}'
      - name: SuppressionOptions
        value:
          SuppressedReasons:
            - '{{ SuppressedReasons[0] }}'
      - name: VdmOptions
        value:
          DashboardOptions:
            EngagementMetrics: '{{ EngagementMetrics }}'
          GuardianOptions:
            OptimizedSharedDelivery: '{{ OptimizedSharedDelivery }}'
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
UPDATE awscc.ses.configuration_sets
SET data__PatchDocument = string('{{ {
    "TrackingOptions": tracking_options,
    "DeliveryOptions": delivery_options,
    "ReputationOptions": reputation_options,
    "SendingOptions": sending_options,
    "SuppressionOptions": suppression_options,
    "VdmOptions": vdm_options,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.configuration_sets
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configuration_sets</code> resource, the following permissions are required:

### Create
```json
ses:CreateConfigurationSet,
ses:UntagResource,
ses:TagResource,
ses:DescribeConfigurationSet,
ses:GetConfigurationSet
```

### Read
```json
ses:GetConfigurationSet,
ses:DescribeConfigurationSet
```

### Update
```json
ses:PutConfigurationSetTrackingOptions,
ses:PutConfigurationSetDeliveryOptions,
ses:PutConfigurationSetReputationOptions,
ses:PutConfigurationSetSendingOptions,
ses:PutConfigurationSetSuppressionOptions,
ses:PutConfigurationSetVdmOptions,
ses:DescribeConfigurationSet,
ses:UntagResource,
ses:TagResource
```

### Delete
```json
ses:DeleteConfigurationSet
```

### List
```json
ses:ListConfigurationSets
```
