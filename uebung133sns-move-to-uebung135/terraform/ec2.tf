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

resource "aws_instance" "U132_prometheus" {
  subnet_id              = aws_subnet.u131_subnet.id
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  key_name               = "aws_mr"
  vpc_security_group_ids = [aws_security_group.allow_ssh_grafana.id]
  iam_instance_profile   = aws_iam_instance_profile.inst_prof.name
  tags = {
    Name = "U133 Prometheus"
  }
}

# Da wir Schleifen noch nicht besprocehn haben, einfach kopiert
resource "aws_instance" "U132_nodeexporter" {
  subnet_id              = aws_subnet.u131_subnet.id
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  key_name               = "aws_mr"
  vpc_security_group_ids = [aws_security_group.allow_ssh_grafana.id]
  tags = {
    Name = "U133 Node Exporter"
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
    description = "HTTP inbound"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  
  ingress {
    description = "Grafana inbound"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Prometheus inbound"
    from_port   = 9090
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Alertmanager inbound"
    from_port   = 9093
    to_port     = 9093
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Node-Exporter inbound"
    from_port   = 9100
    to_port     = 9100
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




resource "aws_iam_role" "ec2_sns" {
  name = "EC2_SNS"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "ec2_sns_all" {
  name = "EC2_SNS_ALL"
  role = aws_iam_role.ec2_sns.id
  policy = jsonencode({
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "Stmt1699785788808",
          "Action": [
            "sns:Publish"
          ],
          "Effect": "Allow",
          "Resource": "${aws_sns_topic.AlertManager.arn}"
        }
      ]
    })
}

resource "aws_iam_instance_profile" "inst_prof" {
  name = "ec2_sns_instance_profile"
  role = "${aws_iam_role.ec2_sns.name}"
}
