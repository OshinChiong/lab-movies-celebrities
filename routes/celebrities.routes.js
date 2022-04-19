// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const express = require("express");
const Celebrity = require("../models/Celebrity.model");
// all your routes here

router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });
  
  router.post("/create", (req, res, next) => {
    Celebrity.create({ ...req.body })
      .then(function (results) {
        res.redirect("/celebrities");
      })
      .catch(function (error) {
        res.redirect("/celebrities/new-celebrity");
      });
  });
  



module.exports = router;