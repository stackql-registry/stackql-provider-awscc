---
title: listener_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - listener_rules
  - elasticloadbalancingv2
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

Creates, updates, deletes or gets a <code>listener_rule</code> resource or lists <code>listener_rules</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>listener_rules</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>Specifies a listener rule. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, and one or more conditions.</summary>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> in the <i>User Guide for Application Load Balancers</i>.</details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.listener_rules" /></td></tr>
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
    "name": "listener_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the listener."
  },
  {
    "name": "is_default",
    "type": "boolean",
    "description": ""
  },
  {
    "name": "actions",
    "type": "array",
    "description": "<details><summary>The actions.</summary>The rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.</details>",
    "children": [
      {
        "name": "order",
        "type": "integer",
        "description": "The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first."
      },
      {
        "name": "target_group_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code> and you want to route to a single target group. To route to one or more target groups, use <code>ForwardConfig</code> instead."
      },
      {
        "name": "fixed_response_config",
        "type": "object",
        "description": "[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.",
        "children": [
          {
            "name": "content_type",
            "type": "string",
            "description": "<details><summary>The content type.</summary>Valid Values: text/plain | text/css | text/html | application/javascript | application/json</details>"
          },
          {
            "name": "status_code",
            "type": "string",
            "description": "The HTTP response code (2XX, 4XX, or 5XX)."
          },
          {
            "name": "message_body",
            "type": "string",
            "description": "The message."
          }
        ]
      },
      {
        "name": "authenticate_cognito_config",
        "type": "object",
        "description": "[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.",
        "children": [
          {
            "name": "on_unauthenticated_request",
            "type": "string",
            "description": "<details><summary>The behavior if the user is not authenticated. The following are possible values:</summary>+  deny`<code><code> - Return an HTTP 401 Unauthorized error.<br />+  allow</code><code> - Allow the request to be forwarded to the target.<br />+  authenticate</code></code>` - Redirect the request to the IdP authorization endpoint. This is the default value.</details>"
          },
          {
            "name": "user_pool_client_id",
            "type": "string",
            "description": "The ID of the Amazon Cognito user pool client."
          },
          {
            "name": "user_pool_domain",
            "type": "string",
            "description": "The domain prefix or fully-qualified domain name of the Amazon Cognito user pool."
          },
          {
            "name": "session_timeout",
            "type": "integer",
            "description": "The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days)."
          },
          {
            "name": "scope",
            "type": "string",
            "description": "<details><summary>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</summary>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</details>"
          },
          {
            "name": "session_cookie_name",
            "type": "string",
            "description": "The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie."
          },
          {
            "name": "user_pool_arn",
            "type": "string",
            "description": "The Amazon Resource Name (ARN) of the Amazon Cognito user pool."
          },
          {
            "name": "authentication_request_extra_params",
            "type": "object",
            "description": "The query parameters (up to 10) to include in the redirect request to the authorization endpoint."
          }
        ]
      },
      {
        "name": "type",
        "type": "string",
        "description": "The type of action."
      },
      {
        "name": "redirect_config",
        "type": "object",
        "description": "[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.",
        "children": [
          {
            "name": "path",
            "type": "string",
            "description": "The absolute path, starting with the leading \"/\". This component is not percent-encoded. The path can contain #&#123;host&#125;, #&#123;path&#125;, and #&#123;port&#125;."
          },
          {
            "name": "query",
            "type": "string",
            "description": "The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading \"?\", as it is automatically added. You can specify any of the reserved keywords."
          },
          {
            "name": "port",
            "type": "string",
            "description": "The port. You can specify a value from 1 to 65535 or #&#123;port&#125;."
          },
          {
            "name": "host",
            "type": "string",
            "description": "The hostname. This component is not percent-encoded. The hostname can contain #&#123;host&#125;."
          },
          {
            "name": "protocol",
            "type": "string",
            "description": "The protocol. You can specify HTTP, HTTPS, or #&#123;protocol&#125;. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP."
          },
          {
            "name": "status_code",
            "type": "string",
            "description": "The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302)."
          }
        ]
      },
      {
        "name": "forward_config",
        "type": "object",
        "description": "Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when <code>Type</code> is <code>forward</code>. If you specify both <code>ForwardConfig</code> and <code>TargetGroupArn</code>, you can specify only one target group using <code>ForwardConfig</code> and it must be the same target group specified in <code>TargetGroupArn</code>.",
        "children": [
          {
            "name": "target_group_stickiness_config",
            "type": "object",
            "description": "Information about the target group stickiness for a rule.",
            "children": [
              {
                "name": "enabled",
                "type": "boolean",
                "description": "Indicates whether target group stickiness is enabled."
              },
              {
                "name": "duration_seconds",
                "type": "integer",
                "description": "The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness."
              }
            ]
          },
          {
            "name": "target_groups",
            "type": "array",
            "description": "Information about how traffic will be distributed between multiple target groups in a forward rule.",
            "children": [
              {
                "name": "target_group_arn",
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the target group."
              },
              {
                "name": "weight",
                "type": "integer",
                "description": "The weight. The range is 0 to 999."
              }
            ]
          }
        ]
      },
      {
        "name": "authenticate_oidc_config",
        "type": "object",
        "description": "[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.",
        "children": [
          {
            "name": "on_unauthenticated_request",
            "type": "string",
            "description": "<details><summary>The behavior if the user is not authenticated. The following are possible values:</summary>+  deny`<code><code> - Return an HTTP 401 Unauthorized error.<br />+  allow</code><code> - Allow the request to be forwarded to the target.<br />+  authenticate</code></code>` - Redirect the request to the IdP authorization endpoint. This is the default value.</details>"
          },
          {
            "name": "token_endpoint",
            "type": "string",
            "description": "The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path."
          },
          {
            "name": "use_existing_client_secret",
            "type": "boolean",
            "description": "Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false."
          },
          {
            "name": "session_timeout",
            "type": "integer",
            "description": "The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days)."
          },
          {
            "name": "scope",
            "type": "string",
            "description": "<details><summary>The set of user claims to be requested from the IdP. The default is <code>openid</code>.</summary>To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.</details>"
          },
          {
            "name": "issuer",
            "type": "string",
            "description": "The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path."
          },
          {
            "name": "client_secret",
            "type": "string",
            "description": "The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set <code>UseExistingClientSecret</code> to true."
          },
          {
            "name": "user_info_endpoint",
            "type": "string",
            "description": "The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path."
          },
          {
            "name": "client_id",
            "type": "string",
            "description": "The OAuth 2.0 client identifier."
          },
          {
            "name": "authorization_endpoint",
            "type": "string",
            "description": "The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path."
          },
          {
            "name": "session_cookie_name",
            "type": "string",
            "description": "The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie."
          },
          {
            "name": "authentication_request_extra_params",
            "type": "object",
            "description": "The query parameters (up to 10) to include in the redirect request to the authorization endpoint."
          }
        ]
      }
    ]
  },
  {
    "name": "priority",
    "type": "integer",
    "description": "<details><summary>The rule priority. A listener can't have multiple rules with the same priority.</summary>If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.</details>"
  },
  {
    "name": "rule_arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "conditions",
    "type": "array",
    "description": "<details><summary>The conditions.</summary>The rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. A rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</details>",
    "children": [
      {
        "name": "field",
        "type": "string",
        "description": "<details><summary>The field in the HTTP request. The following are the possible values:</summary>+   <code>http-header</code><br />+   <code>http-request-method</code><br />+   <code>host-header</code><br />+   <code>path-pattern</code><br />+   <code>query-string</code><br />+   <code>source-ip</code></details>"
      },
      {
        "name": "http_header_config",
        "type": "object",
        "description": "Information for an HTTP header condition. Specify only when <code>Field</code> is <code>http-header</code>.",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<details><summary>The strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).</summary>If the same header appears multiple times in the request, we search them in order until a match is found.<br />If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.</details>"
          },
          {
            "name": "http_header_name",
            "type": "string",
            "description": "The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported."
          }
        ]
      },
      {
        "name": "values",
        "type": "array",
        "description": "<details><summary>The condition value. Specify only when <code>Field</code> is <code>host-header</code> or <code>path-pattern</code>. Alternatively, to specify multiple host names or multiple path patterns, use <code>HostHeaderConfig</code> or <code>PathPatternConfig</code>.</summary>If <code>Field</code> is <code>host-header</code> and you're not using <code>HostHeaderConfig</code>, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.<br />+  A-Z, a-z, 0-9<br />+  - .<br />+  * (matches 0 or more characters)<br />+  ? (matches exactly 1 character)<br />If <code>Field</code> is <code>path-pattern</code> and you're not using <code>PathPatternConfig</code>, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.<br />+  A-Z, a-z, 0-9<br />+  _ - . $ / ~ \" ' @ : +<br />+  & (using &amp;)<br />+  * (matches 0 or more characters)<br />+  ? (matches exactly 1 character)</details>"
      },
      {
        "name": "query_string_config",
        "type": "object",
        "description": "Information for a query string condition. Specify only when <code>Field</code> is <code>query-string</code>.",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<details><summary>The key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: <i> (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '</i>' or '?' character in a query string, you must escape these characters in <code>Values</code> using a '\\' character.</summary>If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.</details>",
            "children": [
              {
                "name": "value",
                "type": "string",
                "description": "The value."
              },
              {
                "name": "key",
                "type": "string",
                "description": "The key. You can omit the key."
              }
            ]
          }
        ]
      },
      {
        "name": "host_header_config",
        "type": "object",
        "description": "Information for a host header condition. Specify only when <code>Field</code> is <code>host-header</code>."
      },
      {
        "name": "http_request_method_config",
        "type": "object",
        "description": "Information for an HTTP method condition. Specify only when <code>Field</code> is <code>http-request-method</code>."
      },
      {
        "name": "path_pattern_config",
        "type": "object",
        "description": "Information for a path pattern condition. Specify only when <code>Field</code> is <code>path-pattern</code>."
      },
      {
        "name": "source_ip_config",
        "type": "object",
        "description": "Information for a source IP condition. Specify only when <code>Field</code> is <code>source-ip</code>.",
        "children": [
          {
            "name": "values",
            "type": "array",
            "description": "<details><summary>The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.</summary>If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.</details>"
          }
        ]
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
    "name": "rule_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html"><code>AWS::ElasticLoadBalancingV2::ListenerRule</code></a>.

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
    <td><code>listener_rules</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Actions, Priority, Conditions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>listener_rules</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>listener_rules</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>listener_rules_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>listener_rules</code></td>
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

Gets all properties from an individual <code>listener_rule</code>.
```sql
SELECT
  region,
  listener_arn,
  is_default,
  actions,
  priority,
  rule_arn,
  conditions
FROM awscc.elasticloadbalancingv2.listener_rules
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ rule_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>listener_rules</code> in a region.
```sql
SELECT
  region,
  rule_arn
FROM awscc.elasticloadbalancingv2.listener_rules_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>listener_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticloadbalancingv2.listener_rules (
  Actions,
  Priority,
  Conditions,
  region
)
SELECT
  '{{ actions }}',
  '{{ priority }}',
  '{{ conditions }}',
  '{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticloadbalancingv2.listener_rules (
  ListenerArn,
  Actions,
  Priority,
  Conditions,
  region
)
SELECT
  '{{ listener_arn }}',
  '{{ actions }}',
  '{{ priority }}',
  '{{ conditions }}',
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
  - name: listener_rule
    props:
      - name: listener_arn
        value: '{{ listener_arn }}'
      - name: actions
        value:
          - order: '{{ order }}'
            target_group_arn: '{{ target_group_arn }}'
            fixed_response_config:
              content_type: '{{ content_type }}'
              status_code: '{{ status_code }}'
              message_body: '{{ message_body }}'
            authenticate_cognito_config:
              on_unauthenticated_request: '{{ on_unauthenticated_request }}'
              user_pool_client_id: '{{ user_pool_client_id }}'
              user_pool_domain: '{{ user_pool_domain }}'
              session_timeout: '{{ session_timeout }}'
              scope: '{{ scope }}'
              session_cookie_name: '{{ session_cookie_name }}'
              user_pool_arn: '{{ user_pool_arn }}'
              authentication_request_extra_params: {}
            type: '{{ type }}'
            redirect_config:
              path: '{{ path }}'
              query: '{{ query }}'
              port: '{{ port }}'
              host: '{{ host }}'
              protocol: '{{ protocol }}'
              status_code: '{{ status_code }}'
            forward_config:
              target_group_stickiness_config:
                enabled: '{{ enabled }}'
                duration_seconds: '{{ duration_seconds }}'
              target_groups:
                - target_group_arn: '{{ target_group_arn }}'
                  weight: '{{ weight }}'
            authenticate_oidc_config:
              on_unauthenticated_request: '{{ on_unauthenticated_request }}'
              token_endpoint: '{{ token_endpoint }}'
              use_existing_client_secret: '{{ use_existing_client_secret }}'
              session_timeout: '{{ session_timeout }}'
              scope: '{{ scope }}'
              issuer: '{{ issuer }}'
              client_secret: '{{ client_secret }}'
              user_info_endpoint: '{{ user_info_endpoint }}'
              client_id: '{{ client_id }}'
              authorization_endpoint: '{{ authorization_endpoint }}'
              session_cookie_name: '{{ session_cookie_name }}'
              authentication_request_extra_params: {}
      - name: priority
        value: '{{ priority }}'
      - name: conditions
        value:
          - field: '{{ field }}'
            http_header_config:
              values:
                - '{{ values[0] }}'
              http_header_name: '{{ http_header_name }}'
            values: null
            query_string_config:
              values:
                - value: '{{ value }}'
                  key: '{{ key }}'
            host_header_config:
              values: null
            http_request_method_config:
              values: null
            path_pattern_config:
              values: null
            source_ip_config:
              values:
                - '{{ values[0] }}'
```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>listener_rule</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticloadbalancingv2.listener_rules
SET PatchDocument = string('{{ {
    "Actions": actions,
    "Priority": priority,
    "Conditions": conditions
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ rule_arn }}';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.listener_rules
WHERE
  Identifier = '{{ rule_arn }}' AND
  region = '{{ region }}';
```

## Permissions

To operate on the <code>listener_rules</code> resource, the following permissions are required:

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
elasticloadbalancing:DescribeRules
```

</TabItem>
<TabItem value="create">

```json
elasticloadbalancing:CreateRule,
elasticloadbalancing:DescribeRules,
cognito-idp:DescribeUserPoolClient
```

</TabItem>
<TabItem value="update">

```json
elasticloadbalancing:ModifyRule,
elasticloadbalancing:SetRulePriorities,
elasticloadbalancing:DescribeRules
```

</TabItem>
<TabItem value="list">

```json
elasticloadbalancing:DescribeRules
```

</TabItem>
<TabItem value="delete">

```json
elasticloadbalancing:DeleteRule,
elasticloadbalancing:DescribeRules
```

</TabItem>
</Tabs>