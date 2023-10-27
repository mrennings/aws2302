# Create a lambda function
# In terraform ${path.module} is the current directory.
resource "aws_lambda_function" "terraform_lambda_func" {
 filename                       = "${path.module}/python/sns_sqs_lambda.zip"
 function_name                  = "sns_sqs_lambda"
 role                           = aws_iam_role.lambda_role.arn
 handler                        = "sns_sqs_lambda.lambda_handler"
 runtime                        = "python3.11"

   environment {
    variables = {
      DYNAMODB_TABLE_NAME = var.dynamodb_table_name
    }
}
}

# Generates an archive from content, a file, or a directory of files.
data "archive_file" "zip_the_python_code" {
 type        = "zip"
 source_dir  = "${path.module}/python/"
 output_path = "${path.module}/python/sns_sqs_lambda.zip"
}

# Event source from SQS
resource "aws_lambda_event_source_mapping" "event_source_mapping" {
  event_source_arn = aws_sqs_queue.tf_sqs.arn
  enabled          = true
  function_name    = aws_lambda_function.terraform_lambda_func.arn
  batch_size       = 1
}


# resource "aws_lambda_permission" "api_gw" {
#   statement_id  = "AllowExecutionFromAPIGateway"
#   action        = "lambda:InvokeFunction"
#   function_name = aws_lambda_function.terraform_lambda_func.function_name
#   principal     = "apigateway.amazonaws.com"

#   # source_arn = "${aws_apigatewayv2_api.hello-api.execution_arn}/*/*/post"
# }

