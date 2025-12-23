import express, { Express } from 'express'; // const express = require('express');
import { getCreateUser, getHomePage, getUserInfo, postCreateUserInfo, postDeleteUser, updateUserInfo } from '../controllers/user.controllers';
import { getDashboardPage } from '../controllers/admin/dashboard.controllers';
const router = express.Router();

const webRoutes = (app: Express) => { // khai bao 1 ham va dat ten: webRoutes
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUser);

    router.post("/create-user", postCreateUserInfo);

    router.post("/handle-delete-user/:id", postDeleteUser);

    router.get("/handle-update-user/:id", getUserInfo);

    router.post("/handle-update-user/:id", updateUserInfo);

    // admin
    router.get("/admin", getDashboardPage);

    app.use("/", router);
}

export default webRoutes;
