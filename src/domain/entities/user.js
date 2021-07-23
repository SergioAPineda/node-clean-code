export default function buildMakeComment () {
  return function makeComment ({
    name,
    phone, 
    mail
  } = {}) {
    if (!name) {
      throw new Error('User must have an name.')
    }
    if (!phone) {
      throw new Error('User must contain a phone.')
    }
    if (phone > 0 || phone ==! 'e' ) {
      throw new Error('Phone number must be greater than 0 and different of e.')
    }
    if (!mail) {
      throw new Error('User must contain a mail.')
    }
    return Object.freeze({
      getName: () => name,
      getPhone: () => phone,
      getMail: () => mail,
    })

  }
}