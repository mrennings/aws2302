module "ec2_module" {
  source       = "./modules/ec2"
  vpc_id       = module.vpc_module.vpc_id
  subnet_ids   = module.vpc_module.subnet_ids
  key          = "aws_mr"
  instance_ami = data.aws_ami.ubuntu.id
  instance_profile   = aws_iam_instance_profile.inst_prof.name
}

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
