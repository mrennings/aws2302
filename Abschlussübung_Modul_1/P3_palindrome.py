"""
Schreiben Sie eine Funktion `is_palindrome(word)`, die ein Wort als Eingabe erhält und True zurückgibt, wenn das Wort ein Palindrom ist, d.h. von vorne und von hinten gelesen identisch ist, andernfalls False. Die Funktion soll Groß- und Kleinschreibung ignorieren und keine Berücksichtigung von Leerzeichen oder Satzzeichen machen.


Beispiel:

is_palindrome("racecar") -> True

is_palindrome("A man, a plan, a canal: Panama") -> True

is_palindrome("hello") -> False


Hinweis: Verwenden Sie die Methode `isalnum()` der String-Klasse, um zu überprüfen, ob ein Zeichen alphanumerisch ist (d.h. ein Buchstabe oder eine Zahl) und entfernen Sie alle anderen Zeichen. Verwenden Sie dann die Methode `lower()` der String-Klasse, um alle Buchstaben in Kleinbuchstaben umzuwandeln und die Groß-/Kleinschreibung zu ignorieren.
"""

def is_palindrome(s):
    s = s.strip()
    string = ""
    for i in s:
        if s.isalnum():
            string += s
    rstring = string[::-1]
    if string == rstring:
        palindrome = True
    else:
        palindrome = False
    return palindrome

assert is_palindrome("racecar") == True
print(is_palindrome("racecar"))
assert is_palindrome("A man, a plan, a canal: Panama") == True
print(is_palindrome("A man, a plan, a canal: Panama"))
assert is_palindrome("hello") == False
print(is_palindrome("hello"))
