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
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "service_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the AppRunner Service."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html"><code>AWS::AppRunner::Service</code></a>.

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
    <td><code>services</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SourceConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>services</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>services</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>services_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>services</code></td>
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
WHERE region = 'us-east-1' AND Identifier = '{{ service_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>services</code> in a region.
```sql
SELECT
region,
service_arn
FROM awscc.apprunner.services_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

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
'{{ source_configuration }}',
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
 '{{ service_name }}',
 '{{ source_configuration }}',
 '{{ instance_configuration }}',
 '{{ tags }}',
 '{{ encryption_configuration }}',
 '{{ health_check_configuration }}',
 '{{ observability_configuration }}',
 '{{ auto_scaling_configuration_arn }}',
 '{{ network_configuration }}',
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
      - name: service_name
        value: '{{ service_name }}'
      - name: source_configuration
        value:
          code_repository:
            repository_url: '{{ repository_url }}'
            source_code_version:
              type: '{{ type }}'
              value: '{{ value }}'
            code_configuration:
              configuration_source: '{{ configuration_source }}'
              code_configuration_values:
                runtime: '{{ runtime }}'
                build_command: '{{ build_command }}'
                start_command: '{{ start_command }}'
                port: '{{ port }}'
                runtime_environment_variables:
                  - name: '{{ name }}'
                    value: '{{ value }}'
                runtime_environment_secrets:
                  - null
            source_directory: '{{ source_directory }}'
          image_repository:
            image_identifier: '{{ image_identifier }}'
            image_configuration:
              start_command: '{{ start_command }}'
              port: '{{ port }}'
              runtime_environment_variables:
                - null
              runtime_environment_secrets:
                - null
            image_repository_type: '{{ image_repository_type }}'
          auto_deployments_enabled: '{{ auto_deployments_enabled }}'
          authentication_configuration:
            connection_arn: '{{ connection_arn }}'
            access_role_arn: '{{ access_role_arn }}'
      - name: instance_configuration
        value:
          cpu: '{{ cpu }}'
          memory: '{{ memory }}'
          instance_role_arn: null
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: encryption_configuration
        value:
          kms_key: '{{ kms_key }}'
      - name: health_check_configuration
        value:
          protocol: '{{ protocol }}'
          path: '{{ path }}'
          interval: '{{ interval }}'
          timeout: '{{ timeout }}'
          healthy_threshold: '{{ healthy_threshold }}'
          unhealthy_threshold: '{{ unhealthy_threshold }}'
      - name: observability_configuration
        value:
          observability_enabled: '{{ observability_enabled }}'
          observability_configuration_arn: '{{ observability_configuration_arn }}'
      - name: auto_scaling_configuration_arn
        value: '{{ auto_scaling_configuration_arn }}'
      - name: network_configuration
        value:
          egress_configuration:
            egress_type: '{{ egress_type }}'
            vpc_connector_arn: '{{ vpc_connector_arn }}'
          ingress_configuration:
            is_publicly_accessible: '{{ is_publicly_accessible }}'
          ip_address_type: '{{ ip_address_type }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>service</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.apprunner.services
SET PatchDocument = string('{{ {
    "SourceConfiguration": source_configuration,
    "InstanceConfiguration": instance_configuration,
    "Tags": tags,
    "HealthCheckConfiguration": health_check_configuration,
    "ObservabilityConfiguration": observability_configuration,
    "AutoScalingConfigurationArn": auto_scaling_configuration_arn,
    "NetworkConfiguration": network_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ service_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.apprunner.services
WHERE Identifier = '{{ service_arn }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>services</code> resource, the following permissions are required:

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

</TabItem>
<TabItem value="read">

```json
apprunner:DescribeService
```

</TabItem>
<TabItem value="update">

```json
apprunner:UpdateService,
iam:PassRole
```

</TabItem>
<TabItem value="delete">

```json
apprunner:DeleteService
```

</TabItem>
<TabItem value="list">

```json
apprunner:ListServices,
iam:PassRole
```

</TabItem>
</Tabs>