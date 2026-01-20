---
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - apprunner
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

Creates, updates, deletes or gets a <code>service</code> resource or lists <code>services</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>services</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The AWS::AppRunner::Service resource specifies an AppRunner Service.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.apprunner.services" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "service_name",
    "type": "string",
    "description": "The AppRunner Service Name."
  },
  {
    "name": "service_id",
    "type": "string",
    "description": "The AppRunner Service Id"
  },
  {
    "name": "service_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AppRunner Service."
  },
  {
    "name": "service_url",
    "type": "string",
    "description": "The Service Url of the AppRunner Service."
  },
  {
    "name": "status",
    "type": "string",
    "description": "AppRunner Service status."
  },
  {
    "name": "source_configuration",
    "type": "object",
    "description": "Source Code configuration",
    "children": [
      {
        "name": "code_repository",
        "type": "object",
        "description": "Source Code Repository",
        "children": [
          {
            "name": "repository_url",
            "type": "string",
            "description": "Repository Url"
          },
          {
            "name": "source_code_version",
            "type": "object",
            "description": "Source Code Version",
            "children": [
              {
                "name": "type",
                "type": "string",
                "description": "Source Code Version Type"
              },
              {
                "name": "value",
                "type": "string",
                "description": "Source Code Version Value"
              }
            ]
          },
          {
            "name": "code_configuration",
            "type": "object",
            "description": "Code Configuration",
            "children": [
              {
                "name": "configuration_source",
                "type": "string",
                "description": "Configuration Source"
              },
              {
                "name": "code_configuration_values",
                "type": "object",
                "description": "Code Configuration Values"
              }
            ]
          },
          {
            "name": "source_directory",
            "type": "string",
            "description": "Source Directory"
          }
        ]
      },
      {
        "name": "image_repository",
        "type": "object",
        "description": "Image Repository",
        "children": [
          {
            "name": "image_identifier",
            "type": "string",
            "description": "Image Identifier"
          },
          {
            "name": "image_configuration",
            "type": "object",
            "description": "Image Configuration",
            "children": [
              {
                "name": "start_command",
                "type": "string",
                "description": "Start Command"
              },
              {
                "name": "port",
                "type": "string",
                "description": "Port"
              },
              {
                "name": "runtime_environment_variables",
                "type": "array",
                "description": ""
              },
              {
                "name": "runtime_environment_secrets",
                "type": "array",
                "description": "The secrets and parameters that get referenced by your service as environment variables"
              }
            ]
          },
          {
            "name": "image_repository_type",
            "type": "string",
            "description": "Image Repository Type"
          }
        ]
      },
      {
        "name": "auto_deployments_enabled",
        "type": "boolean",
        "description": "Auto Deployment enabled"
      },
      {
        "name": "authentication_configuration",
        "type": "object",
        "description": "Authentication Configuration",
        "children": [
          {
            "name": "connection_arn",
            "type": "string",
            "description": "Connection Arn"
          },
          {
            "name": "access_role_arn",
            "type": "string",
            "description": "Access Role Arn"
          }
        ]
      }
    ]
  },
  {
    "name": "instance_configuration",
    "type": "object",
    "description": "Instance Configuration",
    "children": [
      {
        "name": "cpu",
        "type": "string",
        "description": "CPU"
      },
      {
        "name": "memory",
        "type": "string",
        "description": "Memory"
      },
      {
        "name": "instance_role_arn",
        "type": "string",
        "description": "Instance Role Arn"
      }
    ]
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
    "name": "encryption_configuration",
    "type": "object",
    "description": "Encryption configuration (KMS key)",
    "children": [
      {
        "name": "kms_key",
        "type": "string",
        "description": "The KMS Key"
      }
    ]
  },
  {
    "name": "health_check_configuration",
    "type": "object",
    "description": "Health check configuration",
    "children": [
      {
        "name": "protocol",
        "type": "string",
        "description": "Health Check Protocol"
      },
      {
        "name": "path",
        "type": "string",
        "description": "Health check Path"
      },
      {
        "name": "interval",
        "type": "integer",
        "description": "Health check Interval"
      },
      {
        "name": "timeout",
        "type": "integer",
        "description": "Health check Timeout"
      },
      {
        "name": "healthy_threshold",
        "type": "integer",
        "description": "Health check Healthy Threshold"
      },
      {
        "name": "unhealthy_threshold",
        "type": "integer",
        "description": "Health check Unhealthy Threshold"
      }
    ]
  },
  {
    "name": "observability_configuration",
    "type": "object",
    "description": "Service observability configuration",
    "children": [
      {
        "name": "observability_enabled",
        "type": "boolean",
        "description": "Observability enabled"
      },
      {
        "name": "observability_configuration_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration."
      }
    ]
  },
  {
    "name": "auto_scaling_configuration_arn",
    "type": "string",
    "description": "Autoscaling configuration ARN"
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": "Network configuration",
    "children": [
      {
        "name": "egress_configuration",
        "type": "object",
        "description": "Network egress configuration",
        "children": [
          {
            "name": "egress_type",
            "type": "string",
            "description": "Network egress type."
          },
          {
            "name": "vpc_connector_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the App Runner VpcConnector."
          }
        ]
      },
      {
        "name": "ingress_configuration",
        "type": "object",
        "description": "Network ingress configuration",
        "children": [
          {
            "name": "is_publicly_accessible",
            "type": "boolean",
            "description": "It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise."
          }
        ]
      },
      {
        "name": "ip_address_type",
        "type": "string",
        "description": "App Runner service endpoint IP address type"
      }
    ]
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html"><code>AWS::AppRunner::Service</code></a>.

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
    <td><CopyableCode code="SourceConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples

Gets all properties from an individual <code>service</code>.
```sql
SELECT
region,
service_name,
service_id,
service_arn,
service_url,
status,
source_configuration,
instance_configuration,
tags,
encryption_configuration,
health_check_configuration,
observability_configuration,
auto_scaling_configuration_arn,
network_configuration
FROM awscc.apprunner.services
WHERE region = 'us-east-1' AND data__Identifier = '<ServiceArn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.apprunner.services (
 SourceConfiguration,
 region
)
SELECT 
'{{ SourceConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.apprunner.services (
 ServiceName,
 SourceConfiguration,
 InstanceConfiguration,
 Tags,
 EncryptionConfiguration,
 HealthCheckConfiguration,
 ObservabilityConfiguration,
 AutoScalingConfigurationArn,
 NetworkConfiguration,
 region
)
SELECT 
 '{{ ServiceName }}',
 '{{ SourceConfiguration }}',
 '{{ InstanceConfiguration }}',
 '{{ Tags }}',
 '{{ EncryptionConfiguration }}',
 '{{ HealthCheckConfiguration }}',
 '{{ ObservabilityConfiguration }}',
 '{{ AutoScalingConfigurationArn }}',
 '{{ NetworkConfiguration }}',
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
  - name: service
    props:
      - name: ServiceName
        value: '{{ ServiceName }}'
      - name: SourceConfiguration
        value:
          CodeRepository:
            RepositoryUrl: '{{ RepositoryUrl }}'
            SourceCodeVersion:
              Type: '{{ Type }}'
              Value: '{{ Value }}'
            CodeConfiguration:
              ConfigurationSource: '{{ ConfigurationSource }}'
              CodeConfigurationValues:
                Runtime: '{{ Runtime }}'
                BuildCommand: '{{ BuildCommand }}'
                StartCommand: '{{ StartCommand }}'
                Port: '{{ Port }}'
                RuntimeEnvironmentVariables:
                  - Name: '{{ Name }}'
                    Value: '{{ Value }}'
                RuntimeEnvironmentSecrets:
                  - null
            SourceDirectory: '{{ SourceDirectory }}'
          ImageRepository:
            ImageIdentifier: '{{ ImageIdentifier }}'
            ImageConfiguration:
              StartCommand: '{{ StartCommand }}'
              Port: '{{ Port }}'
              RuntimeEnvironmentVariables:
                - null
              RuntimeEnvironmentSecrets:
                - null
            ImageRepositoryType: '{{ ImageRepositoryType }}'
          AutoDeploymentsEnabled: '{{ AutoDeploymentsEnabled }}'
          AuthenticationConfiguration:
            ConnectionArn: '{{ ConnectionArn }}'
            AccessRoleArn: '{{ AccessRoleArn }}'
      - name: InstanceConfiguration
        value:
          Cpu: '{{ Cpu }}'
          Memory: '{{ Memory }}'
          InstanceRoleArn: null
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: EncryptionConfiguration
        value:
          KmsKey: '{{ KmsKey }}'
      - name: HealthCheckConfiguration
        value:
          Protocol: '{{ Protocol }}'
          Path: '{{ Path }}'
          Interval: '{{ Interval }}'
          Timeout: '{{ Timeout }}'
          HealthyThreshold: '{{ HealthyThreshold }}'
          UnhealthyThreshold: '{{ UnhealthyThreshold }}'
      - name: ObservabilityConfiguration
        value:
          ObservabilityEnabled: '{{ ObservabilityEnabled }}'
          ObservabilityConfigurationArn: '{{ ObservabilityConfigurationArn }}'
      - name: AutoScalingConfigurationArn
        value: '{{ AutoScalingConfigurationArn }}'
      - name: NetworkConfiguration
        value:
          EgressConfiguration:
            EgressType: '{{ EgressType }}'
            VpcConnectorArn: '{{ VpcConnectorArn }}'
          IngressConfiguration:
            IsPubliclyAccessible: '{{ IsPubliclyAccessible }}'
          IpAddressType: '{{ IpAddressType }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apprunner.services
WHERE data__Identifier = '<ServiceArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>services</code> resource, the following permissions are required:

### Create
```json
apprunner:CreateService,
apprunner:TagResource,
iam:PassRole,
iam:CreateServiceLinkedRole,
logs:CreateLogGroup,
logs:PutRetentionPolicy,
logs:CreateLogStream,
logs:PutLogEvents,
logs:DescribeLogStreams,
events:PutRule,
events:PutTargets
```

### Read
```json
apprunner:DescribeService
```

### Update
```json
apprunner:UpdateService,
iam:PassRole
```

### Delete
```json
apprunner:DeleteService
```

### List
```json
apprunner:ListServices,
iam:PassRole
```
