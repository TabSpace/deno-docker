import {
  Application,
  Router,
} from "https://deno.land/x/oak@v6.0.1/mod.ts";
import {
  site,
} from "../controller/mod.ts";

export const router = new Router();

export function setRoutes(app: Application) {
  router.get("/", site.home);

  app.use(router.routes());
  app.use(router.allowedMethods());
}
