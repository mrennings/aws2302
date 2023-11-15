output "Prometheus_IP" {
  value = aws_instance.U132_prometheus.public_ip
}

output "Node_Exporter_IP" {
  value = aws_instance.U132_nodeexporter.public_ip
}

output "SNS_topic_arn" {
  value = aws_sns_topic.AlertManager.arn
}

output "ROLE_ARN" {
  value = aws_iam_role.ec2_sns.arn
}
