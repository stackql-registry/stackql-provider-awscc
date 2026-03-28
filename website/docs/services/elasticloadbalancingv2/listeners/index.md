---
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
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

import CodeBlock from '@theme/CodeBlock';
import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SchemaTable from '@site/src/components/SchemaTable/SchemaTable';

Creates, updates, deletes or gets a <code>listener</code> resource or lists <code>listeners</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>listeners</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Specifies a listener for an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.elasticloadbalancingv2.listeners" /></td></tr>
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
    "description": ""
  },
  {
    "name": "mutual_authentication",
    "type": "object",
    "description": "The mutual authentication configuration information.",
    "children": [
      {
        "name": "ignore_client_certificate_expiry",
        "type": "boolean",
        "description": "Indicates whether expired client certificates are ignored."
      },
      {
        "name": "mode",
        "type": "string",
        "description": "The client certificate handling method. Options are <code>off</code>, <code>passthrough</code> or <code>verify</code>. The default value is <code>off</code>."
      },
      {
        "name": "trust_store_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the trust store."
      },
      {
        "name": "advertise_trust_store_ca_names",
        "type": "string",
        "description": "Indicates whether trust store CA certificate names are advertised."
      }
    ]
  },
  {
    "name": "listener_attributes",
    "type": "array",
    "description": "The listener attributes. Attributes that you do not modify retain their current values.",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value of the attribute."
      },
      {
        "name": "key",
        "type": "string",
        "description": "<details><summary>The name of the attribute.</summary>The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.<br />+  <code>tcp.idle_timeout.seconds</code> - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.<br />The following attributes are only supported by Application Load Balancers.<br />+  <code>routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Mtls-Clientcert-Serial-Number</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_mtls_clientcert_issuer.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Mtls-Clientcert-Issuer</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_mtls_clientcert_subject.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Mtls-Clientcert-Subject</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_mtls_clientcert_validity.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Mtls-Clientcert-Validity</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_mtls_clientcert_leaf.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Mtls-Clientcert-Leaf</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_mtls_clientcert.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Mtls-Clientcert</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_tls_version.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Tls-Version</i> HTTP request header.<br />+  <code>routing.http.request.x_amzn_tls_cipher_suite.header_name</code> - Enables you to modify the header name of the <i>X-Amzn-Tls-Cipher-Suite</i> HTTP request header.<br />+  <code>routing.http.response.server.enabled</code> - Enables you to allow or remove the HTTP response server header.<br />+  <code>routing.http.response.strict_transport_security.header_value</code> - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.<br />+  <code>routing.http.response.access_control_allow_origin.header_value</code> - Specifies which origins are allowed to access the server.<br />+  <code>routing.http.response.access_control_allow_methods.header_value</code> - Returns which HTTP methods are allowed when accessing the server from a different origin.<br />+  <code>routing.http.response.access_control_allow_headers.header_value</code> - Specifies which headers can be used during the request.<br />+  <code>routing.http.response.access_control_allow_credentials.header_value</code> - Indicates whether the browser should include credentials such as cookies or authentication when making requests.<br />+  <code>routing.http.response.access_control_expose_headers.header_value</code> - Returns which headers the browser can expose to the requesting client.<br />+  <code>routing.http.response.access_control_max_age.header_value</code> - Specifies how long the results of a preflight request can be cached, in seconds.<br />+  <code>routing.http.response.content_security_policy.header_value</code> - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.<br />+  <code>routing.http.response.x_content_type_options.header_value</code> - Indicates whether the MIME types advertised in the <i>Content-Type</i> headers should be followed and not be changed.<br />+  <code>routing.http.response.x_frame_options.header_value</code> - Indicates whether the browser is allowed to render a page in a <i>frame</i>, <i>iframe</i>, <i>embed</i> or <i>object</i>.</details>"
      }
    ]
  },
  {
    "name": "alpn_policy",
    "type": "array",
    "description": "[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy."
  },
  {
    "name": "ssl_policy",
    "type": "string",
    "description": "<details><summary>[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html\">Security policies</a> in the <i>Application Load Balancers Guide</i> and <a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html\">Security policies</a> in the <i>Network Load Balancers Guide</i>.</summary>[HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.</details>"
  },
  {
    "name": "load_balancer_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the load balancer."
  },
  {
    "name": "default_actions",
    "type": "array",
    "description": "<details><summary>The actions for the default rule. You cannot define a condition for a default rule.</summary>To create additional rules for an Application Load Balancer, use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html\">AWS::ElasticLoadBalancingV2::ListenerRule</a>.</details>",
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
    "name": "port",
    "type": "integer",
    "description": "The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer."
  },
  {
    "name": "certificates",
    "type": "array",
    "description": "<details><summary>The default SSL server certificate for a secure listener. You must provide exactly one certificate if the listener protocol is HTTPS or TLS.</summary>For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.<br />To create a certificate list for a secure listener, use <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html\">AWS::ElasticLoadBalancingV2::ListenerCertificate</a>.</details>",
    "children": [
      {
        "name": "certificate_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the certificate."
      }
    ]
  },
  {
    "name": "protocol",
    "type": "string",
    "description": "The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer."
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
    "name": "listener_arn",
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

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html"><code>AWS::ElasticLoadBalancingV2::Listener</code></a>.

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
    <td><code>listeners</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="LoadBalancerArn, DefaultActions, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>listeners_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>listeners</code></td>
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

Gets all properties from an individual <code>listener</code>.
```sql
SELECT
  region,
  listener_arn,
  mutual_authentication,
  listener_attributes,
  alpn_policy,
  ssl_policy,
  load_balancer_arn,
  default_actions,
  port,
  certificates,
  protocol
FROM awscc.elasticloadbalancingv2.listeners
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ listener_arn }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>listeners</code> in a region.
```sql
SELECT
  region,
  listener_arn
FROM awscc.elasticloadbalancingv2.listeners_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>listener</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.elasticloadbalancingv2.listeners (
  LoadBalancerArn,
  DefaultActions,
  region
)
SELECT
  '{{ load_balancer_arn }}',
  '{{ default_actions }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.elasticloadbalancingv2.listeners (
  MutualAuthentication,
  ListenerAttributes,
  AlpnPolicy,
  SslPolicy,
  LoadBalancerArn,
  DefaultActions,
  Port,
  Certificates,
  Protocol,
  region
)
SELECT
  '{{ mutual_authentication }}',
  '{{ listener_attributes }}',
  '{{ alpn_policy }}',
  '{{ ssl_policy }}',
  '{{ load_balancer_arn }}',
  '{{ default_actions }}',
  '{{ port }}',
  '{{ certificates }}',
  '{{ protocol }}',
  '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`version: 1
