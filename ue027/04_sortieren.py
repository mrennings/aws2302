"""
Schreibe ein Programm, welches eine Liste bestehend aus ganzen Zahlen
aufsteigend sortiert. Der Nutzer soll per Eingabe entscheiden, welche
Elemente in die Liste kommen und er soll so viele Elemente eingeben 
können, wie er will. Wenn er mit der Eingabe fertig ist, soll er mit
einem Befehl (zum Beispiel q) die Eingabe beenden. Anschließend wird
die sortierte Liste ausgegeben.
"""

weiter = True
liste = []

while weiter:
    inp = input("Bitte gib eine Zahl ein (Beenden mit 'q'): ")
    if inp.isdigit():
        liste.append(int(inp))
    elif (inp == "q"):
        weiter = False
    else:
        print("Falsche Eingabe")

liste.sort()
print("Die sortiere Liste ist: ")
out = ""
for i in liste:
    out = out + str(i) + ", "
print(out.rstrip(", "))