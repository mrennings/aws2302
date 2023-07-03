# Aufgabe 2 - Wetterdaten Konsolenprogramm

Entwickle eine neue Node.js-Anwendung, die die OpenWeatherMap API verwendet, um
Wetterdaten für eine bestimmte Stadt abzurufen. Die Anwendung soll den Namen der
Stadt als Eingabe vom Benutzer über die Kommandozeile entgegennehmen und die
Wetterdaten in strukturierter Form auf der Konsole ausgeben. Verwende Axios, um
den API-Aufruf durchzuführen und die erhaltenen Daten zu verarbeiten.

*Hinweis:* Die API ist per apikey gesichert. Um einen individuellen apikey zu erhalten, muss ein kostenloses Konto bei OpenWeatherMap erstellt werden.

Die API ist auf dieser Webseite zu finden: <https://openweathermap.org>

## Schritte

1. Installiere die erforderlichen Pakete (z.B. Axios) in deinem Node.js-Projekt.

2. Lege eine Variable für deinen API-Schlüssel fest, den du von OpenWeatherMap erhältst.

3. Implementiere den Code, um den Namen der Stadt als Argument von der Kommandozeile zu lesen.

4. Konstruiere die URL für den API-Aufruf anhand des Stadtnamens und deines API-Schlüssels.

5. Verwende Axios, um den API-Aufruf durchzuführen und die erhaltenen Daten abzurufen.

6. Verarbeite die empfangenen Daten, um die gewünschten Informationen (z.B. Temperatur, Luftfeuchtigkeit, Wetterbeschreibung) zu extrahieren.

7. Gib die strukturierten Wetterdaten auf der Konsole aus.

Teste deine Anwendung, indem du verschiedene Städtenamen ausprobierst und die korrekten Wetterdaten auf der Konsole überprüfst.
