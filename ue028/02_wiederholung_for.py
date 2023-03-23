"""
Eine Benutzereingabe soll 10-mal wiederholt werden.

Schreibe zwei Programme in Python, welches die Benutzereingabe über das
Terminal einliest und anschließend 10-mal hintereinander wieder ausgibt.
Benutze beim ersten Programm eine for-Schleife und beim zweiten Programm
eine while-Schleife! 

[Herausforderung] Lasse den Nutzer selbst bestimmen, wie oft die Eingabe 
wiederholt werden soll.
"""

eingabe = input("Was soll wiederholt werden? ")
anzahl = input("Wie oft soll wiederholt werden? ")

if anzahl.isdigit():
    anzahl = int(anzahl)
else:
    print("Es wurde keine hanze Zahl eingeben, es wird 10-mal wiederholt.")
    anzahl = 10

for i in range(0, anzahl):
    print(eingabe, end =" ")