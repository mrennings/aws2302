"""
Schreibe ein Programm, das den Benutzer nach Name, Alter, PLZ und Wohnort
fragt. Diese Daten sollen im Anschluss wieder im Konsolenfenster ausgegeben
werden.
"""

benutzer = dict()

print("Datenabfrage")

for i in "Name", "Vorname", "Alter", "PLZ", "Ort":
    benutzer[i] = input(i + ": ")

print(benutzer["Vorname"].capitalize() + " " + benutzer["Name"].capitalize() + 
      " ist " + benutzer["Alter"] + " Jahre alt und wohnt in " +
      benutzer["PLZ"] + " " + benutzer["Ort"].capitalize() + ".")