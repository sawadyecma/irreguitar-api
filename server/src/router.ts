import { oak, v4 } from "./deps.ts";
import { turnings } from "./persisted.ts";

export const router = new oak.Router();

router
  .get("/", (context) => {
    context.response.body = "irreguitar-api";
  })
  .get("/turnings", (context) => {
    context.response.headers.set("Content-Type", "application/json");
    context.response.body = { turnings: Array.from(turnings.values()) };
  })
  .post("/turnings", async (context) => {
    const body = context.request.body({ type: "json" });
    const input = (await body.value) as { name: string };
    const newId = crypto.randomUUID();
    const newTurning = { id: newId, name: input.name };
    turnings.set(newId, newTurning);
    context.response.body = { turning: newTurning };
  })
  .get("/turnings/:turningId", (context) => {
    const turning = turnings.get(context.params.turningId);
    context.response.body = { turning };
  })
  .put("/turnings/:turningId", async (context) => {
    const turningId = context.params.turningId;
    const turning = turnings.get(turningId);
    if (!turning) {
      context.response.status = oak.Status.NotFound;
      return;
    }

    const body = context.request.body({ type: "json" });
    const input = (await body.value) as { name: string };
    const updated = { ...turning, name: input.name };
    turnings.set(turningId, updated);

    context.response.body = { turning: updated };
  })
  .delete("/turnings/:turningId", async (context) => {
    const turningId = context.params.turningId;
    const turning = turnings.get(turningId);
    if (!turning) {
      context.response.status = oak.Status.NotFound;
      return;
    }

    turnings.delete(turningId);

    context.response.status = oak.Status.NoContent;
  });
