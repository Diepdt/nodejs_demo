import express, { Express } from 'express'; // const express = require('express');
const router = express.Router();

const webRoutes = (app: Express) => { // khai bao 1 ham va dat ten: webRoutes
    router.get("/", (req, res) => { // khai bao ham callback vo danh
        res.render("home.ejs");
    });

    router.get("/Diepdt", (req, res) => {
        res.send("Hello Diepdt!");
    });

    app.use("/", router);
}

export default webRoutes;
