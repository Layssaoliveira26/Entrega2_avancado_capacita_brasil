/*
  Warnings:

  - You are about to drop the column `disciplina` on the `Professor` table. All the data in the column will be lost.
  - Added the required column `disciplinaId` to the `Boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplinaId` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boletim" ADD COLUMN     "disciplinaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "disciplina",
ADD COLUMN     "disciplinaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
