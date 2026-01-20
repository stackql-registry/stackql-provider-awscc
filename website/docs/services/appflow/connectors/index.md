---
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - appflow
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

Creates, updates, deletes or gets a <code>connector</code> resource or lists <code>connectors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connectors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource schema for AWS::AppFlow::Connector</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appflow.connectors" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "connector_label",
    "type": "string",
    "description": "The name of the connector. The name is unique for each ConnectorRegistration in your AWS account."
  },
  {
    "name": "connector_arn",
    "type": "string",
    "description": "The arn of the connector. The arn is unique for each ConnectorRegistration in your AWS account."
  },
  {
    "name": "connector_provisioning_type",
    "type": "string",
    "description": "The provisioning type of the connector. Currently the only supported value is LAMBDA."
  },
  {
    "name": "connector_provisioning_config",
    "type": "object",
    "description": "Contains information about the configuration of the connector being registered.",
    "children": [
      {
        "name": "lambda",
        "type": "object",
        "description": "Contains information about the configuration of the lambda which is being registered as the connector.",
        "children": [
          {
            "name": "lambda_arn",
            "type": "string",
            "description": "Lambda ARN of the connector being registered."
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description about the connector that's being registered."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html"><code>AWS::AppFlow::Connector</code></a>.

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
    <td><CopyableCode code="ConnectorProvisioningType, ConnectorProvisioningConfig, region" /></td>
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

Gets all properties from an individual <code>connector</code>.
```sql
SELECT
region,
connector_label,
connector_arn,
connector_provisioning_type,
connector_provisioning_config,
description
FROM awscc.appflow.connectors
WHERE region = 'us-east-1' AND data__Identifier = '<ConnectorLabel>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connector</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appflow.connectors (
 ConnectorProvisioningType,
 ConnectorProvisioningConfig,
 region
)
SELECT 
'{{ ConnectorProvisioningType }}',
 '{{ ConnectorProvisioningConfig }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appflow.connectors (
 ConnectorLabel,
 ConnectorProvisioningType,
 ConnectorProvisioningConfig,
 Description,
 region
)
SELECT 
 '{{ ConnectorLabel }}',
 '{{ ConnectorProvisioningType }}',
 '{{ ConnectorProvisioningConfig }}',
 '{{ Description }}',
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
  - name: connector
    props:
      - name: ConnectorLabel
        value: '{{ ConnectorLabel }}'
      - name: ConnectorProvisioningType
        value: '{{ ConnectorProvisioningType }}'
      - name: ConnectorProvisioningConfig
        value:
          Lambda:
            LambdaArn: '{{ LambdaArn }}'
      - name: Description
        value: '{{ Description }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appflow.connectors
WHERE data__Identifier = '<ConnectorLabel>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connectors</code> resource, the following permissions are required:

### Create
```json
appflow:RegisterConnector,
lambda:InvokeFunction
```

### Read
```json
appflow:DescribeConnector
```

### Delete
```json
appflow:UnRegisterConnector
```

### List
```json
appflow:ListConnectors
```

### Update
```json
appflow:UpdateConnectorRegistration,
lambda:InvokeFunction
```
