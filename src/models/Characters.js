import mongoose from 'mongoose';

const charactersSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    class: { type: String, required: true },
    race: { type: String, required: true },
    alignment: { type: String, required: true },
    background: { type: String },
  },
  {
    versionKey: false,
  },
);

const characters = mongoose.model('characters', charactersSchema);

export default characters;
