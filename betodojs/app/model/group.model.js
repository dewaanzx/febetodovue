const db = require("../../config/database");

const { Model } = require("objection");

Model.knex(db);

class Group extends Model {
  static get tableName() {
    return "groups";
  }

  static get jsonSchema() {
    return {
      type: "object",

      required: ["name"],

      properties: {
        name: {
          type: "string",
        },
      },
    };
  }
}

module.exports = Group;
