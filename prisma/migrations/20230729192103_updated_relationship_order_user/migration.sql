/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Order_userId_key";

-- DropIndex
DROP INDEX "Payment_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");
