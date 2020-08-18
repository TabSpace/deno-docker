FROM debian:buster-slim

WORKDIR /install

RUN apt-get update && apt-get install curl unzip -y
RUN curl -fsSL https://x.deno.js.cn/install.sh | sh

ENV DENO_DIR="/root/.cache/deno"
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
ENV PORT=80
EXPOSE 80

WORKDIR /usr/src/app
COPY . .
RUN deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts

ENTRYPOINT ["denon"]
CMD ["start"]
