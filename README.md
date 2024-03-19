```
                                    |__
                                     |\/
                                     ---
                                     / | [
                              !      | |||
                            _/|     _/|-++'
                        +  +--|    |--|--|_ |-
                     { /|__|  |/\__|  |--- |||__/
                    +---------------___[}-_===_.'____                 /\
                ____`-' ||___-{]_| _[}-  |     |_[___\==--            \/   _
 __..._____--==/___]_|__|_____________________________[___\==--____,------' .7
|                                                                     BB-61/
 \_________________________________________________________________________|

[Matthew Bace](https://ascii.co.uk/art/battleship)

 ```


# Battleship
A simple battleship game!

Sink the other player’s fleet.

Each player occupies a naval battlefield with their respective fleet. They each receive coordinates for ship placement, including vessel category. Opponents are not initially aware of each other's ship placement.


# Pre-requisites
- node v20
- create a .env file by copying .env.example and add this to the file `API_ENDPOINT=SERVER_URL_HERE`

# Initial setup

```bash
  # Set propper node version (v20)
  nvm use

  # Install dependencies
  npm i

  # Run in dev mode with live data
  npm run dev

  # Run in dev mode with mock data (no fetching needed)
  # see Development section for more info
  npm run dev:mock
```


# Development

The app can be run in two modes, with `live` or  `mock` data mode.

If you go for `live` data mode the app fetches data on every save

If you go for `mock` data mode the app uses a local file with mock data. No fetching needed and no need for internet connection.


With *live* data

```bash
  # Run in dev mode
  npm run dev
```

With *mock* data

```bash
  # Run in dev mode
  npm run dev:mock
```

# Testing

Run test:

```bash
  npm run test
```

Run tests in watch mode:

```bash
  npm run test:watch
```

# Typescript

run typescript in watch mode:

```bash
  npm run ts
```

# Building
The app uses [esbuild](https://esbuild.github.io/) to build the app. To build the app, run `npm run build`

This script fires an esbuild script `esbuild src/index.js --platform=node --target=node20 --format=esm --packages=external --bundle --minify --sourcemap --outfile=dist/bundle.js`

- `src/index.js`: esbuild starts here and follows all import statements to bundle the entire application together.

- `--platform=node`: This option tells esbuild to compile your code for a Node.js environment. 

- `--target=node20`: This option tells esbuild to compile your code for Node.js version 20. It will ensure that the output code uses syntax and APIs compatible with this version of Node.js.

- `--format=esm`: This option tells esbuild to output ES modules (using import and export syntax) instead of CommonJS modules (using require and module.exports syntax).

- `--packages=external`: Use this setting to exclude all of your package's dependencies from the bundle.

- `--bundle`: This option tells esbuild to bundle all your code into a single file.

- `--minify`: This option tells esbuild to minify the output code, reducing its size.

- `--sourcemap`: This option tells esbuild to generate a source map, which can help with debugging by showing you the original line numbers and file names in your source code.

- `--outfile=dist/bundle.js`: This option specifies the output file. The bundled and minified code will be written to this file.


You can find the build in the `dist` folder.

You can run the build by running:

```bash
  npm start
```



# App structure

The `mode` folder containes the different game modes. The game modes are:
- [x] `automatic` -> no interaction
- [x] `single` -> 1 player
- [ ] `multi` -> 2 players
- [ ] `ai` -> play against AI
- [ ] `story` -> play in story mode
- [ ] `balistic` -> 💣

The `utils` folder contains the game helper logic and the corresponding tests.

The `src/index.ts` file is the entry point of the app.


# Versioning

To tag a new version, run `npm run release` and follow the instructions.

The command tags the code and commits the changes to the repository.

- 1.1.0 -> initial setup and game logic - JUST MAKE IT WORK
- 1.2.0 -> modulize the game logic, added tests, improve the game logic
- 1.3.0 -> add build tool, esbuild
- 1.4.0 -> Map api response data to ensure quality
- 1.5.0 -> Refactor the automatic mode logic
- 2.0.0 -> Implement 1 player mode + typescript
- 2.1.0 -> Hide opponents board, make build work with typescript
- 2.2.0 -> Improve the typescript
- 3.0.0 -> Implement 2 player mode
- 4.0.0 -> Implement player against AI mode

