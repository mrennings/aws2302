data "archive_file" "lmbd_func" {
  type        = "zip"
  source_file = "ue123.py"
  output_path = "ue123.zip"
}

resource "aws_lambda_function" "ue123" {
  filename      = "ue123.zip"
  function_name = "lambda_handler"
  role          = aws_iam_role.ue123.arn
  runtime       = "python3.11"
  handler       = "ue123.lambda_handler"
  environment {
    variables = {
      TBLNAME = aws_dynamodb_table.ue123.name
    }
  }
}


resource "aws_lambda_permission" "lmbd_sns" {
  statement_id  = "AllowExecutionFromSNS"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.ue123.function_name
  principal     = "sns.amazonaws.com"
  source_arn    = aws_sns_topic.ue123.arn
}
