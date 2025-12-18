import express, { Express } from 'express'; // const express = require('express');
import { getCreateUser, getHomePage, getUserInfo, postCreateUserInfo, postDeleteUser } from '../controllers/user.controllers';
const router = express.Router();

const webRoutes = (app: Express) => { // khai bao 1 ham va dat ten: webRoutes
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUser);

    router.post("/create-user", postCreateUserInfo);

    router.post("/handle-delete-user/:id", postDeleteUser);

    router.get("/handle-view-user/:id", getUserInfo);

    app.use("/", router);
}

export default webRoutes;
