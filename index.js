const app = require("./app")

const PORT = process.env.PORT || 9000

//listen server
app.listen(PORT, () => {
    console.log(`server in running on port ${PORT}`)
});

