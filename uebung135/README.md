
# Ü135 - Ansible 1

Martin | 15.11.2023

Am Vormittag wurde über Variablen, Conditionals und Handler gesprochen. Die Aufgabe für den Nachmittag ist es, die Konzepte auf die bisher entwickelte Monitoring Lösung anzuwenden. Wir bauen also weiter auf Ü133(2) auf.
Wenn du Ü133(2) von Montag erfolgreich gelöst hast, kannst du den Setup-Part überspringen und deine eigene Lösung weiter verfeinern.

### Setup

Klone die Musterlösung von hier:
Sorge dafür, dass Terraform soweit konfiguriert ist, sodass die Infrastruktur deployed werden kann. Konfiguriere die EC2 Instanzen mit Ansible und teste die Benachrichtigung per Email durch den Alertmanager.

## Aufgabe

Wir haben viel entwickelt und Neues gelernt. Jetzt ist es an der Zeit, die entwickelte Lösung genauer zu betrachten und einen Refactor durchzuführen. Im besten Fall ist der Code danach lesbarer, modularer und einfacher zu handeln als zuvor.

1. Die Terraform Konfiguration muss verbessert und vereinfacht werden. Schreibe den Code um und erstelle eine README-Datei, in der eine Beschreibung der Infrastruktur steht.
1. Verbessere die Ansible Playbooks mit dem neuen Wissen über Variablen, Handler und Conditionals.
    1. Sorge dafür, dass der Code modularer wird und wichtige Einstellungen einfach über Variablen gesteuert werden können.
    1. Um Zeit zu sparen, sollten Codeteile nur dann ausgeführt werden, wenn sie wirklich eine Änderung auf dem Host bewirken. Arbeite wenn möglich mit Conditionals und Includes und platziere Handler.
