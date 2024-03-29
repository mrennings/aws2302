resource "aws_route_table" "rt" {
  vpc_id = aws_vpc.my_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name = "TF Route Table"
  }
}

resource "aws_route_table_association" "subnet_route" {
  count     = length(var.subnets_cidr)
  subnet_id = aws_subnet.my_subnet[count.index].id
  route_table_id = aws_route_table.rt.id
}
