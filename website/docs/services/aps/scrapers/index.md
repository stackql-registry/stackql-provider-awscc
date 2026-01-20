---
title: scrapers
hide_title: false
hide_table_of_contents: false
keywords:
  - scrapers
  - aps
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

Creates, updates, deletes or gets a <code>scraper</code> resource or lists <code>scrapers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>scrapers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::APS::Scraper</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.aps.scrapers" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "scraper_id",
    "type": "string",
    "description": "Required to identify a specific scraper."
  },
  {
    "name": "alias",
    "type": "string",
    "description": "Scraper alias."
  },
  {
    "name": "arn",
    "type": "string",
    "description": "Scraper ARN."
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "IAM role ARN for the scraper."
  },
  {
    "name": "scrape_configuration",
    "type": "object",
    "description": "Scraper configuration",
    "children": [
      {
        "name": "configuration_blob",
        "type": "string",
        "description": "Prometheus compatible scrape configuration in base64 encoded blob format"
      }
    ]
  },
  {
    "name": "role_configuration",
    "type": "object",
    "description": "Role configuration",
    "children": [
      {
        "name": "source_role_arn",
        "type": "string",
        "description": "IAM Role in source account"
      },
      {
        "name": "target_role_arn",
        "type": "string",
        "description": "IAM Role in the target account"
      }
    ]
  },
  {
    "name": "source",
    "type": "object",
    "description": "Scraper metrics source",
    "children": [
      {
        "name": "eks_configuration",
        "type": "object",
        "description": "Configuration for EKS metrics source",
        "children": [
          {
            "name": "cluster_arn",
            "type": "string",
            "description": "ARN of an EKS cluster"
          },
          {
            "name": "security_group_ids",
            "type": "array",
            "description": "List of security group IDs"
          },
          {
            "name": "subnet_ids",
            "type": "array",
            "description": "List of subnet IDs"
          }
        ]
      }
    ]
  },
  {
    "name": "destination",
    "type": "object",
    "description": "Scraper metrics destination",
    "children": [
      {
        "name": "amp_configuration",
        "type": "object",
        "description": "Configuration for Amazon Managed Prometheus metrics destination",
        "children": [
          {
            "name": "workspace_arn",
            "type": "string",
            "description": "ARN of an Amazon Managed Prometheus workspace"
          }
        ]
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html"><code>AWS::APS::Scraper</code></a>.

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
    <td><CopyableCode code="ScrapeConfiguration, Source, Destination, region" /></td>
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

Gets all properties from an individual <code>scraper</code>.
```sql
SELECT
region,
scraper_id,
alias,
arn,
role_arn,
scrape_configuration,
role_configuration,
source,
destination,
tags
FROM awscc.aps.scrapers
WHERE region = 'us-east-1' AND data__Identifier = '<Arn>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>scraper</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.aps.scrapers (
 ScrapeConfiguration,
 Source,
 Destination,
 region
)
SELECT 
'{{ ScrapeConfiguration }}',
 '{{ Source }}',
 '{{ Destination }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.aps.scrapers (
 Alias,
 ScrapeConfiguration,
 RoleConfiguration,
 Source,
 Destination,
 Tags,
 region
)
SELECT 
 '{{ Alias }}',
 '{{ ScrapeConfiguration }}',
 '{{ RoleConfiguration }}',
 '{{ Source }}',
 '{{ Destination }}',
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
  - name: scraper
    props:
      - name: Alias
        value: '{{ Alias }}'
      - name: ScrapeConfiguration
        value:
          ConfigurationBlob: '{{ ConfigurationBlob }}'
      - name: RoleConfiguration
        value:
          SourceRoleArn: '{{ SourceRoleArn }}'
          TargetRoleArn: '{{ TargetRoleArn }}'
      - name: Source
        value:
          EksConfiguration:
            ClusterArn: '{{ ClusterArn }}'
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            SubnetIds:
              - '{{ SubnetIds[0] }}'
      - name: Destination
        value:
          AmpConfiguration:
            WorkspaceArn: '{{ WorkspaceArn }}'
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
DELETE FROM awscc.aps.scrapers
WHERE data__Identifier = '<Arn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>scrapers</code> resource, the following permissions are required:

### Create
```json
aps:CreateScraper,
aps:DescribeScraper,
aps:DescribeWorkspace,
aps:TagResource,
eks:CreateAccessEntry,
eks:AssociateAccessPolicy,
eks:DescribeCluster,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
iam:CreateServiceLinkedRole,
iam:PassRole
```

### Read
```json
aps:DescribeScraper,
aps:ListTagsForResource
```

### Update
```json
aps:CreateScraper,
aps:DescribeScraper,
aps:UpdateScraper,
aps:DescribeWorkspace,
aps:TagResource,
aps:UntagResource,
aps:ListTagsForResource,
iam:PassRole
```

### Delete
```json
aps:DeleteScraper,
aps:DescribeScraper,
aps:DescribeWorkspace,
eks:AssociateAccessPolicy,
eks:DescribeCluster,
ec2:DescribeSubnets,
ec2:DescribeSecurityGroups,
iam:DeleteServiceLinkedRole
```

### List
```json
aps:ListScrapers,
aps:ListTagsForResource
```
