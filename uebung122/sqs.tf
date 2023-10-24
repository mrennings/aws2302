resource "aws_sqs_queue" "mySQS" {
  name = "Uebung_122"
  sqs_managed_sse_enabled = true
}

data "aws_caller_identity" "current" {}

data "aws_iam_policy_document" "sqs_pol" {
  statement {
    sid    = "__owner_statement"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = [data.aws_caller_identity.current.arn] 
    }

    actions   = ["sqs:*"]
    resources = [aws_sqs_queue.mySQS.arn]

    condition {
      test     = "ArnEquals"
      variable = "aws:SourceArn"
      values   = [aws_sqs_queue.mySQS.arn]
    }
  }
}

resource "aws_sqs_queue_policy" "ue122_pol" {
  queue_url = aws_sqs_queue.mySQS.id
  policy = data.aws_iam_policy_document.sqs_pol.json
}
