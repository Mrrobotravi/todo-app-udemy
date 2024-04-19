const moment = require("moment");
const Todo = require("../module/Todo");

const homepagetodo = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        res.locals.moment = moment;
        res.render("index", { title: "List todo", todos });
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

const addtodoPageController = (req, res, next) => {
    try {
        res.render("addTodo", { title: "Add todo" });
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

const updatetodoPageController = async (req, res, next) => {
    try {
        const { id } = req.query;
        const todo = await Todo.findById(id);

        res.render("updateTodo", { title: "Update todo", todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletetodoPageControoler = (req, res, next) => {
    try {
        const {id} = req.query;
        res.render("deleteTodo", { title: "Delete todo" , id });
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

const addtodController = async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
        const newTodo = new Todo({ title, desc });
        await newTodo.save();
        res.redirect("/");
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}

const updateController = async(req ,res, next) =>{
    try {
        const {id} = req.params;
        const {title , desc} = req.body
         const todo = await Todo.findById(id);
          if(!todo){
            return res.status(400).json({message :"Todo is not found"})
          }

          todo.title = title;
          todo.desc = desc;

         await todo.save();
         res.redirect("/")
    } catch (error) {
        res.status(500).json({message :error.message})
    }
}

const deletetodoController = async(req ,res, next) => {
    try {
    const {id , confirm} = req.query;
    if(confirm == "yes"){
        await Todo.findByIdAndDelete(id);
    }
      res.redirect("/")
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


module.exports = {
    homepagetodo,
    addtodoPageController,
    updatetodoPageController,
    deletetodoPageControoler,
    addtodController,
    updateController,
    deletetodoController
}