/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `categories` DROP FOREIGN KEY `categories_CategoryId_fkey`;

-- AlterTable
ALTER TABLE `product` MODIFY `desc` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `categories`;
