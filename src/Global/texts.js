export const defaultMessage =
  'Drück dich bitte genauer aus. Wenn du Hilfe brauchst: Schreibe "hilfe".'

export const descriptions = {
  benutze: `Benutze ein oder zwei Objekte miteinander.
Beispiel: "benutze bett" oder "benutze bett mit laken".`,
  clear: `Lösche das Terminal.
Beispiel: "clear".`,
  daumenraus: `Halte deinen Daumen Richtung Himmel.
Beispiel: "daumenraus".`,
  gehe: `Gehe zu einem Objekt oder in eine Richtung.
Beispiel: "gehe fenster".`,
  github: `Öffnet das GitHub repository.
Beispiel: "github".`,
  hardrestart: `Lösche den gespeicherten Spielstand und starte das Spiel neu.
Beispiel: "hardrestart".`,
  help: false,
  hilfe: `Zeig diese Hilfe an.
Beispiel: "hilfe".`,
  inventar: `Kram in deiner Hosentasche.
Beispiel: "inventar".`,
  laden: `Lädt den zuletzt gespeicherten Spielstand.
Beispiel: "laden".`,
  nehme: `Nehme einen Gegenstand auf.
Beispiel: "nehme laken".`,
  neustarten: `Started das Spiel neu. Dein letzter Speicherstand bleibt bestehen.
Beispiel: "neustarten".`,
  promod: `Scheiß auf Animationen.
Beispiel: "promod".`,
  show: false,
  speichern: `Speicher den aktuellen stand des Spiels.
Du kannst nur einen Speicherstand haben, das heißt, wenn du bereits einen vorhanden Speicherstand hast, wird dieser überschrieben.
Wenn du vor dem verlassen des Spiels gespeichert hast, wird das Spiel automatisch geladen.
Beispiel: "speichern".`,
  starten: `Starte das Spiel.
Beispiel: "start".`,
  umsehen: `Sehe dich am aktuellen Ort um.
Beispiel: "umsehen".`,
  untersuche: `Untersuche einen Gegenstand.
Beispiel: "untersuche bett".`,
}

export const welcomeMessage = () => {
  if (window.innerWidth < 400) {
    return welcomeMessageTiny
  } else if (window.innerWidth < 705) {
    return welcomeMessageMedium
  } else if (window.innerWidth < 960) {
    return welcomeMessageLarge
  } else {
    return welcomeMessageHuge
  }
}

const welcomeMessageTiny = 'Willkommen beim Batzgame – Nach Hause batzen.'

const welcomeMessageMedium = `
Willkommen beim
,-.      .                        
|  )     |                        
|-<  ,-: |-  ,-, ,-: ,-: ;-.-. ,-.
|  ) | | |    /  | | | | | | | |-'
'-'  '-' '-' '-' '-| '-' ' ' ' '-'
                 '-'  
              – Nach Hause batzen.
`

const welcomeMessageLarge = `
Willkommen beim
___.             __                                            
\\_ |__  _____  _/  |_ ________   ____ _____     _____    ____  
| __ \\ \\__  \\ \\   __\\\\___   /  / ___\\\\__  \\   /     \\ _/ __ \\ 
| \\_\\ \\ / __ \\_|  |   /    /  / /_/  >/ __ \\_|  Y Y  \\\\  ___/ 
|___  /(____  /|__|  /_____ \\ \\___  /(____  /|__|_|  / \\___  >
    \\/      \\/             \\//_____/      \\/       \\/      \\/ 

                                          – Nach Hause batzen.
`

const welcomeMessageHuge = `
Willkommen beim
:::::::::      ::: ::::::::::: ::::::::: ::::::::      :::     ::::    ::::  ::::::::::
:+:    :+:   :+: :+:   :+:          :+: :+:    :+:   :+: :+:   +:+:+: :+:+:+ :+:       
+:+    +:+  +:+   +:+  +:+         +:+  +:+         +:+   +:+  +:+ +:+:+ +:+ +:+       
+#++:++#+  +#++:++#++: +#+        +#+   :#:        +#++:++#++: +#+  +:+  +#+ +#++:++#  
+#+    +#+ +#+     +#+ +#+       +#+    +#+   +#+# +#+     +#+ +#+       +#+ +#+       
#+#    #+# #+#     #+# #+#      #+#     #+#    #+# #+#     #+# #+#       #+# #+#       
#########  ###     ### ###     ######### ########  ###     ### ###       ### ##########
                                                                    – Nach Hause batzen.
`
