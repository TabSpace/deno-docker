import { Context } from "../types.d.ts";

export async function timing(ctx: Context, next: Function) {
  const start = Date.now();
  ctx.response.headers.set("X-Request-Time", `${start}`);
  await next();
  const end = Date.now();
  const dur = end - start;
  ctx.response.headers.set("X-Response-Time", `${end}`);
  ctx.response.headers.set("X-Response-Duration", `${dur}ms`);
  if (ctx.logger) {
    ctx.logger.log(`Response time: ${dur}ms`);
  }
}
