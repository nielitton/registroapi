import { Request, Response } from "express";
import { MarketplaceService } from "../services/marketplaces/marketplaces.service";


export class MarketplacesController {
    async criarHandle(req: Request, res: Response) {
        const { nome } = req.body
        
        const marketplaceService = new MarketplaceService()
        
        const response = await marketplaceService.create({ nome })

        res.status(201).json(response)
    }
    async pesquisaHandle(req: Request, res: Response) {
        const pegarService = new MarketplaceService()

        const response = await pegarService.getMarketplaces()

        res.status(200).json({ "Marketplaces": response })
    }
}