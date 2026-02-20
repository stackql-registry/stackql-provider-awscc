---
title: mail_manager_ingress_points
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_manager_ingress_points
  - ses
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

Creates, updates, deletes or gets a <code>mail_manager_ingress_point</code> resource or lists <code>mail_manager_ingress_points</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>mail_manager_ingress_points</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::SES::MailManagerIngressPoint Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.mail_manager_ingress_points" /></td></tr>
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
    "name": "a_record",
    "type": "string",
    "description": ""
  },
  {
    "name": "traffic_policy_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ingress_point_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "ingress_point_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "ingress_point_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "ingress_point_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "network_configuration",
    "type": "object",
    "description": ""
  },
  {
    "name": "rule_set_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "status_to_update",
    "type": "string",
    "description": ""
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
    "name": "type",
    "type": "string",
    "description": ""
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
    "name": "ingress_point_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html"><code>AWS::SES::MailManagerIngressPoint</code></a>.

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
    <td><code>mail_manager_ingress_points</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Type, TrafficPolicyId, RuleSetId, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>mail_manager_ingress_points</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>mail_manager_ingress_points</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>mail_manager_ingress_points_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>mail_manager_ingress_points</code></td>
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

Gets all properties from an individual <code>mail_manager_ingress_point</code>.
```sql
SELECT
region,
a_record,
traffic_policy_id,
ingress_point_configuration,
ingress_point_arn,
ingress_point_id,
ingress_point_name,
network_configuration,
rule_set_id,
status,
status_to_update,
tags,
type
FROM awscc.ses.mail_manager_ingress_points
WHERE region = 'us-east-1' AND Identifier = '<IngressPointId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>mail_manager_ingress_points</code> in a region.
```sql
SELECT
region,
ingress_point_id
FROM awscc.ses.mail_manager_ingress_points_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>mail_manager_ingress_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.mail_manager_ingress_points (
 TrafficPolicyId,
 RuleSetId,
 Type,
 region
)
SELECT 
'{{ TrafficPolicyId }}',
 '{{ RuleSetId }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.mail_manager_ingress_points (
 TrafficPolicyId,
 IngressPointConfiguration,
 IngressPointName,
 NetworkConfiguration,
 RuleSetId,
 StatusToUpdate,
 Tags,
 Type,
 region
)
SELECT 
 '{{ TrafficPolicyId }}',
 '{{ IngressPointConfiguration }}',
 '{{ IngressPointName }}',
 '{{ NetworkConfiguration }}',
 '{{ RuleSetId }}',
 '{{ StatusToUpdate }}',
 '{{ Tags }}',
 '{{ Type }}',
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
  - name: mail_manager_ingress_point
    props:
      - name: TrafficPolicyId
        value: '{{ TrafficPolicyId }}'
      - name: IngressPointConfiguration
        value: null
      - name: IngressPointName
        value: '{{ IngressPointName }}'
      - name: NetworkConfiguration
        value: null
      - name: RuleSetId
        value: '{{ RuleSetId }}'
      - name: StatusToUpdate
        value: '{{ StatusToUpdate }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: Type
        value: '{{ Type }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>mail_manager_ingress_point</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.ses.mail_manager_ingress_points
SET PatchDocument = string('{{ {
    "TrafficPolicyId": traffic_policy_id,
    "IngressPointConfiguration": ingress_point_configuration,
    "IngressPointName": ingress_point_name,
    "RuleSetId": rule_set_id,
    "StatusToUpdate": status_to_update,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<IngressPointId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.mail_manager_ingress_points
WHERE Identifier = '<IngressPointId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>mail_manager_ingress_points</code> resource, the following permissions are required:

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
ses:TagResource,
ses:ListTagsForResource,
ses:GetIngressPoint,
ses:CreateIngressPoint,
iam:CreateServiceLinkedRole,
ec2:DescribeVpcEndpoints
```

</TabItem>
<TabItem value="read">

```json
ses:ListTagsForResource,
ses:GetIngressPoint
```

</TabItem>
<TabItem value="update">

```json
ses:TagResource,
ses:UntagResource,
ses:ListTagsForResource,
ses:GetIngressPoint,
ses:UpdateIngressPoint
```

</TabItem>
<TabItem value="delete">

```json
ses:GetIngressPoint,
ses:DeleteIngressPoint
```

</TabItem>
<TabItem value="list">

```json
ses:ListIngressPoints
```

</TabItem>
</Tabs>