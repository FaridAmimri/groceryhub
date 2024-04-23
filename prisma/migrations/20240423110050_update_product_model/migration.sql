/*
  Warnings:

  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - Added the required column `discount` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "title",
ADD COLUMN     "discount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "weight" DECIMAL(65,30) NOT NULL;
