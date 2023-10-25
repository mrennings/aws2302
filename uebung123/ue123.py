import boto3
import uuid
import os

TABLENAME = os.environ["TBLNAME"]
DYNAMO = boto3.client("dynamodb")

def lambda_handler(event, context):
    MSG = event["Records"][0]["Sns"]["Message"]
    print(MSG)
    print(TABLENAME)

    DYNAMO.put_item(
        Item = {
            'id': { 'S': str(uuid.uuid4()) },
            'msg': { 'S': MSG }
        },
        TableName = TABLENAME
    )

    return f"Nachricht in Dynamo-DB geschrieben: {MSG}"
