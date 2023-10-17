output "instance_ip" {
  value = {
    for instance in aws_instance.test:
      instance.id => instance.public_ip
  }
}
