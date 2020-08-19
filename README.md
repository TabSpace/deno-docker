# deno-docker

A deno docker demo.

## Prepare

Inastall [denon](https://github.com/denosaurs/denon)

- `deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts`

## Development

- `denon dev`

## Distribute with docker

- `denon build`
- `docker image build -t tab/deno .`
- `docker run -p 3000:80 tab/deno`
