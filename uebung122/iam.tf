resource "aws_iam_role" "SQS_Lambda" {
  name = "SQS-Lambda-Allow"
  assume_role_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
  })
}

resource "aws_iam_policy" "Logging" {
  name = "Allow_logging"
  path = "/"
  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    }
  ]
  })
}


# TODO SQS-ARN
resource "aws_iam_policy" "AllowSQS" {
  name = "Allow_SQS"
  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "sqs:ListQueues",
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "sqs:*",
            "Resource": "${aws_sqs_queue.mySQS.arn}"
            # "Resource": "arn:aws:sqs:eu-central-1:898860150874:mySQSq"
        }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "AttachSQS" {
  role = aws_iam_role.SQS_Lambda.name
  policy_arn = aws_iam_policy.AllowSQS.arn
}

resource "aws_iam_role_policy_attachment" "AttachLogging" {
  role = aws_iam_role.SQS_Lambda.name
  policy_arn = aws_iam_policy.Logging.arn
}
