---
title: roles_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - roles_list_only
  - iam
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

Lists <code>roles</code> in a region or regions, for all properties use <a href="/services/iam/roles/"><code>roles</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>roles_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Creates a new role for your AWS-account.<br />For more information about roles, see &#91;IAM roles&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;roles.html) in the &#42;IAM User Guide&#42;. For information about quotas for role names and the number of roles you can create, see &#91;IAM and quotas&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/reference&#95;iam-quotas.html) in the &#42;IAM User Guide&#42;.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.iam.roles_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "role_name",
    "type": "string",
    "description": "A name for the IAM role, up to 64 characters in length. For valid values, see the &#96;&#96;RoleName&#96;&#96; parameter for the &#91;CreateRole&#93;(https://docs.aws.amazon.com/IAM/latest/APIReference/API&#95;CreateRole.html) action in the &#42;User Guide&#42;.<br />This parameter allows (per its &#91;regex pattern&#93;(https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: &#95;+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both \"Role1\" and \"role1\".<br />If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.<br />If you specify a name, you must specify the &#96;&#96;CAPABILITY&#95;NAMED&#95;IAM&#96;&#96; value to acknowledge your template's capabilities. For more information, see &#91;Acknowledging Resources in Templates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).<br />Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using &#96;&#96;Fn::Join&#96;&#96; and &#96;&#96;AWS::Region&#96;&#96; to create a Region-specific name, as in the following example: &#96;&#96;&#123;\"Fn::Join\": &#91;\"\", &#91;&#123;\"Ref\": \"AWS::Region\"&#125;, &#123;\"Ref\": \"MyResourceName\"&#125;&#93;&#93;&#125;&#96;&#96;."
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
Lists all <code>roles</code> in a region.
```sql
SELECT
region,
role_name
FROM awscc.iam.roles_list_only
;
```


## Permissions

For permissions required to operate on the <code>roles_list_only</code> resource, see <a href="/services/iam/roles/#permissions"><code>roles</code></a>

