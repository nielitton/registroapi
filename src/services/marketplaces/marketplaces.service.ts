import { prisma } from "../../prisma/client";
import { Marketplaces } from "@prisma/client";
import { ICriarMarketplace } from "../../interfaces/marketplaces";

export class MarketplaceService {
    async create({ nome }: ICriarMarketplace ): Promise<Marketplaces> {
        const novoMarketplace = await prisma.marketplaces.create({
            data: {
                nome             
            }
        })
        return novoMarketplace
    }
    async getMarketplaces() {
        const marketplaces = prisma.marketplaces.findMany({
            select: {
              id: true,
              nome: true,
              registros: {
                select: {
                    id: true,
                    calculadora: {
                        select: {
                            id: true,
                            nome: true
                        }
                    },
                    sku: true,
                    preco: true,
                    margem: true
                }
              }
            }
        })

        return marketplaces
    }
}