name: stack name
description: stack description
providers:
  - aws
globals:
  - name: region
    value: '{{ vars.AWS_REGION }}'
resources:
  - name: listener
    props:
      - name: mutual_authentication
        value:
          ignore_client_certificate_expiry: '{{ ignore_client_certificate_expiry }}'
          mode: '{{ mode }}'
          trust_store_arn: '{{ trust_store_arn }}'
          advertise_trust_store_ca_names: '{{ advertise_trust_store_ca_names }}'
      - name: listener_attributes
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: alpn_policy
        value:
          - '{{ alpn_policy[0] }}'
      - name: ssl_policy
        value: '{{ ssl_policy }}'
      - name: load_balancer_arn
        value: '{{ load_balancer_arn }}'
      - name: default_actions
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
      - name: port
        value: '{{ port }}'
      - name: certificates
        value:
          - certificate_arn: '{{ certificate_arn }}'
      - name: protocol
        value: '{{ protocol }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>listener</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.elasticloadbalancingv2.listeners
SET PatchDocument = string('{{ {
    "MutualAuthentication": mutual_authentication,
    "ListenerAttributes": listener_attributes,
    "AlpnPolicy": alpn_policy,
    "SslPolicy": ssl_policy,
    "DefaultActions": default_actions,
    "Port": port,
    "Certificates": certificates,
    "Protocol": protocol
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ listener_arn }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.listeners
WHERE
  Identifier = '{{ listener_arn }}' AND
  region = '{{ region }}'
RETURNING
  ErrorCode,
  EventTime,
  Identifier,
  Operation,
  OperationStatus,
  RequestToken,
  ResourceModel,
  RetryAfter,
  StatusMessage,
  TypeName
;
```


## Additional Parameters

Mutable resources in the Cloud Control provider support additional optional parameters which can be supplied with `INSERT`, `UPDATE`, or `DELETE` operations. These include:

| Parameter | Description |
|-----------|-------------|
| <CopyableCode code="ClientToken" /> | <details><summary>A unique identifier to ensure the idempotency of the resource request.</summary>This allows the provider to accurately distinguish between retries and new requests.<br />A client token is valid for 36 hours once used.<br />After that, a resource request with the same client token is treated as a new request.<br />If you do not specify a client token, one is generated for inclusion in the request.</details> |
| <CopyableCode code="RoleArn" /> | <details><summary>The ARN of the IAM role used to perform this resource operation.</summary>The role specified must have the permissions required for this operation.<br />If you do not specify a role, a temporary session is created using your AWS user credentials.</details> |
| <CopyableCode code="TypeVersionId" /> | <details><summary>For private resource types, the type version to use in this resource operation.</summary>If you do not specify a resource version, the default version is used.</details> |

## Permissions

To operate on the <code>listeners</code> resource, the following permissions are required:

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
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeListenerAttributes
```

</TabItem>
<TabItem value="create">

```json
elasticloadbalancing:CreateListener,
elasticloadbalancing:DescribeListeners,
cognito-idp:DescribeUserPoolClient,
elasticloadbalancing:ModifyListenerAttributes
```

</TabItem>
<TabItem value="update">

```json
elasticloadbalancing:ModifyListener,
elasticloadbalancing:DescribeListeners,
cognito-idp:DescribeUserPoolClient,
elasticloadbalancing:ModifyListenerAttributes
```

</TabItem>
<TabItem value="list">

```json
elasticloadbalancing:DescribeListeners
```

</TabItem>
<TabItem value="delete">

```json
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DescribeListeners
```

</TabItem>
</Tabs>