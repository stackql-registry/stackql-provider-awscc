---
title: publishers
hide_title: false
hide_table_of_contents: false
keywords:
  - publishers
  - cloudformation
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

Creates, updates, deletes or gets a <code>publisher</code> resource or lists <code>publishers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>publishers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Register as a publisher in the CloudFormation Registry.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cloudformation.publishers" /></td></tr>
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
    "name": "accept_terms_and_conditions",
    "type": "boolean",
    "description": "Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms&#95;and&#95;Conditions&#95;for&#95;AWS&#95;CloudFormation&#95;Registry&#95;Publishers.pdf"
  },
  {
    "name": "publisher_id",
    "type": "string",
    "description": "The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region."
  },
  {
    "name": "connection_arn",
    "type": "string",
    "description": "If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account."
  },
  {
    "name": "publisher_status",
    "type": "string",
    "description": "Whether the publisher is verified."
  },
  {
    "name": "publisher_profile",
    "type": "string",
    "description": "The URL to the publisher's profile with the identity provider."
  },
  {
    "name": "identity_provider",
    "type": "string",
    "description": "The type of account used as the identity provider when registering this publisher with CloudFormation."
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
    "name": "publisher_id",
    "type": "string",
    "description": "The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html"><code>AWS::CloudFormation::Publisher</code></a>.

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
    <td><code>publishers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="AcceptTermsAndConditions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>publishers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>publishers</code></td>
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

Gets all properties from an individual <code>publisher</code>.
```sql
SELECT
region,
accept_terms_and_conditions,
publisher_id,
connection_arn,
publisher_status,
publisher_profile,
identity_provider
FROM awscc.cloudformation.publishers
WHERE region = 'us-east-1' AND Identifier = '{{ publisher_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>publishers</code> in a region.
```sql
SELECT
region,
publisher_id
FROM awscc.cloudformation.publishers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>publisher</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cloudformation.publishers (
 AcceptTermsAndConditions,
 region
)
SELECT
'{{ accept_terms_and_conditions }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cloudformation.publishers (
 AcceptTermsAndConditions,
 ConnectionArn,
 region
)
SELECT
 '{{ accept_terms_and_conditions }}',
 '{{ connection_arn }}',
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
  - name: publisher
    props:
      - name: accept_terms_and_conditions
        value: '{{ accept_terms_and_conditions }}'
      - name: connection_arn
        value: '{{ connection_arn }}'
```
</TabItem>
</Tabs>


## Permissions

To operate on the <code>publishers</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
cloudformation:RegisterPublisher,
cloudformation:DescribePublisher,
codestar-connections:GetConnection,
codestar-connections:UseConnection
```

</TabItem>
<TabItem value="read">

```json
cloudformation:DescribePublisher
```

</TabItem>
<TabItem value="list">

```json
cloudformation:DescribePublisher
```

</TabItem>
</Tabs>