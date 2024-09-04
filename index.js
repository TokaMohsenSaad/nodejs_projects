// const express = require("express");
// const app = express();
// const mvcRoutes = require("./routes/mvcRoutes.js");
// app.set("view engine", "pug");

// const port = 8000;
// app.use("/", mvcRoutes);
// app.listen(port);

//desing with PUG tempalte [tialwind, bootstrap]
//shared layout pug tempalte
//send javaScript code with ur view

const express = require("express");
const app = express();
const mvcRoutes = require("./routes/mvcRoutes.js");

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true })); // Parse form data

const port = 8081;
app.use("/", mvcRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
