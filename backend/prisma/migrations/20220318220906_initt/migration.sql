/*
  Warnings:

  - Added the required column `color` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `desc` VARCHAR(191) NOT NULL,
    ADD COLUMN `img` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `size` VARCHAR(191) NOT NULL;
