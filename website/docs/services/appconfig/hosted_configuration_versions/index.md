---
title: hosted_configuration_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_configuration_versions
  - appconfig
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

Creates, updates, deletes or gets a <code>hosted_configuration_version</code> resource or lists <code>hosted_configuration_versions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>hosted_configuration_versions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::AppConfig::HostedConfigurationVersion</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.appconfig.hosted_configuration_versions" /></td></tr>
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
    "name": "configuration_profile_id",
    "type": "string",
    "description": "The configuration profile ID."
  },
  {
    "name": "description",
    "type": "string",
    "description": "A description of the hosted configuration version."
  },
  {
    "name": "content_type",
    "type": "string",
    "description": "A standard MIME type describing the format of the configuration content."
  },
  {
    "name": "latest_version_number",
    "type": "integer",
    "description": "An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version."
  },
  {
    "name": "content",
    "type": "string",
    "description": "The content of the configuration or the configuration data."
  },
  {
    "name": "version_label",
    "type": "string",
    "description": "A user-defined label for an AWS AppConfig hosted configuration version."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "version_number",
    "type": "string",
    "description": "Current version number of hosted configuration version."
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
    "name": "configuration_profile_id",
    "type": "string",
    "description": "The configuration profile ID."
  },
  {
    "name": "application_id",
    "type": "string",
    "description": "The application ID."
  },
  {
    "name": "version_number",
    "type": "string",
    "description": "Current version number of hosted configuration version."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html"><code>AWS::AppConfig::HostedConfigurationVersion</code></a>.

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
    <td><code>hosted_configuration_versions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ApplicationId, ConfigurationProfileId, Content, ContentType, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>hosted_configuration_versions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>hosted_configuration_versions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>hosted_configuration_versions</code></td>
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

Gets all properties from an individual <code>hosted_configuration_version</code>.
```sql
SELECT
region,
configuration_profile_id,
description,
content_type,
latest_version_number,
content,
version_label,
application_id,
version_number
FROM awscc.appconfig.hosted_configuration_versions
WHERE region = 'us-east-1' AND Identifier = '<ApplicationId>|<ConfigurationProfileId>|<VersionNumber>';
```
</TabItem>
<TabItem value="list">

Lists all <code>hosted_configuration_versions</code> in a region.
```sql
SELECT
region,
application_id,
configuration_profile_id,
version_number
FROM awscc.appconfig.hosted_configuration_versions_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>hosted_configuration_version</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.appconfig.hosted_configuration_versions (
 ConfigurationProfileId,
 ContentType,
 Content,
 ApplicationId,
 region
)
SELECT 
'{{ ConfigurationProfileId }}',
 '{{ ContentType }}',
 '{{ Content }}',
 '{{ ApplicationId }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.appconfig.hosted_configuration_versions (
 ConfigurationProfileId,
 Description,
 ContentType,
 LatestVersionNumber,
 Content,
 VersionLabel,
 ApplicationId,
 region
)
SELECT 
 '{{ ConfigurationProfileId }}',
 '{{ Description }}',
 '{{ ContentType }}',
 '{{ LatestVersionNumber }}',
 '{{ Content }}',
 '{{ VersionLabel }}',
 '{{ ApplicationId }}',
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
  - name: hosted_configuration_version
    props:
      - name: ConfigurationProfileId
        value: '{{ ConfigurationProfileId }}'
      - name: Description
        value: '{{ Description }}'
      - name: ContentType
        value: '{{ ContentType }}'
      - name: LatestVersionNumber
        value: '{{ LatestVersionNumber }}'
      - name: Content
        value: '{{ Content }}'
      - name: VersionLabel
        value: '{{ VersionLabel }}'
      - name: ApplicationId
        value: '{{ ApplicationId }}'

```
</TabItem>
</Tabs>


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.appconfig.hosted_configuration_versions
WHERE Identifier = '<ApplicationId|ConfigurationProfileId|VersionNumber>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>hosted_configuration_versions</code> resource, the following permissions are required:

### Read
```json
appconfig:GetHostedConfigurationVersion
```

### Create
```json
appconfig:CreateHostedConfigurationVersion
```

### List
```json
appconfig:ListHostedConfigurationVersions
```

### Delete
```json
appconfig:DeleteHostedConfigurationVersion
```
