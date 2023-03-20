"""
Schreibe ein Programm in Python, welches die ersten 10 Fibonacci-Zahlen 
ausgibt!

Benutze dabei eine for-Schleife.
"""

v1 = 0  # erster Vorgänger
v2 = 1  # zweiter Vorgänger
count = 0  # Anzahl Durchgänge

while count < 10:
    print(v1)

    z = v1 + v2
    v1 = v2
    v2 = z
    count += 1

print("========== for ============")

v1 = 0
v2 = 1

for i in range(10):
    print(v1)
    z = v1 + v2
    v1 = v2
    v2 = z