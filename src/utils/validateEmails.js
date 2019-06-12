// from emailregex
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default (emails) => {
  // split email strings by comma
  const invalidEmails = emails
    .split(',')
    .map(email => emails.trim())
    .filter(email => re.test(email) === false)

    if (invalidEmails.length) {
      return `These emails are invalid: ${invalidEmails}`
    }

    return
}
