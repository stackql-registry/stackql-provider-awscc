---
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - workspacesthinclient
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

Creates, updates, deletes or gets an <code>environment</code> resource or lists <code>environments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>environments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource type definition for AWS::WorkSpacesThinClient::Environment.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.workspacesthinclient.environments" /></td></tr>
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
    "description": "Unique identifier of the environment."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the environment."
  },
  {
    "name": "desktop_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0."
  },
  {
    "name": "desktop_endpoint",
    "type": "string",
    "description": "The URL for the identity provider login (only for environments that use AppStream 2.0)."
  },
  {
    "name": "desktop_type",
    "type": "string",
    "description": "The type of VDI."
  },
  {
    "name": "activation_code",
    "type": "string",
    "description": "Activation code for devices associated with environment."
  },
  {
    "name": "registered_devices_count",
    "type": "integer",
    "description": "Number of devices registered to the environment."
  },
  {
    "name": "software_set_update_schedule",
    "type": "string",
    "description": "An option to define if software updates should be applied within a maintenance window."
  },
  {
    "name": "maintenance_window",
    "type": "object",
    "description": "A specification for a time window to apply software updates.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of maintenance window."
      },
      {
        "name": "start_time_hour",
        "type": "integer",
        "description": "The hour start time of maintenance window."
      },
      {
        "name": "start_time_minute",
        "type": "integer",
        "description": "The minute start time of maintenance window."
      },
      {
        "name": "days_of_the_week",
        "type": "array",
        "description": "The date of maintenance window."
      },
      {
        "name": "apply_time_of",
        "type": "string",
        "description": "The desired time zone maintenance window."
      }
    ]
  },
  {
    "name": "software_set_update_mode",
    "type": "string",
    "description": "An option to define which software updates to apply."
  },
  {
    "name": "desired_software_set_id",
    "type": "string",
    "description": "The ID of the software set to apply."
  },
  {
    "name": "pending_software_set_id",
    "type": "string",
    "description": "The ID of the software set that is pending to be installed."
  },
  {
    "name": "pending_software_set_version",
    "type": "string",
    "description": "The version of the software set that is pending to be installed."
  },
  {
    "name": "software_set_compliance_status",
    "type": "string",
    "description": "Describes if the software currently installed on all devices in the environment is a supported version."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The timestamp in unix epoch format when environment was created."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The timestamp in unix epoch format when environment was last updated."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "The environment ARN."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to this resource.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "device_creation_tags",
    "type": "array",
    "description": "An array of key-value pairs to apply to the newly created devices for this environment."
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
    "description": "Unique identifier of the environment."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html"><code>AWS::WorkSpacesThinClient::Environment</code></a>.

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
    <td><code>environments</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="DesktopArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>environments</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>environments</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>environments_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>environments</code></td>
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

Gets all properties from an individual <code>environment</code>.
```sql
SELECT
region,
id,
name,
desktop_arn,
desktop_endpoint,
desktop_type,
activation_code,
registered_devices_count,
software_set_update_schedule,
maintenance_window,
software_set_update_mode,
desired_software_set_id,
pending_software_set_id,
pending_software_set_version,
software_set_compliance_status,
created_at,
updated_at,
arn,
kms_key_arn,
tags,
device_creation_tags
FROM awscc.workspacesthinclient.environments
WHERE region = 'us-east-1' AND Identifier = '{{ id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>environments</code> in a region.
```sql
SELECT
region,
id
FROM awscc.workspacesthinclient.environments_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.workspacesthinclient.environments (
 DesktopArn,
 region
)
SELECT
'{{ desktop_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.workspacesthinclient.environments (
 Name,
 DesktopArn,
 DesktopEndpoint,
 SoftwareSetUpdateSchedule,
 MaintenanceWindow,
 SoftwareSetUpdateMode,
 DesiredSoftwareSetId,
 KmsKeyArn,
 Tags,
 DeviceCreationTags,
 region
)
SELECT
 '{{ name }}',
 '{{ desktop_arn }}',
 '{{ desktop_endpoint }}',
 '{{ software_set_update_schedule }}',
 '{{ maintenance_window }}',
 '{{ software_set_update_mode }}',
 '{{ desired_software_set_id }}',
 '{{ kms_key_arn }}',
 '{{ tags }}',
 '{{ device_creation_tags }}',
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
  - name: environment
    props:
      - name: name
        value: '{{ name }}'
      - name: desktop_arn
        value: '{{ desktop_arn }}'
      - name: desktop_endpoint
        value: '{{ desktop_endpoint }}'
      - name: software_set_update_schedule
        value: '{{ software_set_update_schedule }}'
      - name: maintenance_window
        value:
          type: '{{ type }}'
          start_time_hour: '{{ start_time_hour }}'
          start_time_minute: '{{ start_time_minute }}'
          end_time_hour: null
          end_time_minute: null
          days_of_the_week:
            - '{{ days_of_the_week[0] }}'
          apply_time_of: '{{ apply_time_of }}'
      - name: software_set_update_mode
        value: '{{ software_set_update_mode }}'
      - name: desired_software_set_id
        value: '{{ desired_software_set_id }}'
      - name: kms_key_arn
        value: '{{ kms_key_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: device_creation_tags
        value:
          - null
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>environment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.workspacesthinclient.environments
SET PatchDocument = string('{{ {
    "Name": name,
    "DesktopEndpoint": desktop_endpoint,
    "SoftwareSetUpdateSchedule": software_set_update_schedule,
    "MaintenanceWindow": maintenance_window,
    "SoftwareSetUpdateMode": software_set_update_mode,
    "DesiredSoftwareSetId": desired_software_set_id,
    "Tags": tags,
    "DeviceCreationTags": device_creation_tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.workspacesthinclient.environments
WHERE Identifier = '{{ id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>environments</code> resource, the following permissions are required:

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
thinclient:CreateEnvironment,
thinclient:TagResource,
thinclient:ListTagsForResource,
appstream:DescribeStacks,
workspaces:DescribeWorkspaceDirectories,
workspaces-web:GetPortal,
workspaces-web:GetUserSettings,
kms:DescribeKey,
kms:CreateGrant,
kms:GenerateDataKey,
kms:Decrypt
```

</TabItem>
<TabItem value="read">

```json
thinclient:GetEnvironment,
thinclient:ListTagsForResource,
kms:Decrypt
```

</TabItem>
<TabItem value="update">

```json
appstream:DescribeStacks,
workspaces:DescribeWorkspaceDirectories,
workspaces-web:GetPortal,
workspaces-web:GetUserSettings,
thinclient:UpdateEnvironment,
thinclient:TagResource,
thinclient:UntagResource,
kms:Decrypt,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="delete">

```json
thinclient:DeleteEnvironment,
thinclient:UntagResource,
kms:Decrypt,
kms:RetireGrant
```

</TabItem>
<TabItem value="list">

```json
thinclient:ListEnvironments,
thinclient:ListTagsForResource,
kms:Decrypt
```

</TabItem>
</Tabs>