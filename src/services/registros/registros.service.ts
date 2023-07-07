import { prisma } from "../../prisma/client";
import { ICriarRegistro } from "../../interfaces/registros";
import { Registros } from "@prisma/client";

export class RegistrosService {
    async create({ sku, marketplaceNome, preco, margem, calculadoraNome }: ICriarRegistro): Promise<Registros> {
        const novoRegistro = await prisma.registros.create({
            data: {
                sku,
                marketplaceNome,
                preco,
                margem,
                calculadoraNome                
            }
        })
        return novoRegistro
    }
    async getRegistros() {
        const registros = prisma.registros.findMany({
            select: {
                id: true,
                calculadora: {
                    select: {
                        id: true,
                        nome: true
                    }
                },
                sku: true,
                marketplace: {
                    select: {
                        id: true,
                        nome: true
                    }
                },
                preco: true,
                margem: true
            }
        })

        return registros
    }
}

