
Let’s play battleship!

## Objective

Sink the other player’s fleet.

## Gameplay

Each player occupies a naval battlefield with their respective fleet. They each receive coordinates for ship placement, including vessel category. Opponents are not initially aware of each other's ship placement.


## Types of vessels:
  Aircraft Carrier (A)
  Battleship (B)
  Destroyer (D)
  Patrol Boat (P)
  Submarine (S)


# The flow
- Fetch a board pr player (2x)
- Fetch a list of coordinates to shoot pr player?

- draw the board
- get the coordinates to shoot
  - keep track of hits and misses
    - if all ships are hit, the game is over
- draw the board again

- create logic for playing the game completely no interaction
- create logic for playing the game with interaction 1 players
- create logic for playing the game with interaction 2 players
- play agains AI?

# ====================
#
#       TODOs
#
# ====================

# NEXT

- NEXT ->
  - fix all lint errors
  - make sure build script works!

- hide the opponents board

- look into how to improve the nodemon experience with typescript

- make build work with typescript

- add test to single player mode

- BUG: after an invalid coordinate, the game crashes

- update oneplayer logic to handle coordinates from an api call

TESTING
- test logic for winning
- what happens if you take the same coordinate twice?
  - nothing, it is a miss

- Improve ts

- the fetcherUtil test for successfull fetch is not working

----


- map data from api to the game
  - for easy switching endpoint data later

- next game loop, player puts in a coordinate, the bot fetches from api, then every second round player asked for a coordinate

- show initial map and the map at the end, possible to show the map after each round?

- splash screen
  - how to play box

- create logic for sending one coord.

- share the Aidan (gpt) chat

- add a frontend -> nextjs? Express? react?
  - Express server?


- select gameplay
  1. auto -> all done by the computer 🤖
  2. single 🎮
  3. two player 🎮 + 🎮
  4. AI 🤖 + 🎮
  5. Story mode 📰
  6. Balistic mode 💣


# v2
- story mode
- Go balistic mode
    - The rule. You are sending nuckes. One hit you win!



# ====================
#
#       DONE
#
# ====================
x implement 1 player mode -> create the PR, do not merge
x add typescript
  x 1 player with typescript
x create a splash screen

x add linting and typescript cheking
x also as an action on git

x clean the code
x commit the changes
x make all typescript
  x index.js
x make index work
x make the tests work

x clean the TODO list

x improve the automatic mode logic -> refactore reused code

x check the data from api calls that it is in the right format. If not send error
  x sanitize json
      Length
      Amount of vessels,
      Amount of shots

x start next version -> implement build tool -> esbuild
  x npm start -> run build
  x npm run build -> run esbuild

x keep map in session
x check if hit, miss, log result of that round in session too?
x create simple fetch function
x README
  x how to run the application
  x how to develop
  x what tests are used
x add to readme time spent/ time tracking

x create a logger function

x log the gameplay -> create a logger function?

x return the result as a json object
  x -> {player: 'Fred', target: 'A4', result: 'Missed'}
x create tests for the automatic mode logic
x commit changes
x add version
x merge PR
x implement husky -> no, use Github actions for now!

x use the fetcher function in the game logic
x move GLOBALS to a config file
x seperate the logic into files and create tests

x add logic for end game summary
  x Winner: Wilma sunk Fred’s fleet, and had 4 remaining ships.
  x Loser: Fred hit 0 of 5 ships. -> this is not possible if winner have 4 remaining ships, how can Fred hit 0 of 5?

x Seperate logic
  x create board
  x fetch coords
  x Update board
x make sure all works offline
  x add TEST env variable -> if true use mockdata

x github actions

x create a 10x10 grid

x create mockdata
x install jest
x generate the board
x any need for playground file? -> NO!
x Pr all the way on every version?
