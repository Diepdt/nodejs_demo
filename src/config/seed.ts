import { prisma } from "./client";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    if (countUser > 0) {
        console.log("Already init data!");
    } else {
        await prisma.user.createMany({
            data: [
                {
                    username: "Diepdt",
                    password: "123456",
                    accountType: "admin"
                }, {
                    username: "Datnv",
                    password: "12345",
                    accountType: "admin"
                }
            ]
        })
    }
}

export default initDatabase;