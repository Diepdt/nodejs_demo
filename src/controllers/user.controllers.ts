import { Request, Response } from "express";
import { getAllUser, handleCreateUser, handleDeleteUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    // get all user from database
    const users = await getAllUser();

    // render homepage
    res.render("home", { users: users });
}

const getCreateUser = (req: Request, res: Response) => {
    res.render("create-user")
}

const postCreateUserInfo = async (req: Request, res: Response) => {
    const { name, email, address } = req.body;

    // handleCreateUser
    await handleCreateUser(name, email, address);

    res.redirect("/");
}

const postDeleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    // handleDeleteUser
    await handleDeleteUser(id);

    res.redirect("/");
}

export { getHomePage, getCreateUser, postCreateUserInfo, postDeleteUser }