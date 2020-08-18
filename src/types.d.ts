import { Context as OakContext } from "https://deno.land/x/oak/mod.ts";
import { Logger } from "./service/logger.ts";

export interface Context extends OakContext {
  logger?: Logger;
}
