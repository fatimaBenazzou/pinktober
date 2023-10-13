import { Router, Request, Response } from "express";

import { MAIN_URL, MediaRoute, PROJECT_Name } from "../config/Env.js";
import { RedirectPage } from "../config/Templates.js";
import { formatString } from "../utils/Strings.js";

const indexRouter = Router();

const Page = formatString(RedirectPage, { MediaRoute, PROJECT_Name, MAIN_URL });

indexRouter.get("/", async (_req: Request, res: Response) => {
	res.send(Page);
});

export default indexRouter;
