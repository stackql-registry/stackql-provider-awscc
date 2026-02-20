---
title: email_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - email_identities
  - ses
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

Creates, updates, deletes or gets an <code>email_identity</code> resource or lists <code>email_identities</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>email_identities</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::SES::EmailIdentity</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.ses.email_identities" /></td></tr>
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
    "name": "email_identity",
    "type": "string",
    "description": "The email address or domain to verify."
  },
  {
    "name": "configuration_set_attributes",
    "type": "object",
    "description": "Used to associate a configuration set with an email identity.",
    "children": [
      {
        "name": "configuration_set_name",
        "type": "string",
        "description": "The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence."
      }
    ]
  },
  {
    "name": "dkim_signing_attributes",
    "type": "object",
    "description": "If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.",
    "children": [
      {
        "name": "domain_signing_selector",
        "type": "string",
        "description": "&#91;Bring Your Own DKIM&#93; A string that's used to identify a public key in the DNS configuration for a domain."
      },
      {
        "name": "domain_signing_private_key",
        "type": "string",
        "description": "&#91;Bring Your Own DKIM&#93; A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding."
      },
      {
        "name": "next_signing_key_length",
        "type": "string",
        "description": "&#91;Easy DKIM&#93; The key length of the future DKIM key pair to be generated. This can be changed at most once per day."
      }
    ]
  },
  {
    "name": "dkim_attributes",
    "type": "object",
    "description": "Used to enable or disable DKIM authentication for an email identity.",
    "children": [
      {
        "name": "signing_enabled",
        "type": "boolean",
        "description": "Sets the DKIM signing configuration for the identity. When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing."
      }
    ]
  },
  {
    "name": "mail_from_attributes",
    "type": "object",
    "description": "Used to enable or disable the custom Mail-From domain configuration for an email identity.",
    "children": [
      {
        "name": "mail_from_domain",
        "type": "string",
        "description": "The custom MAIL FROM domain that you want the verified identity to use"
      },
      {
        "name": "behavior_on_mx_failure",
        "type": "string",
        "description": "The action to take if the required MX record isn't found when you send an email. When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email."
      }
    ]
  },
  {
    "name": "feedback_attributes",
    "type": "object",
    "description": "Used to enable or disable feedback forwarding for an identity.",
    "children": [
      {
        "name": "email_forwarding_enabled",
        "type": "boolean",
        "description": "If the value is true, you receive email notifications when bounce or complaint events occur"
      }
    ]
  },
  {
    "name": "dkim_dns_token_name1",
    "type": "string",
    "description": ""
  },
  {
    "name": "dkim_dns_token_name2",
    "type": "string",
    "description": ""
  },
  {
    "name": "dkim_dns_token_name3",
    "type": "string",
    "description": ""
  },
  {
    "name": "dkim_dns_token_value1",
    "type": "string",
    "description": ""
  },
  {
    "name": "dkim_dns_token_value2",
    "type": "string",
    "description": ""
  },
  {
    "name": "dkim_dns_token_value3",
    "type": "string",
    "description": ""
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags (keys and values) associated with the email identity.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": ""
      },
      {
        "name": "value",
        "type": "string",
        "description": ""
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
    "name": "email_identity",
    "type": "string",
    "description": "The email address or domain to verify."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html"><code>AWS::SES::EmailIdentity</code></a>.

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
    <td><code>email_identities</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="EmailIdentity, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>email_identities</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>email_identities</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>email_identities_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>email_identities</code></td>
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

Gets all properties from an individual <code>email_identity</code>.
```sql
SELECT
region,
email_identity,
configuration_set_attributes,
dkim_signing_attributes,
dkim_attributes,
mail_from_attributes,
feedback_attributes,
dkim_dns_token_name1,
dkim_dns_token_name2,
dkim_dns_token_name3,
dkim_dns_token_value1,
dkim_dns_token_value2,
dkim_dns_token_value3,
tags
FROM awscc.ses.email_identities
WHERE region = 'us-east-1' AND data__Identifier = '<EmailIdentity>';
```
</TabItem>
<TabItem value="list">

Lists all <code>email_identities</code> in a region.
```sql
SELECT
region,
email_identity
FROM awscc.ses.email_identities_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>email_identity</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.ses.email_identities (
 EmailIdentity,
 region
)
SELECT 
'{{ EmailIdentity }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.ses.email_identities (
 EmailIdentity,
 ConfigurationSetAttributes,
 DkimSigningAttributes,
 DkimAttributes,
 MailFromAttributes,
 FeedbackAttributes,
 Tags,
 region
)
SELECT 
 '{{ EmailIdentity }}',
 '{{ ConfigurationSetAttributes }}',
 '{{ DkimSigningAttributes }}',
 '{{ DkimAttributes }}',
 '{{ MailFromAttributes }}',
 '{{ FeedbackAttributes }}',
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
  - name: email_identity
    props:
      - name: EmailIdentity
        value: '{{ EmailIdentity }}'
      - name: ConfigurationSetAttributes
        value:
          ConfigurationSetName: '{{ ConfigurationSetName }}'
      - name: DkimSigningAttributes
        value:
          DomainSigningSelector: '{{ DomainSigningSelector }}'
          DomainSigningPrivateKey: '{{ DomainSigningPrivateKey }}'
          NextSigningKeyLength: '{{ NextSigningKeyLength }}'
      - name: DkimAttributes
        value:
          SigningEnabled: '{{ SigningEnabled }}'
      - name: MailFromAttributes
        value:
          MailFromDomain: '{{ MailFromDomain }}'
          BehaviorOnMxFailure: '{{ BehaviorOnMxFailure }}'
      - name: FeedbackAttributes
        value:
          EmailForwardingEnabled: '{{ EmailForwardingEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.ses.email_identities
SET data__PatchDocument = string('{{ {
    "ConfigurationSetAttributes": configuration_set_attributes,
    "DkimSigningAttributes": dkim_signing_attributes,
    "DkimAttributes": dkim_attributes,
    "MailFromAttributes": mail_from_attributes,
    "FeedbackAttributes": feedback_attributes,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<EmailIdentity>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.ses.email_identities
WHERE data__Identifier = '<EmailIdentity>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>email_identities</code> resource, the following permissions are required:

### Create
```json
ses:CreateEmailIdentity,
ses:PutEmailIdentityMailFromAttributes,
ses:PutEmailIdentityFeedbackAttributes,
ses:PutEmailIdentityDkimAttributes,
ses:GetEmailIdentity,
ses:TagResource,
ses:UntagResource
```

### Read
```json
ses:GetEmailIdentity
```

### Update
```json
ses:PutEmailIdentityMailFromAttributes,
ses:PutEmailIdentityFeedbackAttributes,
ses:PutEmailIdentityConfigurationSetAttributes,
ses:PutEmailIdentityDkimSigningAttributes,
ses:PutEmailIdentityDkimAttributes,
ses:GetEmailIdentity,
ses:TagResource,
ses:UntagResource
```

### Delete
```json
ses:DeleteEmailIdentity
```

### List
```json
ses:ListEmailIdentities
```
