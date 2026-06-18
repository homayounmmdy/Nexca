import mongoose, { Schema } from 'mongoose';
import '../ConnetDB'; // Ensure the database connection is established
import { defaultSchemaOptions } from '../schemaOptions'; // Importing default schema options

const ImgAdvSchema = new Schema(
   {
      advId: Number,
      advName: String,
      imgURL: String,
      imgAlt: String,
      body: String,
      link: String,
   },
   defaultSchemaOptions
);

const ImgAdv = mongoose.models.ImgAdv || mongoose.model('ImgAdv', ImgAdvSchema);

export default ImgAdv;
