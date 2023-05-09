"""
Schreibe eine Funktion, die prüft, ob ein Element in einer Liste enthalten ist.
Als Eingabeparameter in die Funktion sollen die zu durchsuchende Liste und das
zu suchende Element übergeben werden. Die Funktion soll nur als Ergebnis True
oder False zurückgeben.

Rufe die Funktion auf und zeige, dass die Suche funktioniert!

[Beispielliste: Huhn, Kuh, Pferd, Katze, Hund, Maus. Suche jeweils nach: Hund, Schaaf.]
"""

def isInList(search="", list=[]):
    """
    Sucht, ob 'search' in der Liste 'list' enthalten ist
    """

    enthalten = False
    for i in range(len(list)):
        if list[i] == search:
            enthalten = True
    return enthalten


beispielliste = ["Huhn", "Kuh", "Pferd", "Katze", "Hund", "Maus"]

print(isInList("Hund", beispielliste))
print(isInList("Schaaf", beispielliste))
print(isInList("Hund"))
print(isInList())