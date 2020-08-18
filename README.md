# deno-docker

A docker file which contain deno demo.

## Development

Local Demo

Inastall [denon](https://github.com/denosaurs/denon)

- `deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts`

Start with dev mode

- `denon dev`

## Docker Demo

- `docker image build -t deno .`
- `docker run -p 3000:80 deno`
