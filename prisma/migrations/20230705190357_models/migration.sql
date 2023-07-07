-- CreateTable
CREATE TABLE "Registros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sku" TEXT NOT NULL,
    "marketplaceNome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "margem" REAL NOT NULL,
    "calculadoraNome" TEXT NOT NULL,
    CONSTRAINT "Registros_marketplaceNome_fkey" FOREIGN KEY ("marketplaceNome") REFERENCES "Marketplaces" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registros_calculadoraNome_fkey" FOREIGN KEY ("calculadoraNome") REFERENCES "Calculadoras" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Marketplaces" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Calculadoras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Marketplaces_nome_key" ON "Marketplaces"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Calculadoras_nome_key" ON "Calculadoras"("nome");
