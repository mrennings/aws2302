from math import sqrt
import datetime as dt

startzeit = dt.datetime.now()

# ? Bis zu welcher Obergrenze sollen die Primzahlen gesiebt werden?
BIS = 10000


# Liste initialisieren
gestrichen = [True, True]
for i in range(2, BIS):
    gestrichen.append(False)

# * Primzahlen bis Wurzel(BIS) ermitteln
# * sieben nur bis Wurzel(BIS), da alle anderen Vielfache sind, oder prim
for i in range(2, int(sqrt(BIS))):
    if not gestrichen[i]:
        # * i ist prim, ausgeben ...
        print(i, end=", ")
        # * ... und Vielfache on i streichen, da diese nicht prim sein können
        for j in range(i*i, BIS, i):
            gestrichen[j] = True

# * Primzahlen ab Wurzel(BIS) ausgeben
for i in range(int(sqrt(BIS)+1), BIS):
    if not gestrichen[i]:
        print(i, end=", ")
print("\nENDE\n")

endzeit = dt.datetime.now()
diff = endzeit - startzeit
print(f"Laufzeit: {diff}")