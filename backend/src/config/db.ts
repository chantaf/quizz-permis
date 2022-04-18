import { connect } from 'mongoose';
export const db = async () => {
  const DATABASE_URL = process.env.DATABASE_URL as string;
  const connection = await connect("mongodb+srv://rafik:1998@cluster0.i5znk.mongodb.net/Permi-de-Conduire?retryWrites=true&w=majority").catch((err) => {
    const message = `😵 Error connecting to database: ${err.message}`;
    console.error(message);
    process.exit(1);
  });
  return connection;
};
