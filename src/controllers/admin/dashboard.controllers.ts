import { Request, Response } from "express";
import { getAllUser } from "../../services/user.service";

const getDashboardPage = async (req: Request, res: Response) => {
    res.render("admin/dashboard/show.ejs");
}

const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    res.render("admin/user/show.ejs", { users: users });
}

const getAdminProductPage = async (req: Request, res: Response) => {
    res.render("admin/product/show.ejs");
}

const getAdminOrderPage = async (req: Request, res: Response) => {
    res.render("admin/order/show.ejs");
}

export { getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage };