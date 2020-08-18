import { Context } from "../types.d.ts";

export const site = {
  home(ctx: Context) {
    ctx.response.body = "page home";
  },
  info(ctx: Context) {
    ctx.response.body = "page info";
  },
};
