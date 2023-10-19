# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance
resource "aws_instance" "ec2s" {
  count                  = length(var.availability_zones)
  ami                    = "ami-065ab11fbd3d0323d"
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.subnets[count.index].id
  vpc_security_group_ids = [aws_security_group.sg.id]
  key_name               = "aws_mr"
  # user_data              = file("init.sh.tpl")
  user_data              = base64encode(templatefile("init.sh.tpl", {
      subnet = aws_subnet.subnets[count.index].id
      az = var.availability_zones[count.index]
    }))
  tags = {
    Name = "EC2 ${var.availability_zones[count.index]}"
  }
}
