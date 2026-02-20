---
title: configuration_aggregators
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_aggregators
  - config
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

Creates, updates, deletes or gets a <code>configuration_aggregator</code> resource or lists <code>configuration_aggregators</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>configuration_aggregators</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Config::ConfigurationAggregator</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.config.configuration_aggregators" /></td></tr>
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
    "name": "account_aggregation_sources",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "all_aws_regions",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "aws_regions",
        "type": "array",
        "description": ""
      },
      {
        "name": "account_ids",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "configuration_aggregator_name",
    "type": "string",
    "description": "The name of the aggregator."
  },
  {
    "name": "configuration_aggregator_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the aggregator."
  },
  {
    "name": "organization_aggregation_source",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "all_aws_regions",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "aws_regions",
        "type": "array",
        "description": ""
      },
      {
        "name": "role_arn",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags for the configuration aggregator.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
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
    "name": "configuration_aggregator_name",
    "type": "string",
    "description": "The name of the aggregator."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html"><code>AWS::Config::ConfigurationAggregator</code></a>.

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
    <td><code>configuration_aggregators</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>configuration_aggregators</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>configuration_aggregators</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>configuration_aggregators_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>configuration_aggregators</code></td>
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

Gets all properties from an individual <code>configuration_aggregator</code>.
```sql
SELECT
region,
account_aggregation_sources,
configuration_aggregator_name,
configuration_aggregator_arn,
organization_aggregation_source,
tags
FROM awscc.config.configuration_aggregators
WHERE region = 'us-east-1' AND Identifier = '<ConfigurationAggregatorName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>configuration_aggregators</code> in a region.
```sql
SELECT
region,
configuration_aggregator_name
FROM awscc.config.configuration_aggregators_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>configuration_aggregator</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.config.configuration_aggregators (
 AccountAggregationSources,
 ConfigurationAggregatorName,
 OrganizationAggregationSource,
 Tags,
 region
)
SELECT 
'{{ AccountAggregationSources }}',
 '{{ ConfigurationAggregatorName }}',
 '{{ OrganizationAggregationSource }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.config.configuration_aggregators (
 AccountAggregationSources,
 ConfigurationAggregatorName,
 OrganizationAggregationSource,
 Tags,
 region
)
SELECT 
 '{{ AccountAggregationSources }}',
 '{{ ConfigurationAggregatorName }}',
 '{{ OrganizationAggregationSource }}',
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
  - name: configuration_aggregator
    props:
      - name: AccountAggregationSources
        value:
          - AllAwsRegions: '{{ AllAwsRegions }}'
            AwsRegions:
              - '{{ AwsRegions[0] }}'
            AccountIds:
              - '{{ AccountIds[0] }}'
      - name: ConfigurationAggregatorName
        value: '{{ ConfigurationAggregatorName }}'
      - name: OrganizationAggregationSource
        value:
          AllAwsRegions: '{{ AllAwsRegions }}'
          AwsRegions:
            - '{{ AwsRegions[0] }}'
          RoleArn: '{{ RoleArn }}'
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
UPDATE awscc.config.configuration_aggregators
SET PatchDocument = string('{{ {
    "AccountAggregationSources": account_aggregation_sources,
    "OrganizationAggregationSource": organization_aggregation_source,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ConfigurationAggregatorName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.config.configuration_aggregators
WHERE Identifier = '<ConfigurationAggregatorName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>configuration_aggregators</code> resource, the following permissions are required:

### Create
```json
config:PutConfigurationAggregator,
config:DescribeConfigurationAggregators,
config:TagResource,
iam:PassRole,
organizations:EnableAWSServiceAccess,
organizations:ListDelegatedAdministrators
```

### Read
```json
config:DescribeConfigurationAggregators,
config:ListTagsForResource
```

### Update
```json
config:PutConfigurationAggregator,
config:DescribeConfigurationAggregators,
config:TagResource,
config:UntagResource,
config:ListTagsForResource,
iam:PassRole,
organizations:EnableAWSServiceAccess,
organizations:ListDelegatedAdministrators
```

### Delete
```json
config:DeleteConfigurationAggregator,
config:UntagResource
```

### List
```json
config:DescribeConfigurationAggregators
```
