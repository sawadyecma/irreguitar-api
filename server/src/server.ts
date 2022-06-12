import { oak } from "./deps.ts";
import { router } from "./router.ts";

const app = new oak.Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 11741 });
