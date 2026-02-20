---
title: awscc
hide_title: false
hide_table_of_contents: false
keywords:
  - awscc
  - aws
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage AWS Cloud Control resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

AWS Cloud Control API provider for StackQL.

:::info Provider Summary

<div class="row">
<div class="providerDocColumn">
<span>total services:&nbsp;<b>237</b></span><br />
<span>total resources:&nbsp;<b>1233</b></span><br />
</div>
</div>

:::

## Authentication

This provider uses AWS credentials for authentication. Configure your credentials using one of the following methods:

- Environment variables: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
- AWS credentials file: `~/.aws/credentials`
- IAM roles for EC2 instances
- AWS STS temporary credentials

For more information on AWS authentication, see the [AWS documentation](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html).

## Regions

Resources are available in all AWS regions. Use the `region` parameter to specify the target region for your operations.

## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/accessanalyzer/">accessanalyzer</a><br />
<a href="/services/acmpca/">acmpca</a><br />
<a href="/services/aiops/">aiops</a><br />
<a href="/services/amazonmq/">amazonmq</a><br />
<a href="/services/amplify/">amplify</a><br />
<a href="/services/amplifyuibuilder/">amplifyuibuilder</a><br />
<a href="/services/apigateway/">apigateway</a><br />
<a href="/services/apigatewayv2/">apigatewayv2</a><br />
<a href="/services/appconfig/">appconfig</a><br />
<a href="/services/appflow/">appflow</a><br />
<a href="/services/appintegrations/">appintegrations</a><br />
<a href="/services/applicationautoscaling/">applicationautoscaling</a><br />
<a href="/services/applicationinsights/">applicationinsights</a><br />
<a href="/services/applicationsignals/">applicationsignals</a><br />
<a href="/services/apprunner/">apprunner</a><br />
<a href="/services/appstream/">appstream</a><br />
<a href="/services/appsync/">appsync</a><br />
<a href="/services/apptest/">apptest</a><br />
<a href="/services/aps/">aps</a><br />
<a href="/services/arcregionswitch/">arcregionswitch</a><br />
<a href="/services/arczonalshift/">arczonalshift</a><br />
<a href="/services/athena/">athena</a><br />
<a href="/services/auditmanager/">auditmanager</a><br />
<a href="/services/autoscaling/">autoscaling</a><br />
<a href="/services/b2bi/">b2bi</a><br />
<a href="/services/backup/">backup</a><br />
<a href="/services/backupgateway/">backupgateway</a><br />
<a href="/services/batch/">batch</a><br />
<a href="/services/bcmdataexports/">bcmdataexports</a><br />
<a href="/services/bedrock/">bedrock</a><br />
<a href="/services/billing/">billing</a><br />
<a href="/services/billingconductor/">billingconductor</a><br />
<a href="/services/budgets/">budgets</a><br />
<a href="/services/cassandra/">cassandra</a><br />
<a href="/services/ce/">ce</a><br />
<a href="/services/certificatemanager/">certificatemanager</a><br />
<a href="/services/chatbot/">chatbot</a><br />
<a href="/services/cleanrooms/">cleanrooms</a><br />
<a href="/services/cleanroomsml/">cleanroomsml</a><br />
<a href="/services/cloud_control/">cloud_control</a><br />
<a href="/services/cloudformation/">cloudformation</a><br />
<a href="/services/cloudfront/">cloudfront</a><br />
<a href="/services/cloudtrail/">cloudtrail</a><br />
<a href="/services/cloudwatch/">cloudwatch</a><br />
<a href="/services/codeartifact/">codeartifact</a><br />
<a href="/services/codebuild/">codebuild</a><br />
<a href="/services/codeconnections/">codeconnections</a><br />
<a href="/services/codedeploy/">codedeploy</a><br />
<a href="/services/codeguruprofiler/">codeguruprofiler</a><br />
<a href="/services/codegurureviewer/">codegurureviewer</a><br />
<a href="/services/codepipeline/">codepipeline</a><br />
<a href="/services/codestarconnections/">codestarconnections</a><br />
<a href="/services/codestarnotifications/">codestarnotifications</a><br />
<a href="/services/cognito/">cognito</a><br />
<a href="/services/comprehend/">comprehend</a><br />
<a href="/services/config/">config</a><br />
<a href="/services/connect/">connect</a><br />
<a href="/services/connectcampaigns/">connectcampaigns</a><br />
<a href="/services/connectcampaignsv2/">connectcampaignsv2</a><br />
<a href="/services/controltower/">controltower</a><br />
<a href="/services/cur/">cur</a><br />
<a href="/services/customerprofiles/">customerprofiles</a><br />
<a href="/services/databrew/">databrew</a><br />
<a href="/services/datapipeline/">datapipeline</a><br />
<a href="/services/datasync/">datasync</a><br />
<a href="/services/datazone/">datazone</a><br />
<a href="/services/deadline/">deadline</a><br />
<a href="/services/detective/">detective</a><br />
<a href="/services/devopsguru/">devopsguru</a><br />
<a href="/services/directoryservice/">directoryservice</a><br />
<a href="/services/dms/">dms</a><br />
<a href="/services/docdbelastic/">docdbelastic</a><br />
<a href="/services/dsql/">dsql</a><br />
<a href="/services/dynamodb/">dynamodb</a><br />
<a href="/services/ec2/">ec2</a><br />
<a href="/services/ecr/">ecr</a><br />
<a href="/services/ecs/">ecs</a><br />
<a href="/services/efs/">efs</a><br />
<a href="/services/eks/">eks</a><br />
<a href="/services/elasticache/">elasticache</a><br />
<a href="/services/elasticbeanstalk/">elasticbeanstalk</a><br />
<a href="/services/elasticloadbalancingv2/">elasticloadbalancingv2</a><br />
<a href="/services/emr/">emr</a><br />
<a href="/services/emrcontainers/">emrcontainers</a><br />
<a href="/services/emrserverless/">emrserverless</a><br />
<a href="/services/entityresolution/">entityresolution</a><br />
<a href="/services/events/">events</a><br />
<a href="/services/eventschemas/">eventschemas</a><br />
<a href="/services/evidently/">evidently</a><br />
<a href="/services/evs/">evs</a><br />
<a href="/services/finspace/">finspace</a><br />
<a href="/services/fis/">fis</a><br />
<a href="/services/fms/">fms</a><br />
<a href="/services/forecast/">forecast</a><br />
<a href="/services/frauddetector/">frauddetector</a><br />
<a href="/services/fsx/">fsx</a><br />
<a href="/services/gamelift/">gamelift</a><br />
<a href="/services/globalaccelerator/">globalaccelerator</a><br />
<a href="/services/glue/">glue</a><br />
<a href="/services/grafana/">grafana</a><br />
<a href="/services/greengrassv2/">greengrassv2</a><br />
<a href="/services/groundstation/">groundstation</a><br />
<a href="/services/guardduty/">guardduty</a><br />
<a href="/services/healthimaging/">healthimaging</a><br />
<a href="/services/healthlake/">healthlake</a><br />
<a href="/services/iam/">iam</a><br />
<a href="/services/identitystore/">identitystore</a><br />
<a href="/services/imagebuilder/">imagebuilder</a><br />
<a href="/services/inspector/">inspector</a><br />
<a href="/services/inspectorv2/">inspectorv2</a><br />
<a href="/services/internetmonitor/">internetmonitor</a><br />
<a href="/services/invoicing/">invoicing</a><br />
<a href="/services/iot/">iot</a><br />
<a href="/services/iotanalytics/">iotanalytics</a><br />
<a href="/services/iotcoredeviceadvisor/">iotcoredeviceadvisor</a><br />
<a href="/services/iotevents/">iotevents</a><br />
<a href="/services/iotfleetwise/">iotfleetwise</a><br />
<a href="/services/iotsitewise/">iotsitewise</a><br />
<a href="/services/iottwinmaker/">iottwinmaker</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/iotwireless/">iotwireless</a><br />
<a href="/services/ivs/">ivs</a><br />
<a href="/services/ivschat/">ivschat</a><br />
<a href="/services/kafkaconnect/">kafkaconnect</a><br />
<a href="/services/kendra/">kendra</a><br />
<a href="/services/kendraranking/">kendraranking</a><br />
<a href="/services/kinesis/">kinesis</a><br />
<a href="/services/kinesisanalyticsv2/">kinesisanalyticsv2</a><br />
<a href="/services/kinesisfirehose/">kinesisfirehose</a><br />
<a href="/services/kinesisvideo/">kinesisvideo</a><br />
<a href="/services/kms/">kms</a><br />
<a href="/services/lakeformation/">lakeformation</a><br />
<a href="/services/lambda/">lambda</a><br />
<a href="/services/launchwizard/">launchwizard</a><br />
<a href="/services/lex/">lex</a><br />
<a href="/services/licensemanager/">licensemanager</a><br />
<a href="/services/lightsail/">lightsail</a><br />
<a href="/services/location/">location</a><br />
<a href="/services/logs/">logs</a><br />
<a href="/services/lookoutequipment/">lookoutequipment</a><br />
<a href="/services/lookoutvision/">lookoutvision</a><br />
<a href="/services/m2/">m2</a><br />
<a href="/services/macie/">macie</a><br />
<a href="/services/managedblockchain/">managedblockchain</a><br />
<a href="/services/mediaconnect/">mediaconnect</a><br />
<a href="/services/medialive/">medialive</a><br />
<a href="/services/mediapackage/">mediapackage</a><br />
<a href="/services/mediapackagev2/">mediapackagev2</a><br />
<a href="/services/mediatailor/">mediatailor</a><br />
<a href="/services/memorydb/">memorydb</a><br />
<a href="/services/mpa/">mpa</a><br />
<a href="/services/msk/">msk</a><br />
<a href="/services/mwaa/">mwaa</a><br />
<a href="/services/neptune/">neptune</a><br />
<a href="/services/neptunegraph/">neptunegraph</a><br />
<a href="/services/networkfirewall/">networkfirewall</a><br />
<a href="/services/networkmanager/">networkmanager</a><br />
<a href="/services/notifications/">notifications</a><br />
<a href="/services/notificationscontacts/">notificationscontacts</a><br />
<a href="/services/oam/">oam</a><br />
<a href="/services/observabilityadmin/">observabilityadmin</a><br />
<a href="/services/odb/">odb</a><br />
<a href="/services/omics/">omics</a><br />
<a href="/services/opensearchserverless/">opensearchserverless</a><br />
<a href="/services/opensearchservice/">opensearchservice</a><br />
<a href="/services/organizations/">organizations</a><br />
<a href="/services/osis/">osis</a><br />
<a href="/services/panorama/">panorama</a><br />
<a href="/services/paymentcryptography/">paymentcryptography</a><br />
<a href="/services/pcaconnectorad/">pcaconnectorad</a><br />
<a href="/services/pcaconnectorscep/">pcaconnectorscep</a><br />
<a href="/services/pcs/">pcs</a><br />
<a href="/services/personalize/">personalize</a><br />
<a href="/services/pinpoint/">pinpoint</a><br />
<a href="/services/pipes/">pipes</a><br />
<a href="/services/proton/">proton</a><br />
<a href="/services/qbusiness/">qbusiness</a><br />
<a href="/services/qldb/">qldb</a><br />
<a href="/services/quicksight/">quicksight</a><br />
<a href="/services/ram/">ram</a><br />
<a href="/services/rbin/">rbin</a><br />
<a href="/services/rds/">rds</a><br />
<a href="/services/redshift/">redshift</a><br />
<a href="/services/redshiftserverless/">redshiftserverless</a><br />
<a href="/services/refactorspaces/">refactorspaces</a><br />
<a href="/services/rekognition/">rekognition</a><br />
<a href="/services/resiliencehub/">resiliencehub</a><br />
<a href="/services/resourceexplorer2/">resourceexplorer2</a><br />
<a href="/services/resourcegroups/">resourcegroups</a><br />
<a href="/services/robomaker/">robomaker</a><br />
<a href="/services/rolesanywhere/">rolesanywhere</a><br />
<a href="/services/route53/">route53</a><br />
<a href="/services/route53profiles/">route53profiles</a><br />
<a href="/services/route53recoverycontrol/">route53recoverycontrol</a><br />
<a href="/services/route53recoveryreadiness/">route53recoveryreadiness</a><br />
<a href="/services/route53resolver/">route53resolver</a><br />
<a href="/services/rum/">rum</a><br />
<a href="/services/s3/">s3</a><br />
<a href="/services/s3express/">s3express</a><br />
<a href="/services/s3objectlambda/">s3objectlambda</a><br />
<a href="/services/s3outposts/">s3outposts</a><br />
<a href="/services/s3tables/">s3tables</a><br />
<a href="/services/sagemaker/">sagemaker</a><br />
<a href="/services/scheduler/">scheduler</a><br />
<a href="/services/secretsmanager/">secretsmanager</a><br />
<a href="/services/securityhub/">securityhub</a><br />
<a href="/services/securitylake/">securitylake</a><br />
<a href="/services/servicecatalog/">servicecatalog</a><br />
<a href="/services/servicecatalogappregistry/">servicecatalogappregistry</a><br />
<a href="/services/ses/">ses</a><br />
<a href="/services/shield/">shield</a><br />
<a href="/services/signer/">signer</a><br />
<a href="/services/simspaceweaver/">simspaceweaver</a><br />
<a href="/services/sns/">sns</a><br />
<a href="/services/sqs/">sqs</a><br />
<a href="/services/ssm/">ssm</a><br />
<a href="/services/ssmcontacts/">ssmcontacts</a><br />
<a href="/services/ssmguiconnect/">ssmguiconnect</a><br />
<a href="/services/ssmincidents/">ssmincidents</a><br />
<a href="/services/ssmquicksetup/">ssmquicksetup</a><br />
<a href="/services/sso/">sso</a><br />
<a href="/services/stepfunctions/">stepfunctions</a><br />
<a href="/services/supportapp/">supportapp</a><br />
<a href="/services/synthetics/">synthetics</a><br />
<a href="/services/systemsmanagersap/">systemsmanagersap</a><br />
<a href="/services/tagging/">tagging</a><br />
<a href="/services/timestream/">timestream</a><br />
<a href="/services/transfer/">transfer</a><br />
<a href="/services/verifiedpermissions/">verifiedpermissions</a><br />
<a href="/services/voiceid/">voiceid</a><br />
<a href="/services/vpclattice/">vpclattice</a><br />
<a href="/services/wafv2/">wafv2</a><br />
<a href="/services/wisdom/">wisdom</a><br />
<a href="/services/workspaces/">workspaces</a><br />
<a href="/services/workspacesinstances/">workspacesinstances</a><br />
<a href="/services/workspacesthinclient/">workspacesthinclient</a><br />
<a href="/services/workspacesweb/">workspacesweb</a><br />
<a href="/services/xray/">xray</a><br />
</div>
</div>
