
# Ü131 - Grafana

Martin | 08.11.2023

Diese Übung dient dazu, eine Grafana-Instanz in einer EC2 Instanz aufzusetzen und erste Schritte mit Grafana zu machen. Zusätzlich soll mehr Routine im Umgang mit Terraform und Ansible entstehen und das erlernte Können vertieft werden.

## Tagesziel

Eine Grafana Instanz auf einem EC2 Server kann Daten aus dem CloudWatch Feed des eigenen AWS Accounts anzeigen.

Um das Tagesziel zu erreichen, müssen nachfolgende Teilaufgaben erfüllt werden. Bei Aufgaben 1 und 2 ist die Abgabe von Code per git gern gesehen, ansonsten wäre ein Screenshot von der Ausführung wünschenswert (kann man auch in GitHub hochladen 🙂).

### Aufgabe 1: Deploy with Terraform

Erstelle eine Terraform-Konfiguration, um die folgende Infrastruktur in AWS zu erstellen:

1. Eine Virtual Private Cloud (VPC) mit einem öffentlichen Subnetz.
1. Eine EC2 Instanz mit einer öffentlichen IP-Adresse im öffentlichen Subnetz.
1. Stelle sicher, dass die Ports 22/TCP und 3333/TCP der EC2 Instanz erreichbar sind.

Hilfreiche Links:

- <https://registry.terraform.io/providers/hashicorp/aws/latest>
- <https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build>

### Aufgabe 2: Configure with Ansible

Schreibe ein Ansible-Playbook, das Grafana auf der EC2-Instanz installiert und ausführt. Hier sind grob die Schritte, die in der Rolle ausgeführt werden müssen:

1. Stelle sicher, dass das System auf dem neuesten Stand ist. Aktualisiere alle Pakete!
1. Stelle sicher, dass Grafana installiert werden kann. Füge das APT Repository von Grafana hinzu!
Installiere das Grafana Paket.
1. Kopiere die Konfigurationsdatei von GitHub auf den Server an den Pfad `/etc/grafana/grafana.ini`.
<https://raw.githubusercontent.com/martindubb/random-stuff/main/grafana/grafana.ini>
1. Stelle sicher, dass die Systemd Unit grafana-server läuft.

Hilfreiche Links:

- <https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/?plcmt=learn-nav>
- Ansible Module
  - <https://docs.ansible.com/ansible/latest/collections/ansible/builtin/apt_module.html#ansible-collections-ansible-builtin-apt-module>
  - <https://docs.ansible.com/ansible/latest/collections/ansible/builtin/copy_module.html#ansible-collections-ansible-builtin-copy-module>
  - <https://docs.ansible.com/ansible/latest/collections/ansible/builtin/systemd_service_module.html#ansible-collections-ansible-builtin-systemd-service-module>

### Aufgabe 3: Connect to AWS

Nun muss noch die Verbindung von Grafana zu CloudWatch eingerichtet werden. Das muss mit den Techstarter Sandboxen in zwei Schritten gemacht werden.

Zuerst muss auf der EC2 Instanz eine Datei mit Zugangsdaten hinterlegt werden:
(Das Anlegen der Datei kann super mit Ansible automatisiert werden 😉)

1. Hole deine Zugangsdaten der Sandbox ab.

    1. Wir benötigen den Dateiinhalt unter “Option 2: Manually add a profile to your AWS credentials file (Short-term credentials)”.

1. Logge dich per SSH auf der EC2 Instanz ein.
1. Erstelle im Ordner `/usr/share/grafana` den Ordner `.aws`.
1. Erstelle im Ordner `.aws` eine Datei mit dem Namen `credentials`.
1. Füge in die erstellte Datei `/usr/share/grafana/.aws/credentials` den Inhalt der Datei aus Schritt 1a ein.
1. Ersetze den Profilnamen mit “default”. Die Datei sollte dann so aussehen:

```ini
[default]
aws_access_key_id=ASIA[...]
aws_secret_access_key=m2LKaNh[...]
aws_session_token=IQoJb3JpZ2luX[...]
```

Dann kann Grafana so konfiguriert werden, dass AWS CloudWatch als Datenquelle genutzt werden kann. Folge diesen Schritten, um den Zugriff einzurichten:

1. Öffne das Grafana-Dashboard und logge dich ein. Deine Grafana Instanz ist hier erreichbar: <http://[ÖFFENTLICHE_IP_DEINER_EC2_INSTANZ]:3333> Die Zugangsdaten als Administrator sind `admin:admin``.
1. Wähle im Menü den Punkt Connections aus. Suche und Installiere CloudWatch als Datenquelle.

1. Füge eine neue Datenquelle vom Typ CloudWatch hinzu.
1. Konfiguriere den Zugriff zu aws wie folgt:
    1. Authentication Provider: Credentials File
    1. Default Region: eu-central-1
    1. Bestätige die Funktionalität mit dem Klick auf den Button “Save & test”

Hilfreiche Links:

- <https://grafana.com/docs/grafana/latest/datasources/?plcmt=learn-nav>
- <https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/aws-authentication/?plcmt=learn-nav#use-an-aws-credentials-file>

### Aufgabe 4: Explore Grafana

Du kannst ein paar default Dashboards für CloudWatch importieren und dir anschauen, was für Metriken angezeigt werden.

Schau dich in Ruhe in Grafana um. Hier gibt es ein weiteres Tutorial für Einsteiger: <https://grafana.com/tutorials/grafana-fundamentals/?plcmt=learn-nav>
