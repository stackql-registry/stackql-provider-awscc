---
title: db_clusters_list_only
hide_title: false
hide_table_of_contents: false
keywords:
  - db_clusters_list_only
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

Lists <code>db_clusters</code> in a region or regions, for all properties use <a href="/services/rds/db_clusters/"><code>db_clusters</code></a>

## Overview
<table>
<tbody>
<tr><td><b>Name</b></td><td><code>db_clusters_list_only</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Description</b></td><td>The &#96;&#96;AWS::RDS::DBCluster&#96;&#96; resource creates an Amazon Aurora DB cluster or Multi-AZ DB cluster.<br />For more information about creating an Aurora DB cluster, see &#91;Creating an Amazon Aurora DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the &#42;Amazon Aurora User Guide&#42;.<br />For more information about creating a Multi-AZ DB cluster, see &#91;Creating a Multi-AZ DB cluster&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html) in the &#42;Amazon RDS User Guide&#42;.<br />You can only create this resource in AWS Regions where Amazon Aurora or Multi-AZ DB clusters are supported.<br />&#42;Updating DB clusters&#42; <br />When properties labeled "&#42;Update requires:&#42;&#91;Replacement&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)" are updated, AWS CloudFormation first creates a replacement DB cluster, then changes references from other dependent resources to point to the replacement DB cluster, and finally deletes the old DB cluster.<br />We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB cluster. To preserve your data, perform the following procedure:<br />1. Deactivate any applications that are using the DB cluster so that there's no activity on the DB instance.<br />1. Create a snapshot of the DB cluster. For more information, see &#91;Creating a DB cluster snapshot&#93;(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER&#95;CreateSnapshotCluster.html).<br />1. If you want to restore your DB cluster using a DB cluster snapshot, modify the updated template with your DB cluster changes and add the &#96;&#96;SnapshotIdentifier&#96;&#96; property with the ID of the DB cluster snapshot that you want to use.<br />After you restore a DB cluster with a &#96;&#96;SnapshotIdentifier&#96;&#96; property, you must specify the same &#96;&#96;SnapshotIdentifier&#96;&#96; property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the DB cluster snapshot again, and the data in the database is not changed. However, if you don't specify the &#96;&#96;SnapshotIdentifier&#96;&#96; property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified &#96;&#96;SnapshotIdentifier&#96;&#96; property, and the original DB cluster is deleted.<br />1. Update the stack.<br /><br />Currently, when you are updating the stack for an Aurora Serverless DB cluster, you can't include changes to any other properties when you specify one of the following properties: &#96;&#96;PreferredBackupWindow&#96;&#96;, &#96;&#96;PreferredMaintenanceWindow&#96;&#96;, and &#96;&#96;Port&#96;&#96;. This limitation doesn't apply to provisioned DB clusters.<br />For more information about updating other properties of this resource, see &#96;&#96;ModifyDBCluster&#96;&#96;. For more information about updating stacks, see &#91;CloudFormation Stacks Updates&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).<br />&#42;Deleting DB clusters&#42; <br />The default &#96;&#96;DeletionPolicy&#96;&#96; for &#96;&#96;AWS::RDS::DBCluster&#96;&#96; resources is &#96;&#96;Snapshot&#96;&#96;. For more information about how AWS CloudFormation deletes resources, see &#91;DeletionPolicy Attribute&#93;(https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="awscc.rds.db_clusters_list_only" /></td></tr>
</tbody>
</table>

## Fields
<SchemaTable fields={[
  {
    "name": "db_cluster_identifier",
    "type": "string",
    "description": "The DB cluster identifier. This parameter is stored as a lowercase string.<br />Constraints:<br />+ Must contain from 1 to 63 letters, numbers, or hyphens.<br />+ First character must be a letter.<br />+ Can't end with a hyphen or contain two consecutive hyphens.<br /><br />Example: &#96;&#96;my-cluster1&#96;&#96;<br />Valid for: Aurora DB clusters and Multi-AZ DB clusters"
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
Lists all <code>db_clusters</code> in a region.
```sql
SELECT
region,
db_cluster_identifier
FROM awscc.rds.db_clusters_list_only
WHERE region = 'us-east-1';
```


## Permissions

For permissions required to operate on the <code>db_clusters_list_only</code> resource, see <a href="/services/rds/db_clusters/#permissions"><code>db_clusters</code></a>

