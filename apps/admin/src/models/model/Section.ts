import mongoose, { Schema } from 'mongoose';
import '../ConnetDB'; // Ensure the database connection is established
import { defaultSchemaOptions } from '../schemaOptions'; // Importing default schema options

const sectionSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
      },
      secid: {
         type: Number,
      },
      templates: {
         type: String,
         trim: true,
      },
      activate: {
         type: Boolean,
      },
   },
   defaultSchemaOptions
);

const Section =
   mongoose.models.Section || mongoose.model('Section', sectionSchema);

export default Section;
