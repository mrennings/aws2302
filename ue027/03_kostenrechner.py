"""
Ein Weinhändler verkauft Rotwein für Euro 12,99 pro Flasche, Rosewein für 
Euro 9,98 pro Flasche und Weißwein für Euro 11,99 pro Flasche.

Entwickle ein Programm, das nach der Anzahl jeder verkauften Weinsorte fragt,
die Gesamtkosten berechnet und auf der Konsole ausgibt.
"""

print("KOSTENRECHNER")
print("=============")

kosten = {"Rotwein" : 12.99 , "Rosewein" : 9.98 , "Weißwein" : 11.99 }
preis = 0.0

for k in kosten:
    eingabe = input("Anzahl " + k + ": ")
    if eingabe.isdigit():
        #anz[k] = int(eingabe)
        preis += int(eingabe) * kosten[k]
    else:
        print("Bitte nur ganze Zahlen eingeben.")
    
print("Die Gesamtkosten betragen %.2f €." % preis)