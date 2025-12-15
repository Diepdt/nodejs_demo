import express, { Express } from 'express'; // const express = require('express');
import { getCreateUserPage, getHomePage } from '../controllers/user.controllers';
const router = express.Router();

const webRoutes = (app: Express) => { // khai bao 1 ham va dat ten: webRoutes
    router.get("/", getHomePage)

    router.get("/create-user", getCreateUserPage)

    app.use("/", router);
}

export default webRoutes;
