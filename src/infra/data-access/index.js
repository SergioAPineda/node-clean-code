import buildUsersDb from './user-db'
import mongodb from 'mongodb'
import makeConnection from './mongoDb_connection';

/* const MongoClient = mongodb.MongoClient
const url = process.env.DM_COMMENTS_DB_URL
const dbName = process.env.DM_COMMENTS_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })

CONNECTION_STRING=mongodb+srv://adminuser:retoSofka123@cluster0.i58xo.mongodb.net/user-db?retryWrites=true&w=majority


export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
} */

//makeConnection()

const usersDb = buildUsersDb({ makeConnection })
export default usersDb;