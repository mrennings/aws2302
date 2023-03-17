"""
[Herausforderung] Lass den Nutzer eine Liste mit Wörtern statt mit Zahlen
eingeben und sortiere die Liste alphabetisch, allerdings absteigend
(von Z nach A)!
"""

weiter = True
liste = []

while weiter:
    inp = input("Bitte gib ein Wort ein (Beenden mit ''): ")
    if (inp == ""):
        weiter = False
    else:
        liste.append(inp)

liste.sort(reverse=True)
print("Die sortiere Liste ist: ")
out = ""
for i in liste:
    out = out + str(i) + ", "
print(out.rstrip(", "))