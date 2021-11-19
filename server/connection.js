const { mongoClient, MongoClient } = require('mongodb')

async function main() {
  const uri =
    'mongodb+srv://Techn0mancer_X:Epsilon_6@cluster0.zapao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  try {
    await client.connect()
    await createListing(client, {
      firstName: 'Clayton',
      lastName: 'Balzer',
      email: 'clayton.balzer@gmail.com',
      password: 'abc123',
    })
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

main().catch(console.error)

async function createListing(client, newListing) {
  const result = await client
    .db('techConnect')
    .collection('Users')
    .insertOne(newListing)

  console.log(`New listing created with the following id: ${result.insertedId}`)
}
// createListing()

async function listDatabases(client) {
  // console.log(client)
  const databaseList = await client.db().admin().listDatabases()

  console.log('Databases:')
  databaseList.databases.forEach((db) => console.log(` - ${db.name}`))
}
