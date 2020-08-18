import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { setRoutes } from "./route/mod.ts";
import {
  logger as midLogger,
  timing,
  empty,
} from "./middleware/mod.ts";
import { logger } from "./service/logger.ts";

const app = new Application();

app.use(midLogger);
app.use(empty);
app.use(timing);

setRoutes(app);

const port: number = Number(Deno.env.get("PORT")) || 80;

app.listen({ port });
logger.success(`Server listen at http://localhost:${port}/`);
