---
title: delivery_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_streams
  - kinesisfirehose
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

Creates, updates, deletes or gets a <code>delivery_stream</code> resource or lists <code>delivery_streams</code> in a region

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>delivery_streams</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>Resource Type definition for AWS::KinesisFirehose::DeliveryStream</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.kinesisfirehose.delivery_streams" /></td></tr>
</tbody>
</table>

## Fields
<table>
<tbody>
<tr><th>Name</th><th>Datatype</th><th>Description</th></tr><tr><td><CopyableCode code="delivery_stream_encryption_configuration_input" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="http_endpoint_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="kinesis_stream_source_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="delivery_stream_type" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="iceberg_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="redshift_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="amazonopensearchservice_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="msk_source_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="direct_put_source_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="splunk_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="extended_s3_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="amazon_open_search_serverless_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="elasticsearch_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="snowflake_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="database_source_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="s3_destination_configuration" /></td><td><code>object</code></td><td></td></tr>
<tr><td><CopyableCode code="delivery_stream_name" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="arn" /></td><td><code>string</code></td><td></td></tr>
<tr><td><CopyableCode code="tags" /></td><td><code>array</code></td><td></td></tr>
<tr><td><CopyableCode code="region" /></td><td><code>string</code></td><td>AWS region.</td></tr>

</tbody>
</table>

For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html"><code>AWS::KinesisFirehose::DeliveryStream</code></a>.

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="create_resource" /></td>
    <td><code>INSERT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="delete_resource" /></td>
    <td><code>DELETE</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="update_resource" /></td>
    <td><code>UPDATE</code></td>
    <td><CopyableCode code="data__Identifier, data__PatchDocument, region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
  <tr>
    <td><CopyableCode code="get_resource" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="data__Identifier, region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Gets all <code>delivery_streams</code> in a region.
```sql
SELECT
region,
delivery_stream_encryption_configuration_input,
http_endpoint_destination_configuration,
kinesis_stream_source_configuration,
delivery_stream_type,
iceberg_destination_configuration,
redshift_destination_configuration,
amazonopensearchservice_destination_configuration,
msk_source_configuration,
direct_put_source_configuration,
splunk_destination_configuration,
extended_s3_destination_configuration,
amazon_open_search_serverless_destination_configuration,
elasticsearch_destination_configuration,
snowflake_destination_configuration,
database_source_configuration,
s3_destination_configuration,
delivery_stream_name,
arn,
tags
FROM awscc.kinesisfirehose.delivery_streams
WHERE region = 'us-east-1';
```
Gets all properties from an individual <code>delivery_stream</code>.
```sql
SELECT
region,
delivery_stream_encryption_configuration_input,
http_endpoint_destination_configuration,
kinesis_stream_source_configuration,
delivery_stream_type,
iceberg_destination_configuration,
redshift_destination_configuration,
amazonopensearchservice_destination_configuration,
msk_source_configuration,
direct_put_source_configuration,
splunk_destination_configuration,
extended_s3_destination_configuration,
amazon_open_search_serverless_destination_configuration,
elasticsearch_destination_configuration,
snowflake_destination_configuration,
database_source_configuration,
s3_destination_configuration,
delivery_stream_name,
arn,
tags
FROM awscc.kinesisfirehose.delivery_streams
WHERE region = 'us-east-1' AND data__Identifier = '<DeliveryStreamName>';
```

## `INSERT` example

