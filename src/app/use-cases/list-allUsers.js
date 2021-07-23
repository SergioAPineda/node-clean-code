export default function makeListAllusers ({ usersDb }) {
  return async function listAllUsers () {

    const users = await usersDb.findAll()

    return users;

  }
}