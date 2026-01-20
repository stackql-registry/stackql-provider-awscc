import json, subprocess

def get_aws_native_resources(region='us-east-1'):

    resource_types = []

    # Command configurations for both IMMUTABLE and FULLY_MUTABLE provisioning types
    provisioning_types = ['FULLY_MUTABLE', 'IMMUTABLE']

    for provisioning_type in provisioning_types:
        command = [
            'aws', 'cloudformation', 'list-types',
            '--type', 'RESOURCE',
            '--visibility', 'PUBLIC',
            '--provisioning-type', provisioning_type,
            '--region', region
        ]

        # Run the AWS CLI command
        result = subprocess.run(command, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error running command: {result.stderr}")
            continue

        # Parse JSON output
        try:
            data = json.loads(result.stdout)
            for item in data.get('TypeSummaries', []):
                # Check if 'PublisherId' is absent indicating it's an AWS native resource
                if 'PublisherId' not in item:
                    resource_types.append(item['TypeName'])
        except json.JSONDecodeError:
            print("Failed to decode JSON from AWS CLI output")

    resource_types.sort()
    
    return resource_types

# Usage example
aws_resources = get_aws_native_resources()

print('export const resourceTypes = [')
[print("'" + s + "',") for s in aws_resources]
print('];')
