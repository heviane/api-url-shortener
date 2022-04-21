# Node API URL Shortener

API em node para encurtar URLs.

## Requisitos

- [Node](https://nodejs.org/en)
- [express](https://expressjs.com)
- [MongoDB Cloud](https://cloud.mongodb.com)

## Initialize new project

`npm init`

## Initialize existing project

`npm install`

## Run project

`npm run build`

`npm run dev`

## Configuring the package.json

Script para tsc (TypeScript Compiler) gere .js (build) sempre que .ts for modificado:

`"build:watch": "tsc -w"`

Script para [nodemon](https://nodemon.io):

`"dev": "nodemon ./dist/index.js"`

## References

- [mongoosejs.com](https://mongoosejs.com)
Object modeling for node.js
- [typegoose](https://typegoose.github.io/typegoose)
- [typegoose github](https://github.com/typegoose/typegoose)
Typegoose is a "wrapper" to easily write Mongoose models with TypeScript
- [Typegoose - Defina modelos Mongoose usando classes TypeScript](https://morioh.com/p/9424a22182a9)
