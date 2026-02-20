---
title: portals
hide_title: false
hide_table_of_contents: false
keywords:
  - portals
  - iotsitewise
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

Creates, updates, deletes or gets a <code>portal</code> resource or lists <code>portals</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>portals</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::Portal</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.portals" /></td></tr>
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
    "name": "portal_auth_mode",
    "type": "string",
    "description": "The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal."
  },
  {
    "name": "portal_arn",
    "type": "string",
    "description": "The ARN of the portal, which has the following format."
  },
  {
    "name": "portal_client_id",
    "type": "string",
    "description": "The AWS SSO application generated client ID (used with AWS SSO APIs)."
  },
  {
    "name": "portal_contact_email",
    "type": "string",
    "description": "The AWS administrator's contact email address."
  },
  {
    "name": "portal_description",
    "type": "string",
    "description": "A description for the portal."
  },
  {
    "name": "portal_id",
    "type": "string",
    "description": "The ID of the portal."
  },
  {
    "name": "portal_name",
    "type": "string",
    "description": "A friendly name for the portal."
  },
  {
    "name": "portal_start_url",
    "type": "string",
    "description": "The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal."
  },
  {
    "name": "portal_type",
    "type": "string",
    "description": "The type of portal"
  },
  {
    "name": "portal_type_configuration",
    "type": "object",
    "description": "Map to associate detail of configuration related with a PortalType."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf."
  },
  {
    "name": "notification_sender_email",
    "type": "string",
    "description": "The email address that sends alarm notifications."
  },
  {
    "name": "alarms",
    "type": "object",
    "description": "Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.",
    "children": [
      {
        "name": "alarm_role_arn",
        "type": "string",
        "description": "The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events."
      },
      {
        "name": "notification_lambda_arn",
        "type": "string",
        "description": "The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of key-value pairs that contain metadata for the portal.",
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
    "name": "portal_id",
    "type": "string",
    "description": "The ID of the portal."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-portal.html"><code>AWS::IoTSiteWise::Portal</code></a>.

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
    <td><code>portals</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="PortalContactEmail, PortalName, RoleArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>portals</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>portals</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>portals_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>portals</code></td>
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

Gets all properties from an individual <code>portal</code>.
```sql
SELECT
region,
portal_auth_mode,
portal_arn,
portal_client_id,
portal_contact_email,
portal_description,
portal_id,
portal_name,
portal_start_url,
portal_type,
portal_type_configuration,
role_arn,
notification_sender_email,
alarms,
tags
FROM awscc.iotsitewise.portals
WHERE region = 'us-east-1' AND data__Identifier = '<PortalId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>portals</code> in a region.
```sql
SELECT
region,
portal_id
FROM awscc.iotsitewise.portals_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>portal</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.portals (
 PortalContactEmail,
 PortalName,
 RoleArn,
 region
)
SELECT 
'{{ PortalContactEmail }}',
 '{{ PortalName }}',
 '{{ RoleArn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.portals (
 PortalAuthMode,
 PortalContactEmail,
 PortalDescription,
 PortalName,
 PortalType,
 PortalTypeConfiguration,
 RoleArn,
 NotificationSenderEmail,
 Alarms,
 Tags,
 region
)
SELECT 
 '{{ PortalAuthMode }}',
 '{{ PortalContactEmail }}',
 '{{ PortalDescription }}',
 '{{ PortalName }}',
 '{{ PortalType }}',
 '{{ PortalTypeConfiguration }}',
 '{{ RoleArn }}',
 '{{ NotificationSenderEmail }}',
 '{{ Alarms }}',
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
  - name: portal
    props:
      - name: PortalAuthMode
        value: '{{ PortalAuthMode }}'
      - name: PortalContactEmail
        value: '{{ PortalContactEmail }}'
      - name: PortalDescription
        value: '{{ PortalDescription }}'
      - name: PortalName
        value: '{{ PortalName }}'
      - name: PortalType
        value: '{{ PortalType }}'
      - name: PortalTypeConfiguration
        value: {}
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: NotificationSenderEmail
        value: '{{ NotificationSenderEmail }}'
      - name: Alarms
        value:
          AlarmRoleArn: '{{ AlarmRoleArn }}'
          NotificationLambdaArn: '{{ NotificationLambdaArn }}'
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
UPDATE awscc.iotsitewise.portals
SET data__PatchDocument = string('{{ {
    "PortalContactEmail": portal_contact_email,
    "PortalDescription": portal_description,
    "PortalName": portal_name,
    "PortalTypeConfiguration": portal_type_configuration,
    "RoleArn": role_arn,
    "NotificationSenderEmail": notification_sender_email,
    "Alarms": alarms,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<PortalId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.portals
WHERE data__Identifier = '<PortalId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>portals</code> resource, the following permissions are required:

### Create
```json
iotsitewise:CreatePortal,
iotsitewise:DescribePortal,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iam:PassRole,
sso:CreateManagedApplicationInstance,
sso:DescribeRegisteredRegions
```

### Read
```json
iotsitewise:DescribePortal,
iotsitewise:ListTagsForResource
```

### Update
```json
iotsitewise:DescribePortal,
iotsitewise:ListTagsForResource,
iotsitewise:TagResource,
iotsitewise:UpdatePortal,
iotsitewise:UntagResource,
iam:PassRole,
sso:GetManagedApplicationInstance,
sso:UpdateApplicationInstanceDisplayData
```

### Delete
```json
iotsitewise:DescribePortal,
iotsitewise:DeletePortal,
sso:DeleteManagedApplicationInstance
```

### List
```json
iotsitewise:ListPortals,
iotsitewise:ListTagsForResource
```
