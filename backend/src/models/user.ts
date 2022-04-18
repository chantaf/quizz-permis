import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.


export interface IUser {
    firstname: string,
    lastname: string,
    adress: string,
    tel: string,
    score: number
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    adress: { type: String, required: true },
    tel: { type: String, required: true },
    score: { type: Number, required: true }

  },
  { timestamps: true }
);

// 3. Create a Model.
export const User = model<IUser>('User', schema);
