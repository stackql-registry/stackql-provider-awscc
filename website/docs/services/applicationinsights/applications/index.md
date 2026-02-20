---
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - applicationinsights
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

Creates, updates, deletes or gets an <code>application</code> resource or lists <code>applications</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>applications</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::ApplicationInsights::Application</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.applicationinsights.applications" /></td></tr>
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
    "name": "resource_group_name",
    "type": "string",
    "description": "The name of the resource group."
  },
  {
    "name": "application_arn",
    "type": "string",
    "description": "The ARN of the ApplicationInsights application."
  },
  {
    "name": "cwe_monitor_enabled",
    "type": "boolean",
    "description": "Indicates whether Application Insights can listen to CloudWatch events for the application resources."
  },
  {
    "name": "ops_center_enabled",
    "type": "boolean",
    "description": "When set to true, creates opsItems for any problems detected on an application."
  },
  {
    "name": "ops_item_sns_topic_arn",
    "type": "string",
    "description": "The SNS topic provided to Application Insights that is associated to the created opsItem."
  },
  {
    "name": "sns_notification_arn",
    "type": "string",
    "description": "Application Insights sends notifications to this SNS topic whenever there is a problem update in the associated application."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "The tags of Application Insights application.",
    "children": [
      {
        "name": "key",
        "type": "string",
        "description": "The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      },
      {
        "name": "value",
        "type": "string",
        "description": "The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, &#95;, ., /, =, +, and -."
      }
    ]
  },
  {
    "name": "custom_components",
    "type": "array",
    "description": "The custom grouped components.",
    "children": [
      {
        "name": "component_name",
        "type": "string",
        "description": "The name of the component."
      },
      {
        "name": "resource_list",
        "type": "array",
        "description": "The list of resource ARNs that belong to the component."
      }
    ]
  },
  {
    "name": "log_pattern_sets",
    "type": "array",
    "description": "The log pattern sets.",
    "children": [
      {
        "name": "pattern_set_name",
        "type": "string",
        "description": "The name of the log pattern set."
      },
      {
        "name": "log_patterns",
        "type": "array",
        "description": "The log patterns of a set.",
        "children": [
          {
            "name": "pattern_name",
            "type": "string",
            "description": "The name of the log pattern."
          },
          {
            "name": "pattern",
            "type": "string",
            "description": "The log pattern."
          },
          {
            "name": "rank",
            "type": "integer",
            "description": "Rank of the log pattern."
          }
        ]
      }
    ]
  },
  {
    "name": "auto_configuration_enabled",
    "type": "boolean",
    "description": "If set to true, application will be configured with recommended monitoring configuration."
  },
  {
    "name": "component_monitoring_settings",
    "type": "array",
    "description": "The monitoring settings of the components.",
    "children": [
      {
        "name": "component_name",
        "type": "string",
        "description": "The name of the component."
      },
      {
        "name": "component_arn",
        "type": "string",
        "description": "The ARN of the compnonent."
      },
      {
        "name": "tier",
        "type": "string",
        "description": "The tier of the application component."
      },
      {
        "name": "component_configuration_mode",
        "type": "string",
        "description": "The component monitoring configuration mode."
      },
      {
        "name": "default_overwrite_component_configuration",
        "type": "object",
        "description": "The overwritten settings on default component monitoring configuration.",
        "children": [
          {
            "name": "configuration_details",
            "type": "object",
            "description": "The configuration settings",
            "children": [
              {
                "name": "alarm_metrics",
                "type": "array",
                "description": "A list of metrics to monitor for the component."
              },
              {
                "name": "logs",
                "type": "array",
                "description": "A list of logs to monitor for the component."
              },
              {
                "name": "windows_events",
                "type": "array",
                "description": "A list of Windows Events to log."
              },
              {
                "name": "processes",
                "type": "array",
                "description": "A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section."
              },
              {
                "name": "alarms",
                "type": "array",
                "description": "A list of alarms to monitor for the component."
              },
              {
                "name": "j_mx_prometheus_exporter",
                "type": "object",
                "description": "The JMX Prometheus Exporter settings."
              },
              {
                "name": "h_an_aprometheus_exporter",
                "type": "object",
                "description": "The HANA DB Prometheus Exporter settings."
              },
              {
                "name": "h_acluster_prometheus_exporter",
                "type": "object",
                "description": "The HA cluster Prometheus Exporter settings."
              },
              {
                "name": "net_weaver_prometheus_exporter",
                "type": "object",
                "description": "The NetWeaver Prometheus Exporter settings."
              },
              {
                "name": "sq_lserver_prometheus_exporter",
                "type": "object",
                "description": "The SQL Prometheus Exporter settings."
              }
            ]
          },
          {
            "name": "sub_component_type_configurations",
            "type": "array",
            "description": "Sub component configurations of the component.",
            "children": [
              {
                "name": "sub_component_type",
                "type": "string",
                "description": "The sub component type."
              },
              {
                "name": "sub_component_configuration_details",
                "type": "object",
                "description": "The configuration settings of sub components."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "grouping_type",
    "type": "string",
    "description": "The grouping type of the application"
  },
  {
    "name": "attach_missing_permission",
    "type": "boolean",
    "description": "If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing"
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
    "name": "application_arn",
    "type": "string",
    "description": "The ARN of the ApplicationInsights application."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html"><code>AWS::ApplicationInsights::Application</code></a>.

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
    <td><code>applications</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="ResourceGroupName, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>applications</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>applications</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>applications_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>applications</code></td>
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

Gets all properties from an individual <code>application</code>.
```sql
SELECT
region,
resource_group_name,
application_arn,
cwe_monitor_enabled,
ops_center_enabled,
ops_item_sns_topic_arn,
sns_notification_arn,
tags,
custom_components,
log_pattern_sets,
auto_configuration_enabled,
component_monitoring_settings,
grouping_type,
attach_missing_permission
FROM awscc.applicationinsights.applications
WHERE region = 'us-east-1' AND Identifier = '<ApplicationARN>';
```
</TabItem>
<TabItem value="list">

Lists all <code>applications</code> in a region.
```sql
SELECT
region,
application_arn
FROM awscc.applicationinsights.applications_list_only
WHERE region = 'us-east-1';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.applicationinsights.applications (
 ResourceGroupName,
 region
)
SELECT 
'{{ ResourceGroupName }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.applicationinsights.applications (
 ResourceGroupName,
 CWEMonitorEnabled,
 OpsCenterEnabled,
 OpsItemSNSTopicArn,
 SNSNotificationArn,
 Tags,
 CustomComponents,
 LogPatternSets,
 AutoConfigurationEnabled,
 ComponentMonitoringSettings,
 GroupingType,
 AttachMissingPermission,
 region
)
SELECT 
 '{{ ResourceGroupName }}',
 '{{ CWEMonitorEnabled }}',
 '{{ OpsCenterEnabled }}',
 '{{ OpsItemSNSTopicArn }}',
 '{{ SNSNotificationArn }}',
 '{{ Tags }}',
 '{{ CustomComponents }}',
 '{{ LogPatternSets }}',
 '{{ AutoConfigurationEnabled }}',
 '{{ ComponentMonitoringSettings }}',
 '{{ GroupingType }}',
 '{{ AttachMissingPermission }}',
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
  - name: application
    props:
      - name: ResourceGroupName
        value: '{{ ResourceGroupName }}'
      - name: CWEMonitorEnabled
        value: '{{ CWEMonitorEnabled }}'
      - name: OpsCenterEnabled
        value: '{{ OpsCenterEnabled }}'
      - name: OpsItemSNSTopicArn
        value: '{{ OpsItemSNSTopicArn }}'
      - name: SNSNotificationArn
        value: '{{ SNSNotificationArn }}'
      - name: Tags
        value:
          - Key: '{{ Key }}'
            Value: '{{ Value }}'
      - name: CustomComponents
        value:
          - ComponentName: '{{ ComponentName }}'
            ResourceList:
              - '{{ ResourceList[0] }}'
      - name: LogPatternSets
        value:
          - PatternSetName: '{{ PatternSetName }}'
            LogPatterns:
              - PatternName: '{{ PatternName }}'
                Pattern: '{{ Pattern }}'
                Rank: '{{ Rank }}'
      - name: AutoConfigurationEnabled
        value: '{{ AutoConfigurationEnabled }}'
      - name: ComponentMonitoringSettings
        value:
          - ComponentName: '{{ ComponentName }}'
            ComponentARN: '{{ ComponentARN }}'
            Tier: '{{ Tier }}'
            ComponentConfigurationMode: '{{ ComponentConfigurationMode }}'
            DefaultOverwriteComponentConfiguration:
              ConfigurationDetails:
                AlarmMetrics:
                  - AlarmMetricName: '{{ AlarmMetricName }}'
                Logs:
                  - LogGroupName: '{{ LogGroupName }}'
                    LogPath: '{{ LogPath }}'
                    LogType: '{{ LogType }}'
                    Encoding: '{{ Encoding }}'
                    PatternSet: '{{ PatternSet }}'
                WindowsEvents:
                  - LogGroupName: '{{ LogGroupName }}'
                    EventName: '{{ EventName }}'
                    EventLevels:
                      - '{{ EventLevels[0] }}'
                    PatternSet: '{{ PatternSet }}'
                Processes:
                  - ProcessName: '{{ ProcessName }}'
                    AlarmMetrics:
                      - null
                Alarms:
                  - AlarmName: '{{ AlarmName }}'
                    Severity: '{{ Severity }}'
                JMXPrometheusExporter:
                  JMXURL: '{{ JMXURL }}'
                  HostPort: '{{ HostPort }}'
                  PrometheusPort: '{{ PrometheusPort }}'
                HANAPrometheusExporter:
                  HANASID: '{{ HANASID }}'
                  HANAPort: '{{ HANAPort }}'
                  HANASecretName: '{{ HANASecretName }}'
                  AgreeToInstallHANADBClient: '{{ AgreeToInstallHANADBClient }}'
                  PrometheusPort: '{{ PrometheusPort }}'
                HAClusterPrometheusExporter:
                  PrometheusPort: '{{ PrometheusPort }}'
                NetWeaverPrometheusExporter:
                  SAPSID: '{{ SAPSID }}'
                  InstanceNumbers:
                    - '{{ InstanceNumbers[0] }}'
                  PrometheusPort: '{{ PrometheusPort }}'
                SQLServerPrometheusExporter:
                  PrometheusPort: '{{ PrometheusPort }}'
                  SQLSecretName: '{{ SQLSecretName }}'
              SubComponentTypeConfigurations:
                - SubComponentType: '{{ SubComponentType }}'
                  SubComponentConfigurationDetails:
                    AlarmMetrics:
                      - null
                    Logs:
                      - null
                    WindowsEvents:
                      - null
                    Processes:
                      - null
            CustomComponentConfiguration: null
      - name: GroupingType
        value: '{{ GroupingType }}'
      - name: AttachMissingPermission
        value: '{{ AttachMissingPermission }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>application</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.applicationinsights.applications
SET PatchDocument = string('{{ {
    "CWEMonitorEnabled": cwe_monitor_enabled,
    "OpsCenterEnabled": ops_center_enabled,
    "OpsItemSNSTopicArn": ops_item_sns_topic_arn,
    "SNSNotificationArn": sns_notification_arn,
    "Tags": tags,
    "CustomComponents": custom_components,
    "LogPatternSets": log_pattern_sets,
    "AutoConfigurationEnabled": auto_configuration_enabled,
    "ComponentMonitoringSettings": component_monitoring_settings,
    "AttachMissingPermission": attach_missing_permission
} | generate_patch_document }}')
WHERE region = '{{ region }}'
AND Identifier = '<ApplicationARN>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.applicationinsights.applications
WHERE Identifier = '<ApplicationARN>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>applications</code> resource, the following permissions are required:

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
applicationinsights:CreateApplication,
applicationinsights:Describe*,
applicationinsights:CreateComponent,
applicationinsights:CreateLogPattern,
applicationinsights:UpdateComponentConfiguration,
applicationinsights:ListComponents,
applicationinsights:TagResource,
ec2:Describe*,
rds:Describe*,
sqs:ListQueues,
elasticloadbalancing:Describe*,
autoscaling:DescribeAutoScalingGroups,
lambda:ListFunctions,
dynamodb:ListTables,
s3:ListAllMyBuckets,
sns:ListTopics,
states:ListStateMachines,
apigateway:GET,
ecs:List*,
ecs:DescribeTaskDefinition,
eks:List*,
fsx:DescribeFileSystems,
route53:List*,
route53resolver:List*,
logs:DescribeLogGroups,
resource-explorer:ListResources,
elasticfilesystem:DescribeFileSystems
```

</TabItem>
<TabItem value="read">

```json
applicationinsights:Describe*,
applicationinsights:List*
```

</TabItem>
<TabItem value="update">

```json
applicationinsights:CreateApplication,
applicationinsights:Describe*,
applicationinsights:UpdateApplication,
applicationinsights:TagResource,
applicationinsights:UntagResource,
applicationinsights:List*,
applicationinsights:CreateComponent,
applicationinsights:DeleteComponent,
applicationinsights:CreateLogPattern,
applicationinsights:DeleteLogPattern,
applicationinsights:UpdateLogPattern,
applicationinsights:UpdateComponentConfiguration
```

</TabItem>
<TabItem value="delete">

```json
applicationinsights:DeleteApplication,
applicationinsights:DescribeApplication
```

</TabItem>
<TabItem value="list">

```json
applicationinsights:List*,
applicationinsights:Describe*
```

</TabItem>
</Tabs>