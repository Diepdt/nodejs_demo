import express, { Express } from 'express'; // const express = require('express');
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs");
    });

    router.get("/Diepdt", (req, res) => {
        res.send("Hello Diepdt!");
    });

    app.use("/", router);
}

export default webRoutes;
