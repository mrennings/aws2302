#!/bin/bash

echo "$(/usr/bin/date): $(/usr/bin/free -h  | /usr/bin/grep Speicher | /usr/bin/awk '{print $3"/"$2 " genutzt, " $4 " frei, " $6 " Puffer, " $7 " verfügbar" }')"

