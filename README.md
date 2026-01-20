# stackql-provider-awscc
Convert AWS CloudFormation Resource Specification to OpenAPI 3.0.0

## Generating OpenAPI3 Specs and StackQL Provider
Follow the steps below to generate OpenAPI specs and a StackQL provider for [AWS Cloud Control](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html) using CloudFormation schemas.

### 1. Download CloudFormation definitions: 

```bash
sh provider-dev/scripts/download-and-preprocess-defs.sh
```

### 2. Generate list of supported Cloud Control resources: 

```bash
sh provider-dev/scripts/get_cc_supported_resources.sh
``` 
*(requires `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` env vars to be set)*

### 3. run `npm install`

### 4. Generate OpenAPI specs and StackQL provider: 

```bash
npm run generate-provider
```
output openapi3 specs (`components/schemas`) are written to `opneapi/src/aws/v00.00.00000/services`

### 5. Test all metadata routes (services, resources, methods) in the provider:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/openapi"
npm run start-server -- --provider awscc --registry $PROVIDER_REGISTRY_ROOT_DIR
npm run test-meta-routes -- awscc --ignore-no-methods
npm run stop-server
```

npm run test-meta-routes -- awscc --ignore-no-methods

### 6. Testing locally with `stackql`
1. ensure the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables are set
2. download the latest `stackql` binary, for example `curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip` for Linux systems
3. run the following:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}/openapi'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}/openapi'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

4. run `stackql` commands, for example 

```sql
select * from awscc.s3.buckets_list_only WHERE region = 'us-east-1';
select bucket_name, region, bucket_encryption from awscc.s3.buckets WHERE region = 'us-east-1' and data__Identifier = 'stackql-trial-bucket-01';
```

### 6. Generate web docs:

```bash
npm run generate-docs
```
output markdown docs are written to `website/docs`

### 7. Test web docs locally

```bash
cd website
# test build
yarn build

# run local dev server
yarn start
```

### 8. Publish web docs to GitHub Pages

Under __Pages__ in the repository, in the __Build and deployment__ section select __GitHub Actions__ as the __Source__. In Netlify DNS create the following records:

| Source Domain | Record Type  | Target |
|---------------|--------------|--------|
| awscc-provider.stackql.io | CNAME | stackql.github.io. |

### Troubleshooting AWS Cloud Control

To troubleshoot AWS Cloud Control API requests (mutation requests), use the following queries:

```sql
select * from aws.cloud_control.resource_requests
where data__ResourceRequestStatusFilter = '{"OperationStatuses": ["FAILED"], "Operations": ["CREATE"]}'
and region = 'ap-southeast-2';
--or
select * from aws.cloud_control.resource_requests
where data__ResourceRequestStatusFilter = '{"OperationStatuses": ["FAILED"], "Operations": ["DELETE"]}'
and region = 'us-east-1';
--or
select * from aws.cloud_control.resource_requests
where data__ResourceRequestStatusFilter = '{"OperationStatuses": ["SUCCESS"], "Operations": ["UPDATE"]}'
and region = 'ap-southeast-2';
```

(replace `region` accordingly)

```sql
select * from aws.cloud_control.resource_request
where data__RequestToken = '54061545-e0a0-4ef0-b213-41fda81d8c24'
and region = 'ap-southeast-2';
```

(replace `region` and `data__RequestToken` accordingly)

### Resolving Identifiers

To resolve resource identifiers you can use tags, such as:

```sql
SELECT 
json_extract(value, '$.ResourceARN') as arn 
FROM awscc.tagging.tagged_resources, json_each(ResourceTagMappingList) 
WHERE 
region = 'us-east-1' 
AND data__TagFilters = '[
  {"Key": "StackName","Values": ["stackql-serverless"]}, 
  {"Key": "StackEnv","Values": ["prd"]}
]' 
AND data__TagsPerPage = 100;
```

### Checking for AWS CC updates

See [here](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/doc-history.html) for newly added or updated Cloud Control resources.

### License

MIT
