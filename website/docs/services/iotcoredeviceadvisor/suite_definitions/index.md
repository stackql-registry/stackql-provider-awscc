---
title: suite_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - suite_definitions
  - iotcoredeviceadvisor
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

Creates, updates, deletes or gets a <code>suite_definition</code> resource or lists <code>suite_definitions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>suite_definitions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>An example resource schema demonstrating some basic constructs and validation rules.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iotcoredeviceadvisor.suite_definitions" /></td></tr>
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
    "name": "suite_definition_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "device_permission_role_arn",
        "type": "string",
        "description": "The device permission role arn of the test suite."
      },
      {
        "name": "devices",
        "type": "array",
        "description": "The devices being tested in the test suite",
        "children": [
          {
            "name": "certificate_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "thing_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "intended_for_qualification",
        "type": "boolean",
        "description": "Whether the tests are intended for qualification in a suite."
      },
      {
        "name": "root_group",
        "type": "string",
        "description": "The root group of the test suite."
      },
      {
        "name": "suite_definition_name",
        "type": "string",
        "description": "The Name of the suite definition."
      }
    ]
  },
  {
    "name": "suite_definition_id",
    "type": "string",
    "description": "The unique identifier for the suite definition."
  },
  {
    "name": "suite_definition_arn",
    "type": "string",
    "description": "The Amazon Resource name for the suite definition."
  },
  {
    "name": "suite_definition_version",
    "type": "string",
    "description": "The suite definition version of a test suite."
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
    "name": "suite_definition_id",
    "type": "string",
    "description": "The unique identifier for the suite definition."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html"><code>AWS::IoTCoreDeviceAdvisor::SuiteDefinition</code></a>.

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
    <td><code>suite_definitions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="SuiteDefinitionConfiguration, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>suite_definitions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>suite_definitions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>suite_definitions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>suite_definitions</code></td>
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

Gets all properties from an individual <code>suite_definition</code>.
```sql
SELECT
region,
suite_definition_configuration,
suite_definition_id,
suite_definition_arn,
suite_definition_version,
tags
FROM awscc.iotcoredeviceadvisor.suite_definitions
WHERE region = 'us-east-1' AND Identifier = '<SuiteDefinitionId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>suite_definitions</code> in a region.
```sql
SELECT
region,
suite_definition_id
FROM awscc.iotcoredeviceadvisor.suite_definitions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>suite_definition</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.iotcoredeviceadvisor.suite_definitions (
 SuiteDefinitionConfiguration,
 region
)
SELECT 
'{{ SuiteDefinitionConfiguration }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.iotcoredeviceadvisor.suite_definitions (
 SuiteDefinitionConfiguration,
 Tags,
 region
)
SELECT 
 '{{ SuiteDefinitionConfiguration }}',
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
  - name: suite_definition
    props:
      - name: SuiteDefinitionConfiguration
        value:
          DevicePermissionRoleArn: '{{ DevicePermissionRoleArn }}'
          Devices:
            - CertificateArn: '{{ CertificateArn }}'
              ThingArn: '{{ ThingArn }}'
          IntendedForQualification: '{{ IntendedForQualification }}'
          RootGroup: '{{ RootGroup }}'
          SuiteDefinitionName: '{{ SuiteDefinitionName }}'
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
UPDATE awscc.iotcoredeviceadvisor.suite_definitions
SET PatchDocument = string('{{ {
    "SuiteDefinitionConfiguration": suite_definition_configuration,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<SuiteDefinitionId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.iotcoredeviceadvisor.suite_definitions
WHERE Identifier = '<SuiteDefinitionId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>suite_definitions</code> resource, the following permissions are required:

### Create
```json
iot:DescribeCertificate,
iot:DescribeThing,
iot:GetPolicy,
iot:ListAttachedPolicies,
iot:ListCertificates,
iot:ListPrincipalPolicies,
iot:ListThingPrincipals,
iot:ListThings,
iotdeviceadvisor:CreateSuiteDefinition,
iotdeviceadvisor:TagResource,
iam:PassRole
```

### Read
```json
iotdeviceadvisor:GetSuiteDefinition,
iot:ListTagsForResource
```

### Update
```json
iot:DescribeCertificate,
iot:DescribeThing,
iot:GetPolicy,
iot:ListAttachedPolicies,
iot:ListCertificates,
iot:ListPrincipalPolicies,
iot:ListThingPrincipals,
iot:ListThings,
iotdeviceadvisor:UpdateSuiteDefinition,
iotdeviceadvisor:GetSuiteDefinition,
iotdeviceadvisor:UntagResource,
iotdeviceadvisor:TagResource,
iam:PassRole
```

### Delete
```json
iotdeviceadvisor:GetSuiteDefinition,
iotdeviceadvisor:DeleteSuiteDefinition
```

### List
```json
iotdeviceadvisor:ListSuiteDefinitions
```
