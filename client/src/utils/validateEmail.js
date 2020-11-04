/* eslint-disable import/no-anonymous-default-export */ //trim supprime espace
//trie des email invalide
//filter use emailregex.com use html here
//The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default (emails) => {
    const invalidEmailArray = emails.split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false)

    if (invalidEmailArray.length) {
        return `These emails are invalid: ${invalidEmailArray}`
    }

    return;
}