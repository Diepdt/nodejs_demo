import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";

const getHomePage = (req: Request, res: Response) => {
    res.render("home")
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