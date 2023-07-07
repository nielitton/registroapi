import { Router } from "express";
import { registrosRouter } from "./registros.routes";
import { calculadorasRouter } from "./calculadoras.routes";
import { marketplacesRouter } from "./marketplaces.routes";

export const router = Router()

router.use("/registros", registrosRouter)
router.use("/calculadoras", calculadorasRouter)
router.use("/marketplaces", marketplacesRouter)

