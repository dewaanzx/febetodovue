const db = require("../../config/database");

const { Model } = require("objection");

Model.knex(db);

class Todo extends Model {
  static get tableName() {
    return "todos";
  }

  static get jsonSchema() {
    return {
      type: "object",

      required: ["title", "checked"],

      properties: {
        title: {
          type: "string",
        },
        group_id: {
          type: "integer",
        },
        checked: {
          type: "integer",
        },
      },
    };
  }
}

module.exports = Todo;
