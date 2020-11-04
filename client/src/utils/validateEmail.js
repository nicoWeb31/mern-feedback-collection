/* eslint-disable import/no-anonymous-default-export */ //trim supprime espace
//trie des email invalide
//filter use emailregex.com
//The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {
    const invalidEmailArray = emails.split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false)

    if (invalidEmailArray.length) {
        return `These emails are invalid: ${invalidEmailArray}`
    }

    return;
}