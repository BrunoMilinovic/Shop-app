/*
  Warnings:

  - You are about to drop the column `color` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `color`,
    DROP COLUMN `desc`,
    DROP COLUMN `img`,
    DROP COLUMN `price`,
    DROP COLUMN `size`;
