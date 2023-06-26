# Aufgabe 2 (Optional): Find clone

- **Diese Aufgabe ist freiwillig!**
- Jetzt geht es darum, die grundlegende Funktion des `find` commands mit
  Javascript zu replizieren
- Ähnlich wie beim `ls` command, werden alle Dateien im aktuellen Ordner angezeigt
- Allerdings werden auch alle Ordner in Sub-Ordnern (usw.) angezeigt -> Rekursiv
- Erstelle eine neue Javascript Datei `find.js`

## Beispiel

- Stelle dir einen Ordner mit folgender Struktur vor:
  
  ```
    find.js
    my-files/
      README.md
      src/
        index.html
        script.js
        assets/
          img.png
  ```

- Dein Programm soll nun wie folgt funktionieren:

  ``` bash
  node find.js my-files/
  # README.md
  # src/index.html
  # src/script.js
  # src/assets/img.png
  ```

## Tipps

- In dieser Aufgabe musst du von Recursive Functions gebrauch machen:
  - Das bedeutet, man ruft eine Funktion von der selben Funktion auf
  - Um keinen Infinite Loop zu erstellen, ist es wichtig, dass der Aufruf an
    eine If Bedingung gekoppelt ist
  - Schaue dir hier mehr Informationen an [https://www.javascripttutorial.net/javascript-recursive-function/](https://www.javascripttutorial.net/javascript-recursive-function/)
