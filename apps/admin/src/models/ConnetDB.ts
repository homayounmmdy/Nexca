import mongoose from 'mongoose';

/**
 * The MongoDB connection URI retrieved from the environment variables.
 * @type {string}
 */

/**
 * Connects to the MongoDB database using the provided URI.
 * Also sets Mongoose's Promise implementation to use the global Promise object.
 * @throws {Error} If the connection to the database fails.
 */
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
   throw new Error('Please define the MONGODB_URI environment variable');
}

// Only connect if not in test mode
if (process.env.NODE_ENV !== 'test') {
   mongoose.connect(MONGODB_URI)
      .then(() => console.log('MongoDB connected successfully'))
      .catch((err) => console.error('MongoDB connection error:', err));

         mongoose.Promise = global.Promise;
}

export default mongoose;