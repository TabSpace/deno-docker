# deno-docker

A docker file which contain the latest deno release.

## Sample Usage

### Build

`docker image build -t deno .`

### Use the interpreter

`docker run -it deno`

### Run the Deno welcome script

Hello world

`docker run deno run https://deno.land/std/examples/welcome.ts`

OAK Demo

- `docker run -p 3000:80 deno`
