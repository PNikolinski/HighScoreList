## ToDo-List


## Clock
- Code aufräumen & dokumentieren ✓
- Bugs fixen✓
- Dont repeat yourself

## Calculator
- Code aufräumen & dokumentieren
- Rechnen programmieren

## Liste
- Code aufräumen 1/2 Tag✓
    - Vereinfachen, falls möglich ✓ | Dienstag
    - Kollegen fragen, ob er eben drüber gucken könnte✓ | Dienstag
    + Was kann man dazu machen / lesen✓ | Dienstag
- Code dokumentieren 1/2 Tag ✓ (1H)
    - Kommentare, die den Code erklären✓ | Dienstag
- Server aufsetzen 
    - Virtual Box 1/4 Tag✓ | Mittwoch
    - Docker, Linux System, Debian 9 1/4 Tag (Auf unbestimmte Zeit verschoben!)
        - MSSQL aufsetzen | Mittwoch
    - MYSQL Datenbank 1/2 Tag✓ | Mittwoch
    - Grafischer Client mit Sequel Pro einrichten✓ | Mittwoch
    - S.P. mit MySQL Server verbinden✓ | Donnerstag
    - Test-User in Datenbank reinschreiben✓ | Donnerstag
- API
    - Rest Client installieren✓ | Mittwoch
    - Implementieren Express Server  | Donnerstag
        - Node Projekt aufsetzen 1 / 8 Tag✓ | Donnerstag
            - Packete installieren✓ | Donnerstag
            - Doku schauen✓ | Donnerstag
        - Einfache Get Route 1 / 4 Tag | Donnerstag
            - Hello World✓ | Donnerstag
            - Gebe einen random generierten Nutzer aus✓ | Donnerstag
            - Gebe eine vorgegeben Anzahl von random generierten Nutzern aus✓ | Donnerstag
        - Einfache Put Route 1 / 4 Tag✓
            - Einfache Konsolen Ausgabe ✓
    - API definieren 1 1/2 Tag✓
        + Ausprobieren mit RC✓
        - Route✓
        - Datenformat✓
    - WOCHENENDE✓
        - Get Datensatz 1 1 / 2 Tag✓
            - JSON Format✓
            - JSON to Normal✓
            - Server -> API✓
        - Ausgabe von Daten 1 / 4 Tag✓
            - API -> Client✓
        - Set Datensatz 1 / 2 Tag✓
            - Normal to JSON✓
            - Client -> API -> DB✓
        - Delete Datensatz ✓
            - Client -> API -> DB✓
    - SQL Datenbank Backend
- Client mit API verbinden✓
    - Fetch✓
    - Ausgaben✓




## GitHub
- Git verknüpfen!

#
## List-Aufgaben 16.07 - 23.07

-   Code dokumentieren 1/4 Tag

-   Wireframe zeichnen (Concepts) 1/2 Tag
  - Identify funtionality: Crate, view and delete games
                           Add, remove and update players per game
                            ...

-   Datenmodell 1/2 Tag
    - table  name=ListUserData
    - columns = playerID(INT, PrimaryKey),username(String), userscore(INT),gameID(INT, ForeignKey)

    - table name=ListGameData
    - columns = gameID(INT, PrimaryKey), gameName(String)       

    - Design decision usernames unique: true ? false

- API 1 Tag
    - GET ../games 
        - Request: empty
        - Response: 200: JSONArray of all games                    
    - GET ../games/gameID
        - Request: empty
        - Response: 200: JSONArray of all player of gameID
                    404: GameID not found
    - POST /games/gameID
        - Request: GameName
        - Response: 200: OK
                    400: Bad Request (e.g. GameName is empty)
                    409: GameID  already exists
    - DELTE /games/gameID
        - Request: void
        - Response: 200: OK
                    404: ID not found
    - POST ../games/gameID/playerID
        - Request: playerscore
        - Response: 200, 404, 409
    - PUT ../games/gameID/playerID
        - Request: playerscore
        - Response: 200, 404
    - DELETE /game/gameID/playerID
        - Request: void
        - Response: 200: OK
                    404: Player or GameID not found

- Client 1 1/2 Tage
    - UI / UX Design => Ask Pia nicely
     - Two lists, how to arragne them?
     - Which screen formats do you want to support? Big PC Monitor vs. Smartphone vs. Tablet?
      
    - Program two list views and navigation between them based on UX design 
    - Error handling


    