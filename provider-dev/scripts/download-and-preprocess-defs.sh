#!/bin/bash

# Step 1: Delete all files in the `../downloaded` directory
find ../downloaded -type f ! -name '.gitignore' -exec rm -f {} +
echo "Deleted all files in ../downloaded directory."

# Step 2: Download and unzip AWS CloudFormation Resource Specification (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html)
# Placeholder URL - replace with actual URL of the zip file
SPEC_URL="https://schema.cloudformation.us-east-1.amazonaws.com/CloudformationSchema.zip"
curl -O $SPEC_URL
ZIP_FILE=$(basename $SPEC_URL)
unzip $ZIP_FILE -d ../downloaded
echo "Downloaded and unzipped the AWS CloudFormation Resource Specification."

# Steps 3: Preprocess specs in the `../downloaded` directory
echo "replacing \"type\" : [ \"string\", \"object\" ] with \"type\" : \"object\""
sed -i 's/"type" : \[ "string", "object" \]/"type" : "object"/g' ../downloaded/*

echo "replacing \"type\" : [ \"object\", \"string\" ] with \"type\" : \"object\""
sed -i 's/"type" : \[ "object", "string" \]/"type" : "object"/g' ../downloaded/*

echo "replacing \"type\" : [ \"boolean\", \"string\" ] with \"type\" : \"boolean\""
sed -i 's/"type" : \[ "boolean", "string" \]/"type" : "boolean"/g' ../downloaded/*

echo "replacing \"type\" : [ \"string\", \"array\" ] with \"type\" : \"array\""
sed -i 's/"type" : \[ "string", "array" \]/"type" : "array"/g' ../downloaded/*

echo "replacing \"type\" : [ \"integer\", \"string\" ] with \"type\" : \"integer\""
sed -i 's/"type" : \[ "integer", "string" \]/"type" : "integer"/g' ../downloaded/*

echo "replacing \"type\" : [ \"number\", \"string\" ] with \"type\" : \"number\""
sed -i 's/"type" : \[ "number", "string" \]/"type" : "number"/g' ../downloaded/*

echo "replacing \"type\" : [ \"boolean\", \"null\" ] with \"type\" : \"boolean\""
sed -i 's/"type" : \[ "boolean", "null" \]/"type" : "boolean"/g' ../downloaded/*

echo "Preprocessed specs in the ../downloaded directory."

# Cleanup downloaded ZIP file
rm $ZIP_FILE
echo "Cleaned up downloaded ZIP file."
