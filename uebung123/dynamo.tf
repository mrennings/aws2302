resource "aws_dynamodb_table" "ue123" {
  name = "ue123"
  hash_key = "id"
  read_capacity = 1
  write_capacity = 1

  attribute {
    name = "id"
    type = "S"
  }
}
