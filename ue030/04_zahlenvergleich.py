"""
Schreibe ein Programm, das drei von dir bestimmte Zahlen miteinander
vergleicht. Gib die größte und kleinste Zahl aus!

! Es sollen die drei Zahlen nicht in eine Liste gegeben werden, 
! um diese Liste dan zu sortieren.
"""

z1 = float(input("Bitte die erste Zahl eingeben: "))
z2 = float(input("Bitte die zweite Zahl eingeben: "))
z3 = float(input("Bitte die dritte Zahl eingeben: "))

g = 0       # größte Zahl
k = 0       # kleinste Zahl

if (z1 > z2) and (z1 > z3):
    g = z1
elif (z2 > z3):
    g = z2
else:
    g = z3

if (z1 < z2) and (z1 < z3):
    k = z1
elif (z2 < z3):
    k = z2
else:
    k = z3

print(f"Die größte Zahl ist {g}, die kleinste {k}")