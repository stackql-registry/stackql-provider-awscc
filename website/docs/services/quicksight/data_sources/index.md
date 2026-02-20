---
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - quicksight
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
<tr><td><b>Description</b></td><td>Definition of the AWS::QuickSight::DataSource Resource Type.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.quicksight.data_sources" /></td></tr>
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
    "name": "status",
    "type": "string",
    "description": ""
  },
  {
    "name": "created_time",
    "type": "string",
    "description": "<p>The time that this data source was created.</p>"
  },
  {
    "name": "error_info",
    "type": "object",
    "description": "<p>Error information for the data source creation or update.</p>",
    "children": [
      {
        "name": "type",
        "type": "string",
        "description": ""
      },
      {
        "name": "message",
        "type": "string",
        "description": "<p>Error message.</p>"
      }
    ]
  },
  {
    "name": "last_updated_time",
    "type": "string",
    "description": "<p>The last time that this data source was updated.</p>"
  },
  {
    "name": "folder_arns",
    "type": "array",
    "description": ""
  },
  {
    "name": "name",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_source_parameters",
    "type": "object",
    "description": "<p>The parameters that Amazon QuickSight uses to connect to your underlying data source.<br />This is a variant type structure. For this structure to be valid, only one of the<br />attributes can be non-null.</p>",
    "children": [
      {
        "name": "aurora_postgre_sql_parameters",
        "type": "object",
        "description": "<p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>The port that Amazon Aurora PostgreSQL is listening on.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>The Amazon Aurora PostgreSQL database to connect to.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>"
          }
        ]
      },
      {
        "name": "teradata_parameters",
        "type": "object",
        "description": "<p>The parameters for Teradata.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "rds_parameters",
        "type": "object",
        "description": "<p>The parameters for Amazon RDS.</p>",
        "children": [
          {
            "name": "instance_id",
            "type": "string",
            "description": "<p>Instance ID.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          }
        ]
      },
      {
        "name": "athena_parameters",
        "type": "object",
        "description": "<p>Parameters for Amazon Athena.</p>",
        "children": [
          {
            "name": "work_group",
            "type": "string",
            "description": "<p>The workgroup that Amazon Athena uses.</p>"
          },
          {
            "name": "identity_center_configuration",
            "type": "object",
            "description": "<p>The parameters for an IAM Identity Center configuration.</p>",
            "children": [
              {
                "name": "enable_identity_propagation",
                "type": "boolean",
                "description": "<p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>"
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "<p>Use the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>"
          }
        ]
      },
      {
        "name": "spark_parameters",
        "type": "object",
        "description": "<p>The parameters for Spark.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "maria_db_parameters",
        "type": "object",
        "description": "<p>The parameters for MariaDB.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "oracle_parameters",
        "type": "object",
        "description": "<p>The parameters for Oracle.</p>",
        "children": [
          {
            "name": "use_service_name",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "port",
            "type": "number",
            "description": "<p>The port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>The database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>An Oracle host.</p>"
          }
        ]
      },
      {
        "name": "presto_parameters",
        "type": "object",
        "description": "<p>The parameters for Presto.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          },
          {
            "name": "catalog",
            "type": "string",
            "description": "<p>Catalog.</p>"
          }
        ]
      },
      {
        "name": "starburst_parameters",
        "type": "object",
        "description": "<p>The parameters that are required to connect to a Starburst data source.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>The port for the Starburst data source.</p>"
          },
          {
            "name": "database_access_control_role",
            "type": "string",
            "description": ""
          },
          {
            "name": "product_type",
            "type": "string",
            "description": ""
          },
          {
            "name": "oauth_parameters",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "token_provider_url",
                "type": "string",
                "description": ""
              },
              {
                "name": "oauth_scope",
                "type": "string",
                "description": ""
              },
              {
                "name": "identity_provider_vpc_connection_properties",
                "type": "object",
                "description": "<p>VPC connection properties.</p>"
              },
              {
                "name": "identity_provider_resource_uri",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>The host name of the Starburst data source.</p>"
          },
          {
            "name": "catalog",
            "type": "string",
            "description": "<p>The catalog name for the Starburst data source.</p>"
          },
          {
            "name": "authentication_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "redshift_parameters",
        "type": "object",
        "description": "<p>The parameters for Amazon Redshift. The &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; field can be blank if<br />&#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; and &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; are both set. The &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; and &#95;&#95;CODE&#95;BLOCK&#95;4&#95;&#95; fields can be blank if the &#95;&#95;CODE&#95;BLOCK&#95;5&#95;&#95; field is set.</p>",
        "children": [
          {
            "name": "iam_parameters",
            "type": "object",
            "description": "<p>A structure that grants Amazon QuickSight access to your cluster and make a call to the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; API. For more information on the &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; API, see <a href=\"https://docs.aws.amazon.com/redshift/latest/APIReference/API&#95;GetClusterCredentials.html\"><br />&#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95;<br /></a>.</p>",
            "children": [
              {
                "name": "auto_create_database_user",
                "type": "boolean",
                "description": "<p>Automatically creates a database user. If your database doesn't have a &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;, set this parameter to &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95;. If there is no &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95;, Amazon QuickSight can't connect to your cluster. The &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; that you use for this operation must grant access to &#95;&#95;CODE&#95;BLOCK&#95;4&#95;&#95; to successfully create the user.</p>"
              },
              {
                "name": "database_user",
                "type": "string",
                "description": "<p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; to &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; to create a new user with PUBLIC permissions.</p>"
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "<p>Use the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; structure to allow Amazon QuickSight to call &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; on your cluster. The calling principal must have &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>"
              },
              {
                "name": "database_groups",
                "type": "array",
                "description": "<p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95;. If you choose to include this parameter, the &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; must grant access to &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95;.</p>"
              }
            ]
          },
          {
            "name": "cluster_id",
            "type": "string",
            "description": "<p>Cluster ID. This field can be blank if the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; and &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; are<br />provided.</p>"
          },
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port. This field can be blank if the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; is provided.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host. This field can be blank if &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; is provided.</p>"
          },
          {
            "name": "identity_center_configuration",
            "type": "object",
            "description": "<p>The parameters for an IAM Identity Center configuration.</p>",
            "children": [
              {
                "name": "enable_identity_propagation",
                "type": "boolean",
                "description": "<p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>"
              }
            ]
          }
        ]
      },
      {
        "name": "my_sql_parameters",
        "type": "object",
        "description": "<p>The parameters for MySQL.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "sql_server_parameters",
        "type": "object",
        "description": "<p>The parameters for SQL Server.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "snowflake_parameters",
        "type": "object",
        "description": "<p>The parameters for Snowflake.</p>",
        "children": [
          {
            "name": "warehouse",
            "type": "string",
            "description": "<p>Warehouse.</p>"
          },
          {
            "name": "database_access_control_role",
            "type": "string",
            "description": ""
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "oauth_parameters",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "token_provider_url",
                "type": "string",
                "description": ""
              },
              {
                "name": "oauth_scope",
                "type": "string",
                "description": ""
              },
              {
                "name": "identity_provider_vpc_connection_properties",
                "type": "object",
                "description": "<p>VPC connection properties.</p>"
              },
              {
                "name": "identity_provider_resource_uri",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          },
          {
            "name": "authentication_type",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "amazon_elasticsearch_parameters",
        "type": "object",
        "description": "<p>The parameters for OpenSearch.</p>",
        "children": [
          {
            "name": "domain",
            "type": "string",
            "description": "<p>The OpenSearch domain.</p>"
          }
        ]
      },
      {
        "name": "amazon_open_search_parameters",
        "type": "object",
        "description": "<p>The parameters for OpenSearch.</p>",
        "children": [
          {
            "name": "domain",
            "type": "string",
            "description": "<p>The OpenSearch domain.</p>"
          }
        ]
      },
      {
        "name": "postgre_sql_parameters",
        "type": "object",
        "description": "<p>The parameters for PostgreSQL.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "aurora_parameters",
        "type": "object",
        "description": "<p>Parameters for Amazon Aurora.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>Port.</p>"
          },
          {
            "name": "database",
            "type": "string",
            "description": "<p>Database.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>Host.</p>"
          }
        ]
      },
      {
        "name": "s3_parameters",
        "type": "object",
        "description": "<p>The parameters for S3.</p>",
        "children": [
          {
            "name": "manifest_file_location",
            "type": "object",
            "description": "<p>Amazon S3 manifest file location.</p>",
            "children": [
              {
                "name": "bucket",
                "type": "string",
                "description": "<p>Amazon S3 bucket.</p>"
              },
              {
                "name": "key",
                "type": "string",
                "description": "<p>Amazon S3 key that identifies an object.</p>"
              }
            ]
          },
          {
            "name": "role_arn",
            "type": "string",
            "description": "<p>Use the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>"
          }
        ]
      },
      {
        "name": "trino_parameters",
        "type": "object",
        "description": "<p>The parameters that are required to connect to a Trino data source.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>The port for the Trino data source.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>The host name of the Trino data source.</p>"
          },
          {
            "name": "catalog",
            "type": "string",
            "description": "<p>The catalog name for the Trino data source.</p>"
          }
        ]
      },
      {
        "name": "databricks_parameters",
        "type": "object",
        "description": "<p>The parameters that are required to connect to a Databricks data source.</p>",
        "children": [
          {
            "name": "port",
            "type": "number",
            "description": "<p>The port for the Databricks data source.</p>"
          },
          {
            "name": "host",
            "type": "string",
            "description": "<p>The host name of the Databricks data source.</p>"
          },
          {
            "name": "sql_endpoint_path",
            "type": "string",
            "description": "<p>The HTTP path of the Databricks data source.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "type",
    "type": "string",
    "description": ""
  },
  {
    "name": "vpc_connection_properties",
    "type": "object",
    "description": "<p>VPC connection properties.</p>",
    "children": [
      {
        "name": "vpc_connection_arn",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) for the VPC connection.</p>"
      }
    ]
  },
  {
    "name": "alternate_data_source_parameters",
    "type": "array",
    "description": "<p>A set of alternate data source parameters that you want to share for the credentials<br />stored with this data source. The credentials are applied in tandem with the data source<br />parameters when you copy a data source by using a create or update request. The API<br />operation compares the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; structure that's in the request<br />with the structures in the &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; allow list. If the<br />structures are an exact match, the request is allowed to use the credentials from this<br />existing data source. If the &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; list is null,<br />the &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; originally used with this &#95;&#95;CODE&#95;BLOCK&#95;4&#95;&#95;<br />are automatically allowed.</p>"
  },
  {
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "permissions",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "principal",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of the principal. This can be one of the<br />following:</p><br /><ul><br /><li><br /><p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p><br /></li><br /><li><br /><p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p><br /></li><br /><li><br /><p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight<br />ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.<br />(This is less common.) </p><br /></li><br /></ul>"
      },
      {
        "name": "actions",
        "type": "array",
        "description": "<p>The IAM action to grant or revoke permissions on.</p>"
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": "<p>The Amazon Resource Name (ARN) of the data source.</p>"
  },
  {
    "name": "ssl_properties",
    "type": "object",
    "description": "<p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your<br />underlying data source.</p>",
    "children": [
      {
        "name": "disable_ssl",
        "type": "boolean",
        "description": "<p>A Boolean option to control whether SSL should be disabled.</p>"
      }
    ]
  },
  {
    "name": "credentials",
    "type": "object",
    "description": "<p>Data source credentials. This is a variant type structure. For this structure to be<br />valid, only one of the attributes can be non-null.</p>",
    "children": [
      {
        "name": "secret_arn",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>"
      },
      {
        "name": "copy_source_arn",
        "type": "string",
        "description": "<p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you<br />want to use. When &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; is not null, the credential pair from the<br />data source in the ARN is used as the credentials for the<br />&#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; structure.</p>"
      },
      {
        "name": "credential_pair",
        "type": "object",
        "description": "<p>The combination of user name and password that are used as credentials.</p>",
        "children": [
          {
            "name": "alternate_data_source_parameters",
            "type": "array",
            "description": "<p>A set of alternate data source parameters that you want to share for these<br />credentials. The credentials are applied in tandem with the data source parameters when<br />you copy a data source by using a create or update request. The API operation compares<br />the &#95;&#95;CODE&#95;BLOCK&#95;0&#95;&#95; structure that's in the request with the<br />structures in the &#95;&#95;CODE&#95;BLOCK&#95;1&#95;&#95; allow list. If the<br />structures are an exact match, the request is allowed to use the new data source with<br />the existing credentials. If the &#95;&#95;CODE&#95;BLOCK&#95;2&#95;&#95; list is<br />null, the &#95;&#95;CODE&#95;BLOCK&#95;3&#95;&#95; originally used with these<br />&#95;&#95;CODE&#95;BLOCK&#95;4&#95;&#95; is automatically allowed.</p>"
          },
          {
            "name": "username",
            "type": "string",
            "description": "<p>User name.</p>"
          },
          {
            "name": "password",
            "type": "string",
            "description": "<p>Password.</p>"
          }
        ]
      }
    ]
  },
  {
    "name": "data_source_id",
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
        "description": "<p>Tag key.</p>"
      },
      {
        "name": "value",
        "type": "string",
        "description": "<p>Tag value.</p>"
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
    "name": "aws_account_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "data_source_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html"><code>AWS::QuickSight::DataSource</code></a>.

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
    <td><CopyableCode code="Name, Type, region" /></td>
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
status,
created_time,
error_info,
last_updated_time,
folder_arns,
name,
data_source_parameters,
type,
vpc_connection_properties,
alternate_data_source_parameters,
aws_account_id,
permissions,
arn,
ssl_properties,
credentials,
data_source_id,
tags
FROM awscc.quicksight.data_sources
WHERE region = 'us-east-1' AND Identifier = '<AwsAccountId>|<DataSourceId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>data_sources</code> in a region.
```sql
SELECT
region,
aws_account_id,
data_source_id
FROM awscc.quicksight.data_sources_list_only
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
INSERT INTO awscc.quicksight.data_sources (
 Name,
 Type,
 region
)
SELECT 
'{{ Name }}',
 '{{ Type }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.quicksight.data_sources (
 ErrorInfo,
 FolderArns,
 Name,
 DataSourceParameters,
 Type,
 VpcConnectionProperties,
 AlternateDataSourceParameters,
 AwsAccountId,
 Permissions,
 SslProperties,
 Credentials,
 DataSourceId,
 Tags,
 region
)
SELECT 
 '{{ ErrorInfo }}',
 '{{ FolderArns }}',
 '{{ Name }}',
 '{{ DataSourceParameters }}',
 '{{ Type }}',
 '{{ VpcConnectionProperties }}',
 '{{ AlternateDataSourceParameters }}',
 '{{ AwsAccountId }}',
 '{{ Permissions }}',
 '{{ SslProperties }}',
 '{{ Credentials }}',
 '{{ DataSourceId }}',
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
  - name: data_source
    props:
      - name: ErrorInfo
        value:
          Type: '{{ Type }}'
          Message: '{{ Message }}'
      - name: FolderArns
        value:
          - '{{ FolderArns[0] }}'
      - name: Name
        value: '{{ Name }}'
      - name: DataSourceParameters
        value:
          AuroraPostgreSqlParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          TeradataParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          RdsParameters:
            InstanceId: '{{ InstanceId }}'
            Database: '{{ Database }}'
          AthenaParameters:
            WorkGroup: '{{ WorkGroup }}'
            IdentityCenterConfiguration:
              EnableIdentityPropagation: '{{ EnableIdentityPropagation }}'
            RoleArn: '{{ RoleArn }}'
          SparkParameters:
            Port: null
            Host: '{{ Host }}'
          MariaDbParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          OracleParameters:
            UseServiceName: '{{ UseServiceName }}'
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          PrestoParameters:
            Port: null
            Host: '{{ Host }}'
            Catalog: '{{ Catalog }}'
          StarburstParameters:
            Port: null
            DatabaseAccessControlRole: '{{ DatabaseAccessControlRole }}'
            ProductType: '{{ ProductType }}'
            OAuthParameters:
              TokenProviderUrl: '{{ TokenProviderUrl }}'
              OAuthScope: '{{ OAuthScope }}'
              IdentityProviderVpcConnectionProperties:
                VpcConnectionArn: '{{ VpcConnectionArn }}'
              IdentityProviderResourceUri: '{{ IdentityProviderResourceUri }}'
            Host: '{{ Host }}'
            Catalog: '{{ Catalog }}'
            AuthenticationType: '{{ AuthenticationType }}'
          RedshiftParameters:
            IAMParameters:
              AutoCreateDatabaseUser: '{{ AutoCreateDatabaseUser }}'
              DatabaseUser: '{{ DatabaseUser }}'
              RoleArn: '{{ RoleArn }}'
              DatabaseGroups:
                - '{{ DatabaseGroups[0] }}'
            ClusterId: '{{ ClusterId }}'
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
            IdentityCenterConfiguration: null
          MySqlParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          SqlServerParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          SnowflakeParameters:
            Warehouse: '{{ Warehouse }}'
            DatabaseAccessControlRole: '{{ DatabaseAccessControlRole }}'
            Database: '{{ Database }}'
            OAuthParameters: null
            Host: '{{ Host }}'
            AuthenticationType: null
          AmazonElasticsearchParameters:
            Domain: '{{ Domain }}'
          AmazonOpenSearchParameters:
            Domain: '{{ Domain }}'
          PostgreSqlParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          AuroraParameters:
            Port: null
            Database: '{{ Database }}'
            Host: '{{ Host }}'
          S3Parameters:
            ManifestFileLocation:
              Bucket: '{{ Bucket }}'
              Key: '{{ Key }}'
            RoleArn: '{{ RoleArn }}'
          TrinoParameters:
            Port: null
            Host: '{{ Host }}'
            Catalog: '{{ Catalog }}'
          DatabricksParameters:
            Port: null
            Host: '{{ Host }}'
            SqlEndpointPath: '{{ SqlEndpointPath }}'
      - name: Type
        value: '{{ Type }}'
      - name: VpcConnectionProperties
        value: null
      - name: AlternateDataSourceParameters
        value:
          - null
      - name: AwsAccountId
        value: '{{ AwsAccountId }}'
      - name: Permissions
        value:
          - Principal: '{{ Principal }}'
            Actions:
              - '{{ Actions[0] }}'
      - name: SslProperties
        value:
          DisableSsl: '{{ DisableSsl }}'
      - name: Credentials
        value:
          SecretArn: '{{ SecretArn }}'
          CopySourceArn: '{{ CopySourceArn }}'
          CredentialPair:
            AlternateDataSourceParameters:
              - null
            Username: '{{ Username }}'
            Password: '{{ Password }}'
      - name: DataSourceId
        value: '{{ DataSourceId }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>data_source</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.quicksight.data_sources
SET PatchDocument = string('{{ {
    "ErrorInfo": error_info,
    "FolderArns": folder_arns,
    "Name": name,
    "DataSourceParameters": data_source_parameters,
    "VpcConnectionProperties": vpc_connection_properties,
    "AlternateDataSourceParameters": alternate_data_source_parameters,
    "Permissions": permissions,
    "SslProperties": ssl_properties,
    "Credentials": credentials,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<AwsAccountId>|<DataSourceId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.quicksight.data_sources
WHERE Identifier = '<AwsAccountId|DataSourceId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>data_sources</code> resource, the following permissions are required:

<Tabs
    defaultValue="read"
    values={[
      { label: 'Read', value: 'read', },
      { label: 'Create', value: 'create', },
      { label: 'Update', value: 'update', },
      { label: 'List', value: 'list', },
      { label: 'Delete', value: 'delete', },
    ]
}>
<TabItem value="read">

```json
quicksight:DescribeDataSource,
quicksight:DescribeDataSourcePermissions,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="create">

```json
quicksight:CreateDataSource,
quicksight:DescribeDataSource,
quicksight:DescribeDataSourcePermissions,
quicksight:TagResource,
quicksight:ListTagsForResource,
quicksight:CreateFolderMembership,
quicksight:DeleteFolderMembership,
quicksight:ListFoldersForResource
```

</TabItem>
<TabItem value="update">

```json
quicksight:DescribeDataSource,
quicksight:DescribeDataSourcePermissions,
quicksight:UpdateDataSource,
quicksight:UpdateDataSourcePermissions,
quicksight:CreateFolderMembership,
quicksight:DeleteFolderMembership,
quicksight:ListFoldersForResource,
quicksight:TagResource,
quicksight:UntagResource,
quicksight:ListTagsForResource
```

</TabItem>
<TabItem value="list">

```json
quicksight:DescribeDataSource,
quicksight:ListDataSources
```

</TabItem>
<TabItem value="delete">

```json
quicksight:DescribeDataSource,
quicksight:DescribeDataSourcePermissions,
quicksight:DeleteDataSource,
quicksight:ListTagsForResource
```

</TabItem>
</Tabs>