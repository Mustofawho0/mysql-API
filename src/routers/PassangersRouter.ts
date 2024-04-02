import { Router } from "express";
import {
  findPassangers,
  findPassangersSurvived,
  findPassangersSurvivedSex,
} from "../controllers/PassangersController";

const router = Router();

router.get("/", findPassangers);
router.get("/survived", findPassangersSurvived);
router.get("/survived/sex", findPassangersSurvivedSex);


export default router;
