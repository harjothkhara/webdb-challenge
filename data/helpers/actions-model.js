const db = require("../dbConfig.js");

module.exports = {
    find,
    findById,
    create,
    remove,
    update
};

async function find() {
    const actions = await db("actions");
    actions.forEach(action => 
        action.completed === 1
       ? (action.completed = true)
       : (action.completed = false) 
    );
    return actions;
}

async function findById(id) {
    const action = await db("actions")
        .where({ id })
        .first();
    action.completed === 1
       ? (action.completed = true)
       : (action.completed = false);
    return action;
}

async function create(item) {
    const [id] = await db("actions").insert(item);
    if(id) {
        const action = await findById(id);
        return action;
    }
}

async function remove(id) {
    const action = await findById(id);
    if(action) {
        const deleted = await db("actions")
            .where({ id })
            .del();
        if(deleted) {
            return action;
        }  
    }
}

async function update(item, id) {
    const editedAction = await db("actions")
        .where({ id })
        .update(item);
    if (editedAction) {
        const action = await findById(id);
        return action;
    }
}