import { Request, Response } from "express";
import { CalculadorasService } from "../services/calculadoras/calculadoras.service";


export class CalculadorasController {
    async criarHandle(req: Request, res: Response) {
        const { nome } = req.body
        
        const calculadoraService = new CalculadorasService()
        
        const response = await calculadoraService.create({ nome })

        res.status(201).json(response)
    }
    async pesquisaHandle(req: Request, res: Response) {
        const pegarService = new CalculadorasService()

        const response = await pegarService.getCalculadoras()

        res.status(200).json({ "Calculadoras": response })
    }
}