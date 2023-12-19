import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

console.log(process.cwd());

// express 앱 만들기
const app = express();
const logger = morgan("dev");

// express application의 view engine으로 pug를 설정(express 공식문서 app.set() 참조
app.set("view engine", "pug");
// view 파일들을 찾을 경로를 세팅
app.set("views", process.cwd() + "/src/views");

// middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true })); // form의 body를 js object로 인코딩해줌. 공식문서 참조

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 컨트롤러 전달
app.listen(PORT, handleListening);
