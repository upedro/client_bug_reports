import mongoose, { Document, Schema } from 'mongoose';
import { Client } from '../client/client.entity';
import { Bug } from '../bug/bug.entity';

const opts = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

export const ReportSchema = new Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    bug: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bug',
      required: true,
    },
    received: { type: Boolean, required: false, default: false },
    started: { type: Boolean, required: false, default: false },
    finish: { type: Boolean, required: false, default: false },
  },
  opts,
);

export type Report = Document & {
  id: string;
  client: Client;
  bug: Bug;
  received: boolean;
  started: boolean;
  finish: boolean;
};
export default mongoose.model<Report>('Report', ReportSchema);
