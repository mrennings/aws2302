#!/bin/bash

# Variablen für den Host und den Dateinamen
HOST=${HOST:-"google.de"} # Standard-Host, kann überschrieben werden
FB_HOST="www.amazon.de" # fallback host
LATENCY_FILE="/tmp/latency_data.txt" # Dateiname für die Latenzdaten

# Funktion, um die durchschnittliche Latenz zu messen
measure_latency() {
    # Führt den Ping-Befehl aus und extrahiert die durchschnittliche Latenz
    local latency=$(ping -c 5 $1 | tail -1 | awk '{print $4}' | cut -d '/' -f 2)
    echo $latency
}

# Funktion, um die gemessene Latenz in eine Datei zu schreiben
write_latency_to_file() {
    # Ruft die Funktion measure_latency auf und leitet das Ergebnis in eine Datei um
    local latency=$(measure_latency "${HOST}")
    if [ -z ${latency} ] ; then
        local latency=$(measure_latency "${FB_HOST}")
    fi
    echo $latency > $LATENCY_FILE
}

# Hauptfunktion
main() {
    write_latency_to_file
}

# Ausführung der Hauptfunktion
main
