import mongoose, { Document, Schema } from 'mongoose';

const opts = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

export const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    cnpj: { type: String, required: true },
    email: { type: String, required: true },
  },
  opts,
);

export type Client = Document & {
  id: string;
  name: string;
  cnpj: string;
  email: string;
};

export default mongoose.model<Client>('Client', ClientSchema);
