// Der Einfachheit halber in einer Datei

variable "region" {}
variable "aws_profile" {}
variable "instance_type" {}

output "Server-IP" {
  value = aws_instance.jenkins.public_ip
}

terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "tf-remstates"
    key            = "jenkins/terraform.tfstate"
    region         = "eu-central-1"
    encrypt        = true
    dynamodb_table = "TF_RemStates"
    profile        = "sandbox"
  }
}

provider "aws" {
  region  = var.region
  profile = var.aws_profile
  default_tags {
    tags = {
      TF = "True"
    }
  }
}


resource "aws_instance" "jenkins" {
  subnet_id              = aws_subnet.jenkins.id
  ami                    = "ami-0669b163befffbdfc"
  instance_type          = var.instance_type
  key_name               = "aws_mr"
  vpc_security_group_ids = [aws_security_group.jenkins.id]
  tags = {
    Name = "Jenkins TF",
  }
}





resource "aws_vpc" "jenkins" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "Jenkins VPC",
  }
}

resource "aws_subnet" "jenkins" {
  vpc_id                                      = aws_vpc.jenkins.id
  cidr_block                                  = "10.0.1.0/24"
  enable_resource_name_dns_a_record_on_launch = true
  map_public_ip_on_launch                     = true
  tags = {
    Name = "Jenkins_Subnet",
  }
}

resource "aws_internet_gateway" "jenkins" {
  vpc_id = aws_vpc.jenkins.id
  tags = {
    Name = "Jenkins Internet GW",
  }
}

resource "aws_route_table" "jenkins" {
  vpc_id = aws_vpc.jenkins.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.jenkins.id
  }

  tags = {
    Name = "Jenkins"
  }
}

resource "aws_route_table_association" "jenkins" {
  subnet_id      = aws_subnet.jenkins.id
  route_table_id = aws_route_table.jenkins.id
}



resource "aws_security_group" "jenkins" {
  name        = "Jenkins TF Security Group"
  description = "Jenkins TF Security Group"
  vpc_id      = aws_vpc.jenkins.id

  ingress {
    description = "SSH inbound"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    description = "HTTP inbound"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    description = "8080 inbound"
    from_port   = 8080
    to_port     = 8080
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
    Name = "Jenkins"
  }
}
