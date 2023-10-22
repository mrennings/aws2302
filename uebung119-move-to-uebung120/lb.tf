resource "aws_lb" "ALB" {
  internal = false
  load_balancer_type = "application"
  security_groups = [aws_security_group.sg.id]
  subnets = [for subnet in aws_subnet.subnets :  subnet.id]
  tags = {
    Name = "App Load Balancer"
  }
}

resource "aws_lb_target_group" "target_group" {
  port = 80
  protocol = "HTTP"
  vpc_id = aws_vpc.main.id
  target_type = "instance"
  health_check {
    enabled = true
    interval = 30
    path = "/"
    port = "80"
    protocol = "HTTP"
    timeout = 3
    healthy_threshold = 3
    unhealthy_threshold = 3
  }
}

resource "aws_lb_listener" "frontend" {
  load_balancer_arn = aws_lb.ALB.arn
  port = 80
  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.target_group.arn
  }
}

resource "aws_lb_target_group_attachment" "instances" {
  count = length(var.availability_zones)
  target_group_arn = aws_lb_target_group.target_group.arn
  target_id = aws_instance.ec2s[count.index].id
  port = 80
}
