// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index.js");
const cors = require("cors");
const app = express();

app.use(cors(), express.json());
app.use("/api/v1", rootRouter);


app.listen(3000);
console.log("Server started on port 3000");