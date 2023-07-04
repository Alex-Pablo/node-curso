const store = require('../../../store/dummy');
const TABLE = 'user';
const { v4: uuidv4  } = require('uuid')
const  auth = require('../auth')
module.exports = function ( injectedStore ){

    if (!injectedStore) injectedStore = require('../../../store/dummy')
    function list(){
        return injectedStore.list(TABLE);
    }
    function get(id){
        return injectedStore.get(TABLE, id);
    }
    async function add(body){ 
        const user = {
            name: body.name,
            username: body.username
        }

        if (body.id) {
            user.id = body.id
        }else{
            user.id =  uuidv4(); 
        }

        if (body.password || body.username ) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password:  body.password
            })
        }
        return injectedStore.upsert(TABLE, user);
    }
    function remove(id){
        return injectedStore.remove(TABLE, id);
    }
    return {
        list,
        get,
        add,
        remove
    }
}
