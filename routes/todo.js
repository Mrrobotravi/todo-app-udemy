const express = require("express");
const router = express.Router();
const todo = require("../controller/todo")

router.get("/",todo.homepagetodo );

router.get("/add-todo", todo.addtodoPageController);

router.get("/update-todo", todo.updatetodoPageController );

router.get("/delete-todo", todo.deletetodoPageControoler);

router.post("/add-todo", todo.addtodController);

router.post("/update-todo/:id",todo.updateController)

router.get("/confirm-delete" ,todo.deletetodoController)


module.exports = router;
