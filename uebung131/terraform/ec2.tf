data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "U131" {
  subnet_id              = aws_subnet.u131_subnet.id
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  key_name               = "aws_mr"
  vpc_security_group_ids = [aws_security_group.allow_ssh_grafana.id]
  tags = {
    Name = "U131 Grafana"
  }
}

resource "aws_security_group" "allow_ssh_grafana" {
  name        = "allow_ssh_grafana"
  description = "Allow SSH and Grafana traffic"
  vpc_id      = aws_vpc.u131_vpc.id

  ingress {
    description = "SSH inbound"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Grafana inbound"
    from_port   = 3333
    to_port     = 3333
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow ssh/grafana"
  }
}
