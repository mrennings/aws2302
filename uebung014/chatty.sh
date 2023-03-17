#!/bin/bash

# Bei Fehlern oder nicht-deklarierten Variablen direkt beenden
set -o errexit
set -o nounset

declare -A antwort  # Dictionary anlegen


echo -n "Hallo, ich bin Chatty. Wie heißt du? "
read antwort[name]

### Name {{{
if [ -z "${antwort[name]}" ] ;
then
    echo -n "Du hast keinen Namen angegeben, ich nenne Dich einfach "
    echo -e "${antwort[name]:=Klaus-Bärbel}.\n"
fi
#}}}

### Alter {{{
echo -n "Hallo ${antwort[name]}, wie alt bist Du? "
read antwort[alter]

# Prüfen, ob ein Alter angegeben wurde
if [ -z "${antwort[alter]}" ] ;
then
    echo "Du kennst Dein Alter nicht? So jung bist Du noch?"
    antwort[alter]=0
fi

if [ "${antwort[alter]}" -lt 20 ] ;
then
    echo "Unter 20"     #TODO
elif [ "${antwort[alter]}" -lt 51 ] ;
then
    #20-50
    echo "Im besten Alter also ..."
else
    # Ü50
    [ -x $(which figlet) ] && figlet -D "Soll ich gr|~er schreiben?" || \
        echo "Ok, ok, ich bemühe mich, langsamer zu schreiben"
fi
#}}}

### Ort {{{
echo -ne "\nWo wohnst Du, ${antwort[name]}? "
read antwort[ort]

case ${antwort[ort]} in
    "Köln")
        echo "Mer losse d'r Dom in Kölle ... (als einzige Kirche direkt in der Hölle)"
        # geklaut bei Broken Comedy
        ;;

    "München")
        echo "Fussball ist mir egal, hauptsache Bayern München verliert."
        ;;
    "Wuppertal")
        echo "Da, wo sie die Straßenbahn aufgehangen haben."
        ;;
    "Berlin")
        echo "Grüß Olaf ..."
        ;;
    *)
        echo "Da war ich noch nie."
        [[ -z ${antwort[ort]} ]] && echo "Und Du scheinbar auch nicht"
        ;;
esac
#}}}

### weitere Fragen {{{
declare -a f
befinden() {
    echo -n "Wie geht's Dir heute, ${antwort[name]}? "
    read antwort[befinden]
}
f[1]="befinden"

farbe() {
    echo -n "Was ist Deine Lieblingsfarbe? "
    read antwort[farbe]
}
f[2]="farbe"

film() {
    echo -n "Wie heißt Dein Lieblingsfilm? "
    read antwort[film]
}
f[3]="film"

#}}}


# Versuch, einer zufälligen Reihenfolge der weiteren Fragen. Aus Bash-Arrays lassen
# sich wohl nicht ganz so einfach Elemente entfernen (ohne Lücken). 
# => remove_from_array() erstellen (Behelfs-Array erstellen ohne das zu entfernende Element)
#while
    # ${#f[@]}      Anzahl der Elemente (Funktionen) in $f
    # $(( ... ))    Zufallswert zwischen 1 und Anzahl Funktionen in f
    # Es wird eine zufällige Funktion aus f aufgerufen, leider können 
    # auch Funktionen doppelt aufgerufen werden
#    ${f[$(( $RANDOM % ${#f[@]} +1 ))]}
        
#    echo -n "Möchtest Du das Programm beenden? (JA zum beenden) "
#    read weiter
    
#do [ "$weiter" != "JA" ] ; done

for func in ${f[@]} ;
do
    ${func}
    echo -ne "\nMöchtest Du das Programm beenden? (JA zum beenden) "
    read ende
    [[ "$ende" == "JA" ]] && break
done


echo -e "\nWar schön mit dir zu plaudern, ${antwort[name]}."
echo -e "Ich habe von Dir erfahren, dass Du in ${antwort[ort]} wohnst und
 ${antwort[alter]} Jahre alt bist.\n"
for key in ${!antwort[@]}
do
    echo -e "${key^}:\t\t${antwort[$key]}"
done

# vim: set fen fdm=marker:
