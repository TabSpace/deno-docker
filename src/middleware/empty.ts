import { Context } from "../types.d.ts";

export async function empty(ctx: Context, next: Function) {
  await next();
  const {
    response,
  } = ctx;
  if (!response.body) {
    response.body = "Not Found!";
    response.status = 404;
    ctx.logger?.error('404 Not found')
  }
}
