import { CalculadorasController } from "../controllers/calculadoras.controller";
import { Router } from "express";

export const calculadorasRouter = Router()
const calculadorasController = new CalculadorasController()

calculadorasRouter.post("/", calculadorasController.criarHandle)
calculadorasRouter.get("/", calculadorasController.pesquisaHandle)