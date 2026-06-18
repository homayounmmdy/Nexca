import mongoose, { Schema } from 'mongoose';
import '../ConnetDB'; // Ensure the database connection is established
import { defaultSchemaOptions } from '../schemaOptions'; // Importing default schema options

const ReleasesSchema = new Schema(
   {
      title: String,
      description: String,
      date: Date,
      link: String,
   },
   defaultSchemaOptions
);

const Releases =
   mongoose.models.Releases || mongoose.model('Releases', ReleasesSchema);

export default Releases;
