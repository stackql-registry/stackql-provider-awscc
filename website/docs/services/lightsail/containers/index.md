---
title: containers
hide_title: false
hide_table_of_contents: false
keywords:
  - containers
  - lightsail
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

Creates, updates, deletes or gets a <code>container</code> resource or lists <code>containers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>containers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Lightsail::Container</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lightsail.containers" /></td></tr>
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
    "description": "The name for the container service."
  },
  {
    "name": "power",
    "type": "string",
    "description": "The power specification for the container service."
  },
  {
    "name": "container_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "scale",
    "type": "integer",
    "description": "The scale specification for the container service."
  },
  {
    "name": "public_domain_names",
    "type": "array",
    "description": "The public domain names to use with the container service, such as example.com and www.example.com.",
    "children": [
      {
        "name": "certificate_name",
        "type": "string",
        "description": ""
      },
      {
        "name": "domain_names",
        "type": "array",
        "description": "An object that describes the configuration for the containers of the deployment."
      }
    ]
  },
  {
    "name": "container_service_deployment",
    "type": "object",
    "description": "Describes a container deployment configuration of an Amazon Lightsail container service.",
    "children": [
      {
        "name": "containers",
        "type": "array",
        "description": "An object that describes the configuration for the containers of the deployment.",
        "children": [
          {
            "name": "service_name",
            "type": "string",
            "description": "The name for the container service."
          },
          {
            "name": "power",
            "type": "string",
            "description": "The power specification for the container service."
          },
          {
            "name": "container_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "scale",
            "type": "integer",
            "description": "The scale specification for the container service."
          },
          {
            "name": "public_domain_names",
            "type": "array",
            "description": "The public domain names to use with the container service, such as example.com and www.example.com."
          },
          {
            "name": "is_disabled",
            "type": "boolean",
            "description": "A Boolean value to indicate whether the container service is disabled."
          },
          {
            "name": "private_registry_access",
            "type": "object",
            "description": "A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.",
            "children": [
              {
                "name": "ecr_image_puller_role",
                "type": "object",
                "description": "An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories."
              }
            ]
          },
          {
            "name": "url",
            "type": "string",
            "description": "The publicly accessible URL of the container service."
          },
          {
            "name": "principal_arn",
            "type": "string",
            "description": "The principal ARN of the container service."
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
                "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
              }
            ]
          }
        ]
      },
      {
        "name": "public_endpoint",
        "type": "object",
        "description": "An object that describes the endpoint of the deployment.",
        "children": [
          {
            "name": "container_name",
            "type": "string",
            "description": "The name of the container for the endpoint."
          },
          {
            "name": "container_port",
            "type": "integer",
            "description": "The port of the container to which traffic is forwarded to."
          },
          {
            "name": "health_check_config",
            "type": "object",
            "description": "An object that describes the health check configuration of the container.",
            "children": [
              {
                "name": "healthy_threshold",
                "type": "integer",
                "description": "The number of consecutive health checks successes required before moving the container to the Healthy state. The default value is 2."
              },
              {
                "name": "interval_seconds",
                "type": "integer",
                "description": "The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is 5."
              },
              {
                "name": "path",
                "type": "string",
                "description": "The path on the container on which to perform the health check. The default value is /."
              },
              {
                "name": "success_codes",
                "type": "string",
                "description": "The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299)."
              },
              {
                "name": "timeout_seconds",
                "type": "integer",
                "description": "The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is 2."
              },
              {
                "name": "unhealthy_threshold",
                "type": "integer",
                "description": "The number of consecutive health check failures required before moving the container to the Unhealthy state. The default value is 2."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "is_disabled",
    "type": "boolean",
    "description": "A Boolean value to indicate whether the container service is disabled."
  },
  {
    "name": "private_registry_access",
    "type": "object",
    "description": "A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.",
    "children": [
      {
        "name": "ecr_image_puller_role",
        "type": "object",
        "description": "An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.",
        "children": [
          {
            "name": "is_active",
            "type": "boolean",
            "description": "A Boolean value that indicates whether to activate the role."
          },
          {
            "name": "principal_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the role, if it is activated."
          }
        ]
      }
    ]
  },
  {
    "name": "url",
    "type": "string",
    "description": "The publicly accessible URL of the container service."
  },
  {
    "name": "principal_arn",
    "type": "string",
    "description": "The principal ARN of the container service."
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
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "service_name",
    "type": "string",
    "description": "The name for the container service."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html"><code>AWS::Lightsail::Container</code></a>.

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
    <td><code>containers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ServiceName, Power, Scale, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>containers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>containers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>containers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>containers</code></td>
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

Gets all properties from an individual <code>container</code>.
```sql
SELECT
region,
service_name,
power,
container_arn,
scale,
public_domain_names,
container_service_deployment,
is_disabled,
private_registry_access,
url,
principal_arn,
tags
FROM awscc.lightsail.containers
WHERE region = 'us-east-1' AND data__Identifier = '<ServiceName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>containers</code> in a region.
```sql
SELECT
region,
service_name
FROM awscc.lightsail.containers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>container</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lightsail.containers (
 ServiceName,
 Power,
 Scale,
 region
)
SELECT 
'{{ ServiceName }}',
 '{{ Power }}',
 '{{ Scale }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.lightsail.containers (
 ServiceName,
 Power,
 Scale,
 PublicDomainNames,
 ContainerServiceDeployment,
 IsDisabled,
 PrivateRegistryAccess,
 Tags,
 region
)
SELECT 
 '{{ ServiceName }}',
 '{{ Power }}',
 '{{ Scale }}',
 '{{ PublicDomainNames }}',
 '{{ ContainerServiceDeployment }}',
 '{{ IsDisabled }}',
 '{{ PrivateRegistryAccess }}',
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
  - name: container
    props:
      - name: ServiceName
        value: '{{ ServiceName }}'
      - name: Power
        value: '{{ Power }}'
      - name: Scale
        value: '{{ Scale }}'
      - name: PublicDomainNames
        value:
          - CertificateName: '{{ CertificateName }}'
            DomainNames:
              - '{{ DomainNames[0] }}'
      - name: ContainerServiceDeployment
        value:
          Containers:
            - ServiceName: '{{ ServiceName }}'
              Power: '{{ Power }}'
              Scale: '{{ Scale }}'
              PublicDomainNames:
                - null
              ContainerServiceDeployment: null
              IsDisabled: '{{ IsDisabled }}'
              PrivateRegistryAccess:
                EcrImagePullerRole:
                  IsActive: '{{ IsActive }}'
                  PrincipalArn: '{{ PrincipalArn }}'
              Tags:
                - Key: '{{ Key }}'
                  Value: '{{ Value }}'
          PublicEndpoint:
            ContainerName: '{{ ContainerName }}'
            ContainerPort: '{{ ContainerPort }}'
            HealthCheckConfig:
              HealthyThreshold: '{{ HealthyThreshold }}'
              IntervalSeconds: '{{ IntervalSeconds }}'
              Path: '{{ Path }}'
              SuccessCodes: '{{ SuccessCodes }}'
              TimeoutSeconds: '{{ TimeoutSeconds }}'
              UnhealthyThreshold: '{{ UnhealthyThreshold }}'
      - name: IsDisabled
        value: '{{ IsDisabled }}'
      - name: PrivateRegistryAccess
        value: null
      - name: Tags
        value:
          - null

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.lightsail.containers
SET data__PatchDocument = string('{{ {
    "Power": power,
    "Scale": scale,
    "PublicDomainNames": public_domain_names,
    "ContainerServiceDeployment": container_service_deployment,
    "IsDisabled": is_disabled,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ServiceName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lightsail.containers
WHERE data__Identifier = '<ServiceName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>containers</code> resource, the following permissions are required:

### Create
```json
lightsail:CreateContainerService,
lightsail:CreateContainerServiceDeployment,
lightsail:GetContainerServices,
lightsail:TagResource,
lightsail:UntagResource,
lightsail:UpdateContainerService
```

### Read
```json
lightsail:GetContainerServices
```

### Delete
```json
lightsail:DeleteContainerService,
lightsail:GetContainerServices
```

### List
```json
lightsail:GetContainerServices
```

### Update
```json
lightsail:CreateContainerServiceDeployment,
lightsail:GetContainerServices,
lightsail:TagResource,
lightsail:UntagResource,
lightsail:UpdateContainerService
```
