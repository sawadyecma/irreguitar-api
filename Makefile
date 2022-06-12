server/run:
	deno run --allow-net --allow-read --allow-write --watch=./ ./server/src/server.ts

db:
	deno run --allow-read --allow-write ./db/db.ts