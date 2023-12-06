import express from "express";
import morgan from "morgan";

const PORT = 4000;

// express 앱 만들기
const app = express();

const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("Home");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 컨트롤러 전달
app.listen(PORT, handleListening);
