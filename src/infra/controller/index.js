import {
  listAllUsers
} from '../use-cases'
import makeGetAllUsers from './getAll-users'

const getAllUsers = makeGetAllUsers({
  listAllUsers
})

const userController = Object.freeze({
  getAllUsers
})

export default userController
export { getAllUsers }