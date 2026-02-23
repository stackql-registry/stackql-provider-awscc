---
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - kendra
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

Creates, updates, deletes or gets a <code>data_source</code> resource or lists <code>data_sources</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>data_sources</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Kendra DataSource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kendra.data_sources" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of index"
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of index"
  },
  {
    "name": "index_id",
    "type": "string",
    "description": "Unique ID of Index"
  },
  {
    "name": "type",
    "type": "string",
    "description": "Data source type"
  },
  {
    "name": "data_source_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "S3 data source configuration",
        "children": [
          {
            "name": "bucket_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "inclusion_prefixes",
            "type": "array",
            "description": ""
          },
          {
            "name": "documents_metadata_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "s3_prefix",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "access_control_list_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "key_path",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "share_point_configuration",
        "type": "object",
        "description": "SharePoint configuration",
        "children": [
          {
            "name": "share_point_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "urls",
            "type": "array",
            "description": ""
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "crawl_attachments",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "use_change_log",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "inclusion_patterns",
            "type": "array",
            "description": ""
          },
          {
            "name": "vpc_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "subnet_ids",
                "type": "array",
                "description": ""
              },
              {
                "name": "security_group_ids",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "field_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "data_source_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "date_field_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "index_field_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "document_title_field_name",
            "type": "string",
            "description": ""
          },
          {
            "name": "disable_local_groups",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "ssl_certificate_s3_path",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": ""
              },
              {
                "name": "key",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "salesforce_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "server_url",
            "type": "string",
            "description": ""
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "standard_object_configurations",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": ""
              },
              {
                "name": "document_data_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "knowledge_article_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "included_states",
                "type": "array",
                "description": ""
              },
              {
                "name": "standard_knowledge_article_type_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "custom_knowledge_article_type_configurations",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "chatter_feed_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "document_data_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_mappings",
                "type": "array",
                "description": ""
              },
              {
                "name": "include_filter_types",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "crawl_attachments",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "standard_object_attachment_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "document_title_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "include_attachment_file_patterns",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "one_drive_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "tenant_domain",
            "type": "string",
            "description": ""
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "one_drive_users",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "one_drive_user_list",
                "type": "array",
                "description": ""
              },
              {
                "name": "one_drive_user_s3_path",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "inclusion_patterns",
            "type": "array",
            "description": ""
          },
          {
            "name": "field_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "data_source_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "date_field_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "index_field_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "disable_local_groups",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "service_now_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "host_url",
            "type": "string",
            "description": ""
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "service_now_build_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "authentication_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "knowledge_article_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "crawl_attachments",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "include_attachment_file_patterns",
                "type": "array",
                "description": ""
              },
              {
                "name": "document_data_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_mappings",
                "type": "array",
                "description": ""
              },
              {
                "name": "filter_query",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "service_catalog_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "crawl_attachments",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "include_attachment_file_patterns",
                "type": "array",
                "description": ""
              },
              {
                "name": "document_data_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "database_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "database_engine_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "connection_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "database_host",
                "type": "string",
                "description": ""
              },
              {
                "name": "database_port",
                "type": "integer",
                "description": ""
              },
              {
                "name": "database_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "table_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "secret_arn",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "vpc_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "subnet_ids",
                "type": "array",
                "description": ""
              },
              {
                "name": "security_group_ids",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "column_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "document_id_column_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "field_mappings",
                "type": "array",
                "description": ""
              },
              {
                "name": "change_detecting_columns",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "acl_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "allowed_groups_column_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "sql_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "query_identifiers_enclosing_option",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "confluence_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "server_url",
            "type": "string",
            "description": ""
          },
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "version",
            "type": "string",
            "description": ""
          },
          {
            "name": "space_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "crawl_personal_spaces",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "crawl_archived_spaces",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "include_spaces",
                "type": "array",
                "description": ""
              },
              {
                "name": "space_field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "page_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "page_field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "blog_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "blog_field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "attachment_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "crawl_attachments",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "attachment_field_mappings",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "vpc_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "subnet_ids",
                "type": "array",
                "description": ""
              },
              {
                "name": "security_group_ids",
                "type": "array",
                "description": ""
              }
            ]
          },
          {
            "name": "inclusion_patterns",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "google_drive_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "secret_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "inclusion_patterns",
            "type": "array",
            "description": ""
          },
          {
            "name": "field_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "data_source_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "date_field_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "index_field_name",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "exclude_mime_types",
            "type": "array",
            "description": ""
          },
          {
            "name": "exclude_user_accounts",
            "type": "array",
            "description": ""
          },
          {
            "name": "exclude_shared_drives",
            "type": "array",
            "description": ""
          }
        ]
      },
      {
        "name": "web_crawler_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "urls",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "seed_url_configuration",
                "type": "object",
                "description": ""
              },
              {
                "name": "site_maps_configuration",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "crawl_depth",
            "type": "integer",
            "description": ""
          },
          {
            "name": "max_links_per_page",
            "type": "integer",
            "description": ""
          },
          {
            "name": "max_content_size_per_page_in_mega_bytes",
            "type": "number",
            "description": ""
          },
          {
            "name": "max_urls_per_minute_crawl_rate",
            "type": "integer",
            "description": ""
          },
          {
            "name": "url_inclusion_patterns",
            "type": "array",
            "description": ""
          },
          {
            "name": "proxy_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "host",
                "type": "string",
                "description": ""
              },
              {
                "name": "port",
                "type": "integer",
                "description": ""
              },
              {
                "name": "credentials",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "authentication_configuration",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "basic_authentication",
                "type": "array",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "work_docs_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "organization_id",
            "type": "string",
            "description": ""
          },
          {
            "name": "crawl_comments",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "use_change_log",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "inclusion_patterns",
            "type": "array",
            "description": ""
          },
          {
            "name": "field_mappings",
            "type": "array",
            "description": "",
            "children": [
              {
                "name": "data_source_field_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "date_field_format",
                "type": "string",
                "description": ""
              },
              {
                "name": "index_field_name",
                "type": "string",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "template_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "template",
            "type": "object",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": ""
  },
  {
    "name": "schedule",
    "type": "string",
    "description": "Schedule"
  },
  {
    "name": "role_arn",
    "type": "string",
    "description": "Role Arn"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Tags for labeling the data source",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "A string used to identify this tag"
      },
      {
        "name": "value",
        "type": "string",
        "description": "A string containing the value for the tag"
      }
    ]
  },
  {
    "name": "custom_document_enrichment_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "inline_configurations",
        "type": "array",
        "description": "List of InlineCustomDocumentEnrichmentConfigurations",
        "children": [
          {
            "name": "condition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "condition_document_attribute_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "operator",
                "type": "string",
                "description": ""
              },
              {
                "name": "condition_on_value",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "target",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "target_document_attribute_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "target_document_attribute_value_deletion",
                "type": "boolean",
                "description": ""
              },
              {
                "name": "target_document_attribute_value",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "document_content_deletion",
            "type": "boolean",
            "description": ""
          }
        ]
      },
      {
        "name": "pre_extraction_hook_configuration",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "invocation_condition",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "condition_document_attribute_key",
                "type": "string",
                "description": ""
              },
              {
                "name": "operator",
                "type": "string",
                "description": ""
              },
              {
                "name": "condition_on_value",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "lambda_arn",
            "type": "string",
            "description": ""
          },
          {
            "name": "s3_bucket",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "language_code",
    "type": "string",
    "description": "The code for a language."
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
    "name": "id",
    "type": "string",
    "description": "Unique ID of index"
  },
  {
    "name": "index_id",
    "type": "string",
    "description": "Unique ID of Index"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html"><code>AWS::Kendra::DataSource</code></a>.

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
    <td><code>data_sources</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, IndexId, Type, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>data_sources</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>data_sources</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>data_sources_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>data_sources</code></td>
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

Gets all properties from an individual <code>data_source</code>.
```sql
SELECT
region,
id,
arn,
name,
index_id,
type,
data_source_configuration,
description,
schedule,
role_arn,
tags,
custom_document_enrichment_configuration,
language_code
FROM awscc.kendra.data_sources
WHERE region = 'us-east-1' AND Identifier = '{{ id }}|{{ index_id }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_sources</code> in a region.
```sql
SELECT
region,
id,
index_id
FROM awscc.kendra.data_sources_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kendra.data_sources (
 Name,
 IndexId,
 Type,
 region
)
SELECT
'{{ name }}',
 '{{ index_id }}',
 '{{ type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kendra.data_sources (
 Name,
 IndexId,
 Type,
 DataSourceConfiguration,
 Description,
 Schedule,
 RoleArn,
 Tags,
 CustomDocumentEnrichmentConfiguration,
 LanguageCode,
 region
)
SELECT
 '{{ name }}',
 '{{ index_id }}',
 '{{ type }}',
 '{{ data_source_configuration }}',
 '{{ description }}',
 '{{ schedule }}',
 '{{ role_arn }}',
 '{{ tags }}',
 '{{ custom_document_enrichment_configuration }}',
 '{{ language_code }}',
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
  - name: data_source
    props:
      - name: name
        value: '{{ name }}'
      - name: index_id
        value: '{{ index_id }}'
      - name: type
        value: '{{ type }}'
      - name: data_source_configuration
        value:
          s3_configuration:
            bucket_name: '{{ bucket_name }}'
            inclusion_prefixes:
              - '{{ inclusion_prefixes[0] }}'
            inclusion_patterns: null
            exclusion_patterns: null
            documents_metadata_configuration:
              s3_prefix: '{{ s3_prefix }}'
            access_control_list_configuration:
              key_path: null
          share_point_configuration:
            share_point_version: '{{ share_point_version }}'
            urls:
              - '{{ urls[0] }}'
            secret_arn: '{{ secret_arn }}'
            crawl_attachments: '{{ crawl_attachments }}'
            use_change_log: '{{ use_change_log }}'
            inclusion_patterns: null
            exclusion_patterns: null
            vpc_configuration:
              subnet_ids:
                - '{{ subnet_ids[0] }}'
              security_group_ids:
                - '{{ security_group_ids[0] }}'
            field_mappings:
              - data_source_field_name: '{{ data_source_field_name }}'
                date_field_format: '{{ date_field_format }}'
                index_field_name: '{{ index_field_name }}'
            document_title_field_name: null
            disable_local_groups: '{{ disable_local_groups }}'
            ssl_certificate_s3_path:
              bucket: null
              key: null
          salesforce_configuration:
            server_url: null
            secret_arn: null
            standard_object_configurations:
              - name: '{{ name }}'
                document_data_field_name: null
                document_title_field_name: null
                field_mappings: null
            knowledge_article_configuration:
              included_states:
                - '{{ included_states[0] }}'
              standard_knowledge_article_type_configuration:
                document_data_field_name: null
                document_title_field_name: null
                field_mappings: null
              custom_knowledge_article_type_configurations:
                - name: '{{ name }}'
                  document_data_field_name: null
                  document_title_field_name: null
                  field_mappings: null
            chatter_feed_configuration:
              document_data_field_name: null
              document_title_field_name: null
              field_mappings: null
              include_filter_types:
                - '{{ include_filter_types[0] }}'
            crawl_attachments: '{{ crawl_attachments }}'
            standard_object_attachment_configuration:
              document_title_field_name: null
              field_mappings: null
            include_attachment_file_patterns: null
            exclude_attachment_file_patterns: null
          one_drive_configuration:
            tenant_domain: '{{ tenant_domain }}'
            secret_arn: null
            one_drive_users:
              one_drive_user_list:
                - '{{ one_drive_user_list[0] }}'
              one_drive_user_s3_path: null
            inclusion_patterns: null
            exclusion_patterns: null
            field_mappings: null
            disable_local_groups: null
          service_now_configuration:
            host_url: '{{ host_url }}'
            secret_arn: null
            service_now_build_version: '{{ service_now_build_version }}'
            authentication_type: '{{ authentication_type }}'
            knowledge_article_configuration:
              crawl_attachments: '{{ crawl_attachments }}'
              include_attachment_file_patterns: null
              exclude_attachment_file_patterns: null
              document_data_field_name: null
              document_title_field_name: null
              field_mappings: null
              filter_query: '{{ filter_query }}'
            service_catalog_configuration:
              crawl_attachments: '{{ crawl_attachments }}'
              include_attachment_file_patterns: null
              exclude_attachment_file_patterns: null
              document_data_field_name: null
              document_title_field_name: null
              field_mappings: null
          database_configuration:
            database_engine_type: '{{ database_engine_type }}'
            connection_configuration:
              database_host: '{{ database_host }}'
              database_port: '{{ database_port }}'
              database_name: '{{ database_name }}'
              table_name: '{{ table_name }}'
              secret_arn: null
            vpc_configuration: null
            column_configuration:
              document_id_column_name: '{{ document_id_column_name }}'
              document_data_column_name: null
              document_title_column_name: null
              field_mappings: null
              change_detecting_columns:
                - null
            acl_configuration:
              allowed_groups_column_name: null
            sql_configuration:
              query_identifiers_enclosing_option: '{{ query_identifiers_enclosing_option }}'
          confluence_configuration:
            server_url: null
            secret_arn: null
            version: '{{ version }}'
            space_configuration:
              crawl_personal_spaces: '{{ crawl_personal_spaces }}'
              crawl_archived_spaces: '{{ crawl_archived_spaces }}'
              include_spaces:
                - '{{ include_spaces[0] }}'
              exclude_spaces: null
              space_field_mappings:
                - data_source_field_name: '{{ data_source_field_name }}'
                  date_field_format: null
                  index_field_name: null
            page_configuration:
              page_field_mappings:
                - data_source_field_name: '{{ data_source_field_name }}'
                  date_field_format: null
                  index_field_name: null
            blog_configuration:
              blog_field_mappings:
                - data_source_field_name: '{{ data_source_field_name }}'
                  date_field_format: null
                  index_field_name: null
            attachment_configuration:
              crawl_attachments: '{{ crawl_attachments }}'
              attachment_field_mappings:
                - data_source_field_name: '{{ data_source_field_name }}'
                  date_field_format: null
                  index_field_name: null
            vpc_configuration: null
            inclusion_patterns: null
            exclusion_patterns: null
          google_drive_configuration:
            secret_arn: null
            inclusion_patterns: null
            exclusion_patterns: null
            field_mappings: null
            exclude_mime_types:
              - '{{ exclude_mime_types[0] }}'
            exclude_user_accounts:
              - '{{ exclude_user_accounts[0] }}'
            exclude_shared_drives:
              - '{{ exclude_shared_drives[0] }}'
          web_crawler_configuration:
            urls:
              seed_url_configuration:
                seed_urls:
                  - '{{ seed_urls[0] }}'
                web_crawler_mode: '{{ web_crawler_mode }}'
              site_maps_configuration:
                site_maps:
                  - '{{ site_maps[0] }}'
            crawl_depth: '{{ crawl_depth }}'
            max_links_per_page: '{{ max_links_per_page }}'
            max_content_size_per_page_in_mega_bytes: null
            max_urls_per_minute_crawl_rate: '{{ max_urls_per_minute_crawl_rate }}'
            url_inclusion_patterns: null
            url_exclusion_patterns: null
            proxy_configuration:
              host: '{{ host }}'
              port: '{{ port }}'
              credentials: null
            authentication_configuration:
              basic_authentication:
                - host: '{{ host }}'
                  port: '{{ port }}'
                  credentials: null
          work_docs_configuration:
            organization_id: '{{ organization_id }}'
            crawl_comments: '{{ crawl_comments }}'
            use_change_log: '{{ use_change_log }}'
            inclusion_patterns: null
            exclusion_patterns: null
            field_mappings: null
          template_configuration:
            template: {}
      - name: description
        value: '{{ description }}'
      - name: schedule
        value: '{{ schedule }}'
      - name: role_arn
        value: '{{ role_arn }}'
      - name: tags
        value:
          - key: '{{ key }}'
            value: '{{ value }}'
      - name: custom_document_enrichment_configuration
        value:
          inline_configurations:
            - condition:
                condition_document_attribute_key: '{{ condition_document_attribute_key }}'
                operator: '{{ operator }}'
                condition_on_value:
                  string_value: '{{ string_value }}'
                  string_list_value:
                    - '{{ string_list_value[0] }}'
                  long_value: '{{ long_value }}'
                  date_value: '{{ date_value }}'
              target:
                target_document_attribute_key: null
                target_document_attribute_value_deletion: '{{ target_document_attribute_value_deletion }}'
                target_document_attribute_value: null
              document_content_deletion: '{{ document_content_deletion }}'
          pre_extraction_hook_configuration:
            invocation_condition: null
            lambda_arn: '{{ lambda_arn }}'
            s3_bucket: null
          post_extraction_hook_configuration: null
          role_arn: null
      - name: language_code
        value: '{{ language_code }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.kendra.data_sources
SET PatchDocument = string('{{ {
    "Name": name,
    "DataSourceConfiguration": data_source_configuration,
    "Description": description,
    "Schedule": schedule,
    "RoleArn": role_arn,
    "Tags": tags,
    "CustomDocumentEnrichmentConfiguration": custom_document_enrichment_configuration,
    "LanguageCode": language_code
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '{{ id }}|{{ index_id }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kendra.data_sources
WHERE Identifier = '{{ id }}|{{ index_id }}'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
kendra:CreateDataSource,
kendra:DescribeDataSource,
kendra:ListTagsForResource,
iam:PassRole,
kendra:TagResource
```

</TabItem>
<TabItem value="read">

```json
kendra:DescribeDataSource,
kendra:ListTagsForResource
```

</TabItem>
<TabItem value="delete">

```json
kendra:DescribeDataSource,
kendra:DeleteDataSource
```

</TabItem>
<TabItem value="list">

```json
kendra:ListDataSources
```

</TabItem>
<TabItem value="update">

```json
kendra:DescribeDataSource,
kendra:UpdateDataSource,
kendra:ListTagsForResource,
kendra:TagResource,
kendra:UntagResource,
iam:PassRole
```

</TabItem>
</Tabs>