---
title: code_security_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_integrations
  - inspectorv2
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

Creates, updates, deletes or gets a <code>code_security_integration</code> resource or lists <code>code_security_integrations</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>code_security_integrations</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Inspector CodeSecurityIntegration resource schema</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.inspectorv2.code_security_integrations" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="name" /></td><td><code>string</code></td><td>Code Security Integration name</td></tr>
<tr><td><CopyableCode code="type" /></td><td><code>string</code></td><td>Integration Type</td></tr>
<tr><td><CopyableCode code="create_integration_details" /></td><td><code>object</code></td><td>Create Integration Details</td></tr>
<tr><td><CopyableCode code="update_integration_details" /></td><td><code>object</code></td><td>Update Integration Details</td></tr>
<tr><td><CopyableCode code="status" /></td><td><code>string</code></td><td>Integration Status</td></tr>
<tr><td><CopyableCode code="status_reason" /></td><td><code>string</code></td><td>Reason for the current status</td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td>Code Security Integration ARN</td></tr>
<tr><td><CopyableCode code="authorization_url" /></td><td><code>string</code></td><td>Authorization URL for OAuth flow</td></tr>
<tr><td><CopyableCode code="created_at" /></td><td><code>string</code></td><td>Creation timestamp</td></tr>
<tr><td><CopyableCode code="last_updated_at" /></td><td><code>string</code></td><td>Last update timestamp</td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-codesecurityintegration.html"><code>AWS::InspectorV2::CodeSecurityIntegration</code></a>.

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
Gets all <code>code_security_integrations</code> in a region.
```sql
SELECT
region,
name,
type,
create_integration_details,
update_integration_details,
status,
status_reason,
arn,
authorization_url,
created_at,
last_updated_at,
tags
FROM awscc.inspectorv2.code_security_integrations
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>code_security_integration</code>.
```sql
SELECT
region,
name,
type,
create_integration_details,
update_integration_details,
status,
status_reason,
arn,
authorization_url,
created_at,
last_updated_at,
tags
FROM awscc.inspectorv2.code_security_integrations
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>code_security_integration</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.inspectorv2.code_security_integrations (
 Name,
 Type,
 CreateIntegrationDetails,
 UpdateIntegrationDetails,
 Tags,
 region
)
SELECT 
'{{ Name }}',
 '{{ Type }}',
 '{{ CreateIntegrationDetails }}',
 '{{ UpdateIntegrationDetails }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.inspectorv2.code_security_integrations (
 Name,
 Type,
 CreateIntegrationDetails,
 UpdateIntegrationDetails,
 Tags,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Type }}',
 '{{ CreateIntegrationDetails }}',
 '{{ UpdateIntegrationDetails }}',
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
  - name: code_security_integration
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Type
        value: '{{ Type }}'
      - name: CreateIntegrationDetails
        value:
          gitlabSelfManaged:
            instanceUrl: '{{ instanceUrl }}'
            accessToken: '{{ accessToken }}'
      - name: UpdateIntegrationDetails
        value:
          gitlabSelfManaged:
            authCode: '{{ authCode }}'
          github:
            code: '{{ code }}'
            installationId: '{{ installationId }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.inspectorv2.code_security_integrations
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>code_security_integrations</code> resource, the following permissions are required:

### Create
```json
inspector2:CreateCodeSecurityIntegration,
inspector2:GetCodeSecurityIntegration,
inspector2:TagResource
```

### Read
```json
inspector2:GetCodeSecurityIntegration,
inspector2:ListTagsForResource
```

### Update
```json
inspector2:UpdateCodeSecurityIntegration,
inspector2:GetCodeSecurityIntegration,
inspector2:ListTagsForResource,
inspector2:TagResource,
inspector2:UntagResource
```

### Delete
```json
inspector2:DeleteCodeSecurityIntegration,
inspector2:GetCodeSecurityIntegration
```

### List
```json
inspector2:ListCodeSecurityIntegrations
```
