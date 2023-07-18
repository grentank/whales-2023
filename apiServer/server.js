const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const apiTodosRouter = require("./routes/apiTodosRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.use("/api/v1/auth", authRouter);
app.use("/api/v1/todos", apiTodosRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
