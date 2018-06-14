import { createSelf, getSelf } from "../controller/self";

import { Router } from "express";
import { setLocation } from "../controller/location";
import validate from "../middleware/validate";

const api = Router();

api.post(
  "/self",
  validate({
    name: /^[a-zA-Z]*$/
  }),
  createSelf
);

api.get("/self", getSelf);

api.post(
  "/location",
  validate({
    city: /^[a-zA-Z]*$/
  }),
  setLocation
);

export default api;
