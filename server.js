const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");

ejs.delimiter = "?";

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
