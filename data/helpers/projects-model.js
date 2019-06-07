const db = require("../dbConfig.js");

module.exports = {
    find,
    findById,
    create,
    remove,
    update
};

async function find() {
    const projects = await db("projects");
    return projects;
}

async function findById(id) {
    const project = await db("projects")
        .select({
            name: "projects.name",
            id: "project.id",
            actions: "actions.name"
        })
        .innerJoin("actions", "actions.project_id", "projects.id")
        .where({ "projects.id": id })
        .first();
    return project;
}

async function create(item) {
    const [id] = await db("projects").insert(item);
    if(id) {
        const project = await findById(id);
        return project;
    }
}

async function remove(id) {
    const project = await findById(id);
    if (project) {
        const deleted = await db("projects")
            .where({ id })
            .del();
        if (deleted) {
            return project;
        }
    }
}

async function update(item, id) {
    const editedproject = await db("projects")
        .where({ id })
        .update(item);
    if (editedproject) {
        const project = await findById(id);
        return project;
    }
}