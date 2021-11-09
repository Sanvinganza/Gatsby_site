import mongoose, { Schema, Document } from 'mongoose';

export interface IUsers extends Document {
  username: String;
  email: string;
  password: string;
}

const UsersSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model<IUsers>('Users', UsersSchema);

export { Users };
