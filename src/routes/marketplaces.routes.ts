import { MarketplacesController } from "../controllers/marketplaces.controller";
import { Router } from "express";

export const marketplacesRouter = Router()
const marketplacesController = new MarketplacesController()

marketplacesRouter.post("/", marketplacesController.criarHandle)
marketplacesRouter.get("/", marketplacesController.pesquisaHandle)