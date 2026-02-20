---
title: access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_policies
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

Creates, updates, deletes or gets an <code>access_policy</code> resource or lists <code>access_policies</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>access_policies</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::IoTSiteWise::AccessPolicy</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotsitewise.access_policies" /></td></tr>
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
    "name": "access_policy_id",
    "type": "string",
    "description": "The ID of the access policy."
  },
  {
    "name": "access_policy_arn",
    "type": "string",
    "description": "The ARN of the access policy."
  },
  {
    "name": "access_policy_identity",
    "type": "object",
    "description": "The identity for this access policy. Choose either a user or a group but not both.",
    "children": [
      {
        "name": "user",
        "type": "object",
        "description": "Contains information for a user identity in an access policy.",
        "children": [
          {
            "name": "id",
            "type": "string",
            "description": "The AWS SSO ID of the user."
          }
        ]
      },
      {
        "name": "iam_user",
        "type": "object",
        "description": "Contains information for an IAM user identity in an access policy.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The ARN of the IAM user."
          }
        ]
      },
      {
        "name": "iam_role",
        "type": "object",
        "description": "Contains information for an IAM role identity in an access policy.",
        "children": [
          {
            "name": "arn",
            "type": "string",
            "description": "The ARN of the IAM role."
          }
        ]
      }
    ]
  },
  {
    "name": "access_policy_permission",
    "type": "string",
    "description": "The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER."
  },
  {
    "name": "access_policy_resource",
    "type": "object",
    "description": "The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.",
    "children": [
      {
        "name": "portal",
        "type": "object",
        "description": "Resource schema for AWS::IoTSiteWise::Portal",
        "children": [
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
          }
        ]
      },
      {
        "name": "project",
        "type": "object",
        "description": "Resource schema for AWS::IoTSiteWise::Project",
        "children": [
          {
            "name": "portal_id",
            "type": "string",
            "description": "The ID of the portal in which to create the project."
          },
          {
            "name": "project_id",
            "type": "string",
            "description": "The ID of the project."
          },
          {
            "name": "project_name",
            "type": "string",
            "description": "A friendly name for the project."
          },
          {
            "name": "project_description",
            "type": "string",
            "description": "A description for the project."
          },
          {
            "name": "project_arn",
            "type": "string",
            "description": "The ARN of the project."
          },
          {
            "name": "asset_ids",
            "type": "array",
            "description": "The IDs of the assets to be associated to the project."
          },
          {
            "name": "tags",
            "type": "array",
            "description": "A list of key-value pairs that contain metadata for the project.",
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
    "name": "access_policy_id",
    "type": "string",
    "description": "The ID of the access policy."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html"><code>AWS::IoTSiteWise::AccessPolicy</code></a>.

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
    <td><code>access_policies</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AccessPolicyIdentity, AccessPolicyPermission, AccessPolicyResource, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>access_policies</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>access_policies</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>access_policies_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>access_policies</code></td>
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

Gets all properties from an individual <code>access_policy</code>.
```sql
SELECT
region,
access_policy_id,
access_policy_arn,
access_policy_identity,
access_policy_permission,
access_policy_resource
FROM awscc.iotsitewise.access_policies
WHERE region = 'us-east-1' AND Identifier = '<AccessPolicyId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>access_policies</code> in a region.
```sql
SELECT
region,
access_policy_id
FROM awscc.iotsitewise.access_policies_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>access_policy</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotsitewise.access_policies (
 AccessPolicyIdentity,
 AccessPolicyPermission,
 AccessPolicyResource,
 region
)
SELECT 
'{{ AccessPolicyIdentity }}',
 '{{ AccessPolicyPermission }}',
 '{{ AccessPolicyResource }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotsitewise.access_policies (
 AccessPolicyIdentity,
 AccessPolicyPermission,
 AccessPolicyResource,
 region
)
SELECT 
 '{{ AccessPolicyIdentity }}',
 '{{ AccessPolicyPermission }}',
 '{{ AccessPolicyResource }}',
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
  - name: access_policy
    props:
      - name: AccessPolicyIdentity
        value:
          User:
            id: '{{ id }}'
          IamUser:
            arn: '{{ arn }}'
          IamRole:
            arn: '{{ arn }}'
      - name: AccessPolicyPermission
        value: '{{ AccessPolicyPermission }}'
      - name: AccessPolicyResource
        value:
          Portal:
            PortalAuthMode: '{{ PortalAuthMode }}'
            PortalContactEmail: '{{ PortalContactEmail }}'
            PortalDescription: '{{ PortalDescription }}'
            PortalName: '{{ PortalName }}'
            PortalType: '{{ PortalType }}'
            PortalTypeConfiguration: {}
            RoleArn: '{{ RoleArn }}'
            NotificationSenderEmail: '{{ NotificationSenderEmail }}'
            Alarms:
              AlarmRoleArn: '{{ AlarmRoleArn }}'
              NotificationLambdaArn: '{{ NotificationLambdaArn }}'
            Tags:
              - Key: '{{ Key }}'
                Value: '{{ Value }}'
          Project:
            PortalId: '{{ PortalId }}'
            ProjectName: '{{ ProjectName }}'
            ProjectDescription: '{{ ProjectDescription }}'
            AssetIds:
              - '{{ AssetIds[0] }}'
            Tags:
              - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.iotsitewise.access_policies
SET PatchDocument = string('{{ {
    "AccessPolicyIdentity": access_policy_identity,
    "AccessPolicyPermission": access_policy_permission,
    "AccessPolicyResource": access_policy_resource
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AccessPolicyId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotsitewise.access_policies
WHERE Identifier = '<AccessPolicyId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>access_policies</code> resource, the following permissions are required:

### Create
```json
iotsitewise:CreateAccessPolicy
```

### Read
```json
iotsitewise:DescribeAccessPolicy
```

### Update
```json
iotsitewise:DescribeAccessPolicy,
iotsitewise:UpdateAccessPolicy
```

### Delete
```json
iotsitewise:DescribeAccessPolicy,
iotsitewise:DeleteAccessPolicy
```

### List
```json
iotsitewise:ListAccessPolicies,
iotsitewise:ListProjects,
iotsitewise:ListPortals
```
