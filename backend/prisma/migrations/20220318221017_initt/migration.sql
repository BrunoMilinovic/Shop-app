-- AlterTable
ALTER TABLE `product` MODIFY `desc` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `NewCategories` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `CategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
