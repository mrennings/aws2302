output "ec2_ip" {
  description = "EC2 IP"
  value       = module.ec2_module.ec2_ip
}

output "SNS_topic_arn" {
  value = aws_sns_topic.AlertManager.arn
}

# output "ROLE_ARN" {
#   value = aws_iam_role.ec2_sns.arn
# }
