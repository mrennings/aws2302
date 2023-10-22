output "Load_Balancer_Hostname" {
  value = "http://${aws_lb.ALB.dns_name}"
}
