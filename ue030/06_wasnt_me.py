antwort = input("Funktioniert das System? (j/n) ")

if antwort.lower() == "j":
    print("Fummel nicht daran herum!")
    print("Alles ist gut")
else:
    antwort = input("Bist Du Schuld? (j/n) ")
    if antwort.lower() == "j":
        print("Du Idiot")
        antwort = input("Hat es jemand gemerkt? (j/n) ")
        if antwort.lower() == "j":
            print("Du bist am Arsch!")
            antwort = input("Kannst Du einem Anderen die Schuld zuschieben? (j/n) ")
            if antwort.lower() == "j":
                print("Keine Sorge, jemand anderes ist im Arsch")
            else:
                print("Du bist wirklich im Arsch!!")
        else:
            print("Man wird Dich nie finden")
    else:
        print("Dich trifft es nicht")