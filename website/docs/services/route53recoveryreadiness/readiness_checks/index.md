---
title: readiness_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - readiness_checks
  - route53recoveryreadiness
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

Creates, updates, deletes or gets a <code>readiness_check</code> resource or lists <code>readiness_checks</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>readiness_checks</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Aws Route53 Recovery Readiness Check Schema and API specification.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.route53recoveryreadiness.readiness_checks" /></td></tr>
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
    "name": "resource_set_name",
    "type": "string",
    "description": "The name of the resource set to check."
  },
  {
    "name": "readiness_check_name",
    "type": "string",
    "description": "Name of the ReadinessCheck to create."
  },
  {
    "name": "readiness_check_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the readiness check."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A collection of tags associated with a resource.",
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
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "readiness_check_name",
    "type": "string",
    "description": "Name of the ReadinessCheck to create."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html"><code>AWS::Route53RecoveryReadiness::ReadinessCheck</code></a>.

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
    <td><code>readiness_checks</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>readiness_checks</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>readiness_checks</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>readiness_checks_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>readiness_checks</code></td>
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

Gets all properties from an individual <code>readiness_check</code>.
```sql
SELECT
region,
resource_set_name,
readiness_check_name,
readiness_check_arn,
tags
FROM awscc.route53recoveryreadiness.readiness_checks
WHERE region = 'us-east-1' AND Identifier = '<ReadinessCheckName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>readiness_checks</code> in a region.
```sql
SELECT
region,
readiness_check_name
FROM awscc.route53recoveryreadiness.readiness_checks_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>readiness_check</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.route53recoveryreadiness.readiness_checks (
 ResourceSetName,
 ReadinessCheckName,
 Tags,
 region
)
SELECT 
'{{ ResourceSetName }}',
 '{{ ReadinessCheckName }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.route53recoveryreadiness.readiness_checks (
 ResourceSetName,
 ReadinessCheckName,
 Tags,
 region
)
SELECT 
 '{{ ResourceSetName }}',
 '{{ ReadinessCheckName }}',
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
  - name: readiness_check
    props:
      - name: ResourceSetName
        value: '{{ ResourceSetName }}'
      - name: ReadinessCheckName
        value: '{{ ReadinessCheckName }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>readiness_check</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.route53recoveryreadiness.readiness_checks
SET PatchDocument = string('{{ {
    "ResourceSetName": resource_set_name,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ReadinessCheckName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.route53recoveryreadiness.readiness_checks
WHERE Identifier = '<ReadinessCheckName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>readiness_checks</code> resource, the following permissions are required:

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
route53-recovery-readiness:CreateReadinessCheck,
route53-recovery-readiness:GetResourceSet,
route53-recovery-readiness:GetReadinessCheck,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource
```

</TabItem>
<TabItem value="read">

```json
route53-recovery-readiness:GetReadinessCheck,
route53-recovery-readiness:ListTagsForResources
```

</TabItem>
<TabItem value="update">

```json
route53-recovery-readiness:UpdateReadinessCheck,
route53-recovery-readiness:GetResourceSet,
route53-recovery-readiness:GetReadinessCheck,
route53-recovery-readiness:ListTagsForResources,
route53-recovery-readiness:TagResource,
route53-recovery-readiness:UntagResource
```

</TabItem>
<TabItem value="delete">

```json
route53-recovery-readiness:DeleteReadinessCheck,
route53-recovery-readiness:GetReadinessCheck
```

</TabItem>
<TabItem value="list">

```json
route53-recovery-readiness:ListReadinessChecks,
route53-recovery-readiness:GetReadinessChecks
```

</TabItem>
</Tabs>