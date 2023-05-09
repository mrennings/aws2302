"""
Überprüfe, ob ein vom Benutzer eingegebenes Jahr ein Schaltjahr ist. 
Folgende Regeln gelten für ein Schaltjahr:
    nicht durch 4 teilbar - kein Schaltjahr
    durch 4 teilbar - Schaltjahr
    durch 100 teilbar - kein Schaltjahr
    durch 400 teilbar - Schaltjahr

Teste dein Programm mit den Jahren 1900 (Nein), 2000 (Ja), 2004 (Ja) und 2006 (Nein).
"""

schaltjahr = True

jahr = int(input("Bitte Jahr eingeben: "))

if (jahr % 4 != 0) or ((jahr % 100 == 0) and (jahr % 400 != 0)):
    schaltjahr = False

if schaltjahr:
    print(f"{jahr} ist ein Schaltjahr")
else:
    print(f"{jahr} ist kein Schaltjahr")
