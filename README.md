# Audit messages coming to operating-trainroute

To run locally, you will first need to have a postgres instance.

1. `cd postgres && sh build.sh && sh run.sh && cd ..`
2. `cd backend`
3. `source env.sh` will set the appropriate env vars
4. `yarn install` will install the needed packages for server
5. `yarn knex migrate:latest` will create the needed schema
6. `yarn knex seed:run` will insert a few records

The latest command will have a few records only. If you wish to have a realistic chunk of data, you can go to cloud9 and dump the db.

This can be accomplished with the pg_dump tool.

`pg_dump -t incoming_message_audit -Z 9 -f audit.sql.gz` will result in a compressed archive of the incoming_message_audit table. The incoming audit table is typically some gigabytes large, so it might take a while. When done, download this file to your local computer.

You can use the psql to restore the data locally.

`gunzip audit.sql.gz`, then: `pgsql < audit.sql`

To run the backend, `cd backend`, then `yarn start`.

To run the frontend, `cd frontend`, then `yarn install`, finally `yarn start`.

The frontend proxies requests to the backend, so you want to have that running before running the frontend.