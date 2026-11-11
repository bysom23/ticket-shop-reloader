# Reloaden bis das Ticket da ist
Eine Firefox-Erweiterung, die auf der Ticket-Seite des Chaos Communication Congresses reload spammt. Dabei wird sie direkt geladen ohne manuelle interaktion. Also nach jedem Neuladen wird sie wieder getriggert und läd nach einer kurzen, höflichen Wartezeit neu bis der konfigurierte String verschwindet aka "der Shop eröffnet ist". Die Funktion ist auf die Eventseiten des CCC beschränkt.


## Wie benutzen?
* Der Code muss ggf nochmal angepasst werden. In der Variable `stringToDisappear` sollte etwas stehen, das nach Shop-Freischaltung nicht mehr zu sehen ist. DIe Refresh-Rate wäre ggf auch eine Tunable.
* Im Firefox unter about:debugging#/runtime/this-firefox das Addon temporär via manifest.json laden
* Ggf muss das Addon noch für private Fenster freigegeben werden
* Die Funktion wird sichtbar durch eine flackernde Linie (jeder reload) oder einen Blick in die Konsole.
