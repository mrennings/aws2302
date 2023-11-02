terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "eu-central-1"
  profile = "sandbox"
}

resource "aws_security_group" "sg" {
  name        = "ansible_instance_sg"
  description = "Allow SSH, HTTP inbound traffic"

  ingress {
    description = "SSH from anywhere"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "AmazonLinux" {
  ami             = "ami-0d318f1f104612755"
  instance_type   = "t2.micro"
  security_groups = [aws_security_group.sg.name]
  key_name        = "aws_mr"
}

resource "aws_instance" "Ubuntu" {
  ami             = "ami-06dd92ecc74fdfb36"
  instance_type   = "t2.micro"
  security_groups = [aws_security_group.sg.name]
  key_name        = "aws_mr"
}

output "IP_Amazon_Linux" {
  value = aws_instance.AmazonLinux.public_ip
}

output "IP_Ubuntu" {
  value = aws_instance.Ubuntu.public_ip
}
