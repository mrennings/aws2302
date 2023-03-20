"""
Schreibe ein Programm, das die Fakultät einer vom Benutzer eingegebenen Zahl
berechnet. Die Fakultät einer Zahl ist das Produkt aller positiven ganzen
Zahlen von 1 bis zur Zahl selbst. Schreibe den Code dazu selbst!
"""

zahl = input("Welche Fakultät soll berechnet werden? ")
if zahl.isdigit():
    zahl = int(zahl)

    fak = 1
    for i in range(1, zahl+1):
        print(i)
        fak *= i
    print(f"Die Fakultät von {zahl} ist {fak}")
else:
    print("Es wurde keine Zahl eingegeben, Programm wird beendet.")