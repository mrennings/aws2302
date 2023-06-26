# 1. Cat clone

- In dieser Aufgabe geht es darum einen einfachen Clone des cat core utils mit
Javascript und Node Js zu erstellen
- Erstelle eine Datei `cat.js`
- Erstelle eine Datei `text.txt` mit folgendem Inhalt: `Hallo Welt`
- Beim Aufruf von `node cat.js text.txt` soll in der Console der
  Inhalt der Datei (also Hallo Welt wieder gegeben werden)
- Der Name der zu öffnenden Datei soll also per Command Line Argument
  übergeben werden

## 1.1 Error Handling

- Nun geht es darum, das Script durch effektives Error Handling robuster
  zu machen
- Ein wichtiger Fehler, der häufig auftreten kann, ist dass die gewünschte
  Datei nicht existiert
- Erstelle also bevor du versuchst die Datei auszulesen einen Check, 
  der Überprüft ob die Datei existiert:
  - Falls Ja, gebe den Inhalt wie zuvor in der Console aus
  - Falls Nein, Schreibe eine Error Nachricht in die Console (`console.error`),
    die darauf hindeutet, dass die Datei nicht existiert. **Danach schließe
    das Programm mit `process.exit(1)`

## 1.2 Concatenate

- Das `cat` Command leitet sich ursprünglich von dem Englischen Begriff
  concatenate ab, was verketten bedeutet
- Wenn man cat mit mehreren Dateien aufruft, werden diese nacheinander in
  einem Text ausgegeben
- Die einzelnen Dateien, werden jedoch mit einem Newline Symbol (\n) getrennt 
  (Neue Zeile / Enter auf der Tastatur drücken)
- Erstelle eine neue Datei `text2.txt` mit folgendem Inhalt: `Hallo von TechStarter`
- Schreibe dein Programm so um, dass wenn mehr als eine Datei als Commandline 
  Argument übergeben wird, alle Dateien nacheinander in der Console ausgegeben werden
  
  ```bash
  node cat.js text.txt text2.txt

  # Hallo Welt

  # Hallo von TechStarter
  ```
  