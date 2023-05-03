"""
Aufgabe P4
Schreiben Sie eine Funktion `find_missing_number(numbers)`, die eine Liste von aufeinanderfolgenden ganzen Zahlen enthält, jedoch eine fehlende Zahl aufweist. Die Funktion sollte diese fehlende Zahl zurückgeben.


Beispiel:

find_missing_number([1, 2, 3, 4, 6, 7, 8]) -> 5

find_missing_number([10, 11, 12, 14, 15, 16, 17]) -> 13


Die Funktion sollte in der Lage sein, mit Listen verschiedener Längen und Zahlenfolgen umzugehen, die mit einer beliebigen ganzen Zahl beginnen.


Hinweis: Eine mögliche Lösung besteht darin, die Differenz zwischen dem erwarteten Gesamtwert der Zahlenfolge und der tatsächlichen Summe der Zahlen in der Liste zu berechnen. Die Differenz ist die fehlende Zahl.
"""

def find_missing_number(liste):
    sum_expected = 0
    sum_real = 0
    for i in range(liste[0], liste[-1] +1):
        sum_expected += i
    for i in liste:
        sum_real += i
    return sum_expected - sum_real



assert find_missing_number([1, 2, 3, 4, 6, 7, 8]) == 5
print(find_missing_number([1, 2, 3, 4, 6, 7, 8]))
assert find_missing_number([10, 11, 12, 14, 15, 16, 17]) == 13
print(find_missing_number([10, 11, 12, 14, 15, 16, 17]))
assert find_missing_number([-2, -1, 0, 1, 3]) == 2
print(find_missing_number([-2, -1, 0, 1, 3]))