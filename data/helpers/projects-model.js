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
            id: "project.id",
            name: "projects.name",
            description: "projects.description",
            completed: "projects.completed"
        })
        .where({ "projects.id": id })
        .first();

        projects.actions = await db("actions")
            .select({
                id: "actions.id",
                description: "actions.description",
                notes: "actions.notes",
                completed: "actions.completed"
            })
            .where({
                "actions.project_id": id
            });

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
    const editedProject = await db("projects")
        .where({ id })
        .update(item);
    if (editedProject) {
        const project = await findById(id);
        return project;
    }
}