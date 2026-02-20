---
title: app_monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - app_monitors
  - rum
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

Creates, updates, deletes or gets an <code>app_monitor</code> resource or lists <code>app_monitors</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>app_monitors</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::RUM::AppMonitor</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rum.app_monitors" /></td></tr>
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
    "name": "id",
    "type": "string",
    "description": "The unique ID of the new app monitor."
  },
  {
    "name": "name",
    "type": "string",
    "description": "A name for the app monitor"
  },
  {
    "name": "domain",
    "type": "string",
    "description": "The top-level internet domain name for which your application has administrative authority. The CreateAppMonitor requires either the domain or the domain list."
  },
  {
    "name": "domain_list",
    "type": "array",
    "description": "The top-level internet domain names for which your application has administrative authority. The CreateAppMonitor requires either the domain or the domain list."
  },
  {
    "name": "cw_log_enabled",
    "type": "boolean",
    "description": "Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false"
  },
  {
    "name": "tags",
    "type": "array",
    "description": "Assigns one or more tags (key-value pairs) to the app monitor. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "app_monitor_configuration",
    "type": "object",
    "description": "AppMonitor configuration",
    "children": [
      {
        "name": "identity_pool_id",
        "type": "string",
        "description": "The ID of the identity pool that is used to authorize the sending of data to RUM."
      },
      {
        "name": "excluded_pages",
        "type": "array",
        "description": "A list of URLs in your website or application to exclude from RUM data collection. You can't include both ExcludedPages and IncludedPages in the same operation."
      },
      {
        "name": "favorite_pages",
        "type": "array",
        "description": "A list of pages in the RUM console that are to be displayed with a favorite icon."
      },
      {
        "name": "session_sample_rate",
        "type": "number",
        "description": "Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used."
      },
      {
        "name": "guest_role_arn",
        "type": "string",
        "description": "The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM."
      },
      {
        "name": "allow_cookies",
        "type": "boolean",
        "description": "If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page."
      },
      {
        "name": "telemetries",
        "type": "array",
        "description": "An array that lists the types of telemetry data that this app monitor is to collect."
      },
      {
        "name": "enable_xray",
        "type": "boolean",
        "description": "If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console."
      },
      {
        "name": "metric_destinations",
        "type": "array",
        "description": "An array of structures which define the destinations and the metrics that you want to send.",
        "children": [
          {
            "name": "destination",
            "type": "string",
            "description": "Defines the destination to send the metrics to. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the Evidently experiment that is to be the destination and an IAM role that has permission to write to the experiment."
          },
          {
            "name": "destination_arn",
            "type": "string",
            "description": "Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics."
          },
          {
            "name": "iam_role_arn",
            "type": "string",
            "description": "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.<br />This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment."
          },
          {
            "name": "metric_definitions",
            "type": "array",
            "description": "An array of structures which define the metrics that you want to send.",
            "children": [
              {
                "name": "name",
                "type": "string",
                "description": "The name for the metric that is defined in this structure. For extended metrics, valid values are the following:<br />PerformanceNavigationDuration<br />PerformanceResourceDuration<br />NavigationSatisfiedTransaction<br />NavigationToleratedTransaction<br />NavigationFrustratedTransaction<br />WebVitalsCumulativeLayoutShift<br />WebVitalsFirstInputDelay<br />WebVitalsLargestContentfulPaint<br />JsErrorCount<br />HttpErrorCount<br />SessionCount"
              },
              {
                "name": "namespace",
                "type": "string",
                "description": "The namespace used by CloudWatch Metrics for the metric that is defined in this structure"
              },
              {
                "name": "value_key",
                "type": "string",
                "description": "The field within the event object that the metric value is sourced from.<br />If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.<br />If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event."
              },
              {
                "name": "unit_label",
                "type": "string",
                "description": "The CloudWatch metric unit to use for this metric. If you omit this field, the metric is recorded with no unit."
              },
              {
                "name": "dimension_keys",
                "type": "object",
                "description": "Use this field only if you are sending the metric to CloudWatch.<br />This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:<br />\"metadata.pageId\": \"PageId\"<br />\"metadata.browserName\": \"BrowserName\"<br />\"metadata.deviceType\": \"DeviceType\"<br />\"metadata.osName\": \"OSName\"<br />\"metadata.countryCode\": \"CountryCode\"<br />\"event&#95;details.fileType\": \"FileType\"<br />All dimensions listed in this field must also be included in EventPattern."
              },
              {
                "name": "event_pattern",
                "type": "string",
                "description": "The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.<br />When you define extended metrics, the metric definition is not valid if EventPattern is omitted.<br />Example event patterns:<br />'&#123; \"event&#95;type\": &#91;\"com.amazon.rum.js&#95;error&#95;event\"&#93;, \"metadata\": &#123; \"browserName\": &#91; \"Chrome\", \"Safari\" &#93;, &#125; &#125;'<br />'&#123; \"event&#95;type\": &#91;\"com.amazon.rum.performance&#95;navigation&#95;event\"&#93;, \"metadata\": &#123; \"browserName\": &#91; \"Chrome\", \"Firefox\" &#93; &#125;, \"event&#95;details\": &#123; \"duration\": &#91;&#123; \"numeric\": &#91; \"&lt;\", 2000 &#93; &#125;&#93; &#125; &#125;'<br />'&#123; \"event&#95;type\": &#91;\"com.amazon.rum.performance&#95;navigation&#95;event\"&#93;, \"metadata\": &#123; \"browserName\": &#91; \"Chrome\", \"Safari\" &#93;, \"countryCode\": &#91; \"US\" &#93; &#125;, \"event&#95;details\": &#123; \"duration\": &#91;&#123; \"numeric\": &#91; \"&gt;=\", 2000, \"&lt;\", 8000 &#93; &#125;&#93; &#125; &#125;'<br />If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "custom_events",
    "type": "object",
    "description": "AppMonitor custom events configuration",
    "children": [
      {
        "name": "status",
        "type": "string",
        "description": "Indicates whether AppMonitor accepts custom events."
      }
    ]
  },
  {
    "name": "resource_policy",
    "type": "object",
    "description": "A structure that defines resource policy attached to your app monitor.",
    "children": [
      {
        "name": "policy_document",
        "type": "string",
        "description": "The JSON to use as the resource policy. The document can be up to 4 KB in size."
      },
      {
        "name": "policy_revision_id",
        "type": "string",
        "description": "A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy. <br />When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID."
      }
    ]
  },
  {
    "name": "deobfuscation_configuration",
    "type": "object",
    "description": "A structure that contains the configuration for how an app monitor can deobfuscate stack traces.",
    "children": [
      {
        "name": "java_script_source_maps",
        "type": "object",
        "description": "A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.",
        "children": [
          {
            "name": "status",
            "type": "string",
            "description": "Specifies whether JavaScript error stack traces should be unminified for this app monitor. The default is for JavaScript error stack trace unminification to be DISABLED"
          },
          {
            "name": "s3_uri",
            "type": "string",
            "description": "The S3Uri of the bucket or folder that stores the source map files. It is required if status is ENABLED."
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
    "name": "name",
    "type": "string",
    "description": "A name for the app monitor"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html"><code>AWS::RUM::AppMonitor</code></a>.

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
    <td><code>app_monitors</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Name, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>app_monitors</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>app_monitors</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>app_monitors_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>app_monitors</code></td>
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

Gets all properties from an individual <code>app_monitor</code>.
```sql
SELECT
region,
id,
name,
domain,
domain_list,
cw_log_enabled,
tags,
app_monitor_configuration,
custom_events,
resource_policy,
deobfuscation_configuration
FROM awscc.rum.app_monitors
WHERE region = 'us-east-1' AND Identifier = '<Name>';
```
</TabItem>
<TabItem value="list">

Lists all <code>app_monitors</code> in a region.
```sql
SELECT
region,
name
FROM awscc.rum.app_monitors_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>app_monitor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.rum.app_monitors (
 Name,
 region
)
SELECT 
'{{ Name }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.rum.app_monitors (
 Name,
 Domain,
 DomainList,
 CwLogEnabled,
 Tags,
 AppMonitorConfiguration,
 CustomEvents,
 ResourcePolicy,
 DeobfuscationConfiguration,
 region
)
SELECT 
 '{{ Name }}',
 '{{ Domain }}',
 '{{ DomainList }}',
 '{{ CwLogEnabled }}',
 '{{ Tags }}',
 '{{ AppMonitorConfiguration }}',
 '{{ CustomEvents }}',
 '{{ ResourcePolicy }}',
 '{{ DeobfuscationConfiguration }}',
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
  - name: app_monitor
    props:
      - name: Name
        value: '{{ Name }}'
      - name: Domain
        value: '{{ Domain }}'
      - name: DomainList
        value:
          - '{{ DomainList[0] }}'
      - name: CwLogEnabled
        value: '{{ CwLogEnabled }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: AppMonitorConfiguration
        value:
          IdentityPoolId: '{{ IdentityPoolId }}'
          ExcludedPages:
            - '{{ ExcludedPages[0] }}'
          IncludedPages: null
          FavoritePages:
            - '{{ FavoritePages[0] }}'
          SessionSampleRate: null
          GuestRoleArn: '{{ GuestRoleArn }}'
          AllowCookies: '{{ AllowCookies }}'
          Telemetries:
            - '{{ Telemetries[0] }}'
          EnableXRay: '{{ EnableXRay }}'
          MetricDestinations:
            - Destination: '{{ Destination }}'
              DestinationArn: '{{ DestinationArn }}'
              IamRoleArn: '{{ IamRoleArn }}'
              MetricDefinitions:
                - Name: '{{ Name }}'
                  Namespace: '{{ Namespace }}'
                  ValueKey: '{{ ValueKey }}'
                  UnitLabel: '{{ UnitLabel }}'
                  DimensionKeys: {}
                  EventPattern: '{{ EventPattern }}'
      - name: CustomEvents
        value:
          Status: '{{ Status }}'
      - name: ResourcePolicy
        value:
          PolicyDocument: '{{ PolicyDocument }}'
          PolicyRevisionId: '{{ PolicyRevisionId }}'
      - name: DeobfuscationConfiguration
        value:
          JavaScriptSourceMaps:
            Status: '{{ Status }}'
            S3Uri: '{{ S3Uri }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>app_monitor</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.rum.app_monitors
SET PatchDocument = string('{{ {
    "Domain": domain,
    "DomainList": domain_list,
    "CwLogEnabled": cw_log_enabled,
    "Tags": tags,
    "AppMonitorConfiguration": app_monitor_configuration,
    "CustomEvents": custom_events,
    "ResourcePolicy": resource_policy,
    "DeobfuscationConfiguration": deobfuscation_configuration
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<Name>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.rum.app_monitors
WHERE Identifier = '<Name>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>app_monitors</code> resource, the following permissions are required:

<Tabs
    defaultValue="create"
    values={[
      { label: 'Create', value: 'create', },
      { label: 'Read', value: 'read', },
      { label: 'Update', value: 'update', },
      { label: 'Delete', value: 'delete', },
      { label: 'List', value: 'list', },
    ]
}>
<TabItem value="create">

```json
rum:GetAppMonitor,
rum:CreateAppMonitor,
dynamodb:GetItem,
dynamodb:PutItem,
s3:GetObject,
s3:PutObject,
s3:GetObjectAcl,
s3:DoesObjectExist,
logs:CreateLogDelivery,
logs:CreateLogGroup,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
logs:PutRetentionPolicy,
rum:TagResource,
rum:ListTagsForResource,
cognito-identity:DescribeIdentityPool,
iam:GetRole,
iam:CreateServiceLinkedRole,
iam:PassRole,
rum:PutRumMetricsDestination,
rum:BatchCreateRumMetricDefinitions,
rum:ListRumMetricsDestinations,
rum:BatchGetRumMetricDefinitions,
rum:GetResourcePolicy,
rum:PutResourcePolicy
```

</TabItem>
<TabItem value="read">

```json
rum:GetAppMonitor,
dynamodb:GetItem,
s3:GetObject,
s3:DoesObjectExist,
s3:GetObjectAcl,
rum:ListTagsForResource,
rum:ListRumMetricsDestinations,
rum:BatchGetRumMetricDefinitions,
rum:GetResourcePolicy
```

</TabItem>
<TabItem value="update">

```json
rum:GetAppMonitor,
rum:UpdateAppMonitor,
dynamodb:GetItem,
dynamodb:PutItem,
dynamodb:UpdateItem,
dynamodb:Query,
s3:GetObject,
s3:PutObject,
s3:GetObjectAcl,
s3:DoesObjectExist,
logs:CreateLogDelivery,
logs:CreateLogGroup,
logs:GetLogDelivery,
logs:UpdateLogDelivery,
logs:PutResourcePolicy,
logs:DescribeResourcePolicies,
logs:DescribeLogGroups,
logs:PutRetentionPolicy,
rum:TagResource,
rum:UntagResource,
rum:ListTagsForResource,
iam:GetRole,
iam:CreateServiceLinkedRole,
iam:PassRole,
rum:PutRumMetricsDestination,
rum:DeleteRumMetricsDestination,
rum:ListRumMetricsDestinations,
rum:BatchCreateRumMetricDefinitions,
rum:BatchDeleteRumMetricDefinitions,
rum:BatchGetRumMetricDefinitions,
rum:UpdateRumMetricDefinition,
rum:GetResourcePolicy,
rum:PutResourcePolicy,
rum:DeleteResourcePolicy
```

</TabItem>
<TabItem value="delete">

```json
rum:GetAppMonitor,
rum:DeleteAppMonitor,
dynamodb:DeleteItem,
dynamodb:Query,
logs:DeleteLogDelivery,
s3:DeleteObject,
s3:DoesObjectExist,
rum:UntagResource,
rum:ListTagsForResource,
rum:DeleteRumMetricsDestination,
rum:BatchDeleteRumMetricDefinitions,
rum:ListRumMetricsDestinations,
rum:BatchGetRumMetricDefinitions,
rum:GetResourcePolicy,
rum:PutResourcePolicy,
rum:DeleteResourcePolicy
```

</TabItem>
<TabItem value="list">

```json
rum:ListAppMonitors,
dynamodb:DescribeTable,
rum:GetAppMonitor,
dynamodb:GetItem,
dynamodb:BatchGetItem,
dynamodb:Query,
s3:GetObject,
s3:DoesObjectExist,
s3:GetObjectAcl,
logs:DescribeLogGroups,
rum:ListTagsForResource
```

</TabItem>
</Tabs>