# Antwort zu Übung 124

1. Code lokal speichern
1. `terraform init`
1. `terraform validate`
1. `terraform plan`
    - Feststellen, dass man das Profile in der `dev_vars_auto-tfvars` nicht geändert hat.
    - Bei der Gelegenheit auch direkt den S3-Bucket-Namen ändern
1. `terraform apply`
1. Kontrollieren, ob Verbindugen der Services korrekt sind
1. Datei in S3 hochladen
1. CloudWatch-Logs anschauen, Fehlermeldung ansehen
    1. Fehlermeldung »Access Denied« bei PutItem → Fehler bei der Rechtevergabe
    1. in die iam_roles.tf gucken und feststellen, dass die Policies schlecht benannt sind
        - iam_policy_for_lambda
        - iam_policy_for_lambda2
    1. Feststellen, dass die ARN für die DynamoDB in der POlicy hardcodiert ist
       → Ändern zu `"${aws_dynamodb_table.basic-dynamodb_table.arn}"`
    1. Auch wurde eine Variable für den DynamoDB-Tabellenname erstellt, die als ENV an die Lambda-Funktion übergeben wird, allerdings wird diese nicht in der `dynamodb.tf` verwendet. Stattdessen war der Name hardcodiert und stimmte nicht mit dem der Variablen überein.
1. Infrastruktur erneuern und erneut testen
1. Daten in DB gespeichert → Funktion gegeben.
