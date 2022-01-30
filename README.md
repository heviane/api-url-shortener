# API URL Shortener

API para encurtar URL
## Requeriments

* [nodejs](https://nodejs.org)
* [expressjs](https://expressjs.com)
* [typescript](https://www.typescriptlang.org)

* [cloud.mongodb](https://cloud.mongodb.com)
NoSQL database in the cloud
* [mongoosejs.com](https://mongoosejs.com)
Object modeling for node.js
* [typegoose](https://typegoose.github.io/typegoose)
* [typegoose github](https://github.com/typegoose/typegoose)
Typegoose is a "wrapper" to easily write Mongoose models with TypeScript

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

# References to articles

* [Typegoose - Defina modelos Mongoose usando classes TypeScript](https://morioh.com/p/9424a22182a9)