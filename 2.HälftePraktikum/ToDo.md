## List-Aufgaben 16.07 - 23.07

-   Code dokumentieren 1/4 Tag ✓
-   Code ordnen ✓

-   Wireframe zeichnen (Concepts) 1/2 Tag✓
  - Identify funtionality: Crate, view and delete games✓
                           Add, remove and update players per game✓
                            ...

-   Datenmodell 1/2 Tag✓
    - table  name=ListUserData✓
    - columns = playerID(INT, PrimaryKey),username(String), userscore(INT),gameID(INT, ForeignKey)✓

    - table name=ListGameData✓
    - columns = gameID(INT, PrimaryKey), gameName(String)  ✓     

    - Design decision usernames unique: true ? false x

- API 1 Tag
    - ✓GET ../games ✓
        - Request: empty ✓
        - Response: 200: JSONArray of all games ✓                 
    - ✓GET ../games/gameID ✓
        - Request: empty ✓
        - Response: 200: JSONArray of all player of gameID ✓
                    404: GameID not found ✓
    - ✓POST /games/gameID
        - Request: GameName✓
        - Response: 200: OK
                    400: Bad Request (e.g. GameName is empty)
                    409: GameID  already exists
    - PATCH ../games/gameID/playerID
        - Request: playerscore
        - Response: 200, 404, 409
    - PUT ../games/gameID/playerID
        - Request: playerscore
        - Response: 200, 404
    - DELETE /games/gameID
        - Request: void
        - Response: 200: OK
                    404: ID not found
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