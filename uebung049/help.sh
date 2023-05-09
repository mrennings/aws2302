#!/bin/bash


hilfe() {
    # Ich weiß, man könnte es über brace expansion auch in eine Zeile
    # zusammenfassen, aber das würde komplett unübersichtlich
    if [[ -n $1 ]] ;
    then
        cmd=$1
    else
        cmd=${$(find /bin/ -type f -perm /111 | fzf)#/bin/}
    fi

    curl "cheat.sh/$cmd" | less
}

