import { Context } from "../types.d.ts";

export const api = {
  info(ctx: Context) {
    ctx.response.body = {
      code: 0,
      msg: "ok",
      data: "custom info",
    };
  },

  error() {
    throw new Error("custom error");
  },
};
