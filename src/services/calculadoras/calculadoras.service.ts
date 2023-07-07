import { prisma } from "../../prisma/client";
import { Calculadoras } from "@prisma/client";
import { ICriarMarketplace } from "../../interfaces/marketplaces";

export class CalculadorasService {
  async create({ nome }: ICriarMarketplace): Promise<Calculadoras> {
    const novoMarketplace = await prisma.calculadoras.create({
      data: {
        nome,
      },
    });
    return novoMarketplace;
  }
  async getCalculadoras() {
    const calculadoras = prisma.calculadoras.findMany({
      select: {
        id: true,
        nome: true,
        registros: {
          select: {
            id: true,
            marketplace: {
              select: {
                id: true,
                nome: true,
              },
            },
            preco: true,
            sku: true,
          },
        }
      }
    })

    return calculadoras;
  }
}
