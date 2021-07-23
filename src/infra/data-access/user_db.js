export default function buildUsersDb ({ makeDb }) {
  return Object.freeze({
    findAll,
  })
  async function findAll ({ publishedOnly = true } = {}) {
    const db = await makeDb()
    const query = publishedOnly ? { published: true } : {}
    const result = await db.collection('users').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
}