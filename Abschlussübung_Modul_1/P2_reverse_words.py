"""
Schreiben Sie eine Funktion `reverse_words(sentence)`, die einen Satz als Eingabe erhält und den Satz zurückgibt, wobei die Reihenfolge der Wörter umgekehrt wurde, aber die Reihenfolge der Buchstaben innerhalb jedes Wortes beibehalten wurde.


Beispiel:

reverse_words("Hello world") -> "world Hello"
reverse_words("This is a sentence.") -> "sentence. a is This"


Hinweis: Verwenden Sie die Methode `split()` der String-Klasse, um den Satz in Wörter zu unterteilen, und wenden Sie dann das Slicing `[::-1]` auf die resultierende Liste an, um die Reihenfolge der Wörter umzukehren. Verwenden Sie dann die `join()`-Methode, um die Wörter wieder zu einem Satz zusammenzufügen.
"""

def reverse_words(s):
    words = s.split()
    words = words[::-1]
    return ' '.join(words)


assert reverse_words("Hello world") == "world Hello"
assert reverse_words("This is a sentence.") == "sentence. a is This"
print(reverse_words("Hello world"))
print(reverse_words("This is a sentence."))
