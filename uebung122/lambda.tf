data "archive_file" "lmbd_func" {
  type        = "zip"
  source_file = "index.mjs"
  output_path = "index.zip"
}

resource "aws_lambda_function" "SQS_Lambda" {
  filename = "index.zip"
  function_name = "handler"
  role = aws_iam_role.SQS_Lambda.arn
  runtime = "nodejs18.x"
  handler = "index.handler"
}

resource "aws_lambda_event_source_mapping" "SQSEvent" {
  event_source_arn = aws_sqs_queue.mySQS.arn
  enabled = true
  function_name = aws_lambda_function.SQS_Lambda.arn
  batch_size = 1
}
