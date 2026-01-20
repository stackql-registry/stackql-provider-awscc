---
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - appconfig
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

Creates, updates, deletes or gets a <code>deployment</code> resource or lists <code>deployments</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>deployments</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppConfig::Deployment</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appconfig.deployments" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "deployment_strategy_id",
    "type": "string",
    "description": "The deployment strategy ID."
  },
  {
    "name": "configuration_profile_id",
    "type": "string",
    "description": "The configuration profile ID."
  },
  {
    "name": "environment_id",
    "type": "string",
    "description": "The environment ID."
  },
  {
    "name": "kms_key_identifier",
    "type": "string",
    "description": "The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the deployment."
  },
  {
    "name": "configuration_version",
    "type": "string",
    "description": "The configuration version to deploy. If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number."
  },
  {
    "name": "state",
    "type": "string",
    "description": "The state of the deployment."
  },
  {
    "name": "deployment_number",
    "type": "string",
    "description": "The sequence number of the deployment."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "dynamic_extension_parameters",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "parameter_value",
        "type": "string",
        "description": ""
      },
      {
        "name": "extension_reference",
        "type": "string",
        "description": ""
      },
      {
        "name": "parameter_name",
        "type": "string",
        "description": ""
      }
    ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html"><code>AWS::AppConfig::Deployment</code></a>.

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
    <td><CopyableCode code="ApplicationId, ConfigurationProfileId, DeploymentStrategyId, EnvironmentId, ConfigurationVersion, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>deployment</code>.
```sql
SELECT
region,
deployment_strategy_id,
configuration_profile_id,
environment_id,
kms_key_identifier,
description,
configuration_version,
state,
deployment_number,
application_id,
dynamic_extension_parameters,
tags
FROM awscc.appconfig.deployments
WHERE region = 'us-east-1' AND data__Identifier = '<ApplicationId>|<EnvironmentId>|<DeploymentNumber>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>deployment</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appconfig.deployments (
 DeploymentStrategyId,
 ConfigurationProfileId,
 EnvironmentId,
 ConfigurationVersion,
 ApplicationId,
 region
)
SELECT 
'{{ DeploymentStrategyId }}',
 '{{ ConfigurationProfileId }}',
 '{{ EnvironmentId }}',
 '{{ ConfigurationVersion }}',
 '{{ ApplicationId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appconfig.deployments (
 DeploymentStrategyId,
 ConfigurationProfileId,
 EnvironmentId,
 KmsKeyIdentifier,
 Description,
 ConfigurationVersion,
 ApplicationId,
 DynamicExtensionParameters,
 Tags,
 region
)
SELECT 
 '{{ DeploymentStrategyId }}',
 '{{ ConfigurationProfileId }}',
 '{{ EnvironmentId }}',
 '{{ KmsKeyIdentifier }}',
 '{{ Description }}',
 '{{ ConfigurationVersion }}',
 '{{ ApplicationId }}',
 '{{ DynamicExtensionParameters }}',
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
  - name: deployment
    props:
      - name: DeploymentStrategyId
        value: '{{ DeploymentStrategyId }}'
      - name: ConfigurationProfileId
        value: '{{ ConfigurationProfileId }}'
      - name: EnvironmentId
        value: '{{ EnvironmentId }}'
      - name: KmsKeyIdentifier
        value: '{{ KmsKeyIdentifier }}'
      - name: Description
        value: '{{ Description }}'
      - name: ConfigurationVersion
        value: '{{ ConfigurationVersion }}'
      - name: ApplicationId
        value: '{{ ApplicationId }}'
      - name: DynamicExtensionParameters
        value:
          - ParameterValue: '{{ ParameterValue }}'
            ExtensionReference: '{{ ExtensionReference }}'
            ParameterName: '{{ ParameterName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appconfig.deployments
WHERE data__Identifier = '<ApplicationId|EnvironmentId|DeploymentNumber>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>deployments</code> resource, the following permissions are required:

### Read
```json
appconfig:GetDeployment,
appconfig:ListTagsForResource
```

### Create
```json
appconfig:StartDeployment,
appconfig:GetDeployment,
appconfig:TagResource,
appconfig:ListTagsForResource,
kms:GenerateDataKey
```

### List
```json
appconfig:ListDeployments
```

### Delete
```json
appconfig:StopDeployment
```
