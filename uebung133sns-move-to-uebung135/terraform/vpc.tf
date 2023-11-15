resource "aws_vpc" "u131_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "U132 - Prometheus VPC"
  }
}

resource "aws_subnet" "u131_subnet" {
  vpc_id                                      = aws_vpc.u131_vpc.id
  cidr_block                                  = "10.0.1.0/24"
  enable_resource_name_dns_a_record_on_launch = true
  map_public_ip_on_launch                     = true
  tags = {
    Name = "U132_Subnet"
  }
}

resource "aws_internet_gateway" "u131_igw" {
  vpc_id = aws_vpc.u131_vpc.id
  tags = {
    Name = "U132 Grafana Internet GW"
  }
}

resource "aws_route_table" "u131_rt" {
  vpc_id = aws_vpc.u131_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.u131_igw.id
  }

  tags = {
    Name = "U132 RouteTable"
  }
}

resource "aws_route_table_association" "u131_rt_assoc" {
  subnet_id      = aws_subnet.u131_subnet.id
  route_table_id = aws_route_table.u131_rt.id
}
