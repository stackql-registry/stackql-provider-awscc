---
title: configuration_set_event_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_set_event_destinations
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

Creates, updates, deletes or gets a <code>configuration_set_event_destination</code> resource or lists <code>configuration_set_event_destinations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_set_event_destinations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SES::ConfigurationSetEventDestination</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.configuration_set_event_destinations" /></td></tr>
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
    "description": ""
  },
  {
    "name": "configuration_set_name",
    "type": "string",
    "description": "The name of the configuration set that contains the event destination."
  },
  {
    "name": "event_destination",
    "type": "object",
    "description": "The event destination object.",
    "children": [
      {
        "name": "name",
        "type": "string",
        "description": "The name of the event destination set."
      },
      {
        "name": "enabled",
        "type": "boolean",
        "description": "Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false."
      },
      {
        "name": "matching_event_types",
        "type": "array",
        "description": "The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription."
      },
      {
        "name": "cloud_watch_destination",
        "type": "object",
        "description": "An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.",
        "children": [
          {
            "name": "dimension_configurations",
            "type": "array",
            "description": "A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.",
            "children": [
              {
                "name": "dimension_value_source",
                "type": "string",
                "description": "The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag."
              },
              {
                "name": "default_dimension_value",
                "type": "string",
                "description": "The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email."
              },
              {
                "name": "dimension_name",
                "type": "string",
                "description": "The name of an Amazon CloudWatch dimension associated with an email sending metric."
              }
            ]
          }
        ]
      },
      {
        "name": "kinesis_firehose_destination",
        "type": "object",
        "description": "An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.",
        "children": [
          {
            "name": "iam_role_arn",
            "type": "string",
            "description": "The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream."
          },
          {
            "name": "delivery_stream_arn",
            "type": "string",
            "description": "The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to."
          }
        ]
      },
      {
        "name": "sns_destination",
        "type": "object",
        "description": "An object that contains SNS topic ARN associated event destination.",
        "children": [
          {
            "name": "topic_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "event_bridge_destination",
        "type": "object",
        "description": "An object that contains Event bus ARN associated with the event bridge destination.",
        "children": [
          {
            "name": "event_bus_arn",
            "type": "string",
            "description": ""
          }
        ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html"><code>AWS::SES::ConfigurationSetEventDestination</code></a>.

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
    <td><code>configuration_set_event_destinations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConfigurationSetName, EventDestination, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configuration_set_event_destinations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configuration_set_event_destinations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configuration_set_event_destinations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configuration_set_event_destinations</code></td>
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

Gets all properties from an individual <code>configuration_set_event_destination</code>.
```sql
SELECT
region,
id,
configuration_set_name,
event_destination
FROM awscc.ses.configuration_set_event_destinations
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>configuration_set_event_destinations</code> in a region.
```sql
SELECT
region,
id
FROM awscc.ses.configuration_set_event_destinations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration_set_event_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.configuration_set_event_destinations (
 ConfigurationSetName,
 EventDestination,
 region
)
SELECT
'{{ configuration_set_name }}',
 '{{ event_destination }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.configuration_set_event_destinations (
 ConfigurationSetName,
 EventDestination,
 region
)
SELECT
 '{{ configuration_set_name }}',
 '{{ event_destination }}',
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
  - name: configuration_set_event_destination
    props:
      - name: configuration_set_name
        value: '{{ configuration_set_name }}'
      - name: event_destination
        value:
          name: '{{ name }}'
          enabled: '{{ enabled }}'
          matching_event_types:
            - '{{ matching_event_types[0] }}'
          cloud_watch_destination:
            dimension_configurations:
              - dimension_value_source: '{{ dimension_value_source }}'
                default_dimension_value: '{{ default_dimension_value }}'
                dimension_name: '{{ dimension_name }}'
          kinesis_firehose_destination:
            iam_role_arn: '{{ iam_role_arn }}'
            delivery_stream_arn: '{{ delivery_stream_arn }}'
          sns_destination:
            topic_arn: '{{ topic_arn }}'
          event_bridge_destination:
            event_bus_arn: '{{ event_bus_arn }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>configuration_set_event_destination</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ses.configuration_set_event_destinations
SET PatchDocument = string('{{ {
    "EventDestination": event_destination
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.configuration_set_event_destinations
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configuration_set_event_destinations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
ses:CreateConfigurationSetEventDestination,
ses:GetConfigurationSetEventDestinations,
ses:DescribeConfigurationSet
```

</TabItem>
<TabItem value="update">

```json
ses:UpdateConfigurationSetEventDestination,
ses:GetConfigurationSetEventDestinations
```

</TabItem>
<TabItem value="delete">

```json
ses:DeleteConfigurationSetEventDestination
```

</TabItem>
<TabItem value="read">

```json
ses:GetConfigurationSetEventDestinations,
ses:DescribeConfigurationSet
```

</TabItem>
<TabItem value="list">

```json
ses:GetConfigurationSetEventDestinations,
ses:DescribeConfigurationSet
```

</TabItem>
</Tabs>