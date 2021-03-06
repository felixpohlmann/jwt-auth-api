const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

//routes
const authRouter = require("./routes/auth.router");
app.use("/api/auth", authRouter);

const userRouter = require("./routes/user.router");
app.use("/api/user", userRouter);

//controllers
const dbController = require("./controllers/db.controller");

app.get("/", (req, res) => {
  res.send("TODO-API v1.0").end();
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server now listening in port ${PORT}`);
});

//db init
dbController.connect();
