import { prisma } from "../config/client";
import getConnectionDatabase from "../config/database";

const handleCreateUser = async (name: string, email: string, address: string) => {
    const createUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })
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
        data: { name: name, email: email, address: address }
    })
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }