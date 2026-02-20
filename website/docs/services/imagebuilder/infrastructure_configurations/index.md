---
title: infrastructure_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - infrastructure_configurations
  - imagebuilder
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

Creates, updates, deletes or gets an <code>infrastructure_configuration</code> resource or lists <code>infrastructure_configurations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>infrastructure_configurations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::ImageBuilder::InfrastructureConfiguration</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.imagebuilder.infrastructure_configurations" /></td></tr>
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the infrastructure configuration."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the infrastructure configuration."
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the infrastructure configuration."
  },
  {
    "name": "instance_types",
    "type": "array",
    "description": "The instance types of the infrastructure configuration."
  },
  {
    "name": "security_group_ids",
    "type": "array",
    "description": "The security group IDs of the infrastructure configuration."
  },
  {
    "name": "logging",
    "type": "object",
    "description": "The logging configuration of the infrastructure configuration.",
    "children": [
      {
        "name": "s3_logs",
        "type": "object",
        "description": "The S3 path in which to store the logs.",
        "children": [
          {
            "name": "s3_bucket_name",
            "type": "string",
            "description": "S3BucketName"
          },
          {
            "name": "s3_key_prefix",
            "type": "string",
            "description": "S3KeyPrefix"
          }
        ]
      }
    ]
  },
  {
    "name": "subnet_id",
    "type": "string",
    "description": "The subnet ID of the infrastructure configuration."
  },
  {
    "name": "key_pair",
    "type": "string",
    "description": "The EC2 key pair of the infrastructure configuration.."
  },
  {
    "name": "terminate_instance_on_failure",
    "type": "boolean",
    "description": "The terminate instance on failure configuration of the infrastructure configuration."
  },
  {
    "name": "instance_profile_name",
    "type": "string",
    "description": "The instance profile of the infrastructure configuration."
  },
  {
    "name": "instance_metadata_options",
    "type": "object",
    "description": "The instance metadata option settings for the infrastructure configuration.",
    "children": [
      {
        "name": "http_put_response_hop_limit",
        "type": "integer",
        "description": "Limit the number of hops that an instance metadata request can traverse to reach its destination."
      },
      {
        "name": "http_tokens",
        "type": "string",
        "description": "Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:"
      }
    ]
  },
  {
    "name": "sns_topic_arn",
    "type": "string",
    "description": "The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration."
  },
  {
    "name": "resource_tags",
    "type": "object",
    "description": "The tags attached to the resource created by Image Builder."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags associated with the component."
  },
  {
    "name": "placement",
    "type": "object",
    "description": "The placement option settings for the infrastructure configuration.",
    "children": [
      {
        "name": "availability_zone",
        "type": "string",
        "description": "AvailabilityZone"
      },
      {
        "name": "tenancy",
        "type": "string",
        "description": "Tenancy"
      },
      {
        "name": "host_id",
        "type": "string",
        "description": "HostId"
      },
      {
        "name": "host_resource_group_arn",
        "type": "string",
        "description": "HostResourceGroupArn"
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
    "name": "arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the infrastructure configuration."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html"><code>AWS::ImageBuilder::InfrastructureConfiguration</code></a>.

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
    <td><code>infrastructure_configurations</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, InstanceProfileName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>infrastructure_configurations</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>infrastructure_configurations</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>infrastructure_configurations_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>infrastructure_configurations</code></td>
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

Gets all properties from an individual <code>infrastructure_configuration</code>.
```sql
SELECT
region,
arn,
name,
description,
instance_types,
security_group_ids,
logging,
subnet_id,
key_pair,
terminate_instance_on_failure,
instance_profile_name,
instance_metadata_options,
sns_topic_arn,
resource_tags,
tags,
placement
FROM awscc.imagebuilder.infrastructure_configurations
WHERE region = 'us-east-1' AND Identifier = '<Arn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>infrastructure_configurations</code> in a region.
```sql
SELECT
region,
arn
FROM awscc.imagebuilder.infrastructure_configurations_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>infrastructure_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.imagebuilder.infrastructure_configurations (
 Name,
 InstanceProfileName,
 region
)
SELECT 
'{{ Name }}',
 '{{ InstanceProfileName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.imagebuilder.infrastructure_configurations (
 Name,
 Description,
 InstanceTypes,
 SecurityGroupIds,
 Logging,
 SubnetId,
 KeyPair,
 TerminateInstanceOnFailure,
 InstanceProfileName,
 InstanceMetadataOptions,
 SnsTopicArn,
 ResourceTags,
 Tags,
 Placement,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Description }}',
 '{{ InstanceTypes }}',
 '{{ SecurityGroupIds }}',
 '{{ Logging }}',
 '{{ SubnetId }}',
 '{{ KeyPair }}',
 '{{ TerminateInstanceOnFailure }}',
 '{{ InstanceProfileName }}',
 '{{ InstanceMetadataOptions }}',
 '{{ SnsTopicArn }}',
 '{{ ResourceTags }}',
 '{{ Tags }}',
 '{{ Placement }}',
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
  - name: infrastructure_configuration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Description
        value: '{{ Description }}'
      - name: InstanceTypes
        value:
          - '{{ InstanceTypes[0] }}'
      - name: SecurityGroupIds
        value:
          - '{{ SecurityGroupIds[0] }}'
      - name: Logging
        value:
          S3Logs:
            S3BucketName: '{{ S3BucketName }}'
            S3KeyPrefix: '{{ S3KeyPrefix }}'
      - name: SubnetId
        value: '{{ SubnetId }}'
      - name: KeyPair
        value: '{{ KeyPair }}'
      - name: TerminateInstanceOnFailure
        value: '{{ TerminateInstanceOnFailure }}'
      - name: InstanceProfileName
        value: '{{ InstanceProfileName }}'
      - name: InstanceMetadataOptions
        value:
          HttpPutResponseHopLimit: '{{ HttpPutResponseHopLimit }}'
          HttpTokens: '{{ HttpTokens }}'
      - name: SnsTopicArn
        value: '{{ SnsTopicArn }}'
      - name: ResourceTags
        value: {}
      - name: Tags
        value: {}
      - name: Placement
        value:
          AvailabilityZone: '{{ AvailabilityZone }}'
          Tenancy: '{{ Tenancy }}'
          HostId: '{{ HostId }}'
          HostResourceGroupArn: '{{ HostResourceGroupArn }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>infrastructure_configuration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.imagebuilder.infrastructure_configurations
SET PatchDocument = string('{{ {
    "Description": description,
    "InstanceTypes": instance_types,
    "SecurityGroupIds": security_group_ids,
    "Logging": logging,
    "SubnetId": subnet_id,
    "KeyPair": key_pair,
    "TerminateInstanceOnFailure": terminate_instance_on_failure,
    "InstanceProfileName": instance_profile_name,
    "InstanceMetadataOptions": instance_metadata_options,
    "SnsTopicArn": sns_topic_arn,
    "ResourceTags": resource_tags,
    "Tags": tags,
    "Placement": placement
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Arn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.imagebuilder.infrastructure_configurations
WHERE Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>infrastructure_configurations</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
iam:PassRole,
iam:GetRole,
iam:GetInstanceProfile,
iam:CreateServiceLinkedRole,
sns:Publish,
imagebuilder:TagResource,
imagebuilder:GetInfrastructureConfiguration,
imagebuilder:CreateInfrastructureConfiguration
```

</TabItem>
<TabItem value="update">

```json
iam:PassRole,
sns:Publish,
imagebuilder:GetInfrastructureConfiguration,
imagebuilder:UpdateInfrastructureConfiguration,
imagebuilder:TagResource,
imagebuilder:UntagResource
```

</TabItem>
<TabItem value="read">

```json
imagebuilder:GetInfrastructureConfiguration
```

</TabItem>
<TabItem value="delete">

```json
imagebuilder:UntagResource,
imagebuilder:GetInfrastructureConfiguration,
imagebuilder:DeleteInfrastructureConfiguration
```

</TabItem>
<TabItem value="list">

```json
imagebuilder:ListInfrastructureConfigurations
```

</TabItem>
</Tabs>