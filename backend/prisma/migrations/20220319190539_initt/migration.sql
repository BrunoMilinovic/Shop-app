-- DropForeignKey
ALTER TABLE `categories` DROP FOREIGN KEY `categories_CategoryId_fkey`;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
