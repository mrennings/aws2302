resource "aws_sns_topic" "ue123" {
  name = "ue123_Topic"
}

resource "aws_sns_topic_subscription" "sns_lambda" {
  topic_arn = aws_sns_topic.ue123.arn
  protocol = "lambda"
  endpoint = aws_lambda_function.ue123.arn
}
