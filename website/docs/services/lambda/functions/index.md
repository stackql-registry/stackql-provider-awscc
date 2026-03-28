---
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - lambda
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

Creates, updates, deletes or gets a <code>function</code> resource or lists <code>functions</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>functions</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td><details><summary>The <code>AWS::Lambda::Function</code> resource creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.</summary>You set the package type to <code>Image</code> if the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>. For these functions, include the URI of the container image in the ECR registry in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri">ImageUri property of the Code property</a>. You do not need to specify the handler and runtime properties.<br />You set the package type to <code>Zip</code> if the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. For these functions, specify the S3 location of your .zip file in the <code>Code</code> property. Alternatively, for Node.js and Python functions, you can define your function inline in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile">ZipFile property of the Code property</a>. In both cases, you must also specify the handler and runtime properties.<br />You can use <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing</a> if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <code>UpdateFunctionCode</code>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.<br />When you update a <code>AWS::Lambda::Function</code> resource, CFNshort calls the <a href="https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionConfiguration.html">UpdateFunctionConfiguration</a> and <a href="https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionCode.html">UpdateFunctionCode</a>LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the <code>$LATEST</code> version.<br />Note that you configure <a href="https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html">provisioned concurrency</a> on a <code>AWS::Lambda::Version</code> or a <code>AWS::Lambda::Alias</code>.<br />For a complete introduction to Lambda functions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html">What is Lambda?</a> in the <i>Lambda developer guide.</i></details></td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.lambda.functions" /></td></tr>
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
    "name": "description",
    "type": "string",
    "description": "A description of the function."
  },
  {
    "name": "tracing_config",
    "type": "object",
    "description": "Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html\">X-Ray</a>.",
    "children": [
      {
        "name": "mode",
        "type": "string",
        "description": "The tracing mode."
      }
    ]
  },
  {
    "name": "vpc_config",
    "type": "object",
    "description": "For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html\">Configuring a Lambda function to access resources in a VPC</a>.",
    "children": [
      {
        "name": "ipv6_allowed_for_dual_stack",
        "type": "boolean",
        "description": "Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets."
      },
      {
        "name": "security_group_ids",
        "type": "array",
        "description": "A list of VPC security group IDs."
      },
      {
        "name": "subnet_ids",
        "type": "array",
        "description": "A list of VPC subnet IDs."
      }
    ]
  },
  {
    "name": "runtime_management_config",
    "type": "object",
    "description": "Sets the runtime management configuration for a function's version. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html\">Runtime updates</a>.",
    "children": [
      {
        "name": "update_runtime_on",
        "type": "string",
        "description": "<details><summary>Specify the runtime update mode.</summary>+  <i>Auto (default)</i> - Automatically update to the most recent and secure runtime version using a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase\">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.<br />+  <i>FunctionUpdate</i> - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.<br />+  <i>Manual</i> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback\">Roll back a runtime version</a>.<br /><i>Valid Values</i>: <code>Auto</code> | <code>FunctionUpdate</code> | <code>Manual</code></details>"
      },
      {
        "name": "runtime_version_arn",
        "type": "string",
        "description": "<details><summary>The ARN of the runtime version you want the function to use.</summary>This is only required if you're using the <i>Manual</i> runtime update mode.</details>"
      }
    ]
  },
  {
    "name": "reserved_concurrent_executions",
    "type": "integer",
    "description": "The number of simultaneous executions to reserve for the function."
  },
  {
    "name": "snap_start",
    "type": "object",
    "description": "The function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html\">SnapStart</a> setting.",
    "children": [
      {
        "name": "apply_on",
        "type": "string",
        "description": "Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version."
      }
    ]
  },
  {
    "name": "file_system_configs",
    "type": "array",
    "description": "<details><summary>Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html\">AWS::EFS::MountTarget</a> resource, you must also specify a <code>DependsOn</code> attribute to ensure that the mount target is created or updated before the function.</summary>For more information about using the <code>DependsOn</code> attribute, see <a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html\">DependsOn Attribute</a>.</details>",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system."
      },
      {
        "name": "local_mount_path",
        "type": "string",
        "description": "The path where the function can access the file system, starting with <code>/mnt/</code>."
      }
    ]
  },
  {
    "name": "function_name",
    "type": "string",
    "description": "<details><summary>The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.</summary>If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "runtime",
    "type": "string",
    "description": "<details><summary>The identifier of the function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html\">runtime</a>. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.</summary>The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels\">Runtime use after deprecation</a>.<br />For a list of all currently supported runtimes, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported\">Supported runtimes</a>.</details>"
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "<details><summary>The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:</summary>+  The function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption\">environment variables</a>.<br />+  The function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html\">Lambda SnapStart</a> snapshots.<br />+  When used with <code>SourceKMSKeyArn</code>, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption\">Specifying a customer managed key for Lambda</a>.<br />+  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle\">Function lifecycle</a>.<br />If you don't provide a customer managed key, Lambda uses an <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk\">owned key</a> or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).</details>"
  },
  {
    "name": "package_type",
    "type": "string",
    "description": "The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive."
  },
  {
    "name": "code_signing_config_arn",
    "type": "string",
    "description": "To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function."
  },
  {
    "name": "layers",
    "type": "array",
    "description": "A list of <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html\">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "<details><summary>A list of <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/tagging.html\">tags</a> to apply to the function.</summary>You must have the <code>lambda:TagResource</code>, <code>lambda:UntagResource</code>, and <code>lambda:ListTags</code> permissions for your <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html\">principal</a> to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.</details>",
    "children": [
      {
        "name": "value",
        "type": "string",
        "description": "The value for this tag."
      },
      {
        "name": "key",
        "type": "string",
        "description": "The key for this tag."
      }
    ]
  },
  {
    "name": "image_config",
    "type": "object",
    "description": "Configuration values that override the container image Dockerfile settings. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms\">Container image settings</a>.",
    "children": [
      {
        "name": "working_directory",
        "type": "string",
        "description": "Specifies the working directory. The length of the directory string cannot exceed 1,000 characters."
      },
      {
        "name": "command",
        "type": "array",
        "description": "Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list."
      },
      {
        "name": "entry_point",
        "type": "array",
        "description": "Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list."
      }
    ]
  },
  {
    "name": "memory_size",
    "type": "integer",
    "description": "The amount of <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console\">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase."
  },
  {
    "name": "dead_letter_config",
    "type": "object",
    "description": "A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq\">Dead-letter queues</a>.",
    "children": [
      {
        "name": "target_arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic."
      }
    ]
  },
  {
    "name": "timeout",
    "type": "integer",
    "description": "The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html\">Lambda execution environment</a>."
  },
  {
    "name": "handler",
    "type": "string",
    "description": "The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html\">Lambda programming model</a>."
  },
  {
    "name": "snap_start_response",
    "type": "object",
    "description": "The function's <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html\">SnapStart</a> setting.",
    "children": [
      {
        "name": "optimization_status",
        "type": "string",
        "description": "When you provide a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using\">qualified Amazon Resource Name (ARN)</a>, this response element indicates whether SnapStart is activated for the specified function version."
      },
      {
        "name": "apply_on",
        "type": "string",
        "description": "When set to <code>PublishedVersions</code>, Lambda creates a snapshot of the execution environment when you publish a function version."
      }
    ]
  },
  {
    "name": "code",
    "type": "object",
    "description": "<details><summary>The code for the function. You can define your function code in multiple ways:</summary>+  For .zip deployment packages, you can specify the S3 location of the .zip file in the <code>S3Bucket</code>, <code>S3Key</code>, and <code>S3ObjectVersion</code> properties.<br />+  For .zip deployment packages, you can alternatively define the function code inline in the <code>ZipFile</code> property. This method works only for Node.js and Python functions.<br />+  For container images, specify the URI of your container image in the ECR registry in the <code>ImageUri</code> property.</details>",
    "children": [
      {
        "name": "source_kms_key_arn",
        "type": "string",
        "description": "The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk\">owned key</a>."
      },
      {
        "name": "s3_object_version",
        "type": "string",
        "description": "For versioned objects, the version of the deployment package object to use."
      },
      {
        "name": "s3_bucket",
        "type": "string",
        "description": "An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account."
      },
      {
        "name": "zip_file",
        "type": "string",
        "description": "<details><summary>(Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named <code>index</code> and zips it to create a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html\">deployment package</a>. This zip file cannot exceed 4MB. For the <code>Handler</code> property, the first part of the handler identifier must be <code>index</code>. For example, <code>index.handler</code>.</summary>When you specify source code inline for a Node.js function, the <code>index</code> file that CFN creates uses the extension <code>.js</code>. This means that LAM treats the file as a CommonJS module. ES modules aren't supported for inline functions.<br />For JSON, you must escape quotes and special characters such as newline (<code>\\n</code>) with a backslash.<br />If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module (<a href=\"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html\">cfn-response</a>) that simplifies sending responses. See <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html\">Using Lambda with CloudFormation</a> for details.</details>"
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": "The Amazon S3 key of the deployment package."
      },
      {
        "name": "image_uri",
        "type": "string",
        "description": "URI of a <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html\">container image</a> in the Amazon ECR registry."
      }
    ]
  },
  {
    "name": "role",
    "type": "string",
    "description": "The Amazon Resource Name (ARN) of the function's execution role."
  },
  {
    "name": "logging_config",
    "type": "object",
    "description": "The function's Amazon CloudWatch Logs configuration settings.",
    "children": [
      {
        "name": "log_format",
        "type": "string",
        "description": "The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON."
      },
      {
        "name": "application_log_level",
        "type": "string",
        "description": "Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where <code>TRACE</code> is the highest level and <code>FATAL</code> is the lowest."
      },
      {
        "name": "log_group",
        "type": "string",
        "description": "The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named <code>/aws/lambda/<function name></code>. To use a different log group, enter an existing log group or enter a new log group name."
      },
      {
        "name": "system_log_level",
        "type": "string",
        "description": "Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where <code>DEBUG</code> is the highest level and <code>WARN</code> is the lowest."
      }
    ]
  },
  {
    "name": "recursive_loop",
    "type": "string",
    "description": "<details><summary>The status of your function's recursive loop detection configuration.</summary>When this value is set to <code>Allow</code>and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.<br />When this value is set to <code>Terminate</code> and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.</details>"
  },
  {
    "name": "environment",
    "type": "object",
    "description": "Environment variables that are accessible from function code during execution.",
    "children": [
      {
        "name": "variables",
        "type": "object",
        "description": "<details><summary>Environment variable key-value pairs. For more information, see <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html\">Using Lambda environment variables</a>.</summary>If the value of the environment variable is a time or a duration, enclose the value in quotes.</details>"
      }
    ]
  },
  {
    "name": "arn",
    "type": "string",
    "description": ""
  },
  {
    "name": "ephemeral_storage",
    "type": "object",
    "description": "The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.",
    "children": [
      {
        "name": "size",
        "type": "integer",
        "description": "The size of the function's <code>/tmp</code> directory."
      }
    ]
  },
  {
    "name": "architectures",
    "type": "array",
    "description": "The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>."
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
    "name": "function_name",
    "type": "string",
    "description": "<details><summary>The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.</summary>If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.</details>"
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />
</TabItem>
</Tabs>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html"><code>AWS::Lambda::Function</code></a>.

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
    <td><code>functions</code></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="Code, Role, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>functions</code></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>functions</code></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="Identifier, PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>functions_list_only</code></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>functions</code></td>
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

Gets all properties from an individual <code>function</code>.
```sql
SELECT
  region,
  description,
  tracing_config,
  vpc_config,
  runtime_management_config,
  reserved_concurrent_executions,
  snap_start,
  file_system_configs,
  function_name,
  runtime,
  kms_key_arn,
  package_type,
  code_signing_config_arn,
  layers,
  tags,
  image_config,
  memory_size,
  dead_letter_config,
  timeout,
  handler,
  snap_start_response,
  code,
  role,
  logging_config,
  recursive_loop,
  environment,
  arn,
  ephemeral_storage,
  architectures
FROM awscc.lambda.functions
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ function_name }}';
```
</TabItem>
<TabItem value="list">

Lists all <code>functions</code> in a region.
```sql
SELECT
  region,
  function_name
FROM awscc.lambda.functions_list_only
WHERE
  region = '{{ region }}';
```
</TabItem>
</Tabs>

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>function</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.lambda.functions (
  Code,
  Role,
  region
)
SELECT
  '{{ code }}',
  '{{ role }}',
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
INSERT INTO awscc.lambda.functions (
  Description,
  TracingConfig,
  VpcConfig,
  RuntimeManagementConfig,
  ReservedConcurrentExecutions,
  SnapStart,
  FileSystemConfigs,
  FunctionName,
  Runtime,
  KmsKeyArn,
  PackageType,
  CodeSigningConfigArn,
  Layers,
  Tags,
  ImageConfig,
  MemorySize,
  DeadLetterConfig,
  Timeout,
  Handler,
  Code,
  Role,
  LoggingConfig,
  RecursiveLoop,
  Environment,
  EphemeralStorage,
  Architectures,
  region
)
SELECT
  '{{ description }}',
  '{{ tracing_config }}',
  '{{ vpc_config }}',
  '{{ runtime_management_config }}',
  '{{ reserved_concurrent_executions }}',
  '{{ snap_start }}',
  '{{ file_system_configs }}',
  '{{ function_name }}',
  '{{ runtime }}',
  '{{ kms_key_arn }}',
  '{{ package_type }}',
  '{{ code_signing_config_arn }}',
  '{{ layers }}',
  '{{ tags }}',
  '{{ image_config }}',
  '{{ memory_size }}',
  '{{ dead_letter_config }}',
  '{{ timeout }}',
  '{{ handler }}',
  '{{ code }}',
  '{{ role }}',
  '{{ logging_config }}',
  '{{ recursive_loop }}',
  '{{ environment }}',
  '{{ ephemeral_storage }}',
  '{{ architectures }}',
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
  - name: function
    props:
      - name: description
        value: '{{ description }}'
      - name: tracing_config
        value:
          mode: '{{ mode }}'
      - name: vpc_config
        value:
          ipv6_allowed_for_dual_stack: '{{ ipv6_allowed_for_dual_stack }}'
          security_group_ids:
            - '{{ security_group_ids[0] }}'
          subnet_ids:
            - '{{ subnet_ids[0] }}'
      - name: runtime_management_config
        value:
          update_runtime_on: '{{ update_runtime_on }}'
          runtime_version_arn: '{{ runtime_version_arn }}'
      - name: reserved_concurrent_executions
        value: '{{ reserved_concurrent_executions }}'
      - name: snap_start
        value:
          apply_on: '{{ apply_on }}'
      - name: file_system_configs
        value:
          - arn: '{{ arn }}'
            local_mount_path: '{{ local_mount_path }}'
      - name: function_name
        value: '{{ function_name }}'
      - name: runtime
        value: '{{ runtime }}'
      - name: kms_key_arn
        value: '{{ kms_key_arn }}'
      - name: package_type
        value: '{{ package_type }}'
      - name: code_signing_config_arn
        value: '{{ code_signing_config_arn }}'
      - name: layers
        value:
          - '{{ layers[0] }}'
      - name: tags
        value:
          - value: '{{ value }}'
            key: '{{ key }}'
      - name: image_config
        value:
          working_directory: '{{ working_directory }}'
          command:
            - '{{ command[0] }}'
          entry_point:
            - '{{ entry_point[0] }}'
      - name: memory_size
        value: '{{ memory_size }}'
      - name: dead_letter_config
        value:
          target_arn: '{{ target_arn }}'
      - name: timeout
        value: '{{ timeout }}'
      - name: handler
        value: '{{ handler }}'
      - name: code
        value:
          source_kms_key_arn: '{{ source_kms_key_arn }}'
          s3_object_version: '{{ s3_object_version }}'
          s3_bucket: '{{ s3_bucket }}'
          zip_file: '{{ zip_file }}'
          s3_key: '{{ s3_key }}'
          image_uri: '{{ image_uri }}'
      - name: role
        value: '{{ role }}'
      - name: logging_config
        value:
          log_format: '{{ log_format }}'
          application_log_level: '{{ application_log_level }}'
          log_group: '{{ log_group }}'
          system_log_level: '{{ system_log_level }}'
      - name: recursive_loop
        value: '{{ recursive_loop }}'
      - name: environment
        value:
          variables: {}
      - name: ephemeral_storage
        value:
          size: '{{ size }}'
      - name: architectures
        value:
          - '{{ architectures[0] }}'`}</CodeBlock>

</TabItem>
</Tabs>

## `UPDATE` example

Use the following StackQL query and manifest file to update a <code>function</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

```sql
/*+ update */
UPDATE awscc.lambda.functions
SET PatchDocument = string('{{ {
    "Description": description,
    "TracingConfig": tracing_config,
    "VpcConfig": vpc_config,
    "RuntimeManagementConfig": runtime_management_config,
    "ReservedConcurrentExecutions": reserved_concurrent_executions,
    "SnapStart": snap_start,
    "FileSystemConfigs": file_system_configs,
    "Runtime": runtime,
    "KmsKeyArn": kms_key_arn,
    "CodeSigningConfigArn": code_signing_config_arn,
    "Layers": layers,
    "Tags": tags,
    "ImageConfig": image_config,
    "MemorySize": memory_size,
    "DeadLetterConfig": dead_letter_config,
    "Timeout": timeout,
    "Handler": handler,
    "Code": code,
    "Role": role,
    "LoggingConfig": logging_config,
    "RecursiveLoop": recursive_loop,
    "Environment": environment,
    "EphemeralStorage": ephemeral_storage,
    "Architectures": architectures
} | generate_patch_document }}')
WHERE
  region = '{{ region }}' AND
  Identifier = '{{ function_name }}'
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
DELETE FROM awscc.lambda.functions
WHERE
  Identifier = '{{ function_name }}' AND
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

