import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    // get all user from database
    const users = await getAllUser();

    // render homepage
    res.render("home", { users: users });
}

const getCreateUserPage = (req: Request, res: Response) => {
    res.render("create-user")
}

const postCreateUserInfo = (req: Request, res: Response) => {
    const { name, email, address } = req.body
    // handleCreateUser
    handleCreateUser(name, email, address)

    res.redirect("/")
}

export { getHomePage, getCreateUserPage, postCreateUserInfo }