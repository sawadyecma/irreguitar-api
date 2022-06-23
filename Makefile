server/run:
	deno run --allow-net --allow-read --allow-write --watch=./ ./server/src/server.ts

db:
	deno run --allow-read --allow-write ./db/db.ts

# create migration file
migration/create:
	cd ./db && deno run -A --unstable https://deno.land/x/nessie@2.0.5/cli.ts make ${name}

migration/run:
	cd ./db && deno run -A --unstable https://deno.land/x/nessie@2.0.5/cli.ts migrate

migration/rollback:
	cd ./db && deno run -A --unstable https://deno.land/x/nessie@2.0.5/cli.ts rollback

seed/create:
	cd ./db && deno run -A --unstable https://deno.land/x/nessie@2.0.5/cli.ts make:seed ${name}

seed/run:
	cd ./db && deno run -A --unstable https://deno.land/x/nessie@2.0.5/cli.ts seed 