To operate on the <code>functions</code> resource, the following permissions are required:

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
lambda:GetFunction,
lambda:GetFunctionCodeSigningConfig,
lambda:GetFunctionRecursionConfig
```

</TabItem>
<TabItem value="create">

```json
lambda:CreateFunction,
lambda:GetFunction,
lambda:PutFunctionConcurrency,
iam:PassRole,
s3:GetObject,
s3:GetObjectVersion,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
elasticfilesystem:DescribeMountTargets,
kms:CreateGrant,
kms:Decrypt,
kms:Encrypt,
kms:GenerateDataKey,
lambda:GetCodeSigningConfig,
lambda:GetFunctionCodeSigningConfig,
lambda:GetLayerVersion,
lambda:GetRuntimeManagementConfig,
lambda:PutRuntimeManagementConfig,
lambda:TagResource,
lambda:PutFunctionRecursionConfig,
lambda:GetFunctionRecursionConfig
```

</TabItem>
<TabItem value="update">

```json
lambda:DeleteFunctionConcurrency,
lambda:GetFunction,
lambda:PutFunctionConcurrency,
lambda:TagResource,
lambda:UntagResource,
lambda:UpdateFunctionConfiguration,
lambda:UpdateFunctionCode,
iam:PassRole,
s3:GetObject,
s3:GetObjectVersion,
ec2:DescribeSecurityGroups,
ec2:DescribeSubnets,
ec2:DescribeVpcs,
elasticfilesystem:DescribeMountTargets,
kms:CreateGrant,
kms:Decrypt,
kms:GenerateDataKey,
lambda:GetRuntimeManagementConfig,
lambda:PutRuntimeManagementConfig,
lambda:PutFunctionCodeSigningConfig,
lambda:DeleteFunctionCodeSigningConfig,
lambda:GetCodeSigningConfig,
lambda:GetFunctionCodeSigningConfig,
lambda:PutFunctionRecursionConfig,
lambda:GetFunctionRecursionConfig
```

</TabItem>
<TabItem value="list">

```json
lambda:ListFunctions
```

</TabItem>
<TabItem value="delete">

```json
lambda:DeleteFunction,
lambda:GetFunction,
ec2:DescribeNetworkInterfaces
```

</TabItem>
</Tabs>