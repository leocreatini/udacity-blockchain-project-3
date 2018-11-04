# Udacity Blockchain Project 2

Build an API to get block info and add a new block to the chain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need NodeJS and NPM, you can [download it here](https://nodejs.org/en/download/).

```json
"engines": {
  "node": "^8"
}
```

### Installing

Begin by downloading dependencies and setting up the app with:

```bash
yarn
```

OR

```bash
npm install
```

### Using

To start the server and to be able to interact with the API, run:

```bash
yarn start
```

OR

```bash
npm start
```

Open browser to http://localhost:8080/block/0 to see the 0th block information. You can then replace the "0" with any other positive integer that's equal or less than the current block height.

## Testing

Explain how to run the automated tests for this system

## Built With

* [ExpressJS](https://github.com/expressjs/express) - NodeJS Framework
* [NodeJS](https://nodejs.org/en/) - Serverside JavaScript (among other uses)

## Authors

* **Leo Creatini** - [leocreatini](https://github.com/leocreatini)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Udacity
