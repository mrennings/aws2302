"""
Du wurdest beauftragt, ein Programm in Python zu entwickeln, welches Stunden
in Minuten und Sekunden umwandelt. Der Nutzer kann eine Stundenzahl eingeben.
Daraufhin soll dem Nutzer die entsprechende Minuten- und Sekundenanzahl
ausgegeben werden.
"""

print("STUNDENRECHNER")
print("==============")

h = input("Bitte gib die Stundenzahl ein: ")
if h.isdigit():
    h = int(h)
    m = h * 60
    s = m * 60

    print("%d Stunden sind %d Minten oder %d Sekunden" % (h, m, s))
else:
    print("Es wurde keine ganze Zahl eingegeben.")