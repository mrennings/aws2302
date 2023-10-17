output "instance_id" {
  value = aws_instance.test.id
}

output "instance_ip" {
  value = aws_instance.test.public_ip
}
