---
title: secrets_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets_list_only
  - secretsmanager
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

Lists <code>secrets</code> in a region or regions, for all properties use <a href="/services/secretsmanager/secrets/"><code>secrets</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>secrets_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new secret. A &#42;secret&#42; can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.<br />For RDS master user credentials, see &#91;AWS::RDS::DBCluster MasterUserSecret&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).<br />For RS admin user credentials, see &#91;AWS::Redshift::Cluster&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html).<br />To retrieve a secret in a CFNshort template, use a &#42;dynamic reference&#42;. For more information, see &#91;Retrieve a secret in an resource&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example&#95;reference-secret.html).<br />For information about creating a secret in the console, see &#91;Create a secret&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage&#95;create-basic-secret.html). For information about creating a secret using the CLI or SDK, see &#91;CreateSecret&#93;(https://docs.aws.amazon.com/secretsmanager/latest/apireference/API&#95;CreateSecret.html).<br />For information about retrieving a secret in code, see &#91;Retrieve secrets from Secrets Manager&#93;(https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.secretsmanager.secrets_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "id",
    "type": "string",
    "description": ""
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
Lists all <code>secrets</code> in a region.
```sql
SELECT
region,
id
FROM awscc.secretsmanager.secrets_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>secrets_list_only</code> resource, see <a href="/services/secretsmanager/secrets/#permissions"><code>secrets</code></a>

