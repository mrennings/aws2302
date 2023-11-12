output "Prometheus_IP" {
  value = aws_instance.U132_prometheus.public_ip
}

output "Node_Exporter_IP" {
  value = aws_instance.U132_nodeexporter.public_ip
}
