import express from "express";
import morgan from "morgan";

const PORT = 4000;

// express 앱 만들기
const app = express();
const logger = morgan("dev");
app.use(logger);

// 라우터를 정의
const globalRouter = express.Router();

// 라우터 내부에서 사용할 컨트롤러를 정의
const handleHome = (req, res) => res.send("Home");

// request listening
globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit user");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 컨트롤러 전달
app.listen(PORT, handleListening);
