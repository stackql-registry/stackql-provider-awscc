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
        "description": "The client certificate handling method. Options are &#96;&#96;off&#96;&#96;, &#96;&#96;passthrough&#96;&#96; or &#96;&#96;verify&#96;&#96;. The default value is &#96;&#96;off&#96;&#96;."
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
        "description": "The name of the attribute.<br />The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.<br />+ &#96;&#96;tcp.idle&#95;timeout.seconds&#96;&#96; - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.<br /><br />The following attributes are only supported by Application Load Balancers.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;mtls&#95;clientcert&#95;serial&#95;number.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Mtls-Clientcert-Serial-Number&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;mtls&#95;clientcert&#95;issuer.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Mtls-Clientcert-Issuer&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;mtls&#95;clientcert&#95;subject.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Mtls-Clientcert-Subject&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;mtls&#95;clientcert&#95;validity.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Mtls-Clientcert-Validity&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;mtls&#95;clientcert&#95;leaf.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Mtls-Clientcert-Leaf&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;mtls&#95;clientcert.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Mtls-Clientcert&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;tls&#95;version.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Tls-Version&#42; HTTP request header.<br />+ &#96;&#96;routing.http.request.x&#95;amzn&#95;tls&#95;cipher&#95;suite.header&#95;name&#96;&#96; - Enables you to modify the header name of the &#42;X-Amzn-Tls-Cipher-Suite&#42; HTTP request header.<br />+ &#96;&#96;routing.http.response.server.enabled&#96;&#96; - Enables you to allow or remove the HTTP response server header.<br />+ &#96;&#96;routing.http.response.strict&#95;transport&#95;security.header&#95;value&#96;&#96; - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.<br />+ &#96;&#96;routing.http.response.access&#95;control&#95;allow&#95;origin.header&#95;value&#96;&#96; - Specifies which origins are allowed to access the server.<br />+ &#96;&#96;routing.http.response.access&#95;control&#95;allow&#95;methods.header&#95;value&#96;&#96; - Returns which HTTP methods are allowed when accessing the server from a different origin.<br />+ &#96;&#96;routing.http.response.access&#95;control&#95;allow&#95;headers.header&#95;value&#96;&#96; - Specifies which headers can be used during the request.<br />+ &#96;&#96;routing.http.response.access&#95;control&#95;allow&#95;credentials.header&#95;value&#96;&#96; - Indicates whether the browser should include credentials such as cookies or authentication when making requests.<br />+ &#96;&#96;routing.http.response.access&#95;control&#95;expose&#95;headers.header&#95;value&#96;&#96; - Returns which headers the browser can expose to the requesting client.<br />+ &#96;&#96;routing.http.response.access&#95;control&#95;max&#95;age.header&#95;value&#96;&#96; - Specifies how long the results of a preflight request can be cached, in seconds.<br />+ &#96;&#96;routing.http.response.content&#95;security&#95;policy.header&#95;value&#96;&#96; - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.<br />+ &#96;&#96;routing.http.response.x&#95;content&#95;type&#95;options.header&#95;value&#96;&#96; - Indicates whether the MIME types advertised in the &#42;Content-Type&#42; headers should be followed and not be changed.<br />+ &#96;&#96;routing.http.response.x&#95;frame&#95;options.header&#95;value&#96;&#96; - Indicates whether the browser is allowed to render a page in a &#42;frame&#42;, &#42;iframe&#42;, &#42;embed&#42; or &#42;object&#42;."
      }
    ]
  },
  {
    "name": "alpn_policy",
    "type": "array",
    "description": "&#91;TLS listener&#93; The name of the Application-Layer Protocol Negotiation (ALPN) policy."
  },
  {
    "name": "ssl_policy",
    "type": "string",
    "description": "&#91;HTTPS and TLS listeners&#93; The security policy that defines which protocols and ciphers are supported. For more information, see &#91;Security policies&#93;(https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the &#42;Application Load Balancers Guide&#42; and &#91;Security policies&#93;(https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the &#42;Network Load Balancers Guide&#42;.<br />&#91;HTTPS listeners&#93; Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation."
  },
  {
    "name": "load_balancer_arn",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the load balancer."
  },
  {
    "name": "default_actions",
    "type": "array",
    "description": "The actions for the default rule. You cannot define a condition for a default rule.<br />To create additional rules for an Application Load Balancer, use &#91;AWS::ElasticLoadBalancingV2::ListenerRule&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).",
    "children": [
      {
        "name": "order",
        "type": "integer",
        "description": "The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first."
      },
      {
        "name": "target_group_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the target group. Specify only when &#96;&#96;Type&#96;&#96; is &#96;&#96;forward&#96;&#96; and you want to route to a single target group. To route to one or more target groups, use &#96;&#96;ForwardConfig&#96;&#96; instead."
      },
      {
        "name": "fixed_response_config",
        "type": "object",
        "description": "&#91;Application Load Balancer&#93; Information for creating an action that returns a custom HTTP response. Specify only when &#96;&#96;Type&#96;&#96; is &#96;&#96;fixed-response&#96;&#96;.",
        "children": [
          {
            "name": "content_type",
            "type": "string",
            "description": "The content type.<br />Valid Values: text/plain &#124; text/css &#124; text/html &#124; application/javascript &#124; application/json"
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
        "description": "&#91;HTTPS listeners&#93; Information for using Amazon Cognito to authenticate users. Specify only when &#96;&#96;Type&#96;&#96; is &#96;&#96;authenticate-cognito&#96;&#96;.",
        "children": [
          {
            "name": "on_unauthenticated_request",
            "type": "string",
            "description": "The behavior if the user is not authenticated. The following are possible values:<br />+ deny&#96;&#96;&#96;&#96; - Return an HTTP 401 Unauthorized error.<br />+ allow&#96;&#96;&#96;&#96; - Allow the request to be forwarded to the target.<br />+ authenticate&#96;&#96;&#96;&#96; - Redirect the request to the IdP authorization endpoint. This is the default value."
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
            "description": "The set of user claims to be requested from the IdP. The default is &#96;&#96;openid&#96;&#96;.<br />To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP."
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
        "description": "&#91;Application Load Balancer&#93; Information for creating a redirect action. Specify only when &#96;&#96;Type&#96;&#96; is &#96;&#96;redirect&#96;&#96;.",
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
        "description": "Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when &#96;&#96;Type&#96;&#96; is &#96;&#96;forward&#96;&#96;. If you specify both &#96;&#96;ForwardConfig&#96;&#96; and &#96;&#96;TargetGroupArn&#96;&#96;, you can specify only one target group using &#96;&#96;ForwardConfig&#96;&#96; and it must be the same target group specified in &#96;&#96;TargetGroupArn&#96;&#96;.",
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
        "description": "&#91;HTTPS listeners&#93; Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when &#96;&#96;Type&#96;&#96; is &#96;&#96;authenticate-oidc&#96;&#96;.",
        "children": [
          {
            "name": "on_unauthenticated_request",
            "type": "string",
            "description": "The behavior if the user is not authenticated. The following are possible values:<br />+ deny&#96;&#96;&#96;&#96; - Return an HTTP 401 Unauthorized error.<br />+ allow&#96;&#96;&#96;&#96; - Allow the request to be forwarded to the target.<br />+ authenticate&#96;&#96;&#96;&#96; - Redirect the request to the IdP authorization endpoint. This is the default value."
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
            "description": "The set of user claims to be requested from the IdP. The default is &#96;&#96;openid&#96;&#96;.<br />To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP."
          },
          {
            "name": "issuer",
            "type": "string",
            "description": "The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path."
          },
          {
            "name": "client_secret",
            "type": "string",
            "description": "The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set &#96;&#96;UseExistingClientSecret&#96;&#96; to true."
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
    "description": "The default SSL server certificate for a secure listener. You must provide exactly one certificate if the listener protocol is HTTPS or TLS.<br />For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.<br />To create a certificate list for a secure listener, use &#91;AWS::ElasticLoadBalancingV2::ListenerCertificate&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).",
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
    "description": "The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP&#95;UDP. You can’t specify the UDP or TCP&#95;UDP protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer."
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
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>listeners</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
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
WHERE region = 'us-east-1' AND data__Identifier = '<ListenerArn>';
```
</TabItem>
<TabItem value="list">

Lists all <code>listeners</code> in a region.
```sql
SELECT
region,
listener_arn
FROM awscc.elasticloadbalancingv2.listeners_list_only
WHERE region = 'us-east-1';
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
'{{ LoadBalancerArn }}',
 '{{ DefaultActions }}',
'{{ region }}';
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
 '{{ MutualAuthentication }}',
 '{{ ListenerAttributes }}',
 '{{ AlpnPolicy }}',
 '{{ SslPolicy }}',
 '{{ LoadBalancerArn }}',
 '{{ DefaultActions }}',
 '{{ Port }}',
 '{{ Certificates }}',
 '{{ Protocol }}',
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
  - name: listener
    props:
      - name: MutualAuthentication
        value:
          IgnoreClientCertificateExpiry: '{{ IgnoreClientCertificateExpiry }}'
          Mode: '{{ Mode }}'
          TrustStoreArn: '{{ TrustStoreArn }}'
          AdvertiseTrustStoreCaNames: '{{ AdvertiseTrustStoreCaNames }}'
      - name: ListenerAttributes
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: AlpnPolicy
        value:
          - '{{ AlpnPolicy[0] }}'
      - name: SslPolicy
        value: '{{ SslPolicy }}'
      - name: LoadBalancerArn
        value: '{{ LoadBalancerArn }}'
      - name: DefaultActions
        value:
          - Order: '{{ Order }}'
            TargetGroupArn: '{{ TargetGroupArn }}'
            FixedResponseConfig:
              ContentType: '{{ ContentType }}'
              StatusCode: '{{ StatusCode }}'
              MessageBody: '{{ MessageBody }}'
            AuthenticateCognitoConfig:
              OnUnauthenticatedRequest: '{{ OnUnauthenticatedRequest }}'
              UserPoolClientId: '{{ UserPoolClientId }}'
              UserPoolDomain: '{{ UserPoolDomain }}'
              SessionTimeout: '{{ SessionTimeout }}'
              Scope: '{{ Scope }}'
              SessionCookieName: '{{ SessionCookieName }}'
              UserPoolArn: '{{ UserPoolArn }}'
              AuthenticationRequestExtraParams: {}
            Type: '{{ Type }}'
            RedirectConfig:
              Path: '{{ Path }}'
              Query: '{{ Query }}'
              Port: '{{ Port }}'
              Host: '{{ Host }}'
              Protocol: '{{ Protocol }}'
              StatusCode: '{{ StatusCode }}'
            ForwardConfig:
              TargetGroupStickinessConfig:
                Enabled: '{{ Enabled }}'
                DurationSeconds: '{{ DurationSeconds }}'
              TargetGroups:
                - TargetGroupArn: '{{ TargetGroupArn }}'
                  Weight: '{{ Weight }}'
            AuthenticateOidcConfig:
              OnUnauthenticatedRequest: '{{ OnUnauthenticatedRequest }}'
              TokenEndpoint: '{{ TokenEndpoint }}'
              UseExistingClientSecret: '{{ UseExistingClientSecret }}'
              SessionTimeout: '{{ SessionTimeout }}'
              Scope: '{{ Scope }}'
              Issuer: '{{ Issuer }}'
              ClientSecret: '{{ ClientSecret }}'
              UserInfoEndpoint: '{{ UserInfoEndpoint }}'
              ClientId: '{{ ClientId }}'
              AuthorizationEndpoint: '{{ AuthorizationEndpoint }}'
              SessionCookieName: '{{ SessionCookieName }}'
              AuthenticationRequestExtraParams: {}
      - name: Port
        value: '{{ Port }}'
      - name: Certificates
        value:
          - CertificateArn: '{{ CertificateArn }}'
      - name: Protocol
        value: '{{ Protocol }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

```sql
/*+ update */
UPDATE awscc.elasticloadbalancingv2.listeners
SET data__PatchDocument = string('{{ {
    "MutualAuthentication": mutual_authentication,
    "ListenerAttributes": listener_attributes,
    "AlpnPolicy": alpn_policy,
    "SslPolicy": ssl_policy,
    "DefaultActions": default_actions,
    "Port": port,
    "Certificates": certificates,
    "Protocol": protocol
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND data__Identifier = '<ListenerArn>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.elasticloadbalancingv2.listeners
WHERE data__Identifier = '<ListenerArn>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>listeners</code> resource, the following permissions are required:

### Read
```json
elasticloadbalancing:DescribeListeners,
elasticloadbalancing:DescribeListenerAttributes
```

### Create
```json
elasticloadbalancing:CreateListener,
elasticloadbalancing:DescribeListeners,
cognito-idp:DescribeUserPoolClient,
elasticloadbalancing:ModifyListenerAttributes
```

### Update
```json
elasticloadbalancing:ModifyListener,
elasticloadbalancing:DescribeListeners,
cognito-idp:DescribeUserPoolClient,
elasticloadbalancing:ModifyListenerAttributes
```

### List
```json
elasticloadbalancing:DescribeListeners
```

### Delete
```json
elasticloadbalancing:DeleteListener,
elasticloadbalancing:DescribeListeners
```
