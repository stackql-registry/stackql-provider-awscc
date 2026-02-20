---
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - opensearchservice
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

Creates, updates, deletes or gets a <code>domain</code> resource or lists <code>domains</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>domains</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.opensearchservice.domains" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "cluster_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "instance_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "warm_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "warm_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "dedicated_master_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "zone_awareness_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "availability_zone_count",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "dedicated_master_count",
        "type": "integer",
        "description": ""
      },
      {
        "name": "instance_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "warm_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "zone_awareness_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dedicated_master_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "multi_az_with_standby_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "cold_storage_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "node_options",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "node_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "node_config",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "type",
                "type": "string",
                "description": ""
              },
              {
                "name": "count",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "domain_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "access_policies",
    "type": "object",
    "description": ""
  },
  {
    "name": "ip_address_type",
    "type": "string",
    "description": ""
  },
  {
    "name": "engine_version",
    "type": "string",
    "description": ""
  },
  {
    "name": "advanced_options",
    "type": "object",
    "description": ""
  },
  {
    "name": "log_publishing_options",
    "type": "object",
    "description": ""
  },
  {
    "name": "snapshot_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "automated_snapshot_start_hour",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "vpc_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "security_group_ids",
        "type": "array",
        "description": ""
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "node_to_node_encryption_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "domain_endpoint_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "custom_endpoint_certificate_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_endpoint_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "enforce_ht_tp_s",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "custom_endpoint",
        "type": "string",
        "description": ""
      },
      {
        "name": "tls_security_policy",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "cognito_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "identity_pool_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "user_pool_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "advanced_security_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "master_user_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "master_user_password",
            "type": "string",
            "description": ""
          },
          {
            "name": "master_user_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "master_user_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "internal_user_database_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "anonymous_auth_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "s_aml_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "idp",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "metadata_content",
                "type": "string",
                "description": ""
              },
              {
                "name": "entity_id",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "master_user_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "master_backend_role",
            "type": "string",
            "description": ""
          },
          {
            "name": "subject_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "roles_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "session_timeout_minutes",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "j_wt_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "public_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "subject_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "roles_key",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "iam_federation_options",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "enabled",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "roles_key",
            "type": "string",
            "description": ""
          },
          {
            "name": "subject_key",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "anonymous_auth_disable_date",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "domain_endpoint",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_endpoint_v2",
    "type": "string",
    "description": ""
  },
  {
    "name": "domain_endpoints",
    "type": "object",
    "description": ""
  },
  {
    "name": "ebs_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "ebs_enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "volume_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "iops",
        "type": "integer",
        "description": ""
      },
      {
        "name": "volume_size",
        "type": "integer",
        "description": ""
      },
      {
        "name": "throughput",
        "type": "integer",
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
    "name": "domain_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "encryption_at_rest_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "An arbitrary set of tags (key-value pairs) for this Domain.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The key of the tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The value of the tag."
      }
    ]
  },
  {
    "name": "service_software_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "current_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "new_version",
        "type": "string",
        "description": ""
      },
      {
        "name": "update_available",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "cancellable",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "update_status",
        "type": "string",
        "description": ""
      },
      {
        "name": "description",
        "type": "string",
        "description": ""
      },
      {
        "name": "automated_update_date",
        "type": "string",
        "description": ""
      },
      {
        "name": "optional_deployment",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "off_peak_window_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "enabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "off_peak_window",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "window_start_time",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "hours",
                "type": "integer",
                "description": ""
              },
              {
                "name": "minutes",
                "type": "integer",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "software_update_options",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "auto_software_update_enabled",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "skip_shard_migration_wait",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "identity_center_options",
    "type": "object",
    "description": "Options for configuring Identity Center",
    "children": [
      {
        "name": "enabled_api_access",
        "type": "boolean",
        "description": "Whether Identity Center is enabled."
      },
      {
        "name": "identity_center_instance_arn",
        "type": "string",
        "description": "The ARN of the Identity Center instance."
      },
      {
        "name": "subject_key",
        "type": "string",
        "description": "The subject key for Identity Center options."
      },
      {
        "name": "roles_key",
        "type": "string",
        "description": "The roles key for Identity Center options."
      },
      {
        "name": "identity_center_application_arn",
        "type": "string",
        "description": "The ARN of the Identity Center application."
      },
      {
        "name": "identity_store_id",
        "type": "string",
        "description": "The IdentityStoreId for Identity Center options."
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html"><code>AWS::OpenSearchService::Domain</code></a>.

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

Gets all properties from an individual <code>domain</code>.
```sql
SELECT
region,
cluster_config,
domain_name,
access_policies,
ip_address_type,
engine_version,
advanced_options,
log_publishing_options,
snapshot_options,
vpc_options,
node_to_node_encryption_options,
domain_endpoint_options,
cognito_options,
advanced_security_options,
domain_endpoint,
domain_endpoint_v2,
domain_endpoints,
ebs_options,
id,
arn,
domain_arn,
encryption_at_rest_options,
tags,
service_software_options,
off_peak_window_options,
software_update_options,
skip_shard_migration_wait,
identity_center_options
FROM awscc.opensearchservice.domains
WHERE region = 'us-east-1' AND Identifier = '<DomainName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>domain</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.opensearchservice.domains (
 ClusterConfig,
 DomainName,
 AccessPolicies,
 IPAddressType,
 EngineVersion,
 AdvancedOptions,
 LogPublishingOptions,
 SnapshotOptions,
 VPCOptions,
 NodeToNodeEncryptionOptions,
 DomainEndpointOptions,
 CognitoOptions,
 AdvancedSecurityOptions,
 EBSOptions,
 EncryptionAtRestOptions,
 Tags,
 OffPeakWindowOptions,
 SoftwareUpdateOptions,
 SkipShardMigrationWait,
 IdentityCenterOptions,
 region
)
SELECT 
'{{ ClusterConfig }}',
 '{{ DomainName }}',
 '{{ AccessPolicies }}',
 '{{ IPAddressType }}',
 '{{ EngineVersion }}',
 '{{ AdvancedOptions }}',
 '{{ LogPublishingOptions }}',
 '{{ SnapshotOptions }}',
 '{{ VPCOptions }}',
 '{{ NodeToNodeEncryptionOptions }}',
 '{{ DomainEndpointOptions }}',
 '{{ CognitoOptions }}',
 '{{ AdvancedSecurityOptions }}',
 '{{ EBSOptions }}',
 '{{ EncryptionAtRestOptions }}',
 '{{ Tags }}',
 '{{ OffPeakWindowOptions }}',
 '{{ SoftwareUpdateOptions }}',
 '{{ SkipShardMigrationWait }}',
 '{{ IdentityCenterOptions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.opensearchservice.domains (
 ClusterConfig,
 DomainName,
 AccessPolicies,
 IPAddressType,
 EngineVersion,
 AdvancedOptions,
 LogPublishingOptions,
 SnapshotOptions,
 VPCOptions,
 NodeToNodeEncryptionOptions,
 DomainEndpointOptions,
 CognitoOptions,
 AdvancedSecurityOptions,
 EBSOptions,
 EncryptionAtRestOptions,
 Tags,
 OffPeakWindowOptions,
 SoftwareUpdateOptions,
 SkipShardMigrationWait,
 IdentityCenterOptions,
 region
)
SELECT 
 '{{ ClusterConfig }}',
 '{{ DomainName }}',
 '{{ AccessPolicies }}',
 '{{ IPAddressType }}',
 '{{ EngineVersion }}',
 '{{ AdvancedOptions }}',
 '{{ LogPublishingOptions }}',
 '{{ SnapshotOptions }}',
 '{{ VPCOptions }}',
 '{{ NodeToNodeEncryptionOptions }}',
 '{{ DomainEndpointOptions }}',
 '{{ CognitoOptions }}',
 '{{ AdvancedSecurityOptions }}',
 '{{ EBSOptions }}',
 '{{ EncryptionAtRestOptions }}',
 '{{ Tags }}',
 '{{ OffPeakWindowOptions }}',
 '{{ SoftwareUpdateOptions }}',
 '{{ SkipShardMigrationWait }}',
 '{{ IdentityCenterOptions }}',
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
  - name: domain
    props:
      - name: ClusterConfig
        value:
          InstanceCount: '{{ InstanceCount }}'
          WarmEnabled: '{{ WarmEnabled }}'
          WarmCount: '{{ WarmCount }}'
          DedicatedMasterEnabled: '{{ DedicatedMasterEnabled }}'
          ZoneAwarenessConfig:
            AvailabilityZoneCount: '{{ AvailabilityZoneCount }}'
          DedicatedMasterCount: '{{ DedicatedMasterCount }}'
          InstanceType: '{{ InstanceType }}'
          WarmType: '{{ WarmType }}'
          ZoneAwarenessEnabled: '{{ ZoneAwarenessEnabled }}'
          DedicatedMasterType: '{{ DedicatedMasterType }}'
          MultiAZWithStandbyEnabled: '{{ MultiAZWithStandbyEnabled }}'
          ColdStorageOptions:
            Enabled: '{{ Enabled }}'
          NodeOptions:
            - NodeType: '{{ NodeType }}'
              NodeConfig:
                Enabled: '{{ Enabled }}'
                Type: '{{ Type }}'
                Count: '{{ Count }}'
      - name: DomainName
        value: '{{ DomainName }}'
      - name: AccessPolicies
        value: {}
      - name: IPAddressType
        value: '{{ IPAddressType }}'
      - name: EngineVersion
        value: '{{ EngineVersion }}'
      - name: AdvancedOptions
        value: {}
      - name: LogPublishingOptions
        value: {}
      - name: SnapshotOptions
        value:
          AutomatedSnapshotStartHour: '{{ AutomatedSnapshotStartHour }}'
      - name: VPCOptions
        value:
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
      - name: NodeToNodeEncryptionOptions
        value:
          Enabled: '{{ Enabled }}'
      - name: DomainEndpointOptions
        value:
          CustomEndpointCertificateArn: '{{ CustomEndpointCertificateArn }}'
          CustomEndpointEnabled: '{{ CustomEndpointEnabled }}'
          EnforceHTTPS: '{{ EnforceHTTPS }}'
          CustomEndpoint: '{{ CustomEndpoint }}'
          TLSSecurityPolicy: '{{ TLSSecurityPolicy }}'
      - name: CognitoOptions
        value:
          Enabled: '{{ Enabled }}'
          IdentityPoolId: '{{ IdentityPoolId }}'
          UserPoolId: '{{ UserPoolId }}'
          RoleArn: '{{ RoleArn }}'
      - name: AdvancedSecurityOptions
        value:
          Enabled: '{{ Enabled }}'
          MasterUserOptions:
            MasterUserPassword: '{{ MasterUserPassword }}'
            MasterUserName: '{{ MasterUserName }}'
            MasterUserARN: '{{ MasterUserARN }}'
          InternalUserDatabaseEnabled: '{{ InternalUserDatabaseEnabled }}'
          AnonymousAuthEnabled: '{{ AnonymousAuthEnabled }}'
          SAMLOptions:
            Enabled: '{{ Enabled }}'
            Idp:
              MetadataContent: '{{ MetadataContent }}'
              EntityId: '{{ EntityId }}'
            MasterUserName: '{{ MasterUserName }}'
            MasterBackendRole: '{{ MasterBackendRole }}'
            SubjectKey: '{{ SubjectKey }}'
            RolesKey: '{{ RolesKey }}'
            SessionTimeoutMinutes: '{{ SessionTimeoutMinutes }}'
          JWTOptions:
            Enabled: '{{ Enabled }}'
            PublicKey: '{{ PublicKey }}'
            SubjectKey: '{{ SubjectKey }}'
            RolesKey: '{{ RolesKey }}'
          IAMFederationOptions:
            Enabled: '{{ Enabled }}'
            RolesKey: '{{ RolesKey }}'
            SubjectKey: '{{ SubjectKey }}'
          AnonymousAuthDisableDate: '{{ AnonymousAuthDisableDate }}'
      - name: EBSOptions
        value:
          EBSEnabled: '{{ EBSEnabled }}'
          VolumeType: '{{ VolumeType }}'
          Iops: '{{ Iops }}'
          VolumeSize: '{{ VolumeSize }}'
          Throughput: '{{ Throughput }}'
      - name: EncryptionAtRestOptions
        value:
          KmsKeyId: '{{ KmsKeyId }}'
          Enabled: '{{ Enabled }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: OffPeakWindowOptions
        value:
          Enabled: '{{ Enabled }}'
          OffPeakWindow:
            WindowStartTime:
              Hours: '{{ Hours }}'
              Minutes: '{{ Minutes }}'
      - name: SoftwareUpdateOptions
        value:
          AutoSoftwareUpdateEnabled: '{{ AutoSoftwareUpdateEnabled }}'
      - name: SkipShardMigrationWait
        value: '{{ SkipShardMigrationWait }}'
      - name: IdentityCenterOptions
        value:
          EnabledAPIAccess: '{{ EnabledAPIAccess }}'
          IdentityCenterInstanceARN: '{{ IdentityCenterInstanceARN }}'
          SubjectKey: '{{ SubjectKey }}'
          RolesKey: '{{ RolesKey }}'
          IdentityCenterApplicationARN: '{{ IdentityCenterApplicationARN }}'
          IdentityStoreId: '{{ IdentityStoreId }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.opensearchservice.domains
SET PatchDocument = string('{{ {
    "ClusterConfig": cluster_config,
    "AccessPolicies": access_policies,
    "IPAddressType": ip_address_type,
    "EngineVersion": engine_version,
    "AdvancedOptions": advanced_options,
    "LogPublishingOptions": log_publishing_options,
    "SnapshotOptions": snapshot_options,
    "VPCOptions": vpc_options,
    "NodeToNodeEncryptionOptions": node_to_node_encryption_options,
    "DomainEndpointOptions": domain_endpoint_options,
    "CognitoOptions": cognito_options,
    "EBSOptions": ebs_options,
    "EncryptionAtRestOptions": encryption_at_rest_options,
    "Tags": tags,
    "OffPeakWindowOptions": off_peak_window_options,
    "SoftwareUpdateOptions": software_update_options,
    "SkipShardMigrationWait": skip_shard_migration_wait
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<DomainName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.opensearchservice.domains
WHERE Identifier = '<DomainName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>domains</code> resource, the following permissions are required:

### Create
```json
es:CreateDomain,
es:DescribeDomain,
es:AddTags,
es:ListTags,
es:DescribeDomainChangeProgress
```

### Read
```json
es:DescribeDomain,
es:ListTags
```

### Update
```json
es:UpdateDomain,
es:UpgradeDomain,
es:DescribeDomain,
es:AddTags,
es:RemoveTags,
es:ListTags,
es:DescribeDomainChangeProgress
```

### Delete
```json
es:DeleteDomain,
es:DescribeDomain
```
