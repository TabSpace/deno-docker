# deno-docker

A docker file which contain the latest deno release.

## Sample Usage

### Build

`docker image build -t deno .`

### Use the interpreter

`docker run -it deno`

### Run the Deno demo

Hello world

`docker run deno run https://deno.land/std/examples/welcome.ts`

OAK Demo

- `docker run -p 3000:80 deno`

Local Demo

- `deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts`
- `denon run -A entry.ts`
