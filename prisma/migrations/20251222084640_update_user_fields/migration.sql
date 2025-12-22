/*
  Warnings:

  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(255) NOT NULL,
    MODIFY `fullName` VARCHAR(255) NULL,
    MODIFY `address` VARCHAR(255) NULL,
    MODIFY `phone` VARCHAR(255) NULL,
    MODIFY `avatar` VARCHAR(255) NULL;
