"""
Schreibe ein Programm in Python, welches die Benutzereingabe analysiert.

Dabei sollen die Anzahl der Vokale ermittelt werden und das Ergebnis soll
im Terminal ausgegeben werden und gleichzeitig in eine Datei
“Anzahl_Vokale.txt” geschrieben werden. 
"""

eingabe = input("Bitte den zu analysierenden Text eingeben: ")
vokale = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0}
gesamt = 0

for i in eingabe.lower():
    if i in vokale:
        vokale[i] += 1
        gesamt += 1

ausgabe = "Es sind insgesamt " + str(gesamt) + " Vokale enthalten: "
for k in vokale:
    if vokale[k] != 0:
        ausgabe = ausgabe + str(vokale[k]) +" * " + k + ", "
ausgabe = ausgabe.rstrip(", ")
print(ausgabe)
    
try:
    with open('Anzahl_Vokale.txt', 'w') as f:
        f.write(f"Eingabe: {eingabe}\n")
        f.write(ausgabe)
except:
    print("Es ist ein Fehler bei der Dateiverarbeitung aufgetreten.")