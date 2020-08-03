# deno-docker

A docker file which contain the latest deno release.

## Sample Usage

## Use the interpreter

`docker run -it tabspace/deno`

## Run the Deno welcome script

`docker run tabspace/deno run https://deno.land/std/examples/welcome.ts`
`docker run tabspace/deno run --allow-net --allow-env https://raw.githubusercontent.com/TabSpace/deno-docker/master/server.ts`
