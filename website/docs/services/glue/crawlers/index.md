---
title: crawlers
hide_title: false
hide_table_of_contents: false
keywords:
  - crawlers
  - glue
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

Creates, updates, deletes or gets a <code>crawler</code> resource or lists <code>crawlers</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>crawlers</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::Glue::Crawler</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.glue.crawlers" /></td></tr>
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
    "name": "classifiers",
    "type": "array",
    "description": "A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the crawler."
  },
  {
    "name": "schema_change_policy",
    "type": "object",
    "description": "The policy that specifies update and delete behaviors for the crawler. The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.",
    "children": [
      {
        "name": "update_behavior",
        "type": "string",
        "description": "The update behavior when the crawler finds a changed schema. A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE&#95;IN&#95;DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions."
      },
      {
        "name": "delete_behavior",
        "type": "string",
        "description": "The deletion behavior when the crawler finds a deleted object. A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE&#95;FROM&#95;DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE&#95;IN&#95;DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation."
      }
    ]
  },
  {
    "name": "configuration",
    "type": "string",
    "description": "Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior."
  },
  {
    "name": "recrawl_policy",
    "type": "object",
    "description": "When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see Incremental Crawls in AWS Glue in the developer guide.",
    "children": [
      {
        "name": "recrawl_behavior",
        "type": "string",
        "description": "Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. A value of CRAWL&#95;EVERYTHING specifies crawling the entire dataset again. A value of CRAWL&#95;NEW&#95;FOLDERS&#95;ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL&#95;EVENT&#95;MODE specifies crawling only the changes identified by Amazon S3 events."
      }
    ]
  },
  {
    "name": "database_name",
    "type": "string",
    "description": "The name of the database in which the crawler's output is stored."
  },
  {
    "name": "targets",
    "type": "object",
    "description": "Specifies data stores to crawl.",
    "children": [
      {
        "name": "s3_targets",
        "type": "array",
        "description": "Specifies Amazon Simple Storage Service (Amazon S3) targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC)."
          },
          {
            "name": "path",
            "type": "string",
            "description": "The path to the Amazon S3 target."
          },
          {
            "name": "sample_size",
            "type": "integer",
            "description": "Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249."
          },
          {
            "name": "exclusions",
            "type": "array",
            "description": "A list of glob patterns used to exclude from the crawl."
          },
          {
            "name": "dlq_event_queue_arn",
            "type": "string",
            "description": "A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue."
          },
          {
            "name": "event_queue_arn",
            "type": "string",
            "description": "A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs."
          }
        ]
      },
      {
        "name": "catalog_targets",
        "type": "array",
        "description": "Specifies AWS Glue Data Catalog targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type."
          },
          {
            "name": "database_name",
            "type": "string",
            "description": "The name of the database to be synchronized."
          },
          {
            "name": "dlq_event_queue_arn",
            "type": "string",
            "description": "A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue."
          },
          {
            "name": "tables",
            "type": "array",
            "description": "A list of the tables to be synchronized."
          },
          {
            "name": "event_queue_arn",
            "type": "string",
            "description": "A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs."
          }
        ]
      },
      {
        "name": "delta_targets",
        "type": "array",
        "description": "Specifies an array of Delta data store targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection to use to connect to the Delta table target."
          },
          {
            "name": "create_native_delta_table",
            "type": "boolean",
            "description": "Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly."
          },
          {
            "name": "write_manifest",
            "type": "boolean",
            "description": "Specifies whether to write the manifest files to the Delta table path."
          },
          {
            "name": "delta_tables",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "mongo_db_targets",
        "type": "array",
        "description": "A list of Mongo DB targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target."
          },
          {
            "name": "path",
            "type": "string",
            "description": "The path of the Amazon DocumentDB or MongoDB target (database/collection)."
          }
        ]
      },
      {
        "name": "jdbc_targets",
        "type": "array",
        "description": "Specifies JDBC targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection to use to connect to the JDBC target."
          },
          {
            "name": "path",
            "type": "string",
            "description": "The path of the JDBC target."
          },
          {
            "name": "exclusions",
            "type": "array",
            "description": "A list of glob patterns used to exclude from the crawl. For more information, see Catalog Tables with a Crawler."
          },
          {
            "name": "enable_additional_metadata",
            "type": "array",
            "description": "Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.<br />If you do not need additional metadata, keep the field empty."
          }
        ]
      },
      {
        "name": "dynamo_db_targets",
        "type": "array",
        "description": "Specifies Amazon DynamoDB targets.",
        "children": [
          {
            "name": "path",
            "type": "string",
            "description": "The name of the DynamoDB table to crawl."
          },
          {
            "name": "scan_all",
            "type": "boolean",
            "description": "Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true."
          },
          {
            "name": "scan_rate",
            "type": "number",
            "description": "The percentage of the configured read capacity units to use by the AWS Glue crawler. Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.<br />The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode)."
          }
        ]
      },
      {
        "name": "iceberg_targets",
        "type": "array",
        "description": "Specifies Apache Iceberg data store targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection to use to connect to the Iceberg target."
          },
          {
            "name": "paths",
            "type": "array",
            "description": "One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix ."
          },
          {
            "name": "exclusions",
            "type": "array",
            "description": "A list of global patterns used to exclude from the crawl."
          },
          {
            "name": "maximum_traversal_depth",
            "type": "integer",
            "description": "The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time."
          }
        ]
      },
      {
        "name": "hudi_targets",
        "type": "array",
        "description": "Specifies Apache Hudi data store targets.",
        "children": [
          {
            "name": "connection_name",
            "type": "string",
            "description": "The name of the connection to use to connect to the Hudi target."
          },
          {
            "name": "paths",
            "type": "array",
            "description": "One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix ."
          },
          {
            "name": "exclusions",
            "type": "array",
            "description": "A list of global patterns used to exclude from the crawl."
          },
          {
            "name": "maximum_traversal_depth",
            "type": "integer",
            "description": "The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time."
          }
        ]
      }
    ]
  },
  {
    "name": "crawler_security_configuration",
    "type": "string",
    "description": "The name of the SecurityConfiguration structure to be used by this crawler."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the crawler."
  },
  {
    "name": "role",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data."
  },
  {
    "name": "lake_formation_configuration",
    "type": "object",
    "description": "Specifies AWS Lake Formation configuration settings for the crawler",
    "children": [
      {
        "name": "use_lake_formation_credentials",
        "type": "boolean",
        "description": "Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials."
      },
      {
        "name": "account_id",
        "type": "string",
        "description": "Required for cross account crawls. For same account crawls as the target data, this can be left as null."
      }
    ]
  },
  {
    "name": "schedule",
    "type": "object",
    "description": "A scheduling object using a cron statement to schedule an event.",
    "children": [
      {
        "name": "schedule_expression",
        "type": "string",
        "description": "A cron expression used to specify the schedule. For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 &#42; &#42; ? &#42;)."
      }
    ]
  },
  {
    "name": "table_prefix",
    "type": "string",
    "description": "The prefix added to the names of tables that are created."
  },
  {
    "name": "tags",
    "type": "object",
    "description": "The tags to use with this crawler."
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
    "name": "name",
    "type": "string",
    "description": "The name of the crawler."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html"><code>AWS::Glue::Crawler</code></a>.

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
    <td><code>crawlers</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Role, Targets, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>crawlers</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>crawlers</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>crawlers_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>crawlers</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
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

Gets all properties from an individual <code>crawler</code>.
```sql
SELECT
region,
classifiers,
description,
schema_change_policy,
configuration,
recrawl_policy,
database_name,
targets,
crawler_security_configuration,
name,
role,
lake_formation_configuration,
schedule,
table_prefix,
tags
FROM awscc.glue.crawlers
WHERE region = 'us-east-1' AND data__Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>crawlers</code> in a region.
```sql
SELECT
region,
name
FROM awscc.glue.crawlers_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>crawler</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.glue.crawlers (
 Targets,
 Role,
 region
)
SELECT 
'{{ Targets }}',
 '{{ Role }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.glue.crawlers (
 Classifiers,
 Description,
 SchemaChangePolicy,
 Configuration,
 RecrawlPolicy,
 DatabaseName,
 Targets,
 CrawlerSecurityConfiguration,
 Name,
 Role,
 LakeFormationConfiguration,
 Schedule,
 TablePrefix,
 Tags,
 region
)
SELECT 
 '{{ Classifiers }}',
 '{{ Description }}',
 '{{ SchemaChangePolicy }}',
 '{{ Configuration }}',
 '{{ RecrawlPolicy }}',
 '{{ DatabaseName }}',
 '{{ Targets }}',
 '{{ CrawlerSecurityConfiguration }}',
 '{{ Name }}',
 '{{ Role }}',
 '{{ LakeFormationConfiguration }}',
 '{{ Schedule }}',
 '{{ TablePrefix }}',
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
  - name: crawler
    props:
      - name: Classifiers
        value:
          - '{{ Classifiers[0] }}'
      - name: Description
        value: '{{ Description }}'
      - name: SchemaChangePolicy
        value:
          UpdateBehavior: '{{ UpdateBehavior }}'
          DeleteBehavior: '{{ DeleteBehavior }}'
      - name: Configuration
        value: '{{ Configuration }}'
      - name: RecrawlPolicy
        value:
          RecrawlBehavior: '{{ RecrawlBehavior }}'
      - name: DatabaseName
        value: '{{ DatabaseName }}'
      - name: Targets
        value:
          S3Targets:
            - ConnectionName: '{{ ConnectionName }}'
              Path: '{{ Path }}'
              SampleSize: '{{ SampleSize }}'
              Exclusions:
                - '{{ Exclusions[0] }}'
              DlqEventQueueArn: '{{ DlqEventQueueArn }}'
              EventQueueArn: '{{ EventQueueArn }}'
          CatalogTargets:
            - ConnectionName: '{{ ConnectionName }}'
              DatabaseName: '{{ DatabaseName }}'
              DlqEventQueueArn: '{{ DlqEventQueueArn }}'
              Tables:
                - '{{ Tables[0] }}'
              EventQueueArn: '{{ EventQueueArn }}'
          DeltaTargets:
            - ConnectionName: '{{ ConnectionName }}'
              CreateNativeDeltaTable: '{{ CreateNativeDeltaTable }}'
              WriteManifest: '{{ WriteManifest }}'
              DeltaTables:
                - '{{ DeltaTables[0] }}'
          MongoDBTargets:
            - ConnectionName: '{{ ConnectionName }}'
              Path: '{{ Path }}'
          JdbcTargets:
            - ConnectionName: '{{ ConnectionName }}'
              Path: '{{ Path }}'
              Exclusions:
                - '{{ Exclusions[0] }}'
              EnableAdditionalMetadata:
                - '{{ EnableAdditionalMetadata[0] }}'
          DynamoDBTargets:
            - Path: '{{ Path }}'
              ScanAll: '{{ ScanAll }}'
              ScanRate: null
          IcebergTargets:
            - ConnectionName: '{{ ConnectionName }}'
              Paths:
                - '{{ Paths[0] }}'
              Exclusions:
                - '{{ Exclusions[0] }}'
              MaximumTraversalDepth: '{{ MaximumTraversalDepth }}'
          HudiTargets:
            - ConnectionName: '{{ ConnectionName }}'
              Paths:
                - '{{ Paths[0] }}'
              Exclusions:
                - '{{ Exclusions[0] }}'
              MaximumTraversalDepth: '{{ MaximumTraversalDepth }}'
      - name: CrawlerSecurityConfiguration
        value: '{{ CrawlerSecurityConfiguration }}'
      - name: Name
        value: '{{ Name }}'
      - name: Role
        value: '{{ Role }}'
      - name: LakeFormationConfiguration
        value:
          UseLakeFormationCredentials: '{{ UseLakeFormationCredentials }}'
          AccountId: '{{ AccountId }}'
      - name: Schedule
        value:
          ScheduleExpression: '{{ ScheduleExpression }}'
      - name: TablePrefix
        value: '{{ TablePrefix }}'
      - name: Tags
        value: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.glue.crawlers
SET data__PatchDocument = string('{{ {
    "Classifiers": classifiers,
    "Description": description,
    "SchemaChangePolicy": schema_change_policy,
    "Configuration": configuration,
    "RecrawlPolicy": recrawl_policy,
    "DatabaseName": database_name,
    "Targets": targets,
    "CrawlerSecurityConfiguration": crawler_security_configuration,
    "Role": role,
    "LakeFormationConfiguration": lake_formation_configuration,
    "Schedule": schedule,
    "TablePrefix": table_prefix,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.glue.crawlers
WHERE data__Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>crawlers</code> resource, the following permissions are required:

### Create
```json
glue:CreateCrawler,
glue:GetCrawler,
glue:TagResource,
iam:PassRole
```

### Read
```json
glue:GetCrawler,
glue:GetTags,
iam:PassRole
```

### Update
```json
glue:UpdateCrawler,
glue:UntagResource,
glue:TagResource,
iam:PassRole
```

### Delete
```json
glue:DeleteCrawler,
glue:GetCrawler,
glue:StopCrawler,
iam:PassRole
```

### List
```json
glue:ListCrawlers,
iam:PassRole
```
