import express, { Express } from 'express'; // const express = require('express');
import { getCreateUser, getHomePage, postCreateUserInfo, postDeleteUser } from '../controllers/user.controllers';
const router = express.Router();

const webRoutes = (app: Express) => { // khai bao 1 ham va dat ten: webRoutes
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUser);

    router.post("/create-user", postCreateUserInfo);

    router.post("/handle-delete-user/:id", postDeleteUser);

    app.use("/", router);
}

export default webRoutes;
