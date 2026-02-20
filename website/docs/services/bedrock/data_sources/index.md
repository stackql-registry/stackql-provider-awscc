---
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - bedrock
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
<tr><td><b>Description</b></td><td>Definition of AWS::Bedrock::DataSource Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.bedrock.data_sources" /></td></tr>
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
    "name": "data_source_configuration",
    "type": "object",
    "description": "Specifies a raw data source location to ingest.",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": "The type of the data source location."
      },
      {
        "name": "s3_configuration",
        "type": "object",
        "description": "The configuration information to connect to Amazon S3 as your data source.",
        "children": [
          {
            "name": "bucket_arn",
            "type": "string",
            "description": "The ARN of the bucket that contains the data source."
          },
          {
            "name": "inclusion_prefixes",
            "type": "array",
            "description": "A list of S3 prefixes that define the object containing the data sources."
          },
          {
            "name": "bucket_owner_account_id",
            "type": "string",
            "description": "The account ID for the owner of the S3 bucket."
          }
        ]
      },
      {
        "name": "confluence_configuration",
        "type": "object",
        "description": "The configuration information to connect to Confluence as your data source.",
        "children": [
          {
            "name": "source_configuration",
            "type": "object",
            "description": "The endpoint information to connect to your Confluence data source.",
            "children": [
              {
                "name": "host_url",
                "type": "string",
                "description": "The Confluence host URL or instance URL."
              },
              {
                "name": "host_type",
                "type": "string",
                "description": "The supported host type, whether online/cloud or server/on-premises."
              },
              {
                "name": "auth_type",
                "type": "string",
                "description": "The supported authentication type to authenticate and connect to your Confluence instance."
              },
              {
                "name": "credentials_secret_arn",
                "type": "string",
                "description": "The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration."
              }
            ]
          },
          {
            "name": "crawler_configuration",
            "type": "object",
            "description": "The configuration of the Confluence content. For example, configuring specific types of Confluence content.",
            "children": [
              {
                "name": "filter_configuration",
                "type": "object",
                "description": "The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content."
              }
            ]
          }
        ]
      },
      {
        "name": "salesforce_configuration",
        "type": "object",
        "description": "The configuration information to connect to Salesforce as your data source.",
        "children": [
          {
            "name": "source_configuration",
            "type": "object",
            "description": "The endpoint information to connect to your Salesforce data source.",
            "children": [
              {
                "name": "host_url",
                "type": "string",
                "description": "The Salesforce host URL or instance URL."
              },
              {
                "name": "auth_type",
                "type": "string",
                "description": "The supported authentication type to authenticate and connect to your Salesforce instance."
              },
              {
                "name": "credentials_secret_arn",
                "type": "string",
                "description": "The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration."
              }
            ]
          },
          {
            "name": "crawler_configuration",
            "type": "object",
            "description": "The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.",
            "children": [
              {
                "name": "filter_configuration",
                "type": "object",
                "description": "The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content."
              }
            ]
          }
        ]
      },
      {
        "name": "share_point_configuration",
        "type": "object",
        "description": "The configuration information to connect to SharePoint as your data source.",
        "children": [
          {
            "name": "source_configuration",
            "type": "object",
            "description": "The endpoint information to connect to your SharePoint data source.",
            "children": [
              {
                "name": "site_urls",
                "type": "array",
                "description": "A list of one or more SharePoint site URLs."
              },
              {
                "name": "host_type",
                "type": "string",
                "description": "The supported host type, whether online/cloud or server/on-premises."
              },
              {
                "name": "auth_type",
                "type": "string",
                "description": "The supported authentication type to authenticate and connect to your SharePoint site/sites."
              },
              {
                "name": "credentials_secret_arn",
                "type": "string",
                "description": "The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration."
              },
              {
                "name": "tenant_id",
                "type": "string",
                "description": "The identifier of your Microsoft 365 tenant."
              },
              {
                "name": "domain",
                "type": "string",
                "description": "The domain of your SharePoint instance or site URL/URLs."
              }
            ]
          },
          {
            "name": "crawler_configuration",
            "type": "object",
            "description": "The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.",
            "children": [
              {
                "name": "filter_configuration",
                "type": "object",
                "description": "The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content."
              }
            ]
          }
        ]
      },
      {
        "name": "web_configuration",
        "type": "object",
        "description": "Configures a web data source location.",
        "children": [
          {
            "name": "source_configuration",
            "type": "object",
            "description": "A web source configuration.",
            "children": [
              {
                "name": "url_configuration",
                "type": "object",
                "description": "A url configuration."
              }
            ]
          },
          {
            "name": "crawler_configuration",
            "type": "object",
            "description": "Configuration for the web crawler.",
            "children": [
              {
                "name": "crawler_limits",
                "type": "object",
                "description": "Limit settings for the web crawler."
              },
              {
                "name": "inclusion_filters",
                "type": "array",
                "description": "A set of regular expression filter patterns for a type of object."
              },
              {
                "name": "scope",
                "type": "string",
                "description": "The scope that a web crawl job will be restricted to."
              },
              {
                "name": "user_agent",
                "type": "string",
                "description": "The suffix that will be included in the user agent header."
              },
              {
                "name": "user_agent_header",
                "type": "string",
                "description": "The full user agent header, including UUID and suffix."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "data_source_id",
    "type": "string",
    "description": "Identifier for a resource."
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the Resource."
  },
  {
    "name": "knowledge_base_id",
    "type": "string",
    "description": "The unique identifier of the knowledge base to which to add the data source."
  },
  {
    "name": "data_source_status",
    "type": "string",
    "description": "The status of a data source."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the data source."
  },
  {
    "name": "server_side_encryption_configuration",
    "type": "object",
    "description": "Contains details about the server-side encryption for the data source.",
    "children": [
      {
        "name": "kms_key_arn",
        "type": "string",
        "description": "The ARN of the AWS KMS key used to encrypt the resource."
      }
    ]
  },
  {
    "name": "vector_ingestion_configuration",
    "type": "object",
    "description": "Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.",
    "children": [
      {
        "name": "chunking_configuration",
        "type": "object",
        "description": "Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.",
        "children": [
          {
            "name": "chunking_strategy",
            "type": "string",
            "description": "Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk."
          },
          {
            "name": "fixed_size_chunking_configuration",
            "type": "object",
            "description": "Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.",
            "children": [
              {
                "name": "max_tokens",
                "type": "integer",
                "description": "The maximum number of tokens to include in a chunk."
              },
              {
                "name": "overlap_percentage",
                "type": "integer",
                "description": "The percentage of overlap between adjacent chunks of a data source."
              }
            ]
          },
          {
            "name": "hierarchical_chunking_configuration",
            "type": "object",
            "description": "Configurations for when you choose hierarchical chunking. If you set the chunkingStrategy as NONE, exclude this field.",
            "children": [
              {
                "name": "level_configurations",
                "type": "array",
                "description": "Token settings for each layer."
              },
              {
                "name": "overlap_tokens",
                "type": "integer",
                "description": "The number of tokens to repeat across chunks in the same layer."
              }
            ]
          },
          {
            "name": "semantic_chunking_configuration",
            "type": "object",
            "description": "Configurations for when you choose semantic chunking. If you set the chunkingStrategy as NONE, exclude this field.",
            "children": [
              {
                "name": "breakpoint_percentile_threshold",
                "type": "integer",
                "description": "The dissimilarity threshold for splitting chunks."
              },
              {
                "name": "buffer_size",
                "type": "integer",
                "description": "The buffer size."
              },
              {
                "name": "max_tokens",
                "type": "integer",
                "description": "The maximum number of tokens that a chunk can contain."
              }
            ]
          }
        ]
      },
      {
        "name": "custom_transformation_configuration",
        "type": "object",
        "description": "Settings for customizing steps in the data source content ingestion pipeline.",
        "children": [
          {
            "name": "intermediate_storage",
            "type": "object",
            "description": "A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.",
            "children": [
              {
                "name": "s3_location",
                "type": "object",
                "description": "An Amazon S3 location."
              }
            ]
          },
          {
            "name": "transformations",
            "type": "array",
            "description": "A list of Lambda functions that process documents.",
            "children": [
              {
                "name": "step_to_apply",
                "type": "string",
                "description": "When the service applies the transformation."
              },
              {
                "name": "transformation_function",
                "type": "object",
                "description": "A Lambda function that processes documents."
              }
            ]
          }
        ]
      },
      {
        "name": "parsing_configuration",
        "type": "object",
        "description": "Settings for parsing document contents",
        "children": [
          {
            "name": "parsing_strategy",
            "type": "string",
            "description": "The parsing strategy for the data source."
          },
          {
            "name": "bedrock_foundation_model_configuration",
            "type": "object",
            "description": "Settings for a foundation model used to parse documents for a data source.",
            "children": [
              {
                "name": "model_arn",
                "type": "string",
                "description": "The model's ARN."
              },
              {
                "name": "parsing_prompt",
                "type": "object",
                "description": "Instructions for interpreting the contents of a document."
              },
              {
                "name": "parsing_modality",
                "type": "string",
                "description": "Determine how will parsed content be stored."
              }
            ]
          },
          {
            "name": "bedrock_data_automation_configuration",
            "type": "object",
            "description": "Settings for a Bedrock Data Automation used to parse documents for a data source.",
            "children": [
              {
                "name": "parsing_modality",
                "type": "string",
                "description": "Determine how will parsed content be stored."
              }
            ]
          }
        ]
      },
      {
        "name": "context_enrichment_configuration",
        "type": "object",
        "description": "Additional Enrichment Configuration for example when using GraphRag.",
        "children": [
          {
            "name": "type",
            "type": "string",
            "description": "Enrichment type to be used for the vector database."
          },
          {
            "name": "bedrock_foundation_model_configuration",
            "type": "object",
            "description": "Bedrock Foundation Model configuration to be used for Context Enrichment.",
            "children": [
              {
                "name": "enrichment_strategy_configuration",
                "type": "object",
                "description": "Strategy to be used when using Bedrock Foundation Model for Context Enrichment."
              },
              {
                "name": "model_arn",
                "type": "string",
                "description": "The model's ARN."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "data_deletion_policy",
    "type": "string",
    "description": "The deletion policy for the data source."
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "The time at which the data source was created."
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "The time at which the knowledge base was last updated."
  },
  {
    "name": "failure_reasons",
    "type": "array",
    "description": "The details of the failure reasons related to the data source."
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
    "name": "data_source_id",
    "type": "string",
    "description": "Identifier for a resource."
  },
  {
    "name": "knowledge_base_id",
    "type": "string",
    "description": "The unique identifier of the knowledge base to which to add the data source."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html"><code>AWS::Bedrock::DataSource</code></a>.

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
    <td><CopyableCode code="DataSourceConfiguration, Name, KnowledgeBaseId, region" /></td>
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
data_source_configuration,
data_source_id,
description,
knowledge_base_id,
data_source_status,
name,
server_side_encryption_configuration,
vector_ingestion_configuration,
data_deletion_policy,
created_at,
updated_at,
failure_reasons
FROM awscc.bedrock.data_sources
WHERE region = 'us-east-1' AND Identifier = '<KnowledgeBaseId>|<DataSourceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_sources</code> in a region.
```sql
SELECT
region,
knowledge_base_id,
data_source_id
FROM awscc.bedrock.data_sources_list_only
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
INSERT INTO awscc.bedrock.data_sources (
 DataSourceConfiguration,
 KnowledgeBaseId,
 Name,
 region
)
SELECT 
'{{ DataSourceConfiguration }}',
 '{{ KnowledgeBaseId }}',
 '{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.bedrock.data_sources (
 DataSourceConfiguration,
 Description,
 KnowledgeBaseId,
 Name,
 ServerSideEncryptionConfiguration,
 VectorIngestionConfiguration,
 DataDeletionPolicy,
 region
)
SELECT 
 '{{ DataSourceConfiguration }}',
 '{{ Description }}',
 '{{ KnowledgeBaseId }}',
 '{{ Name }}',
 '{{ ServerSideEncryptionConfiguration }}',
 '{{ VectorIngestionConfiguration }}',
 '{{ DataDeletionPolicy }}',
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
      - name: DataSourceConfiguration
        value:
          Type: '{{ Type }}'
          S3Configuration:
            BucketArn: '{{ BucketArn }}'
            InclusionPrefixes:
              - '{{ InclusionPrefixes[0] }}'
            BucketOwnerAccountId: '{{ BucketOwnerAccountId }}'
          ConfluenceConfiguration:
            SourceConfiguration:
              HostUrl: '{{ HostUrl }}'
              HostType: '{{ HostType }}'
              AuthType: '{{ AuthType }}'
              CredentialsSecretArn: '{{ CredentialsSecretArn }}'
            CrawlerConfiguration:
              FilterConfiguration:
                Type: '{{ Type }}'
                PatternObjectFilter:
                  Filters:
                    - ObjectType: '{{ ObjectType }}'
                      InclusionFilters:
                        - '{{ InclusionFilters[0] }}'
                      ExclusionFilters: null
          SalesforceConfiguration:
            SourceConfiguration:
              HostUrl: '{{ HostUrl }}'
              AuthType: '{{ AuthType }}'
              CredentialsSecretArn: '{{ CredentialsSecretArn }}'
            CrawlerConfiguration:
              FilterConfiguration: null
          SharePointConfiguration:
            SourceConfiguration:
              SiteUrls:
                - '{{ SiteUrls[0] }}'
              HostType: '{{ HostType }}'
              AuthType: '{{ AuthType }}'
              CredentialsSecretArn: '{{ CredentialsSecretArn }}'
              TenantId: '{{ TenantId }}'
              Domain: '{{ Domain }}'
            CrawlerConfiguration:
              FilterConfiguration: null
          WebConfiguration:
            SourceConfiguration:
              UrlConfiguration:
                SeedUrls:
                  - Url: '{{ Url }}'
            CrawlerConfiguration:
              CrawlerLimits:
                RateLimit: '{{ RateLimit }}'
                MaxPages: '{{ MaxPages }}'
              InclusionFilters: null
              ExclusionFilters: null
              Scope: '{{ Scope }}'
              UserAgent: '{{ UserAgent }}'
              UserAgentHeader: '{{ UserAgentHeader }}'
      - name: Description
        value: '{{ Description }}'
      - name: KnowledgeBaseId
        value: '{{ KnowledgeBaseId }}'
      - name: Name
        value: '{{ Name }}'
      - name: ServerSideEncryptionConfiguration
        value:
          KmsKeyArn: '{{ KmsKeyArn }}'
      - name: VectorIngestionConfiguration
        value:
          ChunkingConfiguration:
            ChunkingStrategy: '{{ ChunkingStrategy }}'
            FixedSizeChunkingConfiguration:
              MaxTokens: '{{ MaxTokens }}'
              OverlapPercentage: '{{ OverlapPercentage }}'
            HierarchicalChunkingConfiguration:
              LevelConfigurations:
                - MaxTokens: '{{ MaxTokens }}'
              OverlapTokens: '{{ OverlapTokens }}'
            SemanticChunkingConfiguration:
              BreakpointPercentileThreshold: '{{ BreakpointPercentileThreshold }}'
              BufferSize: '{{ BufferSize }}'
              MaxTokens: '{{ MaxTokens }}'
          CustomTransformationConfiguration:
            IntermediateStorage:
              S3Location:
                URI: '{{ URI }}'
            Transformations:
              - StepToApply: '{{ StepToApply }}'
                TransformationFunction:
                  TransformationLambdaConfiguration:
                    LambdaArn: '{{ LambdaArn }}'
          ParsingConfiguration:
            ParsingStrategy: '{{ ParsingStrategy }}'
            BedrockFoundationModelConfiguration:
              ModelArn: '{{ ModelArn }}'
              ParsingPrompt:
                ParsingPromptText: '{{ ParsingPromptText }}'
              ParsingModality: '{{ ParsingModality }}'
            BedrockDataAutomationConfiguration:
              ParsingModality: null
          ContextEnrichmentConfiguration:
            Type: '{{ Type }}'
            BedrockFoundationModelConfiguration:
              EnrichmentStrategyConfiguration:
                Method: '{{ Method }}'
              ModelArn: null
      - name: DataDeletionPolicy
        value: '{{ DataDeletionPolicy }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.bedrock.data_sources
SET PatchDocument = string('{{ {
    "Description": description,
    "Name": name,
    "ServerSideEncryptionConfiguration": server_side_encryption_configuration,
    "DataDeletionPolicy": data_deletion_policy
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<KnowledgeBaseId>|<DataSourceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.bedrock.data_sources
WHERE Identifier = '<KnowledgeBaseId|DataSourceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

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
bedrock:CreateDataSource,
bedrock:GetDataSource,
bedrock:GetKnowledgeBase,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="read">

```json
bedrock:GetDataSource
```

</TabItem>
<TabItem value="update">

```json
bedrock:GetDataSource,
bedrock:UpdateDataSource,
kms:GenerateDataKey
```

</TabItem>
<TabItem value="delete">

```json
bedrock:GetDataSource,
bedrock:DeleteDataSource
```

</TabItem>
<TabItem value="list">

```json
bedrock:ListDataSources
```

</TabItem>
</Tabs>