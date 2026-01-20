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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html"><code>AWS::Kendra::DataSource</code></a>.

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
    <td><CopyableCode code="Name, IndexId, Type, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<Id>|<IndexId>';
```

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
'{{ Name }}',
 '{{ IndexId }}',
 '{{ Type }}',
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
 '{{ Name }}',
 '{{ IndexId }}',
 '{{ Type }}',
 '{{ DataSourceConfiguration }}',
 '{{ Description }}',
 '{{ Schedule }}',
 '{{ RoleArn }}',
 '{{ Tags }}',
 '{{ CustomDocumentEnrichmentConfiguration }}',
 '{{ LanguageCode }}',
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
      - name: Name
        value: '{{ Name }}'
      - name: IndexId
        value: '{{ IndexId }}'
      - name: Type
        value: '{{ Type }}'
      - name: DataSourceConfiguration
        value:
          S3Configuration:
            BucketName: '{{ BucketName }}'
            InclusionPrefixes:
              - '{{ InclusionPrefixes[0] }}'
            InclusionPatterns: null
            ExclusionPatterns: null
            DocumentsMetadataConfiguration:
              S3Prefix: '{{ S3Prefix }}'
            AccessControlListConfiguration:
              KeyPath: null
          SharePointConfiguration:
            SharePointVersion: '{{ SharePointVersion }}'
            Urls:
              - '{{ Urls[0] }}'
            SecretArn: '{{ SecretArn }}'
            CrawlAttachments: '{{ CrawlAttachments }}'
            UseChangeLog: '{{ UseChangeLog }}'
            InclusionPatterns: null
            ExclusionPatterns: null
            VpcConfiguration:
              SubnetIds:
                - '{{ SubnetIds[0] }}'
              SecurityGroupIds:
                - '{{ SecurityGroupIds[0] }}'
            FieldMappings:
              - DataSourceFieldName: '{{ DataSourceFieldName }}'
                DateFieldFormat: '{{ DateFieldFormat }}'
                IndexFieldName: '{{ IndexFieldName }}'
            DocumentTitleFieldName: null
            DisableLocalGroups: '{{ DisableLocalGroups }}'
            SslCertificateS3Path:
              Bucket: null
              Key: null
          SalesforceConfiguration:
            ServerUrl: null
            SecretArn: null
            StandardObjectConfigurations:
              - Name: '{{ Name }}'
                DocumentDataFieldName: null
                DocumentTitleFieldName: null
                FieldMappings: null
            KnowledgeArticleConfiguration:
              IncludedStates:
                - '{{ IncludedStates[0] }}'
              StandardKnowledgeArticleTypeConfiguration:
                DocumentDataFieldName: null
                DocumentTitleFieldName: null
                FieldMappings: null
              CustomKnowledgeArticleTypeConfigurations:
                - Name: '{{ Name }}'
                  DocumentDataFieldName: null
                  DocumentTitleFieldName: null
                  FieldMappings: null
            ChatterFeedConfiguration:
              DocumentDataFieldName: null
              DocumentTitleFieldName: null
              FieldMappings: null
              IncludeFilterTypes:
                - '{{ IncludeFilterTypes[0] }}'
            CrawlAttachments: '{{ CrawlAttachments }}'
            StandardObjectAttachmentConfiguration:
              DocumentTitleFieldName: null
              FieldMappings: null
            IncludeAttachmentFilePatterns: null
            ExcludeAttachmentFilePatterns: null
          OneDriveConfiguration:
            TenantDomain: '{{ TenantDomain }}'
            SecretArn: null
            OneDriveUsers:
              OneDriveUserList:
                - '{{ OneDriveUserList[0] }}'
              OneDriveUserS3Path: null
            InclusionPatterns: null
            ExclusionPatterns: null
            FieldMappings: null
            DisableLocalGroups: null
          ServiceNowConfiguration:
            HostUrl: '{{ HostUrl }}'
            SecretArn: null
            ServiceNowBuildVersion: '{{ ServiceNowBuildVersion }}'
            AuthenticationType: '{{ AuthenticationType }}'
            KnowledgeArticleConfiguration:
              CrawlAttachments: '{{ CrawlAttachments }}'
              IncludeAttachmentFilePatterns: null
              ExcludeAttachmentFilePatterns: null
              DocumentDataFieldName: null
              DocumentTitleFieldName: null
              FieldMappings: null
              FilterQuery: '{{ FilterQuery }}'
            ServiceCatalogConfiguration:
              CrawlAttachments: '{{ CrawlAttachments }}'
              IncludeAttachmentFilePatterns: null
              ExcludeAttachmentFilePatterns: null
              DocumentDataFieldName: null
              DocumentTitleFieldName: null
              FieldMappings: null
          DatabaseConfiguration:
            DatabaseEngineType: '{{ DatabaseEngineType }}'
            ConnectionConfiguration:
              DatabaseHost: '{{ DatabaseHost }}'
              DatabasePort: '{{ DatabasePort }}'
              DatabaseName: '{{ DatabaseName }}'
              TableName: '{{ TableName }}'
              SecretArn: null
            VpcConfiguration: null
            ColumnConfiguration:
              DocumentIdColumnName: '{{ DocumentIdColumnName }}'
              DocumentDataColumnName: null
              DocumentTitleColumnName: null
              FieldMappings: null
              ChangeDetectingColumns:
                - null
            AclConfiguration:
              AllowedGroupsColumnName: null
            SqlConfiguration:
              QueryIdentifiersEnclosingOption: '{{ QueryIdentifiersEnclosingOption }}'
          ConfluenceConfiguration:
            ServerUrl: null
            SecretArn: null
            Version: '{{ Version }}'
            SpaceConfiguration:
              CrawlPersonalSpaces: '{{ CrawlPersonalSpaces }}'
              CrawlArchivedSpaces: '{{ CrawlArchivedSpaces }}'
              IncludeSpaces:
                - '{{ IncludeSpaces[0] }}'
              ExcludeSpaces: null
              SpaceFieldMappings:
                - DataSourceFieldName: '{{ DataSourceFieldName }}'
                  DateFieldFormat: null
                  IndexFieldName: null
            PageConfiguration:
              PageFieldMappings:
                - DataSourceFieldName: '{{ DataSourceFieldName }}'
                  DateFieldFormat: null
                  IndexFieldName: null
            BlogConfiguration:
              BlogFieldMappings:
                - DataSourceFieldName: '{{ DataSourceFieldName }}'
                  DateFieldFormat: null
                  IndexFieldName: null
            AttachmentConfiguration:
              CrawlAttachments: '{{ CrawlAttachments }}'
              AttachmentFieldMappings:
                - DataSourceFieldName: '{{ DataSourceFieldName }}'
                  DateFieldFormat: null
                  IndexFieldName: null
            VpcConfiguration: null
            InclusionPatterns: null
            ExclusionPatterns: null
          GoogleDriveConfiguration:
            SecretArn: null
            InclusionPatterns: null
            ExclusionPatterns: null
            FieldMappings: null
            ExcludeMimeTypes:
              - '{{ ExcludeMimeTypes[0] }}'
            ExcludeUserAccounts:
              - '{{ ExcludeUserAccounts[0] }}'
            ExcludeSharedDrives:
              - '{{ ExcludeSharedDrives[0] }}'
          WebCrawlerConfiguration:
            Urls:
              SeedUrlConfiguration:
                SeedUrls:
                  - '{{ SeedUrls[0] }}'
                WebCrawlerMode: '{{ WebCrawlerMode }}'
              SiteMapsConfiguration:
                SiteMaps:
                  - '{{ SiteMaps[0] }}'
            CrawlDepth: '{{ CrawlDepth }}'
            MaxLinksPerPage: '{{ MaxLinksPerPage }}'
            MaxContentSizePerPageInMegaBytes: null
            MaxUrlsPerMinuteCrawlRate: '{{ MaxUrlsPerMinuteCrawlRate }}'
            UrlInclusionPatterns: null
            UrlExclusionPatterns: null
            ProxyConfiguration:
              Host: '{{ Host }}'
              Port: '{{ Port }}'
              Credentials: null
            AuthenticationConfiguration:
              BasicAuthentication:
                - Host: '{{ Host }}'
                  Port: '{{ Port }}'
                  Credentials: null
          WorkDocsConfiguration:
            OrganizationId: '{{ OrganizationId }}'
            CrawlComments: '{{ CrawlComments }}'
            UseChangeLog: '{{ UseChangeLog }}'
            InclusionPatterns: null
            ExclusionPatterns: null
            FieldMappings: null
          TemplateConfiguration:
            Template: {}
      - name: Description
        value: '{{ Description }}'
      - name: Schedule
        value: '{{ Schedule }}'
      - name: RoleArn
        value: '{{ RoleArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CustomDocumentEnrichmentConfiguration
        value:
          InlineConfigurations:
            - Condition:
                ConditionDocumentAttributeKey: '{{ ConditionDocumentAttributeKey }}'
                Operator: '{{ Operator }}'
                ConditionOnValue:
                  StringValue: '{{ StringValue }}'
                  StringListValue:
                    - '{{ StringListValue[0] }}'
                  LongValue: '{{ LongValue }}'
                  DateValue: '{{ DateValue }}'
              Target:
                TargetDocumentAttributeKey: null
                TargetDocumentAttributeValueDeletion: '{{ TargetDocumentAttributeValueDeletion }}'
                TargetDocumentAttributeValue: null
              DocumentContentDeletion: '{{ DocumentContentDeletion }}'
          PreExtractionHookConfiguration:
            InvocationCondition: null
            LambdaArn: '{{ LambdaArn }}'
            S3Bucket: null
          PostExtractionHookConfiguration: null
          RoleArn: null
      - name: LanguageCode
        value: '{{ LanguageCode }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kendra.data_sources
WHERE data__Identifier = '<Id|IndexId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

### Create
```json
kendra:CreateDataSource,
kendra:DescribeDataSource,
kendra:ListTagsForResource,
iam:PassRole,
kendra:TagResource
```

### Read
```json
kendra:DescribeDataSource,
kendra:ListTagsForResource
```

### Delete
```json
kendra:DescribeDataSource,
kendra:DeleteDataSource
```

### List
```json
kendra:ListDataSources
```

### Update
```json
kendra:DescribeDataSource,
kendra:UpdateDataSource,
kendra:ListTagsForResource,
kendra:TagResource,
kendra:UntagResource,
iam:PassRole
```
