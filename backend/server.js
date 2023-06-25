const express = require("express");
const dotenv = require("dotenv");

const connectDataBase = require("./db/Database");
const app = require("./app");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

dotenv.config({ path: "backend/.env" });

// connectDataBase();


//------Deployment-----------------------------------------------
const __dirname1 = path.resolve();
console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/pergolarooms/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname1, "pergolarooms", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running..");
    });
}
//----------------------------------------------------------------

app.use(notFound); //wrong end point err
app.use(errorHandler); //all other errors

const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
});