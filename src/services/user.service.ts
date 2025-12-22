import { prisma } from "../config/client";

const handleCreateUser = async (name: string, email: string, address: string) => {
    const createUser = await prisma.user.create({
        data: { username: name, password: email, address: address, accountType: "admin" }
    });
}

const getAllUser = async () => {
    const listUsers = await prisma.user.findMany();
    return listUsers;
}

const handleDeleteUser = async (id: string) => {
    const deleteUser = await prisma.user.delete({ where: { id: Number(id) } });
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    return user;
}

const updateUserById = async (id: string, name: string, email: string, address: string) => {
    const updateUser = await prisma.user.update({
        where: { id: Number(id) },
        data: { username: name, password: email, address: address }
    })
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }