export default function makeGetAllUsers ({ listAllUsers }) {
  return async function getAllUsers () {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      
      await listAllComments() 

      return {
        headers,
        statusCode: 200,
        body: postComments
      }
    } catch (e) {
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}