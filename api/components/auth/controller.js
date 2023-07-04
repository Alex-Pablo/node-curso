const TABLE = 'auth';
const  btcrypt = require('bcrypt')
const auth = require('../../../auth')
module.exports = function ( injectedStore ){

    if (!injectedStore) injectedStore = require('../../../store/dummy')

    async function login(username, password){
        const data = await injectedStore.query(TABLE, {  username: username })
        console.log(username, 'chino');
        if (await btcrypt.compare(password, data.password)) {
            delete data.password
            return auth.sign(data)
        } else {
            throw new Error('Invalid information')
        }

    }
    async function upsert(data){
        const authData = {
            id: data.id
        }
        if(data.username){
            authData.username = data.username
        }
        if(data.password){
            authData.password = await btcrypt.hash(data.password, 5)
        }
        return injectedStore.upsert(TABLE, authData)
    }


    return {
        upsert,
        login
    }

};