Use the following StackQL query and manifest file to create a new <code>delivery_stream</code> resource, using [__`stack-deploy`__](https://pypi.org/project/stack-deploy/).

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
INSERT INTO awscc.kinesisfirehose.delivery_streams (
 DeliveryStreamEncryptionConfigurationInput,
 HttpEndpointDestinationConfiguration,
 KinesisStreamSourceConfiguration,
 DeliveryStreamType,
 IcebergDestinationConfiguration,
 RedshiftDestinationConfiguration,
 AmazonopensearchserviceDestinationConfiguration,
 MSKSourceConfiguration,
 DirectPutSourceConfiguration,
 SplunkDestinationConfiguration,
 ExtendedS3DestinationConfiguration,
 AmazonOpenSearchServerlessDestinationConfiguration,
 ElasticsearchDestinationConfiguration,
 SnowflakeDestinationConfiguration,
 DatabaseSourceConfiguration,
 S3DestinationConfiguration,
 DeliveryStreamName,
 Tags,
 region
)
SELECT 
'{{ DeliveryStreamEncryptionConfigurationInput }}',
 '{{ HttpEndpointDestinationConfiguration }}',
 '{{ KinesisStreamSourceConfiguration }}',
 '{{ DeliveryStreamType }}',
 '{{ IcebergDestinationConfiguration }}',
 '{{ RedshiftDestinationConfiguration }}',
 '{{ AmazonopensearchserviceDestinationConfiguration }}',
 '{{ MSKSourceConfiguration }}',
 '{{ DirectPutSourceConfiguration }}',
 '{{ SplunkDestinationConfiguration }}',
 '{{ ExtendedS3DestinationConfiguration }}',
 '{{ AmazonOpenSearchServerlessDestinationConfiguration }}',
 '{{ ElasticsearchDestinationConfiguration }}',
 '{{ SnowflakeDestinationConfiguration }}',
 '{{ DatabaseSourceConfiguration }}',
 '{{ S3DestinationConfiguration }}',
 '{{ DeliveryStreamName }}',
 '{{ Tags }}',
'{{ region }}';
```
</TabItem>
<TabItem value="all">

```sql
/*+ create */
INSERT INTO awscc.kinesisfirehose.delivery_streams (
 DeliveryStreamEncryptionConfigurationInput,
 HttpEndpointDestinationConfiguration,
 KinesisStreamSourceConfiguration,
 DeliveryStreamType,
 IcebergDestinationConfiguration,
 RedshiftDestinationConfiguration,
 AmazonopensearchserviceDestinationConfiguration,
 MSKSourceConfiguration,
 DirectPutSourceConfiguration,
 SplunkDestinationConfiguration,
 ExtendedS3DestinationConfiguration,
 AmazonOpenSearchServerlessDestinationConfiguration,
 ElasticsearchDestinationConfiguration,
 SnowflakeDestinationConfiguration,
 DatabaseSourceConfiguration,
 S3DestinationConfiguration,
 DeliveryStreamName,
 Tags,
 region
)
SELECT 
 '{{ DeliveryStreamEncryptionConfigurationInput }}',
 '{{ HttpEndpointDestinationConfiguration }}',
 '{{ KinesisStreamSourceConfiguration }}',
 '{{ DeliveryStreamType }}',
 '{{ IcebergDestinationConfiguration }}',
 '{{ RedshiftDestinationConfiguration }}',
 '{{ AmazonopensearchserviceDestinationConfiguration }}',
 '{{ MSKSourceConfiguration }}',
 '{{ DirectPutSourceConfiguration }}',
 '{{ SplunkDestinationConfiguration }}',
 '{{ ExtendedS3DestinationConfiguration }}',
 '{{ AmazonOpenSearchServerlessDestinationConfiguration }}',
 '{{ ElasticsearchDestinationConfiguration }}',
 '{{ SnowflakeDestinationConfiguration }}',
 '{{ DatabaseSourceConfiguration }}',
 '{{ S3DestinationConfiguration }}',
 '{{ DeliveryStreamName }}',
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
  - name: delivery_stream
    props:
      - name: DeliveryStreamEncryptionConfigurationInput
        value:
          KeyType: '{{ KeyType }}'
          KeyARN: '{{ KeyARN }}'
      - name: HttpEndpointDestinationConfiguration
        value:
          RequestConfiguration:
            CommonAttributes:
              - AttributeValue: '{{ AttributeValue }}'
                AttributeName: '{{ AttributeName }}'
            ContentEncoding: '{{ ContentEncoding }}'
          S3Configuration:
            ErrorOutputPrefix: '{{ ErrorOutputPrefix }}'
            BucketARN: '{{ BucketARN }}'
            BufferingHints:
              IntervalInSeconds: '{{ IntervalInSeconds }}'
              SizeInMBs: '{{ SizeInMBs }}'
            CompressionFormat: '{{ CompressionFormat }}'
            EncryptionConfiguration:
              KMSEncryptionConfig:
                AWSKMSKeyARN: '{{ AWSKMSKeyARN }}'
              NoEncryptionConfig: '{{ NoEncryptionConfig }}'
            Prefix: '{{ Prefix }}'
            CloudWatchLoggingOptions:
              LogStreamName: '{{ LogStreamName }}'
              Enabled: '{{ Enabled }}'
              LogGroupName: '{{ LogGroupName }}'
            RoleARN: '{{ RoleARN }}'
          BufferingHints: null
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          SecretsManagerConfiguration:
            SecretARN: '{{ SecretARN }}'
            Enabled: '{{ Enabled }}'
            RoleARN: '{{ RoleARN }}'
          EndpointConfiguration:
            AccessKey: '{{ AccessKey }}'
            Url: '{{ Url }}'
            Name: '{{ Name }}'
          ProcessingConfiguration:
            Enabled: '{{ Enabled }}'
            Processors:
              - Type: '{{ Type }}'
                Parameters:
                  - ParameterValue: '{{ ParameterValue }}'
                    ParameterName: '{{ ParameterName }}'
          RoleARN: '{{ RoleARN }}'
          CloudWatchLoggingOptions: null
          S3BackupMode: '{{ S3BackupMode }}'
      - name: KinesisStreamSourceConfiguration
        value:
          KinesisStreamARN: '{{ KinesisStreamARN }}'
          RoleARN: '{{ RoleARN }}'
      - name: DeliveryStreamType
        value: '{{ DeliveryStreamType }}'
      - name: IcebergDestinationConfiguration
        value:
          CatalogConfiguration:
            CatalogArn: '{{ CatalogArn }}'
            WarehouseLocation: '{{ WarehouseLocation }}'
          S3Configuration: null
          DestinationTableConfigurationList:
            - DestinationDatabaseName: '{{ DestinationDatabaseName }}'
              S3ErrorOutputPrefix: '{{ S3ErrorOutputPrefix }}'
              DestinationTableName: '{{ DestinationTableName }}'
              UniqueKeys:
                - '{{ UniqueKeys[0] }}'
              PartitionSpec:
                Identity:
                  - SourceName: '{{ SourceName }}'
          BufferingHints: null
          TableCreationConfiguration:
            Enabled: '{{ Enabled }}'
          RetryOptions: null
          s3BackupMode: '{{ s3BackupMode }}'
          ProcessingConfiguration: null
          SchemaEvolutionConfiguration:
            Enabled: '{{ Enabled }}'
          AppendOnly: '{{ AppendOnly }}'
          CloudWatchLoggingOptions: null
          RoleARN: '{{ RoleARN }}'
      - name: RedshiftDestinationConfiguration
        value:
          S3BackupConfiguration: null
          S3Configuration: null
          Username: '{{ Username }}'
          CopyCommand:
            DataTableName: '{{ DataTableName }}'
            CopyOptions: '{{ CopyOptions }}'
            DataTableColumns: '{{ DataTableColumns }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          SecretsManagerConfiguration: null
          ProcessingConfiguration: null
          CloudWatchLoggingOptions: null
          ClusterJDBCURL: '{{ ClusterJDBCURL }}'
          RoleARN: '{{ RoleARN }}'
          Password: '{{ Password }}'
          S3BackupMode: '{{ S3BackupMode }}'
      - name: AmazonopensearchserviceDestinationConfiguration
        value:
          TypeName: '{{ TypeName }}'
          IndexRotationPeriod: '{{ IndexRotationPeriod }}'
          ProcessingConfiguration: null
          ClusterEndpoint: '{{ ClusterEndpoint }}'
          DomainARN: '{{ DomainARN }}'
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          IndexName: '{{ IndexName }}'
          DocumentIdOptions:
            DefaultDocumentIdFormat: '{{ DefaultDocumentIdFormat }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          VpcConfiguration:
            SubnetIds:
              - '{{ SubnetIds[0] }}'
            SecurityGroupIds:
              - '{{ SecurityGroupIds[0] }}'
            RoleARN: '{{ RoleARN }}'
          CloudWatchLoggingOptions: null
      - name: MSKSourceConfiguration
        value:
          AuthenticationConfiguration:
            Connectivity: '{{ Connectivity }}'
            RoleARN: '{{ RoleARN }}'
          ReadFromTimestamp: '{{ ReadFromTimestamp }}'
          MSKClusterARN: '{{ MSKClusterARN }}'
          TopicName: '{{ TopicName }}'
      - name: DirectPutSourceConfiguration
        value:
          ThroughputHintInMBs: '{{ ThroughputHintInMBs }}'
      - name: SplunkDestinationConfiguration
        value:
          HECEndpoint: '{{ HECEndpoint }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          HECToken: '{{ HECToken }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          HECEndpointType: '{{ HECEndpointType }}'
          SecretsManagerConfiguration: null
          HECAcknowledgmentTimeoutInSeconds: '{{ HECAcknowledgmentTimeoutInSeconds }}'
          ProcessingConfiguration: null
          CloudWatchLoggingOptions: null
          S3BackupMode: '{{ S3BackupMode }}'
      - name: ExtendedS3DestinationConfiguration
        value:
          ErrorOutputPrefix: '{{ ErrorOutputPrefix }}'
          S3BackupConfiguration: null
          BucketARN: '{{ BucketARN }}'
          CompressionFormat: '{{ CompressionFormat }}'
          DataFormatConversionConfiguration:
            InputFormatConfiguration:
              Deserializer:
                HiveJsonSerDe:
                  TimestampFormats:
                    - '{{ TimestampFormats[0] }}'
                OpenXJsonSerDe:
                  ConvertDotsInJsonKeysToUnderscores: '{{ ConvertDotsInJsonKeysToUnderscores }}'
                  ColumnToJsonKeyMappings: {}
                  CaseInsensitive: '{{ CaseInsensitive }}'
            Enabled: '{{ Enabled }}'
            SchemaConfiguration:
              VersionId: '{{ VersionId }}'
              TableName: '{{ TableName }}'
              DatabaseName: '{{ DatabaseName }}'
              Region: '{{ Region }}'
              CatalogId: '{{ CatalogId }}'
              RoleARN: '{{ RoleARN }}'
            OutputFormatConfiguration:
              Serializer:
                OrcSerDe:
                  PaddingTolerance: null
                  Compression: '{{ Compression }}'
                  StripeSizeBytes: '{{ StripeSizeBytes }}'
                  BloomFilterColumns:
                    - '{{ BloomFilterColumns[0] }}'
                  BloomFilterFalsePositiveProbability: null
                  EnablePadding: '{{ EnablePadding }}'
                  FormatVersion: '{{ FormatVersion }}'
                  RowIndexStride: '{{ RowIndexStride }}'
                  BlockSizeBytes: '{{ BlockSizeBytes }}'
                  DictionaryKeyThreshold: null
                ParquetSerDe:
                  Compression: '{{ Compression }}'
                  BlockSizeBytes: '{{ BlockSizeBytes }}'
                  EnableDictionaryCompression: '{{ EnableDictionaryCompression }}'
                  PageSizeBytes: '{{ PageSizeBytes }}'
                  MaxPaddingBytes: '{{ MaxPaddingBytes }}'
                  WriterVersion: '{{ WriterVersion }}'
          EncryptionConfiguration: null
          CustomTimeZone: '{{ CustomTimeZone }}'
          DynamicPartitioningConfiguration:
            Enabled: '{{ Enabled }}'
            RetryOptions: null
          Prefix: '{{ Prefix }}'
          ProcessingConfiguration: null
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          BufferingHints: null
          FileExtension: '{{ FileExtension }}'
          CloudWatchLoggingOptions: null
      - name: AmazonOpenSearchServerlessDestinationConfiguration
        value:
          IndexName: '{{ IndexName }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          CollectionEndpoint: '{{ CollectionEndpoint }}'
          VpcConfiguration: null
          ProcessingConfiguration: null
          CloudWatchLoggingOptions: null
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
      - name: ElasticsearchDestinationConfiguration
        value:
          TypeName: '{{ TypeName }}'
          IndexRotationPeriod: '{{ IndexRotationPeriod }}'
          ProcessingConfiguration: null
          ClusterEndpoint: '{{ ClusterEndpoint }}'
          DomainARN: '{{ DomainARN }}'
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          IndexName: '{{ IndexName }}'
          DocumentIdOptions: null
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          VpcConfiguration: null
          CloudWatchLoggingOptions: null
      - name: SnowflakeDestinationConfiguration
        value:
          PrivateKey: '{{ PrivateKey }}'
          User: '{{ User }}'
          Table: '{{ Table }}'
          SnowflakeVpcConfiguration:
            PrivateLinkVpceId: '{{ PrivateLinkVpceId }}'
          DataLoadingOption: '{{ DataLoadingOption }}'
          Schema: '{{ Schema }}'
          ContentColumnName: '{{ ContentColumnName }}'
          SecretsManagerConfiguration: null
          SnowflakeRoleConfiguration:
            SnowflakeRole: '{{ SnowflakeRole }}'
            Enabled: '{{ Enabled }}'
          ProcessingConfiguration: null
          AccountUrl: '{{ AccountUrl }}'
          RoleARN: '{{ RoleARN }}'
          S3BackupMode: '{{ S3BackupMode }}'
          S3Configuration: null
          BufferingHints:
            IntervalInSeconds: '{{ IntervalInSeconds }}'
            SizeInMBs: '{{ SizeInMBs }}'
          MetaDataColumnName: '{{ MetaDataColumnName }}'
          Database: '{{ Database }}'
          RetryOptions:
            DurationInSeconds: '{{ DurationInSeconds }}'
          KeyPassphrase: '{{ KeyPassphrase }}'
          CloudWatchLoggingOptions: null
      - name: DatabaseSourceConfiguration
        value:
          Digest: '{{ Digest }}'
          Port: '{{ Port }}'
          PublicCertificate: '{{ PublicCertificate }}'
          Columns:
            Exclude:
              - '{{ Exclude[0] }}'
            Include:
              - null
          Type: '{{ Type }}'
          SurrogateKeys:
            - '{{ SurrogateKeys[0] }}'
          Databases:
            Exclude:
              - '{{ Exclude[0] }}'
            Include:
              - null
          Endpoint: '{{ Endpoint }}'
          SSLMode: '{{ SSLMode }}'
          SnapshotWatermarkTable: '{{ SnapshotWatermarkTable }}'
          DatabaseSourceAuthenticationConfiguration:
            SecretsManagerConfiguration: null
          Tables:
            Exclude:
              - null
            Include:
              - null
          DatabaseSourceVPCConfiguration:
            VpcEndpointServiceName: '{{ VpcEndpointServiceName }}'
      - name: S3DestinationConfiguration
        value: null
      - name: DeliveryStreamName
        value: '{{ DeliveryStreamName }}'
      - name: Tags
        value:
          - Value: '{{ Value }}'
            Key: '{{ Key }}'

```
</TabItem>
</Tabs>

## `DELETE` example

```sql
/*+ delete */
DELETE FROM awscc.kinesisfirehose.delivery_streams
WHERE data__Identifier = '<DeliveryStreamName>'
AND region = 'us-east-1';
```

## Permissions

To operate on the <code>delivery_streams</code> resource, the following permissions are required:

### Read
```json
firehose:DescribeDeliveryStream,
firehose:ListTagsForDeliveryStream
```

### Create
```json
firehose:CreateDeliveryStream,
firehose:DescribeDeliveryStream,
iam:GetRole,
iam:PassRole,
kms:CreateGrant,
kms:DescribeKey,
firehose:TagDeliveryStream
```

### Update
```json
firehose:UpdateDestination,
firehose:DescribeDeliveryStream,
firehose:StartDeliveryStreamEncryption,
firehose:StopDeliveryStreamEncryption,
firehose:ListTagsForDeliveryStream,
firehose:TagDeliveryStream,
firehose:UntagDeliveryStream,
kms:CreateGrant,
kms:RevokeGrant,
kms:DescribeKey,
iam:PassRole
```

### List
```json
firehose:ListDeliveryStreams
```

### Delete
```json
firehose:DeleteDeliveryStream,
firehose:DescribeDeliveryStream,
kms:RevokeGrant,
kms:DescribeKey
```
