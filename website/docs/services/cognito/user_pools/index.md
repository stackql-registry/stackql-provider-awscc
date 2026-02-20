---
title: user_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pools
  - cognito
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

Creates, updates, deletes or gets an <code>user_pool</code> resource or lists <code>user_pools</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>user_pools</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Definition of AWS::Cognito::UserPool Resource Type</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.cognito.user_pools" /></td></tr>
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
    "name": "user_pool_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "policies",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "password_policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "minimum_length",
            "type": "integer",
            "description": ""
          },
          {
            "name": "require_lowercase",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "require_numbers",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "require_symbols",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "require_uppercase",
            "type": "boolean",
            "description": ""
          },
          {
            "name": "temporary_password_validity_days",
            "type": "integer",
            "description": ""
          },
          {
            "name": "password_history_size",
            "type": "integer",
            "description": ""
          }
        ]
      },
      {
        "name": "sign_in_policy",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "allowed_first_auth_factors",
            "type": "array",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "account_recovery_setting",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "recovery_mechanisms",
        "type": "array",
        "description": "",
        "children": [
          {
            "name": "name",
            "type": "string",
            "description": ""
          },
          {
            "name": "priority",
            "type": "integer",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "admin_create_user_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "allow_admin_create_user_only",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "invite_message_template",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "email_message",
            "type": "string",
            "description": ""
          },
          {
            "name": "email_subject",
            "type": "string",
            "description": ""
          },
          {
            "name": "s_ms_message",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "unused_account_validity_days",
        "type": "integer",
        "description": ""
      }
    ]
  },
  {
    "name": "alias_attributes",
    "type": "array",
    "description": ""
  },
  {
    "name": "username_attributes",
    "type": "array",
    "description": ""
  },
  {
    "name": "auto_verified_attributes",
    "type": "array",
    "description": ""
  },
  {
    "name": "device_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "challenge_required_on_new_device",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "device_only_remembered_on_user_prompt",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "email_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "reply_to_email_address",
        "type": "string",
        "description": ""
      },
      {
        "name": "source_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "from",
        "type": "string",
        "description": ""
      },
      {
        "name": "configuration_set",
        "type": "string",
        "description": ""
      },
      {
        "name": "email_sending_account",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "email_verification_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "email_verification_subject",
    "type": "string",
    "description": ""
  },
  {
    "name": "deletion_protection",
    "type": "string",
    "description": ""
  },
  {
    "name": "lambda_config",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "create_auth_challenge",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_message",
        "type": "string",
        "description": ""
      },
      {
        "name": "define_auth_challenge",
        "type": "string",
        "description": ""
      },
      {
        "name": "post_authentication",
        "type": "string",
        "description": ""
      },
      {
        "name": "post_confirmation",
        "type": "string",
        "description": ""
      },
      {
        "name": "pre_authentication",
        "type": "string",
        "description": ""
      },
      {
        "name": "pre_sign_up",
        "type": "string",
        "description": ""
      },
      {
        "name": "verify_auth_challenge_response",
        "type": "string",
        "description": ""
      },
      {
        "name": "user_migration",
        "type": "string",
        "description": ""
      },
      {
        "name": "pre_token_generation",
        "type": "string",
        "description": ""
      },
      {
        "name": "custom_email_sender",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "lambda_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "lambda_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "custom_sm_ssender",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "lambda_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "lambda_arn",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "kms_key_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "pre_token_generation_config",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "lambda_version",
            "type": "string",
            "description": ""
          },
          {
            "name": "lambda_arn",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "mfa_configuration",
    "type": "string",
    "description": ""
  },
  {
    "name": "enabled_mfas",
    "type": "array",
    "description": ""
  },
  {
    "name": "sms_authentication_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "email_authentication_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "email_authentication_subject",
    "type": "string",
    "description": ""
  },
  {
    "name": "sms_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "external_id",
        "type": "string",
        "description": ""
      },
      {
        "name": "sns_caller_arn",
        "type": "string",
        "description": ""
      },
      {
        "name": "sns_region",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "sms_verification_message",
    "type": "string",
    "description": ""
  },
  {
    "name": "web_authn_relying_party_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "web_authn_user_verification",
    "type": "string",
    "description": ""
  },
  {
    "name": "schema",
    "type": "array",
    "description": "",
    "children": [
      {
        "name": "attribute_data_type",
        "type": "string",
        "description": ""
      },
      {
        "name": "developer_only_attribute",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "mutable",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "name",
        "type": "string",
        "description": ""
      },
      {
        "name": "number_attribute_constraints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_value",
            "type": "string",
            "description": ""
          },
          {
            "name": "min_value",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "string_attribute_constraints",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "max_length",
            "type": "string",
            "description": ""
          },
          {
            "name": "min_length",
            "type": "string",
            "description": ""
          }
        ]
      },
      {
        "name": "required",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "username_configuration",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "case_sensitive",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  {
    "name": "user_attribute_update_settings",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "attributes_require_verification_before_update",
        "type": "array",
        "description": ""
      }
    ]
  },
  {
    "name": "user_pool_tags",
    "type": "object",
    "description": ""
  },
  {
    "name": "verification_message_template",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "default_email_option",
        "type": "string",
        "description": ""
      },
      {
        "name": "email_message",
        "type": "string",
        "description": ""
      },
      {
        "name": "email_message_by_link",
        "type": "string",
        "description": ""
      },
      {
        "name": "email_subject",
        "type": "string",
        "description": ""
      },
      {
        "name": "email_subject_by_link",
        "type": "string",
        "description": ""
      },
      {
        "name": "sms_message",
        "type": "string",
        "description": ""
      }
    ]
  },
  {
    "name": "user_pool_add_ons",
    "type": "object",
    "description": "",
    "children": [
      {
        "name": "advanced_security_mode",
        "type": "string",
        "description": ""
      },
      {
        "name": "advanced_security_additional_flows",
        "type": "object",
        "description": "",
        "children": [
          {
            "name": "custom_auth_mode",
            "type": "string",
            "description": ""
          }
        ]
      }
    ]
  },
  {
    "name": "provider_name",
    "type": "string",
    "description": ""
  },
  {
    "name": "provider_url",
    "type": "string",
    "description": ""
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_pool_id",
    "type": "string",
    "description": ""
  },
  {
    "name": "user_pool_tier",
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
<TabItem value="list">

<SchemaTable fields={[
  {
    "name": "user_pool_id",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html"><code>AWS::Cognito::UserPool</code></a>.

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
    <td><code>user_pools</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>user_pools</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>user_pools</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>user_pools_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>user_pools</code></td>
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

Gets all properties from an individual <code>user_pool</code>.
```sql
SELECT
region,
user_pool_name,
policies,
account_recovery_setting,
admin_create_user_config,
alias_attributes,
username_attributes,
auto_verified_attributes,
device_configuration,
email_configuration,
email_verification_message,
email_verification_subject,
deletion_protection,
lambda_config,
mfa_configuration,
enabled_mfas,
sms_authentication_message,
email_authentication_message,
email_authentication_subject,
sms_configuration,
sms_verification_message,
web_authn_relying_party_id,
web_authn_user_verification,
schema,
username_configuration,
user_attribute_update_settings,
user_pool_tags,
verification_message_template,
user_pool_add_ons,
provider_name,
provider_url,
arn,
user_pool_id,
user_pool_tier
FROM awscc.cognito.user_pools
WHERE region = 'us-east-1' AND data__Identifier = '<UserPoolId>';
```
</TabItem>
<TabItem value="list">

Lists all <code>user_pools</code> in a region.
```sql
SELECT
region,
user_pool_id
FROM awscc.cognito.user_pools_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>user_pool</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.cognito.user_pools (
 UserPoolName,
 Policies,
 AccountRecoverySetting,
 AdminCreateUserConfig,
 AliasAttributes,
 UsernameAttributes,
 AutoVerifiedAttributes,
 DeviceConfiguration,
 EmailConfiguration,
 EmailVerificationMessage,
 EmailVerificationSubject,
 DeletionProtection,
 LambdaConfig,
 MfaConfiguration,
 EnabledMfas,
 SmsAuthenticationMessage,
 EmailAuthenticationMessage,
 EmailAuthenticationSubject,
 SmsConfiguration,
 SmsVerificationMessage,
 WebAuthnRelyingPartyID,
 WebAuthnUserVerification,
 Schema,
 UsernameConfiguration,
 UserAttributeUpdateSettings,
 UserPoolTags,
 VerificationMessageTemplate,
 UserPoolAddOns,
 UserPoolTier,
 region
)
SELECT 
'{{ UserPoolName }}',
 '{{ Policies }}',
 '{{ AccountRecoverySetting }}',
 '{{ AdminCreateUserConfig }}',
 '{{ AliasAttributes }}',
 '{{ UsernameAttributes }}',
 '{{ AutoVerifiedAttributes }}',
 '{{ DeviceConfiguration }}',
 '{{ EmailConfiguration }}',
 '{{ EmailVerificationMessage }}',
 '{{ EmailVerificationSubject }}',
 '{{ DeletionProtection }}',
 '{{ LambdaConfig }}',
 '{{ MfaConfiguration }}',
 '{{ EnabledMfas }}',
 '{{ SmsAuthenticationMessage }}',
 '{{ EmailAuthenticationMessage }}',
 '{{ EmailAuthenticationSubject }}',
 '{{ SmsConfiguration }}',
 '{{ SmsVerificationMessage }}',
 '{{ WebAuthnRelyingPartyID }}',
 '{{ WebAuthnUserVerification }}',
 '{{ Schema }}',
 '{{ UsernameConfiguration }}',
 '{{ UserAttributeUpdateSettings }}',
 '{{ UserPoolTags }}',
 '{{ VerificationMessageTemplate }}',
 '{{ UserPoolAddOns }}',
 '{{ UserPoolTier }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.cognito.user_pools (
 UserPoolName,
 Policies,
 AccountRecoverySetting,
 AdminCreateUserConfig,
 AliasAttributes,
 UsernameAttributes,
 AutoVerifiedAttributes,
 DeviceConfiguration,
 EmailConfiguration,
 EmailVerificationMessage,
 EmailVerificationSubject,
 DeletionProtection,
 LambdaConfig,
 MfaConfiguration,
 EnabledMfas,
 SmsAuthenticationMessage,
 EmailAuthenticationMessage,
 EmailAuthenticationSubject,
 SmsConfiguration,
 SmsVerificationMessage,
 WebAuthnRelyingPartyID,
 WebAuthnUserVerification,
 Schema,
 UsernameConfiguration,
 UserAttributeUpdateSettings,
 UserPoolTags,
 VerificationMessageTemplate,
 UserPoolAddOns,
 UserPoolTier,
 region
)
SELECT 
 '{{ UserPoolName }}',
 '{{ Policies }}',
 '{{ AccountRecoverySetting }}',
 '{{ AdminCreateUserConfig }}',
 '{{ AliasAttributes }}',
 '{{ UsernameAttributes }}',
 '{{ AutoVerifiedAttributes }}',
 '{{ DeviceConfiguration }}',
 '{{ EmailConfiguration }}',
 '{{ EmailVerificationMessage }}',
 '{{ EmailVerificationSubject }}',
 '{{ DeletionProtection }}',
 '{{ LambdaConfig }}',
 '{{ MfaConfiguration }}',
 '{{ EnabledMfas }}',
 '{{ SmsAuthenticationMessage }}',
 '{{ EmailAuthenticationMessage }}',
 '{{ EmailAuthenticationSubject }}',
 '{{ SmsConfiguration }}',
 '{{ SmsVerificationMessage }}',
 '{{ WebAuthnRelyingPartyID }}',
 '{{ WebAuthnUserVerification }}',
 '{{ Schema }}',
 '{{ UsernameConfiguration }}',
 '{{ UserAttributeUpdateSettings }}',
 '{{ UserPoolTags }}',
 '{{ VerificationMessageTemplate }}',
 '{{ UserPoolAddOns }}',
 '{{ UserPoolTier }}',
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
  - name: user_pool
    props:
      - name: UserPoolName
        value: '{{ UserPoolName }}'
      - name: Policies
        value:
          PasswordPolicy:
            MinimumLength: '{{ MinimumLength }}'
            RequireLowercase: '{{ RequireLowercase }}'
            RequireNumbers: '{{ RequireNumbers }}'
            RequireSymbols: '{{ RequireSymbols }}'
            RequireUppercase: '{{ RequireUppercase }}'
            TemporaryPasswordValidityDays: '{{ TemporaryPasswordValidityDays }}'
            PasswordHistorySize: '{{ PasswordHistorySize }}'
          SignInPolicy:
            AllowedFirstAuthFactors:
              - '{{ AllowedFirstAuthFactors[0] }}'
      - name: AccountRecoverySetting
        value:
          RecoveryMechanisms:
            - Name: '{{ Name }}'
              Priority: '{{ Priority }}'
      - name: AdminCreateUserConfig
        value:
          AllowAdminCreateUserOnly: '{{ AllowAdminCreateUserOnly }}'
          InviteMessageTemplate:
            EmailMessage: '{{ EmailMessage }}'
            EmailSubject: '{{ EmailSubject }}'
            SMSMessage: '{{ SMSMessage }}'
          UnusedAccountValidityDays: '{{ UnusedAccountValidityDays }}'
      - name: AliasAttributes
        value:
          - '{{ AliasAttributes[0] }}'
      - name: UsernameAttributes
        value:
          - '{{ UsernameAttributes[0] }}'
      - name: AutoVerifiedAttributes
        value:
          - '{{ AutoVerifiedAttributes[0] }}'
      - name: DeviceConfiguration
        value:
          ChallengeRequiredOnNewDevice: '{{ ChallengeRequiredOnNewDevice }}'
          DeviceOnlyRememberedOnUserPrompt: '{{ DeviceOnlyRememberedOnUserPrompt }}'
      - name: EmailConfiguration
        value:
          ReplyToEmailAddress: '{{ ReplyToEmailAddress }}'
          SourceArn: '{{ SourceArn }}'
          From: '{{ From }}'
          ConfigurationSet: '{{ ConfigurationSet }}'
          EmailSendingAccount: '{{ EmailSendingAccount }}'
      - name: EmailVerificationMessage
        value: '{{ EmailVerificationMessage }}'
      - name: EmailVerificationSubject
        value: '{{ EmailVerificationSubject }}'
      - name: DeletionProtection
        value: '{{ DeletionProtection }}'
      - name: LambdaConfig
        value:
          CreateAuthChallenge: '{{ CreateAuthChallenge }}'
          CustomMessage: '{{ CustomMessage }}'
          DefineAuthChallenge: '{{ DefineAuthChallenge }}'
          PostAuthentication: '{{ PostAuthentication }}'
          PostConfirmation: '{{ PostConfirmation }}'
          PreAuthentication: '{{ PreAuthentication }}'
          PreSignUp: '{{ PreSignUp }}'
          VerifyAuthChallengeResponse: '{{ VerifyAuthChallengeResponse }}'
          UserMigration: '{{ UserMigration }}'
          PreTokenGeneration: '{{ PreTokenGeneration }}'
          CustomEmailSender:
            LambdaVersion: '{{ LambdaVersion }}'
            LambdaArn: '{{ LambdaArn }}'
          CustomSMSSender:
            LambdaVersion: '{{ LambdaVersion }}'
            LambdaArn: '{{ LambdaArn }}'
          KMSKeyID: '{{ KMSKeyID }}'
          PreTokenGenerationConfig:
            LambdaVersion: '{{ LambdaVersion }}'
            LambdaArn: '{{ LambdaArn }}'
      - name: MfaConfiguration
        value: '{{ MfaConfiguration }}'
      - name: EnabledMfas
        value:
          - '{{ EnabledMfas[0] }}'
      - name: SmsAuthenticationMessage
        value: '{{ SmsAuthenticationMessage }}'
      - name: EmailAuthenticationMessage
        value: '{{ EmailAuthenticationMessage }}'
      - name: EmailAuthenticationSubject
        value: '{{ EmailAuthenticationSubject }}'
      - name: SmsConfiguration
        value:
          ExternalId: '{{ ExternalId }}'
          SnsCallerArn: '{{ SnsCallerArn }}'
          SnsRegion: '{{ SnsRegion }}'
      - name: SmsVerificationMessage
        value: '{{ SmsVerificationMessage }}'
      - name: WebAuthnRelyingPartyID
        value: '{{ WebAuthnRelyingPartyID }}'
      - name: WebAuthnUserVerification
        value: '{{ WebAuthnUserVerification }}'
      - name: Schema
        value:
          - AttributeDataType: '{{ AttributeDataType }}'
            DeveloperOnlyAttribute: '{{ DeveloperOnlyAttribute }}'
            Mutable: '{{ Mutable }}'
            Name: '{{ Name }}'
            NumberAttributeConstraints:
              MaxValue: '{{ MaxValue }}'
              MinValue: '{{ MinValue }}'
            StringAttributeConstraints:
              MaxLength: '{{ MaxLength }}'
              MinLength: '{{ MinLength }}'
            Required: '{{ Required }}'
      - name: UsernameConfiguration
        value:
          CaseSensitive: '{{ CaseSensitive }}'
      - name: UserAttributeUpdateSettings
        value:
          AttributesRequireVerificationBeforeUpdate:
            - '{{ AttributesRequireVerificationBeforeUpdate[0] }}'
      - name: UserPoolTags
        value: {}
      - name: VerificationMessageTemplate
        value:
          DefaultEmailOption: '{{ DefaultEmailOption }}'
          EmailMessage: '{{ EmailMessage }}'
          EmailMessageByLink: '{{ EmailMessageByLink }}'
          EmailSubject: '{{ EmailSubject }}'
          EmailSubjectByLink: '{{ EmailSubjectByLink }}'
          SmsMessage: '{{ SmsMessage }}'
      - name: UserPoolAddOns
        value:
          AdvancedSecurityMode: '{{ AdvancedSecurityMode }}'
          AdvancedSecurityAdditionalFlows:
            CustomAuthMode: '{{ CustomAuthMode }}'
      - name: UserPoolTier
        value: '{{ UserPoolTier }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.cognito.user_pools
SET data__PatchDocument = string('{{ {
    "UserPoolName": user_pool_name,
    "Policies": policies,
    "AccountRecoverySetting": account_recovery_setting,
    "AdminCreateUserConfig": admin_create_user_config,
    "AliasAttributes": alias_attributes,
    "UsernameAttributes": username_attributes,
    "AutoVerifiedAttributes": auto_verified_attributes,
    "DeviceConfiguration": device_configuration,
    "EmailConfiguration": email_configuration,
    "EmailVerificationMessage": email_verification_message,
    "EmailVerificationSubject": email_verification_subject,
    "DeletionProtection": deletion_protection,
    "LambdaConfig": lambda_config,
    "MfaConfiguration": mfa_configuration,
    "EnabledMfas": enabled_mfas,
    "SmsAuthenticationMessage": sms_authentication_message,
    "EmailAuthenticationMessage": email_authentication_message,
    "EmailAuthenticationSubject": email_authentication_subject,
    "SmsConfiguration": sms_configuration,
    "SmsVerificationMessage": sms_verification_message,
    "WebAuthnRelyingPartyID": web_authn_relying_party_id,
    "WebAuthnUserVerification": web_authn_user_verification,
    "Schema": schema,
    "UsernameConfiguration": username_configuration,
    "UserAttributeUpdateSettings": user_attribute_update_settings,
    "UserPoolTags": user_pool_tags,
    "VerificationMessageTemplate": verification_message_template,
    "UserPoolAddOns": user_pool_add_ons,
    "UserPoolTier": user_pool_tier
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<UserPoolId>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.cognito.user_pools
WHERE data__Identifier = '<UserPoolId>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>user_pools</code> resource, the following permissions are required:

### Create
```json
cognito-idp:CreateUserPool,
iam:PassRole,
cognito-idp:SetUserPoolMfaConfig,
cognito-idp:DescribeUserPool,
kms:CreateGrant,
iam:CreateServiceLinkedRole,
cognito-idp:TagResource
```

### Read
```json
cognito-idp:DescribeUserPool,
cognito-idp:GetUserPoolMfaConfig
```

### Update
```json
cognito-idp:UpdateUserPool,
cognito-idp:ListTagsForResource,
cognito-idp:UntagResource,
cognito-idp:TagResource,
cognito-idp:SetUserPoolMfaConfig,
cognito-idp:AddCustomAttributes,
cognito-idp:DescribeUserPool,
cognito-idp:GetUserPoolMfaConfig,
iam:PassRole
```

### Delete
```json
cognito-idp:DeleteUserPool
```

### List
```json
cognito-idp:ListUserPools
```
