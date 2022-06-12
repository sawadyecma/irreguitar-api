import { DB } from "https://deno.land/x/sqlite@v3.4.0/mod.ts";

const turnings = [
  ["1", "Regular"],
  ["2", "DADGAD"],
  ["3", "DAEAC#E"],
];
const db = new DB("./irreguitar.sqlite");

db.query(
  `CREATE TABLE IF NOT EXISTS 
  turnings
  (
    id VARCHAR PRIMARY KEY
    ,name VARCHAR NOT NULL
    ,created_at timestamp NOT NULL DEFAULT current_timestamp
    ,updated_at timestamp NOT NULL DEFAULT current_timestamp
  );`
);
for (const turning of turnings)
  db.query("INSERT INTO turnings(id,name) VALUES(?,?)", turning);

db.close();
