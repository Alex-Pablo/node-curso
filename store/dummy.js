const db  = {
    'user': [
    ]
}

async function list(table){
    return db[table]
}
async function get(table, id){
    let col = await list(table);
    return col.find( (item) => item.id === id ) || null
}
async function upsert(table, data){
    if (!db[table]) {
        db[table] = []
    }
    await db[table].push(data)
    return 'se gueardo correctament'
}
async function remove(table, id){
    let index = db[table].findIndex((e)=> e.id === id)
    return  db[table].splice(index, 1)
}

async function query(table, q){
    let col = await list(table) || [];
    let keys = Object.keys(q)
    let key = keys[0]
    return col.find( (item) => item[key[0]] === q[key[0]] ) || null
}

module.exports = {
    list, 
    get,
    upsert, 
    remove,
    query
}