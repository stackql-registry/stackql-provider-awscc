---
title: connector_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - connector_profiles
  - appflow
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

Creates, updates, deletes or gets a <code>connector_profile</code> resource or lists <code>connector_profiles</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>connector_profiles</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppFlow::ConnectorProfile</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appflow.connector_profiles" /></td></tr>
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
    "name": "connector_profile_arn",
    "type": "string",
    "description": "Unique identifier for connector profile resources"
  },
  {
    "name": "connector_label",
    "type": "string",
    "description": "The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/."
  },
  {
    "name": "connector_profile_name",
    "type": "string",
    "description": "The maximum number of items to retrieve in a single batch."
  },
  {
    "name": "kms_arn",
    "type": "string",
    "description": "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key."
  },
  {
    "name": "connector_type",
    "type": "string",
    "description": "List of Saas providers that need connector profile to be created"
  },
  {
    "name": "connection_mode",
    "type": "string",
    "description": "Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular"
  },
  {
    "name": "connector_profile_config",
    "type": "object",
    "description": "Connector specific configurations needed to create connector profile",
    "children": [
      {
        "name": "connector_profile_properties",
        "type": "object",
        "description": "Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular",
        "children": [
          {
            "name": "datadog",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Datadog resource"
              }
            ]
          },
          {
            "name": "dynatrace",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Dynatrace resource"
              }
            ]
          },
          {
            "name": "infor_nexus",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the InforNexus resource"
              }
            ]
          },
          {
            "name": "marketo",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Marketo resource"
              }
            ]
          },
          {
            "name": "redshift",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "database_url",
                "type": "string",
                "description": "The JDBC URL of the Amazon Redshift cluster."
              },
              {
                "name": "bucket_name",
                "type": "string",
                "description": "The name of the Amazon S3 bucket associated with Redshift."
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": "The object key for the destination bucket in which Amazon AppFlow will place the ﬁles."
              },
              {
                "name": "role_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the IAM role."
              },
              {
                "name": "is_redshift_serverless",
                "type": "boolean",
                "description": "If Amazon AppFlow will connect to Amazon Redshift Serverless or Amazon Redshift cluster."
              },
              {
                "name": "data_api_role_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the IAM role that grants Amazon AppFlow access to the data through the Amazon Redshift Data API."
              },
              {
                "name": "cluster_identifier",
                "type": "string",
                "description": "The unique identifier of the Amazon Redshift cluster."
              },
              {
                "name": "workgroup_name",
                "type": "string",
                "description": "The name of the Amazon Redshift serverless workgroup"
              },
              {
                "name": "database_name",
                "type": "string",
                "description": "The name of the Amazon Redshift database that will store the transferred data."
              }
            ]
          },
          {
            "name": "s_ap_odata",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "application_host_url",
                "type": "string",
                "description": ""
              },
              {
                "name": "application_service_path",
                "type": "string",
                "description": ""
              },
              {
                "name": "port_number",
                "type": "integer",
                "description": ""
              },
              {
                "name": "client_number",
                "type": "string",
                "description": ""
              },
              {
                "name": "logon_language",
                "type": "string",
                "description": ""
              },
              {
                "name": "private_link_service_name",
                "type": "string",
                "description": ""
              },
              {
                "name": "oauth_properties",
                "type": "object",
                "description": ""
              },
              {
                "name": "disable_ss_o",
                "type": "boolean",
                "description": "If you set this parameter to true, Amazon AppFlow bypasses the single sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance."
              }
            ]
          },
          {
            "name": "salesforce",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Salesforce resource"
              },
              {
                "name": "is_sandbox_environment",
                "type": "boolean",
                "description": "Indicates whether the connector profile applies to a sandbox or production environment"
              },
              {
                "name": "use_private_link_for_metadata_and_authorization",
                "type": "boolean",
                "description": "Indicates whether to make Metadata And Authorization calls over Pivate Network"
              }
            ]
          },
          {
            "name": "pardot",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Salesforce Pardot resource"
              },
              {
                "name": "is_sandbox_environment",
                "type": "boolean",
                "description": "Indicates whether the connector profile applies to a demo or production environment"
              },
              {
                "name": "business_unit_id",
                "type": "string",
                "description": "The Business unit id of Salesforce Pardot instance to be connected"
              }
            ]
          },
          {
            "name": "service_now",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the ServiceNow resource"
              }
            ]
          },
          {
            "name": "slack",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Slack resource"
              }
            ]
          },
          {
            "name": "snowflake",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "warehouse",
                "type": "string",
                "description": "The name of the Snowﬂake warehouse."
              },
              {
                "name": "stage",
                "type": "string",
                "description": "The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the<br />Snowﬂake account. This is written in the following format: &lt; Database&gt;&lt; Schema&gt;&lt;Stage Name&gt;."
              },
              {
                "name": "bucket_name",
                "type": "string",
                "description": "The name of the Amazon S3 bucket associated with Snowﬂake."
              },
              {
                "name": "bucket_prefix",
                "type": "string",
                "description": "The bucket prefix that refers to the Amazon S3 bucket associated with Snowﬂake."
              },
              {
                "name": "private_link_service_name",
                "type": "string",
                "description": "The Snowﬂake Private Link service name to be used for private data transfers."
              },
              {
                "name": "account_name",
                "type": "string",
                "description": "The name of the account."
              },
              {
                "name": "region",
                "type": "string",
                "description": "The region of the Snowﬂake account."
              }
            ]
          },
          {
            "name": "veeva",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Veeva resource"
              }
            ]
          },
          {
            "name": "zendesk",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "instance_url",
                "type": "string",
                "description": "The location of the Zendesk resource"
              }
            ]
          },
          {
            "name": "custom_connector",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "profile_properties",
                "type": "object",
                "description": "A map for properties for custom connector."
              },
              {
                "name": "oauth2_properties",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      },
      {
        "name": "connector_profile_credentials",
        "type": "object",
        "description": "Connector specific configuration needed to create connector profile based on Authentication mechanism",
        "children": [
          {
            "name": "amplitude",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "api_key",
                "type": "string",
                "description": "A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API."
              },
              {
                "name": "secret_key",
                "type": "string",
                "description": ""
              }
            ]
          },
          {
            "name": "datadog",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "api_key",
                "type": "string",
                "description": "A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API."
              },
              {
                "name": "application_key",
                "type": "string",
                "description": "Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API."
              }
            ]
          },
          {
            "name": "dynatrace",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "api_token",
                "type": "string",
                "description": "The API tokens used by Dynatrace API to authenticate various API calls."
              }
            ]
          },
          {
            "name": "google_analytics",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "client_id",
                "type": "string",
                "description": "The identiﬁer for the desired client."
              },
              {
                "name": "client_secret",
                "type": "string",
                "description": "The client secret used by the oauth client to authenticate to the authorization server."
              },
              {
                "name": "access_token",
                "type": "string",
                "description": "The credentials used to access protected resources."
              },
              {
                "name": "refresh_token",
                "type": "string",
                "description": "The credentials used to acquire new access tokens."
              },
              {
                "name": "connector_oauth_request",
                "type": "object",
                "description": "The oauth needed to request security tokens from the connector endpoint."
              }
            ]
          },
          {
            "name": "infor_nexus",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "access_key_id",
                "type": "string",
                "description": "The Access Key portion of the credentials."
              },
              {
                "name": "user_id",
                "type": "string",
                "description": "The identiﬁer for the user."
              },
              {
                "name": "secret_access_key",
                "type": "string",
                "description": "The secret key used to sign requests."
              }
            ]
          },
          {
            "name": "marketo",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "client_id",
                "type": "string",
                "description": "The identiﬁer for the desired client."
              },
              {
                "name": "client_secret",
                "type": "string",
                "description": "The client secret used by the oauth client to authenticate to the authorization server."
              },
              {
                "name": "access_token",
                "type": "string",
                "description": "The credentials used to access protected resources."
              },
              {
                "name": "connector_oauth_request",
                "type": "object",
                "description": "The oauth needed to request security tokens from the connector endpoint."
              }
            ]
          },
          {
            "name": "redshift",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "username",
                "type": "string",
                "description": "The name of the user."
              },
              {
                "name": "password",
                "type": "string",
                "description": "The password that corresponds to the username."
              }
            ]
          },
          {
            "name": "s_ap_odata",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "basic_auth_credentials",
                "type": "object",
                "description": ""
              },
              {
                "name": "oauth_credentials",
                "type": "object",
                "description": ""
              }
            ]
          },
          {
            "name": "salesforce",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "access_token",
                "type": "string",
                "description": "The credentials used to access protected resources."
              },
              {
                "name": "refresh_token",
                "type": "string",
                "description": "The credentials used to acquire new access tokens."
              },
              {
                "name": "connector_oauth_request",
                "type": "object",
                "description": "The oauth needed to request security tokens from the connector endpoint."
              },
              {
                "name": "client_credentials_arn",
                "type": "string",
                "description": "The client credentials to fetch access token and refresh token."
              },
              {
                "name": "oauth2_grant_type",
                "type": "string",
                "description": "The grant types to fetch an access token"
              },
              {
                "name": "jwt_token",
                "type": "string",
                "description": "The credentials used to access your Salesforce records"
              }
            ]
          },
          {
            "name": "pardot",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "access_token",
                "type": "string",
                "description": "The credentials used to access protected resources."
              },
              {
                "name": "refresh_token",
                "type": "string",
                "description": "The credentials used to acquire new access tokens."
              },
              {
                "name": "connector_oauth_request",
                "type": "object",
                "description": "The oauth needed to request security tokens from the connector endpoint."
              },
              {
                "name": "client_credentials_arn",
                "type": "string",
                "description": "The client credentials to fetch access token and refresh token."
              }
            ]
          },
          {
            "name": "service_now",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "username",
                "type": "string",
                "description": "The name of the user."
              },
              {
                "name": "password",
                "type": "string",
                "description": "The password that corresponds to the username."
              },
              {
                "name": "oauth2_credentials",
                "type": "object",
                "description": "The OAuth 2.0 credentials required to authenticate the user."
              }
            ]
          },
          {
            "name": "singular",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "api_key",
                "type": "string",
                "description": "A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API."
              }
            ]
          },
          {
            "name": "slack",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "client_id",
                "type": "string",
                "description": "The identiﬁer for the desired client."
              },
              {
                "name": "client_secret",
                "type": "string",
                "description": "The client secret used by the oauth client to authenticate to the authorization server."
              },
              {
                "name": "access_token",
                "type": "string",
                "description": "The credentials used to access protected resources."
              },
              {
                "name": "connector_oauth_request",
                "type": "object",
                "description": "The oauth needed to request security tokens from the connector endpoint."
              }
            ]
          },
          {
            "name": "snowflake",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "username",
                "type": "string",
                "description": "The name of the user."
              },
              {
                "name": "password",
                "type": "string",
                "description": "The password that corresponds to the username."
              }
            ]
          },
          {
            "name": "trendmicro",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "api_secret_key",
                "type": "string",
                "description": "The Secret Access Key portion of the credentials."
              }
            ]
          },
          {
            "name": "veeva",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "username",
                "type": "string",
                "description": "The name of the user."
              },
              {
                "name": "password",
                "type": "string",
                "description": "The password that corresponds to the username."
              }
            ]
          },
          {
            "name": "zendesk",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "client_id",
                "type": "string",
                "description": "The identiﬁer for the desired client."
              },
              {
                "name": "client_secret",
                "type": "string",
                "description": "The client secret used by the oauth client to authenticate to the authorization server."
              },
              {
                "name": "access_token",
                "type": "string",
                "description": "The credentials used to access protected resources."
              },
              {
                "name": "connector_oauth_request",
                "type": "object",
                "description": "The oauth needed to request security tokens from the connector endpoint."
              }
            ]
          },
          {
            "name": "custom_connector",
            "type": "object",
            "description": "",
            "children": [
              {
                "name": "authentication_type",
                "type": "string",
                "description": ""
              },
              {
                "name": "basic",
                "type": "object",
                "description": ""
              },
              {
                "name": "oauth2",
                "type": "object",
                "description": ""
              },
              {
                "name": "api_key",
                "type": "object",
                "description": ""
              },
              {
                "name": "custom",
                "type": "object",
                "description": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "credentials_arn",
    "type": "string",
    "description": "A unique Arn for Connector-Profile resource"
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
    "name": "connector_profile_name",
    "type": "string",
    "description": "The maximum number of items to retrieve in a single batch."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html"><code>AWS::AppFlow::ConnectorProfile</code></a>.

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
    <td><code>connector_profiles</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ConnectorProfileName, ConnectionMode, ConnectorType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>connector_profiles</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>connector_profiles</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>connector_profiles_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>connector_profiles</code></td>
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

Gets all properties from an individual <code>connector_profile</code>.
```sql
SELECT
region,
connector_profile_arn,
connector_label,
connector_profile_name,
kms_arn,
connector_type,
connection_mode,
connector_profile_config,
credentials_arn
FROM awscc.appflow.connector_profiles
WHERE region = 'us-east-1' AND Identifier = '<ConnectorProfileName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>connector_profiles</code> in a region.
```sql
SELECT
region,
connector_profile_name
FROM awscc.appflow.connector_profiles_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>connector_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appflow.connector_profiles (
 ConnectorProfileName,
 ConnectorType,
 ConnectionMode,
 region
)
SELECT 
'{{ ConnectorProfileName }}',
 '{{ ConnectorType }}',
 '{{ ConnectionMode }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appflow.connector_profiles (
 ConnectorLabel,
 ConnectorProfileName,
 KMSArn,
 ConnectorType,
 ConnectionMode,
 ConnectorProfileConfig,
 region
)
SELECT 
 '{{ ConnectorLabel }}',
 '{{ ConnectorProfileName }}',
 '{{ KMSArn }}',
 '{{ ConnectorType }}',
 '{{ ConnectionMode }}',
 '{{ ConnectorProfileConfig }}',
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
  - name: connector_profile
    props:
      - name: ConnectorLabel
        value: '{{ ConnectorLabel }}'
      - name: ConnectorProfileName
        value: '{{ ConnectorProfileName }}'
      - name: KMSArn
        value: '{{ KMSArn }}'
      - name: ConnectorType
        value: '{{ ConnectorType }}'
      - name: ConnectionMode
        value: '{{ ConnectionMode }}'
      - name: ConnectorProfileConfig
        value:
          ConnectorProfileProperties:
            Datadog:
              InstanceUrl: '{{ InstanceUrl }}'
            Dynatrace:
              InstanceUrl: null
            InforNexus:
              InstanceUrl: null
            Marketo:
              InstanceUrl: null
            Redshift:
              DatabaseUrl: '{{ DatabaseUrl }}'
              BucketName: '{{ BucketName }}'
              BucketPrefix: '{{ BucketPrefix }}'
              RoleArn: '{{ RoleArn }}'
              IsRedshiftServerless: '{{ IsRedshiftServerless }}'
              DataApiRoleArn: '{{ DataApiRoleArn }}'
              ClusterIdentifier: '{{ ClusterIdentifier }}'
              WorkgroupName: '{{ WorkgroupName }}'
              DatabaseName: '{{ DatabaseName }}'
            SAPOData:
              ApplicationHostUrl: '{{ ApplicationHostUrl }}'
              ApplicationServicePath: '{{ ApplicationServicePath }}'
              PortNumber: '{{ PortNumber }}'
              ClientNumber: '{{ ClientNumber }}'
              LogonLanguage: '{{ LogonLanguage }}'
              PrivateLinkServiceName: '{{ PrivateLinkServiceName }}'
              OAuthProperties:
                AuthCodeUrl: '{{ AuthCodeUrl }}'
                TokenUrl: '{{ TokenUrl }}'
                OAuthScopes:
                  - '{{ OAuthScopes[0] }}'
              DisableSSO: '{{ DisableSSO }}'
            Salesforce:
              InstanceUrl: null
              isSandboxEnvironment: '{{ isSandboxEnvironment }}'
              usePrivateLinkForMetadataAndAuthorization: '{{ usePrivateLinkForMetadataAndAuthorization }}'
            Pardot:
              InstanceUrl: null
              IsSandboxEnvironment: '{{ IsSandboxEnvironment }}'
              BusinessUnitId: '{{ BusinessUnitId }}'
            ServiceNow:
              InstanceUrl: null
            Slack:
              InstanceUrl: null
            Snowflake:
              Warehouse: '{{ Warehouse }}'
              Stage: '{{ Stage }}'
              BucketName: null
              BucketPrefix: null
              PrivateLinkServiceName: null
              AccountName: '{{ AccountName }}'
              Region: '{{ Region }}'
            Veeva:
              InstanceUrl: null
            Zendesk:
              InstanceUrl: null
            CustomConnector:
              ProfileProperties: {}
              OAuth2Properties:
                TokenUrl: '{{ TokenUrl }}'
                OAuth2GrantType: '{{ OAuth2GrantType }}'
                TokenUrlCustomProperties: {}
          ConnectorProfileCredentials:
            Amplitude:
              ApiKey: '{{ ApiKey }}'
              SecretKey: '{{ SecretKey }}'
            Datadog:
              ApiKey: null
              ApplicationKey: '{{ ApplicationKey }}'
            Dynatrace:
              ApiToken: '{{ ApiToken }}'
            GoogleAnalytics:
              ClientId: '{{ ClientId }}'
              ClientSecret: '{{ ClientSecret }}'
              AccessToken: '{{ AccessToken }}'
              RefreshToken: '{{ RefreshToken }}'
              ConnectorOAuthRequest:
                AuthCode: '{{ AuthCode }}'
                RedirectUri: '{{ RedirectUri }}'
            InforNexus:
              AccessKeyId: '{{ AccessKeyId }}'
              UserId: '{{ UserId }}'
              SecretAccessKey: '{{ SecretAccessKey }}'
              Datakey: null
            Marketo:
              ClientId: null
              ClientSecret: null
              AccessToken: null
              ConnectorOAuthRequest: null
            Redshift:
              Username: null
              Password: '{{ Password }}'
            SAPOData:
              BasicAuthCredentials:
                Username: null
                Password: null
              OAuthCredentials:
                AccessToken: null
                RefreshToken: null
                ConnectorOAuthRequest: null
                ClientId: null
                ClientSecret: null
            Salesforce:
              AccessToken: null
              RefreshToken: null
              ConnectorOAuthRequest: null
              ClientCredentialsArn: '{{ ClientCredentialsArn }}'
              OAuth2GrantType: null
              JwtToken: '{{ JwtToken }}'
            Pardot:
              AccessToken: null
              RefreshToken: null
              ConnectorOAuthRequest: null
              ClientCredentialsArn: null
            ServiceNow:
              Username: null
              Password: null
              OAuth2Credentials:
                ClientId: null
                ClientSecret: null
                AccessToken: null
                RefreshToken: null
                OAuthRequest: null
            Singular:
              ApiKey: null
            Slack:
              ClientId: null
              ClientSecret: null
              AccessToken: null
              ConnectorOAuthRequest: null
            Snowflake:
              Username: null
              Password: null
            Trendmicro:
              ApiSecretKey: '{{ ApiSecretKey }}'
            Veeva:
              Username: null
              Password: null
            Zendesk:
              ClientId: null
              ClientSecret: null
              AccessToken: null
              ConnectorOAuthRequest: null
            CustomConnector:
              AuthenticationType: '{{ AuthenticationType }}'
              Basic: null
              Oauth2: null
              ApiKey:
                ApiKey: null
                ApiSecretKey: null
              Custom:
                CustomAuthenticationType: '{{ CustomAuthenticationType }}'
                CredentialsMap: {}

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>connector_profile</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.appflow.connector_profiles
SET PatchDocument = string('{{ {
    "KMSArn": kms_arn,
    "ConnectionMode": connection_mode,
    "ConnectorProfileConfig": connector_profile_config
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ConnectorProfileName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appflow.connector_profiles
WHERE Identifier = '<ConnectorProfileName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>connector_profiles</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
    ]
}>
<TabItem value="create">

```json
appflow:CreateConnectorProfile,
kms:ListKeys,
kms:DescribeKey,
kms:ListAliases,
kms:CreateGrant,
kms:ListGrants,
iam:PassRole,
secretsmanager:CreateSecret,
secretsmanager:GetSecretValue,
secretsmanager:PutResourcePolicy
```

</TabItem>
<TabItem value="delete">

```json
appflow:DeleteConnectorProfile
```

</TabItem>
<TabItem value="list">

```json
appflow:DescribeConnectorProfiles
```

</TabItem>
<TabItem value="read">

```json
appflow:DescribeConnectorProfiles
```

</TabItem>
<TabItem value="update">

```json
appflow:UpdateConnectorProfile,
kms:ListKeys,
kms:DescribeKey,
kms:ListAliases,
kms:CreateGrant,
kms:ListGrants,
iam:PassRole,
secretsmanager:CreateSecret,
secretsmanager:GetSecretValue,
secretsmanager:PutResourcePolicy
```

</TabItem>
</Tabs>