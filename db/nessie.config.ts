import { nessie } from "./deps.ts";

const client = new nessie.ClientSQLite("./sqlite.sqlite");

/** This is the final config object */
const config: nessie.NessieConfig = {
  client,
  migrationFolders: ["./db/migrations"],
  seedFolders: ["./db/seeds"],
  migrationTemplate: "./db/template/migration.ts",
  seedTemplate: "./db/template/seed.ts",
};

export default config;
