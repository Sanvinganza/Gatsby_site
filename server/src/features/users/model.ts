import mongoose, { Schema, Document } from 'mongoose';

export interface IUsers extends Document {
  login: string;
  name: string;
  password: string;
}

const UserAuth: Schema = new Schema({
  login: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model<IUsers>('Users', UserAuth);

export { Users };
