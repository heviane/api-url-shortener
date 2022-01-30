// import { prop, Typegoose } from '@typegoose/typegoose'; // '@hasezoey/typegoose';

const prop      = require('@typegoose/typegoose').prop;
const Typegoose = require('@typegoose/typegoose').Typegoose;

export class URL extends Typegoose { //...ERRO AQUI...TypeError: Class extends value undefined is not a constructor or null

	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

export const URLModel = new URL().getModelForClass(URL);