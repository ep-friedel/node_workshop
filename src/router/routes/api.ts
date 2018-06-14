import { createSelf, getSelf } from "../controller/self";

import { Router } from "express";
import validate from "../middleware/validate";

const api = Router();

api.post(
  "/self",
  validate({
    name: /[a-zA-Z]*/g
  }),
  createSelf
);

api.get("/self", getSelf);

export default api;
