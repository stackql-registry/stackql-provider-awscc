---
title: mission_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - mission_profiles
  - groundstation
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

Creates, updates, deletes or gets a <code>mission_profile</code> resource or lists <code>mission_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mission_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>AWS Ground Station Mission Profile resource type for CloudFormation.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.groundstation.mission_profiles" /></td></tr>
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
    "description": "A name used to identify a mission profile."
  },
  {
    "name": "contact_pre_pass_duration_seconds",
    "type": "integer",
    "description": "Pre-pass time needed before the contact."
  },
  {
    "name": "contact_post_pass_duration_seconds",
    "type": "integer",
    "description": "Post-pass time needed after the contact."
  },
  {
    "name": "minimum_viable_contact_duration_seconds",
    "type": "integer",
    "description": "Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts."
  },
  {
    "name": "streams_kms_key",
    "type": "object",
    "description": "The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "kms_alias_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "kms_alias_name",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "streams_kms_role",
    "type": "string",
    "description": "The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage."
  },
  {
    "name": "dataflow_edges",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "source",
        "type": "string",
        "description": ""
      },
      {
        "name": "destination",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tracking_config_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "",
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
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html"><code>AWS::GroundStation::MissionProfile</code></a>.

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
    <td><code>mission_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, MinimumViableContactDurationSeconds, DataflowEdges, TrackingConfigArn, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mission_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mission_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mission_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mission_profiles</code></td>
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

Gets all properties from an individual <code>mission_profile</code>.
```sql
SELECT
region,
name,
contact_pre_pass_duration_seconds,
contact_post_pass_duration_seconds,
minimum_viable_contact_duration_seconds,
streams_kms_key,
streams_kms_role,
dataflow_edges,
tracking_config_arn,
tags,
id,
arn,
region
FROM awscc.groundstation.mission_profiles
WHERE region = 'us-east-1' AND Identifier = '{{ id }}|{{ arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>mission_profiles</code> in a region.
```sql
SELECT
region,
id,
arn
FROM awscc.groundstation.mission_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mission_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.groundstation.mission_profiles (
 Name,
 MinimumViableContactDurationSeconds,
 DataflowEdges,
 TrackingConfigArn,
 region
)
SELECT
'{{ name }}',
 '{{ minimum_viable_contact_duration_seconds }}',
 '{{ dataflow_edges }}',
 '{{ tracking_config_arn }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.groundstation.mission_profiles (
 Name,
 ContactPrePassDurationSeconds,
 ContactPostPassDurationSeconds,
 MinimumViableContactDurationSeconds,
 StreamsKmsKey,
 StreamsKmsRole,
 DataflowEdges,
 TrackingConfigArn,
 Tags,
 region
)
SELECT
 '{{ name }}',
 '{{ contact_pre_pass_duration_seconds }}',
 '{{ contact_post_pass_duration_seconds }}',
 '{{ minimum_viable_contact_duration_seconds }}',
 '{{ streams_kms_key }}',
 '{{ streams_kms_role }}',
 '{{ dataflow_edges }}',
 '{{ tracking_config_arn }}',
 '{{ tags }}',
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
  - name: mission_profile
    props:
      - name: name
        value: '{{ name }}'
      - name: contact_pre_pass_duration_seconds
        value: '{{ contact_pre_pass_duration_seconds }}'
      - name: contact_post_pass_duration_seconds
        value: '{{ contact_post_pass_duration_seconds }}'
      - name: minimum_viable_contact_duration_seconds
        value: '{{ minimum_viable_contact_duration_seconds }}'
      - name: streams_kms_key
        value:
          kms_key_arn: '{{ kms_key_arn }}'
          kms_alias_arn: '{{ kms_alias_arn }}'
          kms_alias_name: '{{ kms_alias_name }}'
      - name: streams_kms_role
        value: '{{ streams_kms_role }}'
      - name: dataflow_edges
        value:
          - source: '{{ source }}'
            destination: '{{ destination }}'
      - name: tracking_config_arn
        value: '{{ tracking_config_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>mission_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.groundstation.mission_profiles
SET PatchDocument = string('{{ {
    "Name": name,
    "ContactPrePassDurationSeconds": contact_pre_pass_duration_seconds,
    "ContactPostPassDurationSeconds": contact_post_pass_duration_seconds,
    "MinimumViableContactDurationSeconds": minimum_viable_contact_duration_seconds,
    "StreamsKmsKey": streams_kms_key,
    "StreamsKmsRole": streams_kms_role,
    "DataflowEdges": dataflow_edges,
    "TrackingConfigArn": tracking_config_arn,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}|{{ arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.groundstation.mission_profiles
WHERE Identifier = '{{ id }}|{{ arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mission_profiles</code> resource, the following permissions are required:

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
groundstation:CreateMissionProfile,
groundstation:GetMissionProfile,
groundstation:TagResource,
iam:PassRole,
kms:DescribeKey,
kms:CreateGrant
```

</TabItem>
<TabItem value="read">

```json
groundstation:GetMissionProfile,
groundstation:ListTagsForResource,
kms:DescribeKey,
kms:CreateGrant
```

</TabItem>
<TabItem value="update">

```json
groundstation:UpdateMissionProfile,
groundstation:GetMissionProfile,
groundstation:ListTagsForResource,
groundstation:TagResource,
groundstation:UntagResource,
iam:PassRole,
kms:DescribeKey,
kms:CreateGrant
```

</TabItem>
<TabItem value="delete">

```json
groundstation:DeleteMissionProfile,
groundstation:GetMissionProfile
```

</TabItem>
<TabItem value="list">

```json
groundstation:ListMissionProfiles
```

</TabItem>
</Tabs>