import { RegistrosController } from "../controllers/registros.controllers";
import { Router } from "express";

export const registrosRouter = Router()
const registrosController = new RegistrosController()

registrosRouter.post("/", registrosController.criarHandle)
registrosRouter.get("/", registrosController.pesquisaHandle)