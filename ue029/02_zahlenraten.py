"""
Ein Magier hat euch beauftragt, ein Minispiel in Python zu entwickeln,
bei dem der Nutzer eine Zahl zwischen 0 und 9 erraten soll.

Lasse das Programm die gesuchte Zahl beim Start selbst per Zufall auswählen!

Die Interaktion mit dem Nutzer soll über das Terminal erfolgen.

Gib dem Nutzer Hinweise, ob die gesuchte Zahl größer oder kleiner als die 
eben eingegebene Zahl ist!

Ebenfalls soll die Anzahl der benötigten Versuche ausgegeben werden.
"""

import random

zahl = random.randrange(0, 10)
count = 0
eingabe = -1

while eingabe != zahl:
    count += 1
    print(f"{count}. Versuch")
    eingabe = int(input("Bitte Zahl eingeben: "))
    # heute keine Lust auf Sicherheitsabfrage isdigit(), sorry
    if eingabe < zahl:
        print("Das war wohl nix ... zu niedrig!")
    elif eingabe > zahl:
        print("Das war wohl nix ... zu hoch!")

print(f"Du hast insgesamt {count} Versuche benötigt.")
print("=========================")
print("Ende des Spiels")