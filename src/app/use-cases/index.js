import usersDb from '../data-access'
import makeListAllUsers from './list-allUsers'

const handleModeration = makeHandleModeration({
  initiateReview: async () => {} // TODO: Make real initiate review function.
})
const listAllUsers = makeListAllUsers({ usersDb })

const userService = Object.freeze({
  listAllUsers
})

export default userService
export { listAllUsers }
