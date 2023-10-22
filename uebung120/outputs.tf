output "instance_ip" {
  value = {
    for instance in aws_instance.ec2s:
      instance.id => instance.public_ip
  }
}

output "instance_id" {
  value = aws_instance.ec2s.*.id
}

output "Load_Balancer_Hostname" {
  value = aws_lb.ALB.dns_name
}
