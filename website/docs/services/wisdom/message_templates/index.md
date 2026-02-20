---
title: message_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - message_templates
  - wisdom
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

Creates, updates, deletes or gets a <code>message_template</code> resource or lists <code>message_templates</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>message_templates</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Wisdom::MessageTemplate Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.wisdom.message_templates" /></td></tr>
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
    "name": "knowledge_base_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs."
  },
  {
    "name": "message_template_id",
    "type": "string",
    "description": "The unique identifier of the message template."
  },
  {
    "name": "message_template_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the message template."
  },
  {
    "name": "name",
    "type": "string",
    "description": "The name of the message template."
  },
  {
    "name": "channel_subtype",
    "type": "string",
    "description": "The channel subtype this message template applies to."
  },
  {
    "name": "content",
    "type": "object",
    "description": "The content of the message template.",
    "children": [
      {
        "name": "email_message_template_content",
        "type": "object",
        "description": "The content of message template that applies to email channel subtype.",
        "children": [
          {
            "name": "subject",
            "type": "string",
            "description": "The subject line, or title, to use in email messages."
          },
          {
            "name": "body",
            "type": "object",
            "description": "The body to use in email messages.",
            "children": [
              {
                "name": "plain_text",
                "type": "object",
                "description": "The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices."
              }
            ]
          },
          {
            "name": "headers",
            "type": "array",
            "description": "The email headers to include in email messages.",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name of the email header."
              },
              {
                "name": "value",
                "type": "string",
                "description": "The value of the email header."
              }
            ]
          }
        ]
      },
      {
        "name": "sms_message_template_content",
        "type": "object",
        "description": "The content of message template that applies to SMS channel subtype.",
        "children": [
          {
            "name": "body",
            "type": "object",
            "description": "The body to use in SMS messages.",
            "children": [
              {
                "name": "plain_text",
                "type": "object",
                "description": "The container of message template body."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "description",
    "type": "string",
    "description": "The description of the message template."
  },
  {
    "name": "language",
    "type": "string",
    "description": "The language code value for the language in which the message template is written. The supported language codes include de&#95;DE, en&#95;US, es&#95;ES, fr&#95;FR, id&#95;ID, it&#95;IT, ja&#95;JP, ko&#95;KR, pt&#95;BR, zh&#95;CN, zh&#95;TW"
  },
  {
    "name": "grouping_configuration",
    "type": "object",
    "description": "The configuration information of the user groups that the quick response is accessible to.",
    "children": [
      {
        "name": "criteria",
        "type": "string",
        "description": "The criteria used for grouping Amazon Q in Connect users."
      },
      {
        "name": "values",
        "type": "array",
        "description": "The list of values that define different groups of Amazon Q in Connect users."
      }
    ]
  },
  {
    "name": "default_attributes",
    "type": "object",
    "description": "An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.",
    "children": [
      {
        "name": "system_attributes",
        "type": "object",
        "description": "The system attributes that are used with the message template.",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": "The name of the task."
          },
          {
            "name": "customer_endpoint",
            "type": "object",
            "description": "The CustomerEndpoint attribute.",
            "children": [
              {
                "name": "address",
                "type": "string",
                "description": "The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint."
              }
            ]
          }
        ]
      },
      {
        "name": "agent_attributes",
        "type": "object",
        "description": "The agent attributes that are used with the message template.",
        "children": [
          {
            "name": "first_name",
            "type": "string",
            "description": "The agent’s first name as entered in their Amazon Connect user account."
          },
          {
            "name": "last_name",
            "type": "string",
            "description": "The agent’s last name as entered in their Amazon Connect user account."
          }
        ]
      },
      {
        "name": "customer_profile_attributes",
        "type": "object",
        "description": "The customer profile attributes that are used with the message template.",
        "children": [
          {
            "name": "profile_id",
            "type": "string",
            "description": "The unique identifier of a customer profile."
          },
          {
            "name": "profile_arn",
            "type": "string",
            "description": "The ARN of a customer profile."
          },
          {
            "name": "first_name",
            "type": "string",
            "description": "The customer's first name."
          },
          {
            "name": "middle_name",
            "type": "string",
            "description": "The customer's middle name."
          },
          {
            "name": "last_name",
            "type": "string",
            "description": "The customer's last name."
          },
          {
            "name": "account_number",
            "type": "string",
            "description": "A unique account number that you have given to the customer."
          },
          {
            "name": "email_address",
            "type": "string",
            "description": "The customer's email address, which has not been specified as a personal or business address."
          },
          {
            "name": "phone_number",
            "type": "string",
            "description": "The customer's phone number, which has not been specified as a mobile, home, or business number."
          },
          {
            "name": "additional_information",
            "type": "string",
            "description": "Any additional information relevant to the customer's profile."
          },
          {
            "name": "party_type",
            "type": "string",
            "description": "The customer's party type."
          },
          {
            "name": "business_name",
            "type": "string",
            "description": "The name of the customer's business."
          },
          {
            "name": "birth_date",
            "type": "string",
            "description": "The customer's birth date."
          },
          {
            "name": "gender",
            "type": "string",
            "description": "The customer's gender."
          },
          {
            "name": "mobile_phone_number",
            "type": "string",
            "description": "The customer's mobile phone number."
          },
          {
            "name": "home_phone_number",
            "type": "string",
            "description": "The customer's home phone number."
          },
          {
            "name": "business_phone_number",
            "type": "string",
            "description": "The customer's business phone number."
          },
          {
            "name": "business_email_address",
            "type": "string",
            "description": "The customer's business email address."
          },
          {
            "name": "address1",
            "type": "string",
            "description": "The first line of a customer address."
          },
          {
            "name": "address2",
            "type": "string",
            "description": "The second line of a customer address."
          },
          {
            "name": "address3",
            "type": "string",
            "description": "The third line of a customer address."
          },
          {
            "name": "address4",
            "type": "string",
            "description": "The fourth line of a customer address."
          },
          {
            "name": "city",
            "type": "string",
            "description": "The city in which a customer lives."
          },
          {
            "name": "county",
            "type": "string",
            "description": "The county in which a customer lives."
          },
          {
            "name": "country",
            "type": "string",
            "description": "The country in which a customer lives."
          },
          {
            "name": "postal_code",
            "type": "string",
            "description": "The postal code of a customer address."
          },
          {
            "name": "province",
            "type": "string",
            "description": "The province in which a customer lives."
          },
          {
            "name": "state",
            "type": "string",
            "description": "The state in which a customer lives."
          },
          {
            "name": "shipping_address1",
            "type": "string",
            "description": "The first line of a customer’s shipping address."
          },
          {
            "name": "shipping_address2",
            "type": "string",
            "description": "The second line of a customer’s shipping address."
          },
          {
            "name": "shipping_address3",
            "type": "string",
            "description": "The third line of a customer’s shipping address."
          },
          {
            "name": "shipping_address4",
            "type": "string",
            "description": "The fourth line of a customer’s shipping address"
          },
          {
            "name": "shipping_city",
            "type": "string",
            "description": "The city of a customer’s shipping address."
          },
          {
            "name": "shipping_county",
            "type": "string",
            "description": "The county of a customer’s shipping address."
          },
          {
            "name": "shipping_country",
            "type": "string",
            "description": "The country of a customer’s shipping address."
          },
          {
            "name": "shipping_postal_code",
            "type": "string",
            "description": "The postal code of a customer’s shipping address."
          },
          {
            "name": "shipping_province",
            "type": "string",
            "description": "The province of a customer’s shipping address."
          },
          {
            "name": "shipping_state",
            "type": "string",
            "description": "The state of a customer’s shipping address."
          },
          {
            "name": "mailing_address1",
            "type": "string",
            "description": "The first line of a customer’s mailing address."
          },
          {
            "name": "mailing_address2",
            "type": "string",
            "description": "The second line of a customer’s mailing address."
          },
          {
            "name": "mailing_address3",
            "type": "string",
            "description": "The third line of a customer’s mailing address."
          },
          {
            "name": "mailing_address4",
            "type": "string",
            "description": "The fourth line of a customer’s mailing address."
          },
          {
            "name": "mailing_city",
            "type": "string",
            "description": "The city of a customer’s mailing address."
          },
          {
            "name": "mailing_county",
            "type": "string",
            "description": "The county of a customer’s mailing address."
          },
          {
            "name": "mailing_country",
            "type": "string",
            "description": "The country of a customer’s mailing address."
          },
          {
            "name": "mailing_postal_code",
            "type": "string",
            "description": "The postal code of a customer’s mailing address"
          },
          {
            "name": "mailing_province",
            "type": "string",
            "description": "The province of a customer’s mailing address."
          },
          {
            "name": "mailing_state",
            "type": "string",
            "description": "The state of a customer’s mailing address."
          },
          {
            "name": "billing_address1",
            "type": "string",
            "description": "The first line of a customer’s billing address."
          },
          {
            "name": "billing_address2",
            "type": "string",
            "description": "The second line of a customer’s billing address."
          },
          {
            "name": "billing_address3",
            "type": "string",
            "description": "The third line of a customer’s billing address."
          },
          {
            "name": "billing_address4",
            "type": "string",
            "description": "The fourth line of a customer’s billing address."
          },
          {
            "name": "billing_city",
            "type": "string",
            "description": "The city of a customer’s billing address."
          },
          {
            "name": "billing_county",
            "type": "string",
            "description": "The county of a customer’s billing address."
          },
          {
            "name": "billing_country",
            "type": "string",
            "description": "The country of a customer’s billing address."
          },
          {
            "name": "billing_postal_code",
            "type": "string",
            "description": "The postal code of a customer’s billing address."
          },
          {
            "name": "billing_province",
            "type": "string",
            "description": "The province of a customer’s billing address."
          },
          {
            "name": "billing_state",
            "type": "string",
            "description": "The state of a customer’s billing address."
          },
          {
            "name": "custom",
            "type": "object",
            "description": "The custom attributes that are used with the message template."
          }
        ]
      },
      {
        "name": "custom_attributes",
        "type": "object",
        "description": "The custom attributes that are used with the message template."
      }
    ]
  },
  {
    "name": "message_template_content_sha256",
    "type": "string",
    "description": "The content SHA256 of the message template."
  },
  {
    "name": "message_template_attachments",
    "type": "array",
    "description": "List of message template attachments",
    "children": [
      {
        "name": "attachment_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "attachment_name",
        "type": "string",
        "description": "The name of the attachment file being uploaded. The name should include the file extension."
      },
      {
        "name": "s3_presigned_url",
        "type": "string",
        "description": "The S3 Presigned URL for the attachment file. When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html)."
      }
    ]
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags used to organize, track, or control access for this resource. For example, &#123; \"tags\": &#123;\"key1\":\"value1\", \"key2\":\"value2\"&#125; &#125;.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -"
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
    "name": "message_template_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the message template."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html"><code>AWS::Wisdom::MessageTemplate</code></a>.

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
    <td><code>message_templates</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="KnowledgeBaseArn, ChannelSubtype, Name, Content, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>message_templates</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>message_templates</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>message_templates_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>message_templates</code></td>
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

Gets all properties from an individual <code>message_template</code>.
```sql
SELECT
region,
knowledge_base_arn,
message_template_id,
message_template_arn,
name,
channel_subtype,
content,
description,
language,
grouping_configuration,
default_attributes,
message_template_content_sha256,
message_template_attachments,
tags
FROM awscc.wisdom.message_templates
WHERE region = 'us-east-1' AND data__Identifier = '<MessageTemplateArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>message_templates</code> in a region.
```sql
SELECT
region,
message_template_arn
FROM awscc.wisdom.message_templates_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>message_template</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.wisdom.message_templates (
 KnowledgeBaseArn,
 Name,
 ChannelSubtype,
 Content,
 region
)
SELECT 
'{{ KnowledgeBaseArn }}',
 '{{ Name }}',
 '{{ ChannelSubtype }}',
 '{{ Content }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.wisdom.message_templates (
 KnowledgeBaseArn,
 Name,
 ChannelSubtype,
 Content,
 Description,
 Language,
 GroupingConfiguration,
 DefaultAttributes,
 MessageTemplateAttachments,
 Tags,
 region
)
SELECT 
 '{{ KnowledgeBaseArn }}',
 '{{ Name }}',
 '{{ ChannelSubtype }}',
 '{{ Content }}',
 '{{ Description }}',
 '{{ Language }}',
 '{{ GroupingConfiguration }}',
 '{{ DefaultAttributes }}',
 '{{ MessageTemplateAttachments }}',
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
  - name: message_template
    props:
      - name: KnowledgeBaseArn
        value: '{{ KnowledgeBaseArn }}'
      - name: Name
        value: '{{ Name }}'
      - name: ChannelSubtype
        value: '{{ ChannelSubtype }}'
      - name: Content
        value:
          EmailMessageTemplateContent:
            Subject: '{{ Subject }}'
            Body:
              PlainText:
                Content: '{{ Content }}'
              Html: null
            Headers:
              - Name: '{{ Name }}'
                Value: '{{ Value }}'
          SmsMessageTemplateContent:
            Body:
              PlainText: null
      - name: Description
        value: '{{ Description }}'
      - name: Language
        value: '{{ Language }}'
      - name: GroupingConfiguration
        value:
          Criteria: '{{ Criteria }}'
          Values:
            - '{{ Values[0] }}'
      - name: DefaultAttributes
        value:
          SystemAttributes:
            Name: '{{ Name }}'
            CustomerEndpoint:
              Address: '{{ Address }}'
            SystemEndpoint: null
          AgentAttributes:
            FirstName: '{{ FirstName }}'
            LastName: '{{ LastName }}'
          CustomerProfileAttributes:
            ProfileId: '{{ ProfileId }}'
            ProfileARN: '{{ ProfileARN }}'
            FirstName: '{{ FirstName }}'
            MiddleName: '{{ MiddleName }}'
            LastName: '{{ LastName }}'
            AccountNumber: '{{ AccountNumber }}'
            EmailAddress: '{{ EmailAddress }}'
            PhoneNumber: '{{ PhoneNumber }}'
            AdditionalInformation: '{{ AdditionalInformation }}'
            PartyType: '{{ PartyType }}'
            BusinessName: '{{ BusinessName }}'
            BirthDate: '{{ BirthDate }}'
            Gender: '{{ Gender }}'
            MobilePhoneNumber: '{{ MobilePhoneNumber }}'
            HomePhoneNumber: '{{ HomePhoneNumber }}'
            BusinessPhoneNumber: '{{ BusinessPhoneNumber }}'
            BusinessEmailAddress: '{{ BusinessEmailAddress }}'
            Address1: '{{ Address1 }}'
            Address2: '{{ Address2 }}'
            Address3: '{{ Address3 }}'
            Address4: '{{ Address4 }}'
            City: '{{ City }}'
            County: '{{ County }}'
            Country: '{{ Country }}'
            PostalCode: '{{ PostalCode }}'
            Province: '{{ Province }}'
            State: '{{ State }}'
            ShippingAddress1: '{{ ShippingAddress1 }}'
            ShippingAddress2: '{{ ShippingAddress2 }}'
            ShippingAddress3: '{{ ShippingAddress3 }}'
            ShippingAddress4: '{{ ShippingAddress4 }}'
            ShippingCity: '{{ ShippingCity }}'
            ShippingCounty: '{{ ShippingCounty }}'
            ShippingCountry: '{{ ShippingCountry }}'
            ShippingPostalCode: '{{ ShippingPostalCode }}'
            ShippingProvince: '{{ ShippingProvince }}'
            ShippingState: '{{ ShippingState }}'
            MailingAddress1: '{{ MailingAddress1 }}'
            MailingAddress2: '{{ MailingAddress2 }}'
            MailingAddress3: '{{ MailingAddress3 }}'
            MailingAddress4: '{{ MailingAddress4 }}'
            MailingCity: '{{ MailingCity }}'
            MailingCounty: '{{ MailingCounty }}'
            MailingCountry: '{{ MailingCountry }}'
            MailingPostalCode: '{{ MailingPostalCode }}'
            MailingProvince: '{{ MailingProvince }}'
            MailingState: '{{ MailingState }}'
            BillingAddress1: '{{ BillingAddress1 }}'
            BillingAddress2: '{{ BillingAddress2 }}'
            BillingAddress3: '{{ BillingAddress3 }}'
            BillingAddress4: '{{ BillingAddress4 }}'
            BillingCity: '{{ BillingCity }}'
            BillingCounty: '{{ BillingCounty }}'
            BillingCountry: '{{ BillingCountry }}'
            BillingPostalCode: '{{ BillingPostalCode }}'
            BillingProvince: '{{ BillingProvince }}'
            BillingState: '{{ BillingState }}'
            Custom: {}
          CustomAttributes: null
      - name: MessageTemplateAttachments
        value:
          - AttachmentId: '{{ AttachmentId }}'
            AttachmentName: '{{ AttachmentName }}'
            S3PresignedUrl: '{{ S3PresignedUrl }}'
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
UPDATE awscc.wisdom.message_templates
SET data__PatchDocument = string('{{ {
    "Name": name,
    "Content": content,
    "Description": description,
    "Language": language,
    "GroupingConfiguration": grouping_configuration,
    "DefaultAttributes": default_attributes,
    "Tags": tags
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<MessageTemplateArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.wisdom.message_templates
WHERE data__Identifier = '<MessageTemplateArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>message_templates</code> resource, the following permissions are required:

### Create
```json
wisdom:CreateMessageTemplate,
wisdom:GetMessageTemplate,
wisdom:TagResource,
connect:SearchRoutingProfiles,
connect:DescribeRoutingProfile,
wisdom:CreateMessageTemplateAttachment,
wisdom:DeleteMessageTemplateAttachment
```

### Update
```json
wisdom:UpdateMessageTemplate,
wisdom:UpdateMessageTemplateMetadata,
wisdom:GetMessageTemplate,
wisdom:TagResource,
wisdom:UntagResource,
connect:SearchRoutingProfiles,
connect:DescribeRoutingProfile,
wisdom:CreateMessageTemplateAttachment,
wisdom:DeleteMessageTemplateAttachment
```

### Delete
```json
wisdom:DeleteMessageTemplate,
wisdom:UntagResource,
wisdom:DeleteMessageTemplateAttachment
```

### List
```json
wisdom:ListMessageTemplates
```

### Read
```json
wisdom:GetMessageTemplate
```
