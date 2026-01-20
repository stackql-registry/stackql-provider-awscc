---
title: db_instances_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - db_instances_list_only
  - rds
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

Lists <code>db_instances</code> in a region or regions, for all properties use <a href="/services/rds/db_instances/"><code>db_instances</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_instances_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resource creates an Amazon DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.<br />For more information about creating an RDS DB instance, see &#91;Creating an Amazon RDS DB instance&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;CreateDBInstance.html) in the &#42;Amazon RDS User Guide&#42;.<br />For more information about creating a DB instance in an Aurora DB cluster, see &#91;Creating an Amazon Aurora DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the &#42;Amazon Aurora User Guide&#42;.<br />If you import an existing DB instance, and the template configuration doesn't match the actual configuration of the DB instance, AWS CloudFormation applies the changes in the template during the import operation.<br />If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced. For more information, see &#91;Prevent Updates to Stack Resources&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html).<br />&#42;Updating DB instances&#42; <br />When properties labeled "&#42;Update requires:&#42;&#91;Replacement&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)" are updated, AWS CloudFormation first creates a replacement DB instance, then changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.<br />We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:<br />1. Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.<br />1. Create a snapshot of the DB instance. For more information, see &#91;Creating a DB Snapshot&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER&#95;CreateSnapshot.html).<br />1. If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property with the ID of the DB snapshot that you want to use.<br />After you restore a DB instance with a &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, you can delete the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified &#96;&#96;DBSnapshotIdentifier&#96;&#96; property, and the original DB instance is deleted.<br />1. Update the stack.<br /><br />For more information about updating other properties of this resource, see &#96;&#96;ModifyDBInstance&#96;&#96;. For more information about updating stacks, see &#91;CloudFormation Stacks Updates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).<br />&#42;Deleting DB instances&#42; <br />For DB instances that are part of an Aurora DB cluster, you can set a deletion policy for your DB instance to control how AWS CloudFormation handles the DB instance when the stack is deleted. For Amazon RDS DB instances, you can choose to &#42;retain&#42; the DB instance, to &#42;delete&#42; the DB instance, or to &#42;create a snapshot&#42; of the DB instance. The default AWS CloudFormation behavior depends on the &#96;&#96;DBClusterIdentifier&#96;&#96; property:<br />1. For &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resources that don't specify the &#96;&#96;DBClusterIdentifier&#96;&#96; property, AWS CloudFormation saves a snapshot of the DB instance.<br />1. For &#96;&#96;AWS::RDS::DBInstance&#96;&#96; resources that do specify the &#96;&#96;DBClusterIdentifier&#96;&#96; property, AWS CloudFormation deletes the DB instance.<br /><br />For more information, see &#91;DeletionPolicy Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_instances_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "db_instance_identifier",
    "type": "string",
    "description": "A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see &#91;Name Type&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).<br />For information about constraints that apply to DB instance identifiers, see &#91;Naming constraints in Amazon RDS&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP&#95;Limits.html#RDS&#95;Limits.Constraints) in the &#42;Amazon RDS User Guide&#42;.<br />If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name."
  },
  {
    "name": "region",
    "type": "string",
    "description": "AWS region."
  }
]} />

## Methods

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
  </tr>
  <tr>
    <td><CopyableCode code="list_resources" /></td>
    <td><code>SELECT</code></td>
    <td><CopyableCode code="region" /></td>
  </tr>
</tbody>
</table>

## `SELECT` examples
Lists all <code>db_instances</code> in a region.
```sql
SELECT
region,
db_instance_identifier
FROM awscc.rds.db_instances_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>db_instances_list_only</code> resource, see <a href="/services/rds/db_instances/#permissions"><code>db_instances</code></a>

