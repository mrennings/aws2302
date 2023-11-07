import boto3
import random
import time

CloudWatch = boto3.client("cloudwatch", region_name="eu-central-1")
count = 0

while count < 20:
    _ = CloudWatch.put_metric_data(
        MetricData = [
            {
                "MetricName": "random test data",
                "Dimensions": [{
                    "Name": "ID",
                    "Value": "Ue130"
                    }],
                "Unit": "Count",
                "Value": random.randint(1,100)
            },
        ],
        Namespace = "U130_metrics"
    )

    count += 1
    time.sleep(15)
