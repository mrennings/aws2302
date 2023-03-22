"""
Schreibe ein Programm, welches den Countdown bis zu den Osterferien 
(11.04.23; 0 Uhr) ausgibt. Jede Sekunde soll eine neue Zeile ausgegeben werden.
Es sollen Tage, Stunden, Minuten und Sekunden angezeigt werden. 
"""

import datetime as dt
from time import sleep

zieldatum = dt.datetime(2023,4, 11, 0, 0, 0)


while True:
    diff = zieldatum - dt.datetime.now()
    sec = diff.seconds
    h = int(sec / 3600)
    sec -= h * 3600
    m = int(sec / 60)
    sec -= m * 60
    print(f"Es sind noch {diff.days} Tage, {h} Stunden, {m} Minuten und {sec} Sekunden bis zu den Osterferien.")
    sleep(1)
