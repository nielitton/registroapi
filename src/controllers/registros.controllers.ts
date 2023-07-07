import { Request, Response } from "express";
import { RegistrosService } from "../services/registros/registros.service";


export class RegistrosController {
    async criarHandle(req: Request, res: Response) {
        const { sku, marketplaceNome, preco, margem, calculadoraNome } = req.body
        
        const registroService = new RegistrosService()
        
        const response = await registroService.create({ sku, marketplaceNome, preco, margem, calculadoraNome })

        res.status(201).json(response)
    }
    async pesquisaHandle(req: Request, res: Response) {
        const pegarService = new RegistrosService()

        const response = await pegarService.getRegistros()

        res.status(200).json({ "Registros": response })
    }
}