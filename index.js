const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const likeRouter = require("./routers/like");
const parkRouter = require("./routers/park");
const reviewRouter = require("./routers/review");

const app = express();
app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/like", likeRouter);
app.use("/park", parkRouter);
app.use("/review", reviewRouter);

// Listen for connections on specified port (default is port 4000)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
