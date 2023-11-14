module "ec2" {
  source = "./modules/ec2"
  instance_profile = module.role.instance_role_name

  sshkey = "aws_mr"
  user_data = <<-EOF
    #!/bin/bash
    echo "Test from EC2" > ./test.txt
    aws s3 cp test.txt s3://${var.bucketname}/test.txt
  EOF
}

module "s3" {
  source = "./modules/s3"

  bucket_name               = var.bucketname
  bucket_encryption_enabled = true
}

module "role" {
  source = "./modules/iam"

  role_name        = "MyEC2InstanceRole"
  policy_actions   = ["s3:*"]
  policy_effect    = "Allow"
  policy_resources = [module.s3.bucket_arn, "${module.s3.bucket_arn}/*"]
}
