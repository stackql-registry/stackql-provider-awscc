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
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::Lambda::Function&#96;&#96; resource creates a Lambda function. To create a function, you need a &#91;deployment package&#93;(https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) and an &#91;execution role&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html). The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.<br />You set the package type to &#96;&#96;Image&#96;&#96; if the deployment package is a &#91;container image&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html). For these functions, include the URI of the container image in the ECR registry in the &#91;ImageUri property of the Code property&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri). You do not need to specify the handler and runtime properties. <br />You set the package type to &#96;&#96;Zip&#96;&#96; if the deployment package is a &#91;.zip file archive&#93;(https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip). For these functions, specify the S3 location of your .zip file in the &#96;&#96;Code&#96;&#96; property. Alternatively, for Node.js and Python functions, you can define your function inline in the &#91;ZipFile property of the Code property&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile). In both cases, you must also specify the handler and runtime properties.<br />You can use &#91;code signing&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with &#96;&#96;UpdateFunctionCode&#96;&#96;, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.<br />When you update a &#96;&#96;AWS::Lambda::Function&#96;&#96; resource, CFNshort calls the &#91;UpdateFunctionConfiguration&#93;(https://docs.aws.amazon.com/lambda/latest/api/API&#95;UpdateFunctionConfiguration.html) and &#91;UpdateFunctionCode&#93;(https://docs.aws.amazon.com/lambda/latest/api/API&#95;UpdateFunctionCode.html)LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the &#96;&#96;$LATEST&#96;&#96; version.<br />Note that you configure &#91;provisioned concurrency&#93;(https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) on a &#96;&#96;AWS::Lambda::Version&#96;&#96; or a &#96;&#96;AWS::Lambda::Alias&#96;&#96;.<br />For a complete introduction to Lambda functions, see &#91;What is Lambda?&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html) in the &#42;Lambda developer guide.&#42;</td></tr>
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
    "description": "Set &#96;&#96;Mode&#96;&#96; to &#96;&#96;Active&#96;&#96; to sample and trace a subset of incoming requests with &#91;X-Ray&#93;(https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).",
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
    "description": "For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see &#91;Configuring a Lambda function to access resources in a VPC&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).",
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
    "description": "Sets the runtime management configuration for a function's version. For more information, see &#91;Runtime updates&#93;(https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).",
    "children": [
      {
        "name": "update_runtime_on",
        "type": "string",
        "description": "Specify the runtime update mode.<br />+ &#42;Auto (default)&#42; - Automatically update to the most recent and secure runtime version using a &#91;Two-phase runtime version rollout&#93;(https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.<br />+ &#42;FunctionUpdate&#42; - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.<br />+ &#42;Manual&#42; - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see &#91;Roll back a runtime version&#93;(https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).<br /><br />&#42;Valid Values&#42;: &#96;&#96;Auto&#96;&#96; &#124; &#96;&#96;FunctionUpdate&#96;&#96; &#124; &#96;&#96;Manual&#96;&#96;"
      },
      {
        "name": "runtime_version_arn",
        "type": "string",
        "description": "The ARN of the runtime version you want the function to use.<br />This is only required if you're using the &#42;Manual&#42; runtime update mode."
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
    "description": "The function's &#91;SnapStart&#93;(https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.",
    "children": [
      {
        "name": "apply_on",
        "type": "string",
        "description": "Set &#96;&#96;ApplyOn&#96;&#96; to &#96;&#96;PublishedVersions&#96;&#96; to create a snapshot of the initialized execution environment when you publish a function version."
      }
    ]
  },
  {
    "name": "file_system_configs",
    "type": "array",
    "description": "Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an &#91;AWS::EFS::MountTarget&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) resource, you must also specify a &#96;&#96;DependsOn&#96;&#96; attribute to ensure that the mount target is created or updated before the function.<br />For more information about using the &#96;&#96;DependsOn&#96;&#96; attribute, see &#91;DependsOn Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).",
    "children": [
      {
        "name": "arn",
        "type": "string",
        "description": "The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system."
      },
      {
        "name": "local_mount_path",
        "type": "string",
        "description": "The path where the function can access the file system, starting with &#96;&#96;/mnt/&#96;&#96;."
      }
    ]
  },
  {
    "name": "function_name",
    "type": "string",
    "description": "The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "runtime",
    "type": "string",
    "description": "The identifier of the function's &#91;runtime&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.<br />The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see &#91;Runtime use after deprecation&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).<br />For a list of all currently supported runtimes, see &#91;Supported runtimes&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported)."
  },
  {
    "name": "kms_key_arn",
    "type": "string",
    "description": "The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:<br />+ The function's &#91;environment variables&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).<br />+ The function's &#91;Lambda SnapStart&#93;(https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.<br />+ When used with &#96;&#96;SourceKMSKeyArn&#96;&#96;, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see &#91;Specifying a customer managed key for Lambda&#93;(https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).<br />+ The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see &#91;Function lifecycle&#93;(https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).<br /><br />If you don't provide a customer managed key, Lambda uses an &#91;owned key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an &#91;&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk)."
  },
  {
    "name": "package_type",
    "type": "string",
    "description": "The type of deployment package. Set to &#96;&#96;Image&#96;&#96; for container image and set &#96;&#96;Zip&#96;&#96; for .zip file archive."
  },
  {
    "name": "code_signing_config_arn",
    "type": "string",
    "description": "To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function."
  },
  {
    "name": "layers",
    "type": "array",
    "description": "A list of &#91;function layers&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version."
  },
  {
    "name": "tags",
    "type": "array",
    "description": "A list of &#91;tags&#93;(https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.<br />You must have the &#96;&#96;lambda:TagResource&#96;&#96;, &#96;&#96;lambda:UntagResource&#96;&#96;, and &#96;&#96;lambda:ListTags&#96;&#96; permissions for your &#91;principal&#93;(https://docs.aws.amazon.com/IAM/latest/UserGuide/id&#95;roles&#95;terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.",
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
    "description": "Configuration values that override the container image Dockerfile settings. For more information, see &#91;Container image settings&#93;(https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).",
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
    "description": "The amount of &#91;memory available to the function&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase."
  },
  {
    "name": "dead_letter_config",
    "type": "object",
    "description": "A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see &#91;Dead-letter queues&#93;(https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).",
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
    "description": "The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see &#91;Lambda execution environment&#93;(https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html)."
  },
  {
    "name": "handler",
    "type": "string",
    "description": "The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see &#91;Lambda programming model&#93;(https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html)."
  },
  {
    "name": "snap_start_response",
    "type": "object",
    "description": "The function's &#91;SnapStart&#93;(https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.",
    "children": [
      {
        "name": "optimization_status",
        "type": "string",
        "description": "When you provide a &#91;qualified Amazon Resource Name (ARN)&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using), this response element indicates whether SnapStart is activated for the specified function version."
      },
      {
        "name": "apply_on",
        "type": "string",
        "description": "When set to &#96;&#96;PublishedVersions&#96;&#96;, Lambda creates a snapshot of the execution environment when you publish a function version."
      }
    ]
  },
  {
    "name": "code",
    "type": "object",
    "description": "The code for the function. You can define your function code in multiple ways:<br />+ For .zip deployment packages, you can specify the S3 location of the .zip file in the &#96;&#96;S3Bucket&#96;&#96;, &#96;&#96;S3Key&#96;&#96;, and &#96;&#96;S3ObjectVersion&#96;&#96; properties.<br />+ For .zip deployment packages, you can alternatively define the function code inline in the &#96;&#96;ZipFile&#96;&#96; property. This method works only for Node.js and Python functions.<br />+ For container images, specify the URI of your container image in the ECR registry in the &#96;&#96;ImageUri&#96;&#96; property.",
    "children": [
      {
        "name": "source_kms_key_arn",
        "type": "string",
        "description": "The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an &#91;owned key&#93;(https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk)."
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
        "description": "(Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named &#96;&#96;index&#96;&#96; and zips it to create a &#91;deployment package&#93;(https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the &#96;&#96;Handler&#96;&#96; property, the first part of the handler identifier must be &#96;&#96;index&#96;&#96;. For example, &#96;&#96;index.handler&#96;&#96;.<br />When you specify source code inline for a Node.js function, the &#96;&#96;index&#96;&#96; file that CFN creates uses the extension &#96;&#96;.js&#96;&#96;. This means that LAM treats the file as a CommonJS module. ES modules aren't supported for inline functions.<br />For JSON, you must escape quotes and special characters such as newline (&#96;&#96;\\n&#96;&#96;) with a backslash.<br />If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module (&#91;cfn-response&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See &#91;Using Lambda with CloudFormation&#93;(https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details."
      },
      {
        "name": "s3_key",
        "type": "string",
        "description": "The Amazon S3 key of the deployment package."
      },
      {
        "name": "image_uri",
        "type": "string",
        "description": "URI of a &#91;container image&#93;(https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry."
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
        "description": "Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where &#96;&#96;TRACE&#96;&#96; is the highest level and &#96;&#96;FATAL&#96;&#96; is the lowest."
      },
      {
        "name": "log_group",
        "type": "string",
        "description": "The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named &#96;&#96;/aws/lambda/&lt;function name&gt;&#96;&#96;. To use a different log group, enter an existing log group or enter a new log group name."
      },
      {
        "name": "system_log_level",
        "type": "string",
        "description": "Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where &#96;&#96;DEBUG&#96;&#96; is the highest level and &#96;&#96;WARN&#96;&#96; is the lowest."
      }
    ]
  },
  {
    "name": "recursive_loop",
    "type": "string",
    "description": "The status of your function's recursive loop detection configuration.<br />When this value is set to &#96;&#96;Allow&#96;&#96;and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.<br />When this value is set to &#96;&#96;Terminate&#96;&#96; and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you."
  },
  {
    "name": "environment",
    "type": "object",
    "description": "Environment variables that are accessible from function code during execution.",
    "children": [
      {
        "name": "variables",
        "type": "object",
        "description": "Environment variable key-value pairs. For more information, see &#91;Using Lambda environment variables&#93;(https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).<br />If the value of the environment variable is a time or a duration, enclose the value in quotes."
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
    "description": "The size of the function's &#96;&#96;/tmp&#96;&#96; directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.",
    "children": [
      {
        "name": "size",
        "type": "integer",
        "description": "The size of the function's &#96;&#96;/tmp&#96;&#96; directory."
      }
    ]
  },
  {
    "name": "architectures",
    "type": "array",
    "description": "The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86&#95;64). The default value is &#96;&#96;x86&#95;64&#96;&#96;."
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
    "description": "The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.<br />If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
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
WHERE region = 'us-east-1' AND Identifier = '<FunctionName>';
```
</TabItem>
<TabItem value="list">

Lists all <code>functions</code> in a region.
```sql
SELECT
region,
function_name
FROM awscc.lambda.functions_list_only
WHERE region = 'us-east-1';
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
'{{ Code }}',
 '{{ Role }}',
'{{ region }}';
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
 '{{ Description }}',
 '{{ TracingConfig }}',
 '{{ VpcConfig }}',
 '{{ RuntimeManagementConfig }}',
 '{{ ReservedConcurrentExecutions }}',
 '{{ SnapStart }}',
 '{{ FileSystemConfigs }}',
 '{{ FunctionName }}',
 '{{ Runtime }}',
 '{{ KmsKeyArn }}',
 '{{ PackageType }}',
 '{{ CodeSigningConfigArn }}',
 '{{ Layers }}',
 '{{ Tags }}',
 '{{ ImageConfig }}',
 '{{ MemorySize }}',
 '{{ DeadLetterConfig }}',
 '{{ Timeout }}',
 '{{ Handler }}',
 '{{ Code }}',
 '{{ Role }}',
 '{{ LoggingConfig }}',
 '{{ RecursiveLoop }}',
 '{{ Environment }}',
 '{{ EphemeralStorage }}',
 '{{ Architectures }}',
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
  - name: function
    props:
      - name: Description
        value: '{{ Description }}'
      - name: TracingConfig
        value:
          Mode: '{{ Mode }}'
      - name: VpcConfig
        value:
          Ipv6AllowedForDualStack: '{{ Ipv6AllowedForDualStack }}'
          SecurityGroupIds:
            - '{{ SecurityGroupIds[0] }}'
          SubnetIds:
            - '{{ SubnetIds[0] }}'
      - name: RuntimeManagementConfig
        value:
          UpdateRuntimeOn: '{{ UpdateRuntimeOn }}'
          RuntimeVersionArn: '{{ RuntimeVersionArn }}'
      - name: ReservedConcurrentExecutions
        value: '{{ ReservedConcurrentExecutions }}'
      - name: SnapStart
        value:
          ApplyOn: '{{ ApplyOn }}'
      - name: FileSystemConfigs
        value:
          - Arn: '{{ Arn }}'
            LocalMountPath: '{{ LocalMountPath }}'
      - name: FunctionName
        value: '{{ FunctionName }}'
      - name: Runtime
        value: '{{ Runtime }}'
      - name: KmsKeyArn
        value: '{{ KmsKeyArn }}'
      - name: PackageType
        value: '{{ PackageType }}'
      - name: CodeSigningConfigArn
        value: '{{ CodeSigningConfigArn }}'
      - name: Layers
        value:
          - '{{ Layers[0] }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'
      - name: ImageConfig
        value:
          WorkingDirectory: '{{ WorkingDirectory }}'
          Command:
            - '{{ Command[0] }}'
          EntryPoint:
            - '{{ EntryPoint[0] }}'
      - name: MemorySize
        value: '{{ MemorySize }}'
      - name: DeadLetterConfig
        value:
          TargetArn: '{{ TargetArn }}'
      - name: Timeout
        value: '{{ Timeout }}'
      - name: Handler
        value: '{{ Handler }}'
      - name: Code
        value:
          SourceKMSKeyArn: '{{ SourceKMSKeyArn }}'
          S3ObjectVersion: '{{ S3ObjectVersion }}'
          S3Bucket: '{{ S3Bucket }}'
          ZipFile: '{{ ZipFile }}'
          S3Key: '{{ S3Key }}'
          ImageUri: '{{ ImageUri }}'
      - name: Role
        value: '{{ Role }}'
      - name: LoggingConfig
        value:
          LogFormat: '{{ LogFormat }}'
          ApplicationLogLevel: '{{ ApplicationLogLevel }}'
          LogGroup: '{{ LogGroup }}'
          SystemLogLevel: '{{ SystemLogLevel }}'
      - name: RecursiveLoop
        value: '{{ RecursiveLoop }}'
      - name: Environment
        value:
          Variables: {}
      - name: EphemeralStorage
        value:
          Size: '{{ Size }}'
      - name: Architectures
        value:
          - '{{ Architectures[0] }}'

```
</TabItem>
</Tabs>

## `UPDATE` example

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
WHERE region = '{{ region }}'
AND Identifier = '<FunctionName>';
```


## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.lambda.functions
WHERE Identifier = '<FunctionName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>functions</code> resource, the following permissions are required:

### Read
```json
lambda:GetFunction,
lambda:GetFunctionCodeSigningConfig,
lambda:GetFunctionRecursionConfig
```

### Create
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

### Update
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

### List
```json
lambda:ListFunctions
```

### Delete
```json
lambda:DeleteFunction,
lambda:GetFunction,
ec2:DescribeNetworkInterfaces
```
