import * as bodyparser from "body-parser";

import { static as ExpressStatic, Router } from "express";

import api from "./routes/api";

const router = Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

router.use("/api", api);

router.get("/*", ExpressStatic("./static"));

export default router;
