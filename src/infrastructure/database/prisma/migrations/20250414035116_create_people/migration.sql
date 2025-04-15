-- CreateTable
CREATE TABLE `People` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,

    UNIQUE INDEX `People_age_key`(`age`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;