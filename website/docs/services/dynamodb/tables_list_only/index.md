---
title: tables_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - tables_list_only
  - dynamodb
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

Lists <code>tables</code> in a region or regions, for all properties use <a href="/services/dynamodb/tables/"><code>tables</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>tables_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::DynamoDB::Table&#96;&#96; resource creates a DDB table. For more information, see &#91;CreateTable&#93;(https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API&#95;CreateTable.html) in the &#42;API Reference&#42;.<br />You should be aware of the following behaviors when working with DDB tables:<br />+ CFNlong typically creates DDB tables in parallel. However, if your template includes multiple DDB tables with indexes, you must declare dependencies so that the tables are created sequentially. DDBlong limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DDB returns an error and the stack operation fails. For an example, see &#91;DynamoDB Table with a DependsOn Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table--examples--DynamoDB&#95;Table&#95;with&#95;a&#95;DependsOn&#95;Attribute).<br /><br />Our guidance is to use the latest schema documented for your CFNlong templates. This schema supports the provisioning of all table settings below. When using this schema in your CFNlong templates, please ensure that your Identity and Access Management (IAM) policies are updated with appropriate permissions to allow for the authorization of these setting changes.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.dynamodb.tables_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "table_name",
    "type": "string",
    "description": "A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>tables</code> in a region.
```sql
SELECT
region,
table_name
FROM awscc.dynamodb.tables_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>tables_list_only</code> resource, see <a href="/services/dynamodb/tables/#permissions"><code>tables</code></a>

