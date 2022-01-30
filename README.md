# API URL Shortener

API para encurtar URL

## Requeriments

* [cloud.mongodb](https://cloud.mongodb.com)
* [nodejs](https://nodejs.org)
* [expressjs](https://expressjs.com)
* [typescript](https://www.typescriptlang.org)
* [cors](https://www.npmjs.com/package/cors)
* [cors github](github.com/expressjs/cors)

# Configuring the package.json

- `"build:watch": "tsc -w"`

Script para que o tsc (Compilador do TypeScript) gere .js (build) sempre que .ts for modificado.

- `"dev": "nodemon ./dist/index.js"`

Script para que o nodemon reinicialize a execução do servidor sempre que .js for modificada.

# Available Scripts

## In the project directory, you can run:

- `npm install`
- `npm run build`
- `npm run dev`