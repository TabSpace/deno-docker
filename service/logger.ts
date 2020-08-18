import { Context } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import * as Colors from "https://deno.land/std@0.65.0/fmt/colors.ts";
import { formatTime } from "../util/time.ts";

export class Logger {
  ctx?: Context;

  constructor(ctx?: Context) {
    this.ctx = ctx;
  }

  _output(level: string, args: Array<any>) {
    const { ctx } = this;
    const ts = new Date();
    const strTs = formatTime(ts, {
      template: "{{YYYY}}.{{MM}}.{{DD}} {{hh}}:{{mm}}:{{ss}}.{{mss}}",
    });
    if (ctx) {
      args.unshift(`[${ctx.request.url}]`);
      args.unshift(`[${ctx.request.method}]`);
    }
    level = level.toUpperCase();
    args.unshift(`[${level}]`);
    args.unshift(strTs);
    console.log(...args);
  }

  debug(...args: any) {
    this._output("debug", args);
  }

  log(...args: any) {
    this._output("log", args);
  }

  info(...args: any) {
    this._output("info", args);
  }

  warn(...args: any) {
    this._output("warn", args);
  }

  error(...args: any) {
    this._output("error", args);
  }
}

export const logger = new Logger();
