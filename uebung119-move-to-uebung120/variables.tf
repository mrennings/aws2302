variable "region" {
  type = string
  default = "eu-central-1"
}

variable "availability_zones" {
  description = "Genutzte AZs"
  type        = list(string)
}

variable "public_subnet_cidr" {
  description = "CIDRs for public subnets"
  type        = list(string)
}
